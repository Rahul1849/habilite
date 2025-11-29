import { Metadata } from 'next'
import Link from 'next/link'
import CalorieCalculator from '@/components/calculators/CalorieCalculator'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Calorie Calculator - Free Online Tool | Daily Calorie Requirements | Dr. Kapil Agrawal',
  description: 'Calculate your daily calorie requirements with our free online calorie calculator. Based on Mifflin-St Jeor equation. Get personalized calorie recommendations for weight management from Dr. Kapil Agrawal.',
  keywords: [
    'calorie calculator',
    'daily calorie calculator',
    'calorie requirement calculator',
    'bmr calculator',
    'calorie intake calculator',
    'weight management calculator',
  ],
  openGraph: {
    title: 'Calorie Calculator - Free Online Tool | Dr. Kapil Agrawal',
    description: 'Calculate your daily calorie requirements with our free online calorie calculator. Get personalized recommendations.',
    url: 'https://www.habiliteclinics.com/bariatrics/calorie-calculator',
    type: 'website',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
        width: 800,
        height: 1000,
        alt: 'Calorie Calculator - Dr. Kapil Agrawal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calorie Calculator - Free Online Tool',
    description: 'Calculate your daily calorie requirements with our free online calorie calculator.',
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
    canonical: 'https://www.habiliteclinics.com/bariatrics/calorie-calculator',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Bariatrics', url: '/bariatrics' },
  { name: 'Calorie Calculator', url: '/bariatrics/calorie-calculator' },
])

export default function CalorieCalculatorPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
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
            <CalorieCalculator />

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

