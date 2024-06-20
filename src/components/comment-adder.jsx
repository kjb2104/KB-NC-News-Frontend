import { useState } from "react";

import { postCommentByArticleId } from "../utils/api";

import { useContext } from "react";

import { UserContext } from "./UserContext";

const CommentAdder = ({ article_id, setComments, comments }) => {
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);
  const { user } = useContext(UserContext);

  let date = new Date().toJSON();

  const handleSubmit = (event) => {
    event.preventDefault();

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
      })
      .catch((err) => {
        setComments((comments) => {
          comments.shift();
          return [...comments];
        });
        setErr(err);
        alert(`Something went wrong ): ${err.msg}`);
      });
    }

    else {
        setNewComment("")
alert('You already posted this!')
    }
  
  }

  return (
    <form className="Comment_Adder" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Add Comment</label>
      <textarea
        id="newComment"
        multiline="true"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button type="submit" disabled={newComment.length === 0}>
        Add comment
      </button>
    </form>
  );
};

export default CommentAdder;
