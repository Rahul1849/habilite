'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryImages, categories } from '@/data/gallery'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Before & After Gallery</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            See real results from our successful surgeries
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary-500/40 flex items-center justify-center">
                    <span className="text-white font-semibold">After</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold">Click to View</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white font-semibold">{item.title}</div>
                <div className="text-sm text-gray-300">{item.treatment}</div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>

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
              <div className="grid grid-cols-2 gap-4 mb-4">
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
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-2">{selectedImage.treatment}</p>
                {selectedImage.description && (
                  <p className="text-gray-400">{selectedImage.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
