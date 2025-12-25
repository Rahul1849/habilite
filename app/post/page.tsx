import { Metadata } from 'next'
import { Suspense as PreviewSuspense } from 'react'
import { draftMode } from 'next/headers'
import Image from 'next/image'
import BlogFilter from '@/components/blog/BlogFilter'
import PreviewBlogList from '@/components/blog/PreviewBlogList'
import SanityBlogList from '@/components/blog/SanityBlogList'
import PreviewProvider from '@/components/PreviewProvider'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'
import { blogsQuery } from '@/lib/sanity/queries'
import { getClient } from '@/lib/sanity/client'

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

export const revalidate = 60 // Revalidate every minute to show published changes quickly

export default async function BlogPage() {
  const { isEnabled } = draftMode()

  if (isEnabled) {
    const previewClient = getClient(true)
    const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET
    const apiVersion = process.env.SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_API_VERSION
    const token = process.env.SANITY_READ_TOKEN || process.env.SANITY_API_READ_TOKEN

    if (!projectId || !dataset || !previewClient) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-3">
            <p className="text-lg font-semibold text-gray-900">Preview requires Sanity config.</p>
            <p className="text-gray-600 text-sm">Set SANITY_PROJECT_ID and SANITY_DATASET to use draft mode.</p>
          </div>
        </div>
      )
    }

    let initialBlogs = []
    try {
      initialBlogs = await previewClient.fetch(blogsQuery)
    } catch (error) {
      console.error('Error fetching preview blogs:', error)
    }

    return (
      <PreviewProvider projectId={projectId} dataset={dataset} apiVersion={apiVersion} token={token}>
        <PreviewSuspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f56336] mx-auto mb-4"></div>
                <p className="text-gray-600">Loading draft blogs...</p>
              </div>
            </div>
          }
        >
          <PreviewBlogList initialData={initialBlogs} />
        </PreviewSuspense>
      </PreviewProvider>
    )
  }

  // Fetch published blogs from Sanity
  let publishedBlogs: any[] | null = null
  const client = getClient(false)
  if (client) {
    try {
      const fetchedBlogs = await client.fetch(blogsQuery)
      // Only use Sanity blogs if we actually have valid blogs with required fields
      if (
        fetchedBlogs && 
        Array.isArray(fetchedBlogs) && 
        fetchedBlogs.length > 0 &&
        fetchedBlogs.some((blog: any) => blog.title && blog.slug)
      ) {
        publishedBlogs = fetchedBlogs
      } else {
        // If Sanity returns empty or invalid blogs, fallback to static data
        publishedBlogs = null
        if (fetchedBlogs && Array.isArray(fetchedBlogs) && fetchedBlogs.length === 0) {
          console.log('Sanity returned empty blog array, using static blogs')
        }
      }
    } catch (error) {
      console.error('Error fetching blogs from Sanity:', error)
      // Fallback to static data if Sanity fetch fails
      publishedBlogs = null
    }
  }

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16">
        {/* Blog Cover Image */}
        <div className="container-custom mb-8">
          <div className="relative w-full rounded-xl overflow-hidden bg-gray-50">
            <div className="relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px]">
              <Image
                src="/images/blog-cover.webp"
                alt="Blog Cover - Medical Blogs & Articles"
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                priority
                fetchPriority="high"
                quality={85}
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
        </div>

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
          {publishedBlogs && publishedBlogs.length > 0 ? (
            <SanityBlogList blogs={publishedBlogs} />
          ) : (
            <BlogFilter />
          )}
        </div>
      </div>
    </>
  )
}
