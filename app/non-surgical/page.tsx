import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Non-Surgical Treatments',
  description: 'Comprehensive non-surgical treatment options and consultations at Habilite Clinics.',
}

const services = [
  {
    id: '1',
    name: 'Consultation',
    description: 'Expert medical consultations for surgical and non-surgical treatment options.',
    href: '/non-surgical/consultation',
  },
  {
    id: '2',
    name: 'Follow-up Care',
    description: 'Comprehensive post-operative care and monitoring for optimal recovery.',
    href: '/non-surgical/follow-up',
  },
  {
    id: '3',
    name: 'Nutrition Counseling',
    description: 'Personalized nutrition plans to support recovery and overall health.',
    href: '/non-surgical/nutrition',
  },
]

export default function NonSurgicalPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-[#1a4d7a] to-[#2c5f8a] text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Non-Surgical Treatments</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive care and consultation services
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-[#1a4d7a] font-semibold">
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

