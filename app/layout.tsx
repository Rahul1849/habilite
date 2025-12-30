import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import dynamic from 'next/dynamic'

// Defer non-critical components to reduce TBT
const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: true,
})
const MobileStickyFooter = dynamic(() => import('@/components/layout/MobileStickyFooter'), {
  ssr: false,
})
const ToastContainer = dynamic(() => import('@/components/ui/Toast'), {
  ssr: false,
})
import StructuredData from '@/components/seo/StructuredData'
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  getOrganizationSchema,
  getPhysicianSchema,
} from '@/lib/seo/schemaBuilders'

const ScrollToTop = dynamic(() => import('@/components/common/ScrollToTop'), {
  ssr: false,
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional', // Fastest FCP - never blocks render, uses fallback if font not ready
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Habilite Clinics - Leading Laparoscopic & Robotic Surgery in Delhi',
    template: '%s | Habilite Clinics'
  },
  description: 'Expert laparoscopic and robotic surgeries by Dr. Kapil Agrawal in Delhi, India. Best laparoscopic surgeon in Delhi and India. Advanced treatment for gallbladder surgery, hernia surgery, bariatric surgery, and laser surgery. 23 years experience, 7000+ successful surgeries.',
  keywords: [
    'best laparoscopic surgeon delhi',
    'best laparoscopic surgeon india',
    'laparoscopic surgery delhi',
    'robotic surgery delhi',
    'gallbladder surgery delhi',
    'hernia surgery delhi',
    'bariatric surgery delhi',
    'laser surgery delhi',
    'weight loss surgery delhi',
    'Dr. Kapil Agrawal',
    'top surgeon delhi',
    'best surgeon india',
    'laparoscopic surgeon delhi ncr',
  ],
  authors: [{ name: 'Habilite Clinics' }],
  creator: 'Habilite Clinics',
  publisher: 'Habilite Clinics',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.habiliteclinics.com',
    siteName: 'Habilite Clinics',
    title: 'Habilite Clinics - Leading Laparoscopic & Robotic Surgery',
    description: 'Expert laparoscopic and robotic surgeries by Dr. Kapil Agrawal in Delhi.',
    images: [
      {
        url: 'https://www.habiliteclinics.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Habilite Clinics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habilite Clinics - Leading Laparoscopic & Robotic Surgery',
    description: 'Expert laparoscopic and robotic surgeries by Dr. Kapil Agrawal in Delhi.',
    images: ['https://www.habiliteclinics.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/images/habiliteclinics-tab-icon.webp',
    shortcut: '/images/habiliteclinics-tab-icon.webp',
    apple: '/images/habiliteclinics-tab-icon.webp',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com',
  },
}

const organizationSchema = getOrganizationSchema()
const localBusinessSchema = getLocalBusinessSchema()
const physicianSchema = getPhysicianSchema()
const globalBreadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'Doctors', url: '/doctors' },
  { name: 'Contact', url: '/contact' },
])

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} overflow-x-hidden`}>
      <head>
        {/* LCP Optimization: Preload Hero image FIRST with highest priority - critical for mobile */}
        <link rel="preload" as="image" href="/images/dr.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/dr-kapil-agrawal.png" fetchPriority="high" />
        {/* Preconnect to critical domains early - before CSS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Critical CSS inline for faster FCP - minimal blocking - includes Hero gradient */}
        <style dangerouslySetInnerHTML={{ __html: `
          body{margin:0;padding:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#fff;color:#111827;line-height:1.5;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          html{scroll-behavior:smooth;overflow-x:hidden;height:100%}
          .h-20{height:5rem;min-height:5rem}
          @media(min-width:768px){.md\\:h-32{height:8rem;min-height:8rem}}
          @media(min-width:1024px){.lg\\:h-\\[188px\\]{height:188px;min-height:188px}}
          *{box-sizing:border-box;margin:0;padding:0}
          img{max-width:100%;height:auto;display:block}
          main{min-height:100vh;position:relative;z-index:0}
          /* Hero section critical styles for instant render */
          section{display:block}
          .relative{position:relative}
          .flex{display:flex}
          .items-center{align-items:center}
          .justify-center{justify-content:center}
          .min-h-\\[600px\\]{min-height:600px}
          @media(min-width:768px){.md\\:min-h-\\[700px\\]{min-height:700px}}
          .bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}
          .from-\\[\\#ffd4b3\\]{--tw-gradient-from:#ffd4b3;--tw-gradient-to:rgba(255,212,179,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
          .via-\\[\\#ffc49e\\]{--tw-gradient-to:rgba(255,196,158,0);--tw-gradient-stops:var(--tw-gradient-from),#ffc49e,var(--tw-gradient-to)}
          .to-\\[\\#ffa07a\\]{--tw-gradient-to:#ffa07a}
        `}} />
        {/* DNS prefetch for non-critical external resources */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body className={`${inter.variable} overflow-x-hidden`} style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        <Header />
        {/* Spacer to prevent content from going under fixed header */}
        {/* Mobile: 80px (main header only), Tablet: 128px (top nav + main header), Desktop: 188px (all bars) */}
        <div className="h-20 md:h-32 lg:h-[188px]"></div>
        <main className="min-h-screen relative z-0 pb-28 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyFooter />
        <ScrollToTop />
        <ToastContainer />
        {/* StructuredData moved to bottom to prevent blocking render */}
        <StructuredData data={organizationSchema} />
        <StructuredData data={localBusinessSchema} />
        <StructuredData data={physicianSchema} />
        <StructuredData data={globalBreadcrumbSchema} />
      </body>
    </html>
  )
}