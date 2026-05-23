"use client";

import Link from "next/link";
import { useCallback } from "react";
import { hoursOfOperation, weeklySchedule } from "@/lib/data";
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
        anim(row as Element, i * 70);
      });
    }, [])
  );

  return (
    <>
      <section className="section-dark section-spacious section-premium-edge">
        <div className="container-narrow">
          <SectionHeading
            title="Weekly Truck Stops"
            description="Stops and hours are confirmed by Chef Raben on @RaBenFlavorKitchen — not a fixed address."
          />
          <div
            ref={tableRef as React.RefObject<HTMLDivElement>}
            className="card-premium mt-14 overflow-hidden"
          >
            <table className="w-full min-w-[520px] text-left text-type-body-sm sm:text-base">
              <thead>
                <tr className="border-b border-cream/15 text-eyebrow">
                  <th className="px-6 py-4 text-left">Day</th>
                  <th className="px-6 py-4 text-left">Location</th>
                  <th className="px-6 py-4 text-left">Hours</th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map((row) => (
                  <tr
                    key={row.day}
                    data-schedule-row
                    className="border-b border-cream/10"
                  >
                    <td className="px-6 py-5 font-semibold text-cream">
                      {row.day}
                    </td>
                    <td className="px-6 py-5 text-body">{row.location}</td>
                    <td className="whitespace-nowrap px-6 py-5 font-medium text-orange">
                      {row.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-dark section-spacious section-premium-edge border-t border-cream/10">
        <div className="container-narrow">
          <AnimateInView preset="fadeUp">
            <h2 className="text-display-section text-2xl sm:text-3xl">
              Service Area
            </h2>
            <p className="text-lead mt-4 max-w-lg">
              {/* REPLACE WITH REAL MAP: Google Maps embed — Palm Beach County, FL */}
              The truck serves Palm Beach County — West Palm Beach, Delray, Lake Worth, Jupiter, and beyond. Check Instagram for the live pin; we don&apos;t publish one fixed curb address.
            </p>
            <div className="mt-10 flex aspect-[16/9] items-center justify-center rounded-2xl border border-cream/15 bg-rich-black/80 shadow-soft backdrop-blur-sm">
              <p className="text-body-muted px-6 text-center">
                County map embed — follow social for today&apos;s stop
              </p>
            </div>
          </AnimateInView>
        </div>
      </section>

      <section className="section-dark section-spacious section-premium-edge border-t border-cream/10">
        <div className="container-narrow grid gap-14 md:grid-cols-2">
          <AnimateInView preset="slideLeft">
            <h2 className="text-display-section text-2xl sm:text-3xl">Hours</h2>
            <p className="text-lead mt-6">{hoursOfOperation.general}</p>
            <p className="text-lead mt-4">{hoursOfOperation.catering}</p>
          </AnimateInView>
          <AnimateInView preset="slideRight">
            <div className="card-premium p-8 sm:p-10">
              <h2 className="text-display-section text-2xl text-gold sm:text-3xl">
                Book the Truck
              </h2>
              <p className="text-lead mt-6">
                Weddings, corporate events, and festivals across Palm Beach County.
              </p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Get in Touch
              </Link>
            </div>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
