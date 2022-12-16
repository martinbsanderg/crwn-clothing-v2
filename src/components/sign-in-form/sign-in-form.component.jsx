import { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser  } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password or user name");
          break;
        case "auth/user-not-found":
          alert("Wrong password or user name");
          break;
        default:
          console.log(error);
      }
      // if(error.code==="auth/user-not-found"){
      //   alert("Wrong password or user name")
      // }console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          required
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          required
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={signInWithGoogleUser}
            buttonType="google"
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
