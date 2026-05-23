"use client";

import { useEffect, useRef } from "react";
import {
  findGalleryLightboxIndex,
  getAllGalleryLightboxSlides,
  getAllGalleryPhotos,
  GALLERY_PHOTO_COUNT,
} from "@/lib/menu-photos";
import { menuItemCaption } from "@/lib/menu";
import ClickableImage from "./lightbox/ClickableImage";
import SectionHeading from "./anime/SectionHeading";

const gallerySlides = getAllGalleryLightboxSlides();
const galleryPhotos = getAllGalleryPhotos();

function variantBg(variant: string): string {
  if (variant === "light") return "bg-cream";
  if (variant === "dark") return "bg-rich-black";
  return "bg-charcoal/90";
}

function variantBadge(variant: string): string | null {
  if (variant === "light") return "Light";
  if (variant === "dark") return "Dark";
  return null;
}

export default function GalleryMasonry() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const items = Array.from(
      grid.querySelectorAll("[data-gallery-item]")
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("gallery-item-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-dark section-spacious section-premium-edge">
      <div className="container-narrow">
        <SectionHeading
          title="Full Gallery"
          description={`All ${GALLERY_PHOTO_COUNT} owner food photos — gallery classics plus light and dark menu styles. Tap any dish to view full size.`}
          light
        />
        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
        >
          {galleryPhotos.map((photo, i) => {
            const badge = variantBadge(photo.variant);
            return (
              <figure
                key={photo.src}
                data-gallery-item
                className="gallery-item group relative overflow-hidden rounded-2xl border border-cream/10 shadow-soft"
              >
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden ${variantBg(photo.variant)}`}
                >
                  <ClickableImage
                    src={photo.src}
                    alt={photo.label}
                    title={photo.label}
                    caption={menuItemCaption(photo.item)}
                    slides={gallerySlides}
                    slideIndex={findGalleryLightboxIndex(photo.src)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading={i < 4 ? "eager" : "lazy"}
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                    wrapperClassName="absolute inset-0 h-full w-full"
                  />
                </div>
                <figcaption className="border-t border-cream/10 bg-charcoal/80 px-4 py-3 backdrop-blur-sm">
                  <p className="font-display text-base text-cream">{photo.item.name}</p>
                  {badge ? (
                    <p className="mt-0.5 text-xs uppercase tracking-widest text-gold/80">
                      {badge}
                    </p>
                  ) : null}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
