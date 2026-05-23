"use client";

import { scaleIn } from "@/lib/anime/presets";
import { useAnimeInView } from "@/hooks/useAnimeInView";
import { images } from "@/lib/images";
import { toLightboxSlides } from "@/lib/lightbox";
import ClickableImage from "./lightbox/ClickableImage";
import SectionHeading from "./anime/SectionHeading";

const gallerySlides = toLightboxSlides(
  images.gallery.map((g) => ({
    src: g.src,
    name: g.name,
    alt: g.alt,
  }))
);

export default function GalleryMasonry() {
  const ref = useAnimeInView((el) => {
    const items = el.querySelectorAll("[data-masonry-item]");
    scaleIn(Array.from(items) as Element[], 60);
  });

  return (
    <section className="section-dark section-spacious">
      <div className="container-narrow">
        <SectionHeading
          title="Gallery"
          description="Tap any dish to view full size."
          light
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="columns-2 gap-3 opacity-0 sm:columns-3 sm:gap-4 lg:columns-4"
        >
          {images.gallery.map((img, i) => (
            <figure
              key={img.src}
              data-masonry-item
              className="mb-3 break-inside-avoid opacity-0 sm:mb-4"
            >
              <ClickableImage
                src={img.src}
                alt={img.alt}
                title={img.name}
                slides={gallerySlides}
                slideIndex={i}
                width={600}
                height={600}
                className="h-auto w-full rounded-lg object-cover shadow-soft"
                wrapperClassName="rounded-lg shadow-soft"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
