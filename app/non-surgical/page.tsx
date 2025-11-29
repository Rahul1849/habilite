import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Non-Surgical Treatments - Consultation & Follow-up Care | Dr. Kapil Agrawal | Habilite Clinics',
  description: 'Comprehensive non-surgical treatment options, medical consultations, follow-up care, and nutrition counseling at Habilite Clinics by Dr. Kapil Agrawal. Expert medical guidance without surgery.',
  keywords: [
    'non-surgical treatment delhi',
    'medical consultation delhi',
    'follow-up care',
    'nutrition counseling',
    'dr kapil agrawal consultation',
    'medical consultation apollo',
  ],
  openGraph: {
    title: 'Non-Surgical Treatments - Consultation & Follow-up Care | Dr. Kapil Agrawal',
    description: 'Comprehensive non-surgical treatment options, medical consultations, and follow-up care at Habilite Clinics.',
    url: 'https://www.habiliteclinics.com/non-surgical',
    type: 'website',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
        width: 800,
        height: 1000,
        alt: 'Non-Surgical Treatments - Dr. Kapil Agrawal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Non-Surgical Treatments - Consultation & Follow-up Care',
    description: 'Comprehensive non-surgical treatment options and consultations at Habilite Clinics.',
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
    canonical: 'https://www.habiliteclinics.com/non-surgical',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Non-Surgical Treatments', url: '/non-surgical' },
])

const services = [
  {
    id: '1',
    name: 'Consultation',
    description: 'Expert medical consultations for surgical and non-surgical treatment options.',
    href: '/non-surgical/consultation',
  },
  {
    id: '2',
    name: 'Follow-up Care',
    description: 'Comprehensive post-operative care and monitoring for optimal recovery.',
    href: '/non-surgical/follow-up',
  },
  {
    id: '3',
    name: 'Nutrition Counseling',
    description: 'Personalized nutrition plans to support recovery and overall health.',
    href: '/non-surgical/nutrition',
  },
]

export default function NonSurgicalPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16">
        <div className="bg-gradient-to-br from-[#1a4d7a] to-[#2c5f8a] text-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Non-Surgical Treatments</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive care and consultation services
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-[#1a4d7a] font-semibold">
                  Learn More
                  <ArrowRight className="ml-2" size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

