import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header";
import Reviews from "./components/reviews";
import Navigation from "./components/navigation";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
