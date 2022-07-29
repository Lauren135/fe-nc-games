import { useState, useEffect } from "react";

export default function SortBy({ reviewList, setReviewList }) {
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        votes: "votes",
        comment_count: "comment_count",
      };
      const sortProperty = types[type];
      const sorted = [...reviewList].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setReviewList(sorted);
    };

    sortArray(sortBy);
  }, [sortBy]);

  return (
    <div className="filters-container">
      <label htmlFor="sort-by">Sort-By:</label>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value=""></option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </select>
    </div>
  );
}
