import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calorie Calculator - Daily Calorie Requirements | Habilite Clinics',
  description: 'Calculate your daily calorie requirements for ideal body weight. Professional calorie calculator using Mifflin-St Jeor equation with height, weight, age, gender, and activity level.',
  keywords: ['calorie calculator', 'daily calories', 'calorie requirements', 'BMR calculator', 'metabolic rate'],
}

export default function CalorieCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

