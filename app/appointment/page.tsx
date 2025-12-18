import { Metadata } from 'next'
import { Calendar } from 'lucide-react'
import AppointmentForm from '@/components/appointment/AppointmentForm'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Book Appointment - Dr. Kapil Agrawal | Habilite Clinics | Online Booking',
  description: 'Book an appointment with Dr. Kapil Agrawal, the best laparoscopic surgeon in Delhi. Quick & easy online appointment booking with payment options. Available at Apollo Hospitals and Habilite Clinics.',
  keywords: [
    'book appointment dr kapil agrawal',
    'appointment booking delhi',
    'laparoscopic surgeon appointment',
    'online appointment booking',
    'dr kapil agrawal consultation',
    'habilite clinics appointment',
    'apollo hospitals appointment',
  ],
  openGraph: {
    title: 'Book Appointment - Dr. Kapil Agrawal | Habilite Clinics',
    description: 'Book an appointment with Dr. Kapil Agrawal, the best laparoscopic surgeon in Delhi. Quick & easy online booking with payment options.',
    url: 'https://www.habiliteclinics.com/appointment',
    type: 'website',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
        width: 800,
        height: 1000,
        alt: 'Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Appointment - Dr. Kapil Agrawal | Habilite Clinics',
    description: 'Book an appointment with Dr. Kapil Agrawal, the best laparoscopic surgeon in Delhi.',
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
    canonical: 'https://www.habiliteclinics.com/appointment',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Book Appointment', url: '/appointment' },
])

export default function AppointmentPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16 min-h-screen bg-gray-50">
        <div className="bg-gradient-primary py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Book Appointment</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Quick & Easy Appointment Booking with Online Payment
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          <AppointmentForm />
        </div>
      </div>
    </>
  )
}
