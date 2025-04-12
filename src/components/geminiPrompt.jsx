// src/components/LinkInput.jsx
import React, { useState } from "react";
import { generatePrompts } from "../api/gemini.jsx";

const GeminiPrompt = () => {
  const [geminiOutput, setGeminiOutput] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleGeminiTest = async () => {
    if (!prompt.trim()) {
      setGeminiOutput("Please enter a prompt");
      return;
    }

    try {
      setGeminiOutput("Generating...");
      const response = await generatePrompts(prompt);
      setGeminiOutput(response);
    } catch (error) {
      setGeminiOutput("❌ Error: " + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Gemini AI Prompt</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          className="w-full h-32 p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
        <button
          onClick={handleGeminiTest}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Generate Response
        </button>
        {geminiOutput && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Response:</h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-auto max-h-96 text-gray-700">
              {geminiOutput}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiPrompt;
