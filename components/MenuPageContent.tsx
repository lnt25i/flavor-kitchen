"use client";

import { useCallback, useEffect, useRef } from "react";
import { animate } from "animejs";
import { hoverImageBrightness } from "@/lib/anime/hover";
import { staggerFadeUp } from "@/lib/anime/presets";
import {
  findLightboxIndex,
  getAllMenuLightboxSlides,
  getAllMenuPhotos,
} from "@/lib/menu-photos";
import { hasMenuPrice, menuItemCaption } from "@/lib/menu";
import ClickableImage from "./lightbox/ClickableImage";

const allSlides = getAllMenuLightboxSlides();
const allPhotos = getAllMenuPhotos();

function handleCardHover(card: HTMLElement, entering: boolean) {
  animate(card, {
    scale: entering ? 1.02 : 1,
    boxShadow: entering
      ? "0 16px 48px rgba(0, 0, 0, 0.45)"
      : "0 8px 32px rgba(0, 0, 0, 0.24)",
    duration: 200,
    ease: "outCubic",
  });
  const img = card.querySelector("img");
  if (img) hoverImageBrightness(img, entering);
}

export default function MenuPageContent() {
  const gridRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const animateCards = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    staggerFadeUp(
      Array.from(grid.querySelectorAll("[data-menu-card]")) as Element[],
      50
    );
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
    <section className="section-dark section-spacious section-premium-edge">
      <div className="container-narrow">
        <p className="text-center text-sm text-cream/50">
          All twenty owner menu photos — two styles per item. Tap to enlarge.
        </p>
        <div
          ref={gridRef}
          className="mt-12 grid gap-6 opacity-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          {allPhotos.map((photo) => (
            <article
              key={photo.src}
              data-menu-card
              className="overflow-hidden rounded-2xl border border-cream/10 opacity-0 shadow-soft"
              onMouseEnter={(e) =>
                handleCardHover(e.currentTarget as HTMLElement, true)
              }
              onMouseLeave={(e) =>
                handleCardHover(e.currentTarget as HTMLElement, false)
              }
            >
              <div
                className={`relative w-full ${
                  photo.variant === "light" ? "bg-cream" : "bg-rich-black"
                }`}
              >
                <ClickableImage
                  src={photo.src}
                  alt={photo.item.name}
                  title={`#${photo.item.number} ${photo.item.name}`}
                  caption={menuItemCaption(photo.item)}
                  slides={allSlides}
                  slideIndex={findLightboxIndex(photo.src)}
                  width={600}
                  height={600}
                  unoptimized
                  className="h-auto w-full object-contain"
                  wrapperClassName="w-full"
                />
              </div>
              <div className="border-t border-cream/10 px-6 py-5">
                <p className="text-eyebrow">
                  #{photo.item.number} · {photo.variant}
                </p>
                <h3 className="mt-1 font-display text-xl text-cream">
                  {photo.item.name}
                </h3>
                {photo.item.description ? (
                  <p className="text-lead mt-2 !text-sm">
                    {photo.item.description}
                  </p>
                ) : null}
                {hasMenuPrice(photo.item) ? (
                  <p className="mt-3 font-semibold text-orange">
                    {photo.item.price}
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
