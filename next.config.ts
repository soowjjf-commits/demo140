/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/demo140'  // 👈 CHANGE TO YOUR REPO NAME
}

module.exports = nextConfig
