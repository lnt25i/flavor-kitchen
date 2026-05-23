import { animate, stagger, type JSAnimation } from "animejs";

export function fadeUp(
  targets: string | Element | Element[],
  delay = 0
): JSAnimation {
  return animate(targets, {
    opacity: [0, 1],
    translateY: [28, 0],
    duration: 700,
    delay,
    ease: "outCubic",
  });
}

export function fadeIn(
  targets: string | Element | Element[],
  delay = 0
): JSAnimation {
  return animate(targets, {
    opacity: [0, 1],
    duration: 600,
    delay,
    ease: "outQuad",
  });
}

export function scaleIn(
  targets: string | Element | Element[],
  delay = 0
): JSAnimation {
  return animate(targets, {
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 600,
    delay,
    ease: "outCubic",
  });
}

export function slideFromLeft(
  targets: string | Element | Element[],
  delay = 0
): JSAnimation {
  return animate(targets, {
    opacity: [0, 1],
    translateX: [-40, 0],
    duration: 650,
    delay,
    ease: "outCubic",
  });
}

export function slideFromRight(
  targets: string | Element | Element[],
  delay = 0
): JSAnimation {
  return animate(targets, {
    opacity: [0, 1],
    translateX: [40, 0],
    duration: 650,
    delay,
    ease: "outCubic",
  });
}

export function bounceIn(
  targets: string | Element | Element[],
  delay = 0
): JSAnimation {
  return animate(targets, {
    opacity: [0, 1],
    scale: [0.6, 1],
    duration: 800,
    delay,
    ease: "outElastic(1, .6)",
  });
}

export function staggerFadeUp(
  targets: string | Element | Element[],
  staggerMs = 80
): JSAnimation {
  return animate(targets, {
    opacity: [0, 1],
    translateY: [24, 0],
    duration: 600,
    delay: stagger(staggerMs),
    ease: "outCubic",
  });
}

export function staggerFromTop(
  targets: string | Element | Element[],
  staggerMs = 70
): JSAnimation {
  return animate(targets, {
    opacity: [0, 1],
    translateY: [-16, 0],
    duration: 500,
    delay: stagger(staggerMs),
    ease: "outCubic",
  });
}

export function staggerFromLeft(
  targets: string | Element | Element[],
  staggerMs = 90
): JSAnimation {
  return animate(targets, {
    opacity: [0, 1],
    translateX: [-32, 0],
    duration: 550,
    delay: stagger(staggerMs),
    ease: "outCubic",
  });
}

export function pulseLoop(target: Element): JSAnimation {
  return animate(target, {
    scale: [1, 1.05, 1],
    duration: 1800,
    ease: "inOutSine",
    loop: true,
  });
}

export function letterStagger(targets: Element[]): JSAnimation {
  return animate(targets, {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 500,
    delay: stagger(35),
    ease: "outCubic",
  });
}

export function successPop(target: Element): JSAnimation {
  return animate(target, {
    opacity: [0, 1],
    scale: [0.85, 1],
    duration: 650,
    ease: "outElastic(1, .55)",
  });
}

export function slideUnderline(
  target: Element,
  left: number,
  width: number
): JSAnimation {
  return animate(target, {
    left: `${left}px`,
    width: `${width}px`,
    duration: 400,
    ease: "outCubic",
  });
}
