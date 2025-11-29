import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import BMICalculator from '@/components/calculators/BMICalculator'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'BMI Calculator - Free Online Tool | Dr. Kapil Agrawal | Habilite Clinics',
  description: 'Calculate your Body Mass Index (BMI) with our free online BMI calculator. Determine if you are underweight, healthy weight, overweight, or obese. Get personalized recommendations from Dr. Kapil Agrawal.',
  keywords: [
    'bmi calculator',
    'bmi calculator online',
    'body mass index calculator',
    'bmi calculator india',
    'bmi calculator delhi',
    'obesity calculator',
    'weight calculator',
  ],
  openGraph: {
    title: 'BMI Calculator - Free Online Tool | Dr. Kapil Agrawal',
    description: 'Calculate your Body Mass Index (BMI) with our free online BMI calculator. Get personalized recommendations.',
    url: 'https://www.habiliteclinics.com/calculators/bmi',
    type: 'website',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
        width: 800,
        height: 1000,
        alt: 'BMI Calculator - Dr. Kapil Agrawal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMI Calculator - Free Online Tool',
    description: 'Calculate your Body Mass Index (BMI) with our free online BMI calculator.',
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
    canonical: 'https://www.habiliteclinics.com/calculators/bmi',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Calculators', url: '/calculators' },
  { name: 'BMI Calculator', url: '/calculators/bmi' },
])

export default function BMICalculatorPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16 min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-[#ffd4b3] via-[#ffc49e] to-[#ffa07a] py-12 sm:py-16">
          <div className="container-custom text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">BMI Calculator</h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
              A standard tool to gauge obesity levels based on ratio of height and weight
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

            <BMICalculator />
          </div>
        </div>
      </div>
    </>
  )
}

