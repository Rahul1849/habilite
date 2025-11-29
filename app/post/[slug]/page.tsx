import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getBlogPostBySlug, getRelatedPosts, getRecentPosts, blogPosts } from '@/data/blog'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import TableOfContents from '@/components/blog/TableOfContents'
import RecentPosts from '@/components/blog/RecentPosts'
import DoctorInfoCard from '@/components/blog/DoctorInfoCard'
import FAQSchema from '@/components/blog/FAQSchema'
import StructuredData from '@/components/seo/StructuredData'
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

type Props = {
  params: Promise<{ slug: string }>
}

export const revalidate = 3600 // Revalidate every hour (ISR)

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    keywords: post.tags || [],
    authors: [{ name: 'Dr. Kapil Agrawal', url: 'https://www.habiliteclinics.com/dr-kapil-agrawal' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.habiliteclinics.com/post/${slug}`,
      images: [
        {
          url: post.image.startsWith('http') ? post.image : `https://www.habiliteclinics.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      authors: ['Dr. Kapil Agrawal'],
      type: 'article',
      publishedTime: post.publishedDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image.startsWith('http') ? post.image : `https://www.habiliteclinics.com${post.image}`],
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
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(slug)
  const recentPosts = getRecentPosts(slug, 5)
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

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16">
      {/* Hero Image */}
      <div className="relative h-96">
        <Image
          src={post.image}
          alt={`${post.title} - Expert medical article by Dr. Kapil Agrawal`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="container-custom relative z-10 h-full flex items-end pb-8">
          <div className="text-white">
            <div className="text-primary-300 mb-2">{post.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{post.title}</h1>
            <p className="text-lg md:text-xl font-semibold text-white/90 mb-4">
              By <span className="text-white font-bold">Dr. Kapil Agrawal</span> - Best Laparoscopic Surgeon in Delhi, India
            </p>
            <div className="flex items-center text-gray-300">
              <Calendar className="mr-2" size={16} />
              <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="mx-2">•</span>
              <Clock className="mr-2" size={16} />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <Link
              href="/post"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Link>

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-headings:font-bold prose-strong:text-gray-900">
              {(() => {
                const lines = post.content.split('\n')
                let skipNext = false
                
                return lines.map((line, index) => {
                  if (skipNext) {
                    skipNext = false
                    return null
                  }
                  
                  if (!line.trim()) return <br key={index} />
                  
                  // Check for appointment booking section
                  const lowerLine = line.toLowerCase()
                  const hasAppointmentText = lowerLine.includes('book an appointment') || lowerLine.includes('to book an appointment')
                  
                  if (hasAppointmentText) {
                    // Check if current or next line has phone numbers
                    const nextLine = lines[index + 1] || ''
                    const hasPhoneNumbers = line.includes('+91') || line.includes('99100') || line.includes('99994') ||
                                           nextLine.includes('+91') || nextLine.includes('99100') || nextLine.includes('99994')
                    
                    if (hasPhoneNumbers) {
                      // If phone numbers are in next line, skip it
                      if (nextLine.includes('+91') || nextLine.includes('99100') || nextLine.includes('99994')) {
                        skipNext = true
                      }
                      return <DoctorInfoCard key={`cta-${index}`} authorImage={post.authorImage} category={post.category} />
                    }
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
                
                // Headers
                if (line.startsWith('###')) {
                  const title = line.replace(/^###+\s/, '').trim()
                  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
                  return (
                    <h3 key={index} id={id} className="text-xl font-bold mt-6 mb-3 text-gray-900 scroll-mt-24">
                      {title}
                    </h3>
                  )
                } else if (line.startsWith('##')) {
                  const title = line.replace(/^##+\s/, '').trim()
                  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
                  return (
                    <h2 key={index} id={id} className="text-2xl font-bold mt-8 mb-4 text-gray-900 scroll-mt-24">
                      {title}
                    </h2>
                  )
                } else if (line.startsWith('#')) {
                  const title = line.replace(/^#+\s/, '').trim()
                  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
                  return (
                    <h1 key={index} id={id} className="text-3xl font-bold mt-8 mb-4 text-gray-900 scroll-mt-24">
                      {title}
                    </h1>
                  )
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
                    <ul key={index} className="list-disc list-inside mb-4 ml-4 space-y-2">
                      <li className="text-gray-700 leading-relaxed">
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
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {parseMarkdown(line)}
                    </p>
                  )
                }
                })
              })()}
            </div>

            {/* Author */}
            <div className="mt-12 pt-8 border-t flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-600">Published on {new Date(post.publishedDate).toLocaleDateString()}</div>
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
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <TableOfContents items={post.tableOfContents} />
            )}

            {/* Recent Posts */}
            <RecentPosts posts={recentPosts} />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Related Posts</h3>
                <ul className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <li key={relatedPost.id}>
                      <Link
                        href={`/post/${relatedPost.slug}`}
                        className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
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

