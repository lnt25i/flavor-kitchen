"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { fadeUp, pulseLoop } from "@/lib/anime/presets";
import { site } from "@/lib/data";
import { images } from "@/lib/images";
import LetterHeadline from "./anime/LetterHeadline";

export default function HeroSection() {
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (badgeRef.current) fadeUp(badgeRef.current, 0);
    if (subRef.current) fadeUp(subRef.current, 900);
    if (ctaRef.current) {
      fadeUp(ctaRef.current, 1200);
      const pulse = pulseLoop(ctaRef.current);
      return () => {
        pulse.pause();
      };
    }
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-rich-black/75" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6">
        <p
          ref={badgeRef}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-gold opacity-0"
        >
          Palm Beach County · Chef-Led · Five Cultures
        </p>
        <LetterHeadline
          text="Flavor Kitchen by Chef Raben"
          className="mt-4 font-display text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl"
        />
        <p
          ref={subRef}
          className="mx-auto mt-6 max-w-xl text-lg text-cream/90 opacity-0 sm:text-xl"
        >
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/menu" className="btn-primary">
            <span ref={ctaRef} className="inline-block opacity-0">
              Explore Our Menu
            </span>
          </Link>
          <Link
            href="/about"
            className="btn-secondary !border-cream !text-cream hover:!bg-cream hover:!text-charcoal"
          >
            Born in Haiti
          </Link>
        </div>
      </div>
    </section>
  );
}
