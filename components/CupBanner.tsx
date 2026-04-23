"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CupBanner() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Cup floats upward as you scroll into the section
  const cupY    = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const cupScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);
  const cupOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  // Background pattern drifts at a slower rate
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={ref}
      aria-hidden="true"
      className="relative overflow-hidden flex items-center justify-center"
      style={{ background: "#ede4d3", minHeight: "420px" }}
    >
      {/* Subtle radial glow behind the cup */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 55% at 50% 60%, rgba(207,164,115,0.22) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[220, 320, 420].map((size) => (
          <div
            key={size}
            className="absolute rounded-full border"
            style={{
              width: size,
              height: size,
              borderColor: "rgba(207,164,115,0.12)",
            }}
          />
        ))}
      </div>

      {/* Cup image with parallax */}
      <motion.div
        style={{ y: cupY, scale: cupScale, opacity: cupOpacity }}
        className="relative z-10"
      >
        <Image
          src="/images/hbcup.png"
          alt="Hey Brew Cafe signature cup"
          width={340}
          height={340}
          className="object-contain drop-shadow-xl"
          quality={90}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
        />
      </motion.div>

      {/* Text beneath cup */}
      <motion.p
        className="absolute bottom-10 text-xs font-bold tracking-[0.3em] uppercase"
        style={{ color: "#cfa473", opacity: cupOpacity }}
        initial={{ opacity: 0 }}
      >
        Heaven in a Cup
      </motion.p>
    </section>
  );
}
