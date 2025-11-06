import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bariatrics - Habilite Clinics',
  description: 'Comprehensive bariatric surgery and weight loss solutions including gastric bypass, sleeve gastrectomy, and intragastric balloons by Dr. Kapil Agrawal in Delhi.',
}

const bariatricServices = [
  {
    name: 'Bariatric Surgery',
    slug: 'bariatric-surgery',
    description: 'Sleeve gastrectomy, gastric bypass, and duodenal jejunal bypass tailored to your needs.',
    image: 'https://picsum.photos/600/400?random=11',
  },
  {
    name: 'Non-Surgical Weight Loss Program',
    slug: 'non-surgical-weight-loss',
    description: 'Medical weight loss programs with expert nutritionists for non-surgical weight management.',
    image: 'https://picsum.photos/600/400?random=12',
  },
  {
    name: 'Surgery for Diabetes',
    slug: 'surgery-for-diabetes',
    description: 'Metabolic surgery for diabetes management with excellent results after proper patient selection.',
    image: 'https://picsum.photos/600/400?random=13',
  },
  {
    name: 'IntraGastric Balloon',
    slug: 'intragastric-balloon',
    description: 'Gastric balloon treatment for moderate weight loss with non-surgical approach.',
    image: 'https://picsum.photos/600/400?random=14',
  },
  {
    name: 'Allurion Balloon',
    slug: 'allurion-balloon',
    description: 'Swallowable gastric balloon for weight loss without endoscopy or anesthesia.',
    image: 'https://picsum.photos/600/400?random=15',
  },
  {
    name: 'Spatz Balloon',
    slug: 'spatz-balloon',
    description: 'Adjustable gastric balloon system for extended treatment duration and better results.',
    image: 'https://picsum.photos/600/400?random=16',
  },
]

export default function BariatricsPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Bariatrics</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Comprehensive weight loss solutions and metabolic surgery by Dr. Kapil Agrawal
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bariatricServices.map((service) => (
            <Link
              key={service.slug}
              href={`/bariatrics/${service.slug}`}
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

