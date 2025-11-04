import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/common/WhatsAppFloat'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Habilite Clinics - Leading Laparoscopic & Robotic Surgery in Delhi',
    template: '%s | Habilite Clinics'
  },
  description: 'Expert laparoscopic and robotic surgeries by Dr. Kapil Agrawal in Delhi. Advanced treatment for gallbladder, hernia, and gastrointestinal conditions.',
  keywords: ['laparoscopic surgery', 'robotic surgery', 'gallbladder surgery', 'hernia surgery', 'Delhi', 'Dr. Kapil Agrawal'],
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
  description: 'Leading laparoscopic and robotic surgery center in Delhi',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-98765-43210',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://www.facebook.com/habiliteclinics',
    'https://www.twitter.com/habiliteclinics',
    'https://www.linkedin.com/company/habiliteclinics',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}