import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/context/userContext";

import Header from "./components/header";
import Reviews from "./components/reviews";
import Navigation from "./components/navigation";
import SingleReview from "./components/singleReview";
import InputComment from "./components/inputComment";
import CommentsCard from "./components/commentsCard";

function App() {
  const [selectCategory, setSelectCategory] = useState("");
  const [reviewCategories, setReviewCategories] = useState([]);
  const [user] = useState("jessjelly");
  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
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
            <Route
              path="/reviews/:review_id/comments"
              element={<CommentsCard />}
            />
            <Route
              path="/reviews/:review_id/comments"
              element={<InputComment />}
            />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
