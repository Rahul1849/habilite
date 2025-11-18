import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import AppendixFAQ from './AppendixFAQ'
import AppendixTestimonials from './AppendixTestimonials'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Best Appendicitis Surgeon in Delhi - Dr. Kapil Agrawal | Laparoscopic Appendectomy | 23 Years Experience',
  description: 'Dr. Kapil Agrawal is the best appendicitis surgeon in Delhi with 23+ years of experience and 2000+ laparoscopic appendectomies. Expert in single-port laparoscopic appendectomy with faster recovery, minimal scarring, and excellent outcomes. 24-hour discharge, cashless insurance available. Book consultation now.',
  keywords: [
    'best appendicitis surgeon delhi',
    'appendix surgery delhi',
    'laparoscopic appendectomy delhi',
    'appendicitis treatment delhi',
    'appendix removal delhi',
    'best appendicitis doctor delhi',
    'Dr. Kapil Agrawal appendicitis',
    'appendicitis specialist delhi',
    'emergency appendectomy delhi',
  ],
  openGraph: {
    title: 'Best Appendicitis Surgeon in Delhi - Dr. Kapil Agrawal | 23 Years Experience',
    description: 'Expert laparoscopic appendectomy by Dr. Kapil Agrawal in Delhi. Faster recovery, minimal scarring, 24-hour discharge. Book consultation.',
    url: 'https://www.habiliteclinics.com/laparoscopic-surgery/appendix-surgery',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/appendix-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Appendicitis Surgeon in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laparoscopic-surgery/appendix-surgery',
  },
}

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the main cause of appendicitis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Appendicitis occurs due to blockage in the appendix, due to hardened stool, infection, or swollen lymph tissue. This blockage can cause inflammation and bacterial growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I need appendix surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you&apos;re facing acute lower right abdominal pain, nausea, fever, and vomiting, you may have appendicitis. Surgery is advised soon after diagnosis to prevent rupture.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the recovery time for laparoscopic appendix surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients take 3–5 days to recover after laparoscopic appendectomy. You can get back to your normal activities in a week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is appendix surgery a major surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laparoscopic appendix surgery is regarded as minimally invasive, not major. It is executed with tiny incisions and involves quick recovery and minimal complications.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does appendix surgery cost in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At Habilite Clinics, laparoscopic appendix surgery typically ranges from ₹55,000 to ₹90,000, depending on the complications and services included. The price is transparent and all-inclusive.',
      },
    },
  ],
}

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Laparoscopic Appendectomy',
  description: 'Expert laparoscopic appendectomy by Dr. Kapil Agrawal in Delhi. Minimally invasive appendix removal with faster recovery and excellent outcomes.',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
  },
  procedureType: 'Laparoscopic Appendectomy',
  followup: 'Regular follow-up appointments and post-operative care',
  preparation: 'Pre-surgery consultation, medical evaluation, and preparation instructions',
}

