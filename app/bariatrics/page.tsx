import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Bariatrics | Habilite Clinics',
  description: 'Comprehensive bariatric and metabolic surgery care by Dr. Kapil Agrawal in Delhi NCR.',
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatrics',
  },
}

export default function BariatricsPage() {
  redirect('/bariatric-surgeon-in-delhi-india')
}

