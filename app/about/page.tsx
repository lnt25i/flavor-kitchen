import type { Metadata } from "next";
import Link from "next/link";
import AboutStorySections from "@/components/AboutStorySections";
import { aboutMetadata } from "@/lib/metadata";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <section className="section-dark border-b border-cream/10 pt-32 pb-16 text-center">
        <div className="container-narrow px-4">
          <h1 className="font-display text-4xl font-semibold text-cream sm:text-5xl">
            About
          </h1>
          <p className="text-lead mx-auto mt-6 max-w-md">
            Bold Flavor. Made Fresh. — Chef Raben&apos;s food truck across Palm Beach County.
          </p>
        </div>
      </section>
      <AboutStorySections />
      <section className="section-dark section-spacious border-t border-cream/10 text-center">
        <Link href="/gallery" className="btn-secondary inline-flex">
          View Gallery
        </Link>
      </section>
    </>
  );
}
