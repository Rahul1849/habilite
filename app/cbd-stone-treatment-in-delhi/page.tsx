import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp, AlertCircle, Activity, Zap, Shield } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import { RecoveryTimeline } from '@/components/services/RecoveryTimeline'
import RelatedBlogs from '@/components/services/RelatedBlogs'
import CBDStonesFAQ from './CBDStonesFAQ'
import CBDStonesTestimonials from './CBDStonesTestimonials'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema, getServiceSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Best CBD(Common Bile Duct) Stone Treatment in Delhi - Dr. Kapil Agrawal',
  description:
    'Expert CBD (Common Bile Duct) stone treatment in Delhi by Dr. Kapil Agrawal. Advanced ERCP, laparoscopic CBD exploration, and minimally invasive procedures. 23+ years experience, 7000+ surgeries. Book consultation now.',
  keywords: [
    'CBD stone treatment delhi',
    'common bile duct stone treatment',
    'bile duct stone removal delhi',
    'ERCP procedure delhi',
    'laparoscopic CBD exploration delhi',
    'choledocholithiasis treatment',
    'bile duct stone surgery',
    'Dr. Kapil Agrawal CBD stones',
    'best CBD stone surgeon delhi',
  ],
  openGraph: {
    title: 'Best CBD(Common Bile Duct) Stone Treatment in Delhi - Dr. Kapil Agrawal',
    description:
      'Expert Common Bile Duct stone treatment with ERCP and laparoscopic procedures. 23+ years experience, minimally invasive, fast recovery.',
    url: 'https://www.habiliteclinics.com/cbd-stone-treatment-in-delhi',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/gallbladder-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best CBD Stone Treatment in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/cbd-stone-treatment-in-delhi',
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
    question: 'Can common bile duct stones recur?',
    answer:
      'Yes, though rare after proper treatment. We recommend regular monitoring, especially in patients with altered bile duct anatomy or past bile duct surgery.',
  },
  {
    question: 'Is ERCP painful?',
    answer: 'ERCP is done under sedation. Most patients feel no pain and recover within a few hours.',
  },
  {
    question: 'How long is the hospital stay for bile duct stone treatment?',
    answer: 'ERCP usually requires daycare or overnight admission. Laparoscopic surgery may require 1–2 days.',
  },
  {
    question: 'Is the surgery covered by health insurance?',
    answer: 'Yes, most insurance plans cover hernia surgery. Our clinic also offers cashless options.',
  },
]

const faqSchema = getFAQSchema({
  title: 'CBD Stone Treatment FAQs',
  description: 'Expert guidance on CBD stone diagnosis, treatment options, ERCP, and recovery.',
  faqs: faqItems,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'CBD Stone Treatment - ERCP & Laparoscopic CBD Exploration',
  description:
    'Advanced CBD stone treatment program by Dr. Kapil Agrawal covering ERCP, laparoscopic CBD exploration, and PTC procedures with rapid recovery.',
  url: '/cbd-stone-treatment-in-delhi',
  procedureType: 'ERCP, Laparoscopic CBD Exploration',
  bodyLocation: 'Common Bile Duct',
  preparation: 'Blood tests (LFTs, WBC), ultrasound, MRCP, EUS, or ERCP for diagnosis.',
  followup: 'ERCP: daycare discharge. Laparoscopic: 1-2 days. Regular follow-up appointments ensure optimal recovery.',
  howPerformed:
    'ERCP: endoscopic procedure through mouth. Laparoscopic: small incisions with camera and instruments to clear stones. PTC: percutaneous approach through skin.',
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'CBD Stone Treatment', url: '/cbd-stone-treatment-in-delhi' },
])

const serviceSchema = getServiceSchema({
  name: 'CBD Stone Treatment - ERCP & Laparoscopic CBD Exploration',
  description:
    'Expert CBD (Common Bile Duct) stone treatment by Dr. Kapil Agrawal in Delhi, India. Advanced ERCP, laparoscopic CBD exploration, and minimally invasive procedures with rapid recovery.',
  url: '/cbd-stone-treatment-in-delhi',
  serviceType: 'Medical Procedure',
  category: 'Laparoscopic Surgery',
  areaServed: ['Delhi', 'NCR', 'India'],
})

