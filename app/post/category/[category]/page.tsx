import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import SanityBlogList from '@/components/blog/SanityBlogList'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'
import { blogsQuery } from '@/lib/sanity/queries'
import { getClient } from '@/lib/sanity/client'
import { blogPosts } from '@/data/blog'
import { slugify } from '@/lib/utils/slugify'
import { urlForImage } from '@/sanity/lib/image'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

type Props = {
  params: Promise<{ category: string }>
}

export const revalidate = 60

// Helper function to match posts to categories
function matchesCategory(post: typeof blogPosts[0], category: string): boolean {
  if (category === 'all') return true
  
  const titleLower = post.title.toLowerCase()
  const categoryLower = post.category.toLowerCase()
  const tagsLower = post.tags.join(' ').toLowerCase()
  const searchCategory = category.toLowerCase()
  
  // Direct category match
  if (categoryLower === searchCategory) return true
  
  // Anal Fistula
  if (category === 'anal-fistula') {
    return titleLower.includes('fistula') || 
           titleLower.includes('anal fistula') ||
           tagsLower.includes('fistula') ||
           categoryLower.includes('fistula')
  }
  
  // Anal Fissure
  if (category === 'anal-fissure') {
    return titleLower.includes('anal fissure') || 
           (titleLower.includes('fissure') && !titleLower.includes('fistula')) ||
           tagsLower.includes('anal fissure') ||
           tagsLower.includes('fissure') ||
           categoryLower.includes('fissure')
  }
  
  // Appendix Surgery
  if (category === 'appendix-surgery') {
    return titleLower.includes('appendicitis') || 
           titleLower.includes('appendix') ||
           titleLower.includes('appendectomy') ||
           categoryLower === 'appendicitis' ||
           tagsLower.includes('appendicitis') ||
           tagsLower.includes('appendix')
  }
  
  // Bariatric Surgery
  if (category === 'bariatric-surgery') {
    return titleLower.includes('bariatric') || 
           titleLower.includes('weight loss surgery') || 
           titleLower.includes('gastric bypass') || 
           titleLower.includes('sleeve gastrectomy') ||
           titleLower.includes('mini gastric bypass') ||
           titleLower.includes('obesity surgery') ||
           categoryLower === 'bariatric surgery' ||
           tagsLower.includes('bariatric')
  }
  
  // Circumcision
  if (category === 'circumcision') {
    return titleLower.includes('circumcision') || 
           titleLower.includes('zsr circumcision') ||
           tagsLower.includes('circumcision')
  }
  
  // GallBladder
  if (category === 'gallbladder') {
    return titleLower.includes('gallbladder') || 
           titleLower.includes('gall bladder') || 
           titleLower.includes('gallstone') ||
           titleLower.includes('cholecystectomy') ||
           titleLower.includes('gall stone') ||
           categoryLower.includes('gallbladder') ||
           categoryLower.includes('gall bladder') ||
           tagsLower.includes('gallbladder') ||
           tagsLower.includes('gallstone')
  }
  
  // Hernia
  if (category === 'hernia') {
    return titleLower.includes('hernia') || 
           categoryLower === 'hernia' ||
           tagsLower.includes('hernia')
  }
  
  // Laparoscopic Surgery
  if (category === 'laparoscopic-surgery') {
    return titleLower.includes('laparoscopic') || 
           titleLower.includes('minimally invasive') || 
           titleLower.includes('robotic surgery') ||
           categoryLower === 'laparoscopic surgery' ||
           tagsLower.includes('laparoscopic')
  }
  
  // Lipoma Surgery
  if (category === 'lipoma-surgery') {
    return titleLower.includes('lipoma') || 
           categoryLower === 'lipoma' ||
           tagsLower.includes('lipoma')
  }
  
  // Non-Surgical Weight Loss
  if (category === 'non-surgical-weight-loss') {
    return titleLower.includes('non-surgical weight') || 
           titleLower.includes('weight loss program') || 
           titleLower.includes('medical weight loss') ||
           titleLower.includes('non surgical weight') ||
           categoryLower === 'non-surgical weight loss'
  }
  
  // Piles
  if (category === 'piles') {
    return titleLower.includes('piles') || 
           titleLower.includes('hemorrhoids') || 
           titleLower.includes('hemorrhoid') ||
           categoryLower === 'piles' ||
           tagsLower.includes('piles') ||
           tagsLower.includes('hemorrhoid')
  }
  
  // Surgery
  if (category === 'surgery') {
    return titleLower.includes('surgery') || 
           titleLower.includes('surgical') ||
           categoryLower.includes('surgery') ||
           tagsLower.includes('surgery')
  }
  
  // Weight Loss
  if (category === 'weight-loss') {
    return titleLower.includes('weight loss') || 
           titleLower.includes('weight-loss') ||
           titleLower.includes('obesity') ||
           titleLower.includes('bariatric') ||
           tagsLower.includes('weight loss') ||
           tagsLower.includes('obesity')
  }
  
  return false
}

