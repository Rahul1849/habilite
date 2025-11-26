import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/home/Hero'
import MeetDoctor from '@/components/home/MeetDoctor'
import EducationAffiliations from '@/components/home/EducationAffiliations'
import CareerHighlightsAndServices from '@/components/home/CareerHighlightsAndServices'
import { testimonials } from '@/data/testimonials'
import { getOrganizationSchema } from '@/lib/seo/schemaBuilders'

// Dynamically import below-the-fold components to improve initial page load
const LaparoscopicServices = dynamic(() => import('@/components/home/LaparoscopicServices'), {
  ssr: true,
})

const BariatricServices = dynamic(() => import('@/components/home/BariatricServices'), {
  ssr: true,
})

const LaserServices = dynamic(() => import('@/components/home/LaserServices'), {
  ssr: true,
})

const WhyChoose = dynamic(() => import('@/components/home/WhyChoose'), {
  ssr: true,
})

const FAQ = dynamic(() => import('@/components/home/FAQ'), {
  ssr: true,
})

const BlogPreview = dynamic(() => import('@/components/home/BlogPreview'), {
  ssr: true,
})

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
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="animate-pulse">
              <div className="aspect-video bg-gray-200 rounded-xl mb-4"></div>
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
  title: 'Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi, India | Top Surgeon | 23 Years Experience',
  description: 'Dr. Kapil Agrawal is the best laparoscopic surgeon in Delhi and India with 23 years experience and 7000+ successful surgeries. Expert in gallbladder surgery, hernia surgery, bariatric surgery, and laser surgery. Senior Consultant at Apollo Hospitals, Delhi NCR. Book appointment for laparoscopic surgery, robotic surgery, weight loss surgery in Delhi.',
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
    description: 'Dr. Kapil Agrawal - Leading laparoscopic and robotic surgeon with 23 years experience and 7000+ successful surgeries at Apollo Hospitals, Delhi.',
    url: 'https://www.habiliteclinics.com',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com',
  },
}

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://www.habiliteclinics.com#physician',
  name: 'Dr. Kapil Agrawal',
  description: 'Best Laparoscopic and Robotic Surgeon in Delhi, India with 23 years experience. Senior Consultant at Apollo Group of Hospitals. 7000+ successful surgeries. Expert in gallbladder surgery, hernia surgery, bariatric surgery, and laser surgery.',
  url: 'https://www.habiliteclinics.com',
  image: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
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
  sameAs: [
    'https://www.linkedin.com/in/dr-kapil-agrawal',
    'https://www.youtube.com/@drkapilagrawal',
    'https://www.facebook.com/habiliteclinics',
  ],
  person: {
    '@type': 'Person',
    name: 'Dr. Kapil Agrawal',
    jobTitle: 'Senior Consultant - Laparoscopic & Robotic Surgeon',
    description: 'Best Laparoscopic and Robotic Surgeon in Delhi, India with 23 years experience. Senior Consultant at Apollo Group of Hospitals. 7000+ successful surgeries. Expert in gallbladder surgery, hernia surgery, bariatric surgery, and laser surgery.',
    url: 'https://www.habiliteclinics.com',
    image: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
    telephone: '+91-99994-56455',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'M 11, Block M, Lajpat Nagar Road, Lajpat Nagar 2',
      addressLocality: 'Lajpat Nagar',
      addressRegion: 'Delhi',
      postalCode: '110024',
      addressCountry: 'IN',
    },
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
    award: '23 Years Experience | 7000+ Successful Surgeries',
    sameAs: [
      'https://www.linkedin.com/in/dr-kapil-agrawal',
      'https://www.youtube.com/@drkapilagrawal',
      'https://www.facebook.com/habiliteclinics',
    ],
  },
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
      name: 'Who is Dr Kapil Agrawal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr Kapil Agrawal is a highly qualified laparoscopic, laser & bariatric surgeon based in Delhi with over 23 years of experience, holding credentials including MBBS, MS (Surgery), MRCS (London, U.K.), MMED (Singapore), and FMAS.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of treatments does Dr Kapil Agrawal specialise in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'He specialises in minimally invasive (laparoscopic and robotic) surgeries and laser treatments including gallbladder and hernia surgery, advanced bariatric and metabolic surgery, anorectal laser surgeries (for piles, fistula, fissure, pilonidal sinus), single-port and robot-assisted techniques.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does he practise / where can I consult him?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr Agrawal is senior consultant in the Department of Laparoscopic & Bariatric Surgery at the Apollo Group of Hospitals, New Delhi, and founder of Habilite Clinics (South Delhi, Green Park & Lajpat Nagar) where he offers consultations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book an appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book a consultation with Dr Agrawal via Habilite Clinics\' contact number, email, or enquiry form on the website, with tele-consultations (video/online) also available in many cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you accept insurance and financing (EMI) options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — major health insurance cash-less facilities are supported at his affiliated hospitals, and easy EMI / payment-plans are offered for selected surgical procedures.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the benefits of minimally invasive / laser surgery under Dr Agrawal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minimally invasive and laser techniques offer smaller incisions, less pain, quicker recovery, minimal scarring, faster return to work and normal life — all of which Dr Agrawal emphasises in his practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is single-port laparoscopic surgery or robotic surgery available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr Agrawal offers single-port laparoscopic and robot-assisted techniques for suitable cases (for example gallbladder surgery, hernia, bariatric surgery) to maximise cosmetic and recovery advantages.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of weight loss / bariatric treatments are offered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'He offers a full range: sleeve gastrectomy, mini gastric bypass, Roux-en-Y bypass, revisional bariatric surgery, as well as non-surgical treatments like intragastric balloons (Allurion, Spatz) plus medically supervised weight-management programmes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring / how should I prepare for the first consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bring previous imaging/reports (if any), list of current medications, any existing comorbidities (e.g., diabetes, hypertension). The consultation will include clinical evaluation, discussion of treatment options, expected outcomes and costs. Prepare questions in advance about risks, recovery time, and expected results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Post-surgery care: what is the typical recovery & follow-up like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recovery and follow-up depend on the specific procedure. Minimally invasive surgeries typically lead to shorter hospital stays, faster mobilisation and fewer complications. A follow-up plan will be provided including wound check-ups, diet and lifestyle advice, and long-term surveillance if needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are international patients / tele-consultations catered to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Habilite Clinics supports international patients and online consultations. Dr Agrawal and his team coordinate care, treatment planning, and post-operative follow-up for patients coming from abroad.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I need surgery or a less invasive option?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During the consultation, Dr Agrawal will assess your condition (symptoms, investigations, overall health) and advise whether surgery is the best option or if a conservative, non-surgical treatment may suffice. The decision will be personalised based on your health, lifestyle, and goals.',
      },
    },
  ],
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
  return match && match[1] ? match[1] : null
}

