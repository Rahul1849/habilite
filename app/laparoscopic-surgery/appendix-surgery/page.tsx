import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Appendix Surgery in Delhi | Habilite Clinics',
  description: 'This page has moved. You will be redirected to the updated appendix surgery program at Habilite Clinics.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyAppendixSurgeryPage() {
  redirect('/best-appendix-surgeon-in-delhi')
}


