/** @type {import('next').NextConfig} */
const { AMAZON_FILES_S3_URL, NEXT_PUBLIC_APP_URL } = process.env;

const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_URL: NEXT_PUBLIC_APP_URL,
  },
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
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
