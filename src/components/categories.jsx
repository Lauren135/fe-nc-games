import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Categories({
  setSelectCategory,
  reviewCategories,
  setReviewCategories,
  selectCategory,
}) {
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://my-be-nc-games.herokuapp.com/api/categories`)
      .then((res) => {
        setReviewCategories(res.data.categories);
        setIsLoading(false);
      });
  }, [setReviewCategories]);

  function selectedCategoryHandler(event) {
    event.preventDefault();
    setSelectCategory(event.target.value);
    navigate(`/categories/${event.target.value}`);
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="filters-container">
      <label htmlFor="categories">Category:</label>
      <select
        name="categories"
        id="categories"
        value={selectCategory}
        onChange={selectedCategoryHandler}
      >
        <option value=""></option>
        {reviewCategories.map((category) => {
          const cat =
            category.slug.charAt(0).toUpperCase() + category.slug.slice(1);
          return (
            <option value={category.slug} key={category.slug}>
              {cat}
            </option>
          );
        })}
      </select>
    </div>
  );
}
