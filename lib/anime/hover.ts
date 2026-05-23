import { animate, type JSAnimation } from "animejs";

/** Image hover scrim — anime.js only (no CSS transitions). */
export function hoverImageOverlay(
  target: Element,
  entering: boolean
): JSAnimation {
  return animate(target, {
    backgroundColor: entering
      ? "rgba(13, 13, 13, 0.15)"
      : "rgba(13, 13, 13, 0)",
    duration: 300,
    ease: "outCubic",
  });
}

/** Nav / text link color on hover. */
export function hoverLinkColor(
  target: Element,
  entering: boolean,
  idleColor = "rgba(255, 248, 240, 0.7)",
  hoverColor = "#FFF8F0"
): JSAnimation {
  return animate(target, {
    color: entering ? hoverColor : idleColor,
    duration: 200,
    ease: "outCubic",
  });
}

export function hoverLinkColorActive(
  target: Element,
  entering: boolean
): JSAnimation {
  return animate(target, {
    color: entering ? "#FFB347" : "#FF6B35",
    duration: 200,
    ease: "outCubic",
  });
}
