/** @type {import('next').NextConfig} */
const { AMAZON_FILES_S3_URL } = process.env;

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: AMAZON_FILES_S3_URL,
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "elemarleonel.dev/api/",
        pathname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
