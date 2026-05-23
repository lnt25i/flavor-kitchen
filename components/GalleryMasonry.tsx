"use client";

import {
  findGalleryLightboxIndex,
  getAllGalleryLightboxSlides,
  getAllGalleryPhotos,
} from "@/lib/menu-photos";
import { menuItemCaption } from "@/lib/menu";
import ClickableImage from "./lightbox/ClickableImage";

const gallerySlides = getAllGalleryLightboxSlides();
const galleryPhotos = getAllGalleryPhotos();

export default function GalleryMasonry() {
  return (
    <section className="section-dark section-premium-edge px-4 pb-20 pt-4 sm:px-6 sm:pb-28 sm:pt-6 lg:px-8 lg:pb-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5">
          {galleryPhotos.map((photo, i) => (
            <figure
              key={photo.src}
              className="group overflow-hidden rounded-2xl border border-cream/10 bg-charcoal/90 shadow-soft"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-rich-black">
                <ClickableImage
                  src={photo.src}
                  alt={photo.item.name}
                  title={photo.item.name}
                  caption={menuItemCaption(photo.item)}
                  slides={gallerySlides}
                  slideIndex={findGalleryLightboxIndex(photo.src)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  loading={i < 8 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  wrapperClassName="absolute inset-0 h-full w-full"
                />
              </div>
              <figcaption className="border-t border-cream/15 px-4 py-3.5 sm:px-5 sm:py-4">
                <p className="text-card-title text-lg sm:text-xl">
                  {photo.item.name}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
