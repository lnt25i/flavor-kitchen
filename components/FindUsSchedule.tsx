"use client";

import Link from "next/link";
import { useCallback } from "react";
import { hoursOfOperation, site, weeklySchedule } from "@/lib/data";
import { slideFromLeft, slideFromRight } from "@/lib/anime/presets";
import { useAnimeInView } from "@/hooks/useAnimeInView";
import AnimateInView from "./anime/AnimateInView";
import SectionHeading from "./anime/SectionHeading";

export default function FindUsSchedule() {
  const tableRef = useAnimeInView(
    useCallback((el: HTMLElement) => {
      const rows = el.querySelectorAll("[data-schedule-row]");
      rows.forEach((row, i) => {
        const anim = i % 2 === 0 ? slideFromLeft : slideFromRight;
        anim(row as Element, i * 80);
      });
    }, [])
  );

  return (
    <>
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Service Area"
            title={site.location}
            description="Weekly rotations across the county — follow @Rabenflavorkitchen for real-time location updates."
          />
          <div
            ref={tableRef as React.RefObject<HTMLDivElement>}
            className="mt-8 overflow-hidden rounded-2xl border border-charcoal/10 bg-white opacity-0 shadow-sm"
          >
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
                      data-schedule-row
                      className={`opacity-0 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
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
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-orange">
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
          <AnimateInView preset="fadeUp">
            <h2 className="font-display text-2xl font-bold text-charcoal">Map</h2>
            <p className="mt-2 text-sm text-charcoal/60">
              {/* REPLACE WITH REAL MAP: Google Maps embed centered on Palm Beach County, FL */}
              Replace with your Google Maps embed iframe when ready.
            </p>
            <div className="mt-6 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-charcoal/20 bg-charcoal/5">
              <div className="px-6 text-center">
                <p className="font-display text-xl text-charcoal/70">
                  Palm Beach County, Florida
                </p>
                <p className="mt-2 max-w-md text-sm text-charcoal/50">
                  Embed: Google Maps centered on Palm Beach County
                </p>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-cream">
        <div className="container-narrow grid gap-12 md:grid-cols-2">
          <AnimateInView preset="slideLeft">
            <h2 className="font-display text-2xl font-bold">Hours of Operation</h2>
            <p className="mt-4 leading-relaxed text-cream/85">
              <strong className="text-gold">Regular service:</strong>{" "}
              {hoursOfOperation.general}
            </p>
            <p className="mt-4 leading-relaxed text-cream/85">
              <strong className="text-gold">Catering:</strong>{" "}
              {hoursOfOperation.catering}
            </p>
            {/* UPDATE HOURS: Replace placeholder schedule above when final hours are set */}
          </AnimateInView>
          <AnimateInView preset="slideRight">
            <div className="rounded-2xl border border-gold/30 bg-cream/5 p-8">
              <h2 className="font-display text-2xl font-bold text-gold">
                Book Flavor Kitchen for Your Event
              </h2>
              <p className="mt-4 leading-relaxed text-cream/85">
                Weddings, corporate lunches, festivals, and backyard celebrations
                across Palm Beach County — we bring the full five-culture menu
                and a professional crew.
              </p>
              <Link href="/contact" className="btn-primary mt-6">
                Request a Quote
              </Link>
            </div>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
