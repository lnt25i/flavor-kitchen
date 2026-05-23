import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FlavorKitchenBackground from "@/components/site/FlavorKitchenBackground";
import LightboxProvider from "@/components/lightbox/LightboxProvider";
import PageTransition from "@/components/anime/PageTransition";
import StructuredData from "@/components/StructuredData";
import { homeMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="relative min-h-screen bg-rich-black">
        <FlavorKitchenBackground />
        <StructuredData />
        <LightboxProvider>
          <Header />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </LightboxProvider>
      </body>
    </html>
  );
}
