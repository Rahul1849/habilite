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
import FemoralHerniaFAQ from './FemoralHerniaFAQ'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema, getServiceSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Best Femoral Hernia Treatment in Delhi NCR - Dr. Kapil Agrawal',
  description:
    'Dr. Kapil Agrawal is the best femoral hernia surgeon in Delhi with 23+ years of experience. Expert in laparoscopic and robotic femoral hernia repair with high-quality mesh, painless surgery, and 24-hour discharge.',
  keywords: [
    'best femoral hernia surgeon delhi',
    'femoral hernia surgery delhi',
    'laparoscopic femoral hernia repair delhi',
    'robotic femoral hernia surgeon delhi',
    'groin hernia specialist delhi',
    'femoral hernia treatment delhi',
    'Dr. Kapil Agrawal femoral hernia',
  ],
  openGraph: {
    title: 'Best Femoral Hernia Treatment in Delhi NCR - Dr. Kapil Agrawal',
    description:
      'Expert laparoscopic and robotic femoral hernia repair by Dr. Kapil Agrawal in Delhi. Painless surgery, high-quality mesh, 24-hour discharge.',
    url: 'https://www.habiliteclinics.com/best-femoral-hernia-surgeon-in-delhi',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/hernia-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Femoral Hernia Treatment in Delhi NCR - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/best-femoral-hernia-surgeon-in-delhi',
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
    question: 'How long does it take to recover after femoral hernia surgery?',
    answer: 'Recovery times vary from 1-2 weeks after laparoscopic surgery and full recovery for open surgery may take 3-4 weeks.',
  },
  {
    question: 'Is femoral hernia surgery painful?',
    answer: 'Modern surgical techniques like laparoscopic hernia surgery and robotic-assisted hernia surgery ensure minimal pain during surgery.',
  },
  {
    question: 'What causes a femoral hernia?',
    answer: 'Femoral hernias often occur due to weakness in the abdominal wall, heavy lifting, obesity, or persistent coughing. It is more common in females.',
  },
]

const faqSchema = getFAQSchema({
  title: 'Femoral Hernia FAQs',
  description: 'Expert guidance on femoral hernia diagnosis, treatment options, surgery recovery, and insurance.',
  faqs: faqItems,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'Laparoscopic & Robotic Femoral Hernia Repair',
  description:
    'Advanced femoral hernia repair program by Dr. Kapil Agrawal covering laparoscopic, robotic-assisted, and open techniques with high-quality mesh and rapid recovery.',
  url: '/best-femoral-hernia-surgeon-in-delhi',
  procedureType: 'Laparoscopic/Robotic Femoral Hernia Repair',
  bodyLocation: 'Groin / Upper Thigh',
  preparation: 'Physical examination, imaging studies if needed, and pre-operative optimization.',
  followup: 'Discharge within 24 hours with structured follow-up visits and activity guidance.',
  howPerformed:
    'Hernia contents are reduced, the defect is repaired, and high-quality mesh is placed to reinforce the weakened area.',
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'Hernia Surgery', url: '/best-hernia-surgeon-in-delhi' },
  { name: 'Femoral Hernia Surgery', url: '/best-femoral-hernia-surgeon-in-delhi' },
])

const serviceSchema = getServiceSchema({
  name: 'Femoral Hernia Surgery - Laparoscopic & Robotic Repair',
  description:
    'Expert laparoscopic and robotic femoral hernia surgery by Dr. Kapil Agrawal in Delhi, India. Advanced minimally invasive procedure with high-quality mesh, painless recovery, and 24-hour discharge.',
  url: '/best-femoral-hernia-surgeon-in-delhi',
  serviceType: 'Medical Procedure',
  category: 'Laparoscopic Surgery',
  areaServed: ['Delhi', 'NCR', 'India'],
})