export default function AppendixSurgeryPage() {
  const appendixBlogs = blogPosts
    .filter((post) => post.category.toLowerCase().includes('appendicitis') || post.category.toLowerCase().includes('appendix') || post.tags.some((tag) => tag.toLowerCase().includes('appendicitis') || tag.toLowerCase().includes('appendix')))
    .slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} suppressHydrationWarning />

      <div className="pt-20 pb-16">
        {/* Hero Image */}
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/appendix-surgeon-delhi-india.webp"
              alt="Best Appendicitis Surgeon in Delhi - Dr. Kapil Agrawal | Expert Laparoscopic Appendectomy | 23 Years Experience"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-appendicitis-surgeon-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Appendicitis Surgeon in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Expert Surgeon with Over 23 Years of Experience | Internationally Trained Expert | Painless Surgery for Fast Recovery | Cashless Insurance Facility Available | Discharge within 24-48 hours
            </p>
            
            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Experience' },
                { icon: Users, text: '7000+ Successful Surgeries' },
                { icon: TrendingUp, text: 'Minimal Scarring' },
                { icon: Clock, text: '24-48 Hour Discharge' },
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
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <ConsultationForm 
                serviceName="Appendix Surgery"
                serviceSlug="appendix-surgery"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* About Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Dr. Kapil Agrawal - Expert Laparoscopic Surgeon for Appendicitis Treatment at Habilite Clinics
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal is a highly experienced surgeon in appendicitis treatment, known for his surgical excellence in laparoscopic appendectomy—a minimally invasive procedure that removes the inflamed appendix through small incisions. This technique involves reduced pain, shorter hospital stays, and faster recovery, making it the best choice for appendicitis management.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal has successfully executed numerous laparoscopic appendectomies, earning the trust of various patients with his precision, excellent surgical outcomes, and best patient care. He possesses outstanding skills to effectively deal with simple and complex cases, including emergency appendectomies, ensuring a high standard of patient care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr. Kapil Agrawal, a laparoscopic and robotic surgeon in Delhi, is widely regarded as the best appendicitis surgeon in Delhi, India. With over 23 years of experience and more than 7,000 successful surgeries, he is known for delivering excellent patient outcomes. Dr. Kapil Agrawal is also a Senior consultant at Apollo group of hospitals and he is associated with many top hospitals in Delhi NCR to offer safe, effective, and advanced surgical care.
              </p>
            </section>

            {/* What is Appendix */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is Appendix?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Appendix is a small, finger-shaped structure that is attached to the large intestine (colon) on the lower right side of the abdomen. Though it does not play any important role, still its inflammation can cause appendicitis and result in various other health complications when not treated for longer time.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Appendicitis causes sudden pain around your navel and usually shifts to the lower abdomen. Pain gets worse when you walk or create any abrupt movement. Surgery is the only effective treatment.
              </p>
            </section>

            {/* What is Appendix Surgery */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is Appendix Surgery?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Appendix surgery (appendectomy), is the surgical removal of the appendix. It is the most effective treatment for appendicitis, to prevent serious complications. The procedure involves removing the inflamed appendix prior it gets burst.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The surgery is usually performed with general anesthesia and involves two methods—open appendectomy or laparoscopic appendectomy. In an open appendectomy, a single large incision is made in the lower side of the abdomen to dissect the appendix. While in laparoscopic appendectomy, there are small incisions made and the appendix is removed using a camera and long instruments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The second method is less invasive, thus aids in faster recovery, minimal pain and minimal scarring. The method can be opted based on the state of appendicitis and the patient&apos;s medical history.
              </p>
            </section>

            {/* The Goal of Appendix Surgery */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">The Goal of Appendix Surgery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Avoid Appendix Burst-Out</h3>
                  <p className="text-gray-700 text-sm">Main goal to remove inflamed appendix before it ruptures, resulting in other serious complications.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Manage Pain and Discomfort</h3>
                  <p className="text-gray-700 text-sm">Appendix surgery helps to manage your pain and symptoms timely related to appendicitis.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Prevent Infection and Peritonitis</h3>
                  <p className="text-gray-700 text-sm">Timely removal of appendix helps in preventing spread of infection to abdominal activity, thus preventing peritonitis.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Minimize Complications</h3>
                  <p className="text-gray-700 text-sm">Timely surgery minimizes the risk of complications like abscess formation.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Faster Recovery</h3>
                  <p className="text-gray-700 text-sm">Especially the laparoscopic surgery, the goal is to ensure a faster recovery and return back to normal activities.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Minimize Recurrence</h3>
                  <p className="text-gray-700 text-sm">Appendectomy reduces the risks for future appendicitis.</p>
                </div>
              </div>
            </section>

            {/* Important Steps */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Important Steps in the Appendix Surgery</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0891b2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Diagnosis</h3>
                    <p className="text-gray-700 text-sm">Diagnosis through physical examination, blood tests and imaging to confirm appendicitis.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0891b2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Anesthesia</h3>
                    <p className="text-gray-700 text-sm">Applying general anesthesia to ensure that the patient is free from all discomfort and pain during surgery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0891b2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Incision</h3>
                    <p className="text-gray-700 text-sm">The next process is to make one large incision for open surgery or several small incisions for laparoscopic surgery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0891b2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Appendix Removal</h3>
                    <p className="text-gray-700 text-sm">Careful removal of inflamed appendix while safeguarding the surrounding tissues.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0891b2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Closing Incisions</h3>
                    <p className="text-gray-700 text-sm">The next step is to close the incisions using stitches or staples by an expert surgeon. Dr. Kapil Agrawal has expertise to perform surgeries with high precision.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0891b2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">6</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Postoperative Care</h3>
                    <p className="text-gray-700 text-sm">Post-surgery, monitoring the patient&apos;s recovery process, pain management and activity restrictions.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Symptoms */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Symptoms of Appendicitis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The presentation of acute appendicitis can vary, but the classic symptoms include:
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Abdominal Pain:</strong> Acute appendicitis typically presents as vague abdominal pain that starts around the umbilical region and later localizes to the right lower part of the abdomen. The pain is quite sharp and constant.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Nausea and Vomiting:</strong> Nausea and vomiting may occur after the onset of abdominal pain.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Anorexia:</strong> Loss of appetite is a common early symptom.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Fever:</strong> A low-grade fever may be present, but a high fever can indicate a more severe infection or complications like perforation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Rebound Tenderness:</strong> Severe pain when the pressure in the right lower abdomen is suddenly released is a classical and diagnostic sign of acute appendicitis.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Stages of Appendicitis */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Stages of Appendicitis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Appendicitis advances through various stages and understanding them can assist in creating personalized treatment plans.
              </p>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Acute Appendicitis</h3>
                  <p className="text-gray-700 text-sm">It is a sudden inflammation of the appendix that causes acute abdominal pain, nausea, and fever. It needs precise surgical removal to prevent rupture and life-threatening complications.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Suppurative Appendicitis</h3>
                  <p className="text-gray-700 text-sm">During the suppurative appendicitis stage, the appendix swells and gets filled with pus. Pain becomes more intense and causes other complications like fever, nausea etc. It requires immediate medical intervention.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Gangrenous Appendicitis</h3>
                  <p className="text-gray-700 text-sm">If left untreated, appendicitis can advance to the acute stage of a gangrenous appendix, where inflammation may restrict blood flow to the appendix. It can cause intense pain and create further risk of serious complications.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Perforated (Ruptured) Appendicitis</h3>
                  <p className="text-gray-700 text-sm">This is a complicated stage of appendicitis, where the appendix ruptures or gets damaged. It requires immediate medical intervention as it can spread infection throughout the abdominal cavity, resulting in peritonitis. The symptoms include acute abdominal pain, high fever and rigid abdomen at the stage.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Appendiceal Abscess</h3>
                  <p className="text-gray-700 text-sm">An appendiceal abscess is a state of appendicitis in which there is a pus-filled pocket that generates when a burst appendix is surrounded by body tissues. It results in symptoms like pain, fever and tenderness, needing antibiotics and drainage prior surgery.</p>
                </div>
              </div>
            </section>

            {/* Diagnosis */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Diagnosis of Appendicitis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The diagnosis of acute appendicitis is primarily clinical but often supplemented by imaging and laboratory tests to confirm and assess the severity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Physical Examination</h3>
                  <p className="text-gray-700 text-sm">Clinical assessment including abdominal examination, checking for rebound tenderness, and other diagnostic signs.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Blood Tests</h3>
                  <p className="text-gray-700 text-sm">Complete blood count (CBC) to check for elevated white blood cell count indicating infection.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Ultrasound</h3>
                  <p className="text-gray-700 text-sm">Imaging test that can visualize the appendix and detect signs of inflammation or blockage.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">CT Scan</h3>
                  <p className="text-gray-700 text-sm">More detailed imaging that provides clear visualization of the appendix and surrounding structures, especially useful in complex cases.</p>
                </div>
              </div>
            </section>

            {/* Types of Appendix Surgery */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Types of Appendix Surgery</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal offers various surgical approaches for appendicitis treatment, each tailored to the patient&apos;s condition and medical history.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Open Appendectomy</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Traditional method with a single large incision in the lower side of the abdomen. May be necessary in complex cases or when the appendix has ruptured.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Used for complicated or ruptured cases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Better visualization in emergency situations</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Laparoscopic Appendectomy</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Performed through 3-4 small incisions (0.5-1 cm each) using a camera and specialized instruments. This is the preferred method for most cases.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Smaller incisions and minimal scarring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Faster recovery and return to activities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Reduced pain and lower risk of infection</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Single Port Laparoscopic Appendectomy</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    A minimally invasive surgical technique that uses only one small incision. This advanced procedure helps in reduced postoperative pain with minimal scarring and quicker recovery.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Single small incision</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Minimal scarring and faster recovery</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Robotic-Assisted Laparoscopic Appendectomy</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    This surgery utilizes robotic systems for better accuracy. It combines the benefits of laparoscopic surgery along with robotic technology.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Enhanced precision and accuracy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Better visualization and control</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Advantages of Laparoscopic Surgery */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Advantages of Laparoscopic Appendix Surgery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Minimally Invasive</h3>
                    <p className="text-gray-700 text-sm">Due to minimally invasive surgery, small incisions are less traumatic as compared to open surgery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Minimal Pain</h3>
                    <p className="text-gray-700 text-sm">Laparoscopic surgery creates minimal pain and discomfort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quicker Recovery</h3>
                    <p className="text-gray-700 text-sm">Sooner recovery with best patient-care and precise treatment plan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Reduced Risk of Infection</h3>
                    <p className="text-gray-700 text-sm">Smaller incisions reduces the risks for postoperative infections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Minimal Scarring</h3>
                    <p className="text-gray-700 text-sm">Due to minimal scarring, there are best cosmetic results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Better Accuracy</h3>
                    <p className="text-gray-700 text-sm">Amplified precision due to better view with laparoscopic.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Same-Day Discharge</h3>
                    <p className="text-gray-700 text-sm">It often allows shorter hospital stay, with most patients discharged within 24 hours.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Dr. Kapil */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Dr. Kapil Agrawal at Habilite Clinics Is the Best Appendicitis Surgeon in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal is the best appendix specialist doctor and surgeon for appendicitis treatment in Delhi, with expertise in single-port laparoscopic appendectomy — a minimally invasive technique that ensures quick recovery, reduced pain, and minimal scarring. Supported by a highly skilled team at Habilite Clinics and affiliations with top hospitals in Delhi, Dr. Kapil Agrawal guarantees precise surgical care with excellent outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Patients also benefit from cashless insurance facilities and zero percent EMI options, all backed by a strong commitment to surgical excellence and patient comfort.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Expertise & Experience</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>23+ years of surgical experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>2000+ successful laparoscopic appendectomies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Expert in complex and emergency cases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Practicing at Indraprastha Apollo and Apollo Spectra Hospitals</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Advanced Treatment Options</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Single-port laparoscopic appendectomy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Robotic-assisted laparoscopic surgery</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>24-hour discharge protocol</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Cashless insurance and 0% EMI options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Appendicitis Treatment */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Appendicitis Treatment by Best Appendix Surgeon In Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you&apos;re someone searching on search engine &quot;appendix surgeon near me&quot; then, Dr. Kapil Agrawal offers advanced appendicitis treatment in Delhi with expert care, modern techniques, and patient-friendly facilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Skilled Team of Experts</h3>
                  <p className="text-gray-700 text-sm">
                    We have a skilled team of experts in surgery led by Dr. Kapil Agrawal comprising highly experienced and skilled professionals with specialization in laparoscopic surgical procedures, including appendectomies.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Single-Port Laparoscopic Appendicectomy</h3>
                  <p className="text-gray-700 text-sm">
                    We offer single port laparoscopic appendectomy, a minimally invasive surgical technique that uses only one small incision. This innovative approach results in less postoperative pain, minimum scarring and quicker recovery time compared to traditional multi-port laparoscopy.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Association with Top-Notch Hospitals</h3>
                  <p className="text-gray-700 text-sm">
                    Our services are offered in association with best hospitals in Delhi for Appendicectomy which are equipped with latest medical technologies and amenities. These hospitals are equipped with modern operation theaters, augmented diagnostics tools and all-inclusive care units.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Cashless Insurance & Zero-Percent EMI</h3>
                  <p className="text-gray-700 text-sm">
                    Our hospitals are associated with wide-ranging insurance providers, allowing patients to have treatments without any additional payments. We have zero-EMI options available for our patients with flexible payment plans.
                  </p>
                </div>
              </div>
            </section>

            <div className="max-w-5xl mx-auto">
              <CostCalculator serviceName="Appendix Surgery" />
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <AppendixTestimonials />
              <AppendixFAQ />
              {appendixBlogs.length > 0 && (
                <section>
                  <div className="flex items-center mb-6">
                    <TrendingUp className="text-[#0891b2] mr-3" size={32} />
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Appendicitis Blogs</h2>
                      <p className="text-gray-600 mt-1 text-sm sm:text-base">
                        Expert advice on appendicitis, recovery, and minimally invasive surgery options
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {appendixBlogs.map((post) => (
                      <Link
                        key={post.id}
                        href={`/post/${post.slug}`}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading="lazy"
                            quality={80}
                          />
                        </div>
                        <div className="p-5">
                          <div className="text-xs text-[#0891b2] font-semibold mb-2">{post.category}</div>
                          <h3 className="text-base font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#0891b2] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-3 line-clamp-2 text-sm leading-relaxed">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{new Date(post.publishedDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            <span>By {post.author}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
              <section className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                      <p className="text-gray-700 text-sm">Most patients can return to normal activities within 1-2 weeks after laparoscopic appendectomy. Many patients are discharged within 24-48 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                      <p className="text-gray-700 text-sm">Regular follow-up appointments ensure optimal recovery and address any concerns. Dr. Kapil Agrawal provides comprehensive post-operative care.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Appendix Surgery" />
        </div>
      </div>
    </>
  )
}
