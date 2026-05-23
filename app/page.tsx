import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { featuredDishes, testimonials, weeklySchedule } from "@/lib/data";
import { images } from "@/lib/images";

export default function HomePage() {
  const todayHighlight = weeklySchedule.find(
    (d) => d.day === "Friday"
  );

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6">
          <p className="animate-fade-in text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Food Truck · Chef-Led · Community Favorite
          </p>
          <h1 className="animate-slide-up mt-4 font-display text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            Flavor Kitchen by Chef Raben
          </h1>
          <p className="animate-slide-up mx-auto mt-6 max-w-xl text-lg text-cream/90 sm:text-xl">
            Bold flavors. Fresh ingredients. Served with love.
          </p>
          <div className="animate-slide-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#menu" className="btn-primary">
              See Our Menu
            </a>
            <Link href="/find-us" className="btn-secondary !border-cream !text-cream hover:!bg-cream hover:!text-charcoal">
              Find Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-orange">
                  Our Story
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
                  Street food with a chef&apos;s touch
                </h2>
                <p className="mt-6 leading-relaxed text-charcoal/80">
                  Flavor Kitchen started when Chef Raben brought decades of
                  restaurant experience to the curb — combining Caribbean
                  heritage, Gulf Coast seafood, and Southern comfort into one
                  unforgettable menu. Every plate is built from scratch with
                  seasonal produce and spices ground in-house.
                </p>
                <p className="mt-4 leading-relaxed text-charcoal/80">
                  What began as a pop-up at the Riverside Market has grown into
                  a beloved fixture across the city. Whether you&apos;re grabbing
                  lunch between meetings or booking us for your wedding
                  reception, you&apos;ll taste the same care in every bite.
                </p>
                <Link href="/about" className="btn-secondary mt-8 inline-flex">
                  Meet Chef Raben
                </Link>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={images.chef.portrait.src}
                  alt={images.chef.portrait.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured dishes */}
      <section id="menu" className="section-padding bg-charcoal text-cream">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Customer Favorites
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                Featured Dishes
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-cream/80">
                A taste of what awaits at the window. Full menu with prices on
                our dedicated menu page.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredDishes.map((dish, i) => (
              <ScrollReveal key={dish.name} className={i === 1 ? "md:mt-8" : ""}>
                <article className="card-hover overflow-hidden rounded-2xl bg-cream/5">
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
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-orange">
                Word on the Street
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
                What People Are Saying
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <ScrollReveal key={t.author}>
                <blockquote className="card-hover flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Find us CTA */}
      <section className="section-padding bg-gradient-to-br from-orange to-gold">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="rounded-3xl bg-charcoal/90 p-8 text-center text-cream shadow-2xl sm:p-12">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Find Us Today
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-cream/85">
                We rotate locations throughout the week. Check the schedule and
                come hungry — lines move fast, but the flavors are worth the
                wait.
              </p>
              {todayHighlight && (
                <div className="mx-auto mt-8 max-w-md rounded-xl border border-gold/30 bg-cream/5 p-6 text-left">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    This Week&apos;s Highlight
                  </p>
                  <p className="mt-2 font-display text-xl">{todayHighlight.day}</p>
                  <p className="mt-1 text-cream/90">{todayHighlight.location}</p>
                  <p className="mt-1 text-sm text-gold">{todayHighlight.hours}</p>
                </div>
              )}
              <Link href="/find-us" className="btn-primary mt-8">
                See Full Schedule
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
