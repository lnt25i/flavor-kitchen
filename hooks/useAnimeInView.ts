"use client";

import { useEffect, useRef, type RefObject } from "react";

export function useAnimeInView(
  onEnter: (element: HTMLElement) => void
): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || fired.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          onEnter(el);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onEnter]);

  return ref;
}
