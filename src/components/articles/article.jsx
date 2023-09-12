import React from "react";
import NavBar from "../navbar/navbar";
import "./article.css";
import { useParams } from "react-router-dom";
import { data } from "../home/articles/articles-json-data";
import ArticleItem from "../home/articles/article-item";
import share_icon from '../../assets/images/share-icon.png';

function Article() {
  const { id } = useParams();
  const selectedArticle = data.find((item) => item.id === id);
  const selectedArticleCategories = selectedArticle.categories;
  const similarItems = data.filter((item) =>
    item.categories.some((i) => selectedArticleCategories.includes(i))
  );

  return (
    <>
      <NavBar />
      <div className="article-container">
        <hr />
        <div className="article-header">
          <div className="avatar">{selectedArticle.author[0]}</div>
          <p className="author">{selectedArticle.author}</p>
          <p className="posted-date">posted on {selectedArticle.date}</p>
          <button className="share-button"><p>Share</p> <img src={share_icon}/></button>
        </div>
        <img
          className="image-container"
          src={selectedArticle.imageUrl}
          alt=""
        />
        <h4 className="title">{selectedArticle.title}</h4>
        <p className="body">{selectedArticle.content}</p>
        <div>
          <h4 className="similar-articles-heading">Similar Articles</h4>
          <div className="similar-article-item">
          {similarItems && similarItems.map((item)=>{
    return (
    <ArticleItem article={item}/>
    )
  })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
