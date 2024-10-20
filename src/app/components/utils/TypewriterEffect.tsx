"use client";

import React, { useEffect, useState, useCallback } from "react";

interface TypewriterEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 1000,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleTyping = useCallback(() => {
    const currentWord = words[wordIndex];
    setText((prevText) => {
      if (isDeleting) {
        return prevText.slice(0, -1);
      } else {
        return currentWord.slice(0, prevText.length + 1);
      }
    });

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [words, wordIndex, isDeleting, text, pauseTime]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting, deletingSpeed, typingSpeed]);

  return <span className="text-2xl text-green-400">{text}</span>;
};

export default TypewriterEffect;