'use client'

import { useState } from 'react'
import { Flame, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CalorieCalculatorPage() {
  const [age, setAge] = useState('')
  const [gender, setGender] = useState<'male' | 'female' | 'other' | ''>('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [activity, setActivity] = useState('')
  const [calories, setCalories] = useState<number | null>(null)

  const calculateCalories = () => {
    const a = parseFloat(age)
    const h = parseFloat(height)
    const w = parseFloat(weight)
    const act = parseFloat(activity)
    
    if (a > 0 && h > 0 && w > 0 && act > 0 && gender !== '') {
      // Mifflin-St Jeor Equation
      let bmr = 0
      if (gender === 'male') {
        bmr = 10 * w + 6.25 * h - 5 * a + 5
      } else if (gender === 'female') {
        bmr = 10 * w + 6.25 * h - 5 * a - 161
      } else if (gender === 'other') {
        // For 'other', use average of male and female formulas
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
      <div className="bg-gradient-to-br from-[#ffd4b3] via-[#ffc49e] to-[#ffa07a] py-12 sm:py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Calorie Calculator</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            A tool to assess your daily calorie requirements for ideal body weight
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
                <Flame className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Calculate Your Daily Calories</h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Enter your details to calculate your daily calorie requirements
                </p>
              </div>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault()
                calculateCalories()
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                    Age <span className="text-[#f56336]">*</span>
                  </label>
                  <input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    min="1"
                    max="120"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f56336] focus:border-[#f56336] text-base transition-all"
                    placeholder="e.g., 35"
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
                    Gender <span className="text-[#f56336]">*</span>
                  </label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value as 'male' | 'female' | 'other' | '')}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f56336] focus:border-[#f56336] text-base transition-all bg-white"
                  >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="height-cal" className="block text-sm font-semibold text-gray-700 mb-2">
                    Height (cm) <span className="text-[#f56336]">*</span>
                  </label>
                  <input
                    id="height-cal"
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
                  <label htmlFor="weight-cal" className="block text-sm font-semibold text-gray-700 mb-2">
                    Weight (kg) <span className="text-[#f56336]">*</span>
                  </label>
                  <input
                    id="weight-cal"
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

              <div>
                <label htmlFor="activity" className="block text-sm font-semibold text-gray-700 mb-2">
                  Activity Level <span className="text-[#f56336]">*</span>
                </label>
                <select
                  id="activity"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f56336] focus:border-[#f56336] text-base transition-all bg-white"
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
                className="w-full bg-[#f56336] hover:bg-[#ff8c5a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Calculate Calories
              </button>
            </form>

            {calories !== null && (
              <div className="mt-8 bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 rounded-xl p-6 sm:p-8 border-2 border-[#f56336]/30 animate-fade-in shadow-lg">
                <div className="text-center">
                  <div className="inline-block bg-white rounded-full p-4 mb-4 shadow-md">
                    <div className="text-5xl sm:text-6xl font-bold text-[#f56336] mb-1">{calories.toLocaleString()}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Calories/Day</div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Daily Calorie Requirements</div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-base text-gray-700 leading-relaxed">
                      Based on your profile, you need approximately <strong className="text-[#f56336]">{calories.toLocaleString()} calories per day</strong> to maintain your current weight. This calculation uses the Mifflin-St Jeor equation, which is considered one of the most accurate methods for estimating daily calorie needs.
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

