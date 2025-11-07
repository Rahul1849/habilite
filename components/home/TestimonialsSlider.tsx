'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Use setInterval for efficient auto-rotation
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <section id="testimonials" className="section-padding bg-gradient-to-b from-white via-orange-50/30 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Patient <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from patients who trusted us with their care
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Patient <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from patients who trusted us with their care
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            key={currentIndex}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in"
          >
            <Quote className="text-[#f56336] opacity-30 mb-4" size={40} />
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-yellow-400"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">
                &quot;{currentTestimonial.text}&quot;
              </p>
              <div className="flex items-center">
                {currentTestimonial.image && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.patientName}
                      fill
                      className="object-cover"
                      sizes="64px"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                )}
                <div>
                  <div className="font-semibold text-gray-900">
                    {currentTestimonial.patientName}
                  </div>
                  <div className="text-sm text-gray-600">
                    {currentTestimonial.treatment}
                  </div>
                </div>
              </div>
            </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#f56336] w-8'
                    : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* View All Link */}
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="inline-flex items-center text-[#f56336] hover:text-[#ff8c5a] font-semibold transition-colors"
            >
              View All Testimonials
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
