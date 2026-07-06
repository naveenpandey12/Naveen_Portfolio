import { useEffect, useState } from "react";

const words = [
  "Frontend Developer",
  "React Developer",
  "UI Engineer",
  "JavaScript Developer",
];

function HeroTyping() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));

        if (displayText === currentWord) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));

        if (displayText === "") {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 45 : 90);

    return () => clearTimeout(timer);
  }, [displayText, deleting, wordIndex]);

  return (
    <h2 className="typing">
      {displayText}
      <span className="cursor">|</span>
    </h2>
  );
}

export default HeroTyping;