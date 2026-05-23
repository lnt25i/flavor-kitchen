import Image from "next/image";
import { images } from "@/lib/images";

export default function FlavorKitchenBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-rich-black"
    >
      {/* Primary truck — left wrap, anchored upper-left */}
      <div className="absolute inset-0 md:inset-y-[-8%] md:inset-x-[-4%]">
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

      {/* Secondary truck — menu side, offset lower-right with soft blend */}
      <div className="absolute inset-y-[18%] inset-x-[-10%] sm:inset-y-[12%] sm:inset-x-[-6%] md:inset-y-[8%] md:inset-x-0">
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

      {/* Warm brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,107,53,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(255,179,71,0.08),transparent_50%)]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}
