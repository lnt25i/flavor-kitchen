"use client";

import ScrollReveal from "./ScrollReveal";

type PageHeaderRevealProps = {
  title: string;
  description?: string;
};

export default function PageHeaderReveal({
  title,
  description,
}: PageHeaderRevealProps) {
  return (
    <section className="section-dark section-premium-edge border-b border-cream/10 pt-32 pb-16 text-center">
      <div className="container-narrow px-4">
        <ScrollReveal>
          <h1 className="font-display text-4xl font-semibold text-cream sm:text-5xl">
            {title}
          </h1>
        </ScrollReveal>
        {description ? (
          <ScrollReveal delay={120}>
            <p className="text-lead mx-auto mt-6 max-w-md">{description}</p>
          </ScrollReveal>
        ) : null}
      </div>
    </section>
  );
}
