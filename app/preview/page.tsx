import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import PreviewProvider from '@/components/PreviewProvider'
import { getClient } from '@/lib/sanity/client'
import { blogsQuery, blogBySlugQueryWithAuthor } from '@/lib/sanity/queries'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/lib/sanity/portableTextComponents'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

type Props = {
  searchParams: Promise<{ slug?: string }>
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function PreviewContent({ slug }: { slug?: string }) {
  const isDraft = draftMode().isEnabled
  const client = getClient(isDraft)

  if (slug) {
    // Show single blog post preview
    const post = await client.fetch(blogBySlugQueryWithAuthor, { slug })

    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Link href="/preview" className="text-[#f56336] hover:underline">
              Back to preview
            </Link>
          </div>
        </div>
      )
    }

    const imageUrl = post.mainImage
      ? urlForImage(post.mainImage).width(1200).height(630).url()
      : null

    return (
      <div className="pt-20 pb-16">
        {/* Hero Image */}
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
                {post.category?.title && (
                  <div className="text-primary-300 mb-2">{post.category.title}</div>
                )}
                <h1 className="text-4xl md:text-5xl font-bold mb-3">{post.title}</h1>
                <p className="text-lg md:text-xl font-semibold text-white/90 mb-4">
                  <span className="text-white font-bold">{post.author || 'Dr. Kapil Agrawal'}</span> - Senior Consultant at Apollo Group of Hospitals
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
              <Link
                href="/preview"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
              >
                <ArrowLeft className="mr-2" size={20} />
                Back to Preview
              </Link>

              {/* Content */}
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-headings:font-bold prose-strong:text-gray-900">
                {post.body ? (
                  <PortableText value={post.body} components={portableTextComponents} />
                ) : (
                  <p className="text-gray-500 italic">No content available</p>
                )}
              </div>

              {/* Author */}
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
      </div>
    )
  }

  // Show all blogs preview
  const blogs = await client.fetch(blogsQuery)

  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Blog Preview
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Live Draft Content from Sanity
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
            This page shows draft content in real-time. Changes in Sanity Studio will appear here.
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts found.</p>
            <p className="text-gray-500 mt-2">Create a blog post in Sanity Studio to see it here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: any) => {
              const imageUrl = blog.mainImage
                ? urlForImage(blog.mainImage).width(600).height(400).url()
                : null

              return (
                <Link
                  key={blog._id}
                  href={`/preview?slug=${blog.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {imageUrl && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={imageUrl}
                        alt={blog.title || 'Blog post'}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {blog.category?.title && (
                      <div className="text-sm text-[#f56336] font-semibold mb-2">
                        {blog.category.title}
                      </div>
                    )}
                    <h2 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
                      {blog.title}
                    </h2>
                    {blog.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                    )}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{blog.author || 'Dr. Kapil Agrawal'}</span>
                      {blog.publishedAt && (
                        <span>
                          {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default async function PreviewPage({ searchParams }: Props) {
  const params = await searchParams
  const slug = params.slug

  // Only allow preview in draft mode
  const isDraft = draftMode().isEnabled

  if (!isDraft) {
    redirect('/post')
  }

  return (
    <PreviewProvider token={process.env.SANITY_API_READ_TOKEN}>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f56336] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading preview...</p>
            </div>
          </div>
        }
      >
        <PreviewContent slug={slug} />
      </Suspense>
    </PreviewProvider>
  )
}

