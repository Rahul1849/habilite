'use client'

import { useState } from 'react'
import { Calculator } from 'lucide-react'
import Link from 'next/link'

export default function BMICalculatorPage() {
  const [heightCm, setHeightCm] = useState('')
  const [heightFeet, setHeightFeet] = useState('')
  const [heightInches, setHeightInches] = useState('')
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ftin'>('cm')
  const [weight, setWeight] = useState('')
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg')
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState('')

  const calculateBMI = () => {
    let h = 0
    let w = parseFloat(weight)
    
    // Convert height to meters
    if (heightUnit === 'ftin') {
      const feet = parseFloat(heightFeet) || 0
      const inches = parseFloat(heightInches) || 0
      if (feet > 0 || inches > 0) {
        const totalInches = feet * 12 + inches
        h = totalInches * 2.54 / 100 // Convert inches to cm, then to meters
      }
    } else {
      const cm = parseFloat(heightCm)
      if (cm > 0) {
        h = cm / 100 // Convert cm to meters
      }
    }
    
    // Convert weight to kg
    if (weightUnit === 'lb') {
      w = w * 0.453592 // Convert pounds to kg
    }
    
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h)
      setBmi(parseFloat(bmiValue.toFixed(1)))
      
      // BMI ranges matching the reference
      if (bmiValue < 16) {
        setCategory('Underweight')
      } else if (bmiValue < 22.5) {
        setCategory('Healthy weight')
      } else if (bmiValue < 27.5) {
        setCategory('Overweight')
      } else if (bmiValue < 32.5) {
        setCategory('Obese')
      } else if (bmiValue < 37.5) {
        setCategory('Severely obese')
      } else {
        setCategory('Morbidly obese')
      }
    }
  }

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-primary py-12">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">BMI Calculator</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A standard tool to gauge obesity levels based on ratio of height and weight
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                <Calculator className="text-white" size={24} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Calculate Your BMI</h2>
            </div>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                calculateBMI()
              }}
              className="space-y-5"
            >
              {/* Height Section with Toggle */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How tall are you? <span className="text-[#0891b2]">*</span>
                </label>
                
                {/* Height Unit Toggle */}
                <div className="flex items-center gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setHeightUnit('cm')}
                    className={`flex-1 px-3 py-2 rounded-lg font-semibold text-sm transition-all ${
                      heightUnit === 'cm'
                        ? 'bg-[#0891b2] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    cm
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeightUnit('ftin')}
                    className={`flex-1 px-3 py-2 rounded-lg font-semibold text-sm transition-all ${
                      heightUnit === 'ftin'
                        ? 'bg-[#0891b2] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ft/in
                  </button>
                </div>
                
                {/* Height Input Fields */}
                {heightUnit === 'cm' ? (
                  <input
                    type="number"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    min="50"
                    max="250"
                    step="0.1"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all"
                    placeholder="e.g., 175"
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1.5">ft</label>
                      <input
                        type="number"
                        value={heightFeet}
                        onChange={(e) => setHeightFeet(e.target.value)}
                        min="3"
                        max="8"
                        step="1"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all"
                        placeholder="5"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1.5">in</label>
                      <input
                        type="number"
                        value={heightInches}
                        onChange={(e) => setHeightInches(e.target.value)}
                        min="0"
                        max="11"
                        step="0.1"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all"
                        placeholder="8"
                      />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Weight Section with Toggle */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How much do you weigh? <span className="text-[#0891b2]">*</span>
                </label>
                
                {/* Weight Unit Toggle */}
                <div className="flex items-center gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setWeightUnit('kg')}
                    className={`flex-1 px-3 py-2 rounded-lg font-semibold text-sm transition-all ${
                      weightUnit === 'kg'
                        ? 'bg-[#0891b2] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    kg
                  </button>
                  <button
                    type="button"
                    onClick={() => setWeightUnit('lb')}
                    className={`flex-1 px-3 py-2 rounded-lg font-semibold text-sm transition-all ${
                      weightUnit === 'lb'
                        ? 'bg-[#0891b2] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    lb
                  </button>
                </div>
                
                {/* Weight Input Field */}
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  min={weightUnit === 'kg' ? '20' : '44'}
                  max={weightUnit === 'kg' ? '300' : '660'}
                  step="0.1"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all"
                  placeholder={weightUnit === 'kg' ? 'e.g., 70' : 'e.g., 154'}
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Calculate BMI
              </button>
            </form>

            {bmi !== null && (
              <div className="mt-6 bg-gradient-to-br from-cyan-50 via-cyan-100/50 to-cyan-50 rounded-xl p-6 border-2 border-[#0891b2]/30 animate-fade-in shadow-lg">
                <div className="text-center">
                  <div className="inline-block bg-white rounded-full p-4 mb-4 shadow-md">
                    <div className="text-4xl sm:text-5xl font-bold text-[#0891b2] mb-1">{bmi}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">BMI</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{category}</div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {category === 'Underweight' && 'Your BMI indicates you are underweight. Consider consulting a nutritionist for a healthy weight gain plan.'}
                      {category === 'Healthy weight' && 'Great! Your BMI is within the healthy range. Maintain your healthy lifestyle with a balanced diet and regular exercise.'}
                      {category === 'Overweight' && 'Your BMI indicates you are overweight. Consider lifestyle changes and consultation with healthcare professionals.'}
                      {category === 'Obese' && 'Your BMI indicates obesity. It is recommended to consult with a healthcare professional for a comprehensive weight management plan.'}
                      {category === 'Severely obese' && 'Your BMI indicates severe obesity. Please consult with a healthcare professional immediately for medical guidance and treatment options.'}
                      {category === 'Morbidly obese' && 'Your BMI indicates morbid obesity. It is highly recommended to consult with a healthcare professional immediately for comprehensive medical evaluation and treatment.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* BMI Range Table */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 mb-3">BMI Range Indication</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-900">BMI Range</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-900">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">&lt; 16</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">Underweight</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">16 - 22.5</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">Healthy weight</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">22.5 - 27.5</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">Overweight</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">27.5 - 32.5</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">Obese</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">32.5 - 37.5</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">Severely obese</td>
                    </tr>
                    <tr className="bg-red-100">
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">37.5 and over</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">Morbidly obese</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/bariatrics"
              className="text-[#0891b2] hover:text-[#06b6d4] font-semibold transition-colors"
            >
              ← Back to Bariatrics
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

