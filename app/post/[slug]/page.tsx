import { Suspense as PreviewSuspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getBlogPostBySlug, getRelatedPosts, getRecentPosts, blogPosts } from '@/data/blog'
import PreviewSingleBlog from '@/components/blog/PreviewSingleBlog'
import SanitySingleBlog from '@/components/blog/SanitySingleBlog'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import TableOfContents from '@/components/blog/TableOfContents'
import RecentPosts from '@/components/blog/RecentPosts'
import DoctorInfoCard from '@/components/blog/DoctorInfoCard'
import FAQSchema from '@/components/blog/FAQSchema'
import BlogPostFooter from '@/components/blog/BlogPostFooter'
import AboutDoctorSection from '@/components/blog/AboutDoctorSection'
import StructuredData from '@/components/seo/StructuredData'
import { generateTableOfContents } from '@/lib/utils/generateTableOfContents'
import { generateTOCFromPortableText } from '@/lib/utils/generateTOCFromPortableText'
import MarkdownContent from '@/components/blog/MarkdownContent'
import PreviewProvider from '@/components/PreviewProvider'
import { getClient } from '@/lib/sanity/client'
import { blogBySlugQueryWithAuthor, blogsQuery } from '@/lib/sanity/queries'
import { getArticleSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemaBuilders'
import { urlForImage } from '@/sanity/lib/image'

type Props = {
  params: Promise<{ slug: string }>
}

// Always render this page on-demand so Sanity updates show immediately
export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
// Disable static generation - pages are rendered on-demand
export const dynamicParams = true
// Prevent all caching including edge/CDN
export const runtime = 'nodejs'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  
  // Try to fetch from Sanity first - useCdn: false ensures fresh data
  let post = null
  let imageUrl = null
  
  const client = getClient(false)
  if (client) {
    try {
      // Fetch with fresh data - useCdn: false in client config ensures no CDN cache
      const sanityPost = await client.fetch(blogBySlugQueryWithAuthor, { slug })
      if (sanityPost) {
        post = sanityPost
        if (sanityPost.image) {
          imageUrl = urlForImage(sanityPost.image).width(1200).height(630).url()
        }
      }
    } catch (error) {
      console.error('Error fetching blog for metadata:', error)
    }
  }
  
  // Fallback to static data
  if (!post) {
    const staticPost = getBlogPostBySlug(slug)
    if (!staticPost) return { title: 'Post Not Found' }
    
    return {
      title: staticPost.seoTitle || staticPost.title,
      description: staticPost.seoDescription || staticPost.excerpt,
      keywords: staticPost.tags || [],
      authors: [{ name: 'Dr. Kapil Agrawal', url: 'https://www.habiliteclinics.com/dr-kapil-agrawal' }],
      openGraph: {
        title: staticPost.title,
        description: staticPost.excerpt,
        url: `https://www.habiliteclinics.com/post/${slug}`,
        images: [
          {
            url: staticPost.image.startsWith('http') ? staticPost.image : `https://www.habiliteclinics.com${staticPost.image}`,
            width: 1200,
            height: 630,
            alt: staticPost.title,
          },
        ],
        authors: ['Dr. Kapil Agrawal'],
        type: 'article',
        publishedTime: staticPost.publishedDate,
      },
      twitter: {
        card: 'summary_large_image',
        title: staticPost.title,
        description: staticPost.excerpt,
        images: [staticPost.image.startsWith('http') ? staticPost.image : `https://www.habiliteclinics.com${staticPost.image}`],
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
        canonical: `https://www.habiliteclinics.com/post/${slug}`,
      },
    }
  }

  return {
    title: post.seoTitle || post.title || 'Blog Post',
    description: post.seoDescription || post.excerpt || '',
    keywords: [],
    authors: [{ name: 'Dr. Kapil Agrawal', url: 'https://www.habiliteclinics.com/dr-kapil-agrawal' }],
    openGraph: {
      title: post.title || 'Blog Post',
      description: post.excerpt || '',
      url: `https://www.habiliteclinics.com/post/${slug}`,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.title || 'Blog post',
            },
          ]
        : [],
      authors: ['Dr. Kapil Agrawal'],
      type: 'article',
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title || 'Blog Post',
      description: post.excerpt || '',
      images: imageUrl ? [imageUrl] : [],
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
      canonical: `https://www.habiliteclinics.com/post/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
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

    let initialData = null
    try {
      initialData = await previewClient.fetch(blogBySlugQueryWithAuthor, { slug })
    } catch (error) {
      console.error('Error fetching preview blog:', error)
    }

    return (
      <PreviewProvider projectId={projectId} dataset={dataset} apiVersion={apiVersion} token={token}>
        <PreviewSuspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f56336] mx-auto mb-4"></div>
                <p className="text-gray-600">Loading draft...</p>
              </div>
            </div>
          }
        >
          <PreviewSingleBlog slug={slug} initialData={initialData} />
        </PreviewSuspense>
      </PreviewProvider>
    )
  }

  // Try to fetch from Sanity first - useCdn: false ensures fresh data
  // Try to fetch from Sanity first - ALWAYS prioritize Sanity data over static data
  let sanityPost = null
  const client = getClient(false)
  if (client) {
    try {
      // Fetch with fresh data - useCdn: false in client config ensures no CDN cache
      sanityPost = await client.fetch(blogBySlugQueryWithAuthor, { slug })
      
      // Log what we got from Sanity for debugging
      if (sanityPost) {
        const hasContent = !!(sanityPost.content || sanityPost.portableContent)
        const hasValidContent = (
          (typeof sanityPost.content === 'string' && sanityPost.content.trim().length > 0) ||
          (Array.isArray(sanityPost.portableContent) && sanityPost.portableContent.length > 0)
        )
        const contentType = sanityPost.portableContent ? 'portableContent (blocks)' : sanityPost.content ? 'content (markdown)' : 'none'
        console.log('✅ Sanity post found:', {
          title: sanityPost.title,
          slug: sanityPost.slug,
          requestedSlug: slug,
          slugMatch: sanityPost.slug === slug,
          hasContent,
          hasValidContent,
          contentType,
          contentLength: typeof sanityPost.content === 'string' ? sanityPost.content.length : Array.isArray(sanityPost.portableContent) ? sanityPost.portableContent.length : 0,
          _id: sanityPost._id
        })
        // Warn if slug doesn't match (this is the most common issue!)
        if (sanityPost.slug !== slug) {
          console.warn('⚠️ SLUG MISMATCH! Requested:', slug, 'but Sanity has:', sanityPost.slug)
          console.warn('💡 Update the slug in Sanity Studio or visit the correct URL!')
        }
        // Warn if no content or empty content
        if (!hasValidContent) {
          console.warn('⚠️ Sanity post has no valid content (empty or missing) - will fall back to static data/blog.ts')
        }
      } else {
        console.log('⚠️ No Sanity post found for slug:', slug, '- Will use static data/blog.ts')
        console.log('💡 Tip: Check if the slug in Sanity Studio matches the URL slug exactly!')
      }
    } catch (error) {
      console.error('❌ Error fetching blog from Sanity:', error)
      sanityPost = null
    }
  } else {
    console.warn('⚠️ Sanity client not available')
  }

  // Check if Sanity post exists AND has valid content
  // If Sanity post exists but has no content, fall back to static data
  let shouldUseSanity = false
  let sanityBlogContent: string | any[] | null = null
  
  if (sanityPost && sanityPost._id) {
    // Prioritize portableContent over content (new field over legacy)
    const portableContent = sanityPost.portableContent
    let legacyContent = sanityPost.content
    
    // Handle edge case: if legacyContent is an array (incorrectly stored), try to convert it
    // This can happen if data was migrated incorrectly
    if (Array.isArray(legacyContent)) {
      console.warn('⚠️ Legacy content field contains array instead of string - this is invalid data')
      console.warn('💡 The content field should be a text string, not an array. Falling back to static data.')
      legacyContent = null // Treat as invalid
    }
    
    // STRICT check: must have actual content, not just empty strings/arrays
    const hasPortableContent = Array.isArray(portableContent) && portableContent.length > 0
    const hasLegacyContent = typeof legacyContent === 'string' && legacyContent.trim().length > 0
    
    // Only use Sanity if we have valid content
    if (hasPortableContent) {
      sanityBlogContent = portableContent
      shouldUseSanity = true
      console.log('✅ Using Sanity post with portableContent (blocks)')
    } else if (hasLegacyContent) {
      sanityBlogContent = legacyContent
      shouldUseSanity = true
      console.log('✅ Using Sanity post with legacy content (markdown)')
    } else {
      // NO valid content - force fallback
      shouldUseSanity = false
      sanityBlogContent = null
      console.log('⚠️ Sanity post exists but has NO valid content - FORCING fallback to static data')
      console.log('📋 Content check:', {
        portableContentExists: !!portableContent,
        portableContentType: Array.isArray(portableContent) ? 'array' : typeof portableContent,
        portableContentLength: Array.isArray(portableContent) ? portableContent.length : (typeof portableContent === 'string' ? portableContent.length : 0),
        legacyContentExists: !!legacyContent,
        legacyContentType: typeof legacyContent,
        legacyContentLength: typeof legacyContent === 'string' ? legacyContent.length : 0,
        legacyContentIsArray: Array.isArray(legacyContent),
        shouldUseSanity: false // Explicitly set
      })
    }
  } else {
    console.log('📄 No Sanity post found - using static data/blog.ts')
    shouldUseSanity = false
  }
  
  // CRITICAL: Double-check before using Sanity
  if (shouldUseSanity && !sanityBlogContent) {
    console.error('🚨 ERROR: shouldUseSanity is true but sanityBlogContent is null/empty - forcing fallback')
    shouldUseSanity = false
  }
  
  // If Sanity post has valid content, use it
  // CRITICAL CHECK: Only proceed if we have confirmed valid content
  if (shouldUseSanity && sanityBlogContent && (
    (typeof sanityBlogContent === 'string' && sanityBlogContent.trim().length > 0) ||
    (Array.isArray(sanityBlogContent) && sanityBlogContent.length > 0)
  )) {
    // Generate TOC from content - check if it's markdown string or PortableText blocks
    const isMarkdownString = typeof sanityBlogContent === 'string'
    const isPortableText = Array.isArray(sanityBlogContent) && sanityBlogContent.length > 0 && sanityBlogContent[0]?._type
    
    const tableOfContents = sanityBlogContent 
      ? (isMarkdownString 
          ? generateTableOfContents(sanityBlogContent)
          : isPortableText
            ? generateTOCFromPortableText(sanityBlogContent)
            : [])
      : []

    // Fetch related posts from Sanity
    let relatedPosts: any[] = []
    if (client && sanityPost && (sanityPost.categoryId || sanityPost.category?._id)) {
      try {
        const { relatedBlogsQuery } = await import('@/lib/sanity/queries')
        relatedPosts = await client.fetch(relatedBlogsQuery, {
          currentSlug: slug,
          categoryId: sanityPost.categoryId || sanityPost.category?._id,
          limit: 3
        })
      } catch (error) {
        console.error('Error fetching related posts:', error)
      }
    }

    // Also try to get related posts from static data as fallback
    if (relatedPosts.length === 0) {
      const staticPost = getBlogPostBySlug(slug)
      if (staticPost) {
        const staticRelated = getRelatedPosts(slug, 3)
        relatedPosts = staticRelated.map(post => ({
          _id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          image: post.image,
          category: { title: post.category },
          publishedAt: post.publishedDate,
          readTime: post.readTime,
        }))
      }
    }

    const articleSchema = getArticleSchema({
      title: sanityPost!.title || '',
      description: sanityPost!.excerpt || '',
      url: `/post/${slug}`,
      image: sanityPost!.image ? urlForImage(sanityPost.image).width(1200).height(630).url() || '' : '',
      datePublished: sanityPost!.publishedAt || '',
      dateModified: sanityPost!.publishedAt || '',
      keywords: sanityPost!.tags || [],
    })
    const breadcrumbSchema = getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/post' },
      { name: sanityPost!.title || 'Blog Post', url: `/post/${slug}` },
    ])
    
    // FAQ Schema if available in Sanity post
    const faqSchema = sanityPost!.faqs && sanityPost.faqs.length > 0
      ? getFAQSchema({
          title: `${sanityPost!.title || 'Blog Post'} - FAQs`,
          description: `Frequently asked questions about ${sanityPost!.title || 'this topic'}`,
          faqs: sanityPost!.faqs.map((faq: any) => ({ 
            question: faq.question || '', 
            answer: faq.answer || '' 
          })),
        })
      : null

    return (
      <>
        <StructuredData data={articleSchema} />
        <StructuredData data={breadcrumbSchema} />
        {faqSchema && <StructuredData data={faqSchema} />}
        <SanitySingleBlog 
          post={{
            ...sanityPost!,
            // Use the validated content we checked above
            content: sanityBlogContent
          }} 
          tableOfContents={tableOfContents} 
          relatedPosts={relatedPosts} 
        />
      </>
    )
  }

  // Fallback to static data - THIS SHOULD ALWAYS EXECUTE IF SANITY POST HAS NO CONTENT
  console.log('📄 ===== FALLBACK TO STATIC DATA =====')
  console.log('📄 Looking for static blog post with slug:', slug)
  
  const post = getBlogPostBySlug(slug)
  if (!post) {
    console.error('❌ Static blog post not found for slug:', slug)
    console.error('💡 Available slugs (first 10):', blogPosts.slice(0, 10).map(p => p.slug))
    notFound()
  }
  
  console.log('✅ Static blog post found:', {
    title: post.title,
    slug: post.slug,
    hasContent: !!post.content,
    contentLength: post.content?.length || 0,
    contentPreview: post.content?.substring(0, 100) || 'N/A'
  })

  const relatedPosts = getRelatedPosts(slug)
  const recentPosts = getRecentPosts(slug, 5)
  
  // Generate TOC from content if not provided or if it seems incorrect
  const tableOfContents = post.tableOfContents && post.tableOfContents.length > 0
    ? post.tableOfContents
    : generateTableOfContents(post.content)
  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/post/${post.slug}`,
    image: post.image,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    keywords: post.tags,
  })
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/post' },
    { name: post.title, url: `/post/${post.slug}` },
  ])
  
  // FAQ Schema if available
  const faqSchema = post.faqSchema && post.faqSchema.length > 0
    ? getFAQSchema({
        title: `${post.title} - FAQs`,
        description: `Frequently asked questions about ${post.title}`,
        faqs: post.faqSchema.map(faq => ({ question: faq.question, answer: faq.answer })),
      })
    : null

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      {faqSchema && <StructuredData data={faqSchema} />}
      <div className="pt-20 pb-16">
        {/* Hero Image - No text overlay, full image display without cropping */}
        {post.image && (
        <div className="container-custom mb-8">
          <div className="relative w-full rounded-xl bg-gray-50 overflow-visible">
            <div className="relative w-full max-w-5xl mx-auto">
              <Image
                src={post.image.startsWith('/') ? post.image : `/images/${post.image}`}
                alt={`${post.title} - Expert medical article by Dr. Kapil Agrawal`}
                width={1200}
                height={675}
                className="w-full h-auto object-contain"
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                quality={85}
                loading="eager"
                decoding="async"
                style={{ objectFit: 'contain', display: 'block' }}
              />
            </div>
          </div>
        </div>
        )}

        {/* Title and Metadata Below Image */}
        <div className="container-custom mb-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {post.category && (
              <div className="text-[#0891b2] mb-3 text-sm md:text-base font-semibold uppercase tracking-wide">
                {post.category}
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center">
                <Clock className="mr-2" size={16} />
                <span>{post.readTime} min read</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="text-gray-700 font-semibold">
                <span className="text-gray-900">Dr. Kapil Agrawal</span> - Senior Consultant at Apollo Group of Hospitals
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Centered Article Container */}
            <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
              <Link
                href="/post"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
              >
                <ArrowLeft className="mr-2" size={20} />
                Back to Blog
              </Link>

              {/* Table of Contents - Mobile Only */}
              {tableOfContents && tableOfContents.length > 0 && (
                <div className="mb-6 lg:hidden">
                  <TableOfContents items={tableOfContents} />
                </div>
              )}

              {/* Content */}
              <div className="prose prose-lg max-w-3xl mx-auto prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-headings:font-bold prose-strong:text-gray-900">
                {post.content && post.content.trim() ? (
                  <MarkdownContent content={post.content} />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 italic">Content is being loaded...</p>
                  </div>
                )}
              </div>

              {/* Author */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{post.author} - Senior Consultant at Apollo Group of Hospitals</div>
                    <div className="text-sm text-gray-600">Published on {new Date(post.publishedDate).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* About Doctor Section */}
              <AboutDoctorSection />

              {/* Blog Post Footer - Why Choose Us & Book Appointment */}
              <BlogPostFooter category={post.category} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Table of Contents - Desktop Only */}
            {tableOfContents && tableOfContents.length > 0 && (
              <div className="hidden lg:block">
                <TableOfContents items={tableOfContents} />
              </div>
            )}

            {/* Recent Posts */}
            <RecentPosts posts={recentPosts} />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-xl p-6 border border-[#0891b2]/20 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                  <span className="text-[#0891b2]">📚</span>
                  Related Posts
                </h3>
                <ul className="space-y-3">
                  {relatedPosts.map((relatedPost) => (
                    <li key={relatedPost.id}>
                      <Link
                        href={`/post/${relatedPost.slug}`}
                        className="block text-gray-700 hover:text-[#0891b2] hover:underline font-medium transition-colors py-2 px-3 rounded-lg hover:bg-white/50"
                      >
                        {relatedPost.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
          </div>
        </div>

        {/* FAQ Schema */}
        {post.faqSchema && post.faqSchema.length > 0 && (
          <FAQSchema faqs={post.faqSchema} />
        )}
      </div>
    </>
  )
}

