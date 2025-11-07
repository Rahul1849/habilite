import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exercise Calculator - Calories Burned Calculator | Habilite Clinics',
  description: 'Calculate calories burned during exercise. Free exercise calculator to determine calorie consumption during various physical activities.',
  keywords: ['exercise calculator', 'calories burned', 'workout calculator', 'fitness calculator', 'exercise calories', 'MET calculator'],
  openGraph: {
    title: 'Exercise Calculator - Calories Burned Calculator',
    description: 'Calculate calories burned during exercise and various physical activities.',
    type: 'website',
    url: 'https://www.habiliteclinics.com/calculators/exercise',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/calculators/exercise',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const exerciseCalculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Exercise Calculator',
  description: 'A tool to determine calorie consumption during a particular task',
  url: 'https://www.habiliteclinics.com/calculators/exercise',
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

export default function ExerciseCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(exerciseCalculatorSchema) }}
        suppressHydrationWarning
      />
      {children}
    </>
  )
}

