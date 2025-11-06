import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import MeetDoctor from '@/components/home/MeetDoctor'
import EducationAffiliations from '@/components/home/EducationAffiliations'
import LaparoscopicServices from '@/components/home/LaparoscopicServices'
import BariatricServices from '@/components/home/BariatricServices'
import LaserServices from '@/components/home/LaserServices'
import WhyChoose from '@/components/home/WhyChoose'
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
      <MeetDoctor />
      <EducationAffiliations />
      <LaparoscopicServices />
      <BariatricServices />
      <LaserServices />
      <WhyChoose />
    </>
  )
}
