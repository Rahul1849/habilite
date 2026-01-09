import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laparoscopic Surgery in Delhi | Best Laparoscopic Surgeon Dr. Kapil Agrawal',
  description: 'Expert laparoscopic surgery in Delhi, India by Dr. Kapil Agrawal. Best laparoscopic surgeon in Delhi and India. Advanced minimally invasive procedures for gallbladder surgery, hernia surgery, appendix surgery, and rectal prolapse. 23 years experience, 7000+ successful surgeries at Apollo Hospitals. Book appointment for laparoscopic surgery in Delhi.',
  keywords: [
    'laparoscopic surgery delhi',
    'best laparoscopic surgeon delhi',
    'gallbladder surgery delhi',
    'hernia surgery delhi',
    'minimally invasive surgery delhi',
    'Dr. Kapil Agrawal laparoscopic',
    'laparoscopic surgeon delhi ncr',
    'keyhole surgery delhi',
    'appendix surgery delhi',
    'rectal prolapse surgery delhi',
  ],
  openGraph: {
    title: 'Laparoscopic Surgery in Delhi | Best Laparoscopic Surgeon Dr. Kapil Agrawal',
    description: 'Expert laparoscopic surgery by Dr. Kapil Agrawal in Delhi. Advanced minimally invasive procedures with 23 years experience.',
    url: 'https://www.habiliteclinics.com',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com',
  },
}

export default function LaparoscopicSurgeryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

