import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'

export const metadata: Metadata = {
  title: 'Surgery for Diabetes in Delhi | Metabolic Surgery Expert Dr. Kapil Agrawal',
  description: 'Expert metabolic surgery for diabetes in Delhi, India by Dr. Kapil Agrawal. Surgery for diabetes is extremely beneficial if performed after proper patient selection. 23 years experience, 7000+ successful surgeries. Book consultation for diabetes surgery in Delhi.',
  keywords: [
    'surgery for diabetes delhi',
    'metabolic surgery delhi',
    'diabetes surgery delhi',
    'best diabetes surgeon delhi',
    'bariatric surgery for diabetes delhi',
    'diabetes treatment delhi',
    'Dr. Kapil Agrawal diabetes surgery',
  ],
  openGraph: {
    title: 'Surgery for Diabetes in Delhi | Metabolic Surgery Expert Dr. Kapil Agrawal',
    description: 'Expert metabolic surgery for diabetes by Dr. Kapil Agrawal in Delhi. Excellent results with proper patient selection.',
    url: 'https://www.habiliteclinics.com/bariatrics/surgery-for-diabetes',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatrics/surgery-for-diabetes',
  },
}

export default function SurgeryForDiabetesPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Image */}
      <div className="container-custom mb-8">
        <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
          <Image
            src="/images/diabetes-surgeon-delhi-india.webp"
            alt="Surgery for Diabetes in Delhi - Dr. Kapil Agrawal | Metabolic Surgery Expert | Diabetes Treatment"
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
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">surgery-for-diabetes-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Surgery for Diabetes in <span className="text-[#0891b2]">Delhi, India</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Metabolic surgery performed in patients suffering from diabetes is extremely beneficial if performed after proper patient selection, fulfilling all the criteria to undergo this surgery. Dr. Kapil Agrawal has been delivering excellent results.
          </p>
          <CallUsButton />
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Metabolic Surgery for Diabetes</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Metabolic surgery performed in patients suffering from diabetes is extremely beneficial if performed after proper patient selection, fulfilling all the criteria to undergo this surgery. Dr. Kapil Agrawal has been delivering excellent results.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With 23 years of experience and 7000+ successful surgeries, Dr. Kapil Agrawal carefully evaluates each patient to determine if they are suitable candidates for metabolic surgery, ensuring optimal results and improved quality of life.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8">
                <CostCalculator serviceName="Surgery for Diabetes" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">How Metabolic Surgery Helps Diabetes</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Improved Blood Sugar Control',
                    description: 'Metabolic surgery helps regulate blood glucose levels by altering the digestive system, leading to better diabetes management.',
                  },
                  {
                    title: 'Potential Diabetes Remission',
                    description: 'Many patients experience significant improvement or complete remission of type 2 diabetes after metabolic surgery.',
                  },
                  {
                    title: 'Reduced Medication Dependency',
                    description: 'Patients often require less diabetes medication or may be able to discontinue medication entirely after successful surgery.',
                  },
                  {
                    title: 'Better Overall Health',
                    description: 'Along with diabetes improvement, patients also experience weight loss and improved cardiovascular health.',
                  },
                ].map((benefit, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Patient Selection Criteria</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Proper patient selection is crucial for successful metabolic surgery outcomes. Dr. Kapil Agrawal evaluates patients based on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'BMI and weight criteria',
                  'Diabetes duration and control',
                  'Age and overall health',
                  'Commitment to lifestyle changes',
                  'Previous treatment response',
                  'Medical history assessment',
                ].map((criterion, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{criterion}</span>
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
                    <p className="text-gray-700 text-sm">Most patients can return to normal activities within 2-4 weeks after metabolic surgery, with regular monitoring of blood sugar levels.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments are essential to monitor diabetes improvement, adjust medications, and ensure optimal recovery.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Surgery for Diabetes"
                serviceSlug="surgery-for-diabetes"
              />
            </div>
          </div>
        </div>

        {/* Post-operative Care Section - Full Width Centered */}
        <PostOperativeCare />

        {/* WhatsApp Expert Chat - Full Width Centered */}
        <WhatsAppExpertChat serviceName="Surgery for Diabetes" />
      </div>
    </div>
  )
}

