import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import MenuShowcaseSection from "@/components/MenuShowcaseSection";
import CuisineStrip from "@/components/CuisineStrip";
import AnimateInView from "@/components/anime/AnimateInView";
import SectionHeading from "@/components/anime/SectionHeading";
import ClickableImage from "@/components/lightbox/ClickableImage";
import { chefStory, contact, site, testimonials } from "@/lib/data";
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
  const featured = testimonials[0];

  return (
    <>
      <HeroSection />

      <MenuShowcaseSection />

      <section className="section-dark section-spacious border-t border-cream/10">
        <div className="container-narrow grid items-center gap-14 lg:grid-cols-2">
          <AnimateInView preset="fadeUp">
            <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
              Born in Haiti, Trained by the World
            </h2>
            <p className="text-lead mt-6 max-w-md">{chefStory.intro}</p>
            <Link href="/about" className="btn-secondary mt-10 inline-flex">
              Our Story
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

      <CuisineStrip />

      <section className="section-light section-spacious">
        <div className="container-narrow text-center">
          <AnimateInView preset="fadeUp">
            <p className="font-display text-2xl italic leading-relaxed text-charcoal sm:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <p className="text-lead-dark mt-6">
              — {featured.author}, {featured.location}
            </p>
          </AnimateInView>
        </div>
      </section>

      <section className="section-dark section-spacious border-t border-cream/10">
        <div className="container-narrow text-center">
          <SectionHeading
            title="Find the Truck"
            description="Serving Palm Beach County at rotating street-food stops — follow us to know where we’ll be next."
          />
          <Link href="/find-us" className="btn-primary mt-10 inline-flex">
            Weekly Schedule
          </Link>
        </div>
      </section>

      <section className="section-dark section-spacious border-t border-cream/10">
        <div className="container-narrow text-center">
          <SectionHeading
            title={`Follow ${site.socialHandle}`}
            description="Catch us curbside — daily truck locations and specials."
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
