"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    icon: "☕",
    category: "Artisanal Coffee",
    name: "Locally Sourced Beans",
    desc: "Expertly roasted, locally sourced beans. From bold espressos to silky lattes — crafted for the modern Filipino coffee lover.",
    tag: "Core Product",
    cta: "See Gallery",
    href: "#gallery",
  },
  {
    icon: "🧋",
    category: "Premium Milktea",
    name: "Authentic Tea Blends",
    desc: "Authentic tea bases with rich milk and creative sinkers. Capturing the youth market and afternoon rush all day long.",
    tag: "Core Product",
    cta: "See Gallery",
    href: "#gallery",
  },
  {
    icon: "📈",
    category: "Business Model",
    name: "Proven ROI",
    desc: "Streamlined operations, comprehensive training, and aggressive marketing support to ensure a swift return on investment.",
    tag: "Key Advantage",
    cta: "View Packages",
    href: "#packages",
  },
  {
    icon: "🤝",
    category: "Franchisee Support",
    name: "End-to-End Support",
    desc: "From setup to grand opening — full training, branding, operational guidance, and ongoing support for your branch.",
    tag: "Included",
    cta: "Inquire Now",
    href: "#inquiry",
  },
];

export default function Why() {
  return (
    <section id="why" className="py-24" style={{ background: "#f5ede2" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <motion.p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: "#8b5e3c" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Opportunity
          </motion.p>
          <motion.h2
            className="font-black mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1e1209", letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Coffee & Milktea Mastery.
          </motion.h2>
          <motion.p
            className="text-sm max-w-lg"
            style={{ color: "#7a6555" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Why choose one when you can offer both? Our dual-concept menu maximizes
            foot traffic and caters to diverse taste profiles throughout the day.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.name}
              className="relative flex flex-col p-6 cursor-default"
              style={{ background: "#ede4d3", border: "1px solid #ddd0be", borderRadius: "20px" }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#cfa473";
                el.style.boxShadow = "0 0 0 1px rgba(207,164,115,0.3), 0 12px 32px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#ddd0be";
                el.style.boxShadow = "none";
              }}
            >
              {/* Tag */}
              <span
                className="absolute top-4 right-4 text-xs px-3 py-1 font-semibold"
                style={{ background: "rgba(207,164,115,0.15)", color: "#8b5e3c", borderRadius: "9999px", border: "1px solid rgba(207,164,115,0.35)" }}
              >
                {card.tag}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-5 shrink-0 text-xl"
                style={{ background: "rgba(207,164,115,0.15)" }}
                aria-hidden="true"
              >
                {card.icon}
              </div>

              <p className="text-xs font-bold mb-1" style={{ color: "#8b5e3c", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {card.category}
              </p>
              <h3 className="text-base font-bold mb-2" style={{ color: "#1e1209" }}>
                {card.name}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#7a6555" }}>
                {card.desc}
              </p>

              <a
                href={card.href}
                aria-label={`${card.cta} — ${card.name}`}
                className="text-xs px-4 py-2 font-semibold transition-all duration-200 active:scale-[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5e3c]"
                style={{ background: "rgba(207,164,115,0.15)", color: "#8b5e3c", borderRadius: "9999px", border: "1px solid rgba(207,164,115,0.35)", width: "fit-content" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(207,164,115,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(207,164,115,0.15)"; }}
              >
                {card.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#inquiry"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5e3c] rounded"
            style={{ color: "#8b5e3c" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1e1209"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8b5e3c"; }}
          >
            Inquire about franchising →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
