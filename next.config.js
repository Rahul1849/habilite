/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      {
        source: '/laser-surgery/lipoma',
        destination: '/lipoma-treatment',
        permanent: true,
      },
      {
        source: '/laser-surgery/circumcision',
        destination: '/laser-zsr-circumcision',
        permanent: true,
      },
      {
        source: '/bariatrics/non-surgical-weight-loss',
        destination: '/medical-weight-loss-program',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery',
        destination: '/bariatric-surgeon-in-delhi-india',
        permanent: true,
      },
      {
        source: '/bariatrics/surgery-for-diabetes',
        destination: '/surgery-for-diabetes',
        permanent: true,
      },
      {
        source: '/bariatrics/intragastric-balloon',
        destination: '/endoscopic-intra-gastric-balloon',
        permanent: true,
      },
      {
        source: '/doctors/dr-kapil-agrawal',
        destination: '/dr-kapil-agrawal',
        permanent: true,
      },
      {
        source: '/doctors',
        destination: '/dr-kapil-agrawal',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/habilite-clinic',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
