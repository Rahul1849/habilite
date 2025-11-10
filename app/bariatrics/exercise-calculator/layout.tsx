import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exercise Calculator - Calories Burned Calculator | Habilite Clinics',
  description: 'Calculate calories burned during exercise. Professional exercise calculator with MET values for various activities including running, cycling, swimming, and more.',
  keywords: ['exercise calculator', 'calories burned', 'workout calculator', 'MET calculator', 'exercise calories'],
}

export default function ExerciseCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