export default function BestFemoralHerniaSurgeonPage() {
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
              alt="Best Femoral Hernia Treatment in Delhi NCR - Dr. Kapil Agrawal | Laparoscopic & Robotic Femoral Hernia Repair"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-femoral-hernia-surgeon-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Femoral Hernia Treatment in <span className="text-[#0891b2]">Delhi NCR</span> - Dr. Kapil Agrawal
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
              <Award size={16} className="text-[#f59e0b]" />
              <span>Expert Surgeon with Over 23 Years of Experience</span>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Are you experiencing pain, discomfort and swelling in your groin area or lower abdomen? If yes, a femoral hernia might be the cause. Hernias can impact your quality of life, making even small day to day movements challenging. At Habilite Clinics, our dedicated team of experienced doctors and best hernia surgeons, focuses on accurate diagnosis of your hernia, delivering top-notch femoral hernia operations in Delhi.
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
              <ConsultationForm serviceName="Femoral Hernia Surgery" serviceSlug="best-femoral-hernia-surgeon-in-delhi" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What is a Femoral Hernia?</h2>
              <p className="text-gray-700 leading-relaxed">
                A femoral hernia is commonly present as a bulge in the upper thigh or groin region. As the name suggests, femoral hernia is more common in females. While small femoral hernias may not cause noticeable symptoms at early stages, larger hernia can lead to constant discomfort and major medical complications such as tissue strangulation that requires immediate surgeon attention.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Common Symptoms of Femoral Hernia</h2>
              <p className="text-gray-700 leading-relaxed">
                The symptoms of hernia depend upon the site, size, and complexity of the hernia.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 space-y-3">
                {[
                  'Noticeable lump or bulge near the groin or upper thigh',
                  'Nausea or vomiting may (in extreme cases) or may not',
                  'Pain and discomfort, especially while standing, lifting, or straining',
                  'A feeling of pressure or weakness in the groin area',
                ].map((symptom) => (
                  <div key={symptom} className="flex items-start text-gray-800 text-sm sm:text-base">
                    <CheckCircle2 className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                If you suspect a femoral hernia, it is crucial to seek prompt medical care to prevent complications.
              </p>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Femoral Hernia Treatment Options in Delhi NCR</h2>
              <p className="text-gray-700 leading-relaxed">
                We offer three primary Surgical Options for femoral hernia repair. Our surgeons will recommend the best option based on your specific condition:
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Surgical Approaches for Femoral Hernia</h2>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  1. Laparoscopic Femoral Hernia Surgery
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Procedure:</strong> Laparoscopic surgery involves making 2-3 small incisions in the abdomen through a thin, flexible camera called laparoscope, and well equipped surgical instruments are inserted. The hernia is repaired with a mesh to support the weakened area.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits of Laparoscopic Surgery for Femoral Hernia Treatment</h4>
                  <ul className="space-y-2">
                    {[
                      'It is minimally invasive.',
                      'It follows smaller incisions and less scarring.',
                      'It will result in reduced postoperative pain.',
                      'Quick recovery and smooth healing is assured.',
                      'Patients seeking a quick return to normal activities and minimal downtime.',
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm sm:text-base text-gray-700">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Shield className="text-[#0891b2] mr-2" size={24} />
                  2. Open Treatment Femoral Hernia Repair
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Procedure:</strong> Open surgery involves making a single larger incision over the hernia site. A mesh is placed to reinforce the abdominal wall while pushing the tissue back.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits of Open Femoral Hernia Repair</h4>
                  <ul className="space-y-2">
                    {['It is a proven and effective approach.', 'Well suited for complex or larger hernias', 'Patients with larger or complicated femoral hernias.'].map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm sm:text-base text-gray-700">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="text-[#0891b2] mr-2" size={24} />
                  3. Robotic-Assisted Femoral Hernia Repair
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Procedure:</strong> Robot-assisted surgery uses advanced robotic systems to perform the repair through small incisions. The robotic arms, controlled by a surgeon, provide enhanced precision and maneuverability. The hernia is repaired by repositioning the herniated tissue and placing a mesh to strengthen the abdominal wall.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits of Robot-Assisted Femoral Hernia Repair</h4>
                  <ul className="space-y-2">
                    {[
                      'It enhances surgerys precision and minimizes tissue trauma.',
                      'Smaller incisions, leading to faster recovery.',
                      'Reduced postoperative pain.',
                      'Ideal for delicate or intricate procedures.',
                      'Generally preferred by patients seeking a minimally invasive option, especially for smaller or medium-sized femoral hernias',
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm sm:text-base text-gray-700">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Our experienced surgeons are here to guide you through the pros and cons of each hernia surgery approach and help you choose the best hernia surgeon in Delhi for your normal to complex hernia situation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Do you need a Femoral Hernia Surgery?</h2>
              <p className="text-gray-700 leading-relaxed">
                Surgery is the only effective solution to treat femoral hernias and prevent serious complications like strangulation, where the blood supply to the herniated tissue is cut off. We prioritize your health and safety via providing effective and timely treatment. It is suggested that you should consider femoral hernia operation in Delhi if:
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 space-y-3">
                {[
                  'You experience persistent pain or discomfort.',
                  'The hernia is growing larger over time.',
                  'You notice signs of strangulation, such as sudden severe pain, nausea, or vomiting',
                ].map((point) => (
                  <div key={point} className="flex items-start text-gray-800 text-sm sm:text-base">
                    <CheckCircle2 className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Choose Us for Femoral Hernia Treatment in Delhi NCR?</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="text-[#0891b2] mr-2" size={20} />
                    1. Highly Experienced Hernia Surgeons
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr. Kapil Agarwal, the best hernia surgeon in Delhi, with his extensive experience in performing femoral hernia surgeries has been delivering accurate outcomes for minimally invasive surgery & robotic-assisted hernia surgeries. Their precision, skill, and commitment to patient safety has ensured successful outcomes with minimal risks.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="text-[#0891b2] mr-2" size={20} />
                    2. State-of-the-Art Facilities
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    We are equipped with the latest medical technology, including advanced laparoscopic equipment for minimally invasive hernia surgery. Our operation theaters adhere to global standards, ensuring a safe and comfortable environment for every patient.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Heart className="text-[#0891b2] mr-2" size={20} />
                    3. Personalized Treatment Plans
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Our specialists provide individualized care plans based on your symptoms, medical history, and lifestyle to ensure the most effective treatment and fastest recovery.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Activity className="text-[#0891b2] mr-2" size={20} />
                    4. Minimally Invasive Surgical Techniques
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    We specialize in laparoscopic femoral hernia surgery and best robotic-assisted hernia surgery in Delhi NCR, a minimally invasive procedure that involves smaller incisions and quicker recovery compared to traditional open surgery.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 md:col-span-2">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <User className="text-[#0891b2] mr-2" size={20} />
                    5. Post-Operative Care
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Our care doesn&apos;t end in the operating room. We provide detailed post-surgery guidance, follow-up consultations, and rehabilitation support to ensure a smooth and hassle-free recovery.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Early Treatment for Femoral Hernia is Essential</h2>
              <p className="text-gray-700 leading-relaxed">
                Delaying treatment for a femoral hernia can lead to severe complications, including:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: 'Strangulation',
                    desc: 'Loss of blood supply to the herniated tissue',
                  },
                  {
                    title: 'Bowel Obstruction',
                    desc: 'Blockage in the intestines causing nausea and vomiting',
                  },
                  {
                    title: 'Chronic Pain and Discomfort',
                    desc: 'Persistent pain affecting daily activities',
                  },
                ].map((complication) => (
                  <div key={complication.title} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{complication.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{complication.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                We focus on early intervention and advanced surgical techniques to ensure that patients receive timely and effective care, preventing unnecessary complications.
              </p>
            </section>

            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                    <p className="text-gray-700 text-sm">
                      Recovery times vary from 1-2 weeks after laparoscopic surgery and full recovery for open surgery may take 3-4 weeks. Discharge within 24 hours for minimally invasive procedures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">
                      Structured follow-up visits, detailed post-surgery guidance, and rehabilitation support help ensure complete recovery and prevent recurrence.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <RecoveryTimeline />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <CostCalculator serviceName="Femoral Hernia Surgery" />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Femoral Hernia Surgery" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <FemoralHerniaFAQ />
            <RelatedBlogs
              serviceName="Femoral Hernia"
              serviceKeywords={['femoral hernia', 'groin hernia', 'hernia repair', 'hernia surgery', 'laparoscopic hernia', 'robotic hernia']}
              maxPosts={3}
            />
          </div>
        </div>
      </div>
    </>
  )
}






