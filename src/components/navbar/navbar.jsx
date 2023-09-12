import React, { useState } from "react";
import "./navbar.css";
import fb_logo from "../../assets/images/fb-logo.png";
import twitter_logo from "../../assets/images/twitter-logo.png";
import insta_logo from "../../assets/images/insta-logo.png";
import youtube_logo from "../../assets/images/youtube-logo.png";

function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const postArticleButtonHandler = () => {
    setIsModalOpen(true);
  };
  const [newArticle, setNewArticle] = useState({
    title: "",
    imageUrl: "",
    content: "",
   
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const newArticlesData = JSON.parse(localStorage.getItem("articlesData")) || [] ;


  const postHandler = (e) => {
    e.preventDefault();
      const id= (newArticlesData.length +1 +'')
      console.log(typeof id)
    const newArticleData = {
      id:id,
      title:newArticle.title,
      imageUrl:newArticle.imageUrl,
      content:newArticle.content,
    };
    newArticlesData.push(newArticleData);
    localStorage.setItem("articlesData", JSON.stringify(newArticlesData));
    console.log(newArticlesData);
    closeModal();
  }

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
      <button onClick={postArticleButtonHandler} className="post-article-btn">
        Post your article
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Post Your Article</h2>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>

            <form className="post-article-form">
              <input placeholder="Blog Title" type="text" required name="title" defaultValue={newArticle.title} onBlur={handleInputChange}/>
              <input placeholder="Image URL" type="text" required name="imageUrl" defaultValue={newArticle.imageUrl} onBlur={handleInputChange}/>
              <textarea placeholder="Blog Content" required name="content" defaultValue={newArticle.content} onBlur={handleInputChange}></textarea>
              <button className="postHandler" onClick={postHandler}>Post</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
