"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const letters = container.querySelectorAll("[data-letter]");
    if (letters.length) letterStagger(Array.from(letters) as Element[]);
  }, [text]);

  return (
    <Tag className={className} aria-label={text}>
      <span ref={ref} className="inline-block" aria-hidden="true">
        {text.split("").map((char, i) => (
          <span
            key={`${char}-${i}`}
            data-letter
            className="inline-block opacity-0"
            style={{ whiteSpace: char === " " ? "pre" : undefined }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </Tag>
  );
}
