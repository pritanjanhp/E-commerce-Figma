import type { NextConfig } from "next";
import nextTranslate from "next-translate";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if your project has ESLint errors.
    ignoreDuringBuilds: true
  }
  // module.exports = nextTranslate();
};

export default nextConfig;
