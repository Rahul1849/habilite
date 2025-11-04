'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { motion, AnimatePresence } from 'framer-motion'

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Patient <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from patients who trusted us with their care
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <Quote className="text-primary-300 mb-4" size={40} />
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
                "{currentTestimonial.text}"
              </p>
              <div className="flex items-center">
                {currentTestimonial.image && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.patientName}
                      fill
                      className="object-cover"
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
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
