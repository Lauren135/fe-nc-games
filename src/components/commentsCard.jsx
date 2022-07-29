import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InputComment from "./inputComment";

export default function CommentsCard({ setIsOpen }) {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://my-be-nc-games.herokuapp.com/api/reviews/${review_id}/comments`
      )
      .then((res) => {
        setComments(res.data.comments);
        setIsLoading(false);
      });
  }, [review_id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="comments-card-container">
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <span className="comment-author">User:</span>
            <span className="comment-author-name">{comment.author} - </span>
            <span className="comment-body">{comment.body}</span>
            <span className="line"></span>
          </div>
        );
      })}
      <InputComment />
      <button
        className="hide-comments"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Hide Comments
      </button>
    </div>
  );
}
