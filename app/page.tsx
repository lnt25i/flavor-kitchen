import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CuisineOrigins from "@/components/CuisineOrigins";
import AnimateInView from "@/components/anime/AnimateInView";
import SectionHeading from "@/components/anime/SectionHeading";
import {
  chefStory,
  contact,
  featuredDishes,
  site,
  testimonials,
  weeklySchedule,
} from "@/lib/data";
import { images } from "@/lib/images";

export default function HomePage() {
  const scheduleHighlight = weeklySchedule.find((d) => d.day === "Friday");

  return (
    <>
      <HeroSection />

      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateInView preset="fadeUp">
              <p className="text-sm font-semibold uppercase tracking-widest text-orange">
                Born in Haiti, Trained by the World
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
                A food truck unlike any other
              </h2>
              <p className="mt-6 leading-relaxed text-charcoal/80">
                {chefStory.intro}
              </p>
              <p className="mt-4 leading-relaxed text-charcoal/80">
                {chefStory.fusion}
              </p>
              <Link href="/about" className="btn-secondary mt-8 inline-flex">
                Read Chef Raben&apos;s Story
              </Link>
            </AnimateInView>
            <AnimateInView preset="scaleIn">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={images.chef.portrait.src}
                  alt={images.chef.portrait.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-cream">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Signatures"
            title="Featured Dishes"
            description={chefStory.signatures}
            light
          />
          <AnimateInView
            preset="staggerChildren"
            childSelector="[data-dish-card]"
            className="mt-12 grid gap-8 md:grid-cols-3"
          >
            {featuredDishes.map((dish) => (
              <article
                key={dish.name}
                data-dish-card
                className="overflow-hidden rounded-2xl bg-cream/5 opacity-0"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={images.featured[dish.imageKey].src}
                    alt={images.featured[dish.imageKey].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-cream">
                    {dish.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/75">
                    {dish.description}
                  </p>
                </div>
              </article>
            ))}
          </AnimateInView>
          <div className="mt-12 text-center">
            <Link href="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      <CuisineOrigins />

      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Word on the Street"
            title="What People Are Saying"
          />
          <AnimateInView
            preset="staggerChildren"
            childSelector="[data-testimonial]"
            className="mt-12 grid gap-8 md:grid-cols-3"
          >
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                data-testimonial
                className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white p-8 opacity-0 shadow-sm"
              >
                <p className="flex-1 font-display text-lg italic leading-relaxed text-charcoal">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-charcoal/10 pt-4">
                  <cite className="not-italic">
                    <span className="font-semibold text-charcoal">
                      {t.author}
                    </span>
                    <span className="mt-1 block text-sm text-charcoal/60">
                      {t.location}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </AnimateInView>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-orange to-gold">
        <div className="container-narrow">
          <AnimateInView preset="fadeUp">
            <div className="rounded-3xl bg-rich-black/90 p-8 text-center text-cream shadow-2xl sm:p-12">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Find Us in Palm Beach County
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-cream/85">
                We rotate across West Palm, Boca, Delray, Jupiter, and beyond.
                Check the full schedule and come hungry.
              </p>
              {scheduleHighlight && (
                <div className="mx-auto mt-8 max-w-md rounded-xl border border-gold/30 bg-cream/5 p-6 text-left">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    This Week&apos;s Highlight — {scheduleHighlight.day}
                  </p>
                  <p className="mt-2 font-display text-xl">
                    {scheduleHighlight.location}
                  </p>
                  <p className="mt-1 text-sm text-gold">
                    {scheduleHighlight.hours}
                  </p>
                </div>
              )}
              <Link href="/find-us" className="btn-primary mt-8">
                See Full Schedule
              </Link>
            </div>
          </AnimateInView>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-cream">
        <div className="container-narrow text-center">
          <AnimateInView preset="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Stay Connected
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold">
              Follow {site.socialHandle}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-cream/80">
              Daily locations, new specials, and behind-the-scenes from the truck
              — straight from Chef Raben.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Instagram
              </a>
              <a
                href={contact.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !border-cream !text-cream hover:!bg-cream hover:!text-charcoal"
              >
                TikTok
              </a>
            </div>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
