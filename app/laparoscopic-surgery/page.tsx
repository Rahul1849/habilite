'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

const laparoscopicServices = [
  {
    title: 'Leading Gallbladder Surgeon in Delhi',
    description: 'Dr Kapil Agrawal is one of the topmost and leading gallbladder stone removal surgeon in Delhi and India. He is offering robotic, single-port, and traditional laparoscopic cholecystectomies for the management of gallbladder stones.',
    link: '/best-gallbladder-stone-surgeon-delhi',
    image: '/images/gallbladder-surgery-delhi.jpg',
  },
  {
    title: 'Expert Hernia Surgeon in Delhi',
    description: 'Dr Kapil Agrawal is a well-known hernia specialist surgeon in Delhi and India who is offering a complete range of hernia surgeries. He performs laparoscopic and robotic hernia repair with excellent outcomes.',
    link: '/best-hernia-surgeon-in-delhi',
    image: '/images/hernia-surgery-delhi.jpg',
  },
  {
    title: 'Appendicitis Surgeon in Delhi',
    description: 'Dr Kapil Agrawal is one of the best laparoscopic surgeons for appendicitis. He has performed some of the most difficult appendicectomies laparoscopically with excellent outcomes.',
    link: '/best-appendix-surgeon-in-delhi',
    image: '/images/appendix-surgery-delhi.jpg',
  },
  {
    title: 'GERD & Hiatus Hernia Surgery in Delhi',
    description: 'Dedicated reflux management program offering diagnostics, laparoscopic repair, robotic assistance, and guided recovery.',
    link: '/best-hiatus-hernia-surgeon-in-delhi',
    image: '/images/gerdhiatushernia-surgery-delhi.jpg',
  },
]

export default function LaparoscopicSurgeryPage() {
  const [showAll, setShowAll] = useState(false)
  const displayedServices = showAll ? laparoscopicServices : laparoscopicServices.slice(0, 4)

  return (
    <div className="pt-20 pb-16">
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Laparoscopic Surgery</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Advanced minimally invasive surgical procedures by Dr. Kapil Agrawal
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Expert laparoscopic surgery in Delhi, India by Dr. Kapil Agrawal`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-sm font-semibold text-[#f56336] hover:text-[#ff8c5a] transition-colors"
                >
                  View More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {!showAll && laparoscopicServices.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white font-semibold rounded-lg hover:from-[#06b6d4] hover:to-[#22d3ee] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Services
              <ChevronDown size={20} className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

