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
      <h2 className={light ? "text-display-section" : "text-display-section-dark"}>
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-lead" : "text-lead-dark"}`}
        >
          {description}
        </p>
      ) : null}
    </ScrollReveal>
  );
}
