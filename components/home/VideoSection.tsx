'use client'

import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID || 'dQw4w9WgXcQ' // Placeholder

  return (
    <section id="video" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Watch Our <span className="text-secondary-400">Story</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Learn about our approach to patient care and advanced surgical techniques
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setIsVideoOpen(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-colors"
              >
                <Play className="text-white" size={64} fill="white" />
              </motion.div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-semibold mb-2">Habilite Clinics - Excellence in Surgical Care</h3>
              <p className="text-gray-200">Click to watch our introduction video</p>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {isVideoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setIsVideoOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300"
                  aria-label="Close video"
                >
                  <X size={32} />
                </button>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="Habilite Clinics Video"
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
