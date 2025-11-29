import { Metadata } from 'next'
import Link from 'next/link'
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
    url: 'https://www.habiliteclinics.com/bariatrics/bmi-calculator',
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
    canonical: 'https://www.habiliteclinics.com/bariatrics/bmi-calculator',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Bariatrics', url: '/bariatrics' },
  { name: 'BMI Calculator', url: '/bariatrics/bmi-calculator' },
])

export default function BMICalculatorPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="pt-20 pb-16 min-h-screen bg-gray-50">
        <div className="bg-gradient-primary py-12">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">BMI Calculator</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A standard tool to gauge obesity levels based on ratio of height and weight
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          <div className="max-w-2xl mx-auto">
            <BMICalculator />

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

