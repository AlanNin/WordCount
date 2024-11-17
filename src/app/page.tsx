"use client";

import { useState, useCallback } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const countWords = useCallback((text: string) => {
    const trimmedText = text.trim();
    const words = trimmedText === "" ? [] : trimmedText.split(/\s+/);
    return words.length;
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    setWordCount(countWords(newText));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Word Counter
        </h1>
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <div className="mt-4 text-center">
          <p className="text-xl font-semibold text-gray-700">
            Word Count: <span className="text-blue-600">{wordCount}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
