"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { staggerFromLeft, staggerFromTop } from "@/lib/anime/presets";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/find-us", label: "Find Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const desktopNavRef = useRef<HTMLElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const nav = desktopNavRef.current;
    if (!nav) return;
    const links = nav.querySelectorAll("[data-nav-link]");
    staggerFromTop(Array.from(links) as Element[], 80);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const nav = mobileNavRef.current;
    if (!nav) return;
    const links = nav.querySelectorAll("[data-mobile-link]");
    staggerFromLeft(Array.from(links) as Element[], 100);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled || menuOpen
          ? "bg-charcoal/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-wide text-cream sm:text-xl"
        >
          Flavor Kitchen
          <span className="block text-xs font-sans font-normal tracking-widest text-gold">
            by Chef Raben
          </span>
        </Link>

        <nav
          ref={desktopNavRef}
          className="hidden items-center gap-8 md:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-nav-link
              className={`text-sm font-medium uppercase tracking-wider opacity-0 ${
                pathname === link.href
                  ? "text-orange"
                  : "text-cream/90 hover:text-orange"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/find-us"
            data-nav-link
            className="btn-primary !py-2.5 !text-xs opacity-0"
          >
            Find Us
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-cream ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 top-[72px] bg-charcoal/98 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          ref={mobileNavRef}
          className="flex flex-col items-center gap-8 px-4 py-12"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-mobile-link
              className={`font-display text-2xl opacity-0 ${
                pathname === link.href ? "text-orange" : "text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/find-us"
            data-mobile-link
            className="btn-primary mt-4 opacity-0"
          >
            Find Us Today
          </Link>
        </nav>
      </div>
    </header>
  );
}
