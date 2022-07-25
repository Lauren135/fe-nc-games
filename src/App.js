import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header";
import Reviews from "./components/reviews";
import Navigation from "./components/navigation";

function App() {
  const [selectCategory, setSelectCategory] = useState("");
  const [categories, setCategories] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation setSelectCategory={setSelectCategory} />
        <Routes>
          <Route
            path="/"
            element={
              <Reviews
                categories={categories}
                setCategories={setCategories}
                setSelectCategory={setSelectCategory}
                selectCategory={selectCategory}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
