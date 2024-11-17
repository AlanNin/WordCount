"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

export default function FancyWordCounter() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const countWords = useCallback((text: string) => {
    const trimmedText = text.trim();
    const words = trimmedText === "" ? [] : trimmedText.split(/\s+/);
    return words.length;
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    setWordCount(countWords(newText));
    setCharCount(newText.length);
    setIsTyping(true);
  };

  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isTyping]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg p-8"
      >
        <div className="flex flex-col space-y-2 items-center mb-8">
          <h1 className="text-4xl font-bold text-center  text-white">
            Word Count
          </h1>
          <p className="text-center text-white">
            Una sencilla aplicación para contar de palabras 👻
          </p>
        </div>
        <div className="relative">
          <textarea
            className="w-full h-64 p-6 border-2 border-white border-opacity-50 rounded-lg outline-none border-white/25 bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-70 resize-none transition-all duration-300"
            placeholder="Start typing or paste your text here..."
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isTyping ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute bottom-4 right-4 w-4 h-4 bg-green-400 rounded-full"
          />
        </div>
        <div className="mt-8 flex justify-center space-x-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-2xl font-semibold text-white mb-2">Palabras</p>
            <motion.p
              className="text-4xl font-bold text-white"
              key={wordCount}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {wordCount}
            </motion.p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-2xl font-semibold text-white mb-2">Caracteres</p>
            <motion.p
              className="text-4xl font-bold text-white"
              key={charCount}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {charCount}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
