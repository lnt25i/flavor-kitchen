import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import MenuShowcaseSection from "@/components/MenuShowcaseSection";
import AnimateInView from "@/components/anime/AnimateInView";
import SectionHeading from "@/components/anime/SectionHeading";
import ClickableImage from "@/components/lightbox/ClickableImage";
import { chefStory, contact, site } from "@/lib/data";
import { images } from "@/lib/images";
import type { LightboxSlide } from "@/lib/lightbox";

const chefSlides: LightboxSlide[] = [
  {
    src: images.chef.portrait.src,
    title: "Flavor Kitchen Truck",
    description: images.chef.portrait.alt,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <MenuShowcaseSection />

      <section className="section-dark section-spacious border-t border-cream/10">
        <div className="container-narrow grid items-center gap-14 lg:grid-cols-2">
          <AnimateInView preset="fadeUp">
            <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
              Chef Raben · Flavor Kitchen
            </h2>
            <p className="text-lead mt-6 max-w-md">{chefStory.foodTruck}</p>
            <p className="text-lead mt-4 max-w-md">{chefStory.truckMenu}</p>
            <Link href="/about" className="btn-secondary mt-10 inline-flex">
              About the Truck
            </Link>
          </AnimateInView>
          <AnimateInView preset="scaleIn">
            <ClickableImage
              src={images.chef.portrait.src}
              alt={images.chef.portrait.alt}
              title="Flavor Kitchen by Chef Raben"
              slides={chefSlides}
              width={800}
              height={500}
              className="h-auto w-full object-contain"
              wrapperClassName="w-full rounded-2xl shadow-soft"
            />
          </AnimateInView>
        </div>
      </section>

      <section className="section-light section-spacious">
        <div className="container-narrow text-center">
          <AnimateInView preset="fadeUp">
            <p className="font-display text-2xl italic leading-relaxed text-charcoal sm:text-3xl">
              &ldquo;{site.tagline}&rdquo;
            </p>
            <p className="text-lead-dark mt-6">
              — Flavor Kitchen food truck, {site.location}
            </p>
          </AnimateInView>
        </div>
      </section>

      <section className="section-dark section-spacious border-t border-cream/10">
        <div className="container-narrow text-center">
          <SectionHeading
            title="Find the Truck"
            description={chefStory.palmBeach}
          />
          <Link href="/find-us" className="btn-primary mt-10 inline-flex">
            Find Us
          </Link>
        </div>
      </section>

      <section className="section-dark section-spacious border-t border-cream/10">
        <div className="container-narrow text-center">
          <SectionHeading
            title={`Follow ${site.socialHandle}`}
            description="Daily truck location and menu updates on Instagram."
          />
          <a
            href={contact.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10 inline-flex"
          >
            Instagram
          </a>
        </div>
      </section>
    </>
  );
}
