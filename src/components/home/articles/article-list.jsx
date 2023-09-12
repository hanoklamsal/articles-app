import "./article.css";
import ArticleItem from "./article-item";


function ArticleList({items}) {
  const articlesList = JSON.parse(localStorage.getItem("articlesData"))
console.log(articlesList)
  return (
  <div className="article-list">
   {articlesList && articlesList.map((item)=>{
    return (
    <ArticleItem article={item}/>
    )
  })}
  </div>
  )
}

export default ArticleList;
