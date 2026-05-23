import type { Metadata } from "next";
import MenuPageContent from "@/components/MenuPageContent";
import { menuMetadata } from "@/lib/metadata";

export const metadata: Metadata = menuMetadata;

export default function MenuPage() {
  return (
    <>
      <section className="bg-rich-black pt-32 pb-16 text-cream">
        <div className="container-narrow px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Five Cultures · One Menu
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Our Menu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Tacos, burgers, sides, drinks, desserts, and chef specials — every
            item rooted in Chef Raben&apos;s Haitian, American, Greek, French,
            and Caribbean traditions.
          </p>
        </div>
      </section>
      <MenuPageContent />
    </>
  );
}
