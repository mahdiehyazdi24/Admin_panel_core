import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    // In development, we proxy API and panel-related routes to their respective domains using Next.js rewrites.
    // This setup mimics our production configuration, where the same routing is handled by Nginx as a reverse proxy.
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/api/v1/:path*",
          destination: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/:path*`,
        },
      ];
    }

    return [];
  },
};

export default nextConfig;
