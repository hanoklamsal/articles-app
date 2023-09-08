import React from "react";
import "./footer.css";
import fb_logo from '../../assets/images/fb-logo.png'
import twitter_logo from '../../assets/images/twitter-logo.png'
import insta_logo from '../../assets/images/insta-logo.png'
import youtube_logo from '../../assets/images/youtube-logo.png'

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <ul>
          <li>Home</li>
          <li>Articles</li>
          <li>SkillupAfrica Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <hr/>
      </div>
      <div className="social-media-links">
        <img src={fb_logo} alt="social-media-logo" />
        <img src={twitter_logo} alt="social-media-logo" />
        <img src={insta_logo} alt="social-media-logo" />
        <img src={youtube_logo} alt="social-media-logo" />
      </div>
    </div>
  );
}

export default Footer;
