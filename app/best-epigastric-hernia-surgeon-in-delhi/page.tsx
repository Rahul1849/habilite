import { Metadata } from 'next'
import Image from 'next/image'
import { Award, CheckCircle2, Clock, User, Users, TrendingUp, Activity, Zap, Shield, Heart } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import { RecoveryTimeline } from '@/components/services/RecoveryTimeline'
import RelatedBlogs from '@/components/services/RelatedBlogs'
import EpigastricHerniaFAQ from './EpigastricHerniaFAQ'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema, getServiceSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Best Epigastric Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
  description:
    'Dr. Kapil Agrawal is the best epigastric hernia surgeon in Delhi with 23+ years of experience. Expert in laparoscopic and robotic epigastric hernia repair with high-quality mesh, painless surgery, and 24-hour discharge.',
  keywords: [
    'best epigastric hernia surgeon delhi',
    'epigastric hernia surgery delhi',
    'laparoscopic epigastric hernia repair delhi',
    'robotic epigastric hernia surgeon delhi',
    'upper abdomen hernia specialist delhi',
    'epigastric hernia treatment delhi',
    'Dr. Kapil Agrawal epigastric hernia',
  ],
  openGraph: {
    title: 'Best Epigastric Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
    description:
      'Expert laparoscopic and robotic epigastric hernia repair by Dr. Kapil Agrawal in Delhi. Painless surgery, high-quality mesh, 24-hour discharge.',
    url: 'https://www.habiliteclinics.com/best-epigastric-hernia-surgeon-in-delhi',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/hernia-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Epigastric Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/best-epigastric-hernia-surgeon-in-delhi',
  },
}

const heroHighlights = [
  { icon: Award, text: 'Expert Surgeon with Over 23 Years of Experience' },
  { icon: Users, text: 'Internationally Trained Expert - Dr. Kapil Agrawal' },
  { icon: Clock, text: 'Painless Surgery for Fast Recovery' },
  { icon: Shield, text: 'High quality mesh to prevent recurrence' },
  { icon: CheckCircle2, text: 'Cashless Insurance Facility Available' },
  { icon: TrendingUp, text: 'Discharge within 24 hours' },
]

const faqItems = [
  {
    question: 'What is the recovery time for laparoscopic epigastric hernia surgery?',
    answer: 'Most patients recover within 1-2 weeks and can resume light activities shortly after the procedure.',
  },
  {
    question: 'Is epigastric hernia surgery painful?',
    answer: 'With laparoscopic surgery, post-operative pain is minimal and manageable with medication.',
  },
  {
    question: 'What happens if an epigastric hernia is left untreated?',
    answer: 'Untreated hernias can grow larger and may lead to complications like strangulation, which requires emergency surgery.',
  },
  {
    question: 'Is laparoscopic surgery safe?',
    answer: 'Yes, laparoscopic hernia repair is a safe and effective method with a high success rate and low risk of complications.',
  },
]

const faqSchema = getFAQSchema({
  title: 'Epigastric Hernia FAQs',
  description: 'Expert guidance on epigastric hernia diagnosis, treatment options, surgery costs, and recovery.',
  faqs: faqItems,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'Laparoscopic & Robotic Epigastric Hernia Repair',
  description:
    'Advanced epigastric hernia repair program by Dr. Kapil Agrawal covering laparoscopic, robotic-assisted, and open techniques with high-quality mesh and rapid recovery.',
  url: '/best-epigastric-hernia-surgeon-in-delhi',
  procedureType: 'Laparoscopic/Robotic Epigastric Hernia Repair',
  bodyLocation: 'Upper Abdomen (Between Umbilicus and Rib Cage)',
  preparation: 'Physical examination, ultrasound or CT scan if needed, and pre-operative optimization.',
  followup: 'Discharge within 24 hours with structured follow-up visits and activity guidance.',
  howPerformed:
    'Hernia contents are reduced, the defect is repaired, and high-quality mesh is placed to reinforce the weakened area in the upper abdominal wall.',
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'Hernia Surgery', url: '/best-hernia-surgeon-in-delhi' },
  { name: 'Epigastric Hernia Surgery', url: '/best-epigastric-hernia-surgeon-in-delhi' },
])

const serviceSchema = getServiceSchema({
  name: 'Epigastric Hernia Surgery - Laparoscopic & Robotic Repair',
  description:
    'Expert laparoscopic and robotic epigastric hernia surgery by Dr. Kapil Agrawal in Delhi, India. Advanced minimally invasive procedure with high-quality mesh, painless recovery, and 24-hour discharge.',
  url: '/best-epigastric-hernia-surgeon-in-delhi',
  serviceType: 'Medical Procedure',
  category: 'Laparoscopic Surgery',
  areaServed: ['Delhi', 'NCR', 'India'],
})

