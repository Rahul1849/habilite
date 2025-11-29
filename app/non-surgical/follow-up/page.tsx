import { Metadata } from 'next'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Follow-up Care - Post-Operative Care & Monitoring | Dr. Kapil Agrawal | Habilite Clinics',
  description: 'Comprehensive post-operative care and monitoring at Habilite Clinics by Dr. Kapil Agrawal. Regular check-ups, wound monitoring, medication management, and personalized recovery guidance.',
  keywords: [
    'post-operative care delhi',
    'follow-up care',
    'surgical recovery',
    'wound monitoring',
    'post-surgery care',
    'recovery monitoring',
  ],
  openGraph: {
    title: 'Follow-up Care - Post-Operative Care & Monitoring | Dr. Kapil Agrawal',
    description: 'Comprehensive post-operative care and monitoring at Habilite Clinics.',
    url: 'https://www.habiliteclinics.com/non-surgical/follow-up',
    type: 'website',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
        width: 800,
        height: 1000,
        alt: 'Follow-up Care - Dr. Kapil Agrawal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Follow-up Care - Post-Operative Care & Monitoring',
    description: 'Comprehensive post-operative care and monitoring at Habilite Clinics.',
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
    canonical: 'https://www.habiliteclinics.com/non-surgical/follow-up',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Non-Surgical Treatments', url: '/non-surgical' },
  { name: 'Follow-up Care', url: '/non-surgical/follow-up' },
])

export default function FollowUpPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-[#1a4d7a] to-[#2c5f8a] text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Follow-up Care</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive post-operative monitoring and care
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Post-Operative Care</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Habilite Clinics, we believe that excellent surgical care extends beyond the 
              operating room. Our comprehensive follow-up care ensures optimal recovery and 
              long-term success.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our follow-up care includes regular check-ups, wound monitoring, medication 
              management, and personalized recovery guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

