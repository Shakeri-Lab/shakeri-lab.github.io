import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  }
  // basePath removed since we're using shakeri-lab.github.io
};

export default nextConfig;