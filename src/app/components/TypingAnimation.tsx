"use client"
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  shouldLoop?: boolean;
}

const TypingAnimation = ({ text, speed = 50, className = '', shouldLoop = false }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const typeText = () => {
      if (displayText.length < text.length) {
        setDisplayText(text.slice(0, displayText.length + 1));
        timeout = setTimeout(typeText, speed);
      } else {
        if (shouldLoop) {
          // Start erasing after a pause when looping is enabled
          setTimeout(() => {
            setIsTyping(false);
            eraseText();
          }, 2000);
        }
      }
    };

    const eraseText = () => {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
        timeout = setTimeout(eraseText, speed / 2);
      } else {
        // Start typing again after a pause
        setTimeout(() => {
          setIsTyping(true);
          typeText();
        }, 1000);
      }
    };

    if (isTyping) {
      typeText();
    }

    return () => clearTimeout(timeout);
  }, [displayText, text, speed, isTyping, shouldLoop]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
