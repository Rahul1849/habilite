import { Metadata } from 'next'
import TestimonialsFilter from '@/components/testimonials/TestimonialsFilter'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Patient Testimonials - Dr. Kapil Agrawal | Habilite Clinics | Real Patient Stories',
  description: 'Read real patient testimonials and success stories from Dr. Kapil Agrawal\'s patients. Video and text reviews from patients who underwent laparoscopic surgery, bariatric surgery, and laser procedures at Habilite Clinics.',
  keywords: [
    'patient testimonials dr kapil agrawal',
    'habilite clinics reviews',
    'laparoscopic surgery testimonials',
    'bariatric surgery patient stories',
    'patient reviews delhi',
    'dr kapil agrawal patient feedback',
    'surgery success stories',
  ],
  openGraph: {
    title: 'Patient Testimonials - Dr. Kapil Agrawal | Habilite Clinics',
    description: 'Read real patient testimonials and success stories from Dr. Kapil Agrawal\'s patients.',
    url: 'https://www.habiliteclinics.com/testimonials',
    type: 'website',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
        width: 800,
        height: 1000,
        alt: 'Dr. Kapil Agrawal - Patient Testimonials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Testimonials - Dr. Kapil Agrawal | Habilite Clinics',
    description: 'Read real patient testimonials and success stories from Dr. Kapil Agrawal\'s patients.',
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
    canonical: 'https://www.habiliteclinics.com/testimonials',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Testimonials', url: '/testimonials' },
])

export default function TestimonialsPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16">
        <div className="bg-gradient-primary py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Patient Testimonials</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Real stories from patients who trusted us with their care
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          <TestimonialsFilter />
        </div>
      </div>
    </>
  )
}
