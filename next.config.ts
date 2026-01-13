import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    qualities: [75, 90, 100],
    unoptimized: true,
  },
};

export default nextConfig;
