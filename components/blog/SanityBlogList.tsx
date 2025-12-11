import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'

type SanityBlog = {
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

type SanityBlogListProps = {
  blogs: SanityBlog[]
}

export default function SanityBlogList({ blogs }: SanityBlogListProps) {
  if (blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No blog posts found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => {
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
  )
}

