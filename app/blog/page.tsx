import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/data/blog'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Health Articles & Surgical Insights',
  description: 'Read our latest articles about laparoscopic surgery, recovery tips, and surgical innovations.',
}

export default function BlogPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Health Blog</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Insights, tips, and updates about surgical care and patient wellness
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="mr-2" size={16} />
                  <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="mx-2">•</span>
                  <Clock className="mr-2" size={16} />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="text-sm text-[#0891b2] font-semibold mb-2">{post.category}</div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-[#0891b2] font-semibold group-hover:text-[#06b6d4] transition-colors">
                  Read More
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
