"use client";

import Link from "next/link";
import { useCallback } from "react";
import { chefStory, site, truckMenu } from "@/lib/data";
import { images } from "@/lib/images";
import { staggerFadeUp } from "@/lib/anime/presets";
import {
  findLightboxIndex,
  getAllMenuLightboxSlides,
} from "@/lib/menu-photos";
import { menuItemCaption } from "@/lib/menu";
import { useAnimeInView } from "@/hooks/useAnimeInView";
import AnimateInView from "./anime/AnimateInView";
import SectionHeading from "./anime/SectionHeading";
import ClickableImage from "./lightbox/ClickableImage";

const chefSlides = [
  {
    src: images.chef.portrait.src,
    title: "Chef Raben — Flavor Kitchen",
    description: images.chef.portrait.alt,
  },
];
const truckSlides = [
  {
    src: images.chef.truck.src,
    title: "Flavor Kitchen Truck",
    description: images.chef.truck.alt,
  },
];
const menuSlides = getAllMenuLightboxSlides();
const aboutFoodPhotos = truckMenu.slice(0, 6);

export default function AboutStorySections() {
  const storyRef = useAnimeInView(
    useCallback((el: HTMLElement) => {
      staggerFadeUp(
        Array.from(el.querySelectorAll("[data-story-p]")) as Element[],
        140
      );
    }, [])
  );

  const foodRef = useAnimeInView(
    useCallback((el: HTMLElement) => {
      staggerFadeUp(
        Array.from(el.querySelectorAll("[data-about-food]")) as Element[],
        70
      );
    }, [])
  );

  return (
    <>
      <section className="section-dark section-spacious">
        <div className="container-narrow grid items-center gap-14 lg:grid-cols-2">
          <ClickableImage
            src={images.chef.portrait.src}
            alt={images.chef.portrait.alt}
            title="Flavor Kitchen Truck"
            slides={chefSlides}
            width={800}
            height={500}
            unoptimized
            className="h-auto w-full object-contain"
            wrapperClassName="w-full rounded-2xl shadow-soft"
          />
          <div ref={storyRef as React.RefObject<HTMLDivElement>} className="opacity-0">
            <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
              Chef Raben
            </h2>
            <p data-story-p className="text-lead mt-8 opacity-0">
              {chefStory.foodTruck}
            </p>
            <p data-story-p className="text-lead mt-6 opacity-0">
              {chefStory.truckMenu}
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark section-spacious border-t border-cream/10">
        <div className="container-narrow">
          <SectionHeading
            title="The Truck Menu"
            description="Ten items printed on the wrap — the full Flavor Kitchen menu."
          />
          <AnimateInView preset="fadeUp" className="mt-10">
            <ClickableImage
              src={images.chef.truck.src}
              alt={images.chef.truck.alt}
              title="Flavor Kitchen — truck menu side"
              slides={truckSlides}
              width={1200}
              height={600}
              unoptimized
              className="h-auto w-full object-contain"
              wrapperClassName="w-full rounded-2xl shadow-soft"
            />
          </AnimateInView>
        </div>
      </section>

      <section className="section-dark section-spacious border-t border-cream/10">
        <div className="container-narrow">
          <SectionHeading
            title="From the Window"
            description="Real food photos from Chef Raben’s menu."
            light
          />
          <div
            ref={foodRef as React.RefObject<HTMLDivElement>}
            className="mt-10 grid grid-cols-2 gap-4 opacity-0 sm:grid-cols-3"
          >
            {aboutFoodPhotos.map((item) => (
              <div
                key={item.number}
                data-about-food
                className="overflow-hidden rounded-xl opacity-0 shadow-soft"
              >
                <ClickableImage
                  src={item.image}
                  alt={item.name}
                  title={item.name}
                  caption={menuItemCaption(item)}
                  price={item.price}
                  slides={menuSlides}
                  slideIndex={findLightboxIndex(item.image)}
                  width={400}
                  height={400}
                  unoptimized
                  className="h-auto w-full object-contain"
                  wrapperClassName="w-full bg-rich-black"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light section-spacious">
        <div className="container-narrow text-center">
          <SectionHeading
            title={site.location}
            description={chefStory.palmBeach}
            light={false}
          />
          <p className="font-display mt-10 text-2xl italic text-charcoal">
            &ldquo;{site.tagline}&rdquo;
          </p>
          <Link href="/contact" className="btn-ghost-light mt-10 inline-flex">
            Book the Truck
          </Link>
        </div>
      </section>
    </>
  );
}
