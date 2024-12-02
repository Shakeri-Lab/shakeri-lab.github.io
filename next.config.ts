import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add dark mode support
  theme: {
    darkMode: 'class',
  }
};

export default nextConfig;