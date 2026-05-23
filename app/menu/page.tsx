import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { menuCategories, type MenuCategory } from "@/lib/data";
import { images } from "@/lib/images";
import { menuMetadata } from "@/lib/metadata";

export const metadata: Metadata = menuMetadata;

const categoryImages: Record<MenuCategory, string> = {
  Appetizers: images.menu.appetizers,
  Mains: images.menu.mains,
  Sides: images.menu.sides,
  Drinks: images.menu.drinks,
  Desserts: images.menu.desserts,
};

const categories = Object.keys(menuCategories) as MenuCategory[];

export default function MenuPage() {
  return (
    <>
      <section className="bg-charcoal pt-32 pb-16 text-cream">
        <div className="container-narrow px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Chef Raben&apos;s Kitchen
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Our Menu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Caribbean soul, Gulf freshness, and Southern warmth — every item
            made to order at the truck. Prices may vary slightly by location.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow space-y-20">
          {categories.map((category) => (
            <ScrollReveal key={category}>
              <div>
                <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="font-display text-3xl font-bold text-charcoal">
                      {category}
                    </h2>
                    <div className="mt-2 h-1 w-16 rounded-full bg-orange" />
                  </div>
                  <div className="relative h-24 w-full overflow-hidden rounded-xl sm:h-20 sm:w-48">
                    {/* REPLACE WITH REAL PHOTO: {category} category hero */}
                    <Image
                      src={categoryImages[category]}
                      alt={`${category} at Flavor Kitchen`}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {menuCategories[category].map((item) => (
                    <article
                      key={item.name}
                      className="card-hover flex flex-col rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm sm:flex-row sm:gap-6"
                    >
                      <div className="relative mb-4 aspect-square w-full shrink-0 overflow-hidden rounded-xl sm:mb-0 sm:h-28 sm:w-28">
                        <Image
                          src={categoryImages[category]}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="112px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-display text-lg font-semibold text-charcoal">
                            {item.name}
                          </h3>
                          <span className="shrink-0 font-semibold text-orange">
                            {item.price}
                          </span>
                        </div>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
