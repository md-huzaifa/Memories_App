import React, { useState } from "react";
import { Button } from "react-daisyui";
import { Link } from "react-router-dom";
import axios from 'redaxios';
import GoogleLogo from '../../assets/google-logo.png';
import FormInput from "../FormInput/FormInput";

const frontIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

type FormDataType = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
}

const initialFormData: FormDataType = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const Auth: React.FC = () => {

  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [formData,setFormData] = useState<FormDataType>(initialFormData);

  const switchMode = () => {
    setIsSignUp(prevState => !prevState)
  }

  const handleChange = ({target: {name,value},}:React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    })
  }

  const handleSubmit = () => {
    
  }

  return (
    <div className="mx-auto container flex items-center justify-evenly m-5">
      <div>details page</div>

      <div className="flex item-center">
        <div className="w-full pt-2 p-4">
          <div className="flex justify-around">
            <h1 className="normal-case font-semibold text-3xl text-amber-900">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h1>
            <Button color="info" variant="link" size="md" startIcon={frontIcon} >
              <Link to="/">Back Home</Link>
            </Button>
          </div>
          <div className="bg-white dark:bg-black shadow-lg p-8 my-2 rounded-md">
            <form onSubmit={handleSubmit}>
              {isSignUp && (
              <>
                <FormInput name="firstName" type="text" handleChange={handleChange} label="User Name" placeholder="Your first name" required={true} />
                <FormInput name="lastName" type="text" handleChange={handleChange} label="Last Name" placeholder="Your last name" required={true} />
              </>)}
              <FormInput name="email" type="email" handleChange={handleChange} label="Email" placeholder="youremail@xyz.com" required={true} />
              <FormInput name="password" type="password" handleChange={handleChange} label="Password" placeholder="Your password" required={true} />
              {isSignUp && (<>
                <FormInput name="confirmPassword" type="password" handleChange={handleChange} label="Confirm Password" placeholder="Confirm password" required={true} />   
              </>)}
                <Button type="submit"  color="primary" className="w-full my-2">{isSignUp ? 'Register' : 'Sign In'}</Button>
                <Button type="submit" color="success"  className="w-full my-2 hover:bg-emerald-500">{isSignUp ? 'Register with Google' : 'Sign In with Google'}<img src={GoogleLogo}/></Button>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="flex ">
                {isSignUp ? <p className="mr-2">Already have an account? </p> : <p>Don't have an account?</p>}
                {isSignUp ? <Button size="xs" variant="link" onClick={switchMode}>Sign In</Button> : <Button size="xs" variant="link" onClick={switchMode}>Sign Up</Button> }
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
