import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPostBySlug, getRelatedPosts, blogPosts } from '@/data/blog'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import TableOfContents from '@/components/blog/TableOfContents'
import FAQSchema from '@/components/blog/FAQSchema'

type Props = {
  params: Promise<{ slug: string }>
}

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
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(slug)

  return (
    <div className="pt-20 pb-16">
      {/* Hero Image */}
      <div className="relative h-96">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="container-custom relative z-10 h-full flex items-end pb-8">
          <div className="text-white">
            <div className="text-primary-300 mb-2">{post.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
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
              href="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Link>

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-headings:font-bold prose-strong:text-gray-900">
              {post.content.split('\n').map((paragraph, index) => {
                if (!paragraph.trim()) return null
                
                if (paragraph.startsWith('##')) {
                  const title = paragraph.replace(/^##+\s/, '').trim()
                  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
                  return (
                    <h2 key={index} id={id} className="text-2xl font-bold mt-8 mb-4 text-gray-900 scroll-mt-24">
                      {title}
                    </h2>
                  )
                } else if (paragraph.startsWith('#')) {
                  const title = paragraph.replace(/^#+\s/, '').trim()
                  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
                  return (
                    <h1 key={index} id={id} className="text-3xl font-bold mt-8 mb-4 text-gray-900 scroll-mt-24">
                      {title}
                    </h1>
                  )
                } else if (paragraph.startsWith('###')) {
                  const title = paragraph.replace(/^###+\s/, '').trim()
                  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
                  return (
                    <h3 key={index} id={id} className="text-xl font-bold mt-6 mb-3 text-gray-900 scroll-mt-24">
                      {title}
                    </h3>
                  )
                } else {
                  return (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                }
              })}
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

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Related Posts</h3>
                <ul className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <li key={relatedPost.id}>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
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
  )
}
