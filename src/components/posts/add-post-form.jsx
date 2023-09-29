import React from "react";
import { useState } from "react";

function AddPostForm({closeModal}) {
  const [newArticle, setNewArticle] = useState({
    title: "",
    imageUrl: "",
    content: "",
  });



  const postHandler = (e) => {
    e.preventDefault();
    const id = newArticlesData.length + 1 + "";
    console.log(typeof id);
    const newArticleData = {
      id: id,
      title: newArticle.title,
      imageUrl: newArticle.imageUrl,
      content: newArticle.content,
    };
    newArticlesData.push(newArticleData);
    localStorage.setItem("articlesData", JSON.stringify(newArticlesData));
    console.log(newArticlesData);
    closeModal();
  };
  const newArticlesData =
    JSON.parse(localStorage.getItem("articlesData")) || [];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Post Your Article</h2>
          <span className="close" >
            &times;
          </span>
        </div>

        <form className="post-article-form">
          <input
            placeholder="Blog Title"
            type="text"
            required
            name="title"
            defaultValue={newArticle.title}
            onBlur={handleInputChange}
          />
          <input
            placeholder="Image URL"
            type="text"
            required
            name="imageUrl"
            defaultValue={newArticle.imageUrl}
            onBlur={handleInputChange}
          />
          <textarea
            placeholder="Blog Content"
            required
            name="content"
            defaultValue={newArticle.content}
            onBlur={handleInputChange}
          ></textarea>
          <button className="postHandler" onClick={postHandler}>
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPostForm;
