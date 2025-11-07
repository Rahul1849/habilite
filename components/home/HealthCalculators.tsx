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
              <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-lg p-3 mr-4">
                <Calculator className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">BMI Calculator</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              A standard tool to gauge obesity levels based on ratio of height and weight.
            </p>
            <Link
              href="/calculators/bmi"
              className="block w-full bg-[#f56336] hover:bg-[#ff8c5a] text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Calculate
            </Link>
          </div>

          {/* Calorie Calculator */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-lg p-3 mr-4">
                <Flame className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Calorie Calculator</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              A tool to assess your daily calorie requirements for ideal body weight.
            </p>
            <Link
              href="/calculators/calorie"
              className="block w-full bg-[#f56336] hover:bg-[#ff8c5a] text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Calculate
            </Link>
          </div>

          {/* Exercise Calculator */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-lg p-3 mr-4">
                <Dumbbell className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Exercise Calculator</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              A tool to determine calorie consumption during a particular task.
            </p>
            <Link
              href="/calculators/exercise"
              className="block w-full bg-[#f56336] hover:bg-[#ff8c5a] text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Calculate
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

