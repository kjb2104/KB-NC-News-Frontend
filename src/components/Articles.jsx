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



return (
    <ul className={styles.Article_list}>
        {articles.map((article) => (
            <li key={article.article_id}>
                <h1>Click to Read:</h1>
                <Link to={"/articles/"+article.article_id}><p>{article.title}</p></Link>
                <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
                </li>
))}
    </ul>
)
}

export default Articles