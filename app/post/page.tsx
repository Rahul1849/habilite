'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/data/blog'
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'

// Medical topic categories matching the reference site
const medicalCategories = [
  'All',
  'Bariatric Surgery',
  'Gall Bladder Stone',
  'Hernia',
  'Laparoscopic Surgery',
  'Lipoma',
  'Non-Surgical Weight Loss',
  'Piles',
]

// Helper function to match posts to categories based on title, tags, or category
function matchesCategory(post: typeof blogPosts[0], category: string): boolean {
  if (category === 'All') return true
  
  const postText = `${post.title} ${post.excerpt} ${post.category} ${post.tags.join(' ')}`.toLowerCase()
  const categoryLower = category.toLowerCase()
  
  // Direct category match
  if (post.category.toLowerCase() === categoryLower) return true
  
  // Keyword matching for specific categories
  if (category === 'Bariatric Surgery') {
    return postText.includes('bariatric') || postText.includes('weight loss surgery') || postText.includes('gastric bypass') || postText.includes('sleeve gastrectomy')
  }
  if (category === 'Gall Bladder Stone') {
    return postText.includes('gallbladder') || postText.includes('gall bladder') || postText.includes('cholecystectomy')
  }
  if (category === 'Hernia') {
    return postText.includes('hernia')
  }
  if (category === 'Laparoscopic Surgery') {
    return postText.includes('laparoscopic') || postText.includes('minimally invasive') || postText.includes('robotic')
  }
  if (category === 'Lipoma') {
    return postText.includes('lipoma')
  }
  if (category === 'Non-Surgical Weight Loss') {
    return postText.includes('non-surgical') || postText.includes('weight loss program') || postText.includes('medical weight')
  }
  if (category === 'Piles') {
    return postText.includes('piles') || postText.includes('hemorrhoids') || postText.includes('hemorrhoid')
  }
  
  return false
}

// Featured posts (first 3 posts)
const featuredPosts = blogPosts.slice(0, 3)

// Latest posts (sorted by date, most recent first)
const latestPosts = [...blogPosts].sort((a, b) => 
  new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
)

// Trending posts (can be based on views, likes, or manually selected - using first 4 for now)
const trendingPosts = blogPosts.slice(0, 4)

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return latestPosts
    }
    return latestPosts.filter(post => matchesCategory(post, selectedCategory))
  }, [selectedCategory])

  // Filter featured posts by category
  const filteredFeaturedPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return featuredPosts
    }
    return featuredPosts.filter(post => matchesCategory(post, selectedCategory))
  }, [selectedCategory])

  // Filter trending posts by category
  const filteredTrendingPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return trendingPosts
    }
    return trendingPosts.filter(post => matchesCategory(post, selectedCategory))
  }, [selectedCategory])

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <div className="bg-gradient-primary py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">The Blogs</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Trusted Medical Insights
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
            Everything you need to know about health, all in one place.
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {medicalCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm md:text-base ${
                  selectedCategory === category
                    ? 'bg-[#0891b2] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Blogs Section */}
        {selectedCategory === 'All' && filteredFeaturedPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Blogs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFeaturedPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/post/${post.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index === 0 ? "eager" : "lazy"}
                      quality={85}
                    />
                    <div className="absolute top-4 left-4 bg-[#0891b2] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 flex-wrap gap-2">
                      <div className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        <span className="text-xs">
                          {new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center">
                        <Clock className="mr-1" size={14} />
                        <span className="text-xs">{post.readTime} min read</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#0891b2] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">By {post.author}</div>
                      <div className="flex items-center text-[#0891b2] font-semibold group-hover:text-[#06b6d4] transition-colors">
                        <span className="line-clamp-1">
                          {post.title.toLowerCase().includes('cost') || post.title.toLowerCase().includes('price')
                            ? `Discover ${post.title.toLowerCase()}`
                            : post.title.toLowerCase().includes('surgery') || post.title.toLowerCase().includes('treatment')
                            ? `Learn about ${post.title.toLowerCase()}`
                            : post.title.toLowerCase().includes('guide') || post.title.toLowerCase().includes('how to')
                            ? `Read complete guide on ${post.title.toLowerCase()}`
                            : `Explore ${post.title.toLowerCase()}`}
                        </span>
                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Latest Blogs Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'All' ? 'Latest Blogs' : `${selectedCategory} Blogs`}
              </h2>
              <p className="text-gray-600">
                {selectedCategory === 'All' ? "Here's what we've been up to lately." : `Latest articles about ${selectedCategory.toLowerCase()}`}
              </p>
            </div>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-[#0891b2] hover:text-[#06b6d4] font-semibold transition-colors whitespace-nowrap"
              >
                View All
              </button>
            )}
          </div>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
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
                          {new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">By {post.author}</div>
                      <div className="flex items-center text-[#0891b2] font-semibold group-hover:text-[#06b6d4] transition-colors">
                        <span className="line-clamp-1">
                          {post.title.toLowerCase().includes('cost') || post.title.toLowerCase().includes('price')
                            ? `Discover ${post.title.toLowerCase()}`
                            : post.title.toLowerCase().includes('surgery') || post.title.toLowerCase().includes('treatment')
                            ? `Learn about ${post.title.toLowerCase()}`
                            : post.title.toLowerCase().includes('guide') || post.title.toLowerCase().includes('how to')
                            ? `Read complete guide on ${post.title.toLowerCase()}`
                            : `Explore ${post.title.toLowerCase()}`}
                        </span>
                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Blogs Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn&apos;t find any blogs for &quot;{selectedCategory}&quot; category. Try selecting a different category or check back later.
                </p>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="inline-flex items-center px-6 py-3 bg-[#0891b2] text-white font-semibold rounded-lg hover:bg-[#06b6d4] transition-colors"
                >
                  View All Blogs
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Trending Blogs Section */}
        {selectedCategory === 'All' && filteredTrendingPosts.length > 0 && (
          <section>
            <div className="flex items-center mb-8">
              <TrendingUp className="text-[#0891b2] mr-3" size={32} />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trending Blogs</h2>
                <p className="text-gray-600 mt-1">Explore What Everyone&rsquo;s Talking About.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTrendingPosts.map((post, index) => (
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-[#0891b2] font-semibold mb-2">{post.category}</div>
                    <h3 className="text-base font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#0891b2] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-3 line-clamp-2 text-xs leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="mr-1" size={12} />
                        <span>
                          {new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">By {post.author}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
