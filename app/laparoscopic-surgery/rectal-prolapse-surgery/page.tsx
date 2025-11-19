import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Rectal Prolapse Surgery in Delhi | Habilite Clinics',
  description: 'This page has moved. You will be redirected to the updated rectal prolapse program at Habilite Clinics.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyRectalProlapsePage() {
  redirect('/best-rectal-prolapse-surgeon-in-delhi')
}


