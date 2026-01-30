/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/demo140'  // 👈 YOUR REPO NAME (from error log)
}

module.exports = nextConfig
