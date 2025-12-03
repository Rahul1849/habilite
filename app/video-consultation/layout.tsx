import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video Consultation with Dr. Kapil Agrawal | Online Doctor Consultation Delhi | Book Video Call',
  description: 'Book secure video consultation with Dr. Kapil Agrawal from anywhere. Expert online doctor consultation in Delhi, India. HD quality video calls, end-to-end encrypted. Payment required before booking. 23 years experience, 7000+ successful surgeries.',
  keywords: [
    'video consultation delhi',
    'online doctor consultation delhi',
    'video call doctor delhi',
    'telemedicine delhi',
    'online consultation dr kapil agrawal',
    'video consultation laparoscopic surgeon',
    'online doctor appointment delhi',
    'telemedicine india',
    'video call consultation',
    'online medical consultation delhi',
  ],
  openGraph: {
    title: 'Video Consultation with Dr. Kapil Agrawal | Online Doctor Consultation Delhi',
    description: 'Book secure video consultation with Dr. Kapil Agrawal from anywhere. Expert online doctor consultation in Delhi, India. HD quality video calls, end-to-end encrypted.',
    url: 'https://www.habiliteclinics.com/video-consultation',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/video-consultation',
  },
}

const videoConsultationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Telemedicine',
  name: 'Video Consultation with Dr. Kapil Agrawal',
  description: 'Secure video consultation with Dr. Kapil Agrawal from anywhere. Expert online doctor consultation in Delhi, India. HD quality video calls, end-to-end encrypted.',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
    description: 'Best Laparoscopic and Robotic Surgeon in Delhi, India with 23 years experience. Senior Consultant at Apollo Group of Hospitals.',
    url: 'https://www.habiliteclinics.com',
    telephone: '+91-99994-56455',
    medicalSpecialty: [
      'Laparoscopic Surgery',
      'Robotic Surgery',
      'Bariatric Surgery',
      'Laser Surgery',
    ],
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  offers: {
    '@type': 'Offer',
    price: '1200',
    priceCurrency: 'INR',
    description: 'Video consultation fee with 20% discount for online payment',
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    availableLanguage: ['English', 'Hindi'],
  },
}

export default function VideoConsultationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoConsultationSchema) }}
        suppressHydrationWarning
      />
      {children}
    </>
  )
}

