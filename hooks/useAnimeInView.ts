"use client";

import { useEffect, useRef, type RefObject } from "react";

function isInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

export function useAnimeInView(
  onEnter: (element: HTMLElement) => void
): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || fired.current) return;

    const run = () => {
      if (fired.current) return;
      fired.current = true;
      onEnter(el);
    };

    if (isInViewport(el)) {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );

    observer.observe(el);

    const fallback = window.setTimeout(run, 400);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [onEnter]);

  return ref;
}
