import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp, AlertCircle, Activity, Zap, Shield, Stethoscope } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import { RecoveryTimeline } from '@/components/services/RecoveryTimeline'
import RelatedBlogs from '@/components/services/RelatedBlogs'
import GallbladderPolypsFAQ from './GallbladderPolypsFAQ'
import GallbladderPolypsTestimonials from './GallbladderPolypsTestimonials'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema, getServiceSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Best Gallbladder Polyps Treatment in Delhi - Dr. Kapil Agrawal',
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
    url: 'https://www.habiliteclinics.com/gallbladder-polyps-treatment-in-delhi',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/gallbladder-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Gallbladder Polyps Treatment in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/gallbladder-polyps-treatment-in-delhi',
  },
}

const heroHighlights = [
  { icon: Award, text: 'Expert Surgeon with Over 23 Years of Experience' },
  { icon: Users, text: 'Internationally Trained Expert - Dr. Kapil Agrawal' },
  { icon: Clock, text: 'Painless Surgery for Fast Recovery' },
  { icon: CheckCircle2, text: 'Cashless Insurance Facility Available' },
  { icon: TrendingUp, text: 'Discharge within 24 hours' },
]

const faqItems = [
  {
    question: 'What are gallbladder polyps?',
    answer:
      'Gallbladder polyps are abnormal tissue growths on the inner wall of the gallbladder. They are quite common, and most of these polyps are harmless (non-cancerous). However, larger polyps may require monitoring or surgical removal.',
  },
  {
    question: 'Do all gallbladder polyps need surgery?',
    answer:
      'No, not all gallbladder polyps require surgical intervention. Small polyps (less than 10mm) are usually monitored regularly. Polyps larger than 10mm or those showing signs of growth may require gallbladder removal due to cancer risk.',
  },
  {
    question: 'Can gallbladder polyps become cancerous?',
    answer:
      'Most gallbladder polyps are benign. However, larger polyps (especially those over 10mm) have a higher risk of being cancerous or becoming cancerous over time, which is why they may require surgical removal.',
  },
  {
    question: 'What size of gallbladder polyp is dangerous?',
    answer:
      'Polyps larger than 10mm are considered higher risk and may require surgical removal. Polyps between 6-10mm are monitored closely, while those smaller than 6mm are usually benign and monitored periodically.',
  },
]

const faqSchema = getFAQSchema({
  title: 'Gallbladder Polyps Treatment FAQs',
  description: 'Expert guidance on gallbladder polyps diagnosis, treatment options, monitoring, and surgery.',
  faqs: faqItems,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'Gallbladder Polyps Treatment - Laparoscopic & Robotic Cholecystectomy',
  description:
    'Expert gallbladder polyps treatment program by Dr. Kapil Agrawal covering evaluation, monitoring, and surgical removal with rapid recovery.',
  url: '/gallbladder-polyps-treatment-in-delhi',
  procedureType: 'Laparoscopic Cholecystectomy, Robotic Cholecystectomy',
  bodyLocation: 'Gallbladder',
  preparation: 'Ultrasound, CT scan, MRI with MRCP, or EUS for diagnosis and evaluation.',
  followup: 'Small polyps monitored regularly. Post-surgery: 1-2 weeks recovery, regular follow-up appointments.',
  howPerformed:
    'Laparoscopic: small incisions with camera and instruments. Robotic: surgeon-controlled robot console for precise movements. Extended cholecystectomy includes liver bed and lymph nodes removal.',
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'Gallbladder Polyps Treatment', url: '/gallbladder-polyps-treatment-in-delhi' },
])

const serviceSchema = getServiceSchema({
  name: 'Gallbladder Polyps Treatment - Expert Evaluation & Surgery',
  description:
    'Expert gallbladder polyps treatment by Dr. Kapil Agrawal in Delhi, India. Advanced evaluation, accurate diagnosis, and minimally invasive surgical options with evidence-based management.',
  url: '/gallbladder-polyps-treatment-in-delhi',
  serviceType: 'Medical Procedure',
  category: 'Laparoscopic Surgery',
  areaServed: ['Delhi', 'NCR', 'India'],
})

export default function GallbladderPolypsTreatmentPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={procedureSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      <div className="pt-20 pb-16">
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/gallbladder-surgeon-delhi-india.webp"
              alt="Best Gallbladder Polyps Treatment in Delhi - Dr. Kapil Agrawal | Expert Evaluation & Surgery"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              priority
              fetchPriority="high"
              quality={75}
              loading="eager"
              decoding="sync"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>

        <div className="container-custom mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">gallbladder-polyps-treatment-in-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Gallbladder Polyps Treatment in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
              <Award size={16} className="text-[#f59e0b]" />
              <span>Expert Surgeon with Over 23 Years of Experience</span>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Dr Kapil Agrawal is one of the best gallbladder polyp specialists in Delhi, India. He offers the best and most customized treatment for different types of gallbladder diseases, including gallbladder polyps. Not all gallbladder polyps require surgical intervention, and Dr. Kapil Agrawal offers the best management for gallbladder polyps based on international guidelines. With a tremendous experience of 23 years and more than 7000 laparoscopic surgeries under his belt, he is one of the best surgeons for the treatment of gallbladder polyps.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {heroHighlights.map((item) => (
                <div key={item.text} className="flex items-center gap-2 bg-[#0891b2]/10 px-4 py-2 rounded-full">
                  <item.icon className="text-[#0891b2] w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
            <CallUsButton />
          </div>
        </div>

        <div className="container-custom space-y-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <ConsultationForm serviceName="Gallbladder Polyps Treatment" serviceSlug="gallbladder-polyps-treatment-in-delhi" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What is Gallbladder Polyps?</h2>
              <p className="text-gray-700 leading-relaxed">
                Gallbladder polyps are abnormal tissue growths on the inner wall of the gallbladder. They are pretty standard, and most of these polyps are harmless, which means they cannot develop cancer. The causes of gallbladder polyps are unclear in most situations, but they can be associated with age, gender (more common in females), and some specific diseases.
              </p>
              <p className="text-gray-700 leading-relaxed">
                They are pretty standard, and most of these polyps are harmless, which means they cannot develop cancer. The causes of gallbladder polyps are unclear in most situations, but they can be associated with age, gender (more common in females), and some specific diseases.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Different Types of Gallbladder Polyps:</h2>
              <p className="text-gray-700 leading-relaxed">
                The polyps are usually classified into Pseudo Polyps and True Polyps
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Pseudopolyps</h3>
                <p className="text-gray-700">
                  Pseudo polyps account for 95% of polyps, and these polyps are completely harmless and do not turn into cancer. Different types of pseudo polyps are:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cholesterol Polyps:</h4>
                    <p className="text-gray-700 text-sm">
                      These are the most common type of gallbladder polyps and account for 60% of all polyps. These are cholesterol deposits on the inner lining of the gallbladder and usually do not exhibit any symptoms.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adenomyomatosis:</h4>
                    <p className="text-gray-700 text-sm">
                      They account for another 25% of polyps, and they are cholesterol deposits which precipitate in the sinuses (Rokitansky-Aschoff sinuses) present in the inner layer of the gallbladder.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Inflammatory Polyps:</h4>
                    <p className="text-gray-700 text-sm">
                      These are attributed to conditions where chronic gallbladder inflammation is present, usually seen in gallbladder stones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">True Polyps</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adenomas:</h4>
                    <p className="text-gray-700 text-sm">
                      Adenomas are non-cancerous tumours that are more worrisome because they may become cancerous in the long term. They account for approximately 5% of polyps.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Polyp Cancer (Adenocarcinoma of Gallbladder):</h4>
                    <p className="text-gray-700 text-sm">
                      Polyps may not always fall within the confines of the benign category. About 20% of gallbladder cancer will manifest as gallbladder polyp. For this reason, thorough observation is necessary for early detection of malignancy or cancer.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">High-Risk for Cancer in Gallbladder Polyp</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'Size ≥10 mm (most important predictor)',
                  'Solitary polyp',
                  'Age >50 years',
                  'Sessile morphology',
                  'Gallstones or chronic cholecystitis',
                  'Rapid growth (>2 mm/year)',
                  'Indian ethnicity (higher reported malignancy risk)',
                  'Primary sclerosing cholangitis: 40-60% of polyps in this condition are cancerous',
                ].map((risk) => (
                  <div key={risk} className="flex items-start text-gray-700">
                    <AlertCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>{risk}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Diagnosis of Gallbladder Polyps</h2>
              <p className="text-gray-700 leading-relaxed">
                Polyps are rarely known because the patients are usually asymptomatic. Much like other polyps, gallbladder polyps are spotted on routine ultrasound imaging of the abdomen. If your doctor suspects a polyp&apos;s existence, they may choose to confirm with further tests.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Ultrasound (USG)',
                    desc: 'This is the most common and baseline investigation for the detection of gallbladder polyps. The presence of gallbladder polyps on ultrasound determines if any further investigation is required or not.',
                  },
                  {
                    title: 'Computed Tomography (CT scan)',
                    desc: 'It is one of the highly recommended radiological investigations as it helps in the identification and staging of cancerous polyps.',
                  },
                  {
                    title: 'MRI with MRCP',
                    desc: 'MRCP is better for assessing wall invasion and can help in the detection of very small polyps.',
                  },
                  {
                    title: 'EUS (Endoscopic Ultrasound)',
                    desc: 'This is a special type of ultrasound done with the help of an endoscope put into the food pipe. It is highly accurate for small polyps which can\'t be seen through normal ultrasound.',
                  },
                  {
                    title: 'Positron Emission Tomography',
                    desc: 'Cancer cells consume higher amounts of glucose, and this imaging modality determines the uptake of radioactive glucose by the body cells. This helps to differentiate cancerous cells from normal cells and has a very high accuracy in diagnosing cancer.',
                  },
                ].map((method) => (
                  <div key={method.title} className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-700 text-sm">{method.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Best Treatment and Management Options for Gallbladder Polyps</h2>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Stethoscope className="text-[#0891b2] mr-2" size={24} />
                  Non-Surgical Treatment of Gallbladder Polyps
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Polyps less than 1 cm in size need not undergo surgery and can be followed up. However, we assess every patient thoroughly and offer a customized approach. Broadly, our guidelines are:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Gallbladder Polyp Less than 5mm:</h4>
                    <p className="text-gray-700 text-sm">Get routine USG at 6 months, 1 year, 3 year and 5 years.</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Gallbladder Polyps Between 6 mm-9mm:</h4>
                    <p className="text-gray-700 text-sm">USG scan at 6 months and then every year. If the polyp increases in size or number, we recommend surgery on an urgent basis.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  Surgical Treatment of gallbladder Polyp
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Surgery is usually recommended if the polyps have a high chance of converting into malignancy or cancer or if the polyp is cancerous. Depending upon the condition, we typically recommend two types of surgery:
                </p>
                <div className="space-y-4 mt-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Simple Cholecystectomy</h4>
                    <p className="text-gray-700 text-sm">
                      Simple cholecystectomy is usually performed when the risk of cancer is very low, and the surgery is being performed to remove the risk of developing cancer of the gallbladder over some time.
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Extended Cholecystectomy</h4>
                    <p className="text-gray-700 text-sm">
                      Extended cholecystectomy is a procedure carried out in patients when the chances of malignancy are very high or the patient has a gallbladder cancerous polyp. In this procedure, along with the gallbladder, the liver bed where the gallbladder is attached and the surrounding lymph nodes are also removed.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                  We usually perform these surgeries through two approaches:
                </p>
                <div className="grid gap-4 md:grid-cols-2 mt-4">
                  <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Zap className="text-[#0891b2] mr-2" size={20} />
                      Laparoscopic Approach
                    </h4>
                    <p className="text-gray-700 text-sm">
                      This is one of the best approaches for the management of polyps, which is cost-effective and associated with faster recovery and best cosmesis.
                    </p>
                    <p className="text-gray-700 text-sm mt-2 italic">
                      Dr.Kapil Agrawal is one of the highly experienced surgeons and has performed the most complex gallbladder surgeries with the best results.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Shield className="text-[#0891b2] mr-2" size={20} />
                      Robotic Approach
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Robotic Surgery is the latest modality where the surgeon conducts the surgery with the help of a robot console completely under the control of the operating surgeon.
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      The recovery and surgical scars are similar to laparoscopic surgery as the number and size of incisions are the same. However, robotic surgery is beneficial when the surgeon has to operate in a tight space where human hands can&apos;t bend and rotate as robotic hands can.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Dr Kapil Agrawal is the Best Gallbladder Specialist Surgeon for Gallbladder Polyps</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Best-in-Class Consultation and Diagnosis:</h3>
                  <p className="text-sm sm:text-base">
                    Our team of able medics at Habilite Clinics will start by taking a detailed history of your clinical condition. If the patient has gallbladder polyps, highly sensitive ultrasound and imagery techniques are used for diagnostics and monitoring.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tailor Made Treatment:</h3>
                  <p className="text-sm sm:text-base">
                    The clinic has evidence-based, individualized, tailored treatment for the patients. Small polyps can be left for surveillance, while bigger ones can lead us to a surgical solution. Invasive procedures are last on the list to ensure patient comfort and satisfaction.
                  </p>
                  <p className="text-sm sm:text-base mt-2 italic">
                    Dr Agrawal offers a proactive approach that solves health issues before they get serious
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Best Team of Laparoscopic Surgeons</h3>
                  <p className="text-sm sm:text-base">
                    Dr Kapil Agrawal, principal Surgeon at Habilte Clinics, is one of the best gallbladder surgeon in Delhi, India and has the experience and expertise to handle even the most complex cases of gallbladder polyps. The team is well-equipped to perform the most advanced form of laparoscopic surgery, ensuring non-visible scars and early recovery.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Best-in-Class Affiliation with Hospitals & Complete Cashless Insurance Facilities</h3>
                  <p className="text-sm sm:text-base">
                    Habilite Clinics partners with some of the best hospitals for gallbladder surgery in Delhi to ensure seamless, high-quality care for gallbladder polyp management. With complete cashless insurance approvals (covering diagnostics, consultations, and surgeries), patients undergo stress-free treatment and management without financial strain.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Multidisciplinary Team</h3>
                  <p className="text-sm sm:text-base">
                    Habilite Clinics has a strong team of surgeons, oncologists, radiologists, and pathologists to deal with cases with malignancy risk. It also ensures optimal treatment planning (e.g., extended cholecystectomy for gallbladder cancer).
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                    <p className="text-gray-700 text-sm">
                      Laparoscopic and robotic gallbladder removal typically requires 1-2 days hospital stay. Most patients can return to normal activities within 1-2 weeks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">
                      Regular follow-up appointments ensure optimal recovery and address any concerns. For non-surgical cases, regular monitoring via ultrasound is recommended based on polyp size.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <RecoveryTimeline />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <CostCalculator serviceName="Gallbladder Polyps Treatment" />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Gallbladder Polyps Treatment" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <GallbladderPolypsTestimonials />
            <GallbladderPolypsFAQ />
            <RelatedBlogs
              serviceName="Gallbladder Polyps"
              serviceKeywords={['gallbladder polyps', 'gallbladder polyp treatment', 'cholecystectomy', 'gallbladder surgery', 'polyp removal']}
              maxPosts={3}
            />
          </div>
        </div>
      </div>
    </>
  )
}


