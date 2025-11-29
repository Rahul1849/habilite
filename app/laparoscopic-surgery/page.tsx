import { Metadata } from 'next'
import LaparoscopicServicesGrid from '@/components/laparoscopic/LaparoscopicServicesGrid'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Laparoscopic Surgery in Delhi - Dr. Kapil Agrawal | Minimally Invasive Procedures',
  description: 'Expert laparoscopic surgery in Delhi by Dr. Kapil Agrawal. Advanced minimally invasive procedures for gallbladder, hernia, appendix, and GERD. 23+ years experience, 7000+ successful surgeries.',
  keywords: [
    'laparoscopic surgery delhi',
    'minimally invasive surgery delhi',
    'laparoscopic surgeon delhi',
    'dr kapil agrawal laparoscopic',
    'gallbladder laparoscopic surgery',
    'hernia laparoscopic surgery',
    'robotic surgery delhi',
    'single port laparoscopic surgery',
  ],
  openGraph: {
    title: 'Laparoscopic Surgery in Delhi - Dr. Kapil Agrawal',
    description: 'Expert laparoscopic surgery in Delhi by Dr. Kapil Agrawal. Advanced minimally invasive procedures with 23+ years experience.',
    url: 'https://www.habiliteclinics.com/laparoscopic-surgery',
    type: 'website',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
        width: 800,
        height: 1000,
        alt: 'Dr. Kapil Agrawal - Laparoscopic Surgeon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laparoscopic Surgery in Delhi - Dr. Kapil Agrawal',
    description: 'Expert laparoscopic surgery in Delhi by Dr. Kapil Agrawal. Advanced minimally invasive procedures.',
    images: ['https://www.habiliteclinics.com/images/dr-kapil-agrawal.png'],
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
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laparoscopic-surgery',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Laparoscopic Surgery', url: '/laparoscopic-surgery' },
])

export default function LaparoscopicSurgeryPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16">
        <div className="bg-gray-50 py-16 border-b border-gray-200">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Laparoscopic Surgery</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Advanced minimally invasive surgical procedures by Dr. Kapil Agrawal
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          <LaparoscopicServicesGrid />
        </div>
      </div>
    </>
  )
}

