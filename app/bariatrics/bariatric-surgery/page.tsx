import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'

export const metadata: Metadata = {
  title: 'Bariatric Surgery in Delhi | Best Bariatric Surgeon Dr. Kapil Agrawal',
  description: 'Expert bariatric surgery in Delhi, India by Dr. Kapil Agrawal. Best bariatric surgeon offering sleeve gastrectomy, gastric bypass, and duodenal jejunal bypass. 23 years experience, 7000+ successful surgeries. Book consultation for weight loss surgery in Delhi.',
  keywords: [
    'bariatric surgery delhi',
    'best bariatric surgeon delhi',
    'weight loss surgery delhi',
    'sleeve gastrectomy delhi',
    'gastric bypass delhi',
    'bariatric surgery india',
    'Dr. Kapil Agrawal bariatric',
  ],
  openGraph: {
    title: 'Bariatric Surgery in Delhi | Best Bariatric Surgeon Dr. Kapil Agrawal',
    description: 'Expert bariatric surgery by Dr. Kapil Agrawal in Delhi. Best bariatric surgeon with 23 years experience.',
    url: 'https://www.habiliteclinics.com/bariatrics/bariatric-surgery',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatrics/bariatric-surgery',
  },
}

export default function BariatricSurgeryPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Image */}
      <div className="relative w-full aspect-video sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/7] mb-8 overflow-hidden">
        <Image
          src="/images/bariatric-surgeon-delhi.png"
          alt="Best Bariatric Surgeon in Delhi - Dr. Kapil Agrawal | Expert Weight Loss Surgery | 23 Years Experience"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={95}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* Hero Content */}
      <div className="container-custom mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">bariatric-surgeon-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Best Bariatric Surgeon in <span className="text-[#0891b2]">Delhi, India</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Dr. Kapil Agrawal offers a comprehensive range of bariatric surgeries, which include sleeve gastrectomy, gastric bypass, and duodenal jejunal bypass. The surgeries are tailored according to indications and patient preferences.
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Bariatric Surgery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bariatric surgery, also known as weight loss surgery, helps people with severe obesity lose weight and improve their health. Dr. Kapil Agrawal is recognized as one of the best bariatric surgeons in Delhi and India, with extensive experience in various bariatric procedures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With 23 years of experience and 7000+ successful surgeries, Dr. Kapil Agrawal offers personalized bariatric surgery solutions tailored to each patient&#39;s needs and medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Types of Bariatric Surgery</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Sleeve Gastrectomy',
                    description: 'Removes a portion of the stomach, creating a smaller stomach pouch. Most popular bariatric procedure.',
                  },
                  {
                    title: 'Gastric Bypass',
                    description: 'Creates a small stomach pouch and reroutes the small intestine. Highly effective for weight loss.',
                  },
                  {
                    title: 'Duodenal Jejunal Bypass',
                    description: 'Advanced procedure that combines sleeve gastrectomy with intestinal bypass for optimal results.',
                  },
                ].map((procedure, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-2">{procedure.title}</h3>
                    <p className="text-gray-700 text-sm">{procedure.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Bariatric Surgery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Significant weight loss',
                  'Improvement in diabetes',
                  'Better cardiovascular health',
                  'Reduced joint pain',
                  'Improved quality of life',
                  'Long-term weight maintenance',
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
                    <p className="text-gray-700 text-sm">Most patients can return to normal activities within 2-4 weeks after bariatric surgery, with full recovery in 6-8 weeks.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Bariatric Surgery"
                serviceSlug="bariatric-surgery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

