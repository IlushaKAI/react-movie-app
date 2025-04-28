import { Route, Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      {/* обернуть все в MovieProvider, когда настроим контекст */}
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="react-movie-app" element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
