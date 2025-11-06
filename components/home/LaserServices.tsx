import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const laserServices = [
  {
    title: 'Laser Piles Surgeon in Delhi',
    description: 'Dr Kapil Agrawal offers the latest and most advanced Stapler, Laser, and DGHAL procedures for the best management of piles. Dr. Kapil Agrawal always ensures that his patients get the best results with no recurrence.',
    link: '/laser-surgery/hemorrhoids-piles',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&auto=format&q=80',
  },
  {
    title: 'Anal Fissure Treatment in Delhi',
    description: 'Dr. Kapil Agrawal offers non-surgical treatment, Botox injections, and Laser surgery for the management of both acute and chronic anal fissures with the best and permanent outcomes.',
    link: '/laser-surgery/anal-fissure',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&auto=format&q=80',
  },
  {
    title: 'Anal Fistula Surgeon in Delhi',
    description: 'Dr Kapil Agrawal performs all the latest and advanced treatment options for the management of anal fistula. His procedures include Laser surgery & VAAFT technology which ensures faster recovery.',
    link: '/laser-surgery/anal-fistula',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&auto=format&q=80',
  },
  {
    title: 'Pilonidal Sinus Treatment in Delhi',
    description: 'Dr Kapil Agrawal offers advanced pilonidal sinus treatment depending upon the complexity of the disease. The treatment includes laser technology, open conventional techniques and FLAP surgeries.',
    link: '/laser-surgery/pilonidal-sinus',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80',
  },
]

export default function LaserServices() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900 px-4 sm:px-0 break-words">
          Laser Surgery by <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Dr. Kapil Agrawal</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {laserServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
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
    </section>
  )
}

