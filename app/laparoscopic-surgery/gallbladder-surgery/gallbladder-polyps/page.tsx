import { Metadata } from 'next'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp, AlertTriangle } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import GallbladderPolypsFAQ from './GallbladderPolypsFAQ'
import GallbladderPolypsTestimonials from './GallbladderPolypsTestimonials'

export const metadata: Metadata = {
  title: 'Best Gallbladder Polyps Treatment in Delhi - Dr. Kapil Agrawal | Expert Evaluation & Surgery',
  description:
    'Expert gallbladder polyps treatment in Delhi by Dr. Kapil Agrawal. Advanced evaluation, accurate diagnosis, and minimally invasive surgical options. 23+ years experience, 7000+ surgeries. Book consultation now.',
  keywords: [
    'gallbladder polyps treatment delhi',
    'gallbladder polyp surgery delhi',
    'gallbladder polyp specialist delhi',
    'gallbladder polyp removal',
    'cholecystectomy for polyps',
    'gallbladder polyp evaluation',
    'Dr. Kapil Agrawal gallbladder polyps',
    'best gallbladder polyp surgeon delhi',
  ],
  openGraph: {
    title: 'Best Gallbladder Polyps Treatment in Delhi - Dr. Kapil Agrawal',
    description:
      'Expert gallbladder polyps treatment with advanced evaluation and minimally invasive surgery. 23+ years experience, evidence-based treatment.',
    url: 'https://www.habiliteclinics.com/laparoscopic-surgery/gallbladder-surgery/gallbladder-polyps',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laparoscopic-surgery/gallbladder-surgery/gallbladder-polyps',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are gallbladder polyps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gallbladder polyps are abnormal tissue growths on the inner wall of the gallbladder. They are quite common, and most of these polyps are harmless (non-cancerous). However, larger polyps may require monitoring or surgical removal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do all gallbladder polyps need surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, not all gallbladder polyps require surgical intervention. Small polyps (less than 10mm) are usually monitored regularly. Polyps larger than 10mm or those showing signs of growth may require gallbladder removal due to cancer risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size of gallbladder polyp is dangerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Polyps larger than 10mm are considered higher risk and may require surgical removal. Polyps between 6-10mm are monitored closely, while those smaller than 6mm are usually benign and monitored periodically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can gallbladder polyps become cancerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most gallbladder polyps are benign. However, larger polyps (especially those over 10mm) have a higher risk of being cancerous or becoming cancerous over time, which is why they may require surgical removal.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Gallbladder Polyps Treatment',
  description: 'Expert gallbladder polyps treatment with advanced evaluation and minimally invasive surgery by Dr. Kapil Agrawal in Delhi.',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
  },
  procedureType: 'Laparoscopic Cholecystectomy',
}

