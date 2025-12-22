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
import IncisionalHerniaFAQ from './IncisionalHerniaFAQ'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema, getServiceSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Best Incisional Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
  description:
    'Dr. Kapil Agrawal is the best incisional hernia surgeon in Delhi with 23+ years of experience. Expert in laparoscopic and robotic incisional hernia repair with high-quality mesh, painless surgery, and 24-hour discharge.',
  keywords: [
    'best incisional hernia surgeon delhi',
    'incisional hernia surgery delhi',
    'laparoscopic incisional hernia repair delhi',
    'robotic incisional hernia surgeon delhi',
    'abdominal wall hernia specialist delhi',
    'incisional hernia treatment delhi',
    'Dr. Kapil Agrawal incisional hernia',
  ],
  openGraph: {
    title: 'Best Incisional Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
    description:
      'Expert laparoscopic and robotic incisional hernia repair by Dr. Kapil Agrawal in Delhi. Painless surgery, high-quality mesh, 24-hour discharge.',
    url: 'https://www.habiliteclinics.com/best-incisional-hernia-surgeon-in-delhi',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/hernia-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Incisional Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/best-incisional-hernia-surgeon-in-delhi',
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
    question: 'What is the cost of incisional hernia surgery in Delhi?',
    answer:
      'The cost varies depending on the complexity of the hernia and the chosen surgical method. At Habilite Clinics, surgery typically ranges between ₹50,000 and ₹1,50,000, with cashless options available for insured patients.',
  },
  {
    question: 'Can incisional hernias heal without surgery?',
    answer: 'No, surgery is the only permanent solution. Delaying treatment can lead to complications.',
  },
  {
    question: 'How long is the recovery period?',
    answer:
      'Recovery times vary by procedure: Laparoscopic and robotic-assisted hernia repair in Delhi: 1-2 weeks for normal activities. Open repair: 4-6 weeks for full recovery.',
  },
]

const faqSchema = getFAQSchema({
  title: 'Incisional Hernia FAQs',
  description: 'Expert guidance on incisional hernia diagnosis, treatment options, surgery costs, and recovery.',
  faqs: faqItems,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'Laparoscopic & Robotic Incisional Hernia Repair',
  description:
    'Advanced incisional hernia repair program by Dr. Kapil Agrawal covering laparoscopic, robotic-assisted, and open techniques with high-quality mesh and rapid recovery.',
  url: '/best-incisional-hernia-surgeon-in-delhi',
  procedureType: 'Laparoscopic/Robotic Incisional Hernia Repair',
  bodyLocation: 'Abdominal Wall / Previous Surgical Site',
  preparation: 'Physical examination, ultrasound or CT scan, review of previous surgery history, and pre-operative optimization.',
  followup: 'Discharge within 24 hours with structured follow-up visits, personalized rehabilitation plans, and diet guidance.',
  howPerformed:
    'Hernia contents are reduced, the defect is repaired, and high-quality mesh is placed to reinforce the weakened abdominal wall.',
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'Hernia Surgery', url: '/best-hernia-surgeon-in-delhi' },
  { name: 'Incisional Hernia Surgery', url: '/best-incisional-hernia-surgeon-in-delhi' },
])

const serviceSchema = getServiceSchema({
  name: 'Incisional Hernia Surgery - Laparoscopic & Robotic Repair',
  description:
    'Expert laparoscopic and robotic incisional hernia surgery by Dr. Kapil Agrawal in Delhi, India. Advanced minimally invasive procedure with high-quality mesh, painless recovery, and 24-hour discharge.',
  url: '/best-incisional-hernia-surgeon-in-delhi',
  serviceType: 'Medical Procedure',
  category: 'Laparoscopic Surgery',
  areaServed: ['Delhi', 'NCR', 'India'],
})

