import type { Metadata } from "next";
import MenuPageContent from "@/components/MenuPageContent";
import { menuMetadata } from "@/lib/metadata";

export const metadata: Metadata = menuMetadata;

export default function MenuPage() {
  return (
    <>
      <section className="section-dark border-b border-cream/10 pt-32 pb-16 text-center">
        <div className="container-narrow px-4">
          <h1 className="font-display text-4xl font-semibold text-cream sm:text-5xl">
            Menu
          </h1>
          <p className="text-lead mx-auto mt-6 max-w-md">
            Ten items from the truck — tap any photo to enlarge.
          </p>
        </div>
      </section>
      <MenuPageContent />
    </>
  );
}
