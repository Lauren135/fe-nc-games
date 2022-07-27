import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header";
import Reviews from "./components/reviews";
import Navigation from "./components/navigation";
import SingleReview from "./components/singleReview";

function App() {
  const [selectCategory, setSelectCategory] = useState("");
  const [reviewCategories, setReviewCategories] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation setSelectCategory={setSelectCategory} />
        <Routes>
          <Route
            path="/categories/:category"
            element={
              <Reviews
                setSelectCategory={setSelectCategory}
                selectCategory={selectCategory}
                setReviewCategories={setReviewCategories}
                reviewCategories={reviewCategories}
              />
            }
          />
          <Route
            path="/"
            element={
              <Reviews
                setSelectCategory={setSelectCategory}
                selectCategory={selectCategory}
                setReviewCategories={setReviewCategories}
                reviewCategories={reviewCategories}
              />
            }
          />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
