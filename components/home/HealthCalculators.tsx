import Link from 'next/link'
import { Calculator, Flame, Dumbbell } from 'lucide-react'

export default function HealthCalculators() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* BMI Calculator */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                <Calculator className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">BMI Calculator</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              A standard tool to gauge obesity levels based on ratio of height and weight.
            </p>
            <Link
              href="/bariatrics/bmi-calculator"
              className="block w-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Calculate
            </Link>
          </div>

          {/* Calorie Calculator */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                <Flame className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Calorie Calculator</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              A tool to assess your daily calorie requirements for ideal body weight.
            </p>
            <Link
              href="/bariatrics/calorie-calculator"
              className="block w-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Calculate
            </Link>
          </div>

          {/* Exercise Calculator */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                <Dumbbell className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Exercise Calculator</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              A tool to determine calorie consumption during a particular task.
            </p>
            <Link
              href="/bariatrics/exercise-calculator"
              className="block w-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Calculate
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

