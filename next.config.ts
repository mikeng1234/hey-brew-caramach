import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  // Allow embedding only from the GenXcript portfolio; blocks all other framing
  { key: "Content-Security-Policy", value: "frame-ancestors 'self' https://genxcript.vercel.app http://localhost:*" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
