import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleReview() {
  const { review_id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://my-be-nc-games.herokuapp.com/api/reviews/${review_id}`)
      .then((res) => {
        setReviews(res.data.reviews);
        setIsLoading(false);
      });
  }, [review_id]);

  return isLoading ? (
    <p>Loading...</p>
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
          </div>
        );
      })}
    </div>
  );
}
