import React, { useState } from "react";
import './registration-form.css'
import google_logo from "../../assets/images/google-logo.png";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    pwd: "",
    cnf_pwd: "",
  });

  const navigate = useNavigate();

  const [pwdErrorMessage, setPwdErrorMessage] = useState("");

  // Retrieve the array of user objects from local storage
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
            onChange={handleInputChange}
            required
          />
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
        <button className="btn2">
          <img src={google_logo} alt="google-logo" />
          Sign up with Google
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
