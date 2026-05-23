import type { Metadata } from "next";
import AboutStorySections from "@/components/AboutStorySections";
import GalleryGrid from "@/components/GalleryGrid";
import { aboutMetadata } from "@/lib/metadata";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <section className="bg-rich-black pt-32 pb-16 text-cream">
        <div className="container-narrow px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Born in Haiti · Trained by the World
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            About Flavor Kitchen
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Five cultures. One truck. Infinite flavor — from Port-au-Prince to
            Palm Beach County.
          </p>
        </div>
      </section>
      <AboutStorySections />
      <GalleryGrid />
    </>
  );
}
