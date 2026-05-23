import type { Metadata } from "next";
import FindUsSchedule from "@/components/FindUsSchedule";
import PageHeaderReveal from "@/components/animations/PageHeaderReveal";
import { findUsMetadata } from "@/lib/metadata";

export const metadata: Metadata = findUsMetadata;

export default function FindUsPage() {
  return (
    <>
      <PageHeaderReveal
        title="Find Us"
        description="Catch the truck at rotating stops — follow us to know where we'll be next. No fixed address."
      />
      <FindUsSchedule />
    </>
  );
}
