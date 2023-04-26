/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.g2crowd.com", "cdn.sanity.io"]
  }
}

module.exports = nextConfig
