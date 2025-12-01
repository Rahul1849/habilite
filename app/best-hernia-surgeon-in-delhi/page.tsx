import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import HerniaTestimonials from '@/app/laparoscopic-surgery/hernia-surgery/HerniaTestimonials'
import HerniaFAQ from '@/app/laparoscopic-surgery/hernia-surgery/HerniaFAQ'
import { RecoveryTimeline } from '@/components/services/RecoveryTimeline'
import RelatedBlogs from '@/components/services/RelatedBlogs'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Best Hernia Surgeon in Delhi - Dr. Kapil Agrawal | Laparoscopic & Robotic Hernia Repair',
  description:
    'Dr. Kapil Agrawal is the best hernia surgeon in Delhi with 23+ years of experience and 7000+ laparoscopic and robotic hernia surgeries. Expert in inguinal, umbilical, femoral, hiatus, epigastric and incisional hernia repairs. Cashless insurance, 24-hour discharge, high-quality mesh, painless recovery.',
  keywords: [
    'best hernia surgeon delhi',
    'hernia surgery delhi',
    'laparoscopic hernia repair delhi',
    'robotic hernia surgeon delhi',
    'inguinal hernia specialist delhi',
    'umbilical hernia doctor delhi',
    'hernia surgery cost delhi',
    'Dr Kapil Agrawal hernia',
  ],
  openGraph: {
    title: 'Best Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
    description:
      'Internationally trained hernia surgeon performing painless laparoscopic & robotic hernia repairs with 24-hour discharge and cashless insurance.',
    url: 'https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi',
  },
}

const herniaFaqs = [
  {
    question: 'How long do I stay in the hospital after laparoscopic hernia repair?',
    answer: 'Most patients are discharged within 24 hours and resume light activity immediately after laparoscopic or robotic repair.',
  },
  {
    question: 'Can a hernia heal on its own without surgery?',
    answer: 'No. A hernia is a progressive defect in the muscle wall and requires surgical repair to prevent complications.',
  },
  {
    question: 'Which hernia surgery method is better—open, laparoscopic or robotic?',
    answer:
      'Laparoscopic and robotic techniques offer smaller incisions, less pain, faster recovery and minimal scarring. Open surgery is reserved for very large or complex hernias.',
  },
  {
    question: 'Is hernia surgery covered by insurance in India?',
    answer:
      'Yes. Most health insurance plans cover hernia surgery. Habilite Clinics supports cashless approvals and flexible EMI assistance.',
  },
  {
    question: 'How long does it take to recover after hernia surgery?',
    answer:
      'Desk jobs resume in 7–10 days after minimally invasive repair, while physically demanding work may require 3–4 weeks of rest.',
  },
  {
    question: 'Which diagnostic test is best for hernia detection?',
    answer:
      'Clinical examination is usually sufficient. Ultrasound, CT scan, or MRI are ordered for complex, recurrent, or abdominal wall hernias.',
  },
  {
    question: 'What size or type of hernia typically requires surgery?',
    answer:
      'Any symptomatic, enlarging, or irreducible hernia should be repaired to avoid obstruction or strangulation of the intestine.',
  },
  {
    question: 'Can I return to work quickly after hernia surgery?',
    answer:
      'Yes. Minimally invasive techniques enable return to light work within 1–2 weeks and to strenuous activity in 3–4 weeks, depending on the job.',
  },
]

const faqSchema = getFAQSchema({
  title: 'Hernia Surgery FAQs',
  description: 'Common questions answered by Dr. Kapil Agrawal related to hernia symptoms, surgery, insurance, and recovery timelines.',
  faqs: herniaFaqs,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'Laparoscopic & Robotic Hernia Surgery',
  description:
    'Advanced hernia program by Dr. Kapil Agrawal covering inguinal, umbilical, femoral, hiatus, and complex incisional hernias with laparoscopic, robotic, and abdominal wall reconstruction techniques.',
  url: '/best-hernia-surgeon-in-delhi',
  procedureType: 'Laparoscopic Hernia Repair',
  bodyLocation: 'Abdominal Wall / Groin',
  medicalSpecialty: ['LaparoscopicSurgery', 'GeneralSurgery'],
  followup: 'Same-day discharge with structured physiotherapy, tele-support, and in-person review within 10 days.',
  preparation: 'Pre-operative imaging, anaesthesia clearance, optimisation of comorbidities, and fasting guidelines.',
  howPerformed:
    'Hernia contents are reduced laparoscopically or robotically, followed by placement of high-quality mesh to reinforce the abdominal wall.',
  areaServed: ['Delhi', 'Gurgaon', 'Noida', 'India'],
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'Hernia Surgery', url: '/best-hernia-surgeon-in-delhi' },
])

