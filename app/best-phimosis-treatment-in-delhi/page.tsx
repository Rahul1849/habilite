import { Metadata } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp, Heart, Activity, Zap, Shield } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import PhimosisFAQ from './PhimosisFAQ'
const RecoveryTimeline = dynamic(() => import('@/components/services/RecoveryTimeline'), { ssr: false })

export const metadata: Metadata = {
  title: 'Best Treatment for Phimosis in Delhi - Dr. Kapil Agrawal | Expert Surgeon | 23 Years Experience',
  description: 'Expert phimosis treatment in Delhi, India by Dr. Kapil Agrawal. Advanced surgical techniques including ZSR circumcision, preputioplasty, and laser circumcision. 23 years experience, internationally trained expert. Book consultation.',
  keywords: [
    'phimosis treatment delhi',
    'phimosis surgery delhi',
    'best phimosis treatment delhi',
    'phimosis specialist delhi',
    'tight foreskin treatment delhi',
    'phimosis circumcision delhi',
    'Dr. Kapil Agrawal phimosis',
    'phimosis doctor delhi',
  ],
  openGraph: {
    title: 'Best Treatment for Phimosis in Delhi - Dr. Kapil Agrawal',
    description: 'Expert phimosis treatment by Dr. Kapil Agrawal in Delhi. Advanced surgical techniques with contemporary methods, skilled experts, and empathy.',
    url: 'https://www.habiliteclinics.com/best-phimosis-treatment-in-delhi',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/best-phimosis-treatment-in-delhi',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does phimosis treatment cause pain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With advanced techniques like ZSR circumcision, the procedure is nearly painless. Most patients feel only mild discomfort for a short time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much time does it take for recovery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients start normal routine in about a week. Full healing usually takes 2–3 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to treat phimosis without surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, mild cases can be treated using creams and exercises. Severe ones require surgical intervention.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the treatment be covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most insurance policies cover the surgery for phimosis. Habilite Clinics also provides cashless and EMI options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the issue recur after the surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, after being treated by circumcision, phimosis does not normally come back.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Phimosis Treatment',
  description: 'Expert phimosis treatment using advanced surgical techniques including ZSR circumcision, preputioplasty, and laser circumcision with contemporary methods.',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
  },
  procedureType: 'Phimosis Surgery',
  followup: 'Post-surgery wound care guidance and review visit if required',
  preparation: 'Pre-surgery evaluation, anaesthesia fitness, and infection control protocol',
}

