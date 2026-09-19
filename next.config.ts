import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export untuk Cloudflare Pages
  output: 'export',
  images: {
    unoptimized: true, // diperlukan untuk static export
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
