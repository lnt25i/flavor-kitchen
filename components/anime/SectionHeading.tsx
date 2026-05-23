"use client";

import AnimateInView from "./AnimateInView";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <AnimateInView preset="fadeUp" className={`text-center ${className}`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-widest ${
            light ? "text-gold" : "text-orange"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 font-display text-3xl font-bold sm:text-4xl ${
          light ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl ${
            light ? "text-cream/80" : "text-charcoal/75"
          }`}
        >
          {description}
        </p>
      )}
    </AnimateInView>
  );
}
