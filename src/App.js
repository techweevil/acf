import React from "react";
import Showcase from "./components/Body/Showcase";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Body/About";

const App = () => {
  return (
    <div className="bg-[#865747]">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Showcase />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Showcase />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
