import GalleryMasonry from "@/components/GalleryMasonry";
import PageHeaderReveal from "@/components/animations/PageHeaderReveal";
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
      <PageHeaderReveal
        compact
        title="Gallery"
        description="Every dish, full screen. Tap any photo to explore."
      />
      <GalleryMasonry />
    </>
  );
}
