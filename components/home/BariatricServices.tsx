import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const bariatricServices = [
  {
    title: 'Best Bariatric Surgeon in Delhi',
    description: 'Dr Kapil Agrawal offers a comprehensive range of bariatric surgeries, which include sleeve gastrectomy, gastric bypass, and duodenal jejunal bypass. The surgeries are tailored according to indications and patient preferences.',
    link: '/bariatrics/bariatric-surgery',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&auto=format&q=80',
  },
  {
    title: 'Surgery for Diabetes',
    description: 'Metabolic surgery performed in patients suffering from diabetes is extremely beneficial if performed after proper patient selection, fulfilling all the criteria to undergo this surgery. Dr Kapil Agrawal has been delivering excellent results.',
    link: '/bariatrics/surgery-for-diabetes',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&auto=format&q=80',
  },
  {
    title: 'Intra Gastric Balloon Expert in Delhi',
    description: 'Dr Kapil Agrawal specializes in the gastric balloon treatment for patients looking for a moderate amount of weight loss. He specializes in both Allurion and Spatz balloon treatment.',
    link: '/bariatrics/intragastric-balloon',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80',
  },
  {
    title: 'Medical Weight Loss Program',
    description: 'Dr Kapil Agrawal houses some of the best nutritionists who offer medical weight loss programs for patients looking for non-surgical methods for weight loss.',
    link: '/bariatrics/non-surgical-weight-loss',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&auto=format&q=80',
  },
]

export default function BariatricServices() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-orange-50/20 to-white">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900 px-4 sm:px-0 break-words">
          Weight Loss Solutions 
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bariatricServices.map((service, index) => (
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

