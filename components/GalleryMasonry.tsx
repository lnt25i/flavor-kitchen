"use client";

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
  return (
    <section className="section-dark section-spacious section-premium-edge">
      <div className="container-narrow">
        <SectionHeading
          title="Full Gallery"
          description={`All ${GALLERY_PHOTO_COUNT} owner food photos — gallery classics plus light and dark menu styles. Tap any dish to view full size.`}
          light
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {galleryPhotos.map((photo, i) => {
            const badge = variantBadge(photo.variant);
            return (
              <figure
                key={photo.src}
                className="group overflow-hidden rounded-2xl border border-cream/10 shadow-soft"
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
                    loading={i < 6 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    wrapperClassName="absolute inset-0 h-full w-full"
                  />
                </div>
                <figcaption className="border-t border-cream/15 bg-charcoal/90 px-4 py-3.5 backdrop-blur-sm sm:px-5 sm:py-4">
                  <p className="text-card-title text-lg sm:text-xl">
                    {photo.item.name}
                  </p>
                  {badge ? (
                    <p className="text-eyebrow mt-1 !text-xs">{badge}</p>
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
