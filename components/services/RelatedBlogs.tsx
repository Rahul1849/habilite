import Link from 'next/link'
import Image from 'next/image'
import { TrendingUp, Calendar, Clock } from 'lucide-react'
import { blogPosts, BlogPost } from '@/data/blog'

interface RelatedBlogsProps {
  serviceName: string
  serviceKeywords: string[]
  maxPosts?: number
}

// Helper function to match blogs to service based on keywords
// Prioritizes exact category matches, then title, then tags
// Only matches blogs that would appear on the /post page
function matchesService(post: BlogPost, serviceKeywords: string[]): boolean {
  // Ensure post has valid slug (required for /post page)
  if (!post.slug || post.slug.trim() === '') {
    return false
  }

  const titleLower = post.title.toLowerCase()
  const excerptLower = post.excerpt.toLowerCase()
  const categoryLower = post.category.toLowerCase().replace(/\s+/g, '') // Remove spaces for matching
  const tagsLower = post.tags.join(' ').toLowerCase()

  // Check if any keyword matches
  return serviceKeywords.some((keyword) => {
    const keywordLower = keyword.toLowerCase().replace(/\s+/g, '')
    
    // Priority 1: Category match (most reliable)
    // Handle variations: 'Gall Bladder Stone' -> 'gallbladderstone', 'GallBladder' -> 'gallbladder'
    if (categoryLower.includes(keywordLower) || keywordLower.includes(categoryLower)) {
      return true
    }
    
    // Special handling for gallbladder variations
    if (keywordLower.includes('gallbladder') || keywordLower.includes('gallbladder')) {
      if (categoryLower.includes('gallbladder') || categoryLower.includes('gallbladderstone') || 
          categoryLower.includes('gallbladder')) {
        return true
      }
    }
    
    // Priority 2: Title match
    if (titleLower.includes(keywordLower)) {
      return true
    }
    
    // Priority 3: Tags match
    if (tagsLower.includes(keywordLower)) {
      return true
    }
    
    // Priority 4: Excerpt match (less reliable, but still useful)
    if (excerptLower.includes(keywordLower)) {
      return true
    }
    
    return false
  })
}

export default function RelatedBlogs({ serviceName, serviceKeywords, maxPosts = 3 }: RelatedBlogsProps) {
  // Blogs to exclude from all service pages
  const excludedBlogSlugs = [
    'gallbladder-stone-treatment-symptoms-diagnosis-surgery',
    'hernia-surgery-types-treatment-options-recovery',
  ]

  // Filter blogs that match the service keywords
  // Only use blogs that exist in the blogPosts array (which is the same as /post page)
  // This ensures we only show blogs that are actually visible on the /post page
  const relatedBlogs = blogPosts
    .filter((post) => {
      // Ensure the post has all required fields and is valid
      if (!post.slug || !post.title || !post.id) {
        return false
      }
      // Exclude specific blogs that shouldn't appear on service pages
      if (excludedBlogSlugs.includes(post.slug)) {
        return false
      }
      // Only include posts that would be accessible via /post/[slug]
      return matchesService(post, serviceKeywords)
    })
    .slice(0, maxPosts)

  // Don't render if no related blogs found
  if (relatedBlogs.length === 0) {
    return null
  }

  return (
    <section className="mt-12">
      <div className="flex items-center mb-6">
        <TrendingUp className="text-[#0891b2] mr-3" size={32} />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Related {serviceName} Blogs</h2>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            Expert insights, tips, and guides about {serviceName.toLowerCase()}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedBlogs.map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.slug}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                quality={85}
              />
              <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3 flex-wrap gap-2">
                <div className="flex items-center">
                  <Calendar className="mr-1" size={14} />
                  <span className="text-xs">
                    {new Date(post.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center">
                  <Clock className="mr-1" size={14} />
                  <span className="text-xs">{post.readTime} min read</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#0891b2] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  By {post.author} - Senior Consultant at Apollo Group of Hospitals
                </div>
                <div className="flex items-center text-[#0891b2] font-semibold group-hover:text-[#06b6d4] transition-colors">
                  Read More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

