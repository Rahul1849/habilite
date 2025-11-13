import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const laparoscopicServices = [
  {
    title: 'Leading Gallbladder Surgeon in Delhi',
    description: 'Dr Kapil Agrawal is one of the topmost and leading gallbladder stone removal surgeon in Delhi and India. He is offering robotic, single-port, and traditional laparoscopic cholecystectomies for the management of gallbladder stones.',
    link: '/laparoscopic-surgery/gallbladder-surgery',
    image: '/images/gallbladder-surgery-delhi.jpg',
  },
  {
    title: 'Expert Hernia Surgeon in Delhi',
    description: 'Dr Kapil Agrawal is a well-known hernia specialist surgeon in Delhi and India who is offering a complete range of hernia surgeries. He performs laparoscopic and robotic hernia repair with excellent outcomes.',
    link: '/laparoscopic-surgery/hernia-surgery',
    image: '/images/hernia-surgery-delhi.jpg',
  },
  {
    title: 'Appendicitis Surgeon in Delhi',
    description: 'Dr Kapil Agrawal is one of the best laparoscopic surgeons for appendicitis. He has performed some of the most difficult appendicectomies laparoscopically with excellent outcomes.',
    link: '/laparoscopic-surgery/appendix-surgery',
    image: '/images/appendix-surgery-delhi.jpg',
  },
  {
    title: 'GERD & Hiatus Hernia Treatment in Delhi',
    description: 'Dr Kapil Agrawal performs advanced laparoscopic and robotic surgeries for the management of hiatus hernia and gastro-oesophageal reflux disease, who fails to respond to medical management.',
    link: '/laparoscopic-surgery/rectal-prolapse-surgery',
    image: '/images/gerdhiatushernia-surgery-delhi.jpg',
  },
]

export default function LaparoscopicServices() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 break-words">
            <span className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] bg-clip-text text-transparent">Laparoscopic and Robotic Surgery in Delhi, India</span>
          </h2>
          <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-[#0891b2] to-[#06b6d4]"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4]"></div>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-[#06b6d4] via-[#0891b2] to-transparent"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {laparoscopicServices.map((service, index) => (
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
      </div>
    </section>
  )
}

