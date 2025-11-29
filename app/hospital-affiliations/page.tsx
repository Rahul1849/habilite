import { Metadata } from 'next'
import HospitalAffiliations from '@/components/home/HospitalAffiliations'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Hospital Affiliations - Dr. Kapil Agrawal | Apollo Hospitals Delhi NCR | Habilite Clinics',
  description: 'Dr. Kapil Agrawal is associated with leading Apollo Hospitals in Delhi NCR, providing world-class surgical care. Senior Consultant at Apollo Group of Hospitals with 23+ years of experience.',
  keywords: [
    'apollo hospitals delhi',
    'dr kapil agrawal apollo',
    'hospital affiliations delhi',
    'apollo hospitals surgeon',
    'habilite clinics apollo',
    'laparoscopic surgeon apollo',
  ],
  openGraph: {
    title: 'Hospital Affiliations - Dr. Kapil Agrawal | Apollo Hospitals',
    description: 'Dr. Kapil Agrawal is associated with leading Apollo Hospitals in Delhi NCR, providing world-class surgical care.',
    url: 'https://www.habiliteclinics.com/hospital-affiliations',
    type: 'website',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
        width: 800,
        height: 1000,
        alt: 'Dr. Kapil Agrawal - Hospital Affiliations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Affiliations - Dr. Kapil Agrawal | Apollo Hospitals',
    description: 'Dr. Kapil Agrawal is associated with leading Apollo Hospitals in Delhi NCR.',
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
    canonical: 'https://www.habiliteclinics.com/hospital-affiliations',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Hospital Affiliations', url: '/hospital-affiliations' },
])

export default function HospitalAffiliationsPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16">
        <div className="bg-gradient-primary py-16 border-b border-gray-200">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Hospital Affiliations</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Dr. Kapil Agrawal is associated with leading hospitals across Delhi NCR, providing world-class surgical care
            </p>
          </div>
        </div>
        <HospitalAffiliations />
      </div>
    </>
  )
}

