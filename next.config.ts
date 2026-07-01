import type { NextConfig } from "next";

// GitHub Pages serves the site from https://<user>.github.io/<repo>/
// If deploying to a project page (not a user/organization root page),
// set NEXT_PUBLIC_BASE_PATH="/nome-do-repositorio" as an env var during build,
// e.g.: NEXT_PUBLIC_BASE_PATH=/dr-andre-gusman npm run build
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
