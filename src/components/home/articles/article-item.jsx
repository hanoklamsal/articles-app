import React from 'react'
import { useNavigate } from 'react-router-dom';

const ArticleItem = ({article}) => {
    const navigate=useNavigate();
    console.log(article);
    const articleItemClickHandler = (article) => {
      localStorage.setItem('selectedArticle',JSON.stringify(article))
      navigate(`/article/${article.id}`)
    }
    return (
      <div className="article-item" key={article.id}>
        <div className="article-image">
          <img src={article.imageUrl} alt="article-image" />
        </div>
        <p className="article-posted-date">{article.date}</p>
        <h4 className="article-title" onClick={()=>articleItemClickHandler(article)}>{article.title}</h4>
        <p className="article-body">{article.content}</p>
      </div>
    );
  };

export default ArticleItem