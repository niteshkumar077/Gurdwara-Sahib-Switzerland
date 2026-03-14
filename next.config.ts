import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    deviceSizes: [360, 414, 768, 1080, 1280, 1920],
    qualities: [75, 85],
  },
};

export default nextConfig;
