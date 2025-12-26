import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import AppendixFAQ from '@/app/laparoscopic-surgery/appendix-surgery/AppendixFAQ'
import AppendixTestimonials from '@/app/laparoscopic-surgery/appendix-surgery/AppendixTestimonials'
import { RecoveryTimeline } from '@/components/services/RecoveryTimeline'
import RelatedBlogs from '@/components/services/RelatedBlogs'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema, getServiceSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Best Appendicitis Surgeon in Delhi - Dr. Kapil Agrawal | Laparoscopic Appendectomy | 23 Years Experience',
  description:
    'Dr. Kapil Agrawal is the best appendicitis surgeon in Delhi with 23+ years of experience and 2000+ laparoscopic appendectomies. Expert in single-port laparoscopic appendectomy with faster recovery, minimal scarring, and excellent outcomes. 24-hour discharge, cashless insurance available. Book consultation now.',
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
    url: 'https://www.habiliteclinics.com/best-appendix-surgeon-in-delhi',
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
    canonical: 'https://www.habiliteclinics.com/best-appendix-surgeon-in-delhi',
  },
}

const appendixFaqs = [
  {
    question: 'What is the main cause of appendicitis?',
    answer:
      'Appendicitis occurs when the appendix is blocked by hardened stool, infection, or swollen lymph tissue, leading to inflammation and bacterial growth.',
  },
  {
    question: 'How do I know if I need appendix surgery?',
    answer:
      'Acute pain in the lower right abdomen accompanied by fever, nausea, and vomiting warrants immediate evaluation. Surgery is advised soon after diagnosis to prevent rupture.',
  },
  {
    question: 'What is the recovery time for laparoscopic appendix surgery?',
    answer: 'Most patients recover within 3–5 days and resume normal activity in a week after laparoscopic appendectomy.',
  },
  {
    question: 'Is appendix surgery a major surgery?',
    answer:
      'Laparoscopic appendectomy is minimally invasive, performed through tiny incisions, and associated with quick recovery and minimal complications.',
  },
  {
    question: 'How much does appendix surgery cost in Delhi?',
    answer:
      'At Habilite Clinics, laparoscopic appendix surgery typically ranges from ₹55,000 to ₹90,000 depending on complexity, hospital choice, and room category.',
  },
]

const faqSchema = getFAQSchema({
  title: 'Appendicitis Surgery FAQs',
  description: 'Understand causes, symptoms, costs, and recovery timelines for laparoscopic appendectomy by Dr. Kapil Agrawal.',
  faqs: appendixFaqs,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'Laparoscopic Appendectomy',
  description:
    'Single-port and multi-port laparoscopic appendectomy by Dr. Kapil Agrawal featuring 24-hour discharge, cashless insurance, and scar-minimising techniques.',
  url: '/best-appendix-surgeon-in-delhi',
  procedureType: 'Laparoscopic Appendectomy',
  bodyLocation: 'Appendix / Lower Right Abdomen',
  followup: 'Tele follow-up within 48 hours and clinic visit after 7 days with wound review and diet guidance.',
  preparation: 'Emergency evaluation, blood work, ultrasound, and anaesthesia clearance with NPO instructions.',
  howPerformed:
    'Through keyhole incisions or a single umbilical port, the inflamed appendix is mobilised, clipped, and removed safely with minimal blood loss.',
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'Appendix Surgery', url: '/best-appendix-surgeon-in-delhi' },
])

const serviceSchema = getServiceSchema({
  name: 'Appendix Surgery - Laparoscopic Appendectomy',
  description: 'Expert laparoscopic appendectomy by Dr. Kapil Agrawal in Delhi, India. Single-port and multi-port laparoscopic appendectomy with 24-hour discharge, cashless insurance, and scar-minimising techniques.',
  url: '/best-appendix-surgeon-in-delhi',
  serviceType: 'Medical Procedure',
  category: 'Laparoscopic Surgery',
  areaServed: ['Delhi', 'NCR', 'India'],
})

