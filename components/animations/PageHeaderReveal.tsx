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
    <section className="section-dark section-premium-edge border-b border-cream/10 pt-28 pb-14 sm:pt-32 sm:pb-16">
      <div className="container-narrow px-4 text-center">
        <ScrollReveal>
          <div className="page-header-panel mx-auto max-w-3xl">
            <h1 className="text-display-page">{title}</h1>
            {description ? (
              <p className="text-lead mx-auto mt-5 max-w-xl">{description}</p>
            ) : null}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
