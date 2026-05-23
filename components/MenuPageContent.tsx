"use client";

import {
  findLightboxIndex,
  getAllMenuLightboxSlides,
  getAllMenuPhotos,
} from "@/lib/menu-photos";
import { hasMenuPrice, menuItemCaption } from "@/lib/menu";
import ClickableImage from "./lightbox/ClickableImage";

const allSlides = getAllMenuLightboxSlides();
const allPhotos = getAllMenuPhotos();

export default function MenuPageContent() {
  return (
    <section className="section-dark section-spacious section-premium-edge">
      <div className="container-narrow">
        <p className="text-center text-sm text-cream/50">
          All twenty owner menu photos — two styles per item. Tap to enlarge.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allPhotos.map((photo) => (
            <article
              key={photo.src}
              className="overflow-hidden rounded-2xl border border-cream/10 shadow-soft"
            >
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden ${
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
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover"
                  wrapperClassName="absolute inset-0 h-full w-full"
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
