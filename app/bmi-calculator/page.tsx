import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BMI Calculator - Calculate Your Body Mass Index | Habilite Clinics',
  description:
    'Use the BMI Calculator by Habilite Clinics to understand your Body Mass Index and check eligibility for bariatric surgery with Dr. Kapil Agrawal.',
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bmi-calculator',
  },
}

export { default } from '../bariatrics/bmi-calculator/page'

