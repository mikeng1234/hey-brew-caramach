"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Why Join", href: "#why" },
  { label: "Gallery",  href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "Inquire",  href: "#inquiry" },
];

const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5e3c]";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!open) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [open]);

  return (
    <nav
      aria-label="Site navigation"
      className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b"
      style={{
        background: scrolled ? "rgba(245,237,226,0.95)" : "rgba(245,237,226,0.6)",
        borderColor: "#ddd0be",
      }}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>

        {/* Logo */}
        <a href="https://www.facebook.com/HeyBrewPH" target="_blank" rel="noopener noreferrer" className={`shrink-0 ${FOCUS} rounded`}>
          <Image
            src="/images/hb-logo-horizontal-white-nobg.png"
            alt="Hey Brew Cafe PH"
            height={48}
            width={216}
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-8" : "h-12"}`}
            priority
            style={{ filter: "brightness(0) saturate(100%) invert(32%) sepia(25%) saturate(800%) hue-rotate(10deg) brightness(70%)" }}
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
              if (el.parentElement) {
                el.parentElement.textContent = "HEY BREW CAFE PH";
                Object.assign(el.parentElement.style, {
                  color: "#8b5e3c",
                  fontWeight: "900",
                  fontSize: "1rem",
                  letterSpacing: "-0.02em",
                });
              }
            }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold" style={{ color: "#4a3728" }}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`transition-colors duration-200 ${FOCUS} rounded`}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8b5e3c"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#4a3728"; }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.a
          href="#inquiry"
          className={`hidden md:inline-flex items-center px-6 py-2.5 text-sm font-bold transition-all duration-200 active:scale-[0.95] ${FOCUS}`}
          style={{ background: "#cfa473", color: "#1e1209", borderRadius: "9999px" }}
          whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(207,164,115,0.4)", transition: { duration: 0.2 } }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8895a"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#cfa473"; }}
        >
          Franchise Now
        </motion.a>

        {/* Hamburger */}
        <button
          className={`md:hidden p-2 ${FOCUS} rounded`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          style={{ color: "#4a3728" }}
        >
          <div className="w-6 space-y-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Outside-click overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="md:hidden relative z-50 border-t px-6 py-6 space-y-4"
            style={{ background: "#f5ede2", borderColor: "#ddd0be" }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`block text-base font-semibold transition-colors duration-200 ${FOCUS} rounded`}
                style={{ color: "#4a3728" }}
                onClick={() => setOpen(false)}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8b5e3c"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#4a3728"; }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#inquiry"
              className={`inline-flex px-6 py-2.5 text-sm font-bold transition-all duration-200 active:scale-[0.95] ${FOCUS}`}
              style={{ background: "#cfa473", color: "#1e1209", borderRadius: "9999px" }}
              onClick={() => setOpen(false)}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8895a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#cfa473"; }}
            >
              Franchise Now
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </nav>
  );
}
