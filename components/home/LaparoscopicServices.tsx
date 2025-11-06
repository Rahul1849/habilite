import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const laparoscopicServices = [
  {
    title: 'Leading Gallbladder Surgeon in Delhi',
    description: 'Dr Kapil Agrawal is one of the topmost and leading gallbladder stone removal surgeon in Delhi and India. He is offering robotic, single-port, and traditional laparoscopic cholecystectomies for the management of gallbladder stones.',
    link: '/laparoscopic-surgery/gallbladder-surgery',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80',
  },
  {
    title: 'Expert Hernia Surgeon in Delhi',
    description: 'Dr Kapil Agrawal is a well-known hernia specialist surgeon in Delhi and India who is offering a complete range of hernia surgeries. He performs laparoscopic and robotic hernia repair with excellent outcomes.',
    link: '/laparoscopic-surgery/hernia-surgery',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&auto=format&q=80',
  },
  {
    title: 'Appendicitis Surgeon in Delhi',
    description: 'Dr Kapil Agrawal is one of the best laparoscopic surgeons for appendicitis. He has performed some of the most difficult appendicectomies laparoscopically with excellent outcomes.',
    link: '/laparoscopic-surgery/appendix-surgery',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&auto=format&q=80',
  },
  {
    title: 'GERD & Hiatus Hernia Treatment in Delhi',
    description: 'Dr Kapil Agrawal performs advanced laparoscopic and robotic surgeries for the management of hiatus hernia and gastro-oesophageal reflux disease, who fails to respond to medical management.',
    link: '/laparoscopic-surgery/rectal-prolapse-surgery',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&auto=format&q=80',
  },
]

export default function LaparoscopicServices() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900 px-4 sm:px-0 break-words">
          Laparoscopic and Robotic Surgery by <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Dr. Kapil Agrawal</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {laparoscopicServices.map((service, index) => (
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

