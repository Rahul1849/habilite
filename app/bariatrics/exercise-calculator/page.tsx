import { Metadata } from 'next'
import Link from 'next/link'
import ExerciseCalculator from '@/components/calculators/ExerciseCalculator'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Exercise Calculator - Calories Burned Calculator | Dr. Kapil Agrawal | Habilite Clinics',
  description: 'Calculate calories burned during exercise with our free exercise calculator. Track your workout calories for walking, running, cycling, swimming, and more. Get accurate MET-based calculations.',
  keywords: [
    'exercise calculator',
    'calories burned calculator',
    'workout calorie calculator',
    'exercise calorie counter',
    'met calculator',
    'fitness calculator',
  ],
  openGraph: {
    title: 'Exercise Calculator - Calories Burned Calculator | Dr. Kapil Agrawal',
    description: 'Calculate calories burned during exercise with our free exercise calculator. Track your workout calories.',
    url: 'https://www.habiliteclinics.com/bariatrics/exercise-calculator',
    type: 'website',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
        width: 800,
        height: 1000,
        alt: 'Exercise Calculator - Dr. Kapil Agrawal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exercise Calculator - Calories Burned Calculator',
    description: 'Calculate calories burned during exercise with our free exercise calculator.',
    images: ['https://www.habiliteclinics.com/images/dr-kapil-agrawal.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatrics/exercise-calculator',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Bariatrics', url: '/bariatrics' },
  { name: 'Exercise Calculator', url: '/bariatrics/exercise-calculator' },
])

export default function ExerciseCalculatorPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
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
            <ExerciseCalculator />

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
    </>
  )
}

