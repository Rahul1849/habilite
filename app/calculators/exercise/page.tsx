import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
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
    url: 'https://www.habiliteclinics.com/calculators/exercise',
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
    canonical: 'https://www.habiliteclinics.com/calculators/exercise',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Calculators', url: '/calculators' },
  { name: 'Exercise Calculator', url: '/calculators/exercise' },
])

export default function ExerciseCalculatorPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
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

            <ExerciseCalculator />
          </div>
        </div>
      </div>
    </>
  )
}

