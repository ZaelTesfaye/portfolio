/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds
  },
  images: {
    domains: ["ltqzwwximfmgohiauqvj.supabase.co"],
  },
  typescript: {
    ignoreBuildErrors: true, // This will allow the build to succeed despite type errors
  },
  async headers() {
    return [
      {
        source: "/:path*.pdf",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          { key: "Content-Disposition", value: "inline" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;
