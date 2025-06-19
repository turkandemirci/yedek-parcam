import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/kayit",
        destination: "/signup",
      },
      {
        source: "/giris",
        destination: "/login",
      },
    ];
  },
};

export default nextConfig;
