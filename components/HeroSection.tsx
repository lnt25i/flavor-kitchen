"use client";

import Link from "next/link";
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
  return (
    <section className="section-premium-edge pt-24 md:pt-28">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full">
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
          <div className="w-full">
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

      <div className="container-narrow section-spacious !pt-12 sm:!pt-16">
        <div className="hero-copy-panel text-center">
          <p className="text-eyebrow">Palm Beach County Food Truck</p>
          <LetterHeadline
            text="Flavor Kitchen by Chef Raben"
            className="text-display-hero mt-4"
          />
          <p className="text-tagline mt-5">{site.tagline}</p>
          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-rich-black/50 px-5 py-2.5 text-type-body-sm text-cream backdrop-blur-sm">
            <PinIcon />
            <span>{site.location}</span>
          </div>
          <div className="mt-10">
            <Link href="/menu" className="btn-primary">
              Explore Our Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
