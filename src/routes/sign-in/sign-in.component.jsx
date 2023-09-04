import SignUp from "../../components/sign-up/sign-up.component";
import {  signInWithGooglePopup , createDocumentFromUserAuth } from "../../utils/firebase/firebase.utils";
const SignIn = () =>{
     const logGoogleUser = async () =>{
        const {user}  = await signInWithGooglePopup();
       const userDocRef =  await createDocumentFromUserAuth(user)
       
     }


    return (
        <div>
        <h1>This is sign in page</h1>
        <button onClick={logGoogleUser}>Sign In With Google</button>
        <SignUp />
        </div>
    )
}

export default SignIn ;