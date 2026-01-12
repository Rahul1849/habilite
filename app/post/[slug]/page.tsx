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
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BlogShareButtons from '@/components/blog/BlogShareButtons'
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
      // Add timestamp to force fresh fetch (cache busting)
      const sanityPost = await client.fetch(blogBySlugQueryWithAuthor, { 
        slug,
        _timestamp: Date.now() // Cache busting
      })
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
      // Force fresh fetch by adding timestamp to params (cache busting)
      sanityPost = await client.fetch(blogBySlugQueryWithAuthor, { 
        slug,
        _timestamp: Date.now() // Cache busting parameter
      })
      
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
    // Check both portableContent and content fields
    // content field is an array (Portable Text blocks) in the current schema
    const portableContent = sanityPost.portableContent
    const contentField = sanityPost.content
    
    // Check if content is Portable Text array (current schema format)
    const hasPortableTextContent = Array.isArray(contentField) && contentField.length > 0 && contentField[0]?._type
    
    // Check if content is markdown string (legacy format)
    const hasMarkdownContent = typeof contentField === 'string' && contentField.trim().length > 0
    
    // Check if portableContent field exists (alternative field name)
    const hasPortableContentField = Array.isArray(portableContent) && portableContent.length > 0
    
    // Use content in priority: portableContent field > content array (Portable Text) > content string (markdown)
    if (hasPortableContentField) {
      sanityBlogContent = portableContent
      shouldUseSanity = true
      console.log('✅ Using Sanity post with portableContent field (blocks)')
    } else if (hasPortableTextContent) {
      // content field is Portable Text array (current schema)
      sanityBlogContent = contentField
      shouldUseSanity = true
      console.log('✅ Using Sanity post with content field (Portable Text blocks)')
    } else if (hasMarkdownContent) {
      // content field is markdown string (legacy format)
      sanityBlogContent = contentField
      shouldUseSanity = true
      console.log('✅ Using Sanity post with content field (markdown string)')
    } else {
      // NO valid content - force fallback
      shouldUseSanity = false
      sanityBlogContent = null
      console.log('⚠️ Sanity post exists but has NO valid content - FORCING fallback to static data')
      console.log('📋 Content check:', {
        portableContentExists: !!portableContent,
        portableContentType: Array.isArray(portableContent) ? 'array' : typeof portableContent,
        portableContentLength: Array.isArray(portableContent) ? portableContent.length : (typeof portableContent === 'string' ? portableContent.length : 0),
        contentFieldExists: !!contentField,
        contentFieldType: Array.isArray(contentField) ? 'array' : typeof contentField,
        contentFieldLength: Array.isArray(contentField) ? contentField.length : (typeof contentField === 'string' ? contentField.length : 0),
        hasPortableTextContent,
        hasMarkdownContent,
        shouldUseSanity: false
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
          ? generateTableOfContents(sanityBlogContent as string) // Type assertion: we know it's a string here
          : isPortableText
            ? generateTOCFromPortableText(sanityBlogContent as any[]) // Type assertion: we know it's an array here
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

  // Fallback to static data for CONTENT ONLY, but use Sanity data for metadata (title, etc.)
  console.log('📄 ===== FALLBACK TO STATIC DATA FOR CONTENT =====')
  console.log('📄 Looking for static blog post with slug:', slug)
  
  const staticPost = getBlogPostBySlug(slug)
  if (!staticPost) {
    console.error('❌ Static blog post not found for slug:', slug)
    console.error('💡 Available slugs (first 10):', blogPosts.slice(0, 10).map(p => p.slug))
    notFound()
  }
  
  // Use Sanity post data if available (for title, metadata, etc.), but static data for content
  // For image: Keep Sanity image object if available, otherwise use static image string
  const post = sanityPost && sanityPost._id ? {
    ...staticPost,
    // Override with Sanity data for title and metadata
    title: sanityPost.title || staticPost.title,
    excerpt: sanityPost.excerpt || staticPost.excerpt,
    seoTitle: sanityPost.seoTitle || staticPost.seoTitle,
    seoDescription: sanityPost.seoDescription || staticPost.seoDescription,
    author: sanityPost.author || staticPost.author,
    publishedDate: sanityPost.publishedAt || staticPost.publishedDate,
    readTime: sanityPost.readTime || staticPost.readTime,
    // Keep Sanity image object (not URL string) - component will handle it
    image: sanityPost.image || staticPost.image,
    category: sanityPost.category?.title || staticPost.category,
    // Keep static content since Sanity has no content
    content: staticPost.content,
  } : staticPost
  
  console.log('✅ Using blog post data:', {
    title: post.title,
    slug: post.slug,
    source: sanityPost && sanityPost._id ? 'Sanity (title) + Static (content)' : 'Static (all)',
    hasContent: !!post.content,
    contentLength: post.content?.length || 0,
  })

  const relatedPosts = getRelatedPosts(slug)
  const recentPosts = getRecentPosts(slug, 5)
  
  // Generate TOC from content if not provided or if it seems incorrect
  const tableOfContents = post.tableOfContents && post.tableOfContents.length > 0
    ? post.tableOfContents
    : generateTableOfContents(post.content)
  
  // Process image URL - handle both Sanity image objects and string paths
  let imageSrc: string | null = null
  if (post.image) {
    try {
      if (typeof post.image === 'string') {
        // Static image path
        imageSrc = post.image.startsWith('/') ? post.image : `/images/${post.image}`
      } else if (post.image && typeof post.image === 'object' && 'asset' in post.image) {
        // Sanity image object - convert to URL
        const imageUrl = urlForImage(post.image).width(1600).height(900).url()
        if (imageUrl) {
          imageSrc = imageUrl
        }
      }
    } catch (error) {
      console.error('Error processing image:', error)
      imageSrc = null
    }
  }
  
  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/post/${post.slug}`,
    image: imageSrc || post.image,
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
        {imageSrc && (
          <div className="container-custom mb-8">
            <div className="relative w-full rounded-xl bg-gray-50 overflow-visible">
              <div className="relative w-full max-w-5xl mx-auto">
                <Image
                  src={imageSrc}
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

              {/* Key Takeaways Section */}
              {post.excerpt && <KeyTakeaways excerpt={post.excerpt} />}

              {/* Content Section with improved typography */}
              <section>
                <div className="prose prose-lg prose-slate max-w-3xl mx-auto
                  prose-headings:text-gray-900 prose-headings:font-bold prose-headings:leading-tight
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg
                  prose-a:text-[#0891b2] prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-8 prose-h3:mb-4
                  prose-h4:text-xl md:prose-h4:text-2xl prose-h4:mt-6 prose-h4:mb-3
                  prose-ul:my-6 prose-ul:space-y-2
                  prose-ol:my-6 prose-ol:space-y-2
                  prose-li:text-gray-700 prose-li:leading-relaxed
                  prose-blockquote:border-l-4 prose-blockquote:border-[#0891b2] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8
                  prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8">
                  {post.content && post.content.trim() ? (
                    <MarkdownContent content={post.content} />
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 italic">Content is being loaded...</p>
                    </div>
                  )}
                </div>
              </section>

              {/* Divider */}
              <div className="my-12 border-t border-gray-200"></div>

              {/* Author Section */}
              <section className="mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0891b2] to-[#06b6d4] flex items-center justify-center text-white text-xl font-bold">
                      {post.author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                      {post.author}
                    </h3>
                    <p className="text-gray-600 mb-2">Senior Consultant at Apollo Group of Hospitals</p>
                    <div className="text-sm text-gray-500">
                      Published on {new Date(post.publishedDate).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </div>
              </section>

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

            {/* Share Buttons */}
            <BlogShareButtons
              title={post.title}
              url={`/post/${post.slug}`}
              excerpt={post.excerpt}
              variant="sidebar"
            />

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

      {/* Mobile Share Bar */}
      <BlogShareButtons
        title={post.title}
        url={`/post/${post.slug}`}
        excerpt={post.excerpt}
        variant="mobile"
      />
    </>
  )
}

