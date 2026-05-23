import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { images } from "@/lib/images";
import { aboutMetadata } from "@/lib/metadata";

export const metadata: Metadata = aboutMetadata;

const values = [
  {
    title: "Fresh, Always",
    description:
      "We source locally when possible and never compromise on produce quality or protein freshness.",
  },
  {
    title: "Roots & Innovation",
    description:
      "Classic Caribbean and Southern recipes reimagined with modern technique and bold presentation.",
  },
  {
    title: "Community First",
    description:
      "From market days to charity events, Flavor Kitchen shows up where our neighbors gather.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal pt-32 pb-16 text-cream">
        <div className="container-narrow px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            The Heart of the Truck
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            About Flavor Kitchen
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="grid items-center gap-12 lg:grid-cols-2">
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
              <div>
                <h2 className="font-display text-3xl font-bold text-charcoal">
                  Chef Raben
                </h2>
                <p className="mt-6 leading-relaxed text-charcoal/80">
                  Born in Kingston and raised between New Orleans and Houston,
                  Raben learned to cook from his grandmother&apos;s kitchen and
                  his father&apos;s fishing boat. After fifteen years leading
                  kitchens in fine dining and boutique hotels, he traded the
                  dining room for a custom-built truck — and never looked back.
                </p>
                <p className="mt-4 leading-relaxed text-charcoal/80">
                  &ldquo;I wanted people to experience restaurant-quality food
                  without the reservation or the dress code,&rdquo; Raben says.
                  &ldquo;The truck lets me cook with fire, serve with speed, and
                  connect face to face with every guest.&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-cream">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold">How It Began</h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <p className="leading-relaxed text-cream/85">
                Flavor Kitchen launched in 2019 with a borrowed generator, a
                borrowed parking spot, and a line that wrapped around the block.
                Raben had spent months retrofitting a vintage step van with
                commercial-grade equipment — every inch designed for efficiency
                and consistency.
              </p>
              <p className="leading-relaxed text-cream/85">
                Word spread through food bloggers, office parks, and festival
                organizers. Within a year, Flavor Kitchen was booked solid for
                private events while still honoring its roots at weekly markets.
                Today the truck is a symbol of what chef-driven street food can
                be: elevated, accessible, and unmistakably personal.
              </p>
            </div>
            <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
              <Image
                src={images.chef.truck.src}
                alt={images.chef.truck.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl font-bold text-charcoal">
              Mission & Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-charcoal/80">
              We believe great food builds community. Every service day and every
              catered event reflects these principles.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <ScrollReveal key={v.title}>
                <div className="card-hover rounded-2xl border border-charcoal/10 bg-white p-8 text-center shadow-sm">
                  <h3 className="font-display text-xl font-semibold text-orange">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
                    {v.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl font-bold text-charcoal">
              Gallery
            </h2>
            <p className="mt-2 text-center text-charcoal/70">
              Moments from the truck, the line, and the table.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {images.gallery.map((img, i) => (
              <ScrollReveal
                key={img.src}
                className={i % 2 === 1 ? "md:mt-8" : ""}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">
              Book Us for Your Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
