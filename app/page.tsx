import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/home/Hero'
import MeetDoctor from '@/components/home/MeetDoctor'
import EducationAffiliations from '@/components/home/EducationAffiliations'
import CareerHighlightsAndServices from '@/components/home/CareerHighlightsAndServices'
import LaparoscopicServices from '@/components/home/LaparoscopicServices'
import BariatricServices from '@/components/home/BariatricServices'
import LaserServices from '@/components/home/LaserServices'
import WhyChoose from '@/components/home/WhyChoose'
import BlogPreview from '@/components/home/BlogPreview'

import HealthCalculators from '@/components/home/HealthCalculators'

// Dynamically import TestimonialsSlider to defer loading and improve initial page load
const TestimonialsSlider = dynamic(() => import('@/components/home/TestimonialsSlider'), {
  ssr: false,
  loading: () => (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Patient <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from patients who trusted us with their care
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
})
export const metadata: Metadata = {
  title: 'Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi | 23 Years Experience',
  description: 'Dr. Kapil Agrawal - Best Laparoscopic and Robotic Surgeon in Delhi with 23 years experience. 7000+ successful surgeries. Senior Consultant at Apollo Hospitals. MBBS, MS, MRCS (London), MMED (Singapore).',
  openGraph: {
    title: 'Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi',
    description: 'Dr. Kapil Agrawal - Leading laparoscopic and robotic surgeon with 23 years experience and 7000+ successful surgeries at Apollo Hospitals, Delhi.',
  },
}

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Kapil Agrawal',
  description: 'Best Laparoscopic and Robotic Surgeon in Delhi with 23 years experience. Senior Consultant at Apollo Group of Hospitals.',
  url: 'https://www.habiliteclinics.com',
  telephone: '+91-99100-24564',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressCountry: 'IN',
  },
  medicalSpecialty: ['Laparoscopic Surgery', 'Robotic Surgery', 'Bariatric Surgery', 'Laser Surgery'],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Institute of Medical Sciences, BHU, Varanasi'
    }
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'MBBS'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'MS (Surgery)'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'MRCS (London, U.K)'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'MMED (Singapore)'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'FMAS'
    }
  ],
  worksFor: {
    '@type': 'Hospital',
    name: 'Apollo Group of Hospitals, Delhi NCR'
  }
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
        suppressHydrationWarning
      />
      <Hero />
      <HealthCalculators />
      <MeetDoctor />
      <EducationAffiliations />
      <CareerHighlightsAndServices />
      <LaparoscopicServices />
      <BariatricServices />
      <LaserServices />
      <WhyChoose />
      <TestimonialsSlider />
      <BlogPreview />
    </>
  )
}
