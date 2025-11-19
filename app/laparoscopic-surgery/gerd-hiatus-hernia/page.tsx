import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'GERD & Hiatus Hernia Surgery in Delhi | Habilite Clinics',
  description: 'This page has moved. You will be redirected to the updated GERD & hiatus hernia program at Habilite Clinics.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyGerdPage() {
  redirect('/best-hiatus-hernia-surgeon-in-delhi')
}

