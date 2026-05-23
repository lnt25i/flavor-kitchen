"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { chefStory, cuisines, site } from "@/lib/data";
import { images } from "@/lib/images";
import { bounceIn, staggerFadeUp } from "@/lib/anime/presets";
import { useAnimeInView } from "@/hooks/useAnimeInView";
import AnimateInView from "./anime/AnimateInView";
import SectionHeading from "./anime/SectionHeading";

export default function AboutStorySections() {
  const storyRef = useAnimeInView(
    useCallback((el: HTMLElement) => {
      const paragraphs = el.querySelectorAll("[data-story-p]");
      staggerFadeUp(Array.from(paragraphs) as Element[], 120);
    }, [])
  );

  const cuisineRef = useAnimeInView(
    useCallback((el: HTMLElement) => {
      const icons = el.querySelectorAll("[data-cuisine-flag]");
      bounceIn(Array.from(icons) as Element[], 80);
    }, [])
  );

  return (
    <>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateInView preset="scaleIn">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={images.chef.portrait.src}
                  alt={images.chef.portrait.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimateInView>
            <div ref={storyRef as React.RefObject<HTMLDivElement>} className="opacity-0">
              <h2 className="font-display text-3xl font-bold text-charcoal">
                Chef Raben
              </h2>
              <p data-story-p className="mt-6 leading-relaxed text-charcoal/80 opacity-0">
                {chefStory.intro}
              </p>
              <p data-story-p className="mt-4 leading-relaxed text-charcoal/80 opacity-0">
                {chefStory.fusion}
              </p>
              <p data-story-p className="mt-4 leading-relaxed text-charcoal/80 opacity-0">
                {chefStory.signatures}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-cream">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Born in Haiti"
            title="From Port-au-Prince to the Truck"
            description="Haitian heritage is the soul of Flavor Kitchen — griot spices, pikliz tang, and the warmth of cooking for community."
            light
          />
          <AnimateInView preset="fadeUp" className="mt-8">
            <p className="leading-relaxed text-cream/85">
              Growing up in Haiti, Raben learned that food is love, resistance,
              and celebration. Those early flavors — citrus-marinated pork,
              fiery pickles, and shared meals with family — still anchor every
              recipe he serves today.
            </p>
          </AnimateInView>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image
              src={images.chef.truck.src}
              alt={images.chef.truck.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Five Cuisines"
            title="One Vision"
            description="Haitian soul, American heart, Greek freshness, French technique, and Caribbean fire — united on one menu."
          />
          <div
            ref={cuisineRef as React.RefObject<HTMLDivElement>}
            className="mt-10 grid gap-6 opacity-0 sm:grid-cols-2 lg:grid-cols-5"
          >
            {cuisines.map((c) => (
              <div
                key={c.id}
                className="rounded-2xl border border-charcoal/10 bg-white p-6 text-center shadow-sm"
              >
                <span
                  data-cuisine-flag
                  className="text-4xl opacity-0"
                  aria-hidden
                >
                  {c.emoji}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-orange">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70">{c.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Palm Beach County"
            title="Why We Serve Here"
            description={chefStory.palmBeach}
          />
          <AnimateInView preset="fadeUp" className="mt-8 text-center">
            <p className="font-display text-2xl italic text-charcoal">
              &ldquo;{site.mission}&rdquo;
            </p>
            <Link href="/contact" className="btn-primary mt-10 inline-flex">
              Book Us for Your Event
            </Link>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
