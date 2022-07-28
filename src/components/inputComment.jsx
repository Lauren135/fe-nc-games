import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./context/userContext";
import axios from "axios";

export default function InputComment() {
  const { review_id } = useParams();
  const user = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");
  const [addedComment, setAddedComment] = useState([]);
  const [err, setError] = useState(null);

  function addCommentHandler(e) {
    e.preventDefault();
    const commentData = { username: user, body: commentBody };
    axios
      .post(
        `https://my-be-nc-games.herokuapp.com/api/reviews/${review_id}/comments`,
        commentData
      )
      .then((response) => {
        setAddedComment(() => {
          const newArray = [...addedComment];
          newArray.push(response.data.comment);
          return newArray;
        });
      })
      .catch((err) => {
        setError(err);
      });
    setCommentBody("");
  }

  if (err) {
    return <p>{err}</p>;
  }

  return (
    <div className="post-comment">
      {addedComment.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <span className="comment-author">User:</span>
            <span className="comment-author-name">{comment.author} - </span>
            <span className="comment-body">{comment.body}</span>
            <span className="line"></span>
          </div>
        );
      })}
      <form id="form" onSubmit={addCommentHandler}>
        <fieldset>
          <label htmlFor="comment-body-author">
            User: {user} - {""}
          </label>
          <input
            className="comment-body"
            type="text"
            onChange={(e) => {
              setCommentBody(e.target.value);
            }}
            value={commentBody}
          ></input>
          <button id="add-comment">Add Comment</button>
        </fieldset>
      </form>
    </div>
  );
}
