import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awards & Recognition',
  description: 'Awards and recognition received by Habilite Clinics and Dr. Kapil Agrawal.',
}

export default function AwardsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

