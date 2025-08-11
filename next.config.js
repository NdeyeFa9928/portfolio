/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  output: 'export',
  trailingSlash: true,
  basePath: '',
}

module.exports = nextConfig
