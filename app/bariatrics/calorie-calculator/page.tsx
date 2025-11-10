'use client'

import { useState } from 'react'
import { Flame } from 'lucide-react'
import Link from 'next/link'

export default function CalorieCalculatorPage() {
  const [age, setAge] = useState('')
  const [gender, setGender] = useState<'male' | 'female' | 'other' | ''>('')
  const [heightCm, setHeightCm] = useState('')
  const [heightFeet, setHeightFeet] = useState('')
  const [heightInches, setHeightInches] = useState('')
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ftin'>('cm')
  const [weight, setWeight] = useState('')
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg')
  const [activity, setActivity] = useState('')
  const [calories, setCalories] = useState<number | null>(null)

  const calculateCalories = () => {
    const a = parseFloat(age)
    let h = 0
    let w = parseFloat(weight)
    const act = parseFloat(activity)
    
    // Convert height to cm
    if (heightUnit === 'ftin') {
      const feet = parseFloat(heightFeet) || 0
      const inches = parseFloat(heightInches) || 0
      if (feet > 0 || inches > 0) {
        const totalInches = feet * 12 + inches
        h = totalInches * 2.54 // Convert inches to cm
      }
    } else {
      h = parseFloat(heightCm) || 0
    }
    
    // Convert weight to kg
    if (weightUnit === 'lb') {
      w = w * 0.453592 // Convert pounds to kg
    }
    
    if (a > 0 && h > 0 && w > 0 && act > 0 && gender !== '') {
      // Mifflin-St Jeor Equation
      let bmr = 0
      if (gender === 'male') {
        bmr = 10 * w + 6.25 * h - 5 * a + 5
      } else if (gender === 'female') {
        bmr = 10 * w + 6.25 * h - 5 * a - 161
      } else if (gender === 'other') {
        const maleBMR = 10 * w + 6.25 * h - 5 * a + 5
        const femaleBMR = 10 * w + 6.25 * h - 5 * a - 161
        bmr = (maleBMR + femaleBMR) / 2
      }
      
      const dailyCalories = Math.round(bmr * act)
      setCalories(dailyCalories)
    }
  }

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-primary py-12">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Calorie Calculator</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A tool to assess your daily calorie requirements for ideal body weight
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                <Flame className="text-white" size={24} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Calculate Your Daily Calories</h2>
            </div>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                calculateCalories()
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="age-cal" className="block text-sm font-semibold text-gray-700 mb-2">
                    Age <span className="text-[#0891b2]">*</span>
                  </label>
                  <input
                    id="age-cal"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    min="1"
                    max="120"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all"
                    placeholder="e.g., 35"
                  />
                </div>
                <div>
                  <label htmlFor="gender-cal" className="block text-sm font-semibold text-gray-700 mb-2">
                    Gender <span className="text-[#0891b2]">*</span>
                  </label>
                  <select
                    id="gender-cal"
                    value={gender}
                    onChange={(e) => setGender(e.target.value as 'male' | 'female' | 'other' | '')}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all bg-white"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
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

              <div>
                <label htmlFor="activity-cal" className="block text-sm font-semibold text-gray-700 mb-2">
                  Activity Level <span className="text-[#0891b2]">*</span>
                </label>
                <select
                  id="activity-cal"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all bg-white"
                >
                  <option value="">Select activity level</option>
                  <option value="1.2">Sedentary (little or no exercise)</option>
                  <option value="1.375">Lightly active (light exercise 1-3 days/week)</option>
                  <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option>
                  <option value="1.725">Very active (hard exercise 6-7 days/week)</option>
                  <option value="1.9">Extra active (very hard exercise, physical job)</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Calculate Calories
              </button>
            </form>

            {calories !== null && (
              <div className="mt-6 bg-gradient-to-br from-cyan-50 via-cyan-100/50 to-cyan-50 rounded-xl p-6 border-2 border-[#0891b2]/30 animate-fade-in shadow-lg">
                <div className="text-center">
                  <div className="inline-block bg-white rounded-full p-4 mb-4 shadow-md">
                    <div className="text-4xl sm:text-5xl font-bold text-[#0891b2] mb-1">{calories.toLocaleString()}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Calories/Day</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Daily Calorie Requirements</div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Based on your profile, you need approximately <strong className="text-[#0891b2]">{calories.toLocaleString()} calories per day</strong> to maintain your current weight. This calculation uses the Mifflin-St Jeor equation.
                    </p>
                  </div>
                </div>
              </div>
            )}
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

