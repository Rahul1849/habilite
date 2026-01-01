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
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
    minimumCacheTTL: 31536000,
    // Optimize for mobile LCP
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion', '@radix-ui/react-dialog'],
    optimizeCss: true,
    // Optimize for mobile performance
    optimizeServerReact: true,
    // Reduce JavaScript bundle size
    serverMinification: true,
    // Enable partial prerendering for faster initial load
    ppr: false,
    // Reduce legacy polyfills by targeting modern browsers
    // Browserslist config in .browserslistrc targets modern browsers
  },
  // Optimize output
  output: 'standalone',
  // Compress output
  compress: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Target modern browsers to reduce legacy JS polyfills
  transpilePackages: [],
  // Modern browser support - remove legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  // Target modern browsers (ES2017+) to reduce polyfills
  // This reduces bundle size by avoiding legacy polyfills for:
  // Array.prototype.at, Array.prototype.flat, Object.fromEntries, etc.
  // Modern browsers (Chrome 92+, Firefox 90+, Safari 15.4+, Edge 92+) support these natively
  // This aligns with Next.js 14's default target which is modern browsers
  // Performance optimizations
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        // Less restrictive headers for Sanity Studio
        source: '/studio/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.sanity.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.sanity.io; font-src 'self' https://fonts.gstatic.com https://cdn.sanity.io; img-src 'self' data: https: blob:; media-src 'self' https:; connect-src 'self' https://*.api.sanity.io https://*.apicdn.sanity.io wss://*.api.sanity.io; frame-src 'self' https://*.sanity.io;",
          },
        ],
      },
      {
        // Prevent caching for blog posts to ensure Sanity updates show immediately
        source: '/post/:slug*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        // Standard headers for all other routes
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
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.youtube.com https://www.googletagmanager.com https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com https://i.ytimg.com https://img.youtube.com https://picsum.photos https://maps.googleapis.com https://maps.gstatic.com https://cdn.sanity.io; media-src 'self' https://www.youtube.com; connect-src 'self' https://www.google-analytics.com https://maps.googleapis.com https://*.api.sanity.io https://*.apicdn.sanity.io; frame-src https://www.youtube.com https://www.google.com https://maps.google.com https://*.google.com; base-uri 'self'; form-action 'self';",
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
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
        source: '/bariatrics/bariatric-surgery/gastric-sleeve',
        destination: '/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/sleeve-gastrectomy',
        destination: '/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/gastric-bypass',
        destination: '/bariatric-surgeon-in-delhi-india/gastric-bypass',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/mini-gastric-bypass',
        destination: '/bariatric-surgeon-in-delhi-india/mini-gastric-bypass',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/duodenal-jejunal-bypass',
        destination: '/bariatric-surgeon-in-delhi-india/duodenal-jejunal-bypass',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/revision-bariatric-surgery',
        destination: '/bariatric-surgeon-in-delhi-india/revision-surgeries',
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
