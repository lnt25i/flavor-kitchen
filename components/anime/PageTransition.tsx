"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { animate } from "animejs";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    animate(el, {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 450,
      ease: "outCubic",
    });

    return () => {
      animate(el, {
        opacity: [1, 0],
        duration: 200,
        ease: "inCubic",
      });
    };
  }, [pathname]);

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  );
}
