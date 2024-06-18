import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchArticleById, fetchCommentsForArticle } from '../utils/api';
import styles from '../SingleArticle.module.css'

const SingleArticle = (props) => {
console.log(props)
    const [article, setArticle] = useState([])
    const [comments, setComments] = useState([])
  const { article_id } = useParams(); 


  useEffect(() => {
    fetchArticleById(article_id).then((articleData) => {

      setArticle(articleData);
    });
  }, [article_id]);

 

  useEffect(() => {
    fetchCommentsForArticle(article_id).then((commentData) => {
        
      setComments(commentData);
    });
  }, [article_id]);



  return (
    <div className={styles.main}>
        <header>Article number {article_id}</header>
      <h2 className={styles.header}>{article.title}</h2>
      <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
                <p>{article.body}</p>
                <img className={styles.img}src={article.article_img_url}/>
                <p>Comments: {article.comment_count}</p>

                <h2>Comments</h2>
                <ul className={styles.Comment_list}>
        {comments.map((comment) => (
            <li key={comment.comment_id}>
               <p>Author: {comment.author}</p>
               <p>Date: {comment.created_at}</p>
               <p>Comment: {comment.body}</p>
               <p>Votes: {comment.votes}</p>
                </li>
))}
    </ul>
    </div>
  );
};

export default SingleArticle