export default function BestAppendixSurgeonPage() {

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
              src="/images/appendix-surgeon-delhi-india.webp"
              alt="Best Appendicitis Surgeon in Delhi - Dr. Kapil Agrawal | Expert Laparoscopic Appendectomy | 23 Years Experience"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-appendicitis-surgeon-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Appendicitis Surgeon in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Expert Surgeon with Over 23 Years of Experience | Internationally Trained Expert | Painless Surgery for Fast Recovery | Cashless Insurance Facility Available | Discharge
              within 24-48 hours
            </p>
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
            {/* Service Image */}
            <div className="mb-8">
              <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
                <Image
                  src="/images/appendix-surgeon.png"
                  alt="Appendicitis surgery specialist Doctor in Delhi Dr Kapil Agrawal" title='Dr Kapil Agrawal best Appendix surgeon in Delhi'
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <ConsultationForm serviceName="Appendix Surgery" serviceSlug="best-appendix-surgeon-in-delhi" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* About */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Dr. Kapil Agrawal - Expert Laparoscopic Surgeon for Appendicitis Treatment at Habilite Clinics</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal is a highly experienced surgeon in appendicitis treatment, known for his surgical excellence in laparoscopic appendectomy—a minimally invasive procedure that
                removes the inflamed appendix through small incisions. This technique involves reduced pain, shorter hospital stays, and faster recovery, making it the best choice for
                appendicitis management.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal has successfully executed numerous laparoscopic appendectomies, earning the trust of various patients with his precision, excellent surgical outcomes, and best
                patient care. He possesses outstanding skills to effectively deal with simple and complex cases, including emergency appendectomies, ensuring a high standard of patient care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr. Kapil Agrawal, a laparoscopic and robotic surgeon in Delhi, is widely regarded as the best appendicitis surgeon in Delhi, India. With over 23 years of experience and more than
                7,000 successful surgeries, he is known for delivering excellent patient outcomes. Dr. Kapil Agrawal is also a Senior consultant at Apollo group of hospitals and he is associated
                with many top hospitals in Delhi NCR to offer safe, effective, and advanced surgical care.
              </p>
            </section>

            {/* What is Appendix */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is Appendix?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Appendix is a small, finger-shaped structure that is attached to the large intestine (colon) on the lower right side of the abdomen. Though it does not play any important role,
                still its inflammation can cause appendicitis and result in various other health complications when not treated for longer time.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Appendicitis causes sudden pain around your navel and usually shifts to the lower abdomen. Pain gets worse when you walk or create any abrupt movement. Surgery is the only effective
                treatment.
              </p>
            </section>

            {/* What is Appendix Surgery */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is Appendix Surgery?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Appendix surgery (appendectomy), is the surgical removal of the appendix. It is the most effective treatment for appendicitis, to prevent serious complications. The procedure
                involves removing the inflamed appendix prior it gets burst.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The surgery is usually performed with general anesthesia and involves two methods—open appendectomy or laparoscopic appendectomy. In an open appendectomy, a single large incision is
                made in the lower side of the abdomen to dissect the appendix. While in laparoscopic appendectomy, there are small incisions made and the appendix is removed using a camera and long
                instruments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The second method is less invasive, thus aids in faster recovery, minimal pain and minimal scarring. The method can be opted based on the state of appendicitis and the patient&apos;s
                medical history.
              </p>
            </section>

            {/* Goals */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">The Goal of Appendix Surgery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Avoid Appendix Burst-Out', desc: 'Main goal to remove inflamed appendix before it ruptures, resulting in other serious complications.' },
                  { title: 'Manage Pain and Discomfort', desc: 'Appendix surgery helps to manage your pain and symptoms timely related to appendicitis.' },
                  { title: 'Prevent Infection and Peritonitis', desc: 'Timely removal of appendix helps in preventing spread of infection to abdominal cavity, thus preventing peritonitis.' },
                  { title: 'Minimize Complications', desc: 'Timely surgery minimizes the risk of complications like abscess formation.' },
                  { title: 'Faster Recovery', desc: 'Especially the laparoscopic surgery, the goal is to ensure a faster recovery and return back to normal activities.' },
                  { title: 'Minimize Recurrence', desc: 'Appendectomy reduces the risks for future appendicitis.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Steps */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Important Steps in the Appendix Surgery</h2>
              <div className="space-y-4">
                {[
                  { title: 'Diagnosis', desc: 'Diagnosis through physical examination, blood tests and imaging to confirm appendicitis.' },
                  { title: 'Anesthesia', desc: 'Applying general anesthesia to ensure that the patient is free from all discomfort and pain during surgery.' },
                  { title: 'Incision', desc: 'One large incision for open surgery or several small incisions for laparoscopic surgery.' },
                  { title: 'Appendix Removal', desc: 'Careful removal of inflamed appendix while safeguarding the surrounding tissues.' },
                  { title: 'Closing Incisions', desc: 'Incisions are closed using stitches or staples with high precision.' },
                  { title: 'Postoperative Care', desc: 'Monitoring the patient’s recovery process, pain management and activity restrictions.' },
                ].map((step, idx) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="bg-[#0891b2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">{idx + 1}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-700 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Symptoms */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Symptoms of Appendicitis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">The presentation of acute appendicitis can vary, but the classic symptoms include:</p>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-4">
                <ul className="space-y-2 text-gray-700">
                  {[
                    {
                      title: 'Abdominal Pain',
                      detail: 'Acute appendicitis typically presents as vague abdominal pain that starts around the umbilical region and later localizes to the right lower part of the abdomen.',
                    },
                    { title: 'Nausea and Vomiting', detail: 'Nausea and vomiting may occur after the onset of abdominal pain.' },
                    { title: 'Anorexia', detail: 'Loss of appetite is a common early symptom.' },
                    { title: 'Fever', detail: 'A low-grade fever may be present; high fever can indicate complications like perforation.' },
                    { title: 'Rebound Tenderness', detail: 'Severe pain when pressure in the right lower abdomen is suddenly released.' },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start">
                      <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>
                        <strong>{item.title}:</strong> {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Stages */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Stages of Appendicitis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Appendicitis advances through various stages and understanding them can assist in creating personalized treatment plans.</p>
              <div className="space-y-4">
                {[
                  { title: 'Acute Appendicitis', desc: 'Sudden inflammation causing pain, nausea, and fever. Needs timely surgery.' },
                  { title: 'Suppurative Appendicitis', desc: 'Appendix swells and fills with pus leading to intense pain and fever.' },
                  { title: 'Gangrenous Appendicitis', desc: 'Inflammation restricts blood flow leading to tissue death and severe complications.' },
                  { title: 'Perforated Appendicitis', desc: 'Appendix ruptures spreading infection across abdomen; requires emergency surgery.' },
                  { title: 'Appendiceal Abscess', desc: 'Pus-filled pocket forms when burst appendix is walled off by tissues; needs drainage plus surgery.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Diagnosis */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Diagnosis of Appendicitis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The diagnosis of acute appendicitis is primarily clinical but often supplemented by imaging and laboratory tests to confirm and assess the severity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Physical Examination', desc: 'Abdominal examination, checking for rebound tenderness and other diagnostic signs.' },
                  { title: 'Blood Tests', desc: 'Complete blood count (CBC) to check for elevated white blood cell count indicating infection.' },
                  { title: 'Ultrasound', desc: 'Imaging test that can visualize the appendix and detect signs of inflammation or blockage.' },
                  { title: 'CT Scan', desc: 'Detailed imaging providing clear visualization of the appendix and surrounding structures.' },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Surgery Types */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Types of Appendix Surgery</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Dr. Kapil Agrawal offers various surgical approaches for appendicitis treatment, tailored to the patient&apos;s condition and history.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  {
                    title: 'Open Appendectomy',
                    desc: 'Traditional method with a single large incision in the lower abdomen. Necessary in complex or ruptured cases.',
                    bullets: ['Used for complicated or ruptured cases', 'Better visualization in emergency situations'],
                  },
                  {
                    title: 'Laparoscopic Appendectomy',
                    desc: 'Performed through 3-4 small incisions using a camera and instruments. Preferred for most cases.',
                    bullets: ['Smaller incisions and minimal scarring', 'Faster recovery and return to activities', 'Reduced pain and lower risk of infection'],
                  },
                  {
                    title: 'Single Port Laparoscopic Appendectomy',
                    desc: 'Minimally invasive technique using only one small incision for reduced pain and minimal scarring.',
                    bullets: ['Single small incision', 'Minimal scarring and faster recovery'],
                  },
                  {
                    title: 'Robotic-Assisted Laparoscopic Appendectomy',
                    desc: 'Utilizes robotic systems for better accuracy combining benefits of laparoscopy and robotics.',
                    bullets: ['Enhanced precision and accuracy', 'Better visualization and control'],
                  },
                ].map((card) => (
                  <div key={card.title} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{card.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{card.desc}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {card.bullets.map((point) => (
                        <li key={point} className="flex items-start">
                          <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Advantages */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Advantages of Laparoscopic Appendix Surgery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Minimally Invasive', desc: 'Small incisions are less traumatic compared to open surgery.' },
                  { title: 'Minimal Pain', desc: 'Laparoscopic surgery creates minimal pain and discomfort.' },
                  { title: 'Quicker Recovery', desc: 'Faster recovery with precise treatment plans.' },
                  { title: 'Reduced Risk of Infection', desc: 'Smaller incisions reduce postoperative infection risk.' },
                  { title: 'Minimal Scarring', desc: 'Offers excellent cosmetic results.' },
                  { title: 'Better Accuracy', desc: 'Enhanced visualization ensures precise surgery.' },
                  { title: 'Same-Day Discharge', desc: 'Many patients return home within 24 hours.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Dr. Kapil Agrawal at Habilite Clinics Is the Best Appendicitis Surgeon in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal is the best appendix specialist doctor and surgeon for appendicitis treatment in Delhi, with expertise in single-port laparoscopic appendectomy — a minimally
                invasive technique that ensures quick recovery, reduced pain, and minimal scarring. Supported by a highly skilled team at Habilite Clinics and affiliations with top hospitals in
                Delhi, Dr. Kapil Agrawal guarantees precise surgical care with excellent outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Patients also benefit from cashless insurance facilities and zero percent EMI options, all backed by a strong commitment to surgical excellence and patient comfort.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Expertise & Experience</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {['23+ years of surgical experience', '2000+ successful laparoscopic appendectomies', 'Expert in complex and emergency cases', 'Practicing at Apollo hospitals'].map(
                      (item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Advanced Treatment Options</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {['Single-port laparoscopic appendectomy', 'Robotic-assisted laparoscopic surgery', '24-hour discharge protocol', 'Cashless insurance and 0% EMI options'].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Treatment Highlights */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Appendicitis Treatment by Best Appendix Surgeon In Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you&apos;re someone searching on search engine &quot;appendix surgeon near me&quot; then, Dr. Kapil Agrawal offers advanced appendicitis treatment in Delhi with expert care,
                modern techniques, and patient-friendly facilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Skilled Team of Experts',
                    desc: 'Highly experienced team specializing in laparoscopic surgical procedures, including appendectomies.',
                  },
                  {
                    title: 'Single-Port Laparoscopic Appendicectomy',
                    desc: 'Minimally invasive technique using one small incision for less pain and quicker recovery.',
                  },
                  {
                    title: 'Association with Top-Notch Hospitals',
                    desc: 'State-of-the-art operation theatres, advanced diagnostics, and comprehensive care units in Delhi NCR.',
                  },
                  {
                    title: 'Cashless Insurance & Zero-Percent EMI',
                    desc: 'Dedicated insurance coordination helps with paperwork; flexible zero-interest EMI plans available.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="max-w-5xl mx-auto">
            <CostCalculator serviceName="Appendix Surgery" />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <AppendixTestimonials />
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
            <RecoveryTimeline />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Appendix Surgery" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <AppendixFAQ />
            <RelatedBlogs
              serviceName="Appendix"
              serviceKeywords={['appendicitis', 'appendix', 'appendectomy', 'appendix surgery']}
              maxPosts={3}
            />
          </div>
        </div>
      </div>
    </>
  )
}


