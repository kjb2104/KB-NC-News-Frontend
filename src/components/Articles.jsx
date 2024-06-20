import {useEffect, useState} from "react"
import  { getArticles } from "../utils/api";
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import styles from '../Articles.module.css'

const Articles = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [articles, setArticles] = useState([])
    let [searchParams, setSearchParams] = useSearchParams('');

const topicQuery = searchParams.get("topic")



useEffect(() => {
    setIsLoading(true)
    getArticles(topicQuery).then(({articles}) => {
        setArticles(articles)
        setIsLoading(false)
}) }, [topicQuery])


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