"use client";

import Image from "next/image";
import Icon from "@mdi/react";
import { mdiPhone, mdiEmailOutline } from "@mdi/js";

const LINKS = [
  { label: "Why Join", href: "#why" },
  { label: "Gallery",  href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "Inquire",  href: "#inquiry" },
];

const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5e3c] rounded";

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: "#ede4d3", borderColor: "#ddd0be" }}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          {/* Brand */}
          <div>
            <a href="https://www.facebook.com/HeyBrewPH" target="_blank" rel="noopener noreferrer" className={`inline-block ${FOCUS}`}>
              <Image
                src="/images/hb-logo-horizontal-white-nobg.png"
                alt="Hey Brew Cafe PH"
                width={160}
                height={48}
                className="object-contain mb-2"
                style={{ filter: "brightness(0) sepia(1) saturate(5) hue-rotate(335deg) brightness(0.55)" }}
              />
            </a>
            <p className="text-xs mt-0.5 mb-2 font-medium" style={{ color: "#7a6555" }}>
              A Modern Heritage Brew.
            </p>
            <div className="space-y-1.5">
              <a href="tel:09677963243" className={`flex items-center gap-1.5 text-xs transition-colors duration-200 ${FOCUS}`} style={{ color: "#7a6555" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8b5e3c"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#7a6555"; }}>
                <Icon path={mdiPhone} size={0.55} aria-hidden="true" />0967 796 3243
              </a>
              <a href="mailto:heybrewcafeph@gmail.com" className={`flex items-center gap-1.5 text-xs transition-colors duration-200 ${FOCUS}`} style={{ color: "#7a6555" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8b5e3c"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#7a6555"; }}>
                <Icon path={mdiEmailOutline} size={0.55} aria-hidden="true" />heybrewcafeph@gmail.com
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-xs font-medium transition-colors duration-200 ${FOCUS}`}
                style={{ color: "#7a6555" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1e1209"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#7a6555"; }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderColor: "#ddd0be" }}>
          <p className="text-xs" style={{ color: "#7a6555" }}>
            © {new Date().getFullYear()} Hey Brew Cafe PH. A Modern Heritage Brew.
          </p>
          <p className="text-xs" style={{ color: "#7a6555" }}>
            Website by{" "}
            <a
              href="https://www.facebook.com/GenXcript"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline transition-colors duration-200 ${FOCUS}`}
              style={{ color: "#8b5e3c" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#cfa473"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8b5e3c"; }}
            >
              GenXcript
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
