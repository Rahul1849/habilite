import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileStickyFooter from '@/components/layout/MobileStickyFooter'
import ToastContainer from '@/components/ui/Toast'
import dynamic from 'next/dynamic'
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
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
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
        {/* YouTube preconnect - Next.js handles Google Fonts preconnect automatically */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <StructuredData data={organizationSchema} />
        <StructuredData data={localBusinessSchema} />
        <StructuredData data={physicianSchema} />
        <StructuredData data={globalBreadcrumbSchema} />
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
      </body>
    </html>
  )
}