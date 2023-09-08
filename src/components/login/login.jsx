import React from 'react';
import LoginForm from './login-form';
import './login-form.css';
import '../../app.css';

function Login() {
  return (
    <div className="login-page-container">
    <div className="login-page-image-container">
      <div className="top">
        <h4>SkillupAfrica Blog</h4>
      </div>
      <div className="bottom">
        <p>The Ancient city of Rome and the history of the great city.</p>
        <h2>Oliver Junior</h2>
        <h6>Lead Writer, SkillupAfrica</h6>
      </div>
    </div>
    <LoginForm />
  </div>
  )
}

export default Login