"use client";

import { motion } from "framer-motion";

const PACKAGES = [
  {
    name: "Package 1", price: "₱7,000",  cups: "50 Cups",  highlight: false,
    desc: "Perfect for intimate gatherings. 3 flavors, 3-hour booth, full set-up and manpower included.",
  },
  {
    name: "Package 2", price: "₱14,000", cups: "100 Cups", highlight: true,
    desc: "Our most popular tier. Ideal for weddings and mid-size corporate events — same great set-up, double the servings.",
  },
  {
    name: "Package 3", price: "₱21,000", cups: "150 Cups", highlight: false,
    desc: "For large-scale events and grand celebrations. Maximum coverage with the full Hey Brew experience.",
  },
];

const REMINDERS = [
  "Minimum 3 flavors of your choice per booking",
  "Minimum 3 hours per event — additional ₱500 for succeeding hours",
  "50% downpayment for reservation (non-refundable). Schedule changes must be done 5 days before the event.",
];

const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cfa473]";

export default function Packages() {
  return (
    <section id="packages" className="py-24 border-t border-[#1a1a1a]" style={{ background: "#000000" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#cfa473" }}>
              Coffee Cart Packages
            </p>
            <h2
              className="font-black mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", letterSpacing: "-0.03em" }}
            >
              Bring Hey Brew
              <br />
              <span style={{ color: "#cfa473" }}>to your event.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#888888" }}>
              Book our coffee cart for your next corporate event, wedding, or celebration.
              All packages include set-up, booth, and full manpower — ready to serve.
            </p>

            <div className="space-y-3 mb-8">
              {REMINDERS.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#cfa473" }} />
                  <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>{r}</p>
                </div>
              ))}
            </div>

            <motion.a
              href="#inquiry"
              className={`inline-flex items-center gap-2 px-7 py-3 text-sm font-bold active:scale-[0.95] ${FOCUS}`}
              style={{ background: "#cfa473", color: "#000000", borderRadius: "9999px" }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(207,164,115,0.4)", transition: { duration: 0.2 } }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8895a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#cfa473"; }}
            >
              Book a Package →
            </motion.a>
          </motion.div>

          {/* Right — package cards */}
          <div className="space-y-4">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                className="flex items-center gap-4 p-5 cursor-default"
                style={{
                  background: pkg.highlight ? "rgba(207,164,115,0.06)" : "#0d0d0d",
                  border: pkg.highlight ? "1px solid rgba(207,164,115,0.35)" : "1px solid #1e1e1e",
                  borderRadius: "18px",
                }}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(207,164,115,0.55)";
                  el.style.boxShadow = "0 0 0 1px rgba(207,164,115,0.25), 0 12px 32px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = pkg.highlight ? "rgba(207,164,115,0.35)" : "#1e1e1e";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Price badge */}
                <div
                  className="w-20 h-20 flex flex-col items-center justify-center shrink-0"
                  style={{ background: pkg.highlight ? "rgba(207,164,115,0.12)" : "rgba(207,164,115,0.05)", borderRadius: "14px" }}
                >
                  <span className="text-lg font-black" style={{ color: "#cfa473" }}>{pkg.price}</span>
                  <span className="text-xs mt-0.5" style={{ color: "#888888" }}>{pkg.cups}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold" style={{ color: "#ffffff" }}>{pkg.name}</h4>
                    {pkg.highlight && (
                      <span className="text-xs px-2 py-0.5 font-semibold" style={{ background: "rgba(207,164,115,0.12)", color: "#cfa473", borderRadius: "9999px" }}>
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>
                    {pkg.desc}
                  </p>
                </div>

                <a
                  href="#inquiry"
                  aria-label={`Book ${pkg.name}`}
                  className={`shrink-0 text-xs px-4 py-2 font-semibold transition-all duration-200 active:scale-[0.92] ${FOCUS}`}
                  style={{ background: "rgba(207,164,115,0.08)", color: "#cfa473", borderRadius: "9999px", border: "1px solid rgba(207,164,115,0.2)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(207,164,115,0.18)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(207,164,115,0.08)"; }}
                >
                  Book
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
