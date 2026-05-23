"use client";

import { useCallback, type ReactNode } from "react";
import { useAnimeInView } from "@/hooks/useAnimeInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import {
  bounceIn,
  fadeUp,
  scaleIn,
  slideFromLeft,
  slideFromRight,
  staggerFadeUp,
} from "@/lib/anime/presets";

export type AnimePreset =
  | "fadeUp"
  | "scaleIn"
  | "slideLeft"
  | "slideRight"
  | "bounce"
  | "staggerChildren";

interface AnimateInViewProps {
  children: ReactNode;
  className?: string;
  preset?: AnimePreset;
  childSelector?: string;
}

export default function AnimateInView({
  children,
  className = "",
  preset = "fadeUp",
  childSelector,
}: AnimateInViewProps) {
  const reducedMotion = usePrefersReducedMotion();

  const onEnter = useCallback(
    (el: HTMLElement) => {
      if (reducedMotion) return;
      if (preset === "staggerChildren") {
        const targets = childSelector
          ? el.querySelectorAll(childSelector)
          : el.children;
        staggerFadeUp(Array.from(targets) as Element[]);
        return;
      }
      const runners = {
        fadeUp,
        scaleIn,
        slideLeft: slideFromLeft,
        slideRight: slideFromRight,
        bounce: bounceIn,
      } as const;
      runners[preset as keyof typeof runners]?.(el);
    },
    [preset, childSelector, reducedMotion]
  );

  const ref = useAnimeInView(onEnter);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
}
