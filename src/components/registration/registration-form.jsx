import React, { useState, useEffect } from "react";
import "./registration-form.css";
import google_logo from "../../assets/images/google-logo.png";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

function RegistrationForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    pwd: "",
    cnf_pwd: "",
  });
  const [pwdFormatErrorMsg, setPwdFormatErrorMsg] = useState("");
  const [pwdErrorMessage, setPwdErrorMessage] = useState("");

  const navigate = useNavigate();
  const storedUserData = localStorage.getItem("userData");
  let userList = storedUserData ? JSON.parse(storedUserData) : [];

  const createAccountHandler = (e) => {
    e.preventDefault();

    if (userData.pwd !== userData.cnf_pwd) {
      setPwdErrorMessage("Passwords do not match.");
    } else {
      const newUser = {
        name: userData.name,
        email: userData.email,
        pwd: userData.pwd,
        cnf_pwd: userData.cnf_pwd,
      };
      userList.push(newUser);
      localStorage.setItem("userData", JSON.stringify(userList));
      navigate("/login");
    }
  };

  const handlePwdChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
    if (userData.pwd.length >= 1) {
      if (!passwordPattern.test(userData.pwd)) {
        setPwdFormatErrorMsg(
          "Password should contain a uppercase, a lowercase, a number and a special character"
        );
      } else {
        setPwdFormatErrorMsg("");
      }
    } else {
      setPwdFormatErrorMsg("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [user, setUser] = useState([]);
  // const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  // useEffect(
  //     () => {
  //         if (user) {
  //             axios
  //                 .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
  //                     headers: {
  //                         Authorization: `Bearer ${user.access_token}`,
  //                         Accept: 'application/json'
  //                     }
  //                 })
  //                 .then((res) => {
  //                     setProfile(res.data);
  //                 })
  //                 .catch((err) => console.log(err));
  //         }
  //     },
  //     [ user ]
  // );
  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    navigate('/login')
  }

  return (
    <div className="create-account-form-container">
      <form className="form" onSubmit={createAccountHandler}>
        <h2 className="form-heading">Create an Account</h2>
        <h4 className="form-sub-heading">
          Let’s start a journey to great articles
        </h4>
        <div className="form-input">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            minLength={5}
            required
          />
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
            placeholder="Password"
            onBlur={handlePwdChange}
            required
          />
          {pwdFormatErrorMsg && (
            <p className="password-format-mismatch">{pwdFormatErrorMsg}</p>
          )}
          <input
            type="password"
            name="cnf_pwd"
            placeholder="Confirm Password"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <p className="password-mismatch">{pwdErrorMessage}</p>
        </div>
        <button className="btn1" type="submit">
          Create an Account
        </button>
      </form>
      <button className="btn2" onClick={login}>
        <img src={google_logo} alt="google-logo" />
        Sign up with Google
      </button>
      <p style={{marginTop:'40px'}}>
        Already have an account?
        <a style={{textDecoration:'underline'}} onClick={onSignIn }> Log In?</a>
      </p>
    </div>
  );
}
export default RegistrationForm;
