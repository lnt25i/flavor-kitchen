"use client";

import Image, { type ImageProps } from "next/image";
import type { KeyboardEvent } from "react";
import { useLightbox } from "./LightboxProvider";
import type { LightboxSlide } from "@/lib/lightbox";

type ClickableImageProps = Omit<ImageProps, "onClick"> & {
  caption?: string;
  title?: string;
  slides?: LightboxSlide[];
  slideIndex?: number;
  wrapperClassName?: string;
  price?: string | null;
};

export default function ClickableImage({
  caption,
  title,
  slides,
  slideIndex = 0,
  wrapperClassName = "",
  price,
  alt,
  fill,
  className = "",
  ...imageProps
}: ClickableImageProps) {
  const { open } = useLightbox();
  const src = typeof imageProps.src === "string" ? imageProps.src : "";

  const singleSlide: LightboxSlide = {
    src,
    title: title ?? (typeof alt === "string" ? alt : undefined),
    description: caption ?? (typeof alt === "string" ? alt : undefined),
    price,
  };

  function handleOpen() {
    if (slides?.length) {
      open(slides, slideIndex);
    } else {
      open([singleSlide], 0);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      className={`relative block cursor-zoom-in overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-rich-black ${
        fill ? "h-full min-h-0 w-full" : ""
      } ${wrapperClassName}`}
      aria-label={`View full size: ${title ?? alt ?? "image"}`}
    >
      <Image
        alt={alt ?? ""}
        fill={fill}
        className={className || (fill ? "object-cover" : "")}
        {...imageProps}
      />
    </div>
  );
}
