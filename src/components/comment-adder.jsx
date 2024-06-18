import { useState } from "react";
// import { UserContext } from "./UserContext";
import { postCommentByArticleId } from "../utils/api";

const CommentAdder = ({setComments}) => {

    const [newComment, setNewComment] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault()

        postCommentByArticleId(newComment).then((newCommentFromApi) => {
            setNewComment('')

            setComments((comments) => {
                return[newCommentFromApi, comments]
             })
        })
    }

return(
    <form className="Comment_Adder" onSubmit={handleSubmit}>
        <label htmlFor="newComment">Add Comment</label>
        <textarea
        id="newComment"
        multiline="true"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button type="submit">Add comment</button>
        </form>
)



}

export default CommentAdder