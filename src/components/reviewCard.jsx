import { Link } from "react-router-dom";

export default function ReviewCard({ review }) {
  return (
    <div className="review-card-container">
      <span className="review-title">
        <Link to={`/reviews/${review.review_id}`}>{review.title}</Link>
      </span>
      <span className="review-body">{review.review_body}</span>
      <span className="review-category">Category: {review.category}</span>
      <div className="votes-comments">
        <span className="review-votes">Votes: {review.votes}</span>
        <span className="review-comments">
          Comments: {review.comment_count}
        </span>
      </div>
    </div>
  );
}
