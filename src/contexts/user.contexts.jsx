
import { createContext, useState , useEffect, useReducer } from "react";
import { onAuthStateChangedListener , createDocumentFromUserAuth } from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
    currentUser : null ,
    setCurrentUser : () => null 
   
}) ;
const USER_ACTION_TYPE ={
  SET_CURRENT_USER : "SET_CURRENT_USER"
}

export const userReducer =(state , action) =>{
  const {type , payload} = action ;
  
  switch(type){
    case  USER_ACTION_TYPE.SET_CURRENT_USER :
       return {
          ...state ,
          currentUser : payload
       }
    default :
     console.log('error')

  }

}


export const UserProvider = ({children}) => {
  const INITIAL_STATE ={
    currentUser : null
  }
  const [{currentUser} , dispatch] = useReducer(userReducer , INITIAL_STATE )
  
  const setCurrentUser =(user) =>{
    dispatch({type:USER_ACTION_TYPE.SET_CURRENT_USER , payload : user})
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChangedListener( async (user)=>{
        
        if(user){
            await createDocumentFromUserAuth(user);
            
         
        }
        
       setCurrentUser(user)
    }) ;
    return unsubscribe ;
  } ,[])

//  const [currentUser , setCurrentUser] = useState(null)
const value = {currentUser , setCurrentUser}
return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
}