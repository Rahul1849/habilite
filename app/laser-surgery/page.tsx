import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const laserServices = [
  {
    title: 'Laser Piles Surgeon in Delhi',
    description: 'Dr Kapil Agrawal offers the latest and most advanced Stapler, Laser, and DGHAL procedures for the best management of piles. Dr. Kapil Agrawal always ensures that his patients get the best results with no recurrence.',
    link: '/best-laser-piles-surgeon-in-delhi',
    image: '/images/piles-surgery-delhi.jpg',
  },
  {
    title: 'Anal Fissure Treatment in Delhi',
    description: 'Dr. Kapil Agrawal offers non-surgical treatment, Botox injections, and Laser surgery for the management of both acute and chronic anal fissures with the best and permanent outcomes.',
    link: '/laser-surgery/anal-fissure',
    image: '/images/analfissure-surgery-delhi.jpg',
  },
  {
    title: 'Anal Fistula Surgeon in Delhi',
    description: 'Dr Kapil Agrawal performs all the latest and advanced treatment options for the management of anal fistula. His procedures include Laser surgery & VAAFT technology which ensures faster recovery.',
    link: '/best-laser-fistula-treatment',
    image: '/images/analfistula-surgery-delhi.jpg',
  },
  {
    title: 'Pilonidal Sinus Treatment in Delhi',
    description: 'Dr Kapil Agrawal offers advanced pilonidal sinus treatment depending upon the complexity of the disease. The treatment includes laser technology, open conventional techniques and FLAP surgeries.',
    link: '/best-laser-pilonidal-sinus-treatment',
    image: '/images/pilonidalsinus-surgery-delhi.jpg',
  },
]

export default function LaserSurgeryPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Laser Surgery</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Advanced laser surgery treatments with precision and minimal recovery time
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {laserServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Expert laser surgery treatment in Delhi, India by Dr. Kapil Agrawal`}
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
      </div>
    </div>
  )
}

