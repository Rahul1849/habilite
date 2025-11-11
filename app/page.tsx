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
  title: 'Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi, India | Top Surgeon | 27+ Years Experience',
  description: 'Dr. Kapil Agrawal is the best laparoscopic surgeon in Delhi and India with 27+ years experience and 7000+ successful surgeries. Expert in gallbladder surgery, hernia surgery, bariatric surgery, and laser surgery. Senior Consultant at Apollo Hospitals, Delhi NCR. Book appointment for laparoscopic surgery, robotic surgery, weight loss surgery in Delhi.',
  keywords: [
    'best laparoscopic surgeon delhi',
    'laparoscopic surgeon delhi',
    'Dr. Kapil Agrawal',
    'robotic surgery delhi',
    'gallbladder surgery delhi',
    'hernia surgery delhi',
    'bariatric surgery delhi',
    'laser surgery delhi',
    'Apollo hospitals surgeon',
    'minimally invasive surgery delhi',
    'laparoscopic surgery delhi ncr',
    'best surgeon in delhi',
  ],
  openGraph: {
    title: 'Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi',
    description: 'Dr. Kapil Agrawal - Leading laparoscopic and robotic surgeon with 27+ years experience and 7000+ successful surgeries at Apollo Hospitals, Delhi.',
    url: 'https://www.habiliteclinics.com',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com',
  },
}

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Kapil Agrawal',
  description: 'Best Laparoscopic and Robotic Surgeon in Delhi, India with 27+ years experience. Senior Consultant at Apollo Group of Hospitals. 7000+ successful surgeries. Expert in gallbladder surgery, hernia surgery, bariatric surgery, and laser surgery.',
  url: 'https://www.habiliteclinics.com',
  telephone: '+91-99100-24564',
  image: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'M 11, Block M, Lajpat Nagar Road, Lajpat Nagar 2',
    addressLocality: 'Lajpat Nagar',
    addressRegion: 'Delhi',
    postalCode: '110024',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.5675',
    longitude: '77.2430',
  },
  medicalSpecialty: [
    'Laparoscopic Surgery',
    'Robotic Surgery',
    'Bariatric Surgery',
    'Laser Surgery',
    'Gallbladder Surgery',
    'Hernia Surgery',
    'Weight Loss Surgery',
    'Metabolic Surgery',
  ],
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
  },
  knowsAbout: [
    'Best Laparoscopic Surgeon in Delhi',
    'Best Laparoscopic Surgeon in India',
    'Laparoscopic Surgery Delhi',
    'Robotic Surgery Delhi',
    'Bariatric Surgery Delhi',
    'Weight Loss Surgery Delhi',
    'Gallbladder Surgery Delhi',
    'Hernia Surgery Delhi',
    'Laser Surgery Delhi',
  ],
  jobTitle: 'Senior Consultant - Laparoscopic & Robotic Surgeon',
  award: '27+ Years Experience | 7000+ Successful Surgeries',
  areaServed: [
    {
      '@type': 'City',
      name: 'Delhi',
    },
    {
      '@type': 'State',
      name: 'Delhi',
    },
    {
      '@type': 'Country',
      name: 'India',
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Medical Service',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Surgical Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Laparoscopic Surgery in Delhi',
          description: 'Expert laparoscopic surgery for gallbladder, hernia, appendix, and rectal prolapse',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bariatric Surgery in Delhi',
          description: 'Comprehensive weight loss surgery including sleeve gastrectomy, gastric bypass, and metabolic surgery',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Laser Surgery in Delhi',
          description: 'Advanced laser treatments for hemorrhoids, anal fissure, anal fistula, and pilonidal sinus',
        },
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.habiliteclinics.com',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best laparoscopic surgeon in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Kapil Agrawal is one of the best laparoscopic surgeons in Delhi and India with 27+ years of experience and 7000+ successful surgeries. He is a Senior Consultant at Apollo Group of Hospitals, Delhi NCR.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Dr. Kapil Agrawal provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Kapil Agrawal provides comprehensive surgical services including laparoscopic surgery, robotic surgery, bariatric surgery (weight loss surgery), and laser surgery. He specializes in gallbladder surgery, hernia surgery, appendix surgery, and various laser treatments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Habilite Clinics located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Habilite Clinics is located at M 11, Block M, Lajpat Nagar Road, Lajpat Nagar 2, Lajpat Nagar, New Delhi, Delhi 110024. The clinic is easily accessible in South Delhi.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the qualifications of Dr. Kapil Agrawal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Kapil Agrawal holds MBBS, MS (Surgery), MRCS (London, U.K), MMED (Singapore), and FMAS qualifications. He has trained across 3 continents and has 27+ years of surgical experience.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
      <Hero />
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
