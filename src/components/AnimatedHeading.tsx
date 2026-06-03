import { useEffect, useState } from "react";

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  initialDelay?: number;
  charDelay?: number;
  charDuration?: number;
};

export function AnimatedHeading({
  text,
  className = "",
  initialDelay = 200,
  charDelay = 30,
  charDuration = 500,
}: AnimatedHeadingProps) {
  const [animate, setAnimate] = useState(false);
  const lines = text.split("\n");

  useEffect(() => {
    const timer = window.setTimeout(() => setAnimate(true), initialDelay);
    return () => window.clearTimeout(timer);
  }, [initialDelay]);

  return (
    <h1 className={className} style={{ letterSpacing: "-0.04em" }}>
      {lines.map((line, lineIndex) => {
        const lineLength = line.length;

        return (
          <span key={lineIndex} className="block">
            {line.split("").map((char, charIndex) => {
              const delay =
                lineIndex * lineLength * charDelay + charIndex * charDelay;
              const displayChar = char === " " ? "\u00A0" : char;

              return (
                <span
                  key={`${lineIndex}-${charIndex}`}
                  className="inline-block transition-[opacity,transform]"
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate
                      ? "translateX(0)"
                      : "translateX(-18px)",
                    transitionDuration: `${charDuration}ms`,
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {displayChar}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
