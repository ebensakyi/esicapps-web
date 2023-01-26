/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rules: {
    "@next/next/no-sync-scripts": "off",
  },
  images: {
    domains: ["sanitation-reporter-images.s3.eu-west-2.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth/login',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
