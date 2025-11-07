import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BMI Calculator - Calculate Your Body Mass Index | Habilite Clinics',
  description: 'Free BMI calculator to gauge obesity levels based on ratio of height and weight. Calculate your Body Mass Index instantly with our accurate tool.',
  keywords: ['BMI calculator', 'Body Mass Index', 'obesity calculator', 'weight calculator', 'health calculator', 'BMI tool'],
  openGraph: {
    title: 'BMI Calculator - Calculate Your Body Mass Index',
    description: 'Free BMI calculator to gauge obesity levels based on ratio of height and weight.',
    type: 'website',
    url: 'https://www.habiliteclinics.com/calculators/bmi',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/calculators/bmi',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const bmiCalculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'BMI Calculator',
  description: 'A standard tool to gauge obesity levels based on ratio of height and weight',
  url: 'https://www.habiliteclinics.com/calculators/bmi',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  provider: {
    '@type': 'MedicalOrganization',
    name: 'Habilite Clinics',
    url: 'https://www.habiliteclinics.com',
  },
}

export default function BMICalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bmiCalculatorSchema) }}
        suppressHydrationWarning
      />
      {children}
    </>
  )
}

