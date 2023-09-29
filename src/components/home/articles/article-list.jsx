import "./article.css";
import ArticleItem from "./article-item";


function ArticleList() {
  const articlesList = JSON.parse(localStorage.getItem("articlesData"));
  return (
  <div className="article-list">
   {articlesList && articlesList.map((item)=>{
    return (
    <ArticleItem article={item} key={item.id}/>
    )
  })}
  </div>
  )
}

export default ArticleList;
