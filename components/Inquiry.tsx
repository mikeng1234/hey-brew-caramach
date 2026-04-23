"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cfa473]";

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  background: "#0d0d0d",
  border: "1px solid #1e1e1e",
  borderRadius: "12px",
  padding: "0.75rem 1rem",
  color: "#ffffff",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.2s ease",
  fontFamily: "inherit",
};

function Field({
  id, label, children,
}: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold mb-1.5" style={{ color: "#888888", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label} <span style={{ color: "#cfa473" }}>*</span>
      </label>
      {children}
    </div>
  );
}

export default function Inquiry() {
  const [status, setStatus] = useState<Status>("idle");
  const [resetKey, setResetKey] = useState(0);
  const successRef = useRef<HTMLDivElement>(null);

  // Scroll success panel into view on mobile after submission
  useEffect(() => {
    if (status === "success" && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      // TODO: replace with real API route or Formspree endpoint
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleReset() {
    setStatus("idle");
    setResetKey((k) => k + 1);
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    e.currentTarget.style.borderColor = "#cfa473";
  }
  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    e.currentTarget.style.borderColor = "#1e1e1e";
  }

  return (
    <section id="inquiry" className="py-24 border-t border-[#1a1a1a]" style={{ background: "#000000" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#cfa473" }}>
              Take The Next Step
            </p>
            <h2
              className="font-black mb-4 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", letterSpacing: "-0.03em" }}
            >
              Ready to brew
              <br />
              <span style={{ color: "#cfa473" }}>your success?</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#888888" }}>
              Fill out the inquiry form and our franchise development team will get in touch
              to discuss availability in your preferred location.
            </p>

            {/* Badge */}
            <div
              className="flex items-start gap-3 p-4 mb-8"
              style={{ background: "#0d0d0d", border: "1px solid #1e1e1e", borderRadius: "16px" }}
            >
              <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">✅</span>
              <div>
                <h4 className="text-sm font-bold mb-0.5" style={{ color: "#ffffff" }}>Open Nationwide</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>
                  Actively expanding across all major regions in the Philippines.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { label: "Phone",    value: "0967 796 3243",           href: "tel:09677963243" },
                { label: "Email",    value: "heybrewcafeph@gmail.com", href: "mailto:heybrewcafeph@gmail.com" },
                { label: "Facebook", value: "Hey Brew",                href: "https://www.facebook.com/HeyBrewPH/", external: true },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span className="text-xs w-20 shrink-0 font-bold" style={{ color: "#444444", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {c.label}
                  </span>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className={`text-sm transition-colors duration-200 ${FOCUS} rounded`}
                    style={{ color: "#888888" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#cfa473"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#888888"; }}
                  >
                    {c.value}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="p-8"
            style={{ background: "#0d0d0d", border: "1px solid #1e1e1e", borderRadius: "24px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-base font-bold mb-6" style={{ color: "#ffffff" }}>Franchise Inquiry</h3>

            <div aria-live="polite" aria-atomic="true">
              {status === "success" ? (
                <div ref={successRef} className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <span className="text-4xl">🎉</span>
                  <h4 className="text-base font-bold" style={{ color: "#ffffff" }}>Inquiry Received!</h4>
                  <p className="text-sm" style={{ color: "#888888" }}>
                    Our team will reach out within 1–2 business days.
                  </p>
                  <button
                    onClick={handleReset}
                    className={`mt-2 text-xs underline transition-colors duration-200 ${FOCUS} rounded`}
                    style={{ color: "#888888" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#cfa473"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#888888"; }}
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form key={resetKey} className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <Field id="firstName" label="First Name">
                      <input id="firstName" name="firstName" type="text" required placeholder="Juan"
                        style={INPUT_STYLE} onFocus={handleFocus} onBlur={handleBlur} />
                    </Field>
                    <Field id="lastName" label="Last Name">
                      <input id="lastName" name="lastName" type="text" required placeholder="Dela Cruz"
                        style={INPUT_STYLE} onFocus={handleFocus} onBlur={handleBlur} />
                    </Field>
                  </div>

                  <Field id="mobile" label="Mobile Number">
                    <input
                      id="mobile" name="mobile" type="tel" required
                      placeholder="+63 900 000 0000"
                      pattern="^(\+?63|0)9\d{9}$"
                      style={INPUT_STYLE} onFocus={handleFocus} onBlur={handleBlur}
                    />
                  </Field>

                  <Field id="email" label="Email Address">
                    <input id="email" name="email" type="email" required placeholder="juan@email.com"
                      style={INPUT_STYLE} onFocus={handleFocus} onBlur={handleBlur} />
                  </Field>

                  <Field id="location" label="Target Location">
                    <input id="location" name="location" type="text" required placeholder="City or Province"
                      style={INPUT_STYLE} onFocus={handleFocus} onBlur={handleBlur} />
                  </Field>

                  <Field id="capital" label="Available Capital">
                    <div className="relative">
                      <select
                        id="capital" name="capital" required
                        style={{ ...INPUT_STYLE, appearance: "none", cursor: "pointer", paddingRight: "2.5rem" }}
                        onFocus={handleFocus} onBlur={handleBlur}
                      >
                        <option value="">Select a range</option>
                        <option value="below_500k">Below ₱500,000</option>
                        <option value="500k_1m">₱500,000 – ₱1,000,000</option>
                        <option value="1m_2m">₱1,000,000 – ₱2,000,000</option>
                        <option value="above_2m">Above ₱2,000,000</option>
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        aria-hidden="true">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </Field>

                  {status === "error" && (
                    <p className="text-xs text-center" style={{ color: "#ff6b6b" }}>
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`w-full py-3.5 text-sm font-bold active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed ${FOCUS}`}
                    style={{ background: "#cfa473", color: "#000000", borderRadius: "9999px" }}
                    whileHover={status !== "submitting" ? { y: -4, boxShadow: "0 8px 24px rgba(207,164,115,0.4)", transition: { duration: 0.2 } } : {}}
                    onMouseEnter={(e) => { if (status !== "submitting") (e.currentTarget as HTMLButtonElement).style.background = "#b8895a"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#cfa473"; }}
                  >
                    {status === "submitting" ? "Sending…" : "Submit Inquiry"}
                  </motion.button>

                  <p className="text-xs text-center" style={{ color: "#555555" }}>
                    Your information will only be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
