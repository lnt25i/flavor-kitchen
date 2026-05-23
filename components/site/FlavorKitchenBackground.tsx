"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "@/lib/images";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useScrollParallax } from "@/hooks/useScrollParallax";

function parallaxFactor(scrollY: number, multiplier: number, mobile: boolean) {
  const scale = mobile ? 0.45 : 1;
  return scrollY * multiplier * scale;
}

export default function FlavorKitchenBackground() {
  const scrollY = useScrollParallax();
  const reducedMotion = usePrefersReducedMotion();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const leftY = parallaxFactor(scrollY, 0.055, mobile);
  const leftX = parallaxFactor(scrollY, -0.012, mobile);
  const rightY = parallaxFactor(scrollY, -0.04, mobile);
  const rightX = parallaxFactor(scrollY, 0.018, mobile);
  const glowShift = reducedMotion ? 0 : Math.min(scrollY * 0.015, 12);
  const glowOpacity = reducedMotion
    ? 1
    : 0.88 + Math.min(scrollY / 4000, 0.12);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-rich-black"
    >
      {/* Primary truck — drifts gently upward as user scrolls */}
      <div
        className="absolute inset-0 will-change-transform md:inset-y-[-8%] md:inset-x-[-4%]"
        style={
          reducedMotion
            ? undefined
            : {
                transform: `translate3d(${leftX}px, ${leftY}px, 0) scale(1.02)`,
              }
        }
      >
        <Image
          src={images.hero.left.src}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-[center_35%] opacity-[0.22] blur-[1px] sm:object-[left_30%] sm:opacity-[0.26] md:opacity-[0.3] lg:object-left"
        />
      </div>

      {/* Secondary truck — counter-direction for cinematic depth */}
      <div
        className="absolute inset-y-[18%] inset-x-[-10%] will-change-transform sm:inset-y-[12%] sm:inset-x-[-6%] md:inset-y-[8%] md:inset-x-0"
        style={
          reducedMotion
            ? undefined
            : {
                transform: `translate3d(${rightX}px, ${rightY}px, 0) scale(1.04)`,
              }
        }
      >
        <Image
          src={images.hero.right.src}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-[center_55%] opacity-[0.12] blur-[2px] sm:object-right sm:opacity-[0.16] md:opacity-[0.2] lg:object-[85%_45%]"
        />
      </div>

      {/* Dark gradient veil for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-rich-black/92 via-rich-black/88 to-rich-black/95" />

      {/* Warm brand glow — shifts subtly with scroll */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,107,53,0.14),transparent_55%)]"
        style={
          reducedMotion
            ? undefined
            : {
                transform: `translate3d(0, ${glowShift}px, 0)`,
                opacity: glowOpacity,
              }
        }
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(255,179,71,0.08),transparent_50%)]"
        style={
          reducedMotion
            ? undefined
            : { opacity: 0.75 + Math.min(scrollY / 5000, 0.25) }
        }
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}
