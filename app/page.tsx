import { Metadata } from 'next'
import dynamicImport from 'next/dynamic'
import Hero from '@/components/home/Hero'
// Below-the-fold components converted to dynamic imports to reduce initial JS bundle
const MeetDoctor = dynamicImport(() => import('@/components/home/MeetDoctor'), {
  ssr: true, // Keep SSR for SEO, but load after initial render
})
const EducationAffiliations = dynamicImport(() => import('@/components/home/EducationAffiliations'), {
  ssr: true, // Keep SSR for SEO
})
const CareerHighlightsAndServices = dynamicImport(() => import('@/components/home/CareerHighlightsAndServices'), {
  ssr: false, // Below fold, defer to reduce TBT
  loading: () => <div className="min-h-[600px] animate-pulse bg-gray-50" />,
})
import { getHomePage, getFeaturedServices, getFeaturedTestimonials, getAllFAQs, getRecentBlogs } from '@/lib/sanity/fetch'
import { getOrganizationSchema } from '@/lib/seo/schemaBuilders'
import { getImageUrl } from '@/lib/sanity/utils'

// Always render this page on-demand so Sanity updates show immediately
export const revalidate = 0
// Force dynamic rendering - prevents any caching at edge/CDN level
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

// Dynamically import below-the-fold components to improve initial page load
// Using ssr: false for non-critical components to reduce TBT
const LaparoscopicServices = dynamicImport(() => import('@/components/home/LaparoscopicServices'), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" />,
})

const BariatricServices = dynamicImport(() => import('@/components/home/BariatricServices'), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" />,
})

const LaserServices = dynamicImport(() => import('@/components/home/LaserServices'), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" />,
})

const WhyChoose = dynamicImport(() => import('@/components/home/WhyChoose'), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" />,
})

const FAQ = dynamicImport(() => import('@/components/home/FAQ'), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" />,
})

const BlogPreview = dynamicImport(() => import('@/components/home/BlogPreview'), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" />,
})

// Dynamically import TestimonialsSlider to defer loading and improve initial page load
const TestimonialsSlider = dynamicImport(() => import('@/components/home/TestimonialsSlider'), {
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
  title: 'Best Laparoscopic Surgeon in Delhi - Dr. Kapil Agrawal',
  description: 'Dr. Kapil Agrawal, best laparoscopic surgeon in Delhi, specializes in advanced minimally invasive surgeries. Trusted for expertise, fast recovery, and personalized care.',
  other: {
    'preload-image': '/images/dr.webp',
  },
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
    title: 'Best Laparoscopic Surgeon in Delhi - Dr. Kapil Agrawal',
    description: 'Dr. Kapil Agrawal, best laparoscopic surgeon in Delhi, specializes in advanced minimally invasive surgeries. Trusted for expertise, fast recovery, and personalized care.',
    url: 'https://www.habiliteclinics.com',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Habilite Clinics',
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
    title: 'Best Laparoscopic Surgeon in Delhi - Dr. Kapil Agrawal',
    description: 'Dr. Kapil Agrawal, best laparoscopic surgeon in Delhi, specializes in advanced minimally invasive surgeries. Trusted for expertise, fast recovery, and personalized care.',
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
    canonical: 'https://www.habiliteclinics.com',
  },
}

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://www.habiliteclinics.com#physician',
  name: 'Dr. Kapil Agrawal',
  alternateName: [
    'Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi',
    'Best Laparoscopic Surgeon in Delhi - Dr. Kapil Agrawal',
    'Dr. Kapil Agrawal - Best Bariatric Surgeon in Delhi',
    'Best Bariatric Surgeon in Delhi - Dr. Kapil Agrawal',
    'Dr. Kapil Agrawal - Best Robotic Surgeon in Delhi',
    'Best Robotic Surgeon in Delhi - Dr. Kapil Agrawal',
    'Dr. Kapil Agrawal - Best Laparoscopic Surgeon in India',
    'Best Laparoscopic Surgeon in India - Dr. Kapil Agrawal',
    'Dr. Kapil Agrawal - Best Bariatric Surgeon in India',
    'Best Bariatric Surgeon in India - Dr. Kapil Agrawal',
    'Dr. Kapil Agrawal - Best Robotic Surgeon in India',
    'Best Robotic Surgeon in India - Dr. Kapil Agrawal',
  ],
  description: 'Dr. Kapil Agrawal is the best laparoscopic, bariatric, and robotic surgeon in Delhi, India with 23 years experience. Senior Consultant at Apollo Group of Hospitals. 7000+ successful surgeries. Expert in laparoscopic surgery, bariatric surgery, robotic surgery, gallbladder surgery, hernia surgery, and laser surgery.',
  url: 'https://www.habiliteclinics.com',
  image: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
  // Use schema.org MedicalSpecialty enumeration values
  medicalSpecialty: ['Surgical', 'Gastroenterologic', 'DietNutrition'],
  telephone: '+91-99994-56455',
  email: 'contact@habiliteclinics.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'M 11, Block M, Lajpat Nagar Road, Lajpat Nagar 2',
    addressLocality: 'Lajpat Nagar',
    addressRegion: 'Delhi',
    postalCode: '110024',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'NCR' },
    { '@type': 'Country', name: 'India' },
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
  knowsAbout: [
    'Best Laparoscopic Surgeon in Delhi',
    'Best Laparoscopic Surgeon in India',
    'Best Bariatric Surgeon in Delhi',
    'Best Bariatric Surgeon in India',
    'Best Robotic Surgeon in Delhi',
    'Best Robotic Surgeon in India',
    'Laparoscopic Surgery Delhi',
    'Bariatric Surgery Delhi',
    'Robotic Surgery Delhi',
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
      name: 'Why is Dr. Kapil Agrawal considered one of the best laparoscopic surgeons in Delhi-NCR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Agrawal is recognized among the best laparoscopic surgeons in Delhi and the NCR due to his exclusive focus on advanced laparoscopic techniques, his high volume of successful complex procedures, continuous adoption of the latest robotic-assisted technology, and consistent positive outcomes documented by patient testimonials from across the region.',
      },
    },
    {
      '@type': 'Question',
      name: 'What laparoscopic procedures does Dr. Agrawal perform for patients from Delhi and the NCR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Agrawal offers a full spectrum of advanced laparoscopic surgeries, catering to the diverse needs of patients from Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad. This includes bariatric surgery for weight loss, hernia repair, gallbladder removal, anti-reflux surgery for hiatus hernia and appendix surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Dr. Agrawal ensure the best results for laparoscopic surgery in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr Kapil Agrawal extensive experience of 23 years and expertise to perform complex cases ensures the best results. Dr. Agrawal employs high-definition laparoscopic and robotic systems for superior visualization, follows evidence-based surgical protocols, and provides personalized pre- and post-operative guidance to ensure a smooth and successful recovery for every patient.',
      },
    },
    {
      '@type': 'Question',
      name: 'As a top laparoscopic surgeon in South Delhi, how accessible is your clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our clinic in South Delhi is easily accessible from across the NCR. We are strategically located with ample parking and are well-connected by metro and road. We understand the importance of convenience for our patients and have designed the patient journey to be as seamless as possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer second opinions for complex laparoscopic surgery cases in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Dr. Agrawal frequently provides expert second opinions for complex laparoscopic surgery cases from patients across Delhi-NCR. If you have been advised surgery and want to explore a minimally invasive option or seek further clarity, a consultation can provide a comprehensive review of your case.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I look for when choosing the best laparoscopic surgeon for hernia repair in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "When searching for the best surgeon for laparoscopic hernia repair in Delhi, key factors include the surgeon's specific experience and volume in hernia surgery, their use of advanced mesh and fixation techniques, their complication and recurrence rates, and their philosophy on patient education and recovery support.",
      },
    },
    {
      '@type': 'Question',
      name: 'For someone in Gurgaon/Noida considering Robotic or Laparoscopic bariatric surgery, why travel to see Dr. Agrawal in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While there are options closer by, patients from Gurgaon, Noida, and beyond choose Dr. Agrawal for his specialized expertise as a bariatric and metabolic surgeon. His focus on long-term patient success & has multidisciplinary support team. He has the mastery of the latest laparoscopic and robotic techniques for weight loss surgery and offers a distinct advantage for a life-changing procedure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do consultations work for patients from outside Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We welcome patients from all over the NCR and beyond. For preliminary discussions, teleconsultation options are also available to provide guidance and plan your visit efficiently.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Single Port Laparoscopic Surgery, and how is it different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Single-port laparoscopic surgery is an advanced form of Laparoscopic surgery where, instead of 3-4 tiny incisions, a single incision is made inside the umbilicus or belly button. This makes the scar almost invisible after surgery. Dr Kapil Agrawal performs single-port surgery mainly for gallbladder stones and bariatric surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Teleconsultations available with Dr Kapil Agrawal',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can book a video consultation with Dr. Kapil Agrawal. You can simply share your medical reports or documents in advance, and then connect with him online for a detailed discussion about your health concerns.',
      },
    },
  ],
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string | undefined): string | null {
  if (!url) return null
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
  return match && match[1] ? match[1] : null
}