export default function PhimosisTreatmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        suppressHydrationWarning
      />

      <div className="pt-20 pb-16">
        {/* Hero Content */}
        <div className="container-custom mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-phimosis-treatment-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Treatment for Phimosis in <span className="text-[#0891b2]">Delhi</span>
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
              <Award size={16} className="text-[#f59e0b]" />
              <span>Expert Surgeon with Over 23 Years of Experience</span>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Phimosis is a prevalent but delicate condition that occurs in men of various ages. At Habilite Clinics, patients get the best treatment for phimosis in Delhi with contemporary techniques, skilled experts, and empathy. The clinic is recognized for its sophisticated urological services, carrying out conservative or surgical treatment, depending on the severity of the condition.
            </p>
            
            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: 'Expert Surgeon with Over 23 Years of Experience' },
                { icon: Users, text: 'Internationally Trained Expert - Dr. Kapil Agrawal' },
                { icon: Clock, text: 'Painless Surgery for Fast Recovery' },
                { icon: CheckCircle2, text: 'Cashless Insurance Facility Available' },
                { icon: TrendingUp, text: 'Discharge in 25-30 Minutes' },
              ].map((highlight) => (
                <div
                  key={highlight.text}
                  className="flex items-center gap-2 bg-[#0891b2]/10 px-4 py-2 rounded-full"
                >
                  <highlight.icon className="text-[#0891b2] w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <CallUsButton />
            </div>
          </div>
        </div>

        <div className="container-custom section-padding">
          <div className="max-w-5xl mx-auto">
            {/* Service Image */}
            <div className="mb-8">
              <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
                <Image
                  src="/images/best-phimosis-treatment-in-delhi.webp"
                  alt="Best Treatment for Phimosis in Delhi by Dr Kapil Agrawal" title='Treatment for Phimosis in Delhi by Dr Kapil Agrawal'
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* What is Phimosis */}
            <section className="w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">What is Phimosis?</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
                Phimosis happens when the foreskin of the penis can&apos;t move back over the head, i.e., the glans. Although normal in young boys, phimosis in adults can lead to pain, pain during sex, difficulty in keeping the area clean, and even urinary issues. Untreated, it can enhance the risk of infections, inflammation, and other complications of the penis.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                At Habilite Clinics, Dr. Kapil Agrawal Senior Consultant at Apollo Group of Hospitals prioritize early treatment and diagnosis so patients can escape long-term consequences and enhance their quality of life.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8 flex justify-center">
                <div className="w-full max-w-5xl">
                  <CostCalculator serviceName="Phimosis Treatment" />
                </div>
              </div>
            </section>

            {/* Common Causes */}
            <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Common Causes of Phimosis</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Phimosis can arise from multiple causes. In children, it can be physiological and may resolve as they mature. In men, it is typically caused by:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Recurrent infections or balanitis</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Poor hygiene</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Diabetes or other medical issues</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Scar tissue from a previous injury or infection</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Long-term irritation of the foreskin</span>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mt-6">
                Knowing the cause gives doctors at Habilite Clinics the ability to determine the right treatment option.
              </p>
            </section>

            {/* When to Consult */}
            <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">When to Consult a Doctor for Phimosis Symptoms</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                Most men have phimosis without knowing they need medical attention. Some of the frequent symptoms are:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Pain or discomfort during retraction of the foreskin</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Problem cleaning under the foreskin</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Painful erection or sexual intercourse</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Frequent urinary infections</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">It may cause redness, swelling, or repeated infections in the foreskin</span>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mt-6 text-center max-w-3xl mx-auto">
                In the case of these symptoms, you can get the correct diagnosis and treatment by consulting an expert at Habilite Clinics.
              </p>
            </section>

            {/* Non-Surgical Treatments */}
            <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Non-Surgical Treatments for Phimosis</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For mild conditions, gentle stretching exercises and topical steroid creams are suggested. These reduce inflammation, soften the foreskin, and enhance retraction. The professionals instruct patients in proper application and hygiene to achieve effective outcomes.
              </p>
            </section>

            {/* Surgical Treatments */}
            <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 text-center">Surgical Treatments for Phimosis</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                For severe to moderate phimosis, surgery is usually the best option. Habilite Clinics uses sophisticated techniques to minimize pain and promote quick recovery.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Activity className="text-[#0891b2] mr-2" size={24} />
                    ZSR Circumcision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The most common treatment, where the tight foreskin is removed. This advanced technique uses a stapler device that automatically cuts and seals, resulting in minimal bleeding, no stitches, and faster recovery.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Zap className="text-[#0891b2] mr-2" size={24} />
                    Preputioplasty
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    It is a smaller surgery where the foreskin is only widened, not removed. Good for men who want to keep their foreskin.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Shield className="text-[#0891b2] mr-2" size={24} />
                    Laser Circumcision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A very modern way, done with a laser. It gives more accuracy, very little bleeding, and healing also becomes quicker.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mt-6 text-center max-w-3xl mx-auto">
                Which procedure is best depends on the patient&apos;s problem, his comfort, and what the doctor suggests.
              </p>
            </section>

            {/* Recovery Time and Aftercare */}
            <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Recovery Time and Aftercare of Phimosis Surgery</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Recovery after phimosis surgery, like circumcision, is mostly smooth. At Habilite Clinics, patients get full guidance about cleaning, wound care, and daily activities. Most men start normal work in about a week, and full healing comes in 2–3 weeks. Follow-up checkups are also done to see recovery and clear doubts.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                    <p className="text-gray-700 text-sm">Most patients start normal routine in about a week. Full healing usually takes 2–3 weeks.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Follow-up checkups are done to see recovery and clear doubts. Full guidance about cleaning, wound care, and daily activities is provided.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Possible Complications and Safety */}
            <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Possible Complications and Safety</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Treatment for phimosis at Habilite Clinics is very safe. Still, small issues can happen like swelling, a little bleeding, or short-term pain. Doctors explain all these in advance and give medicines to manage them. With expert care and modern techniques, serious problems are very rare.
              </p>
            </section>

            {/* Why Choose Dr. Kapil Agrawal */}
            <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Why Choose Dr. Kapil Agrawal for Phimosis Treatment in Delhi?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal is known as one of the trusted surgeons in Delhi for treating phimosis. He carries 23+ years of surgical work and advanced knowledge in urology. Many patients with foreskin issues have been treated by him successfully. He offers both simple conservative care and advanced surgeries like laser ZSR circumcision, which is safe and less painful.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Habilite Clinics, Dr. Kapil and his team treat not only the condition but also work towards patient safety, privacy, comfort, and long-term health. The clinic is well known as one of Delhi NCR&apos;s best places for phimosis treatment due to the following benefits:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Experienced Specialists</p>
                      <p className="text-gray-700 text-sm">More than four decades of experience in treating phimosis and other urological problems.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Advanced Technology</p>
                      <p className="text-gray-700 text-sm">Latest methods like laser circumcision for accurate, safe, and speedy recovery.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Same-Day Discharge</p>
                      <p className="text-gray-700 text-sm">Procedures are short, and patients return home quickly.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Reliable Outcomes</p>
                      <p className="text-gray-700 text-sm">Consistently high recovery and satisfaction rates.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Easy on Pocket</p>
                      <p className="text-gray-700 text-sm">Costs are explained clearly, with support for insurance and EMI plans.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recovery Timeline */}
            <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-md border border-[#0891b2]/10 p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Aftercare Milestones</h2>
              <RecoveryTimeline title="Phimosis Treatment Recovery Timeline" />
            </section>
          </div>

          {/* Consultation Form */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <ConsultationForm 
                serviceName="Phimosis Treatment"
                serviceSlug="best-phimosis-treatment-in-delhi"
              />
            </div>
          </div>

          {/* Post-operative Care Section */}
          <div className="mt-12">
            <PostOperativeCare />
          </div>

          {/* WhatsApp Expert Chat */}
          <div className="mt-8">
            <WhatsAppExpertChat serviceName="Phimosis Treatment" />
          </div>

          {/* Contact Section */}
          <div className="max-w-5xl mx-auto mt-12 bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Contact Dr. Kapil Agrawal Today</h2>
            <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-4">
              Book your appointment with Dr. Kapil Agrawal, one of the best phimosis treatment specialists in Delhi, India today to schedule your consultation.
            </p>
            <div className="text-center mt-6">
              <p className="text-gray-700 font-semibold mb-2">You can contact us on:</p>
              <p className="text-[#0891b2] text-lg font-semibold">+91-9999456455, +91-9910024564</p>
            </div>
          </div>

          {/* FAQs */}
          <div className="container-custom space-y-12 mt-12">
            <div className="max-w-5xl mx-auto space-y-12">
              <PhimosisFAQ />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

