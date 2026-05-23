"use client";

import Image from "next/image";
import { scaleIn } from "@/lib/anime/presets";
import { useAnimeInView } from "@/hooks/useAnimeInView";
import { images } from "@/lib/images";
import SectionHeading from "./anime/SectionHeading";

export default function GalleryGrid() {
  const ref = useAnimeInView((el) => {
    const items = el.querySelectorAll("[data-gallery-item]");
    scaleIn(Array.from(items) as Element[], 70);
  });

  return (
    <section className="section-padding bg-charcoal text-cream">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="The Menu in Pictures"
          title="Gallery"
          description="Our full lineup — replace any image in /public/images/gallery/ when ready."
          light
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="mt-10 grid grid-cols-2 gap-3 opacity-0 sm:gap-4 md:grid-cols-3 lg:grid-cols-5"
        >
          {images.gallery.map((img) => (
            <figure
              key={img.src}
              data-gallery-item
              className="relative aspect-square overflow-hidden rounded-xl opacity-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <figcaption className="sr-only">{img.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
