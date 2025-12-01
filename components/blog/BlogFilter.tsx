'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/data/blog'
import { Calendar, Clock, ArrowRight, ChevronDown, X } from 'lucide-react'

// Service-based categories for blog filtering
const getAllCategories = (): string[] => {
  // Define service-based categories
  const serviceCategories = [
    'All',
    'Anal Fistula',
    'Appendix Surgery',
    'Bariatric Surgery',
    'Circumcision',
    'GallBladder',
    'Hernia',
    'Laparoscopic Surgery',
    'Lipoma Surgery',
    'Non-Surgical Weight Loss',
    'Piles',
    'Surgery',
    'Weight Loss',
  ]
  
  return serviceCategories
}

// Helper function to match posts to categories based on title, tags, or category
function matchesCategory(post: typeof blogPosts[0], category: string): boolean {
  if (category === 'All') return true
  
  const titleLower = post.title.toLowerCase()
  const excerptLower = post.excerpt.toLowerCase()
  const categoryLower = post.category.toLowerCase()
  const tagsLower = post.tags.join(' ').toLowerCase()
  const searchCategory = category.toLowerCase()
  
  // Direct category match (highest priority)
  if (categoryLower === searchCategory) return true
  
  // Title-based matching (primary matching logic)
  // This ensures posts are correctly filtered based on their titles
  
  // Anal Fistula
  if (category === 'Anal Fistula') {
    return titleLower.includes('fistula') || 
           titleLower.includes('anal fistula') ||
           tagsLower.includes('fistula') ||
           categoryLower.includes('fistula')
  }
  
  // Appendix Surgery
  if (category === 'Appendix Surgery') {
    return titleLower.includes('appendicitis') || 
           titleLower.includes('appendix') ||
           titleLower.includes('appendectomy') ||
           categoryLower === 'appendicitis' ||
           tagsLower.includes('appendicitis') ||
           tagsLower.includes('appendix')
  }
  
  // Bariatric Surgery
  if (category === 'Bariatric Surgery') {
    return titleLower.includes('bariatric') || 
           titleLower.includes('weight loss surgery') || 
           titleLower.includes('gastric bypass') || 
           titleLower.includes('sleeve gastrectomy') ||
           titleLower.includes('mini gastric bypass') ||
           titleLower.includes('obesity surgery') ||
           categoryLower === 'bariatric surgery' ||
           tagsLower.includes('bariatric')
  }
  
  // Circumcision
  if (category === 'Circumcision') {
    return titleLower.includes('circumcision') || 
           titleLower.includes('zsr circumcision') ||
           tagsLower.includes('circumcision')
  }
  
  // GallBladder
  if (category === 'GallBladder') {
    return titleLower.includes('gallbladder') || 
           titleLower.includes('gall bladder') || 
           titleLower.includes('gallstone') ||
           titleLower.includes('cholecystectomy') ||
           titleLower.includes('gall stone') ||
           categoryLower.includes('gallbladder') ||
           categoryLower.includes('gall bladder') ||
           tagsLower.includes('gallbladder') ||
           tagsLower.includes('gallstone')
  }
  
  // Hernia
  if (category === 'Hernia') {
    return titleLower.includes('hernia') || 
           categoryLower === 'hernia' ||
           tagsLower.includes('hernia')
  }
  
  // Laparoscopic Surgery
  if (category === 'Laparoscopic Surgery') {
    return titleLower.includes('laparoscopic') || 
           titleLower.includes('minimally invasive') || 
           titleLower.includes('robotic surgery') ||
           categoryLower === 'laparoscopic surgery' ||
           tagsLower.includes('laparoscopic')
  }
  
  // Lipoma Surgery
  if (category === 'Lipoma Surgery') {
    return titleLower.includes('lipoma') || 
           categoryLower === 'lipoma' ||
           tagsLower.includes('lipoma')
  }
  
  // Non-Surgical Weight Loss
  if (category === 'Non-Surgical Weight Loss') {
    return titleLower.includes('non-surgical weight') || 
           titleLower.includes('weight loss program') || 
           titleLower.includes('medical weight loss') ||
           titleLower.includes('non surgical weight') ||
           categoryLower === 'non-surgical weight loss'
  }
  
  // Piles
  if (category === 'Piles') {
    return titleLower.includes('piles') || 
           titleLower.includes('hemorrhoids') || 
           titleLower.includes('hemorrhoid') ||
           categoryLower === 'piles' ||
           tagsLower.includes('piles') ||
           tagsLower.includes('hemorrhoid')
  }
  
  // Surgery (general - matches any surgery-related posts)
  if (category === 'Surgery') {
    return titleLower.includes('surgery') || 
           titleLower.includes('surgical') ||
           categoryLower.includes('surgery') ||
           tagsLower.includes('surgery')
  }
  
  // Weight Loss (general - matches any weight loss related posts)
  if (category === 'Weight Loss') {
    return titleLower.includes('weight loss') || 
           titleLower.includes('weight-loss') ||
           titleLower.includes('obesity') ||
           titleLower.includes('bariatric') ||
           tagsLower.includes('weight loss') ||
           tagsLower.includes('obesity')
  }
  
  // Fallback: exact category match
  return categoryLower === searchCategory
}

