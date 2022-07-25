import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/header";
import Reviews from "./components/reviews";
import Navigation from "./components/navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Reviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
