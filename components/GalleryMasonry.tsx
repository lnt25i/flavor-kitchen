"use client";

import { cascadeFromTop } from "@/lib/anime/presets";
import {
  hoverGalleryCaption,
  hoverImageBrightness,
} from "@/lib/anime/hover";
import { useAnimeInView } from "@/hooks/useAnimeInView";
import {
  findLightboxIndex,
  getAllMenuLightboxSlides,
  getAllMenuPhotos,
} from "@/lib/menu-photos";
import { menuItemCaption } from "@/lib/menu";
import ClickableImage from "./lightbox/ClickableImage";
import SectionHeading from "./anime/SectionHeading";

const gallerySlides = getAllMenuLightboxSlides();
const galleryPhotos = getAllMenuPhotos();

function masonryClass(index: number): string {
  if (index % 7 === 0) return "md:col-span-2 md:row-span-2";
  if (index % 3 === 1) return "md:row-span-2";
  return "";
}

export default function GalleryMasonry() {
  const ref = useAnimeInView((el) => {
    cascadeFromTop(
      Array.from(el.querySelectorAll("[data-masonry-item]")) as Element[],
      45
    );
  });

  return (
    <section className="section-dark section-spacious section-premium-edge">
      <div className="container-narrow">
        <SectionHeading
          title="Gallery"
          description="Twenty real menu photos — light and dark styles. Tap any dish to view full size."
          light
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="mt-12 grid grid-cols-2 auto-rows-[minmax(140px,auto)] gap-3 opacity-0 sm:gap-4 md:grid-cols-4"
        >
          {galleryPhotos.map((photo, i) => (
            <figure
              key={photo.src}
              data-masonry-item
              className={`group relative overflow-hidden rounded-xl opacity-0 shadow-soft ${masonryClass(i)}`}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                const overlay = e.currentTarget.querySelector("[data-gallery-overlay]");
                if (img) hoverImageBrightness(img, true);
                if (overlay) hoverGalleryCaption(overlay, true);
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                const overlay = e.currentTarget.querySelector("[data-gallery-overlay]");
                if (img) hoverImageBrightness(img, false);
                if (overlay) hoverGalleryCaption(overlay, false);
              }}
            >
              <ClickableImage
                src={photo.src}
                alt={photo.item.name}
                title={photo.item.name}
                caption={menuItemCaption(photo.item)}
                slides={gallerySlides}
                slideIndex={findLightboxIndex(photo.src)}
                width={800}
                height={800}
                unoptimized
                className="h-full min-h-[140px] w-full object-contain"
                wrapperClassName={`h-full w-full ${
                  photo.variant === "light" ? "bg-cream" : "bg-rich-black"
                }`}
              />
              <figcaption
                data-gallery-overlay
                className="pointer-events-none absolute inset-0 flex items-end justify-center pb-4 opacity-0"
                style={{ backgroundColor: "rgba(13, 13, 13, 0)" }}
              >
                <span className="font-display text-xl italic text-cream drop-shadow-lg">
                  {photo.item.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
