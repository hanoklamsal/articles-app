import React from "react";
import "./navbar.css";
import fb_logo from '../../assets/images/fb-logo.png';
import twitter_logo from '../../assets/images/twitter-logo.png';
import insta_logo from '../../assets/images/insta-logo.png';
import youtube_logo from '../../assets/images/youtube-logo.png';

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo">Skillup Africa Blog</div>
      <div className="navigation-container">
        <ul className="nav-list">
          <li>Home</li>
          <li>Articles</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="navbar-social-media-container">
        <img src={fb_logo} alt="social-media-logo" />
        <img src={twitter_logo} alt="social-media-logo" />
        <img src={insta_logo} alt="social-media-logo" />
        <img src={youtube_logo} alt="social-media-logo" />
      </div>
      <button className="post-article-btn">Post your article</button>
    </div>
  );
}

export default NavBar;