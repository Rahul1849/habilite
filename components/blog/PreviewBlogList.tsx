'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import { usePreview } from '@/lib/sanity/preview'
import { blogsQuery } from '@/lib/sanity/queries'
import { urlForImage } from '@/sanity/lib/image'

type PreviewBlog = {
  _id: string
  title?: string
  slug?: string
  mainImage?: any
  excerpt?: string
  author?: string
  publishedAt?: string
  readTime?: number
  category?: { title?: string }
}

type PreviewBlogListProps = {
  initialData: PreviewBlog[]
}

export default function PreviewBlogList({ initialData }: PreviewBlogListProps) {
  const blogs = usePreview<PreviewBlog[]>(initialData, blogsQuery)

  const sortedBlogs = useMemo(
    () =>
      [...(blogs || [])].sort((a, b) => {
        const aDate = a?.publishedAt ? new Date(a.publishedAt).getTime() : 0
        const bDate = b?.publishedAt ? new Date(b.publishedAt).getTime() : 0
        return bDate - aDate
      }),
    [blogs],
  )

  return (
    <div className="pt-20 pb-16">
      {/* Blog Cover Image */}
      <div className="container-custom mb-8">
        <div className="relative w-full rounded-xl overflow-hidden bg-gray-50">
          <div className="relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px]">
            <Image
              src="/images/blog-cover.png"
              alt="Blog Cover - Medical Blogs & Articles"
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              priority
              fetchPriority="high"
              quality={85}
              loading="eager"
              decoding="sync"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-primary py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">The Blogs (Preview)</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Draft &amp; published posts in real time.</p>
          <p className="text-sm text-gray-600 mt-2">Updates from Sanity will appear instantly.</p>
        </div>
      </div>

      <div className="container-custom section-padding">
        {sortedBlogs.length === 0 ? (
          <div className="text-center text-gray-600">No blog posts found. Create a draft in Sanity to preview it.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedBlogs.map((blog) => {
              const imageUrl = blog.mainImage ? urlForImage(blog.mainImage).width(640).height(400).url() : null
              return (
                <Link
                  key={blog._id}
                  href={`/post/${blog.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f56336]"
                >
                  {imageUrl && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={imageUrl}
                        alt={blog.title || 'Blog post'}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {blog.category?.title && (
                      <div className="text-sm text-[#f56336] font-semibold mb-2">{blog.category.title}</div>
                    )}
                    <h2 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">{blog.title}</h2>
                    {blog.excerpt && <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>}
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


