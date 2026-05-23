"use client";

import Link from "next/link";
import { contact, site } from "@/lib/data";

const footerLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/find-us", label: "Find Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/15 bg-rich-black/90 backdrop-blur-md">
      <div className="container-narrow section-spacious !py-14">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-semibold text-cream sm:text-2xl">
              Flavor Kitchen
            </p>
            <p className="text-caption mt-2">{site.location}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-nav text-cream/80 transition-colors hover:text-orange"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-center md:text-right">
            <a
              href={`mailto:${contact.email}`}
              className="text-type-body-sm font-medium text-cream/90 transition-colors hover:text-orange"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <p className="divider-thin text-caption mt-12 pt-8 text-center">
          © {new Date().getFullYear()} Flavor Kitchen · flavorkitchen.us
        </p>
      </div>
    </footer>
  );
}
