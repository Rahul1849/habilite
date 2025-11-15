import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileStickyFooter from '@/components/layout/MobileStickyFooter'
import dynamic from 'next/dynamic'

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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Habilite Clinics',
  url: 'https://www.habiliteclinics.com',
  logo: 'https://www.habiliteclinics.com/logo.png',
  description: 'Leading laparoscopic and robotic surgery center in Delhi, India. Expert surgical services by Dr. Kapil Agrawal with 23 years experience.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'M 11, Block M, Lajpat Nagar Road, Lajpat Nagar 2',
    addressLocality: 'Lajpat Nagar',
    addressRegion: 'Delhi',
    postalCode: '110024',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.5675',
    longitude: '77.2430',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-99100-24564',
    contactType: 'customer service',
    areaServed: ['IN', 'Delhi', 'Delhi NCR', 'Noida', 'Gurgaon'],
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://www.facebook.com/habiliteclinics',
    'https://www.twitter.com/habiliteclinics',
    'https://www.linkedin.com/company/habiliteclinics',
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Habilite Clinics',
  image: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
  '@id': 'https://www.habiliteclinics.com',
  url: 'https://www.habiliteclinics.com',
  telephone: '+91-99100-24564',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'M 11, Block M, Lajpat Nagar Road, Lajpat Nagar 2',
    addressLocality: 'Lajpat Nagar',
    addressRegion: 'Delhi',
    postalCode: '110024',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.5675',
    longitude: '77.2430',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '18:00',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Delhi',
    },
    {
      '@type': 'State',
      name: 'Delhi',
    },
    {
      '@type': 'Country',
      name: 'India',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} overflow-x-hidden`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          suppressHydrationWarning
        />
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
      </body>
    </html>
  )
}