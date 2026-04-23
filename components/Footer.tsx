"use client";

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
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <p className="text-base font-black tracking-tight" style={{ color: "#8b5e3c" }}>
              HEY BREW CAFE PH
            </p>
            <p className="text-xs mt-1 mb-3 font-medium" style={{ color: "#7a6555" }}>
              A Modern Heritage Brew.
            </p>
            <div className="space-y-1.5">
              <a href="tel:09677963243" className={`block text-xs transition-colors duration-200 ${FOCUS}`} style={{ color: "#7a6555" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8b5e3c"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#7a6555"; }}>
                <span aria-hidden="true">📞</span>{" "}0967 796 3243
              </a>
              <a href="mailto:heybrewcafeph@gmail.com" className={`block text-xs transition-colors duration-200 ${FOCUS}`} style={{ color: "#7a6555" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8b5e3c"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#7a6555"; }}>
                <span aria-hidden="true">✉️</span>{" "}heybrewcafeph@gmail.com
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

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "#ddd0be" }}>
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