// Featured posts - specific three blogs
const featuredPostSlugs = [
  'is-it-safe-to-delay-hernia-surgery',
  'grade-4-piles-symptoms-treatments',
  'bariatric-surgery-myths',
]
const featuredPosts = featuredPostSlugs
  .map((slug) => blogPosts.find((post) => post.slug === slug))
  .filter((post): post is typeof blogPosts[0] => post !== undefined)

// Posts to exclude from latest blogs
const excludedPostSlugs = [
  'understanding-laparoscopic-surgery-benefits-recovery',
  'hernia-surgery-types-treatment-options-recovery',
  'robotic-surgery-future-minimally-invasive',
  'lipoma-removal-understanding-benign-fatty-tumors',
  'gallbladder-stone-treatment-symptoms-diagnosis-surgery',
  'bariatric-surgery-complete-guide-weight-loss',
]

// Latest posts (sorted by date, most recent first, excluding featured and unwanted posts)
const latestPosts = [...blogPosts]
  .filter((post) => !featuredPostSlugs.includes(post.slug) && !excludedPostSlugs.includes(post.slug))
  .sort((a, b) => 
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )

export default function BlogFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Get all unique categories dynamically
  const allCategories = useMemo(() => getAllCategories(), [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevent body scroll when dropdown is open on mobile
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isDropdownOpen])

  // Handle keyboard navigation
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDropdownOpen) {
        setIsDropdownOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isDropdownOpen])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setIsDropdownOpen(false)
    // Focus back on button for accessibility
    buttonRef.current?.focus()
  }

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


  return (
    <>
      {/* Professional Category Filter Dropdown */}
      <div className="mb-12">
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              aria-label={`Filter blogs by category. Currently selected: ${selectedCategory}`}
              className="w-full flex items-center justify-between px-6 py-3.5 bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:border-[#0891b2] focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:ring-offset-2 transition-all duration-200 text-left"
            >
              <span className="font-semibold text-gray-900">
                {selectedCategory === 'All' ? 'All Categories' : selectedCategory}
              </span>
              <ChevronDown
                className={`ml-2 h-5 w-5 text-gray-500 transition-transform duration-200 ${
                  isDropdownOpen ? 'transform rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Mobile Overlay */}
            {isDropdownOpen && (
              <div
                className="fixed inset-0 bg-black/20 z-40 md:hidden"
                onClick={() => setIsDropdownOpen(false)}
                aria-hidden="true"
              />
            )}

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                role="menu"
                aria-orientation="vertical"
                className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-[70vh] md:max-h-96 overflow-y-auto"
              >
                <div className="p-2">
                  {/* Search/Filter Header (Optional - can be added later) */}
                  <div className="px-2 py-2 mb-1 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-700">Select Category</h3>
                  </div>
                  
                  {allCategories.map((category) => {
                    // Count posts in this category for better UX
                    const postCount = category === 'All' 
                      ? blogPosts.length 
                      : blogPosts.filter(post => matchesCategory(post, category)).length
                    
                    return (
                      <button
                        key={category}
                        type="button"
                        role="menuitem"
                        onClick={() => handleCategorySelect(category)}
                        className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                          selectedCategory === category
                            ? 'bg-[#0891b2] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
                        }`}
                        tabIndex={0}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span>{category === 'All' ? 'All Categories' : category}</span>
                            <span className={`text-xs mt-0.5 ${
                              selectedCategory === category
                                ? 'text-white/80'
                                : 'text-gray-500'
                            }`}>
                              {postCount} {postCount === 1 ? 'post' : 'posts'}
                            </span>
                          </div>
                          {selectedCategory === category && (
                            <svg
                              className="h-5 w-5 flex-shrink-0 ml-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Selected Category Badge (Mobile-friendly) */}
        {selectedCategory !== 'All' && (
          <div className="flex justify-center mt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0891b2]/10 rounded-full">
              <span className="text-sm font-medium text-[#0891b2]">
                Showing: {selectedCategory}
              </span>
              <button
                onClick={() => handleCategorySelect('All')}
                aria-label="Clear category filter"
                className="text-[#0891b2] hover:text-[#06b6d4] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
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
                    <div className="text-xs text-gray-500">By {post.author} - Senior Consultant at Apollo Group of Hospitals</div>
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
                    <div className="text-xs text-gray-500">By {post.author} - Senior Consultant at Apollo Group of Hospitals</div>
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

    </>
  )
}

