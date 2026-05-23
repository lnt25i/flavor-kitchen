"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  menuCategories,
  menuCategoryList,
  type MenuCategory,
} from "@/lib/data";
import { images } from "@/lib/images";
import { scaleIn, slideUnderline } from "@/lib/anime/presets";

const categoryImages = images.menu as Record<string, string>;

export default function MenuPageContent() {
  const [active, setActive] = useState<MenuCategory>("Tacos");
  const tabsRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const hasScrolledIn = useRef(false);

  const animateCards = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll("[data-menu-card]");
    scaleIn(Array.from(cards) as Element[], 40);
  }, []);

  const moveUnderline = useCallback((category: MenuCategory) => {
    const tabs = tabsRef.current;
    const underline = underlineRef.current;
    if (!tabs || !underline) return;
    const btn = tabs.querySelector(`[data-tab="${category}"]`) as HTMLElement;
    if (!btn) return;
    slideUnderline(underline, btn.offsetLeft, btn.offsetWidth);
  }, []);

  useEffect(() => {
    moveUnderline(active);
    const onResize = () => moveUnderline(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, moveUnderline]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasScrolledIn.current) {
          hasScrolledIn.current = true;
          grid.style.opacity = "1";
          animateCards();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, [animateCards]);

  useEffect(() => {
    if (!hasScrolledIn.current) return;
    animateCards();
  }, [active, animateCards]);

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div
          ref={tabsRef}
          className="relative flex flex-wrap justify-center gap-2 border-b border-charcoal/15 pb-1"
        >
          {menuCategoryList.map((cat) => (
            <button
              key={cat}
              type="button"
              data-tab={cat}
              onClick={() => setActive(cat)}
              className={`relative z-10 px-4 py-3 text-sm font-semibold uppercase tracking-wider ${
                active === cat
                  ? "text-orange"
                  : "text-charcoal/60 hover:text-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
          <div
            ref={underlineRef}
            className="absolute bottom-0 h-0.5 bg-orange"
            style={{ left: 0, width: 0 }}
          />
        </div>

        <div ref={gridRef} className="mt-10 grid gap-6 opacity-0 sm:grid-cols-2">
          {menuCategories[active].map((item) => (
            <article
              key={item.name}
              data-menu-card
              className="flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm sm:flex-row"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:h-auto sm:w-40">
                <Image
                  src={categoryImages[active]}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-charcoal">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-semibold text-orange">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
