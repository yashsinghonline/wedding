/**
 * Next.js is used here purely as a static file server for the plain
 * HTML / CSS / JS website that lives in /public. There is no React or
 * TypeScript application code in this project.
 */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
        { source: "/api/health", destination: "/health.json" },
      ],
    };
  },
};

export default nextConfig;
