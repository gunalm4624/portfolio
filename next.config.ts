import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["sanity"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // The app was called Pace before it became Everstep; the old support and privacy addresses keep working.
  async redirects() {
    return [
      {
        source: "/projects/pace/:path*",
        destination: "/projects/everstep/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/work/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noimageindex, nosnippet",
          },
        ],
      },
    ];
  },
  devIndicators: false,
};

export default nextConfig;
