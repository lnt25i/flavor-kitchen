"use client";

import { useCallback } from "react";
import { animate } from "animejs";
import { site, truckMenu } from "@/lib/data";
import { menuItemCaption } from "@/lib/menu";
import { fadeUp, staggerFadeUp } from "@/lib/anime/presets";
import { useAnimeInView } from "@/hooks/useAnimeInView";
import ClickableImage from "./lightbox/ClickableImage";
import type { LightboxSlide } from "@/lib/lightbox";

const showcaseSlides: LightboxSlide[] = truckMenu.map((item) => ({
  src: item.image,
  title: item.name,
  description: menuItemCaption(item),
}));

function handleCardHover(el: HTMLElement, entering: boolean) {
  animate(el, {
    scale: entering ? 1.03 : 1,
    boxShadow: entering
      ? "0 16px 48px rgba(0, 0, 0, 0.45)"
      : "0 8px 32px rgba(0, 0, 0, 0.24)",
    duration: 200,
    ease: "outCubic",
  });
}

export default function MenuShowcaseSection() {
  const headingRef = useAnimeInView(useCallback((el) => fadeUp(el), []));
  const gridRef = useAnimeInView(
    useCallback((el) => {
      const cards = Array.from(el.querySelectorAll("[data-menu-card]")) as Element[];
      staggerFadeUp(cards, 60);
    }, [])
  );

  return (
    <section className="relative bg-gradient-to-b from-rich-black via-charcoal to-rich-black py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-rich-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-rich-black to-transparent" />

      <div className="container-narrow relative px-4 sm:px-6">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className="text-center opacity-0"
        >
          <h2 className="font-display text-4xl font-semibold text-cream sm:text-5xl">
            Our Menu
          </h2>
          <p className="mt-4 text-base text-cream/65 sm:text-lg">
            {site.tagline}
          </p>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="mt-14 grid grid-cols-1 gap-8 opacity-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          {truckMenu.map((item, index) => (
            <article
              key={item.number}
              data-menu-card
              className="menu-showcase-card flex flex-col overflow-hidden rounded-2xl border border-cream/10 bg-rich-black/60 opacity-0 shadow-soft"
              onMouseEnter={(e) =>
                handleCardHover(e.currentTarget as HTMLElement, true)
              }
              onMouseLeave={(e) =>
                handleCardHover(e.currentTarget as HTMLElement, false)
              }
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
                <ClickableImage
                  src={item.image}
                  alt={item.name}
                  title={item.name}
                  caption={menuItemCaption(item)}
                  slides={showcaseSlides}
                  slideIndex={index}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                  wrapperClassName="h-full w-full"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-eyebrow">#{item.number}</p>
                <h3 className="font-display text-xl font-semibold text-cream">
                  {item.name}
                </h3>
                {item.description ? (
                  <p className="mt-2 line-clamp-2 text-sm text-cream/60">
                    {item.description}
                  </p>
                ) : null}
                {item.price ? (
                  <p className="mt-4 font-sans text-lg font-semibold text-orange">
                    {item.price}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
