import type { Metadata } from "next";
import Link from "next/link";
import AboutStorySections from "@/components/AboutStorySections";
import ScrollReveal from "@/components/animations/ScrollReveal";
import PageHeaderReveal from "@/components/animations/PageHeaderReveal";
import { aboutMetadata } from "@/lib/metadata";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <PageHeaderReveal
        title="About"
        description="Bold Flavor. Made Fresh. — Chef Raben&apos;s food truck across Palm Beach County."
      />
      <AboutStorySections />
      <section className="section-dark section-spacious section-premium-edge border-t border-cream/10 text-center">
        <ScrollReveal>
          <Link href="/gallery" className="btn-secondary inline-flex">
            View Gallery
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
