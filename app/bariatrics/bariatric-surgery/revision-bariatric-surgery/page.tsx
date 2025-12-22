import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Revision Bariatric Surgery in Delhi | Habilite Clinics',
  description: 'This page has moved. You will be redirected to the updated revision bariatric surgery page.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyRevisionSurgeryPage() {
  redirect('/bariatric-surgeon-in-delhi-india/revision-surgeries')
}

