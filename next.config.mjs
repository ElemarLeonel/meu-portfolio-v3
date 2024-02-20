/** @type {import('next').NextConfig} */
const { AMAZON_FILES_S3_URL } = process.env;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [AMAZON_FILES_S3_URL, "http://localhost:3000"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
