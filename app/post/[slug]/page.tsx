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
        console.log('✅ Sanity post found:', {
          title: sanityPost.title,
          slug: sanityPost.slug,
          requestedSlug: slug,
          slugMatch: sanityPost.slug === slug,
          hasBody: !!sanityPost.body,
          bodyLength: sanityPost.body?.length || 0,
          _id: sanityPost._id
        })
        // Warn if slug doesn't match (this is the most common issue!)
        if (sanityPost.slug !== slug) {
          console.warn('⚠️ SLUG MISMATCH! Requested:', slug, 'but Sanity has:', sanityPost.slug)
          console.warn('💡 Update the slug in Sanity Studio or visit the correct URL!')
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

  // If found in Sanity, ALWAYS use it (even if body is missing - title/image changes should show)
  // This ensures changes in Sanity Studio always appear, even if body is empty
  if (sanityPost && sanityPost._id) {
    // Generate TOC from PortableText content
    const tableOfContents = sanityPost.content 
      ? generateTOCFromPortableText(sanityPost.content)
      : []

    // Fetch related posts from Sanity
    let relatedPosts: any[] = []
    if (client && (sanityPost.categoryId || sanityPost.category?._id)) {
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
      title: sanityPost.title || '',
      description: sanityPost.excerpt || '',
      url: `/post/${slug}`,
      image: sanityPost.image ? urlForImage(sanityPost.image).width(1200).height(630).url() || '' : '',
      datePublished: sanityPost.publishedAt || '',
      dateModified: sanityPost.publishedAt || '',
      keywords: sanityPost.tags || [],
    })
    const breadcrumbSchema = getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/post' },
      { name: sanityPost.title || 'Blog Post', url: `/post/${slug}` },
    ])
    
    // FAQ Schema if available in Sanity post
    const faqSchema = sanityPost.faqs && sanityPost.faqs.length > 0
      ? getFAQSchema({
          title: `${sanityPost.title || 'Blog Post'} - FAQs`,
          description: `Frequently asked questions about ${sanityPost.title || 'this topic'}`,
          faqs: sanityPost.faqs.map((faq: any) => ({ 
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
        <SanitySingleBlog post={sanityPost} tableOfContents={tableOfContents} relatedPosts={relatedPosts} />
      </>
    )
  }

  // Fallback to static data
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

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
              {post.content && post.content.trim() ? (() => {
                const lines = post.content.split('\n')
                let skipNext = false
                
                return lines.map((line, index) => {
                  if (skipNext) {
                    skipNext = false
                    return null
                  }
                  
                  // Handle empty lines with proper spacing
                  if (!line.trim()) {
                    return <div key={index} className="h-4" />
                  }
                  
                  // Check for "Why Choose Us" section - replace with footer component
                  const lowerLine = line.toLowerCase().trim()
                  if (lowerLine.includes('## why choose us') || lowerLine.includes('## why choose')) {
                    // Skip the list items that follow
                    let whyChooseEndIndex = index + 1
                    while (whyChooseEndIndex < lines.length && 
                           (lines[whyChooseEndIndex].trim().startsWith('- ') || 
                            lines[whyChooseEndIndex].trim() === '')) {
                      whyChooseEndIndex++
                    }
                    // Skip all lines until next section
                    skipNext = false
                    return null // Will be replaced by footer at end
                  }
                  
                  // Check for appointment booking section - replace with footer component
                  const hasAppointmentText = lowerLine.includes('## book an appointment') || lowerLine.includes('## book appointment')
                  
                  if (hasAppointmentText) {
                    // Skip the phone number line if it follows
                    const nextLine = lines[index + 1] || ''
                    if (nextLine.includes('+91') || nextLine.includes('99100') || nextLine.includes('99994') || 
                        nextLine.toLowerCase().includes('contact us at')) {
                      skipNext = true
                    }
                    return null // Will be replaced by footer at end
                  }
                  
                  // Skip if this line only has phone numbers and previous was appointment
                  if (index > 0) {
                    const prevLine = lines[index - 1] || ''
                    const prevLower = prevLine.toLowerCase()
                    if ((prevLower.includes('book an appointment') || prevLower.includes('to book an appointment')) && 
                        (line.includes('+91') || line.includes('99100') || line.includes('99994')) &&
                        !line.toLowerCase().includes('book')) {
                      return null
                    }
                  }
                
                // Headers - check in order from most specific to least
                const trimmedLine = line.trim()
                if (trimmedLine.startsWith('###')) {
                  const title = trimmedLine.replace(/^###+\s*/, '').trim()
                  if (title) {
                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
                    return (
                      <h3 key={index} id={id} className="text-xl md:text-2xl font-bold mt-8 mb-4 text-gray-900 scroll-mt-24 leading-tight">
                        {title}
                      </h3>
                    )
                  }
                } else if (trimmedLine.startsWith('##') && !trimmedLine.startsWith('###')) {
                  const title = trimmedLine.replace(/^##+\s*/, '').trim()
                  if (title) {
                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
                    return (
                      <h2 key={index} id={id} className="text-2xl md:text-3xl font-bold mt-10 mb-5 text-gray-900 scroll-mt-24 leading-tight">
                        {title}
                      </h2>
                    )
                  }
                } else if (trimmedLine.startsWith('#') && !trimmedLine.startsWith('##') && !trimmedLine.startsWith('###')) {
                  // Single # should be H2 (not H1) since we already have H1 in hero section
                  const title = trimmedLine.replace(/^#+\s*/, '').trim()
                  if (title) {
                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
                    return (
                      <h2 key={index} id={id} className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-gray-900 scroll-mt-24 leading-tight">
                        {title}
                      </h2>
                    )
                  }
                }
                // Images - markdown format ![alt](url)
                else if (line.trim().match(/^!\[.*?\]\(.*?\)$/)) {
                  const imageMatch = line.trim().match(/^!\[(.*?)\]\((.*?)\)$/)
                  if (imageMatch) {
                    const alt = imageMatch[1] || ''
                    const src = imageMatch[2] || ''
                    const imageSrc = src.startsWith('/') ? src : `/images/${src}`
                    return (
                      <div key={index} className="my-8 md:my-12 w-full flex justify-center">
                        <div className="relative w-full max-w-4xl mx-auto">
                          <div className="relative w-full rounded-xl overflow-hidden bg-gray-50">
                            <Image
                              src={imageSrc}
                              alt={alt}
                              width={1200}
                              height={800}
                              className="w-full h-auto object-contain"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                              quality={85}
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    )
                  }
                }
                // Lists
                else if (line.trim().startsWith('- ')) {
                  const content = line.replace(/^-\s/, '').trim()
                  // Parse markdown in list items
                  const parseMarkdown = (text: string) => {
                    let result: React.ReactNode[] = []
                    let currentIndex = 0
                    // Handle bold **text**
                    const boldRegex = /\*\*(.*?)\*\*/g
                    let match
                    let lastIndex = 0
                    
                    while ((match = boldRegex.exec(text)) !== null) {
                      if (match.index > lastIndex) {
                        result.push(text.substring(lastIndex, match.index))
                      }
                      result.push(<strong key={`bold-${currentIndex++}`} className="font-semibold text-gray-900">{match[1]}</strong>)
                      lastIndex = match.index + match[0].length
                    }
                    if (lastIndex < text.length) {
                      result.push(text.substring(lastIndex))
                    }
                    return result.length > 0 ? result : text
                  }
                  
                  // Handle links [text](url)
                  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
                  const linkParts: React.ReactNode[] = []
                  let linkMatch
                  let linkLastIndex = 0
                  const textToParse = typeof parseMarkdown(content) === 'string' ? content : content
                  let linkIndex = 0
                  
                  while ((linkMatch = linkRegex.exec(textToParse)) !== null) {
                    if (linkMatch.index > linkLastIndex) {
                      const beforeLink = textToParse.substring(linkLastIndex, linkMatch.index)
                      linkParts.push(parseMarkdown(beforeLink))
                    }
                    linkParts.push(
                      <Link key={`list-link-${index}-${linkIndex++}`} href={linkMatch[2]} className="text-primary-600 hover:text-primary-700 underline">
                        {linkMatch[1]}
                      </Link>
                    )
                    linkLastIndex = linkMatch.index + linkMatch[0].length
                  }
                  if (linkLastIndex < textToParse.length) {
                    const afterLink = textToParse.substring(linkLastIndex)
                    linkParts.push(parseMarkdown(afterLink))
                  }
                  
                  return (
                    <ul key={index} className="list-disc list-inside mb-6 ml-4 space-y-3">
                      <li className="text-gray-700 leading-relaxed text-base md:text-lg">
                        {linkParts.length > 0 ? linkParts : parseMarkdown(content)}
                      </li>
                    </ul>
                  )
                }
                // Regular paragraphs
                else {
                  // Parse markdown in paragraphs
                  const parseMarkdown = (text: string) => {
                    const parts: React.ReactNode[] = []
                    let currentIndex = 0
                    
                    // Handle links [text](url)
                    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
                    let linkMatch
                    let lastIndex = 0
                    
                    while ((linkMatch = linkRegex.exec(text)) !== null) {
                      if (linkMatch.index > lastIndex) {
                        const beforeLink = text.substring(lastIndex, linkMatch.index)
                        // Handle bold in text before link
                        const boldRegex = /\*\*(.*?)\*\*/g
                        let boldMatch
                        let boldLastIndex = 0
                        const boldParts: React.ReactNode[] = []
                        
                        while ((boldMatch = boldRegex.exec(beforeLink)) !== null) {
                          if (boldMatch.index > boldLastIndex) {
                            boldParts.push(beforeLink.substring(boldLastIndex, boldMatch.index))
                          }
                          boldParts.push(<strong key={`bold-${currentIndex++}`} className="font-semibold text-gray-900">{boldMatch[1]}</strong>)
                          boldLastIndex = boldMatch.index + boldMatch[0].length
                        }
                        if (boldLastIndex < beforeLink.length) {
                          boldParts.push(beforeLink.substring(boldLastIndex))
                        }
                        parts.push(...(boldParts.length > 0 ? boldParts : [beforeLink]))
                      }
                      parts.push(
                        <Link key={`link-${currentIndex++}`} href={linkMatch[2]} className="text-primary-600 hover:text-primary-700 underline">
                          {linkMatch[1]}
                        </Link>
                      )
                      lastIndex = linkMatch.index + linkMatch[0].length
                    }
                    if (lastIndex < text.length) {
                      const afterLink = text.substring(lastIndex)
                      // Handle bold in remaining text
                      const boldRegex = /\*\*(.*?)\*\*/g
                      let boldMatch
                      let boldLastIndex = 0
                      const boldParts: React.ReactNode[] = []
                      
                      while ((boldMatch = boldRegex.exec(afterLink)) !== null) {
                        if (boldMatch.index > boldLastIndex) {
                          boldParts.push(afterLink.substring(boldLastIndex, boldMatch.index))
                        }
                        boldParts.push(<strong key={`bold-${currentIndex++}`} className="font-semibold text-gray-900">{boldMatch[1]}</strong>)
                        boldLastIndex = boldMatch.index + boldMatch[0].length
                      }
                      if (boldLastIndex < afterLink.length) {
                        boldParts.push(afterLink.substring(boldLastIndex))
                      }
                      parts.push(...(boldParts.length > 0 ? boldParts : [afterLink]))
                    }
                    
                    return parts.length > 0 ? parts : text
                  }
                  
                  return (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed text-base md:text-lg">
                      {parseMarkdown(line)}
                    </p>
                  )
                }
                })
              })() : (
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

