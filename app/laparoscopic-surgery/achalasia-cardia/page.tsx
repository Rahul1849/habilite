import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'

export const metadata: Metadata = {
  title: 'Achalasia Cardia Surgery in Delhi | Best Surgeon Dr. Kapil Agrawal',
  description: 'Expert achalasia cardia surgery in Delhi, India by Dr. Kapil Agrawal. Best laparoscopic surgeon for achalasia cardia treatment with excellent outcomes. 23 years experience, 7000+ successful surgeries. Book consultation for achalasia cardia surgery in Delhi.',
  keywords: [
    'achalasia cardia surgery delhi',
    'achalasia cardia treatment delhi',
    'laparoscopic achalasia cardia surgery delhi',
    'best achalasia cardia surgeon delhi',
    'achalasia treatment delhi',
    'heller myotomy delhi',
    'Dr. Kapil Agrawal achalasia cardia',
  ],
  openGraph: {
    title: 'Achalasia Cardia Surgery in Delhi | Best Surgeon Dr. Kapil Agrawal',
    description: 'Expert achalasia cardia surgery by Dr. Kapil Agrawal in Delhi. Best laparoscopic surgeon with 23 years experience.',
    url: 'https://www.habiliteclinics.com/laparoscopic-surgery/achalasia-cardia',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laparoscopic-surgery/achalasia-cardia',
  },
}

export default function AchalasiaCardiaPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Image */}
      <div className="container-custom mb-8">
        <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
          <Image
            src="/images/laparoscopic-surgery-delhi.jpg"
            alt="Achalasia Cardia Surgery in Delhi - Dr. Kapil Agrawal | Best Laparoscopic Surgeon | Expert Treatment"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
            priority
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container-custom mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">achalasia-cardia-surgery-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Achalasia Cardia Surgery in <span className="text-[#0891b2]">Delhi, India</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Dr. Kapil Agrawal is one of the best laparoscopic surgeons for achalasia cardia treatment. He performs advanced laparoscopic Heller myotomy and fundoplication procedures with excellent outcomes and minimal complications.
          </p>
          <CallUsButton />
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Achalasia Cardia</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Achalasia cardia is a rare disorder affecting the esophagus, where the lower esophageal sphincter fails to relax properly, making it difficult for food and liquids to pass into the stomach. This condition causes difficulty swallowing, regurgitation, and chest pain.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal specializes in laparoscopic Heller myotomy, a minimally invasive surgical procedure that cuts the tight muscle of the lower esophagus to allow food to pass through. With 23 years of experience, he provides expert care for achalasia cardia with excellent long-term outcomes.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8">
                <CostCalculator serviceName="Achalasia Cardia Surgery" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Laparoscopic Achalasia Cardia Surgery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Minimally invasive approach',
                  'Faster recovery time',
                  'Reduced pain and discomfort',
                  'Lower risk of complications',
                  'Shorter hospital stay',
                  'Long-term symptom relief',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                    <p className="text-gray-700 text-sm">Most patients can return to normal activities within 2-3 weeks after laparoscopic achalasia cardia surgery, with gradual improvement in swallowing function.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Achalasia Cardia Surgery"
                serviceSlug="achalasia-cardia"
              />
            </div>
          </div>
        </div>

        {/* Post-operative Care Section - Full Width Centered */}
        <PostOperativeCare />

        {/* WhatsApp Expert Chat - Full Width Centered */}
        <WhatsAppExpertChat serviceName="Achalasia Cardia Surgery" />
      </div>
    </div>
  )
}

