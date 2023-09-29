import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import google_logo from "../../assets/images/google-logo.png";

function LoginForm() {
  const [userData, setUserData] = useState({
    email: "",
    pwd: "",
  });
  const navigate = useNavigate();
  // const [pwdErrorMessage, setPwdErrorMessage] = useState("");
const userlist= JSON.parse(localStorage.getItem('userData'))

  const loginHandler = (e) => {
    e.preventDefault();
    const user= userlist.find((item) => item.email === userData.email);
    if (!user) {
      console.log("user not found")
    } 
    else {
         if(user.pwd==userData.pwd){
          navigate('/home')
    }
    else{
      console.log("password is incorrect")
    }
  };
}

  const goToLandingPage = (e) => {
    e.preventDefault()
      navigate('/');
    };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login-form-container">
        <button className="login-btn2">
          <img src={google_logo} alt="google-logo" />
          Sign up with Google
        </button>
      <form className="form" onSubmit={loginHandler}>
        <h2 className="form-heading">Welcome Back!</h2>
        <h4 className="form-sub-heading">
          Welcome back, please enter your details
        </h4>
        <div style={{textAlign:'center', marginTop:30}}>or</div>
        <div className="form-input">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="pwd"
            placeholder="Confirm Password"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="forgot-password-container"><a>Forgot Password?</a></div>
        <button className="btn1" type="submit">
          Login
        </button>
        <div className="create-a-link-container">Not registered yet?<a onClick={goToLandingPage}>Create an Account</a></div>
      </form>
    </div>
  );
  }


export default LoginForm;
