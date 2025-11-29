import { Metadata } from 'next'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Nutrition Counseling - Personalized Nutrition Plans | Dr. Kapil Agrawal | Habilite Clinics',
  description: 'Personalized nutrition plans to support recovery and overall health at Habilite Clinics by Dr. Kapil Agrawal. Expert dietary guidance for post-surgical recovery and weight management.',
  keywords: [
    'nutrition counseling delhi',
    'dietitian consultation',
    'nutrition plans',
    'post-surgical nutrition',
    'weight management nutrition',
    'diet counseling delhi',
  ],
  openGraph: {
    title: 'Nutrition Counseling - Personalized Nutrition Plans | Dr. Kapil Agrawal',
    description: 'Personalized nutrition plans to support recovery and overall health at Habilite Clinics.',
    url: 'https://www.habiliteclinics.com/non-surgical/nutrition',
    type: 'website',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
        width: 800,
        height: 1000,
        alt: 'Nutrition Counseling - Dr. Kapil Agrawal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nutrition Counseling - Personalized Nutrition Plans',
    description: 'Personalized nutrition plans to support recovery and overall health.',
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
    canonical: 'https://www.habiliteclinics.com/non-surgical/nutrition',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Non-Surgical Treatments', url: '/non-surgical' },
  { name: 'Nutrition Counseling', url: '/non-surgical/nutrition' },
])

export default function NutritionPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-[#1a4d7a] to-[#2c5f8a] text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nutrition Counseling</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Personalized nutrition plans for optimal recovery
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Nutrition Support</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Proper nutrition is essential for optimal recovery after surgery. Our nutrition 
              counseling services provide personalized dietary plans tailored to your specific 
              surgical procedure and recovery needs.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

