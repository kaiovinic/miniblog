import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
