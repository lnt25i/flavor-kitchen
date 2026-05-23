"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { letterStagger } from "@/lib/anime/presets";

interface LetterHeadlineProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function LetterHeadline({
  text,
  className = "",
  as: Tag = "h1",
}: LetterHeadlineProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const container = ref.current;
    if (!container) return;
    const letters = container.querySelectorAll("[data-letter]");
    if (letters.length) letterStagger(Array.from(letters) as Element[]);

    const fallback = window.setTimeout(() => {
      letters.forEach((letter) => {
        (letter as HTMLElement).style.opacity = "1";
        (letter as HTMLElement).style.transform = "none";
      });
    }, 600);

    return () => window.clearTimeout(fallback);
  }, [text, reducedMotion]);

  if (reducedMotion) {
    return (
      <Tag className={`text-balance ${className}`}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag className={`text-balance ${className}`} aria-label={text}>
      <span ref={ref} className="inline-block" aria-hidden="true">
        {text.split("").map((char, i) => (
          <span
            key={`${char}-${i}`}
            data-letter
            className="inline-block will-change-transform"
            style={{ whiteSpace: char === " " ? "pre" : undefined }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </Tag>
  );
}