// VideoObject schema for video testimonials (will be generated from Sanity data)
function generateVideoTestimonialsSchema(testimonials: any[]) {
  const videoTestimonials = testimonials.filter((t) => t.videoUrl)
  if (videoTestimonials.length === 0) return null
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Patient Video Testimonials',
    description: 'Video testimonials from patients who received treatment from Dr. Kapil Agrawal at Habilite Clinics',
    itemListElement: videoTestimonials.map((testimonial, index) => {
      const videoId = getYouTubeVideoId(testimonial.videoUrl)
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'VideoObject',
          name: `${testimonial.name || testimonial.patientName} - ${testimonial.treatment || ''} Testimonial`,
          description: testimonial.message || testimonial.text,
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
}

export default async function HomePage() {
  // Fetch hero data first for faster LCP, then other data in parallel
  // Hero uses static image, so Sanity data doesn't block LCP
  const homeData = await getHomePage()
  const [featuredServices, featuredTestimonials, faqs, recentBlogs] = await Promise.all([
    getFeaturedServices(),
    getFeaturedTestimonials(),
    getAllFAQs(),
    getRecentBlogs(3),
  ])

  // Fallback to empty arrays if data is not available
  const services = featuredServices || []
  const testimonials = featuredTestimonials || []
  const faqData = faqs || []
  const blogs = recentBlogs || []

  return (
    <>
      <Hero 
        bannerTitle={homeData?.bannerTitle}
        bannerSubtitle={homeData?.bannerSubtitle}
        bannerImage={homeData?.bannerImage}
      />
      <div className="defer-section">
        <MeetDoctor />
      </div>
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
      <CareerHighlightsAndServices />
      <div className="defer-section">
        <WhyChoose />
      </div>
      <div className="defer-section">
        <TestimonialsSlider testimonials={testimonials} />
      </div>
      <div className="defer-section">
        <FAQ faqs={faqData} />
      </div>
      <div className="defer-section">
        <BlogPreview />
      </div>
      {/* StructuredData moved to bottom to prevent blocking render */}
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
      {(() => {
        const videoSchema = generateVideoTestimonialsSchema(testimonials)
        return videoSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
            suppressHydrationWarning
          />
        ) : null
      })()}
    </>
  )
}
