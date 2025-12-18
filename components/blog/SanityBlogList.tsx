'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'
import { slugify } from '@/lib/utils/slugify'

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
  showCategoryFilter?: boolean
}

export default function SanityBlogList({ blogs, showCategoryFilter = true }: SanityBlogListProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  const blogsPerPage = 8

  // Get all unique categories from blogs
  const allCategories = useMemo(() => {
    const categories = new Set<string>(['All'])
    blogs.forEach((blog) => {
      if (blog.category?.title) {
        categories.add(blog.category.title)
      }
    })
    return Array.from(categories)
  }, [blogs])

  // Calculate post counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    allCategories.forEach((category) => {
      if (category === 'All') {
        counts[category] = blogs.length
      } else {
        counts[category] = blogs.filter(
          (blog) => blog.category?.title === category
        ).length
      }
    })
    return counts
  }, [allCategories, blogs])

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

  // Separate blogs into Featured and Latest
  const featuredBlogs = useMemo(() => {
    // Get the 3 most recent blogs as featured (or check for featured flag if available)
    return [...blogs]
      .sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
        return dateB - dateA
      })
      .slice(0, 3)
  }, [blogs])

  const allLatestBlogs = useMemo(() => {
    // Get remaining blogs sorted by date
    const featuredIds = new Set(featuredBlogs.map(b => b._id))
    return [...blogs]
      .filter(blog => !featuredIds.has(blog._id))
      .sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
        return dateB - dateA
      })
  }, [blogs, featuredBlogs])

  // Pagination calculations
  const totalPages = Math.ceil(allLatestBlogs.length / blogsPerPage)
  const startIndex = (currentPage - 1) * blogsPerPage
  const endIndex = startIndex + blogsPerPage
  const latestBlogs = useMemo(() => {
    return allLatestBlogs.slice(startIndex, endIndex)
  }, [allLatestBlogs, startIndex, endIndex])

  // Reset to page 1 when blogs change
  useEffect(() => {
    setCurrentPage(1)
  }, [allLatestBlogs.length])

  if (blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No blog posts found.</p>
      </div>
    )
  }

  return (
    <>
      {/* Category Filter Button with Dropdown */}
      {showCategoryFilter && (
      <div className="mb-12">
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              aria-label="View blog categories"
              className="w-full flex items-center justify-between px-6 py-3.5 bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:border-[#0891b2] focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:ring-offset-2 transition-all duration-200 text-left"
            >
              <span className="font-semibold text-gray-900">View Categories</span>
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
                  <div className="px-2 py-2 mb-1 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-700">Select Category</h3>
                  </div>
                  
                  {/* All Categories - Always First */}
                  {allCategories
                    .filter(cat => cat === 'All')
                    .map((category) => {
                      const postCount = categoryCounts[category]
                      const categoryUrl = '/post'
                      
                      return (
                        <Link
                          key={category}
                          href={categoryUrl}
                          role="menuitem"
                          className="block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 text-gray-700 hover:bg-gray-100 active:bg-gray-200 border-b border-gray-200 mb-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">All Categories</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-semibold">
                              {postCount}
                            </span>
                          </div>
                        </Link>
                      )
                    })}
                  
                  {/* Other Categories */}
                  {allCategories
                    .filter(cat => cat !== 'All')
                    .sort()
                    .map((category) => {
                      const postCount = categoryCounts[category]
                      const categorySlug = slugify(category)
                      const categoryUrl = `/post/category/${categorySlug}`
                      
                      return (
                        <Link
                          key={category}
                          href={categoryUrl}
                          role="menuitem"
                          className="block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <span>{category}</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                              {postCount}
                            </span>
                          </div>
                        </Link>
                      )
                    })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      )}

      {/* Featured Blogs Section */}
      {featuredBlogs.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Blogs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, index) => {
              const imageUrl = blog.mainImage
                ? urlForImage(blog.mainImage).width(640).height(400).url()
                : null

              return (
                <Link
                  key={blog._id}
                  href={`/post/${blog.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  {imageUrl && (
                    <div className="relative w-full aspect-[16/9] min-h-[200px] overflow-hidden bg-gray-100 rounded-t-xl">
                      <Image
                        src={imageUrl}
                        alt={blog.title || 'Blog post'}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading={index === 0 ? "eager" : "lazy"}
                        quality={85}
                      />
                      <div className="absolute top-4 left-4 bg-[#0891b2] text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                        FEATURED
                      </div>
                      {blog.category?.title && (
                        <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold z-10">
                          {blog.category.title}
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 flex-wrap gap-2">
                      {blog.publishedAt && (
                        <>
                          <div className="flex items-center">
                            <Calendar className="mr-1" size={14} />
                            <span className="text-xs">
                              {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                          {blog.readTime && (
                            <>
                              <span className="hidden sm:inline">•</span>
                              <div className="flex items-center">
                                <Clock className="mr-1" size={14} />
                                <span className="text-xs">{blog.readTime} min read</span>
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#0891b2] transition-colors">
                      {blog.title}
                    </h3>
                    {blog.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                        {blog.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        By {blog.author || 'Dr. Kapil Agrawal'} - Senior Consultant at Apollo Group of Hospitals
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* Latest Blogs Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Latest Blogs
            </h2>
            <p className="text-gray-600">
              Here&apos;s what we&apos;ve been up to lately.
            </p>
          </div>
        </div>
        {latestBlogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestBlogs.map((blog) => {
              const imageUrl = blog.mainImage
                ? urlForImage(blog.mainImage).width(640).height(400).url()
                : null

              return (
                <Link
                  key={blog._id}
                  href={`/post/${blog.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  {imageUrl && (
                    <div className="relative w-full aspect-[16/9] min-h-[200px] overflow-hidden bg-gray-100 rounded-t-xl">
                      <Image
                        src={imageUrl}
                        alt={blog.title || 'Blog post'}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        quality={85}
                      />
                      {blog.category?.title && (
                        <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold z-10">
                          {blog.category.title}
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 flex-wrap gap-2">
                      {blog.publishedAt && (
                        <>
                          <div className="flex items-center">
                            <Calendar className="mr-1" size={14} />
                            <span className="text-xs">
                              {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                          {blog.readTime && (
                            <>
                              <span className="hidden sm:inline">•</span>
                              <div className="flex items-center">
                                <Clock className="mr-1" size={14} />
                                <span className="text-xs">{blog.readTime} min read</span>
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#0891b2] transition-colors">
                      {blog.title}
                    </h3>
                    {blog.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                        {blog.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        By {blog.author || 'Dr. Kapil Agrawal'} - Senior Consultant at Apollo Group of Hospitals
                      </div>
                    </div>
                  </div>
                </Link>
              )
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex flex-col items-center">
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {/* Previous Button */}
                  <button
                    onClick={() => {
                      setCurrentPage(prev => Math.max(1, prev - 1))
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={18} />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      // Show first page, last page, current page, and pages around current
                      const showPage = 
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      
                      if (!showPage) {
                        // Show ellipsis
                        if (page === currentPage - 2 || page === currentPage + 2) {
                          return (
                            <span key={page} className="px-2 text-gray-400">
                              ...
                            </span>
                          )
                        }
                        return null
                      }

                      return (
                        <button
                          key={page}
                          onClick={() => {
                            setCurrentPage(page)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                          className={`px-4 py-2 rounded-lg border transition-colors min-w-[40px] ${
                            currentPage === page
                              ? 'bg-[#0891b2] text-white border-[#0891b2] font-semibold'
                              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                          }`}
                          aria-label={`Go to page ${page}`}
                          aria-current={currentPage === page ? 'page' : undefined}
                        >
                          {page}
                        </button>
                      )
                    })}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => {
                      setCurrentPage(prev => Math.min(totalPages, prev + 1))
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
                    aria-label="Next page"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Showing {startIndex + 1}-{Math.min(endIndex, allLatestBlogs.length)} of {allLatestBlogs.length} blogs
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Blogs Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn&apos;t find any blogs. Check back later.
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

