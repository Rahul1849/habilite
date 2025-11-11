import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const laparoscopicServices = [
  {
    name: 'Gallbladder Surgery',
    slug: 'gallbladder-surgery',
    description: 'Minimally invasive gallbladder stone removal with faster recovery and minimal scarring.',
    image: 'https://picsum.photos/600/400?random=1',
  },
  {
    name: 'Hernia Surgery',
    slug: 'hernia-surgery',
    description: 'Advanced laparoscopic and robotic hernia repair with excellent outcomes.',
    image: 'https://picsum.photos/600/400?random=2',
  },
  {
    name: 'Rectal Prolapse Surgery',
    slug: 'rectal-prolapse-surgery',
    description: 'Expert surgical treatment for rectal prolapse using minimally invasive techniques.',
    image: 'https://picsum.photos/600/400?random=3',
  },
  {
    name: 'Appendix Surgery',
    slug: 'appendix-surgery',
    description: 'Laparoscopic appendectomy for appendicitis with quick recovery.',
    image: 'https://picsum.photos/600/400?random=4',
  },
]

export default function LaparoscopicSurgeryPage() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {laparoscopicServices.map((service) => (
            <Link
              key={service.slug}
              href={`/laparoscopic-surgery/${service.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
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

