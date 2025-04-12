import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx"
import ImageGenerator from "./components/imageGenerator.jsx";
import Home from "./components/Home.jsx";
import "./App.css";
import GeminiPrompt from "./components/geminiPrompt.jsx";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import ProtectedRoute from "./components/protectedRoute.jsx";
import { AuthProvider } from "./context/authContext.jsx";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-purple-100 dark:from-black dark:to-purple-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-1 pt-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/image-generator"
                element={
                  <ProtectedRoute>
                    <ImageGenerator />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/chatbot"
                element={
                  <ProtectedRoute>
                    <GeminiPrompt />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;