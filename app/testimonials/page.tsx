'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials, getVideoTestimonials } from '@/data/testimonials'

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Video' | 'Text'>('All')
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const videoTestimonials = getVideoTestimonials()
  const textTestimonials = testimonials.filter(t => !t.videoUrl)

  const filteredTestimonials = selectedCategory === 'All'
    ? testimonials
    : selectedCategory === 'Video'
    ? videoTestimonials
    : textTestimonials

  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Testimonials</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Real stories from patients who trusted us with their care
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {['All', 'Video', 'Text'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as 'All' | 'Video' | 'Text')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {testimonial.videoUrl ? (
                <div
                  className="relative aspect-video mb-4 rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedVideo(testimonial.videoUrl || null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors">
                      <Play className="text-white" size={32} fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold">
                    {testimonial.treatment}
                  </div>
                </div>
              ) : (
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400"
                      size={16}
                    />
                  ))}
                </div>
              )}
              <p className="text-gray-700 mb-4 italic line-clamp-4">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center">
                {testimonial.image && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.patientName}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.patientName}</div>
                  <div className="text-sm text-gray-600">{testimonial.treatment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                aria-label="Close video"
              >
                Close
              </button>
              <iframe
                src={selectedVideo}
                title="Patient Testimonial Video"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
