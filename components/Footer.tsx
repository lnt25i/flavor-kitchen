"use client";

import Link from "next/link";
import { contact, site } from "@/lib/data";
import { fadeUp } from "@/lib/anime/presets";
import { useAnimeInView } from "@/hooks/useAnimeInView";

const footerLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/find-us", label: "Find Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const ref = useAnimeInView((el) => fadeUp(el));

  return (
    <footer ref={ref as React.RefObject<HTMLElement>} className="bg-rich-black text-cream opacity-0">
      <div className="section-padding !py-12">
        <div className="container-narrow grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold">Flavor Kitchen</p>
            <p className="mt-1 text-sm text-gold">by Chef Raben</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/80">
              {site.tagline} Serving {site.location} with five cultures on one
              menu.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Connect
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-orange"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange"
                >
                  {site.socialHandle}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-cream/80 hover:text-orange"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-cream/80 hover:text-orange"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={contact.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-cream/80 hover:text-orange"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>
        </div>

        <div className="container-narrow mt-12 border-t border-cream/10 pt-8 text-center text-xs text-cream/50">
          <p>
            © {new Date().getFullYear()} Flavor Kitchen by Chef Raben. All
            rights reserved.
          </p>
          <p className="mt-1">flavorkitchen.us · {site.location}</p>
        </div>
      </div>
    </footer>
  );
}
