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

type SanityBlog = {
  _id: string
  title?: string
  slug?: string
  mainImage?: any
  body?: any
  author?: string
  publishedAt?: string
  readTime?: number
  excerpt?: string
  category?: { title?: string }
}

type SanitySingleBlogProps = {
  post: SanityBlog | null
}

export default function SanitySingleBlog({ post }: SanitySingleBlogProps) {
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

  const imageUrl = post.mainImage ? urlForImage(post.mainImage).width(1600).height(900).url() : null
  const postUrl = `/post/${post.slug}`

  return (
    <article className="min-h-screen bg-white">
      {/* Blog Header Section */}
      <header>
        {imageUrl ? (
          <div className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] -mt-20">
            <Image
              src={imageUrl}
              alt={post.title || 'Blog post'}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />
            <div className="container-custom relative z-10 h-full flex items-end pb-8 md:pb-12">
              <div className="text-white max-w-4xl">
                {post.category?.title && (
                  <div className="inline-block bg-[#0891b2]/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {post.category.title}
                  </div>
                )}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <p className="text-lg md:text-xl font-semibold text-white/95">
                    <span className="text-white font-bold">{post.author || 'Dr. Kapil Agrawal'}</span>
                    <span className="text-white/80"> - Senior Consultant at Apollo Group of Hospitals</span>
                  </p>
                </div>
                {post.publishedAt && (
                  <div className="flex flex-wrap items-center gap-4 text-gray-200 text-sm md:text-base">
                    <div className="flex items-center">
                      <Calendar className="mr-2" size={18} />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    {post.readTime && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center">
                          <Clock className="mr-2" size={18} />
                          <span>{post.readTime} min read</span>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Fallback header without image
          <div className="bg-gradient-to-r from-[#0891b2] to-[#06b6d4] py-16 md:py-20 -mt-20">
            <div className="container-custom">
              <div className="max-w-4xl text-white">
                {post.category?.title && (
                  <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {post.category.title}
                  </div>
                )}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <p className="text-lg md:text-xl font-semibold">
                    <span className="font-bold">{post.author || 'Dr. Kapil Agrawal'}</span>
                    <span className="opacity-90"> - Senior Consultant at Apollo Group of Hospitals</span>
                  </p>
                </div>
                {post.publishedAt && (
                  <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm md:text-base">
                    <div className="flex items-center">
                      <Calendar className="mr-2" size={18} />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    {post.readTime && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center">
                          <Clock className="mr-2" size={18} />
                          <span>{post.readTime} min read</span>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <div className="bg-white">
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Main Article Content */}
            <div className="lg:col-span-3">
              {/* Centered Article Container */}
              <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
                <Link
                  href="/post"
                  className="inline-flex items-center text-[#0891b2] hover:text-[#06b6d4] mb-8 font-medium transition-colors"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  Back to Blog
                </Link>

                {/* Key Takeaways Section */}
                <KeyTakeaways excerpt={post.excerpt} />

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
                    {post.body ? (
                      <PortableText value={post.body} components={portableTextComponents} />
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
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Share Buttons */}
                <BlogShareButtons
                  title={post.title || ''}
                  url={postUrl}
                  excerpt={post.excerpt}
                  variant="sidebar"
                />
              </div>
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

