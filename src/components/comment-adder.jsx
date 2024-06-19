import { useState } from "react";

import { postCommentByArticleId } from "../utils/api";

import { useContext } from "react";

import { UserContext } from "./UserContext";

const CommentAdder = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");

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

    setComments((comments) => {
        return [body, ...comments];
      });

      setNewComment("");
    postCommentByArticleId(article_id, body).then((newCommentFromApi) => {


      setComments((comments) => {
        comments.shift()
        return [newCommentFromApi, ...comments];
      })
      alert("Succesfully added comment :)")
    }).catch((err) => {
        console.log(err)
    })
  };

  return (
    <form className="Comment_Adder" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Add Comment</label>
      <textarea
        id="newComment"
        multiline="true"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button type="submit" disabled={newComment.length === 0}>Add comment</button>
    </form>
  );
};

export default CommentAdder;