export default function BestEpigastricHerniaSurgeonPage() {
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
              src="/images/hernia-surgeon-delhi-india.webp"
              alt="Best Epigastric Hernia Surgeon in Delhi - Dr. Kapil Agrawal | Laparoscopic & Robotic Epigastric Hernia Repair"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-epigastric-hernia-surgeon-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Epigastric Hernia Surgeon in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
              <Award size={16} className="text-[#f59e0b]" />
              <span>Expert Surgeon with Over 23 Years of Experience</span>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Epigastric hernia occurs in the upper abdomen between the navel and the chest when fatty tissue pushes through a weak area in the abdominal wall. Though often small, it can become painful and complex over time. Early evaluation prevents complications and ensures durable repair.
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
              <ConsultationForm serviceName="Epigastric Hernia Surgery" serviceSlug="best-epigastric-hernia-surgeon-in-delhi" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Is that lump on your upper stomach an Epigastric Hernia?</h2>
              <p className="text-gray-700 leading-relaxed">
                Epigastric hernia may appear small in shape but it develops complications if left untreated. It occurs in the upper abdomen between the navel and the chest when fatty tissues push through a weak area in the abdominal wall. A person suffering from epigastric hernia is likely to feel discomfort or trapping between the chest and navel. While often mild to moderate in pain, it can become complex over time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Common Signs and Symptoms of Epigastric Hernia</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 space-y-3">
                {[
                  'A visible and noticeable bulge or lump in the upper abdominal area',
                  'Pain or tenderness in the abdomen during physical activity or deep breathing',
                  'Unbearable discomfort while coughing, laughing, or straining',
                  'Digestive problems, nausea',
                ].map((symptom) => (
                  <div key={symptom} className="flex items-start text-gray-800 text-sm sm:text-base">
                    <CheckCircle2 className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                If you experience any of these symptoms, consult the best hernia doctor in Delhi at Habilite Clinics for an accurate diagnosis and treatment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Choose Habilite Clinics for Epigastric Hernia Treatment?</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: 'Experienced Hernia Surgeons',
                    desc: 'Led by Dr. Kapil Agrawal with 23+ years of experience and a proven track record of successful hernia surgeries.',
                  },
                  {
                    title: 'Advanced Technology',
                    desc: 'Latest minimally invasive laparoscopic and robotic techniques for reduced pain, small incisions, and faster recovery.',
                  },
                  {
                    title: 'Patient-Centric Care',
                    desc: 'Personalized care from consultation to post-surgery follow-ups, addressing your specific needs.',
                  },
                  {
                    title: 'Affordable Surgery Cost',
                    desc: 'High-quality hernia treatment at competitive prices with transparent estimates and insurance/EMI assistance.',
                  },
                  {
                    title: 'Modern Facilities',
                    desc: 'State-of-the-art infrastructure and hygienic environment for a seamless treatment experience.',
                  },
                  {
                    title: 'Benefits of Laparoscopic Surgery',
                    desc: 'Lower complications, minimal blood loss, shorter stay (often same-day discharge), quick recovery, tiny scars, and reduced recurrence.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Who Needs Epigastric Hernia Treatment?</h2>
              <p className="text-gray-700 leading-relaxed">
                Not all hernias need immediate surgery, but medical checkup becomes necessary if you have significant pain between the chest and navel, increasing bulge size, discomfort on coughing or breathing, or frequent digestive issues after the bulge appears.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                The major complication of ignoring an epigastric hernia is strangulation, where the blood supply to the tissue gets cut off. Do not wait if you notice these signs.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Affordable Epigastric Hernia Surgery in Delhi</h2>
              <p className="text-gray-700 leading-relaxed">
                We offer transparent and competitive pricing. Costs vary by hernia severity, surgical method, and overall health. Typical packages include consultation, diagnostics as required, surgery and hospital charges, and post-operative care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our care does not end after surgery. We provide detailed recovery guidelines, follow-up consultations, and ongoing support to ensure complete healing.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Surgical Approaches for Epigastric Hernia</h2>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  1. Laparoscopic Surgery for Epigastric Hernia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Minimally invasive approach using small incisions and a laparoscope to diagnose and repair the hernia. Delivers less pain, tiny scars, reduced infection risk, and quicker return to normal activities.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="text-[#0891b2] mr-2" size={24} />
                  2. Robotic Assisted Surgery for Epigastric Hernia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The most advanced technique for complex or recurrent hernias, offering enhanced visualisation and precision through robotic systems. Ideal for challenging upper abdominal defects.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Shield className="text-[#0891b2] mr-2" size={24} />
                  3. Open Surgery for Epigastric Hernia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Traditional approach recommended for larger or complex hernias when minimally invasive options are unsuitable. Provides robust repair of the abdominal wall with high-quality mesh.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Seamless Journey at Habilite Clinics</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { title: 'Initial Consultation', desc: 'Comprehensive evaluation by our hernia specialists to understand your symptoms and medical history.' },
                  { title: 'Diagnosis', desc: 'Advanced imaging (ultrasound/CT) as needed for accurate assessment.' },
                  { title: 'Personalized Treatment Plan', desc: 'Tailored surgical recommendation based on hernia size, location, and complexity.' },
                  { title: 'Surgery Day', desc: 'Performed by an expert team using advanced laparoscopic or robotic systems.' },
                  { title: 'Post-Surgery Care', desc: 'Clear recovery guidance, follow-ups, and ongoing support for smooth healing.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
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
                    <p className="text-gray-700 text-sm">
                      Most patients can return to normal activities within 1-2 weeks after laparoscopic or robotic epigastric hernia repair. Discharge within 24 hours for minimally invasive procedures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">
                      Structured follow-up visits, physiotherapy and activity guidance help ensure complete recovery and prevent recurrence.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <RecoveryTimeline />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <CostCalculator serviceName="Epigastric Hernia Surgery" />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Epigastric Hernia Surgery" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <EpigastricHerniaFAQ />
            <RelatedBlogs
              serviceName="Epigastric Hernia"
              serviceKeywords={['epigastric hernia', 'upper abdomen hernia', 'hernia repair', 'hernia surgery', 'laparoscopic hernia', 'robotic hernia']}
              maxPosts={3}
            />
          </div>
        </div>
      </div>
    </>
  )
}











