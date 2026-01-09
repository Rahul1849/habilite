import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Best Gastric Bypass Surgery in Delhi | Habilite Clinics',
  description: 'This page has moved. You will be redirected to the updated gastric bypass page.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyGastricBypassPage() {
  redirect('/bariatric-surgeon-in-delhi-india/gastric-bypass-surgery')
}
