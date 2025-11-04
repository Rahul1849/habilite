'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Service } from '@/data/services'

interface TreatmentsFilterProps {
  categories: string[]
  services: Service[]
}

export default function TreatmentsFilter({ categories, services }: TreatmentsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search treatments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {['All', ...categories].map((category) => (
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
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
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
              />
              <div className="absolute top-4 left-4 bg-primary-500 text-white px-4 py-2 rounded-full text-2xl">
                {service.icon}
              </div>
              {service.featured && (
                <div className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="text-sm text-primary-600 font-semibold mb-2">
                {service.category}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {service.shortDescription}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-primary-600 font-semibold">View Details</div>
                <ArrowRight className="text-primary-500 group-hover:translate-x-2 transition-transform" size={20} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No treatments found matching your search.</p>
        </div>
      )}
    </>
  )
}
