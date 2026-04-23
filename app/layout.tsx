import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Hey Brew Cafe PH — Open for Franchise",
  description:
    "Hey Brew Cafe PH — a modern heritage brew combining artisanal coffee and premium milktea. Now open for franchise nationwide in the Philippines.",
  openGraph: {
    title: "Hey Brew Cafe PH — Open for Franchise",
    description:
      "Own a Hey Brew Cafe PH franchise. Artisanal coffee and premium milktea — proven business model, nationwide expansion.",
    type: "website",
    images: [{ url: "/images/hb-hero.png", width: 1200, height: 630, alt: "Hey Brew Cafe PH" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PH" className={figtree.variable}>
      <body>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
