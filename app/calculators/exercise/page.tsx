'use client'

import { useState } from 'react'
import { Dumbbell, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ExerciseCalculatorPage() {
  const [exercise, setExercise] = useState('')
  const [weight, setWeight] = useState('')
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
    const w = parseFloat(weight)
    const d = parseFloat(duration)
    
    if (selectedExercise && w > 0 && d > 0) {
      // Calories = MET × weight (kg) × duration (hours)
      const calories = selectedExercise.met * w * (d / 60)
      setCaloriesBurned(Math.round(calories))
    }
  }

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-[#ffd4b3] via-[#ffc49e] to-[#ffa07a] py-12 sm:py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Exercise Calculator</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            A tool to determine calorie consumption during a particular task
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
                <Dumbbell className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Calculate Calories Burned</h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Select your exercise type and enter your details to calculate calories burned
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
              <div>
                <label htmlFor="exercise" className="block text-sm font-semibold text-gray-700 mb-2">
                  Exercise Type <span className="text-[#f56336]">*</span>
                </label>
                <select
                  id="exercise"
                  value={exercise}
                  onChange={(e) => setExercise(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f56336] focus:border-[#f56336] text-base transition-all bg-white"
                >
                  <option value="">Select exercise type</option>
                  {exercises.map((ex) => (
                    <option key={ex.name} value={ex.name}>
                      {ex.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="weight-ex" className="block text-sm font-semibold text-gray-700 mb-2">
                    Weight (kg) <span className="text-[#f56336]">*</span>
                  </label>
                  <input
                    id="weight-ex"
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
                <div>
                  <label htmlFor="duration" className="block text-sm font-semibold text-gray-700 mb-2">
                    Duration (minutes) <span className="text-[#f56336]">*</span>
                  </label>
                  <input
                    id="duration"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    min="1"
                    max="600"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f56336] focus:border-[#f56336] text-base transition-all"
                    placeholder="e.g., 30"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#f56336] hover:bg-[#ff8c5a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Calculate Calories Burned
              </button>
            </form>

            {caloriesBurned !== null && (
              <div className="mt-8 bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 rounded-xl p-6 sm:p-8 border-2 border-[#f56336]/30 animate-fade-in shadow-lg">
                <div className="text-center">
                  <div className="inline-block bg-white rounded-full p-4 mb-4 shadow-md">
                    <div className="text-5xl sm:text-6xl font-bold text-[#f56336] mb-1">{caloriesBurned}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Calories</div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Calories Burned</div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-base text-gray-700 leading-relaxed mb-2">
                      You burned approximately <strong className="text-[#f56336]">{caloriesBurned} calories</strong> during {exercise} for {duration} minutes.
                    </p>
                    <p className="text-sm text-gray-600">
                      This calculation is based on MET (Metabolic Equivalent of Task) values, which estimate energy expenditure for various physical activities.
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

