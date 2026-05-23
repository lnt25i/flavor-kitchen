"use client";

import { cuisines } from "@/lib/data";
import { staggerFadeUp } from "@/lib/anime/presets";
import { useAnimeInView } from "@/hooks/useAnimeInView";
import SectionHeading from "./anime/SectionHeading";

export default function CuisineStrip() {
  const ref = useAnimeInView((el) => {
    staggerFadeUp(
      Array.from(el.querySelectorAll("[data-cuisine]")) as Element[],
      80
    );
  });

  return (
    <section className="section-dark section-spacious border-t border-cream/10">
      <div className="container-narrow text-center">
        <SectionHeading
          title="Five Cuisines. One Menu."
          description="Haitian soul, American classics, Greek freshness, French technique, Caribbean fire."
        />
        <ul
          ref={ref as React.RefObject<HTMLUListElement>}
          className="mt-12 flex flex-wrap justify-center gap-3 opacity-0"
        >
          {cuisines.map((c) => (
            <li
              key={c.id}
              data-cuisine
              className="rounded-full border border-cream/15 px-5 py-2.5 text-sm text-cream/80 opacity-0"
            >
              <span className="mr-2" aria-hidden>
                {c.emoji}
              </span>
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
