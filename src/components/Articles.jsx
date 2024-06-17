import {useEffect, useState} from "react"
import  { getArticles } from "../utils/api";


const Articles = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [articles, setArticles] = useState([])

useEffect(() => {
    setIsLoading(true)
    getArticles().then(({articles}) => {
        setArticles(articles)
        setIsLoading(false)
}) }, [])


if(isLoading){
    return <p className="Loading">Loading...</p>
}

return (
    <ol className="Article_list">
        {articles.map((article) => (
            <li key={article.article_id}>
                <h1>{article.title}</h1>
                <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
                <p>{article.body}</p>
                <img src={article.article_img_url}/>
                <p>Comments: {article.comment_count}</p>
                </li>
        ))}
    </ol>
)
}

export default Articles