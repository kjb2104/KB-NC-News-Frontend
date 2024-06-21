import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentAdder from "./comment-adder";
import {
  fetchArticleById,
  fetchCommentsForArticle,
  sendVoteByArticleId,
  removeVoteByArticleId,
  removeComment
} from "../utils/api";
import { useContext } from "react";
import ErrorComponent from "./error-component";
import { UserContext } from "./UserContext";
import styles from "../SingleArticle.module.css";

const SingleArticle = (props) => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setIsLoading] = useState(false)
  const [err, setErr] = useState(null);
  const [votes, setVotes] = useState(0);
 

  const { article_id } = useParams();
  const { user } = useContext(UserContext);


  useEffect(() => {

    setIsLoading(true)

    fetchArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setVotes(articleData.votes);
      setIsLoading(false)
    }).catch((err)=>{
      setErr(err.msg)
      setIsLoading(false)
    })
  }, [article_id]);



  useEffect(() => {
    fetchCommentsForArticle(article_id).then((commentData) => {
      setComments(commentData);
    }).catch((err)=>{
      setErr(err.msg)
      setIsLoading(false)
    })
  }, [article_id]);


  if(loading){
    return <p className="Loading">Loading...</p>
}

if (err) {
  return <ErrorComponent message={err} />;
}

  function handleClick() {
    setVotes((votes) => votes + 1);
    setErr(null);
    sendVoteByArticleId(article_id).catch((err) => {
      setVotes((votes) => votes - 1);
      setErr("Something went wrong ): please try again.");
    });
  }

  function handleDownVote() {
    setVotes((votes) => votes - 1);
    setErr(null);
    removeVoteByArticleId(article_id).catch((err) => {
      setVotes((votes) => votes + 1);
      setErr("Something went wrong ): please try again.");
    });
  }

  function handleDeletion(e){

const text = e.target.innerText

let comment_id = Number(text.slice(-3))


    removeComment(comment_id).then((result) =>{ if (result) { 
      const filteredComments =  comments.filter((commentToDelete) => { 
        return commentToDelete.comment_id !== comment_id
      }); 
  
      setComments([...filteredComments])
      alert("Succesfully deleted comment :)");
    } 
  }).catch((err) => {
    setErr(err)
    alert("Something went wrong ):, please try again.") 
  }); 


  }

  if (err) {
    return <ErrorComponent message={err} />;
  }

  return (
    <div className={styles.main}>
      <header>Article number {article_id}</header>
      <h2 className={styles.header}>{article.title}</h2>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>{article.body}</p>
      <img className={styles.img} src={article.article_img_url} />
      <section>
      <p>Comments: {article.comment_count}</p>
      <h2>Votes: {votes}</h2>
      <button className={styles.upvote} onClick={handleClick}>UpVote</button>
      <button className={styles.downvote}onClick={handleDownVote}>DownVote</button>
      <br/>
      </section>
    
      
      <h2>Comments</h2>
      <CommentAdder setComments={setComments} article_id={article_id} comments={comments}/>
      <ul className={styles.Comment_list}>

        {comments.map((comment) => {

         if(comment.author === user.username){

            return (
            <li key={comment.comment_id}>
            <p>Author: {comment.author}</p>
            <p>Date: {comment.created_at}</p>
            <p>Comment: {comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <button onClick={handleDeletion}>Delete Comment {comment.comment_id}</button>
          </li>)
         }
          else { return (
            <li key={comment.comment_id}>
            <p>Author: {comment.author}</p>
            <p>Date: {comment.created_at}</p>
            <p>Comment: {comment.body}</p>
            <p>Votes: {comment.votes}</p></li>
          )}
})}
      </ul>
    </div>
  )
};

export default SingleArticle;
