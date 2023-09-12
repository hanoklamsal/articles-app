import React from "react";
import ArticleList from "./article-list";
import { data } from "./articles-json-data";

function Article() {
  const articlesList = JSON.parse(localStorage.getItem("articlesData"))
  if (!articlesList) {
    localStorage.setItem("articlesData", JSON.stringify(data));
  }

  return (
    <div className="article-section">
      <h4 className="article-section-title">Latest Articles</h4>
      <hr />
      <ArticleList/>
      <button className="more-articles-btn">Load more articles</button>
    </div>
  );
}

export default Article;
