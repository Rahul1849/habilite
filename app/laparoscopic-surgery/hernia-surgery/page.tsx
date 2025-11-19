import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Best Hernia Surgeon in Delhi | Habilite Clinics',
  description: 'This page has moved. You will be redirected to the updated hernia surgery program at Habilite Clinics.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyHerniaSurgeryPage() {
  redirect('/best-hernia-surgeon-in-delhi')
}


