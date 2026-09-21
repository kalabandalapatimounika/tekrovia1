import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tekrovia1",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
