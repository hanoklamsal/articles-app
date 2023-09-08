import React from "react";
import NavBar from "../navbar/navbar";
import "./article.css";
import { useParams } from "react-router-dom";
import { data } from "../home/articles/articles-json-data";

function Article() {
  const {id} = useParams();
  const clickedArticle=data.find((item) => item.id === id);

  return (
    <>
      <NavBar />
      <div className="article-container">
        <hr />
        <div className="article-header">
          <div className="avatar">{clickedArticle.author[0]}</div>
          <p className="author">{clickedArticle.author}</p>
          <p className="posted-date">posted on {clickedArticle.date}</p>
        </div>
        <img className="image-container" src={clickedArticle.imageUrl} alt="" />
        <h4 className="title">{clickedArticle.title}</h4>
        <p className="body">{clickedArticle.content}</p>
      </div>
    </>
  );
}

export default Article;
