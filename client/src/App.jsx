import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Results from "./pages/Results";
import BuyCredits from "./pages/BuyCredits";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Results />} />
        <Route path="/buy" element={<BuyCredits />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
