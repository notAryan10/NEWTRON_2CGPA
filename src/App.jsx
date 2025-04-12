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
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-purple-100 dark:from-black dark:to-purple-900 transition-colors duration-300">
        <Navbar />
        <main className="flex-1 pt-8">
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