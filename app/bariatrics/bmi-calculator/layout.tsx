import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BMI Calculator - Calculate Your Body Mass Index | Habilite Clinics',
  description: 'Calculate your BMI (Body Mass Index) to gauge obesity levels. Professional BMI calculator with height and weight unit conversion (cm/ft-in, kg/lb).',
  keywords: ['BMI calculator', 'body mass index', 'obesity calculator', 'weight calculator', 'health calculator'],
}

export default function BMICalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

