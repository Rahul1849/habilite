'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calculator, Flame, Dumbbell } from 'lucide-react'

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
        {/* Health Calculators Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Health Calculators</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use our calculators to assess your health metrics and plan your weight management journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/bariatrics/bmi-calculator"
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all text-left block"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                  <Calculator className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">BMI Calculator</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A standard tool to gauge obesity levels based on ratio of height and weight
              </p>
              <div className="bg-gradient-to-r from-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50">
                Calculate BMI
              </div>
            </Link>

            <Link
              href="/bariatrics/calorie-calculator"
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all text-left block"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                  <Flame className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Calorie Calculator</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A tool to assess your daily calorie requirements for ideal body weight
              </p>
              <div className="bg-gradient-to-r from-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50">
                Calculate Calories
              </div>
            </Link>

            <Link
              href="/bariatrics/exercise-calculator"
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all text-left block"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                  <Dumbbell className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Exercise Calculator</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A tool to determine calorie consumption during a particular task
              </p>
              <div className="bg-gradient-to-r from-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50">
                Calculate Calories Burned
              </div>
            </Link>
          </div>
        </div>

        {/* Bariatric Services */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Bariatric Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive weight loss and metabolic surgery options
            </p>
          </div>
          
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
                  <div className="flex items-center text-[#0891b2] font-semibold group-hover:text-[#06b6d4] transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
