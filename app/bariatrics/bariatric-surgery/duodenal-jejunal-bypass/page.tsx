import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Duodenal Jejunal Bypass Surgery in Delhi | Habilite Clinics',
  description: 'This page has moved. You will be redirected to the updated duodenal jejunal bypass page.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyDuodenalJejunalBypassPage() {
  redirect('/bariatric-surgeon-in-delhi-india/duodenal-jejunal-bypass-surgery')
}
