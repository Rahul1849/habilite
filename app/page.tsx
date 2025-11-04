import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import WhyChoose from '@/components/home/WhyChoose'
import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import GalleryPreview from '@/components/home/GalleryPreview'
import VideoSection from '@/components/home/VideoSection'
import DoctorsPreview from '@/components/home/DoctorsPreview'
import CTASection from '@/components/home/CTASection'
import StructuredData from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Expert laparoscopic and robotic surgeries by Dr. Kapil Agrawal in Delhi. Advanced minimally invasive treatment for gallbladder, hernia, and gastrointestinal conditions.',
  openGraph: {
    title: 'Habilite Clinics - Leading Laparoscopic & Robotic Surgery',
    description: 'Expert laparoscopic and robotic surgeries by Dr. Kapil Agrawal in Delhi.',
  },
}

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Habilite Clinics',
  description: 'Leading laparoscopic and robotic surgery center in Delhi',
  url: 'https://www.habiliteclinics.com',
  telephone: '+91-98765-43210',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressCountry: 'IN',
  },
  medicalSpecialty: ['Laparoscopic Surgery', 'Robotic Surgery', 'General Surgery'],
}

export default function HomePage() {
  return (
    <>
      <StructuredData data={homePageSchema} />
      <Hero />
      <ServicesOverview />
      <WhyChoose />
      <TestimonialsSlider />
      <GalleryPreview />
      <VideoSection />
      <DoctorsPreview />
      <CTASection />
    </>
  )
}
