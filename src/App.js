import Home from "./routes/home/home.component";
import { useEffect } from "react";
import { onAuthStateChangedListener , createDocumentFromUserAuth } from "./utils/firebase/firebase.utils";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.actions";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
const App = () => {

const dispatch = useDispatch()
  useEffect(()=> {
    const unsubscribe = onAuthStateChangedListener( async (user)=>{
        
        if(user){
            await createDocumentFromUserAuth(user);
            
         
        }
        
       dispatch(setCurrentUser(user))
    }) ;
    return unsubscribe ;
  } ,[])
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path ="checkout" element ={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
