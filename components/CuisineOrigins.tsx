"use client";

import Image from "next/image";
import type { RefObject } from "react";
import { cuisines } from "@/lib/data";
import { images } from "@/lib/images";
import { bounceIn } from "@/lib/anime/presets";
import { useAnimeInView } from "@/hooks/useAnimeInView";
import { staggerFadeUp } from "@/lib/anime/presets";
import SectionHeading from "./anime/SectionHeading";

const cuisineImages: Record<string, string> = {
  haiti: images.cuisines.haiti.src,
  usa: images.cuisines.usa.src,
  greece: images.cuisines.greece.src,
  france: images.cuisines.france.src,
  caribbean: images.cuisines.caribbean.src,
};

export default function CuisineOrigins() {
  const gridRef = useAnimeInView((el) => {
    const cards = el.querySelectorAll("[data-cuisine-card]");
    staggerFadeUp(Array.from(cards) as Element[], 100);
    const icons = el.querySelectorAll("[data-cuisine-icon]");
    bounceIn(Array.from(icons) as Element[], 200);
  });

  return (
    <section className="section-padding bg-rich-black text-cream">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Five Cuisines"
          title="One Vision"
          description="Each tradition shapes our menu — from Port-au-Prince to Palm Beach County."
          light
        />
        <div
          ref={gridRef as RefObject<HTMLDivElement>}
          className="mt-12 grid gap-6 opacity-0 sm:grid-cols-2 lg:grid-cols-5"
        >
          {cuisines.map((c) => (
            <article
              key={c.id}
              data-cuisine-card
              className="overflow-hidden rounded-2xl border border-cream/10 bg-charcoal/80"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={cuisineImages[c.id]}
                  alt={`${c.name} cuisine influence at Flavor Kitchen`}
                  fill
                  className="object-cover opacity-70"
                  sizes="240px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <span
                  data-cuisine-icon
                  className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange/90 text-2xl opacity-0 shadow-lg"
                  aria-hidden
                >
                  {c.emoji}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-gold">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  {c.tagline}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
