"use client";

import { useCallback, useEffect, useRef } from "react";
import { animate } from "animejs";
import { truckMenu } from "@/lib/data";
import { hasMenuPrice, menuItemCaption } from "@/lib/menu";
import { scaleIn } from "@/lib/anime/presets";
import ClickableImage from "./lightbox/ClickableImage";
import type { LightboxSlide } from "@/lib/lightbox";

function handleCardHover(el: HTMLElement, entering: boolean) {
  animate(el, {
    scale: entering ? 1.02 : 1,
    boxShadow: entering
      ? "0 16px 48px rgba(0, 0, 0, 0.45)"
      : "0 8px 32px rgba(0, 0, 0, 0.24)",
    duration: 200,
    ease: "outCubic",
  });
}

const menuSlides: LightboxSlide[] = truckMenu.map((item) => ({
  src: item.image,
  title: `#${item.number} ${item.name}`,
  description: menuItemCaption(item),
}));

export default function MenuPageContent() {
  const gridRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const animateCards = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    scaleIn(Array.from(grid.querySelectorAll("[data-menu-card]")) as Element[], 50);
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          grid.style.opacity = "1";
          animateCards();
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, [animateCards]);

  return (
    <section className="section-dark section-spacious">
      <div className="container-narrow">
        <p className="text-center text-sm text-cream/50">
          Ten items from the truck wrap — tap any photo to enlarge.
        </p>
        <div
          ref={gridRef}
          className="mt-12 grid gap-8 opacity-0 sm:grid-cols-2"
        >
          {truckMenu.map((item, i) => (
            <article
              key={item.number}
              data-menu-card
              className="overflow-hidden rounded-2xl border border-cream/10 bg-cream shadow-soft"
              onMouseEnter={(e) =>
                handleCardHover(e.currentTarget as HTMLElement, true)
              }
              onMouseLeave={(e) =>
                handleCardHover(e.currentTarget as HTMLElement, false)
              }
            >
              <div className="relative w-full">
                <ClickableImage
                  src={item.image}
                  alt={item.name}
                  title={`#${item.number} ${item.name}`}
                  caption={menuItemCaption(item)}
                  slides={menuSlides}
                  slideIndex={i}
                  width={600}
                  height={600}
                  className="h-auto w-full object-contain"
                  wrapperClassName="w-full"
                />
              </div>
              <div className="border-t border-cream/10 bg-rich-black px-6 py-5">
                <p className="text-eyebrow">#{item.number}</p>
                <h3 className="mt-1 font-display text-xl text-cream">
                  {item.name}
                </h3>
                {item.description ? (
                  <p className="text-lead mt-2 !text-sm">{item.description}</p>
                ) : null}
                {hasMenuPrice(item) ? (
                  <p className="mt-3 font-semibold text-orange">{item.price}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
