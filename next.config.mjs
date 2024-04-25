/** @type {import('next').NextConfig} */
const { AMAZON_FILES_S3_URL } = process.env;

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    domains: ["http://localhost:3000", "https://elemarleonel.dev"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: AMAZON_FILES_S3_URL,
        pathname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
