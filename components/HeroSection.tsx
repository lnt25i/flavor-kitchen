"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { fadeUp } from "@/lib/anime/presets";
import { site } from "@/lib/data";
import { images } from "@/lib/images";
import ClickableImage from "./lightbox/ClickableImage";
import LetterHeadline from "./anime/LetterHeadline";
import type { LightboxSlide } from "@/lib/lightbox";

const truckSlides: LightboxSlide[] = [
  {
    src: images.hero.left.src,
    title: "Flavor Kitchen — Truck Wrap",
    description: images.hero.left.alt,
  },
  {
    src: images.hero.right.src,
    title: "Flavor Kitchen — Menu Side",
    description: images.hero.right.alt,
  },
];

function PinIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftWrapRef = useRef<HTMLDivElement>(null);
  const rightWrapRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (taglineRef.current) fadeUp(taglineRef.current, 700);
    if (badgeRef.current) fadeUp(badgeRef.current, 900);
    if (ctaRef.current) fadeUp(ctaRef.current, 1100);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftWrapRef.current;
    const right = rightWrapRef.current;
    if (!section || !left || !right) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, -rect.top);
      animate(left, {
        translateY: progress * 0.06,
        duration: 0,
        ease: "linear",
      });
      animate(right, {
        translateY: progress * 0.1,
        duration: 0,
        ease: "linear",
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-rich-black pt-24 md:pt-28"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div ref={leftWrapRef} className="w-full will-change-transform">
            <ClickableImage
              src={images.hero.left.src}
              alt={images.hero.left.alt}
              title="Flavor Kitchen — Left Side"
              slides={truckSlides}
              slideIndex={0}
              width={1200}
              height={800}
              priority
              className="h-auto w-full object-contain"
              wrapperClassName="w-full"
            />
          </div>
          <div ref={rightWrapRef} className="w-full will-change-transform">
            <ClickableImage
              src={images.hero.right.src}
              alt={images.hero.right.alt}
              title="Flavor Kitchen — Right Side"
              slides={truckSlides}
              slideIndex={1}
              width={1200}
              height={800}
              priority
              className="h-auto w-full object-contain"
              wrapperClassName="w-full"
            />
          </div>
        </div>
      </div>

      <div className="container-narrow section-spacious !pt-16 text-center">
        <LetterHeadline
          text="Flavor Kitchen by Chef Raben"
          className="font-display text-3xl font-semibold text-cream sm:text-4xl md:text-5xl"
        />
        <p
          ref={taglineRef}
          className="mt-6 font-display text-xl italic text-gold opacity-0 sm:text-2xl"
        >
          {site.tagline}
        </p>
        <div
          ref={badgeRef}
          className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-sm text-cream/80 opacity-0"
        >
          <PinIcon />
          <span>{site.location}</span>
        </div>
        <div className="mt-12">
          <Link href="/menu" className="btn-primary">
            <span ref={ctaRef} className="inline-block opacity-0">
              Explore Our Menu
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
