"use client";

import Link from "next/link";
import { contact, site } from "@/lib/data";
import { fadeUp } from "@/lib/anime/presets";
import { useAnimeInView } from "@/hooks/useAnimeInView";

const footerLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/find-us", label: "Find Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const ref = useAnimeInView((el) => fadeUp(el));

  return (
    <footer
      ref={ref as React.RefObject<HTMLElement>}
      className="border-t border-cream/10 bg-rich-black/85 backdrop-blur-md"
    >
      <div className="container-narrow section-spacious !py-14">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-cream">Flavor Kitchen</p>
            <p className="mt-2 text-sm text-cream/50">{site.location}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-cream/50 hover:text-orange"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-center md:text-right">
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-cream/60 hover:text-orange"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <p className="divider-thin mt-12 pt-8 text-center text-xs text-cream/35">
          © {new Date().getFullYear()} Flavor Kitchen · flavorkitchen.us
        </p>
      </div>
    </footer>
  );
}
