'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { GalleryImage } from '@/data/gallery'

interface GallerySectionProps {
  gallery: GalleryImage[]
}

export default function GallerySection({ gallery }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <>
      <section>
        <h2 className="text-3xl font-bold mb-6">Before & After Gallery</h2>
        <div className="grid grid-cols-2 gap-4">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="absolute inset-0 grid grid-cols-2">
                <div className="relative">
                  <Image
                    src={item.beforeImage}
                    alt={`Before - ${item.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-semibold">Before</span>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={item.afterImage}
                    alt={`After - ${item.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-primary-500/40 flex items-center justify-center">
                    <span className="text-white font-semibold">After</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold">View Full Size</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square">
                  <Image
                    src={selectedImage.beforeImage}
                    alt={`Before - ${selectedImage.title}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="50vw"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded">
                    Before
                  </div>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src={selectedImage.afterImage}
                    alt={`After - ${selectedImage.title}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="50vw"
                  />
                  <div className="absolute bottom-4 left-4 bg-primary-500/70 text-white px-4 py-2 rounded">
                    After
                  </div>
                </div>
              </div>
              {selectedImage.description && (
                <p className="text-white text-center mt-4">{selectedImage.description}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
