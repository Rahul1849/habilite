import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bariatrics & Weight Loss Surgery in Delhi | Dr. Kapil Agrawal',
  description: 'Expert bariatric surgery and weight loss solutions in Delhi, India by Dr. Kapil Agrawal. Best bariatric surgeon in Delhi and India. Sleeve gastrectomy, gastric bypass, metabolic surgery, and non-surgical weight loss programs. 23 years experience, 7000+ successful surgeries. Book appointment for weight loss surgery in Delhi.',
  keywords: [
    'bariatric surgery delhi',
    'weight loss surgery delhi',
    'gastric bypass delhi',
    'sleeve gastrectomy delhi',
    'metabolic surgery delhi',
    'Dr. Kapil Agrawal bariatrics',
    'best bariatric surgeon delhi',
    'obesity surgery delhi',
    'gastric balloon delhi',
    'non-surgical weight loss delhi',
  ],
  openGraph: {
    title: 'Bariatrics & Weight Loss Surgery in Delhi | Dr. Kapil Agrawal',
    description: 'Expert bariatric surgery and weight loss solutions by Dr. Kapil Agrawal in Delhi. 23 years experience, 7000+ successful surgeries.',
    url: 'https://www.habiliteclinics.com/bariatrics',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatrics',
  },
}

export default function BariatricsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

