import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Anal Fistula Treatment in Delhi | Habilite Clinics',
  description: 'This page has moved. You will be redirected to the updated Anal Fistula Treatment program at Habilite Clinics.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyAnalFistulaPage() {
  redirect('/best-laser-fistula-treatment')
}
