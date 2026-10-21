import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Everything runs client-side (the solver is WebAssembly), so ship a plain
  // static site to `out/` instead of running a Next.js server.
  output: "export",
};

export default nextConfig;
