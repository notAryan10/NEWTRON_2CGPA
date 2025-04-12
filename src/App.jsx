import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import ImageGenerator from "./components/imageGenerator.jsx";
import Home from "./components/Home.jsx";
import "./App.css";
import GeminiPrompt from "./components/geminiPrompt.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/image-generator" element={<ImageGenerator />} />
            <Route path="/chatbot" element={<GeminiPrompt />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;