export default function CBDStoneTreatmentPage() {
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
              alt="Best CBD(Common Bile Duct) Stone Treatment in Delhi - Dr. Kapil Agrawal | ERCP & Laparoscopic CBD Exploration"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">cbd-stone-treatment-in-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best CBD(Common Bile Duct) Stone Treatment in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
              <Award size={16} className="text-[#f59e0b]" />
              <span>Expert Surgeon with Over 23 Years of Experience</span>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Common bile duct stones, also known as choledocholithiasis, can be a serious and painful condition. At Habilite Clinics, our team, led by Dr. Kapil Agrawal, offers advanced and minimally invasive treatment of bile duct stones. Dr. Kapil Agrawal is one of the most trusted laparoscopic and gastrointestinal surgeons who perform both laparoscopic and robotic surgeries for the removal of bile duct stones. We usually recommend these surgeries to patients in whom ERCP is contraindicated or fails to remove bile duct stones.
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
              <ConsultationForm serviceName="CBD Stone Treatment" serviceSlug="cbd-stone-treatment-in-delhi" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What Are CBD Stones?</h2>
              <p className="text-gray-700 leading-relaxed">
                The common bile duct (CBD) is a small tube that carries bile from the liver and gallbladder into the small intestine. This bile helps in the digestion of fats. Sometimes, stones that form in the gallbladder (gallstones) may slip into the bile duct and can obstruct the flow of bile. These are referred to as common bile duct stones or secondary stones. Less commonly, the stones may form directly in the duct (primary stones).
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5 text-gray-800 font-semibold">
                The obstruction to the flow of bile can lead to severe complications such as jaundice, biliary infections, or pancreatitis.
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Causes and Risk Factors of Bile Duct Stones</h2>
              <p className="text-gray-700 leading-relaxed">
                Common bile duct stones usually occur when gallbladder stones slip from the gallbladder into the bile ducts. Some of the most common causes of bile duct stones include:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'The patient is having gallstones',
                  'The patient has a history of gallbladder removal (cholecystectomy)',
                  'Chronic liver or bile duct disease results in the formation of stones.',
                  'Infections of the bile ducts can cause bile duct formation.',
                  'Parasitic infestations (in endemic areas)',
                  'Other contributors may include a sedentary lifestyle, obesity, diabetes, and genetic predisposition.',
                ].map((cause) => (
                  <div key={cause} className="flex items-start text-gray-700">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>{cause}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Signs and Symptoms of Bile Duct Stones</h2>
              <p className="text-gray-700 leading-relaxed">
                Sometimes bile duct stones are completely asymptomatic, but when these stones obstruct the flow of bile, the patient might experience the following symptoms:
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 space-y-3">
                {[
                  'Severe upper abdominal pain',
                  'Jaundice or yellowing of the skin and eyes',
                  'Dark yellow color of urine and pale or grey-colored stools',
                  'Fever and chills which is due to infection of the common bile duct',
                  'Nausea and vomiting',
                  'Loss of appetite',
                  'Fatigue or general weakness',
                ].map((symptom) => (
                  <div key={symptom} className="flex items-start text-gray-800 text-sm sm:text-base">
                    <AlertCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{symptom}</span>
                  </div>
                ))}
                <p className="font-semibold text-sm text-gray-900 mt-3">
                  If you notice any of these symptoms and you have gallstones or you had gallbladder surgery in the past, it is important to seek medical attention immediately.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Complications of Untreated Gallbladder Polyps</h2>
              <p className="text-gray-700 leading-relaxed">
                CBD stones can sometimes lead to serious complications, and hence, early treatment for the removal of bile duct stones is essential. Some of the most common complications associated with bile stones are:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { title: 'Acute cholangitis', desc: 'or severe infection of the bile ducts' },
                  { title: 'Acute pancreatitis', desc: 'which can sometimes be life-threatening' },
                  { title: 'Liver abscess', desc: '' },
                  { title: 'Severe Sepsis', desc: '' },
                  { title: 'Persistent jaundice and malnutrition', desc: '' },
                ].map((item) => (
                  <div key={item.title} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    {item.desc && <p className="text-gray-700 text-sm">{item.desc}</p>}
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                That&apos;s why early diagnosis and timely treatment are critical.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How to Diagnose Common Bile Duct Stones</h2>
              <p className="text-gray-700 leading-relaxed">
                Bile Duct Stones can sometimes be easily diagnosed, but stones that are very small in size may require advanced radiological investigations. Some of the common blood tests and radiological investigations used by our team are:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: '1. Blood Tests',
                    items: ['Liver function tests (LFTs) to detect any bile flow obstruction', 'White blood cell (WBC) counts to check for infection'],
                  },
                  {
                    title: '2. Ultrasound',
                    items: ['Initial imaging to detect gallstones and evaluate bile duct dilatation'],
                  },
                  {
                    title: '3. Magnetic Resonance Cholangiopancreatography (MRCP)',
                    items: ['A non-invasive MRI technique is used to visualize stones in the bile duct clearly'],
                  },
                  {
                    title: '4. Endoscopic Ultrasound (EUS)',
                    items: ['A highly sensitive tool to detect even small stones not visible on standard ultrasound'],
                  },
                  {
                    title: '5. Endoscopic Retrograde Cholangiopancreatography (ERCP)',
                    items: ['A diagnostic and therapeutic procedure to visualize and remove stones in the same sitting'],
                  },
                ].map((method) => (
                  <div key={method.title} className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-3">{method.title}</h3>
                    <ul className="space-y-2">
                      {method.items.map((item) => (
                        <li key={item} className="flex items-start text-gray-700">
                          <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Once the presence of stones is confirmed, we proceed with the best-suited treatment based on the patient&apos;s symptoms, age, anatomy, and overall health.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Best Treatment Options for Common Bile Duct Stones Offered at Habilite Clinics</h2>
              <p className="text-gray-700 leading-relaxed">
                Treatment options for choledocholithiasis have advanced significantly in recent years. At Habilite Clinics, our goal is to offer safe, minimally invasive, and effective interventions that reduce hospital stays and complications. Below are the most preferred options:
              </p>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  1. Endoscopic Retrograde Cholangiopancreatography (ERCP)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  ERCP is an endoscopic procedure that is performed as a daycare procedure. It means that the patient can be discharged within 2 hours of the procedure. ERCP is the treatment of choice and first-line procedure for all patients suffering from bile duct stones. At Habilite Clinics, we have a team of dedicated gastroenterologists who are highly experienced in conducting this procedure. The procedure involves passing a flexible endoscope through the mouth into the intestine. The common bile duct is accessed through a small opening present in the intestine. A small cut (sphincterotomy) is made in the intestine to allow stone removal with special tools like baskets or balloons.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      'The procedure does not require any surgical cuts or scars',
                      'The patient can be discharged within 2-3 hours of the procedure',
                      'Sometimes, stenting has to be done after stone removal to allow adequate flow of bile',
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm sm:text-base text-gray-700">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4 italic bg-gray-50 border-l-2 border-[#0891b2] rounded-md p-3">
                  ERCP has completely revolutionized the treatment of Common Bile Duct Stones and has minimized the risk of surgical complications associated with the bile duct stones.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="text-[#0891b2] mr-2" size={24} />
                  2. Laparoscopic Common Bile Duct Exploration (LCBDE)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>(Preferred in patients undergoing gallbladder removal simultaneously)</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If the patient has gallstones and bile duct stones, a laparoscopic cholecystectomy combined with CBD exploration in a single surgery is ideal. Laparoscopic CBD exploration is also indicated in patients who have large CBD stones or in whom ERCP has failed to retrieve stones. Laparoscopic surgery involves making small incisions. A long telescopic camera and instruments are inserted to clear stones present in the bile ducts.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      'One-time solution for the complete management of bile duct stones',
                      'In patients in whom ERCP has failed to retrieve stones, laparoscopic surgery is the treatment of choice for bile duct stones',
                      'Quick return to normal activity',
                      'Minimal postoperative pain',
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm sm:text-base text-gray-700">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4 italic bg-gray-50 border-l-2 border-[#0891b2] rounded-md p-3">
                  Dr. Kapil Agrawal is highly experienced and one of the best laparoscopic surgeons for the removal of common bile duct stones. Dr Agrawal usually recommends this procedure in patients who have large CBD stones.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Shield className="text-[#0891b2] mr-2" size={24} />
                  3. Percutaneous Transhepatic Cholangiography (PTC)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This procedure is usually recommended for complex or inaccessible stones. This procedure is indicated in patients who failed ERCP attempts or who have undergone gastric bypass. During this surgery, a percutaneous (through the skin) approach is used to access the bile duct.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Choose Dr. Kapil Agrawal Habilite Clinics for Bile Duct Stone Treatment?</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expertise of Dr. Kapil Agrawal</h3>
                  <p className="text-sm sm:text-base">
                    With over 23+ years of experience and 7,000+ laparoscopic procedures, Dr. Kapil Agrawal is a trusted and best gallbladder surgeon in Delhi for managing complex gallstone and bile duct stone cases.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Affiliated to Best Hospitals</h3>
                  <p className="text-sm sm:text-base">
                    Dr. Kapil Agrawal is associated with some of the best and most state-of-the-art hospitals where, along with his team, he can conduct advanced laparoscopic and robotic surgeries for most complex cases with excellent outcomes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Recovery and Minimal Downtime</h3>
                  <p className="text-sm sm:text-base">
                    Our minimally invasive approach ensures faster healing, less pain, and early return to work. We offer cashless insurance facilities for every type of insurance as well as provide zero-interest EMI options.
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
                      ERCP usually requires daycare or overnight admission. Laparoscopic surgery may require 1–2 days. Most patients can return to normal activities within a week.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">
                      Regular follow-up appointments ensure optimal recovery and address any concerns. Dr. Kapil Agrawal provides comprehensive post-operative care.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <RecoveryTimeline />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <CostCalculator serviceName="CBD Stone Treatment" />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="CBD Stone Treatment" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <CBDStonesTestimonials />
            <CBDStonesFAQ />
            <RelatedBlogs
              serviceName="CBD Stones"
              serviceKeywords={['CBD stones', 'common bile duct stones', 'bile duct stones', 'ERCP', 'choledocholithiasis', 'bile duct stone treatment']}
              maxPosts={3}
            />
          </div>
        </div>
      </div>
    </>
  )
}

