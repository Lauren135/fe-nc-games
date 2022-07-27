import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export default function SingleReview() {
  const { review_id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://my-be-nc-games.herokuapp.com/api/reviews/${review_id}`)
      .then((res) => {
        setReviews(res.data.reviews);
        setIsLoading(false);
      });
  }, [review_id]);

  function incrementLike(owner) {
    axios
      .patch(`https://my-be-nc-games.herokuapp.com/api/reviews/${review_id}`, {
        inc_votes: 1,
      })
      .catch((err) => {
        setError(err);
      });
    const updatedReview = reviews.map((review) => {
      if (review.owner === owner) {
        review.votes++;
      }
      return review;
    });
    setReviews(updatedReview);
  }

  function decrementLike(owner) {
    axios
      .patch(`https://my-be-nc-games.herokuapp.com/api/reviews/${review_id}`, {
        inc_votes: -1,
      })
      .catch((err) => {
        setError(err);
      });
    const updatedReview = reviews.map((review) => {
      if (review.owner === owner) {
        review.votes--;
      }
      return review;
    });
    setReviews(updatedReview);
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>could not execute action</p>
  ) : (
    <div className="review-card-container-single-review">
      {reviews.map((review) => {
        const cat =
          review.category.charAt(0).toUpperCase() + review.category.slice(1);
        return (
          <div key={review.review_id}>
            <h2>{review.title}</h2>
            <img
              className="single-review-img"
              src={review.review_img_url}
              alt={review.title}
            ></img>
            <span className="category-designer-container">
              <span className="single-review-category">Category:</span>
              <span className="category">{cat}</span>
              <span className="single-review-designer">Game Designer:</span>
              <span className="designer">{review.designer}</span>
            </span>
            <span>
              <span className="single-review-owner">User:</span>
              <span className="owner">{review.owner} -</span>
            </span>
            <span className="single-review-body">{review.review_body}</span>
            <div className="like-buttons">
              <button
                className="like-button"
                onClick={() => {
                  incrementLike(review.owner);
                }}
              >
                <AiFillLike />
              </button>
              <button
                className="dislike-button"
                onClick={() => {
                  decrementLike(review.owner);
                }}
              >
                <AiFillDislike />
              </button>
              <span className="likes">{review.votes}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
