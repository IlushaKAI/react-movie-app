import { Route, Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  // настроить pageRouter
  return (
    <>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
