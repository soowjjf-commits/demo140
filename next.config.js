/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/my-v0-project'  // 👈 YOUR REPO NAME
}
module.exports = nextConfig
