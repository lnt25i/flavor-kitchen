import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { hoursOfOperation, weeklySchedule } from "@/lib/data";
import { findUsMetadata } from "@/lib/metadata";

export const metadata: Metadata = findUsMetadata;

export default function FindUsPage() {
  return (
    <>
      <section className="bg-charcoal pt-32 pb-16 text-cream">
        <div className="container-narrow px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Locations & Hours
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Find Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            We move with the city. Follow our weekly schedule or reach out to
            book Flavor Kitchen for your next gathering.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Weekly Schedule
            </h2>
            <p className="mt-2 text-charcoal/70">
              Weather and events may shift times — follow us on social for
              real-time updates.
            </p>
          </ScrollReveal>

          <div className="mt-8 overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-charcoal text-cream">
                  <tr>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                      Day
                    </th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                      Hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySchedule.map((row, i) => (
                    <tr
                      key={row.day}
                      className={
                        i % 2 === 0 ? "bg-cream" : "bg-white"
                      }
                    >
                      <td className="px-6 py-4 font-semibold text-charcoal">
                        {row.day}
                      </td>
                      <td className="px-6 py-4 text-charcoal/80">
                        <span>{row.location}</span>
                        {row.note && (
                          <span className="mt-1 block text-xs text-charcoal/50">
                            {row.note}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-orange font-medium">
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Map
            </h2>
            <p className="mt-2 text-sm text-charcoal/60">
              {/* REPLACE WITH REAL MAP: Google Maps embed for current service area */}
              Replace this placeholder with your Google Maps embed iframe.
            </p>
            <div className="mt-6 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-charcoal/20 bg-charcoal/5">
              <div className="px-6 text-center">
                <p className="font-display text-xl text-charcoal/70">
                  Google Maps Embed
                </p>
                <p className="mt-2 max-w-md text-sm text-charcoal/50">
                  Add your embed code here:
                  <code className="mt-2 block rounded bg-white px-3 py-2 text-xs">
                    {`<iframe src="https://www.google.com/maps/embed?pb=..." ...></iframe>`}
                  </code>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-cream">
        <div className="container-narrow grid gap-12 md:grid-cols-2">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold">Hours of Operation</h2>
            <p className="mt-4 leading-relaxed text-cream/85">
              <strong className="text-gold">Regular service:</strong>{" "}
              {hoursOfOperation.general}
            </p>
            <p className="mt-4 leading-relaxed text-cream/85">
              <strong className="text-gold">Catering:</strong>{" "}
              {hoursOfOperation.catering}
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-2xl border border-gold/30 bg-cream/5 p-8">
              <h2 className="font-display text-2xl font-bold text-gold">
                Book Us for Your Event
              </h2>
              <p className="mt-4 leading-relaxed text-cream/85">
                Weddings, corporate lunches, festivals, and backyard
                celebrations — Flavor Kitchen brings the full menu and a
                professional crew. Minimum guest counts apply; custom menus
                available on request.
              </p>
              <Link href="/contact" className="btn-primary mt-6">
                Request a Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
