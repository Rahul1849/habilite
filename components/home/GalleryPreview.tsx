import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { galleryImages } from '@/data/gallery'

export default function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 6)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Before & After <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See real results from our successful surgeries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {previewImages.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 grid grid-cols-2">
                <div className="relative">
                  <Image
                    src={item.beforeImage}
                    alt={`Before - ${item.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
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
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary-500/40 flex items-center justify-center">
                    <span className="text-white font-semibold">After</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold">{item.treatment}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery" className="btn-outline inline-flex items-center">
            View Full Gallery
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
