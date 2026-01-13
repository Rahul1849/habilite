/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'habilite-6qce.vercel.app',
          },
        ],
        destination: 'https://www.habiliteclinics.com/:path*',
        permanent: true,
      },
      
      // Existing redirects
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
        destination: '/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy-surgery',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/sleeve-gastrectomy',
        destination: '/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy-surgery',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/sleeve-gastrectomy-surgery',
        destination: '/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy-surgery',
        permanent: true,
      },
      {
        source: '/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy',
        destination: '/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy-surgery',
        permanent: true,
      },
      {
        source: '/bariatric-surgeon-in-delhi-india/mini-gastric-bypass',
        destination: '/bariatric-surgeon-in-delhi-india/mini-gastric-bypass-surgery',
        permanent: true,
      },
      {
        source: '/bariatric-surgeon-in-delhi-india/gastric-bypass',
        destination: '/bariatric-surgeon-in-delhi-india/gastric-bypass-surgery',
        permanent: true,
      },
      {
        source: '/bariatric-surgeon-in-delhi-india/duodenal-jejunal-bypass',
        destination: '/bariatric-surgeon-in-delhi-india/duodenal-jejunal-bypass-surgery',
        permanent: true,
      },
      {
        source: '/bariatric-surgeon-in-delhi-india/revision-surgeries',
        destination: '/bariatric-surgeon-in-delhi-india/revision-surgeries-surgery',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/gastric-bypass',
        destination: '/bariatric-surgeon-in-delhi-india/gastric-bypass-surgery',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/gastric-bypass-surgery',
        destination: '/bariatric-surgeon-in-delhi-india/gastric-bypass-surgery',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/mini-gastric-bypass',
        destination: '/bariatric-surgeon-in-delhi-india/mini-gastric-bypass-surgery',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/mini-gastric-bypass-surgery',
        destination: '/bariatric-surgeon-in-delhi-india/mini-gastric-bypass-surgery',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/duodenal-jejunal-bypass',
        destination: '/bariatric-surgeon-in-delhi-india/duodenal-jejunal-bypass-surgery',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/duodenal-jejunal-bypass-surgery',
        destination: '/bariatric-surgeon-in-delhi-india/duodenal-jejunal-bypass-surgery',
        permanent: true,
      },
      {
        source: '/bariatrics/bariatric-surgery/revision-bariatric-surgery',
        destination: '/bariatric-surgeon-in-delhi-india/revision-surgeries-surgery',
        permanent: true,
      },
      {
        source: '/endoscopic-intra-gastric-balloon/best-allurion-surgeon-in-delhi',
        destination: '/endoscopic-intra-gastric-balloon/allurion-balloon-treatment',
        permanent: true,
      },
      {
        source: '/endoscopic-intra-gastric-balloon/allurion-balloon',
        destination: '/endoscopic-intra-gastric-balloon/allurion-balloon-treatment',
        permanent: true,
      },
      {
        source: '/endoscopic-intra-gastric-balloon/best-spatz-surgeon-in-delhi',
        destination: '/endoscopic-intra-gastric-balloon/spatz-balloon-treatment',
        permanent: true,
      },
      {
        source: '/endoscopic-intra-gastric-balloon/spatz-balloon',
        destination: '/endoscopic-intra-gastric-balloon/spatz-balloon-treatment',
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
      
      // New redirects from Apache .htaccess file
      // RewriteRule redirects
      {
        source: '/cost-of-bariatric-surgery-in-delhi-india',
        destination: 'https://www.habiliteclinics.com/post/bariatric-surgery-cost-in-delhi-india/',
        permanent: true,
      },
      {
        source: '/cost-of-bariatric-surgery-in-delhi-india/',
        destination: 'https://www.habiliteclinics.com/post/bariatric-surgery-cost-in-delhi-india/',
        permanent: true,
      },
      {
        source: '/single-incision-laparoscopic-surgery.html',
        destination: 'https://www.habiliteclinics.com/post/sils-single-incision-laparoscopic-surgery/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/benefits-beyond-weight-loss.html',
        destination: 'https://www.habiliteclinics.com/post/life-after-bariatric-surgery/',
        permanent: true,
      },
      {
        source: '/weight-loss-in-three-months/',
        destination: 'https://www.habiliteclinics.com/post/what-are-the-benefits-of-gastric-sleeve-surgery-for-weight-loss/',
        permanent: true,
      },
      {
        source: '/best-bariatric-surgery-in-india/',
        destination: 'https://www.habiliteclinics.com/post/which-is-the-best-bariatric-surgery/',
        permanent: true,
      },
      {
        source: '/evolving-techniques-for-the-management-of-hernia/',
        destination: 'https://www.habiliteclinics.com/post/mesh-in-hernia-repair-an-overview/',
        permanent: true,
      },
      {
        source: '/evolving-techniques-for-the-management-of-hernia/index.html',
        destination: 'https://www.habiliteclinics.com/post/mesh-in-hernia-repair-an-overview/',
        permanent: true,
      },
      
      // Redirect directives (all standardized to www)
      {
        source: '/habilite-clinic.html',
        destination: 'https://www.habiliteclinics.com/habilite-clinic',
        permanent: true,
      },
      {
        source: '/dr-kapil-agrawal.html',
        destination: 'https://www.habiliteclinics.com/dr-kapil-agrawal',
        permanent: true,
      },
      {
        source: '/gall-stone-surgery.html',
        destination: 'https://www.habiliteclinics.com/best-gallbladder-stone-surgeon-delhi',
        permanent: true,
      },
      {
        source: '/lipoma-treatment.html',
        destination: 'https://www.habiliteclinics.com/lipoma-treatment',
        permanent: true,
      },
      {
        source: '/bariatric-weight-loss-surgery.html',
        destination: 'https://www.habiliteclinics.com/bariatric-surgeon-in-delhi-india',
        permanent: true,
      },
      {
        source: '/medical-weight-loss-program.html',
        destination: 'https://www.habiliteclinics.com/medical-weight-loss-program',
        permanent: true,
      },
      {
        source: '/surgery-for-diabetes.html',
        destination: 'https://www.habiliteclinics.com/surgery-for-diabetes',
        permanent: true,
      },
      {
        source: '/endoscopic-intra-gastric-balloon.html',
        destination: 'https://www.habiliteclinics.com/endoscopic-intra-gastric-balloon',
        permanent: true,
      },
      {
        source: '/international-patient.html',
        destination: 'https://www.habiliteclinics.com/international-patient',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: 'https://www.habiliteclinics.com/contact',
        permanent: true,
      },
      {
        source: '/appointment.html',
        destination: 'https://www.habiliteclinics.com/appointment',
        permanent: true,
      },
      {
        source: '/bmi-calculator.html',
        destination: 'https://www.habiliteclinics.com/bmi-calculator',
        permanent: true,
      },
      {
        source: '/piles-treatment',
        destination: 'https://www.habiliteclinics.com/best-laser-piles-surgeon-in-delhi',
        permanent: true,
      },
      {
        source: '/calorie-calculator.html',
        destination: 'https://www.habiliteclinics.com/calorie-calculator',
        permanent: true,
      },
      {
        source: '/exercise-calculator.html',
        destination: 'https://www.habiliteclinics.com/exercise-calculator',
        permanent: true,
      },
      {
        source: '/testimonials.html',
        destination: 'https://www.habiliteclinics.com/testimonials',
        permanent: true,
      },
      {
        source: '/privacy-policy.html',
        destination: 'https://www.habiliteclinics.com/privacy-policy',
        permanent: true,
      },
      {
        source: '/cost-of-hernia-surgery-in-delhi',
        destination: '/post/cost-of-hernia-surgery-in-delhi',
        permanent: true,
      },
      {
        source: '/cost-of-hernia-surgery-in-delhi/',
        destination: '/post/cost-of-hernia-surgery-in-delhi',
        permanent: true,
      },
      {
        source: '/appendix',
        destination: 'https://www.habiliteclinics.com/best-appendicitis-surgery-in-delhi',
        permanent: true,
      },
      {
        source: '/fistula-treatment-in-delhi',
        destination: 'https://www.habiliteclinics.com/best-laser-fistula-treatment',
        permanent: true,
      },
      {
        source: '/pilonidal-sinus.php',
        destination: 'https://www.habiliteclinics.com/best-laser-pilonidal-sinus-treatment',
        permanent: true,
      },
      {
        source: '/anal-fissure',
        destination: 'https://www.habiliteclinics.com/best-anal-fissure-treatment',
        permanent: true,
      },
      {
        source: '/bariatric-weight-loss-surgery',
        destination: 'https://www.habiliteclinics.com/bariatric-surgeon-in-delhi-india',
        permanent: true,
      },
      {
        source: '/gall-stone-surgery',
        destination: 'https://www.habiliteclinics.com/best-gallbladder-stone-surgeon-delhi',
        permanent: true,
      },
      {
        source: '/rectal-prolapse.html',
        destination: 'https://www.habiliteclinics.com/rectal-prolapse',
        permanent: true,
      },
      {
        source: '/gastric-bypass.html',
        destination: 'https://www.habiliteclinics.com/gastric-bypass',
        permanent: true,
      },
      {
        source: '/single-port-surgeries.html',
        destination: 'https://www.habiliteclinics.com/single-port-surgeries',
        permanent: true,
      },
      {
        source: '/gastric-plication-surgery.html',
        destination: 'https://www.habiliteclinics.com/gastric-plication-surgery',
        permanent: true,
      },
      {
        source: '/rectal-prolapse',
        destination: 'https://www.habiliteclinics.com/rectal-prolapse',
        permanent: true,
      },
      
      // 301 Redirect directives
      {
        source: '/best-appendicitis-surgery-in-delhi',
        destination: 'https://www.habiliteclinics.com/best-appendix-surgeon-in-delhi',
        permanent: true,
      },
      {
        source: '/gerd',
        destination: 'https://www.habiliteclinics.com/best-hiatus-hernia-surgeon-in-delhi',
        permanent: true,
      },
      {
        source: '/post/hiatal-hernia-specialist',
        destination: 'https://www.habiliteclinics.com/best-hiatus-hernia-surgeon-in-delhi',
        permanent: true,
      },
      {
        source: '/inguinal-hernia-treatment',
        destination: 'https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi/inguinal-hernia-surgery',
        permanent: true,
      },
      {
        source: '/gallbladder-polyps',
        destination: 'https://www.habiliteclinics.com/gallbladder-polyps-treatment-in-delhi',
        permanent: true,
      },
      {
        source: '/cbd-stone-treatment-delhi',
        destination: 'https://www.habiliteclinics.com/cbd-stone-treatment-in-delhi',
        permanent: true,
      },
      {
        source: '/incisional-hernia-treatment',
        destination: 'https://www.habiliteclinics.com/best-incisional-hernia-surgeon-in-delhi',
        permanent: true,
      },
      {
        source: '/femoral-hernia-treatment',
        destination: 'https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi/femoral-hernia-surgery',
        permanent: true,
      },
      {
        source: '/umbilical-hernia-surgeon-specialist-doctor',
        destination: 'https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi/umbilical-hernia-surgery',
        permanent: true,
      },
      {
        source: '/epigastric-hernia-treatment',
        destination: 'https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi/epigastric-hernia-surgery',
        permanent: true,
      },
      {
        source: '/best-inguinal-hernia-surgeon-in-delhi',
        destination: '/best-hernia-surgeon-in-delhi/inguinal-hernia-surgery',
        permanent: true,
      },
      {
        source: '/best-inguinal-hernia-surgeon-in-delhi/',
        destination: '/best-hernia-surgeon-in-delhi/inguinal-hernia-surgery',
        permanent: true,
      },
      {
        source: '/best-femoral-hernia-surgeon-in-delhi',
        destination: '/best-hernia-surgeon-in-delhi/femoral-hernia-surgery',
        permanent: true,
      },
      {
        source: '/best-femoral-hernia-surgeon-in-delhi/',
        destination: '/best-hernia-surgeon-in-delhi/femoral-hernia-surgery',
        permanent: true,
      },
      {
        source: '/best-umbilical-hernia-surgeon-in-delhi',
        destination: '/best-hernia-surgeon-in-delhi/umbilical-hernia-surgery',
        permanent: true,
      },
      {
        source: '/best-umbilical-hernia-surgeon-in-delhi/',
        destination: '/best-hernia-surgeon-in-delhi/umbilical-hernia-surgery',
        permanent: true,
      },
      {
        source: '/best-epigastric-hernia-surgeon-in-delhi',
        destination: '/best-hernia-surgeon-in-delhi/epigastric-hernia-surgery',
        permanent: true,
      },
      {
        source: '/best-epigastric-hernia-surgeon-in-delhi/',
        destination: '/best-hernia-surgeon-in-delhi/epigastric-hernia-surgery',
        permanent: true,
      },
      {
        source: '/post/best-laparoscopic-surgeon-in-delhi-ncr',
        destination: 'https://www.habiliteclinics.com/best-laparoscopic-surgeon-in-delhi',
        permanent: true,
      },
      {
        source: '/single-incision-laparoscopic-surgery',
        destination: 'https://www.habiliteclinics.com/post/sils-single-incision-laparoscopic-surgery/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig