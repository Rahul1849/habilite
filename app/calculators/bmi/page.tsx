'use client'

import { useState } from 'react'
import { Calculator, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function BMICalculatorPage() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState('')

  const calculateBMI = () => {
    const h = parseFloat(height) / 100 // Convert cm to meters
    const w = parseFloat(weight)
    
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h)
      setBmi(parseFloat(bmiValue.toFixed(1)))
      
      if (bmiValue < 18.5) {
        setCategory('Underweight')
      } else if (bmiValue < 25) {
        setCategory('Normal weight')
      } else if (bmiValue < 30) {
        setCategory('Overweight')
      } else {
        setCategory('Obese')
      }
    }
  }

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-[#ffd4b3] via-[#ffc49e] to-[#ffa07a] py-12 sm:py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">BMI Calculator</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            A standard tool to gauge obesity levels based on ratio of height and weight
          </p>
        </div>
      </div>

      <div className="container-custom py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-[#f56336] hover:text-[#ff8c5a] mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 pb-6 border-b border-gray-200">
              <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-xl p-4 mb-4 sm:mb-0 sm:mr-6">
                <Calculator className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Calculate Your BMI</h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Enter your height and weight to calculate your Body Mass Index
                </p>
              </div>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault()
                calculateBMI()
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="height" className="block text-sm font-semibold text-gray-700 mb-2">
                    Height (cm) <span className="text-[#f56336]">*</span>
                  </label>
                  <input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    min="50"
                    max="250"
                    step="0.1"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f56336] focus:border-[#f56336] text-base transition-all"
                    placeholder="e.g., 175"
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 mb-2">
                    Weight (kg) <span className="text-[#f56336]">*</span>
                  </label>
                  <input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    min="20"
                    max="300"
                    step="0.1"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f56336] focus:border-[#f56336] text-base transition-all"
                    placeholder="e.g., 70"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Calculate BMI
              </button>
            </form>

            {bmi !== null && (
              <div className="mt-8 bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 rounded-xl p-6 sm:p-8 border-2 border-[#f56336]/30 animate-fade-in shadow-lg">
                <div className="text-center">
                  <div className="inline-block bg-white rounded-full p-4 mb-4 shadow-md">
                    <div className="text-5xl sm:text-6xl font-bold text-[#f56336] mb-1">{bmi}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">BMI</div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{category}</div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-base text-gray-700 leading-relaxed">
                      {category === 'Underweight' && 'Your BMI indicates you are underweight. Consider consulting a nutritionist for a healthy weight gain plan tailored to your needs.'}
                      {category === 'Normal weight' && 'Great! Your BMI is within the healthy range. Maintain your healthy lifestyle with a balanced diet and regular exercise.'}
                      {category === 'Overweight' && 'Your BMI indicates you are overweight. Consider lifestyle changes, diet modifications, and consultation with healthcare professionals for a personalized weight management plan.'}
                      {category === 'Obese' && 'Your BMI indicates obesity. It is highly recommended to consult with a healthcare professional for a comprehensive weight management plan and medical guidance.'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

