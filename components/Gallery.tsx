"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
  { src: "/images/samples/sample1.jpg",  alt: "Hey Brew Cafe booth at an event",    wide: true,  tall: true  },
  { src: "/images/samples/sample2.jpg",  alt: "Hey Brew Cafe drinks display",        wide: false, tall: false },
  { src: "/images/samples/sample3.jpg",  alt: "Hey Brew Cafe cart setup",            wide: false, tall: false },
  { src: "/images/samples/sample4.jpg",  alt: "Hey Brew Cafe milktea selection",     wide: false, tall: false },
  { src: "/images/samples/sample5.jpg",  alt: "Hey Brew Cafe outdoor setup",         wide: false, tall: false },
  { src: "/images/samples/sample6.jpg",  alt: "Hey Brew Cafe at a venue",            wide: false, tall: false },
  { src: "/images/samples/sample7.jpg",  alt: "Hey Brew Cafe coffee cart",           wide: false, tall: false },
  { src: "/images/samples/sample8.jpg",  alt: "Hey Brew Cafe drinks lineup",         wide: true,  tall: false },
  { src: "/images/samples/sample9.jpg",  alt: "Hey Brew Cafe branded cups",          wide: false, tall: false },
  { src: "/images/samples/sample10.jpg", alt: "Hey Brew Cafe event booth",           wide: false, tall: false },
  { src: "/images/samples/sample11.jpg", alt: "Hey Brew Cafe setup detail",          wide: false, tall: false },
  { src: "/images/samples/sample12.jpg", alt: "Hey Brew Cafe menu display",          wide: false, tall: false },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24" style={{ background: "#ede4d3" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: "#8b5e3c" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Work
          </motion.p>
          <motion.h2
            className="font-black mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1e1209", letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            We&rsquo;ve Been Everywhere.
          </motion.h2>
          <motion.p
            className="text-sm max-w-lg mx-auto"
            style={{ color: "#7a6555" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            From intimate celebrations to grand corporate events — Hey Brew shows up with style, every time.
          </motion.p>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              className={`gallery-cell relative overflow-hidden group ${img.wide ? "lg:col-span-2" : ""} ${img.tall ? "lg:row-span-2" : ""}`}
              style={{ borderRadius: "16px", background: "#d4c4b0", aspectRatio: img.tall ? "1/2" : "1/1" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={img.wide ? "(max-width: 1024px) 50vw, 50vw" : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"}
                quality={80}
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.opacity = "0";
                  const wrapper = el.closest<HTMLElement>(".gallery-cell");
                  if (wrapper) wrapper.style.visibility = "hidden";
                }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(207,164,115,0.18)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
