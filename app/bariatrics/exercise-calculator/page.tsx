'use client'

import { useState } from 'react'
import { Dumbbell } from 'lucide-react'
import Link from 'next/link'

export default function ExerciseCalculatorPage() {
  const [exercise, setExercise] = useState('')
  const [weight, setWeight] = useState('')
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg')
  const [duration, setDuration] = useState('')
  const [caloriesBurned, setCaloriesBurned] = useState<number | null>(null)

  const exercises = [
    { name: 'Walking (3.5 mph)', met: 3.8 },
    { name: 'Running (5 mph)', met: 8.3 },
    { name: 'Cycling (moderate)', met: 6.0 },
    { name: 'Swimming', met: 7.0 },
    { name: 'Weight Training', met: 5.0 },
    { name: 'Yoga', met: 3.0 },
    { name: 'Basketball', met: 8.0 },
    { name: 'Tennis', met: 7.3 },
    { name: 'Jogging (5.5 mph)', met: 9.8 },
    { name: 'Aerobics', met: 7.0 },
    { name: 'Dancing', met: 4.8 },
    { name: 'Hiking', met: 6.0 },
  ]

  const calculateCalories = () => {
    const selectedExercise = exercises.find(e => e.name === exercise)
    let w = parseFloat(weight)
    const d = parseFloat(duration)
    
    if (weightUnit === 'lb') {
      w = w * 0.453592 // Convert pounds to kg
    }
    
    if (selectedExercise && w > 0 && d > 0) {
      // Calories = MET × weight (kg) × duration (hours)
      const calories = selectedExercise.met * w * (d / 60)
      setCaloriesBurned(Math.round(calories))
    }
  }

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-primary py-12">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Exercise Calculator</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A tool to determine calorie consumption during a particular task
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                <Dumbbell className="text-white" size={24} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Calculate Calories Burned</h2>
            </div>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                calculateCalories()
              }}
              className="space-y-5"
            >
              <div>
                <label htmlFor="exercise-ex" className="block text-sm font-semibold text-gray-700 mb-2">
                  Exercise Type <span className="text-[#0891b2]">*</span>
                </label>
                <select
                  id="exercise-ex"
                  value={exercise}
                  onChange={(e) => setExercise(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all bg-white"
                >
                  <option value="">Select exercise type</option>
                  {exercises.map((ex) => (
                    <option key={ex.name} value={ex.name}>
                      {ex.name}
                    </option>
                  ))}
                </select>
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
                <label htmlFor="duration-ex" className="block text-sm font-semibold text-gray-700 mb-2">
                  Duration (minutes) <span className="text-[#0891b2]">*</span>
                </label>
                <input
                  id="duration-ex"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  min="1"
                  max="600"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all"
                  placeholder="e.g., 30"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Calculate Calories Burned
              </button>
            </form>

            {caloriesBurned !== null && (
              <div className="mt-6 bg-gradient-to-br from-cyan-50 via-cyan-100/50 to-cyan-50 rounded-xl p-6 border-2 border-[#0891b2]/30 animate-fade-in shadow-lg">
                <div className="text-center">
                  <div className="inline-block bg-white rounded-full p-4 mb-4 shadow-md">
                    <div className="text-4xl sm:text-5xl font-bold text-[#0891b2] mb-1">{caloriesBurned}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Calories</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Calories Burned</div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      You burned approximately <strong className="text-[#0891b2]">{caloriesBurned} calories</strong> during {exercise} for {duration} minutes.
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

