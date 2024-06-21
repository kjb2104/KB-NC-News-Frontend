import { useState } from "react";

import { postCommentByArticleId } from "../utils/api";

import { useContext } from "react";

import { UserContext } from "./UserContext";

import ErrorComponent from "./error-component";

import styles from "../commentadder.module.css";

const CommentAdder = ({ article_id, setComments, comments }) => {
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);
  const [hasPosted, setHasPosted] = useState(false)
  const { user } = useContext(UserContext);

  let date = new Date().toJSON();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setHasPosted(true)

    const body = {
      body: newComment,
      author: user.username,
      votes: 0,
      created_at: date,
    };

    if(newComment !== comments[0].body){

    setComments((comments) => {
      return [body, ...comments];
    });

    setNewComment("");
    postCommentByArticleId(article_id, body)
      .then((newCommentFromApi) => {
        setComments((comments) => {
          comments.shift();
          return [newCommentFromApi, ...comments];
        });
        alert("Succesfully added comment :)");
        setHasPosted(false)
      })
      .catch((err) => {
        setComments((comments) => {
          comments.shift();
          return [...comments];
        });
        setErr(err);
        setHasPosted(false)
        alert(`Something went wrong ): ${err.msg}`);
      });
    }

    else {
        setNewComment("")
        setHasPosted(false)
alert('You already posted this!')
    }
  
  }


  return (
    <form className={styles.Comment_Adder} onSubmit={handleSubmit}>
      <label className={styles.label}htmlFor="newComment">Post Comment</label>
      <br/>
      <textarea
        id="newComment"
        className={styles.newComment}
        multiline="true"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <br/>
      <button className={styles.submit} type="submit" disabled={newComment.length === 0 || hasPosted}>
        Add comment
      </button>
    </form>
  );
};

export default CommentAdder;
