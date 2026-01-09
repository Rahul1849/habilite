import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Best Mini Gastric Bypass Surgery in Delhi | Habilite Clinics',
  description: 'This page has moved. You will be redirected to the updated mini gastric bypass page.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyMiniGastricBypassPage() {
  redirect('/bariatric-surgeon-in-delhi-india/mini-gastric-bypass-surgery')
}
