"use client";

import Image from "next/image";

export default function CupBanner() {
  return (
    <section
      aria-hidden="true"
      className="relative w-full overflow-hidden"
      style={{ height: "480px" }}
    >
      <Image
        src="/images/hbcupwide.png"
        alt="Hey Brew Cafe signature cup"
        fill
        className="object-cover"
        style={{ objectPosition: "center 90%" }}
        quality={90}
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
      />
    </section>
  );
}
