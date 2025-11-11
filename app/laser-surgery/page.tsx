import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const laserServices = [
  {
    name: 'Hemorrhoids / Piles',
    slug: 'hemorrhoids-piles',
    description: 'Latest laser, stapler, and DGHAL procedures for effective piles treatment with no recurrence.',
    image: 'https://picsum.photos/600/400?random=5',
  },
  {
    name: 'Anal Fistula',
    slug: 'anal-fistula',
    description: 'Advanced laser surgery and VAAFT technology for faster recovery and effective treatment.',
    image: 'https://picsum.photos/600/400?random=6',
  },
  {
    name: 'Pilonidal Sinus',
    slug: 'pilonidal-sinus',
    description: 'Advanced pilonidal sinus treatment using laser technology and FLAP surgeries.',
    image: 'https://picsum.photos/600/400?random=7',
  },
  {
    name: 'Anal Fissure',
    slug: 'anal-fissure',
    description: 'Non-surgical treatment, Botox injections, and laser surgery for both acute and chronic anal fissures.',
    image: 'https://picsum.photos/600/400?random=8',
  },
  {
    name: 'Lipoma',
    slug: 'lipoma',
    description: 'Laser-assisted removal of lipomas with minimal scarring and quick recovery.',
    image: 'https://picsum.photos/600/400?random=9',
  },
  {
    name: 'Circumcision',
    slug: 'circumcision',
    description: 'Laser circumcision procedure for precise, painless, and quick recovery.',
    image: 'https://picsum.photos/600/400?random=10',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {laserServices.map((service) => (
            <Link
              key={service.slug}
              href={`/laser-surgery/${service.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex items-center bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="ml-2 text-[#f56336]" size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

