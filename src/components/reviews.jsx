import { useState, useEffect } from "react";

import axios from "axios";

import ReviewCard from "./reviewCard";
import Categories from "./categories";
import { useParams } from "react-router-dom";
import SortBy from "./sortBy";

export default function Reviews({
  selectCategory,
  setSelectCategory,
  setReviewCategories,
  reviewCategories,
}) {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://my-be-nc-games.herokuapp.com/api/reviews`, {
        params: { category },
      })
      .then((res) => {
        setReviewList(res.data.reviews);
        setIsLoading(false);
      });
  }, [selectCategory, category]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <Categories
        reviewCategories={reviewCategories}
        setReviewCategories={setReviewCategories}
        setSelectCategory={setSelectCategory}
        selectCategory={selectCategory}
      />
      <SortBy reviewList={reviewList} setReviewList={setReviewList} />
      <ul className="review-list">
        {reviewList.map((review) => {
          return (
            <li key={review.review_id}>
              <ReviewCard review={review} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
