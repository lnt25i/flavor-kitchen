import type { Metadata } from "next";
import MenuPageContent from "@/components/MenuPageContent";
import PageHeaderReveal from "@/components/animations/PageHeaderReveal";
import { menuMetadata } from "@/lib/metadata";

export const metadata: Metadata = menuMetadata;

export default function MenuPage() {
  return (
    <>
      <PageHeaderReveal
        title="Menu"
        description="Ten items from the truck — tap any photo to enlarge."
      />
      <MenuPageContent />
    </>
  );
}
