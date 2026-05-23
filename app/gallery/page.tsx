import GalleryMasonry from "@/components/GalleryMasonry";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "Flavor Kitchen menu gallery — tacos, burgers, and chef specials by Chef Raben in Palm Beach County.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="section-dark border-b border-cream/10 pt-32 pb-16 text-center">
        <div className="container-narrow px-4">
          <h1 className="font-display text-4xl font-semibold text-cream sm:text-5xl">
            Gallery
          </h1>
          <p className="text-lead mx-auto mt-6 max-w-md">
            Every dish, full screen. Tap any photo to explore.
          </p>
        </div>
      </section>
      <GalleryMasonry />
    </>
  );
}
