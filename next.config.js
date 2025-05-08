/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'development'
  }
};

module.exports = nextConfig; 