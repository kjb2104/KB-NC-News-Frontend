import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchArticleById } from '../utils/api';
import styles from '../SingleArticle.module.css'

const SingleArticle = () => {

    const [article, setArticle] = useState([])
  const { article_id } = useParams(); 


  useEffect(() => {
    fetchArticleById(article_id).then((articleData) => {
        console.log(articleData)
      setArticle(articleData);
    });
  }, [article_id]);

  return (
    <div className={styles.main}>
        <header className={styles.header}>Article number {article_id}</header>
      <h2>{article.title}</h2>
      <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
                <p>{article.body}</p>
                <img src={article.article_img_url}/>
                <p>Comments: {article.comment_count}</p>
    </div>
  );
};

export default SingleArticle