// VideoObject schema for video testimonials
const videoTestimonialsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Patient Video Testimonials',
  description: 'Video testimonials from patients who received treatment from Dr. Kapil Agrawal at Habilite Clinics',
  itemListElement: testimonials
    .filter((t) => t.videoUrl)
    .map((testimonial, index) => {
      const videoId = getYouTubeVideoId(testimonial.videoUrl || '')
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'VideoObject',
          name: `${testimonial.patientName} - ${testimonial.treatment} Testimonial`,
          description: testimonial.text,
          thumbnailUrl: videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : undefined,
          uploadDate: testimonial.date,
          contentUrl: testimonial.videoUrl,
          embedUrl: videoId ? `https://www.youtube.com/embed/${videoId}` : undefined,
          publisher: {
            '@type': 'Organization',
            name: 'Habilite Clinics',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.habiliteclinics.com/logo.png',
            },
          },
        },
      }
    }),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
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
      {testimonials.filter((t) => t.videoUrl).length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoTestimonialsSchema) }}
          suppressHydrationWarning
        />
      )}
      <Hero />
      <MeetDoctor />
      <div className="defer-section">
        <EducationAffiliations />
      </div>
      <div className="defer-section">
        <LaparoscopicServices />
      </div>
      <div className="defer-section">
        <BariatricServices />
      </div>
      <div className="defer-section">
        <LaserServices />
      </div>
      <div className="defer-section">
        <CareerHighlightsAndServices />
      </div>
      <div className="defer-section">
        <WhyChoose />
      </div>
      <div className="defer-section">
        <TestimonialsSlider />
      </div>
      <div className="defer-section">
        <FAQ />
      </div>
      <div className="defer-section">
        <BlogPreview />
      </div>
    </>
  )
}
