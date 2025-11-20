import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import type { BlogPost } from '@/data/blog'

interface RecentPostsProps {
  posts: BlogPost[]
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  if (posts.length === 0) return null

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Recent Posts</h3>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/post/${post.slug}`}
              className="block group hover:bg-gray-50 rounded-lg p-3 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                {post.title}
              </h4>
              <div className="flex items-center text-xs text-gray-500 gap-3">
                <span className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  {new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  {post.readTime} min
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

