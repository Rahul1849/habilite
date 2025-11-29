import { Metadata } from 'next'
import BlogFilter from '@/components/blog/BlogFilter'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Medical Blogs & Articles - Dr. Kapil Agrawal | Habilite Clinics',
  description: 'Read expert medical blogs and articles by Dr. Kapil Agrawal on laparoscopic surgery, bariatric surgery, hernia treatment, gallbladder surgery, and more. Trusted medical insights from India\'s leading surgeon.',
  keywords: [
    'medical blogs',
    'laparoscopic surgery blog',
    'bariatric surgery articles',
    'hernia treatment blog',
    'gallbladder surgery blog',
    'dr kapil agrawal blog',
    'medical articles delhi',
    'surgical procedure guides',
  ],
  openGraph: {
    title: 'Medical Blogs & Articles - Dr. Kapil Agrawal | Habilite Clinics',
    description: 'Read expert medical blogs and articles by Dr. Kapil Agrawal on laparoscopic surgery, bariatric surgery, and more.',
    url: 'https://www.habiliteclinics.com/post',
    type: 'website',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
        width: 800,
        height: 1000,
        alt: 'Dr. Kapil Agrawal - Medical Blogs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Blogs & Articles - Dr. Kapil Agrawal',
    description: 'Read expert medical blogs and articles by Dr. Kapil Agrawal.',
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
    canonical: 'https://www.habiliteclinics.com/post',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/post' },
])

export default function BlogPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16">
        {/* Header */}
        <div className="bg-gradient-primary py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">The Blogs</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Trusted Medical Insights
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
              Everything you need to know about health, all in one place.
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          <BlogFilter />
        </div>
      </div>
    </>
  )
}