export default function GallbladderPolypsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} suppressHydrationWarning />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        suppressHydrationWarning
      />

      <div className="pt-20 pb-16">
        <div className="container-custom mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">gallbladder-polyps-treatment-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Gallbladder Polyps Treatment in <span className="text-[#0891b2]">Delhi</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Expert Surgeon with Over 23 Years of Experience | Internationally Trained Expert | Painless Surgery for Fast Recovery | Cashless Insurance Facility Available | Discharge within 24 hours
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Experience' },
                { icon: Users, text: '7000+ Successful Surgeries' },
                { icon: TrendingUp, text: 'Evidence-Based Treatment' },
                { icon: Clock, text: '24-Hour Discharge' },
              ].map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#0891b2]/10 px-4 py-2 rounded-full">
                  <highlight.icon className="text-[#0891b2] w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">{highlight.text}</span>
                </div>
              ))}
            </div>
            <CallUsButton />
          </div>
        </div>

        <div className="container-custom space-y-12">
          <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <ConsultationForm serviceName="Gallbladder Polyps Treatment" serviceSlug="gallbladder-polyps" />
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#0891b2] via-[#06b6d4] to-[#22d3ee] text-white p-6 space-y-4">
              <h3 className="text-2xl font-semibold">Talk to a Care Coordinator</h3>
              <p className="text-white/90">We help you with reports, insurance, hospital selection, and priority appointments.</p>
              <div className="bg-white/10 rounded-xl p-4 text-sm text-white/90 space-y-1">
                <p>📞 +91 9999-456-455</p>
                <p>📞 +91 9910-024-564</p>
                <p>✉️ contact@habiliteclinics.com</p>
              </div>
              <CallUsButton />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Expert Gallbladder Polyps Treatment by Dr. Kapil Agrawal</h2>
              <p>
                Dr. Kapil Agrawal is one of the best gallbladder polyp specialists in Delhi, India. He offers the best and most customized treatment for different types of gallbladder diseases, including gallbladder polyps. Not all gallbladder polyps require surgical
                intervention, and Dr. Kapil Agrawal offers the best management based on international guidelines. With 23 years of experience and more than 7000 laparoscopic surgeries under his belt, he is one of the best surgeons for the treatment of gallbladder polyps.
              </p>
            </section>

            <section className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What is Gallbladder Polyps?</h2>
              <p>
                Gallbladder polyps are abnormal tissue growths on the inner wall of the gallbladder. They are quite common, and most of these polyps are benign (non-cancerous). However, larger polyps may require monitoring or surgical removal to prevent potential complications.
              </p>
              <p>
                The exact cause of gallbladder polyps can be associated with age, gender (more common in females), chronic inflammation, and certain metabolic conditions. Accurate evaluation helps determine whether surveillance or surgery is required.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Types of Gallbladder Polyps</h2>
              <div className="space-y-4">
                {[
                  { title: 'Cholesterol Polyps', description: 'The most common type, usually small and benign. These are cholesterol deposits on the gallbladder wall.' },
                  { title: 'Adenomyomatosis', description: 'Benign thickening of the gallbladder wall, often associated with small polyps.' },
                  { title: 'Inflammatory Polyps', description: 'Caused by chronic inflammation of the gallbladder, usually benign.' },
                  { title: 'Adenomatous Polyps', description: 'Less common but have a potential to become cancerous, especially when larger than 10mm.' },
                ].map((type) => (
                  <div key={type.title} className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-semibold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-700 text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Symptoms of Gallbladder Polyps</h2>
              <p className="text-gray-700">Most gallbladder polyps are asymptomatic and are discovered incidentally during ultrasound or other imaging tests. However, when symptoms occur, they may include:</p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 space-y-3 text-gray-800">
                {['Upper right abdominal pain or discomfort', 'Nausea or vomiting', 'Bloating or indigestion', 'Rarely, jaundice if the polyp blocks bile flow'].map((symptom) => (
                  <div key={symptom} className="flex items-start">
                    <AlertTriangle className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">When is Surgery Needed for Gallbladder Polyps?</h2>
              <p className="text-gray-700">Not all gallbladder polyps require surgical intervention. Dr. Kapil Agrawal follows evidence-based guidelines to determine when surgery is necessary:</p>
              <div className="space-y-4">
                {[
                  { size: 'Polyps larger than 10mm', action: 'Surgery is usually recommended due to increased cancer risk', urgency: 'High' },
                  { size: 'Polyps 6-10mm', action: 'Close monitoring with regular ultrasounds every 6-12 months', urgency: 'Monitor' },
                  { size: 'Polyps smaller than 6mm', action: 'Usually benign, periodic monitoring may be recommended', urgency: 'Low' },
                  { size: 'Rapidly growing polyps', action: 'Surgery may be recommended regardless of size', urgency: 'High' },
                  { size: 'Polyps with symptoms', action: 'Surgery may be considered if symptoms are severe', urgency: 'Moderate' },
                ].map((indication) => (
                  <div
                    key={indication.size}
                    className={`rounded-lg p-5 border-l-4 ${
                      indication.urgency === 'High' ? 'bg-red-50 border-red-500' : indication.urgency === 'Monitor' ? 'bg-yellow-50 border-yellow-500' : 'bg-gray-50 border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{indication.size}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          indication.urgency === 'High' ? 'bg-red-100 text-red-700' : indication.urgency === 'Monitor' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {indication.urgency}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{indication.action}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Treatment Options for Gallbladder Polyps</h2>
              <div className="space-y-6">
                {[
                  {
                    title: '1. Observation and Monitoring',
                    description:
                      'For small polyps (less than 10mm) that are asymptomatic, regular monitoring with ultrasound every 6-12 months is recommended. This is the preferred approach for most benign polyps.',
                    when: 'Small polyps, no symptoms, stable size',
                  },
                  {
                    title: '2. Laparoscopic Cholecystectomy',
                    description:
                      'Minimally invasive removal of the gallbladder through small incisions. This is the gold standard treatment for polyps that require surgical removal. Dr. Kapil Agrawal specializes in this procedure.',
                    when: 'Polyps larger than 10mm, rapid growth, or symptoms',
                    benefits: ['Minimal scarring', 'Faster recovery', 'Reduced pain', 'Shorter hospital stay', 'Lower risk of complications'],
                  },
                  {
                    title: '3. Single-Port Laparoscopic Surgery',
                    description:
                      'Advanced technique with a single hidden incision in the belly button. Provides excellent cosmetic results with minimal visible scarring.',
                    when: 'Cosmetic concerns, suitable for selected cases',
                  },
                ].map((treatment) => (
                  <div key={treatment.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{treatment.title}</h3>
                      <p className="text-gray-700 mt-2">{treatment.description}</p>
                    </div>
                    {treatment.when && (
                      <p className="text-gray-600 text-sm">
                        <span className="font-semibold">When recommended:</span> {treatment.when}
                      </p>
                    )}
                    {treatment.benefits && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {treatment.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start text-gray-700">
                              <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Dr. Kapil Agrawal is the Best Gallbladder Specialist</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Best-in-Class Consultation and Diagnosis</h3>
                  <p>
                    Our team starts with a detailed clinical history and high-resolution imaging. We use advanced ultrasound and MRI techniques to evaluate gallbladder polyps accurately and plan the safest course of action.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Tailor Made Treatment</h3>
                  <p>
                    Evidence-based, individualized, and minimally invasive—Dr. Agrawal recommends surveillance or surgery depending on polyp size, growth, and symptoms, ensuring maximum patient comfort and safety.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Best Team of Laparoscopic Surgeons</h3>
                  <p>
                    Habilite Clinics houses a skilled team capable of performing advanced laparoscopic and single-port surgeries, ensuring virtually scarless outcomes and quick recovery.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Comprehensive Hospital Network & Cashless Facility</h3>
                  <p>
                    Partnerships with top hospitals in Delhi NCR, seamless cashless insurance approvals, and 0% EMI options deliver stress-free treatment journeys for patients and families.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Multidisciplinary Team</h3>
                  <p>We collaborate with oncologists, radiologists, and pathologists whenever a malignancy risk exists, ensuring holistic care from diagnosis to recovery.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="max-w-5xl mx-auto">
            <CostCalculator serviceName="Gallbladder Polyps Treatment" />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <GallbladderPolypsTestimonials />
            <GallbladderPolypsFAQ />
            <section className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Recovery & Aftercare</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                    <p className="text-gray-700 text-sm">Most patients can return to normal activities within 1-2 weeks after laparoscopic gallbladder surgery. Many patients are discharged within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-ups ensure proper healing. For patients under observation, periodic ultrasounds are scheduled to monitor polyp size.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Gallbladder Polyps Treatment" />
        </div>
      </div>
    </>
  )
}

