import { useEffect, useState } from "react";

export default function TypewriterText({
  text,
  className = "",
  typingSpeed = 100,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
}) {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeNextChar, typingSpeed);
        }
      };
      typeNextChar();
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeout);
  }, [text, typingSpeed, startDelay]);

  return (
    <span className={className}>
      {displayedText}
      <span className="inline-block w-2 h-4 bg-[#4ec9b0] ml-0.5 animate-pulse" />
    </span>
  );
}
