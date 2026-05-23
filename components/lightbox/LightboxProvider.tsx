"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { animate } from "animejs";
import { lightboxSlideIn } from "@/lib/anime/presets";
import type { LightboxSlide } from "@/lib/lightbox";
import "yet-another-react-lightbox/styles.css";
import "./lightbox.css";

type LightboxContextValue = {
  open: (slides: LightboxSlide[], index?: number) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

function animateLightboxImage() {
  const img = document.querySelector(
    ".yarl__slide_image, .yarl__slide img"
  ) as HTMLElement | null;
  if (img) {
    img.style.opacity = "0";
    img.style.transform = "scale(0.96)";
    lightboxSlideIn(img);
  }
}

export default function LightboxProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState<LightboxSlide[]>([]);

  const openLightbox = useCallback(
    (nextSlides: LightboxSlide[], startIndex = 0) => {
      setSlides(nextSlides);
      setIndex(startIndex);
      setOpen(true);
    },
    []
  );

  useEffect(() => {
    if (!open) return;
    const runFade = () => {
      const container = document.querySelector(".yarl__container");
      if (container) {
        (container as HTMLElement).style.opacity = "0";
        animate(container, {
          opacity: [0, 1],
          duration: 420,
          ease: "outCubic",
        });
      }
      animateLightboxImage();
    };
    const t = window.setTimeout(runFade, 10);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(animateLightboxImage, 40);
    return () => window.clearTimeout(t);
  }, [open, index]);

  const yarlSlides = slides.map((s) => ({
    src: s.src,
    title: s.title,
    description: s.description,
    price: s.price,
  }));

  return (
    <LightboxContext.Provider value={{ open: openLightbox }}>
      {children}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={yarlSlides}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        animation={{ fade: 0, swipe: 300 }}
        controller={{ closeOnBackdropClick: true }}
        on={{
          view: ({ index: i }) => setIndex(i),
        }}
        styles={{
          container: { backgroundColor: "rgba(13, 13, 13, 0.97)" },
        }}
        carousel={{ finite: slides.length <= 1 }}
        render={{
          buttonPrev: slides.length <= 1 ? () => null : undefined,
          buttonNext: slides.length <= 1 ? () => null : undefined,
          slideFooter: ({ slide }) => {
            const s = slide as { title?: string; description?: string; price?: string | null };
            return (
              <div className="yarl-custom-caption">
                {s.title ? (
                  <p className="yarl-custom-caption__title">{s.title}</p>
                ) : null}
                {s.price ? (
                  <p className="yarl-custom-caption__price">{s.price}</p>
                ) : null}
                {s.description && !s.price ? (
                  <p className="yarl-custom-caption__desc">{s.description}</p>
                ) : s.description && s.price ? (
                  <p className="yarl-custom-caption__desc">{s.description}</p>
                ) : null}
              </div>
            );
          },
        }}
      />
    </LightboxContext.Provider>
  );
}
