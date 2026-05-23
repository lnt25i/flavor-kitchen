"use client";

import Image, { type ImageProps } from "next/image";
import { useRef } from "react";
import { hoverImageOverlay } from "@/lib/anime/hover";
import { useLightbox } from "./LightboxProvider";
import type { LightboxSlide } from "@/lib/lightbox";

type ClickableImageProps = Omit<ImageProps, "onClick"> & {
  caption?: string;
  title?: string;
  slides?: LightboxSlide[];
  slideIndex?: number;
  wrapperClassName?: string;
};

export default function ClickableImage({
  caption,
  title,
  slides,
  slideIndex = 0,
  wrapperClassName = "",
  alt,
  fill,
  className = "",
  ...imageProps
}: ClickableImageProps) {
  const { open } = useLightbox();
  const overlayRef = useRef<HTMLSpanElement>(null);
  const src = typeof imageProps.src === "string" ? imageProps.src : "";

  const singleSlide: LightboxSlide = {
    src,
    title: title ?? (typeof alt === "string" ? alt : undefined),
    description: caption ?? (typeof alt === "string" ? alt : undefined),
  };

  function handleOpen() {
    if (slides?.length) {
      open(slides, slideIndex);
    } else {
      open([singleSlide], 0);
    }
  }

  function handleOverlayHover(entering: boolean) {
    if (overlayRef.current) hoverImageOverlay(overlayRef.current, entering);
  }

  return (
    <button
      type="button"
      onClick={handleOpen}
      onMouseEnter={() => handleOverlayHover(true)}
      onMouseLeave={() => handleOverlayHover(false)}
      className={`relative block cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-rich-black ${
        fill ? "h-full w-full" : ""
      } ${wrapperClassName}`}
      aria-label={`View full size: ${title ?? alt ?? "image"}`}
    >
      <Image
        alt={alt ?? ""}
        fill={fill}
        className={`object-cover ${className}`}
        {...imageProps}
      />
      <span
        ref={overlayRef}
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: "rgba(13, 13, 13, 0)" }}
        aria-hidden
      />
    </button>
  );
}
