"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

interface SectionHeadingProps {
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  title,
  description,
  light = true,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <ScrollReveal className={`${alignClass} ${className}`}>
      <h2
        className={`font-display text-3xl font-semibold sm:text-4xl ${
          light ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-xl text-base leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-cream/65" : "text-charcoal/65"}`}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
