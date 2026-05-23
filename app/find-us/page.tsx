import type { Metadata } from "next";
import FindUsSchedule from "@/components/FindUsSchedule";
import { findUsMetadata } from "@/lib/metadata";

export const metadata: Metadata = findUsMetadata;

export default function FindUsPage() {
  return (
    <>
      <section className="section-dark border-b border-cream/10 pt-32 pb-16 text-center">
        <div className="container-narrow px-4">
          <h1 className="font-display text-4xl font-semibold text-cream sm:text-5xl">
            Find Us
          </h1>
          <p className="text-lead mx-auto mt-6 max-w-md">
            Catch the truck at rotating stops — follow us to know where we&apos;ll be next. No fixed address.
          </p>
        </div>
      </section>
      <FindUsSchedule />
    </>
  );
}
