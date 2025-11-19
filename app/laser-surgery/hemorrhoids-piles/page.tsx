import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Laser Piles Treatment in Delhi | Habilite Clinics',
  description: 'This page has moved. You will be redirected to the updated laser piles program at Habilite Clinics.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyHemorrhoidsPilesPage() {
  redirect('/best-laser-piles-surgeon-in-delhi')
}


