import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/lib/sanity/portableTextComponents'
import { urlForImage } from '@/sanity/lib/image'

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

  const imageUrl = post.mainImage ? urlForImage(post.mainImage).width(1200).height(630).url() : null

  return (
    <>
      {imageUrl && (
        <div className="relative h-96">
          <Image
            src={imageUrl}
            alt={post.title || 'Blog post'}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="container-custom relative z-10 h-full flex items-end pb-8">
            <div className="text-white">
              {post.category?.title && <div className="text-primary-300 mb-2">{post.category.title}</div>}
              <h1 className="text-4xl md:text-5xl font-bold mb-3">{post.title}</h1>
              <p className="text-lg md:text-xl font-semibold text-white/90 mb-4">
                <span className="text-white font-bold">{post.author || 'Dr. Kapil Agrawal'}</span> - Senior Consultant at
                Apollo Group of Hospitals
              </p>
              {post.publishedAt && (
                <div className="flex items-center text-gray-300">
                  <Calendar className="mr-2" size={16} />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  {post.readTime && (
                    <>
                      <span className="mx-2">•</span>
                      <Clock className="mr-2" size={16} />
                      <span>{post.readTime} min read</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <Link href="/post" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Link>

            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-headings:font-bold prose-strong:text-gray-900">
              {post.body ? (
                <PortableText value={post.body} components={portableTextComponents} />
              ) : (
                <p className="text-gray-500 italic">No content available</p>
              )}
            </div>

            <div className="mt-12 pt-8 border-t flex items-center">
              <div>
                <div className="font-semibold text-gray-900">
                  {post.author || 'Dr. Kapil Agrawal'} - Senior Consultant at Apollo Group of Hospitals
                </div>
                {post.publishedAt && (
                  <div className="text-sm text-gray-600">
                    Published on {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

