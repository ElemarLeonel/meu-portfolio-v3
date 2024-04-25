/** @type {import('next').NextConfig} */
const { AMAZON_FILES_S3_URL } = process.env;

const nextConfig = {
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
  },
};

export default nextConfig;