export default function BestHerniaSurgeonPage() {

  return (
    <>
      <StructuredData data={procedureSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      <div className="pt-20 pb-16">
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/hernia-surgeon-delhi-india.webp"
              alt="Best Hernia Surgeon in Delhi - Dr. Kapil Agrawal | Laparoscopic & Robotic Hernia Repair"
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

        <div className="container-custom mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-hernia-surgeon-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Hernia Surgeon in <span className="text-[#0891b2]">Delhi, India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Expert Surgeon with Over 23 Years of Experience | Internationally Trained Expert | Painless Surgery for Fast Recovery | High-Quality Mesh to Prevent Recurrence |
              Cashless Insurance Facility | Discharge within 24 Hours
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Experience' },
                { icon: Users, text: '7000+ Hernia Repairs' },
                { icon: TrendingUp, text: 'Laparoscopic & Robotic' },
                { icon: Clock, text: '24-Hour Discharge' },
              ].map((item) => (
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
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <ConsultationForm serviceName="Hernia Surgery" serviceSlug="best-hernia-surgeon-in-delhi" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Dr. Kapil Agrawal — Leading Laparoscopic & Robotic Hernia Surgeon in Delhi</h2>
              <p className="text-sm sm:text-base">
                A hernia is a common condition that develops when tissue or intestine pushes through a weak spot in the surrounding muscle. Dr. Kapil Agrawal has performed more
                than 7,000 advanced laparoscopic and robotic hernia repairs, delivering painless surgery, minimal hospital stay, and nearly zero recurrence rates. As Senior
                Consultant at Apollo Hospitals, he treats simple to complex hernias with the latest technology and globally accepted protocols.
              </p>
              <p className="text-sm sm:text-base">
                His dedicated hernia program at Habilite Clinics ensures high-quality mesh, meticulous dissection, post-operative physiotherapy, and complete cashless insurance
                support, making him the trusted choice for patients across Delhi NCR and international destinations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What is a Hernia &amp; Why Does it Occur?</h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Hernia is the protrusion of an organ or fat through a weak spot in the muscle wall, causing a visible bulge and discomfort. Some hernias are present at birth, while
                others develop due to lifestyle or medical reasons.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'Congenital weakness or improper closure of abdominal muscles',
                  'Aging, obesity, pregnancy, or chronic cough',
                  'Heavy lifting, excessive strain, or repeated surgeries',
                  'Sudden weight gain or rapid weight loss',
                  'Smoking-related weakness and poor tissue healing',
                ].map((item) => (
                  <div key={item} className="flex items-start text-gray-700">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Types of Hernia Treated by Dr. Kapil Agrawal</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: 'Inguinal Hernia',
                    desc: 'Most common hernia in the groin, especially in men. Treated with laparoscopic TEP/TAPP and robotic techniques.',
                  },
                  {
                    title: 'Hiatus Hernia',
                    desc: 'Occurs when the stomach slips into the chest via the diaphragm. Requires specialized anti-reflux or fundoplication surgery.',
                  },
                  { title: 'Femoral Hernia', desc: 'More common in women, located in the groin/thigh. Very high risk of strangulation if untreated.' },
                  { title: 'Umbilical Hernia', desc: 'Develops around the navel, often after pregnancy or obesity. Managed with lap/robotic mesh repair.' },
                  { title: 'Epigastric Hernia', desc: 'Appears between the belly button and chest. Usually repaired with minimally invasive mesh placement.' },
                  {
                    title: 'Incisional Hernia',
                    desc: 'Occurs at previous surgical scars. Can be complex and may require robotic TAR or abdominal wall reconstruction.',
                  },
                ].map((type) => (
                  <div key={type.title} className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-semibold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{type.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Symptoms of Hernia</h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Hernia typically presents as a visible or palpable lump that may reduce when lying down (reducible). Long-standing hernias can become irreducible and risk
                strangulation.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 space-y-2">
                {[
                  'Visible bulge in abdomen or groin that enlarges on coughing or straining',
                  'Dull ache, heaviness, or sharp pain in the affected area',
                  'Burning sensation, bloating, or indigestion (especially in hiatus hernia)',
                  'Irreducible bulge with severe pain, vomiting, or redness signals emergency strangulation',
                ].map((symptom) => (
                  <div key={symptom} className="flex items-start text-gray-800 text-sm sm:text-base">
                    <CheckCircle2 className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Will My Hernia Heal on Its Own?</h2>
              <p>
                Unfortunately, hernias never heal by themselves. They gradually enlarge and may trap the intestines, leading to obstruction or strangulation. Non-reducible hernias
                are emergencies. Surgical repair is the only permanent solution and should be done proactively before complications set in.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Best Hernia Surgeries Done by Dr. Kapil Agrawal</h2>
              {[
                {
                  title: '1. Open Hernia Repair',
                  desc: 'Preferred for very large, recurrent, strangulated, or mesh-removal cases. A direct incision is made over the defect and high-quality mesh reinforces the weakened area.',
                  points: [
                    'Indicated for giant or complex hernias',
                    'Used when patients cannot undergo general anaesthesia required for laparoscopy',
                    'Allows bowel resection if strangulation occurs',
                  ],
                },
                {
                  title: '2. Laparoscopic Hernia Repair (TEP/TAPP)',
                  desc: 'Three tiny incisions are used to visualize the hernia on screen, reduce the protruding tissue, and place mesh from behind the abdominal wall. Recovery is fast with minimal pain.',
                  points: [
                    'Daycare procedure with 24-hour discharge',
                    'Minimal discomfort and scarless outcome',
                    'Ideal for bilateral/recurring inguinal, femoral, and umbilical hernias',
                  ],
                },
                {
                  title: '3. Robotic Hernia Repair',
                  desc: 'Advanced version of laparoscopy suitable for huge or complex defects, obese patients, and abdominal wall reconstructions. Offers unparalleled precision and ergonomics.',
                  points: [
                    'Enhanced dexterity for suturing and mesh placement',
                    'Lower recurrence and complication rates',
                    'Excellent for retromuscular mesh placement without fixation',
                  ],
                },
                {
                  title: '4. Robotic eTEP / TAR (Transversus Abdominis Release)',
                  desc: 'Used for abdominal wall defects >12 cm. Accesses the retro-rectus space, reconstructs the abdominal wall physiologically, and places large mesh without entering the abdominal cavity.',
                  points: [
                    'Restores core strength and contour',
                    'Eliminates need for drains and staples',
                    'Short hospital stay with rapid ambulation',
                  ],
                },
              ].map((procedure) => (
                <div key={procedure.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">{procedure.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base">{procedure.desc}</p>
                  <ul className="space-y-2">
                    {procedure.points.map((point) => (
                      <li key={point} className="flex items-start text-gray-700 text-sm sm:text-base">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Advantages of Laparoscopic &amp; Robotic Hernia Repair</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'Painless surgery with minimal blood loss',
                  'Very small incisions and excellent cosmetic results',
                  'Early mobilisation, faster discharge and return to work',
                  'High-quality mesh placed with precision, reducing recurrence',
                  'Better view of both groins, ideal for bilateral hernias',
                  'Suitable for diabetics, elderly and high BMI patients',
                ].map((advantage) => (
                  <div key={advantage} className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>{advantage}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Dr. Kapil Agrawal is the Best Hernia Surgeon in Delhi</h2>
              <div className="space-y-3 text-gray-700">
                {[
                  'Internationally trained surgeon with 23+ years experience and 7000+ advanced hernia repairs',
                  'Affiliated with state-of-the-art hospitals and robotic theatres across Delhi NCR',
                  'Uses premium meshes, tackers and absorbable sutures to ensure zero recurrence and infection',
                  'Customized treatment plans based on hernia size, location and complexity',
                  'Complete cashless insurance desk plus zero-interest EMI options for all procedures',
                  'Dedicated team for postoperative physiotherapy, wound care and tele-follow-up',
                ].map((reason) => (
                  <div key={reason} className="flex items-start text-sm sm:text-base">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Explore Other Laparoscopic Treatments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Gallbladder Surgery',
                    description: 'Painless laparoscopic cholecystectomy for gallstones with 24-hour discharge.',
                    href: '/best-gallbladder-stone-surgeon-delhi',
                    linkText: 'Best Gallbladder Surgeon in Delhi for Laparoscopic Cholecystectomy',
                  },
                  {
                    title: 'Appendix Surgery',
                    description: 'Single-incision and laparoscopic appendectomies for fast recovery.',
                    href: '/best-appendix-surgeon-in-delhi',
                    linkText: 'Best Appendix Surgeon in Delhi for Laparoscopic Appendectomy',
                  },
                ].map((card) => (
                  <div key={card.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{card.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-4">{card.description}</p>
                    <Link href={card.href} className="text-[#0891b2] font-semibold text-sm hover:underline">
                      {card.linkText} →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="max-w-5xl mx-auto">
            <CostCalculator serviceName="Hernia Surgery" />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <HerniaTestimonials />
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                    <p className="text-gray-700 text-sm">Most patients can resume normal activities within 1-2 weeks after laparoscopic or robotic repair.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Structured follow-up visits, physiotherapy guidance, and tele-support help ensure complete recovery.</p>
                  </div>
                </div>
              </div>
            </section>
            <RecoveryTimeline />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Hernia Surgery" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <HerniaFAQ />
            <RelatedBlogs
              serviceName="Hernia"
              serviceKeywords={['hernia', 'inguinal hernia', 'umbilical hernia', 'hiatal hernia', 'hiatus hernia', 'hernia repair', 'hernia surgery']}
              maxPosts={3}
            />
          </div>
        </div>
      </div>
    </>
  )
}


