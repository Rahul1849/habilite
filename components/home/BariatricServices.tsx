import Link from 'next/link'
import Image from 'next/image'

const bariatricServices = [
  {
    title: 'Best Bariatric Surgeon in Delhi',
    description: 'Dr Kapil Agrawal offers a comprehensive range of bariatric surgeries, which include sleeve gastrectomy, gastric bypass, and duodenal jejunal bypass. The surgeries are tailored according to indications and patient preferences.',
    link: '/bariatric-surgeon-in-delhi-india',
    image: '/images/bariatric-surgery-delhi.webp',
  },
  {
    title: 'Surgery for Diabetes',
    description: 'Metabolic surgery performed in patients suffering from diabetes is extremely beneficial if performed after proper patient selection, fulfilling all the criteria to undergo this surgery. Dr Kapil Agrawal has been delivering excellent results.',
    link: '/surgery-for-diabetes',
    image: '/images/diabetes-surgery-delhi.webp',
  },
  {
    title: 'Intra Gastric Balloon Expert in Delhi',
    description: 'Dr Kapil Agrawal specializes in the gastric balloon treatment for patients looking for a moderate amount of weight loss. He specializes in both Allurion and Spatz balloon treatment.',
    link: '/endoscopic-intra-gastric-balloon',
    image: '/images/instragastricballoon-surgery-delhi.webp',
  },
  {
    title: 'Medical Weight Loss Program',
    description: 'Dr Kapil Agrawal houses some of the best nutritionists who offer medical weight loss programs for patients looking for non-surgical methods for weight loss.',
    link: '/medical-weight-loss-program',
    image: '/images/weightloss-program-delhi.jpg',
  },
]

export default function BariatricServices() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-orange-50/20 to-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 break-words">
            <span className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] bg-clip-text text-transparent">Weight Loss Solutions in Delhi, India</span>
          </h2>
          <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-[#0891b2] to-[#06b6d4]"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4]"></div>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-[#06b6d4] via-[#0891b2] to-transparent"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bariatricServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Expert bariatric surgery and weight loss treatment in Delhi, India by Dr. Kapil Agrawal`}
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
                  className="inline-flex text-sm font-semibold text-[#f56336] hover:text-[#ff8c5a] transition-colors"
                >
                  {`Discover comprehensive details about ${service.title}`}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

