import React from "react";
import '../../app.css';
import RegistrationForm from "./registration-form";

function LandingPage() {
  
  return (
    <div className="landing-page-container">
      <div className="landing-page-image-container">
        <div className="top">
          <h4>SkillupAfrica Blog</h4>
        </div>
        <div className="bottom">
          <p>The Ancient city of Rome and the history of the great city.</p>
          <h2>Oliver Junior</h2>
          <h6>Lead Writer, SkillupAfrica</h6>
        </div>
      </div>
      <RegistrationForm />
    </div>
  );
}

export default LandingPage;
