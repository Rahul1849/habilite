'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calculator, Flame, Dumbbell } from 'lucide-react'

const bariatricServices = [
  {
    title: 'Best Bariatric Surgeon in Delhi',
    description: 'Dr Kapil Agrawal offers a comprehensive range of bariatric surgeries, which include sleeve gastrectomy, gastric bypass, and duodenal jejunal bypass. The surgeries are tailored according to indications and patient preferences.',
    link: '/bariatric-surgeon-in-delhi-india',
    image: '/images/bariatric-surgery-delhi.jpg',
  },
  {
    title: 'Surgery for Diabetes',
    description: 'Metabolic surgery performed in patients suffering from diabetes is extremely beneficial if performed after proper patient selection, fulfilling all the criteria to undergo this surgery. Dr Kapil Agrawal has been delivering excellent results.',
    link: '/surgery-for-diabetes',
    image: '/images/diabetes-surgery-delhi.jpg',
  },
  {
    title: 'Intra Gastric Balloon Expert in Delhi',
    description: 'Dr Kapil Agrawal specializes in the gastric balloon treatment for patients looking for a moderate amount of weight loss. He specializes in both Allurion and Spatz balloon treatment.',
    link: '/endoscopic-intra-gastric-balloon',
    image: '/images/instragastricballoon-surgery-delhi.jpg',
  },
  {
    title: 'Medical Weight Loss Program',
    description: 'Dr Kapil Agrawal houses some of the best nutritionists who offer medical weight loss programs for patients looking for non-surgical methods for weight loss.',
    link: '/medical-weight-loss-program',
    image: '/images/weightloss-program-delhi.jpg',
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
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                  <Calculator className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">BMI Calculator</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A standard tool to gauge obesity levels based on ratio of height and weight
              </p>
              <div className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50">
                Calculate BMI
              </div>
            </Link>

            <Link
              href="/bariatrics/calorie-calculator"
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all text-left block"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                  <Flame className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Calorie Calculator</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A tool to assess your daily calorie requirements for ideal body weight
              </p>
              <div className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50">
                Calculate Calories
              </div>
            </Link>

            <Link
              href="/bariatrics/exercise-calculator"
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all text-left block"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                  <Dumbbell className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Exercise Calculator</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A tool to determine calorie consumption during a particular task
              </p>
              <div className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50">
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
    </div>
  )
}
