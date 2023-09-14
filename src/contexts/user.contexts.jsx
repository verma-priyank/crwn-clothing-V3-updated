
import { createContext, useState , useEffect } from "react";
import { onAuthStateChangedListener , createDocumentFromUserAuth } from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
    currentUser : null ,
    setCurrentUser : () => null 
   
}) ;

export const UserProvider = ({children}) => {

  useEffect(()=> {
    const unsubscribe = onAuthStateChangedListener( async (user)=>{
        if(user){
         const data =   await createDocumentFromUserAuth(user);
         console.log(data)
        }
        
       setCurrentUser(user)
    }) ;
    return unsubscribe ;
  } ,[])

 const [currentUser , setCurrentUser] = useState(null)
const value = {currentUser , setCurrentUser}
return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
}