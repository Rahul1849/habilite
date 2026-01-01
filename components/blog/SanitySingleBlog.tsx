import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/lib/sanity/portableTextComponents'
import { urlForImage } from '@/sanity/lib/image'
import BlogPostFooter from '@/components/blog/BlogPostFooter'
import BlogShareButtons from '@/components/blog/BlogShareButtons'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import AboutDoctorSection from '@/components/blog/AboutDoctorSection'
import TableOfContents from '@/components/blog/TableOfContents'
import { TableOfContentsItem } from '@/lib/utils/generateTOCFromPortableText'

type SanityBlog = {
  _id: string
  title?: string
  slug?: string
  image?: any
  content?: any
  author?: string
  publishedAt?: string
  readTime?: number
  excerpt?: string
  category?: { title?: string }
}

type RelatedPost = {
  _id: string
  title?: string
  slug?: string
  excerpt?: string
  image?: any
  category?: { title?: string }
  publishedAt?: string
  readTime?: number
}

type SanitySingleBlogProps = {
  post: SanityBlog | null
  tableOfContents?: TableOfContentsItem[]
  relatedPosts?: RelatedPost[]
}

export default function SanitySingleBlog({ post, tableOfContents = [], relatedPosts = [] }: SanitySingleBlogProps) {
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-2">
          <p className="text-lg font-semibold text-gray-900">Blog post not found</p>
          <Link href="/post" className="text-[#f56336] hover:underline font-medium">
            Back to blogs
          </Link>
        </div>
      </div>
    )
  }

  const imageUrl = post.image ? urlForImage(post.image).width(1600).height(900).url() : null
  const postUrl = `/post/${post.slug}`

  return (
    <article className="min-h-screen bg-white">
      <div className="pt-20 pb-16">
        {/* Hero Image - Full display without overlay */}
        {imageUrl && (
          <div className="container-custom mb-8">
            <div className="relative w-full rounded-xl bg-gray-50 overflow-visible">
              <div className="relative w-full max-w-5xl mx-auto">
                <Image
                  src={imageUrl}
                  alt={post.title || 'Blog post'}
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
            {post.category?.title && (
              <div className="text-[#0891b2] mb-3 text-sm md:text-base font-semibold uppercase tracking-wide">
                {post.category.title}
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                <span>
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : ''}
                </span>
              </div>
              <span className="hidden sm:inline">•</span>
              {post.readTime && (
                <>
                  <div className="flex items-center">
                    <Clock className="mr-2" size={16} />
                    <span>{post.readTime} min read</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                </>
              )}
              <div className="text-gray-700 font-semibold">
                <span className="text-gray-900">{post.author || 'Dr. Kapil Agrawal'}</span> - Senior Consultant at Apollo Group of Hospitals
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
                    {post.content ? (
                      <PortableText value={post.content} components={portableTextComponents} />
                    ) : (
                      <p className="text-gray-500 italic">No content available</p>
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
                        {(post.author || 'Dr. Kapil Agrawal').charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {post.author || 'Dr. Kapil Agrawal'}
                      </h3>
                      <p className="text-gray-600 mb-2">Senior Consultant at Apollo Group of Hospitals</p>
                      {post.publishedAt && (
                        <div className="text-sm text-gray-500">
                          Published on {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                {/* About Doctor Section */}
                <AboutDoctorSection />

                {/* Blog Post Footer - Why Choose Us & Book Appointment */}
                <BlogPostFooter category={post.category?.title} />
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
                title={post.title || ''}
                url={postUrl}
                excerpt={post.excerpt}
                variant="sidebar"
              />

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-xl p-6 border border-[#0891b2]/20 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                    <span className="text-[#0891b2]">📚</span>
                    Related Posts
                  </h3>
                  <ul className="space-y-3">
                    {relatedPosts.map((relatedPost) => {
                      const relatedImageUrl = relatedPost.image ? urlForImage(relatedPost.image).width(400).height(300).url() : null
                      return (
                        <li key={relatedPost._id}>
                          <Link
                            href={`/post/${relatedPost.slug}`}
                            className="block text-gray-700 hover:text-[#0891b2] hover:underline font-medium transition-colors py-2 px-3 rounded-lg hover:bg-white/50"
                          >
                            {relatedPost.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>

      {/* Mobile Share Bar */}
      <BlogShareButtons
        title={post.title || ''}
        url={postUrl}
        excerpt={post.excerpt}
        variant="mobile"
      />
    </article>
  )
}

