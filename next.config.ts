import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static export for GitHub Pages
  basePath: "/demo140", // Replace with your GitHub repo name
  assetPrefix: "/demo140", // Same as basePath
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  trailingSlash: true, // Add trailing slashes for static hosting
};

export default nextConfig;
