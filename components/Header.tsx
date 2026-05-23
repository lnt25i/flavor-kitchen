"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import {
  hoverLinkColor,
  hoverLinkColorActive,
} from "@/lib/anime/hover";
import { staggerFromLeft, staggerFromTop } from "@/lib/anime/presets";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
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
  const mobileOverlayRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const lineTopRef = useRef<HTMLSpanElement>(null);
  const lineMidRef = useRef<HTMLSpanElement>(null);
  const lineBotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 16;
      setScrolled((prev) => {
        if (prev !== next && headerRef.current) {
          animate(headerRef.current, {
            backgroundColor: next
              ? "rgba(13, 13, 13, 0.95)"
              : "rgba(13, 13, 13, 0)",
            borderColor: next
              ? "rgba(255, 248, 240, 0.1)"
              : "rgba(255, 248, 240, 0)",
            duration: 250,
            ease: "outCubic",
          });
        }
        return next;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
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
    staggerFromTop(
      Array.from(nav.querySelectorAll("[data-nav-link]")) as Element[],
      70
    );
  }, []);

  useEffect(() => {
    if (!menuOpen || !mobileNavRef.current) return;
    staggerFromLeft(
      Array.from(mobileNavRef.current.querySelectorAll("[data-mobile-link]")) as Element[],
      90
    );
  }, [menuOpen]);

  useEffect(() => {
    const overlay = mobileOverlayRef.current;
    const top = lineTopRef.current;
    const mid = lineMidRef.current;
    const bot = lineBotRef.current;
    if (!overlay || !top || !mid || !bot) return;

    animate(overlay, {
      opacity: menuOpen ? 1 : 0,
      duration: 280,
      ease: "outCubic",
    });

    if (menuOpen) {
      animate(top, {
        translateY: 5,
        rotate: 45,
        duration: 280,
        ease: "outCubic",
      });
      animate(mid, { opacity: 0, duration: 200, ease: "outCubic" });
      animate(bot, {
        translateY: -5,
        rotate: -45,
        duration: 280,
        ease: "outCubic",
      });
    } else {
      animate(top, {
        translateY: 0,
        rotate: 0,
        duration: 280,
        ease: "outCubic",
      });
      animate(mid, { opacity: 1, duration: 200, ease: "outCubic" });
      animate(bot, {
        translateY: 0,
        rotate: 0,
        duration: 280,
        ease: "outCubic",
      });
    }
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b border-transparent ${
        scrolled || menuOpen ? "shadow-soft backdrop-blur-md" : ""
      }`}
      style={{ backgroundColor: "rgba(13, 13, 13, 0)" }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-wide text-cream"
        >
          Flavor Kitchen
        </Link>

        <nav
          ref={desktopNavRef}
          className="hidden items-center gap-8 md:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-nav-link
                className="text-xs font-medium uppercase tracking-widest opacity-0"
                style={{ color: active ? "#FF6B35" : "rgba(255, 248, 240, 0.7)" }}
                onMouseEnter={(e) => {
                  if (active) hoverLinkColorActive(e.currentTarget, true);
                  else hoverLinkColor(e.currentTarget, true);
                }}
                onMouseLeave={(e) => {
                  if (active) hoverLinkColorActive(e.currentTarget, false);
                  else hoverLinkColor(e.currentTarget, false);
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span ref={lineTopRef} className="block h-px w-5 bg-cream" />
          <span ref={lineMidRef} className="block h-px w-5 bg-cream" />
          <span ref={lineBotRef} className="block h-px w-5 bg-cream" />
        </button>
      </div>

      <div
        ref={mobileOverlayRef}
        className={`fixed inset-0 top-[69px] bg-rich-black md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ opacity: 0 }}
      >
        <nav
          ref={mobileNavRef}
          className="flex flex-col items-center gap-7 px-4 py-14"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-mobile-link
              className={`font-display text-xl opacity-0 ${
                pathname === link.href ? "text-orange" : "text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
