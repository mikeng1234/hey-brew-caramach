"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Update when branch count changes — last verified Apr 2026
const BRANCH_COUNT = "50+";

const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cfa473]";

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#000000" }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hb-hero.png"
          alt="Hey Brew Cafe PH"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-36 pb-20">
        <div className="max-w-2xl">
          <motion.p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-5"
            style={{ color: "#cfa473" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Open for Franchise
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="font-black leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", color: "#ffffff", letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hey Brew{" "}
            <span style={{ color: "#cfa473" }}>Cafe PH.</span>
          </motion.h1>

          <motion.p
            className="text-lg font-semibold mb-3 max-w-xl"
            style={{ color: "#ffffff" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            A Modern Heritage Brew.
          </motion.p>

          <motion.p
            className="text-base leading-relaxed mb-10 max-w-xl"
            style={{ color: "#999999" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            Artisanal coffee and premium milktea under one proven brand —
            built for the Philippine market, now open nationwide.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              href="#inquiry"
              className={`inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold active:scale-[0.95] ${FOCUS}`}
              style={{ background: "#cfa473", color: "#000000", borderRadius: "9999px" }}
              whileHover={{ y: -4, boxShadow: "0 8px 28px rgba(207,164,115,0.4)", transition: { duration: 0.2 } }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8895a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#cfa473"; }}
            >
              Start Your Journey
            </motion.a>
            <motion.a
              href="#packages"
              className={`inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold active:scale-[0.95] transition-all duration-200 ${FOCUS}`}
              style={{ border: "1px solid #444444", color: "#888888", borderRadius: "9999px" }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.4)", transition: { duration: 0.2 } }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#cfa473";
                el.style.color = "#cfa473";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#444444";
                el.style.color = "#888888";
              }}
            >
              View Packages
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 flex flex-wrap gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {[
            { value: "Dual",       label: "Coffee & Milktea Concept" },
            { value: BRANCH_COUNT, label: "Active Branches" },
            { value: "Nationwide", label: "Franchise Coverage" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black" style={{ color: "#cfa473" }}>{s.value}</p>
              <p className="text-xs mt-0.5 font-medium" style={{ color: "#767676" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{ background: "linear-gradient(to bottom, transparent, #000000)" }} />
    </section>
  );
}
