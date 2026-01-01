'use client'

import Link from 'next/link'
import Image from 'next/image'
import { TrendingUp } from 'lucide-react'
import { blogPosts } from '@/data/blog'

export default function PilesBlogSection() {
  const pilesBlogs = blogPosts
    .filter(
      (post) =>
        post.category.toLowerCase().includes("piles") ||
        post.category.toLowerCase().includes("hemorrhoid") ||
        post.tags.some(
          (tag) =>
            tag.toLowerCase().includes("piles") ||
            tag.toLowerCase().includes("hemorrhoid")
        )
    )
    .slice(0, 3)

  if (pilesBlogs.length === 0) {
    return null
  }

  return (
    <section>
      <div className="flex items-center mb-6">
        <TrendingUp className="text-[#0891b2] mr-3" size={32} />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest Piles Blogs
          </h2>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            Expert advice on piles treatment, recovery, and laser
            surgery options
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pilesBlogs.map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.slug}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="p-5">
              <div className="text-xs text-[#0891b2] font-semibold mb-2">
                {post.category}
              </div>
              <h3 className="text-base font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#0891b2] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-3 line-clamp-2 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>
                  {new Date(post.publishedDate).toLocaleDateString(
                    "en-IN",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </span>
                <span>By {post.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

