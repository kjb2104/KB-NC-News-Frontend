import {useEffect, useState} from "react"
import  { getArticles } from "../utils/api";
import { useParams } from 'react-router-dom';
import SingleArticle from "./Single-Article";
import { Link } from 'react-router-dom'
import styles from '../Articles.module.css'

const Articles = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [articles, setArticles] = useState([])
    const { article_id } = useParams()

useEffect(() => {
    setIsLoading(true)
    getArticles().then(({articles}) => {
        setArticles(articles)
        setIsLoading(false)
}) }, [])


if(isLoading){
    return <p className="Loading">Loading...</p>
}

function handleClick(){

return (<h1>article</h1>)

}

return (
    <ol className={styles.Article_list}>
        {articles.map((article) => (
            <li key={article.article_id}>
                <h1>{article.title}</h1>
                <button onClick={handleClick}>Read Article</button>
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