// Get category title from slug
function getCategoryTitle(slug: string): string {
  const categoryMap: Record<string, string> = {
    'anal-fistula': 'Anal Fistula',
    'anal-fissure': 'Anal Fissure',
    'appendix-surgery': 'Appendix Surgery',
    'bariatric-surgery': 'Bariatric Surgery',
    'circumcision': 'Circumcision',
    'gallbladder': 'GallBladder',
    'hernia': 'Hernia',
    'laparoscopic-surgery': 'Laparoscopic Surgery',
    'lipoma-surgery': 'Lipoma Surgery',
    'non-surgical-weight-loss': 'Non-Surgical Weight Loss',
    'piles': 'Piles',
    'surgery': 'Surgery',
    'weight-loss': 'Weight Loss',
  }
  return categoryMap[slug] || slug
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const categoryTitle = getCategoryTitle(category)
  
  return {
    title: `${categoryTitle} Blogs - Dr. Kapil Agrawal | Habilite Clinics`,
    description: `Read expert medical blogs and articles about ${categoryTitle} by Dr. Kapil Agrawal. Trusted medical insights from India's leading surgeon.`,
    openGraph: {
      title: `${categoryTitle} Blogs - Dr. Kapil Agrawal`,
      description: `Read expert medical blogs and articles about ${categoryTitle}.`,
      url: `https://www.habiliteclinics.com/post/category/${category}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://www.habiliteclinics.com/post/category/${category}`,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  
  // Fetch published blogs from Sanity
  let publishedBlogs = null
  const client = getClient(false)
  if (client) {
    try {
      publishedBlogs = await client.fetch(blogsQuery)
    } catch (error) {
      console.error('Error fetching blogs from Sanity:', error)
      publishedBlogs = null
    }
  }

  // Filter blogs by category
  let filteredBlogs: any[] = []
  let categoryTitle = getCategoryTitle(category)

  if (publishedBlogs && publishedBlogs.length > 0) {
    // Filter Sanity blogs
    filteredBlogs = publishedBlogs.filter((blog: any) => {
      if (category === 'all') return true
      const blogCategory = blog.category?.title?.toLowerCase() || ''
      const categorySlug = slugify(blogCategory)
      return categorySlug === category || blogCategory === category
    })
  } else {
    // Filter static blogs
    filteredBlogs = blogPosts.filter(post => matchesCategory(post, category))
  }

  if (filteredBlogs.length === 0 && category !== 'all') {
    notFound()
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/post' },
    { name: categoryTitle, url: `/post/category/${category}` },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16">
        {/* Header */}
        <div className="bg-gradient-primary py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {categoryTitle} Blogs
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {filteredBlogs.length} {filteredBlogs.length === 1 ? 'Article' : 'Articles'} Found
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          {/* Back Button */}
          <div className="mb-12">
            <Link
              href="/post"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:border-[#0891b2] focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:ring-offset-2 transition-all duration-200 font-semibold text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Blogs
            </Link>
          </div>

          {publishedBlogs && publishedBlogs.length > 0 ? (
            <SanityBlogList blogs={filteredBlogs} showCategoryFilter={false} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post) => (
                <Link
                  key={post.id}
                  href={`/post/${post.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 flex-wrap gap-2">
                      <div className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        <span className="text-xs">
                          {new Date(post.publishedDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center">
                        <Clock className="mr-1" size={14} />
                        <span className="text-xs">{post.readTime} min read</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#0891b2] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="text-xs text-gray-500">
                      By {post.author} - Senior Consultant at Apollo Group of Hospitals
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

