import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calorie Calculator - Daily Calorie Requirements | Habilite Clinics',
  description: 'Calculate your daily calorie requirements for ideal body weight. Free calorie calculator to assess your daily calorie needs based on activity level.',
  keywords: ['calorie calculator', 'daily calories', 'calorie requirements', 'BMR calculator', 'TDEE calculator', 'calorie tool'],
  openGraph: {
    title: 'Calorie Calculator - Daily Calorie Requirements',
    description: 'Calculate your daily calorie requirements for ideal body weight.',
    type: 'website',
    url: 'https://www.habiliteclinics.com/calculators/calorie',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/calculators/calorie',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const calorieCalculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calorie Calculator',
  description: 'A tool to assess your daily calorie requirements for ideal body weight',
  url: 'https://www.habiliteclinics.com/calculators/calorie',
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

export default function CalorieCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calorieCalculatorSchema) }}
        suppressHydrationWarning
      />
      {children}
    </>
  )
}

