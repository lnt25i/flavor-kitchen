"use client";

import { animate } from "animejs";
import { site, truckMenu } from "@/lib/data";
import { hoverImageBrightness } from "@/lib/anime/hover";
import { getAllMenuLightboxSlides } from "@/lib/menu-photos";
import { menuItemCaption, hasMenuPrice } from "@/lib/menu";
import ClickableImage from "./lightbox/ClickableImage";
import { findLightboxIndex } from "@/lib/menu-photos";

const allSlides = getAllMenuLightboxSlides();

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

export default function MenuShowcaseSection() {
  return (
    <section className="relative section-premium-edge py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-charcoal/88 backdrop-blur-md" />

      <div className="container-narrow relative px-4 sm:px-6">
        <div className="text-panel mx-auto max-w-3xl text-center">
          <p className="text-eyebrow">Chef Raben&apos;s Truck Menu</p>
          <h2 className="text-display-section mt-3">Our Menu</h2>
          <p className="text-lead mt-4">{site.tagline}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {truckMenu.map((item) => (
            <article
              key={item.number}
              className="menu-showcase-card flex flex-col overflow-hidden rounded-2xl border border-cream/15 bg-charcoal/90 shadow-panel backdrop-blur-md"
              onMouseEnter={(e) =>
                handleCardHover(e.currentTarget as HTMLElement, true)
              }
              onMouseLeave={(e) =>
                handleCardHover(e.currentTarget as HTMLElement, false)
              }
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-rich-black">
                <ClickableImage
                  src={item.image}
                  alt={item.name}
                  title={item.name}
                  caption={menuItemCaption(item)}
                  slides={allSlides}
                  slideIndex={findLightboxIndex(item.image)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover"
                  wrapperClassName="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-eyebrow">#{item.number}</p>
                <h3 className="text-card-title mt-2">{item.name}</h3>
                {item.description ? (
                  <p className="text-body-muted mt-3 line-clamp-2">
                    {item.description}
                  </p>
                ) : null}
                {hasMenuPrice(item) ? (
                  <p className="mt-4 text-lg font-semibold text-orange">
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
