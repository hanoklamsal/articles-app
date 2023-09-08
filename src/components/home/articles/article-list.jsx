import "./article.css";
import { useNavigate } from 'react-router-dom';

function ArticleList({ items }) {
  const navigate = useNavigate();
  const articleItem = (item) => {
    const articleItemClickHandler = (item) => {
      localStorage.setItem('selectedArticle',JSON.stringify(item))
      navigate(`/article/${item.id}`)
    }
    return (
      <div className="article-item" key={item.id}>
        <div className="article-image">
          <img src={item.imageUrl} alt="article-image" />
        </div>
        <p className="article-posted-date">{item.date}</p>
        <h4 className="article-title" onClick={()=>articleItemClickHandler(item)}>{item.title}</h4>
        <p className="article-body">{item.content}</p>
      </div>
    );
  };
  return <div className="article-list">{items.map(articleItem)}</div>;
}

export default ArticleList;
