import { useState, useEffect } from 'react';

interface FullTypewriterProps {
  fullText: string;
  highlightWords: { word: string; className: string }[];
  speed?: number;
}

function FullTypewriter({ fullText, highlightWords, speed = 100 }: FullTypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, speed]);

  const renderTextWithHighlights = (text: string) => {
    let processedText = text;
    let parts = [{ text: processedText, isHighlighted: false, className: '' }];

    highlightWords.forEach(({ word, className }) => {
      const newParts: typeof parts = [];
      
      parts.forEach(part => {
        if (!part.isHighlighted && part.text.includes(word)) {
          const splitParts = part.text.split(word);
          for (let i = 0; i < splitParts.length; i++) {
            if (splitParts[i]) {
              newParts.push({ text: splitParts[i], isHighlighted: false, className: '' });
            }
            if (i < splitParts.length - 1) {
              newParts.push({ text: word, isHighlighted: true, className });
            }
          }
        } else {
          newParts.push(part);
        }
      });
      
      parts = newParts;
    });

    return parts.map((part, index) => (
      part.isHighlighted ? (
        <span key={index} className={part.className}>
          {part.text}
        </span>
      ) : (
        <span key={index}>{part.text}</span>
      )
    ));
  };

  return (
    <span>
      {renderTextWithHighlights(displayedText)}
      {currentIndex < fullText.length && <span className="animate-pulse">|</span>}
    </span>
  );
}

export default FullTypewriter;