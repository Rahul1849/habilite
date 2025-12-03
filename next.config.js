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
    // Optimize for mobile performance
    optimizeServerReact: true,
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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.youtube.com https://www.googletagmanager.com https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com https://i.ytimg.com https://img.youtube.com https://picsum.photos https://maps.googleapis.com https://maps.gstatic.com; media-src 'self' https://www.youtube.com; connect-src 'self' https://www.google-analytics.com https://maps.googleapis.com; frame-src https://www.youtube.com https://www.google.com https://maps.google.com;",
          },
        ],
      },
    ]
  },
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
