import type { Metadata } from "next";
import FindUsSchedule from "@/components/FindUsSchedule";
import { findUsMetadata } from "@/lib/metadata";

export const metadata: Metadata = findUsMetadata;

export default function FindUsPage() {
  return (
    <>
      <section className="bg-rich-black pt-32 pb-16 text-cream">
        <div className="container-narrow px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Palm Beach County, Florida
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Find Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            We move with the county. Follow @Rabenflavorkitchen for daily
            locations and pop-up announcements.
          </p>
        </div>
      </section>
      <FindUsSchedule />
    </>
  );
}
