import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laser Surgery in Delhi | Advanced Laser Treatment by Dr. Kapil Agrawal',
  description: 'Expert laser surgery in Delhi, India by Dr. Kapil Agrawal. Best laser surgeon in Delhi and India. Advanced laser treatments for hemorrhoids, anal fissure, anal fistula, pilonidal sinus, lipoma, and circumcision. Minimally invasive, painless procedures with quick recovery. Book appointment for laser surgery in Delhi.',
  keywords: [
    'laser surgery delhi',
    'laser treatment delhi',
    'hemorrhoids laser surgery delhi',
    'piles laser treatment delhi',
    'anal fissure laser delhi',
    'anal fistula laser delhi',
    'pilonidal sinus laser delhi',
    'laser circumcision delhi',
    'Dr. Kapil Agrawal laser surgery',
    'best laser surgeon delhi',
  ],
  openGraph: {
    title: 'Laser Surgery in Delhi | Advanced Laser Treatment by Dr. Kapil Agrawal',
    description: 'Expert laser surgery by Dr. Kapil Agrawal in Delhi. Advanced minimally invasive laser treatments with quick recovery.',
    url: 'https://www.habiliteclinics.com/laser-surgery',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laser-surgery',
  },
}

export default function LaserSurgeryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

