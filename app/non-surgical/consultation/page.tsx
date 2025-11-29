import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, CheckCircle2 } from 'lucide-react'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Medical Consultation - Expert Consultation Services | Dr. Kapil Agrawal | Habilite Clinics',
  description: 'Expert medical consultations for surgical and non-surgical treatment options at Habilite Clinics by Dr. Kapil Agrawal. Comprehensive evaluation, personalized treatment recommendations, and detailed procedure explanations.',
  keywords: [
    'medical consultation delhi',
    'doctor consultation delhi',
    'surgical consultation',
    'dr kapil agrawal consultation',
    'apollo hospitals consultation',
    'laparoscopic surgery consultation',
  ],
  openGraph: {
    title: 'Medical Consultation - Expert Consultation Services | Dr. Kapil Agrawal',
    description: 'Expert medical consultations for surgical and non-surgical treatment options at Habilite Clinics.',
    url: 'https://www.habiliteclinics.com/non-surgical/consultation',
    type: 'website',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
        width: 800,
        height: 1000,
        alt: 'Medical Consultation - Dr. Kapil Agrawal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Consultation - Expert Consultation Services',
    description: 'Expert medical consultations for surgical and non-surgical treatment options.',
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
    canonical: 'https://www.habiliteclinics.com/non-surgical/consultation',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Non-Surgical Treatments', url: '/non-surgical' },
  { name: 'Medical Consultation', url: '/non-surgical/consultation' },
])

export default function ConsultationPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16">
        <div className="bg-gradient-to-br from-[#1a4d7a] to-[#2c5f8a] text-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Consultation</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Expert consultations for your healthcare needs
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">What to Expect</h2>
              <div className="space-y-4">
                {[
                  'Comprehensive medical evaluation',
                  'Discussion of treatment options',
                  'Personalized treatment recommendations',
                  'Detailed explanation of procedures',
                  'Answering all your questions',
                  'Follow-up care planning',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#1a4d7a] mr-3 mt-1 flex-shrink-0" size={24} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a4d7a] text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Schedule Your Consultation?</h3>
              <p className="text-blue-100 mb-6">Book your appointment today and take the first step towards better health</p>
              <Link
                href="/appointment"
                className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-8 py-4 rounded font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 inline-flex items-center"
              >
                <Calendar className="mr-2" size={22} />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

