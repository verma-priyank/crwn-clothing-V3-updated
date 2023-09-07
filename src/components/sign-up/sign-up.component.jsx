import {
  createAuthUserWithEmailAndPassword,
  createDocumentFromUserAuth,
} from "../../utils/firebase/firebase.utils";
import { useState  } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up.styles.scss"
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const SignUp = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  
  const { displayName, email, password, confirmpassword } = formField;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
   
  };
 
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmpassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        
        await createDocumentFromUserAuth(user, { displayName });
        setFormField(defaultFormFields);
      } catch (err) {
         alert(err.code)
       }
      
    } else {
      alert("password and Confirm password is not matching");
      return;
    }
  };

  return (
    <div className="sign-up-container">
    <h2>Don't have an account?</h2>
      <span>Sign up with Email and Password</span>

      <form onSubmit={handleSubmit}>
      
        <FormInput
          label ="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        
        <FormInput
        label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        
        <FormInput
        label = "Password" 
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

       
        <FormInput
        label = "Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmpassword"
          value={confirmpassword}
        />

        <Button  type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
