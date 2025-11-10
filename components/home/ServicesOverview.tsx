import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getFeaturedServices } from '@/data/services'

export default function ServicesOverview() {
  const featuredServices = getFeaturedServices()

  return (
    <section className="section-padding bg-gradient-to-b from-white via-orange-50/40 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive surgical care using the latest minimally invasive techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              href={`/treatments/${service.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-br from-[#0891b2] to-[#06b6d4] text-white px-4 py-2 rounded-full text-2xl shadow-md">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>
                <div className="flex items-center bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="ml-2 text-[#f56336]" size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/treatments" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
