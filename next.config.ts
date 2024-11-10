import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Only add basePath and output when building for production
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    basePath: '/lab-website',
  } : {}),
};

export default nextConfig;