export default function BestIncisionalHerniaSurgeonPage() {
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
              alt="Best Incisional Hernia Surgeon in Delhi - Dr. Kapil Agrawal | Laparoscopic & Robotic Incisional Hernia Repair"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-incisional-hernia-surgeon-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Incisional Hernia Surgeon in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
              <Award size={16} className="text-[#f59e0b]" />
              <span>Expert Surgeon with Over 23 Years of Experience</span>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              If you&apos;ve suffered hernia before you may be prone to Incisional Hernia at the site of a previous surgical incision. It is a common hernia after abdominal surgeries and one requires immediate medical attention. A noticeable bulge under the skin leads to complications such as obstruction, pain, or strangulation of the tissues, if left untreated.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              At Habilite Clinics, we specialize in providing advanced and patient-centric incisional hernia treatment in Delhi, ensuring effective care personalised to your hernia needs and complications.
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
              <ConsultationForm serviceName="Incisional Hernia Surgery" serviceSlug="best-incisional-hernia-surgeon-in-delhi" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What is Incisional Hernia?</h2>
              <p className="text-gray-700 leading-relaxed">
                The outgrown bulge can be painful and uncomfortable, especially while coughing, lifting heavy loads, or even when you are standing for a long time or lying down in a certain position.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not find it serious initially, but ignoring it over time can lead to bigger problems. Therefore, getting it checked by the doctor is the best way to stay safe and comfortable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Causes of Incisional Hernia</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: 'Incomplete Healing',
                    desc: 'Incomplete healing of the abdominal wall post-surgery makes it easily susceptible for incisional hernias.',
                  },
                  {
                    title: 'Increased Abdominal Pressure',
                    desc: 'Increased abdominal pressure also leads to hernia formation. Activities like chronic coughing, straining during bowel movements or heavy weight lifting are some frequent causes of incisional hernia.',
                  },
                  {
                    title: 'Obesity',
                    desc: 'Obesity increases the risk of hernias. A person with excessive weight is more likely to put additional strain on the abdominal muscles during their body movements.',
                  },
                  {
                    title: 'Other Risk Factors',
                    desc: 'Aging, smoking and poor nutrition also impair healing and muscle strength which can contribute to hernia development.',
                  },
                ].map((cause) => (
                  <div key={cause.title} className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                    <h3 className="font-semibold text-gray-900 mb-3">{cause.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{cause.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Symptoms of Incisional Hernia</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 space-y-3">
                {[
                  'A visible bulge near the surgical scar or pumped skin.',
                  'An increasing skin bump near or around the surgical scar which is growing in size.',
                  'Swelling and tenderness in the affected area.',
                  'Constipation, nausea, vomiting or any other bowel obstruction.',
                ].map((symptom) => (
                  <div key={symptom} className="flex items-start text-gray-800 text-sm sm:text-base">
                    <CheckCircle2 className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Best Hernia Treatment in Delhi for Incisional Hernia</h2>
              <p className="text-gray-700 leading-relaxed">
                We at Habilite Clinics have a multidisciplinary approach that ensures patients receive the best care, whether opting for laparoscopic hernia repair, robotic-assisted hernia repair, or open hernia repair for all types of hernias including Incisional Hernia.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Surgical Approaches for Incisional Hernia</h2>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  1. Laparoscopic Hernia Repair by Dr. Kapil Agrawal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This Minimally Invasive approach uses small incisions and a laparoscope to repair the hernia.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {['Faster recovery and minimal scarring.', 'Reduces postoperative pain.', 'Lower risk of infection.'].map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm sm:text-base text-gray-700">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Laparoscopic Hernia Repair is ideal for patients seeking minimally invasive hernia surgery in Delhi with a shorter hospital stay.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="text-[#0891b2] mr-2" size={24} />
                  2. Robotic-Assisted Hernia Repair by Dr. Kapil Agrawal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This cutting-edge method involves robotic technology for enhanced accuracy during surgery. It is highly recommended for large or recurrent hernias.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      'Best for complex cases',
                      'Superior visualization for the surgeon.',
                      'Better rebuilding of the abdominal wall.',
                      'Enhanced long-term results.',
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm sm:text-base text-gray-700">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Considered one of the best hernia surgeons in Delhi, Dr. Kapil Agarwal is ensuring optimal outcomes with his precise and controlled excellence in robotic-assisted Hernia Repair.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Shield className="text-[#0891b2] mr-2" size={24} />
                  3. Open Hernia Repair
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  It is a traditional hernia repair method best suitable for cases where minimally invasive surgery is not feasible. It is particularly suggested for larger hernias or where the abdominal muscles require significant build-up.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why is Robotic-Assisted Hernia Surgery Recommended?</h2>
              <p className="text-gray-700 leading-relaxed">
                Robotic-assisted hernia repair is preferred by patients and recommended by doctors because of its minimally invasive nature, leading to smaller incisions, reduced pain, and faster recovery post-operation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The robotic system offers enhanced precision, allowing surgeons to repair hernias more effectively, lowering the risk of recurrence. Patients benefit from shorter hospital stays and a quicker return to normal activities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For doctors, the robotic tools provide superior visualization, dexterity, and ergonomics, improving surgical accuracy and reducing complications. This combination of patient comfort and improved surgical outcomes makes robotic-assisted hernia repair an increasingly choice for hernia treatment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Precised Incisional Hernia Treatment: Patient Expectations at Habilite Clinics</h2>
              <p className="text-gray-700 leading-relaxed">
                We are at your service with our advanced diagnostic tools to assess the severity of the Incisional Hernia and recommend the most suitable treatment. It will include:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: 'Physical Examination',
                    desc: 'A physical examination for a thorough evaluation of the bulge and its characteristics.',
                  },
                  {
                    title: 'Imaging Studies',
                    desc: 'An ultrasound or CT Scan may be required to determine the size of the bulge, its location, to which extent it is spread and to ensure which type of surgical planning it needs.',
                  },
                  {
                    title: 'Symptom Assessment',
                    desc: 'Swelling and tenderness in the affected area.',
                  },
                  {
                    title: 'Medical History Review',
                    desc: 'To identify underlying risks of incisional hernia, we must need your previous surgery history if you have any.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                We make sure that our best hernia specialists in Delhi ensure you an accurate diagnosis to provide the best possible outcomes & comfortable post-surgery life.
              </p>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Choose Dr. Kapil Agrawal at Habilite Clinics for Incisional Hernia Treatment in Delhi</h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Our team led by Dr. Kapil Agarwal comprises the best hernia doctors in Delhi, with years of expertise in performing advanced hernia surgeries. We are equipped with cutting-edge technology like robotic-assisted hernia repair and the best laparoscopic hernia surgery facility in Delhi.',
                  'We are providing all types of hernia surgeries in Delhi for small to large surgical procedures, ensuring precision and safety throughout and after the treatment journey.',
                  'We recognize that every patient is unique. Our personalized approach considers factors like the hernia\'s size, location, and severity, along with the patient\'s overall health. From initial consultation to post-operative care, we prioritize patient comfort and satisfaction.',
                ].map((point) => (
                  <li key={point} className="flex items-start text-sm sm:text-base">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Post-Surgery Recovery and Care</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Clock className="text-[#0891b2] mr-2" size={20} />
                    Regular Follow-Ups
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">To monitor your recovery and address any concerns.</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Heart className="text-[#0891b2] mr-2" size={20} />
                    Personalized Rehabilitation Plans
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">To strengthen the abdominal muscles and prevent recurrence.</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <User className="text-[#0891b2] mr-2" size={20} />
                    Diet and Lifestyle Guidance
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">Tips to maintain a healthy weight and avoid strain on the abdominal wall.</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                With the guidance of the best hernia doctors in Delhi, you can achieve a smooth and successful incisional hernia recovery.
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
                      Recovery times vary by procedure: Laparoscopic and robotic-assisted hernia repair: 1-2 weeks for normal activities. Open repair: 4-6 weeks for full recovery. Discharge within 24 hours for minimally invasive procedures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">
                      Structured follow-up visits, personalized rehabilitation plans, and diet and lifestyle guidance help ensure complete recovery and prevent recurrence.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <RecoveryTimeline />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <CostCalculator serviceName="Incisional Hernia Surgery" />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Incisional Hernia Surgery" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <IncisionalHerniaFAQ />
            <RelatedBlogs
              serviceName="Incisional Hernia"
              serviceKeywords={['incisional hernia', 'abdominal wall hernia', 'hernia repair', 'hernia surgery', 'laparoscopic hernia', 'robotic hernia', 'post-surgical hernia']}
              maxPosts={3}
            />
          </div>
        </div>
      </div>
    </>
  )
}


