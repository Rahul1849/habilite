import { Metadata } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Award, CheckCircle2, Clock, User, Users, TrendingUp, Activity, Zap, Shield, Heart } from 'lucide-react'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema, getServiceSchema } from '@/lib/seo/schemaBuilders'

// Lazy load heavy components to improve FCP and LCP
const ConsultationForm = dynamic(
  () => import('@/components/forms/ConsultationForm'),
  {
    ssr: true,
    loading: () => (
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 min-h-[400px] animate-pulse" />
    ),
  }
)

const CallUsButton = dynamic(
  () => import('@/components/lead-generation/CallUsButton'),
  {
    ssr: true,
  }
)

const PostOperativeCare = dynamic(
  () => import('@/components/lead-generation/PostOperativeCare'),
  {
    ssr: true,
  }
)

const CostCalculator = dynamic(
  () => import('@/components/lead-generation/CostCalculator'),
  {
    ssr: true,
    loading: () => (
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 min-h-[300px] animate-pulse" />
    ),
  }
)

const WhatsAppExpertChat = dynamic(
  () => import('@/components/lead-generation/WhatsAppExpertChat'),
  {
    ssr: false,
  }
)

const RecoveryTimeline = dynamic(
  () =>
    import('@/components/services/RecoveryTimeline').then((mod) => ({
      default: mod.RecoveryTimeline,
    })),
  {
    ssr: true,
  }
)

const RelatedBlogs = dynamic(
  () => import('@/components/services/RelatedBlogs'),
  {
    ssr: true,
  }
)

const InguinalHerniaFAQ = dynamic(
  () => import('./InguinalHerniaFAQ'),
  {
    ssr: true,
  }
)

export const metadata: Metadata = {
  title: 'Best Inguinal Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
  description:
    'Dr. Kapil Agrawal is the best inguinal hernia surgeon in Delhi with 23+ years of experience. Expert in laparoscopic and robotic inguinal hernia repair with high-quality mesh, painless surgery, and 24-hour discharge.',
  keywords: [
    'best inguinal hernia surgeon delhi',
    'inguinal hernia surgery delhi',
    'laparoscopic inguinal hernia repair delhi',
    'robotic inguinal hernia surgeon delhi',
    'groin hernia specialist delhi',
    'inguinal hernia treatment delhi',
    'Dr. Kapil Agrawal inguinal hernia',
  ],
  openGraph: {
    title: 'Best Inguinal Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
    description:
      'Expert laparoscopic and robotic inguinal hernia repair by Dr. Kapil Agrawal in Delhi. Painless surgery, high-quality mesh, 24-hour discharge.',
    url: 'https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi/inguinal-hernia-surgery',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/hernia-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Inguinal Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/best-inguinal-hernia-surgeon-in-delhi',
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
    question: 'What is the main cause of Inguinal Hernia?',
    answer: 'A weak abdominal muscle is the leading cause of the Inguinal Hernia.',
  },
  {
    question: 'Is Surgery the only option for Inguinal Hernia Treatment in Delhi?',
    answer:
      'Yes. Surgery will provide you with a full recovery and a permanent solution. In contrast, a non-surgical method may give you temporary relief but won\'t cure it for the long term.',
  },
  {
    question: 'How much will it cost for Inguinal Hernia Surgery in Delhi?',
    answer:
      'The cost usually varies depending on the complexity of the Inguinal Hernia and the technique required for adequate recovery. An estimated range from ₹50,000 to ₹1,20,000 is generally opted for permanent results and fast recovery. Robotic surgery costs even more and depending upon the hospital and implants, it is more costly when compared to laparoscopic surgery.',
  },
  {
    question: 'How will I know if my hernia is getting complicated?',
    answer:
      'If you feel constant or severe pain when moving, standing, bending, changing sides, coughing, or lifting, then it can be a sign of emergency. It can be due to complications like strangulation or incarceration. In this case, you must immediately consult a hernia specialist surgeon.',
  },
]

const faqSchema = getFAQSchema({
  title: 'Inguinal Hernia FAQs',
  description: 'Expert guidance on inguinal hernia diagnosis, treatment options, surgery costs, and recovery.',
  faqs: faqItems,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'Laparoscopic & Robotic Inguinal Hernia Repair',
  description:
    'Advanced inguinal hernia repair program by Dr. Kapil Agrawal covering open, laparoscopic (TEP, TAPP, e-TEP), and robotic techniques with high-quality mesh and rapid recovery.',
  url: '/best-inguinal-hernia-surgeon-in-delhi',
  procedureType: 'Laparoscopic/Robotic Inguinal Hernia Repair',
  bodyLocation: 'Groin / Inguinal Region',
  preparation: 'Clinical examination, USG scrotum, CT scan of pelvis if needed, and pre-operative optimization.',
  followup: 'Discharge within 24 hours with structured follow-up visits and activity guidance.',
  howPerformed:
    'Hernia contents are reduced, the defect is repaired, and high-quality mesh is placed to reinforce the weakened groin area.',
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'Hernia Surgery', url: '/best-hernia-surgeon-in-delhi' },
  { name: 'Inguinal Hernia Surgery', url: '/best-inguinal-hernia-surgeon-in-delhi' },
])

const serviceSchema = getServiceSchema({
  name: 'Inguinal Hernia Surgery - Laparoscopic & Robotic Repair',
  description:
    'Expert laparoscopic and robotic inguinal hernia surgery by Dr. Kapil Agrawal in Delhi, India. Advanced minimally invasive procedure with high-quality mesh, painless recovery, and 24-hour discharge.',
  url: '/best-inguinal-hernia-surgeon-in-delhi',
  serviceType: 'Medical Procedure',
  category: 'Laparoscopic Surgery',
  areaServed: ['Delhi', 'NCR', 'India'],
})

export default function BestInguinalHerniaSurgeonPage() {
  return (
    <>
      <div className="pt-20 pb-16">
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/hernia-surgeon-delhi-india.webp"
              alt="Best Inguinal Hernia Surgeon in Delhi - Dr. Kapil Agrawal | Laparoscopic & Robotic Inguinal Hernia Repair"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              priority
              fetchPriority="high"
              quality={75}
              loading="eager"
              decoding="async"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>

        <div className="container-custom mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2] mb-3">best-inguinal-hernia-surgeon-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Inguinal Hernia Surgeon in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
              <Award size={16} className="text-[#f59e0b]" />
              <span>Expert Surgeon with Over 23 Years of Experience</span>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Dr Kapil Agrawal is the best inguinal hernia surgeon in Delhi, India. He has been performing advanced laparoscopic as well as robotic surgeries at some of the best hospitals for hernia surgery in Delhi. He has a vast experience of 23 years and has mastered different types of laparoscopic as well as robotic approaches, thus giving him the flexibility to offer his patients the best and most customized treatment for inguinal hernia.
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
              <ConsultationForm serviceName="Inguinal Hernia Surgery" serviceSlug="best-inguinal-hernia-surgeon-in-delhi" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What is Inguinal Hernia?</h2>
              <p className="text-gray-700 leading-relaxed">
                Inguinal hernia is the most common type of hernia. It is a type of groin hernia which occurs at the junction of the abdomen and thigh, just adjacent to the penis. Inguinal hernia initially presents as a slight bulge, which reduces lying down and becomes more prominent while straining or prolonged standing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You must contact the best hernia surgeon in Delhi in order to assess and treat Inguinal hernia.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Types of Groin Hernia</h2>
              <p className="text-gray-700 leading-relaxed">
                There are two types of groin hernia:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                  <h3 className="font-semibold text-gray-900 mb-3">Inguinal Hernia</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    The most common type of groin hernia, occurring at the junction of the abdomen and thigh.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                  <h3 className="font-semibold text-gray-900 mb-3">Femoral Hernia</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    The location of both hernias is almost the same, and only a hernia specialist surgeon can differentiate between the femoral and inguinal hernia. Femoral hernia is more common in females and are more prone to complications.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How to Diagnose Inguinal Hernia?</h2>
              <p className="text-gray-700 leading-relaxed">
                Inguinal hernia is usually a clinical diagnosis, and a hernia specialist surgeon can easily diagnose the condition without any radiological tests. However, when the hernia is tiny, your surgeon can recommend radiological investigations to rule out the possibility of hernia.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">Various investigations to diagnose inguinal hernia include:</p>
              <div className="grid gap-4 md:grid-cols-3">
                {['Clinical Examination', 'USG Scrotum', 'CT scan of the pelvis'].map((test) => (
                  <div key={test} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-sm sm:text-base">{test}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Complications Of Inguinal Hernia</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Incarceration of the Bowel</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    The bowel becomes permanently trapped in the defect and cannot be pushed back. This trap can sometimes lead to partial or complete obstruction of the bowel.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Strangulation of the Bowel</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    This is a surgical emergency in which the trapped intestine loses the blood supply, resulting in the death of the portion of the trapped intestine.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Early Treatment of Inguinal Hernia is Better & Necessary</h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Hernia is a slowly progressive disease, and the size of the hernia increases with time.',
                  'As the size of the hernia increases, the contents of the hernia, especially the intestines, can get trapped in the hernial sac, which can complicate the hernia repair.',
                  'Over time, the surrounding muscles at the site of hernia can further weaken, which raises the risk of hernia recurrence.',
                  'Larger hernia defects require larger meshes for repair, which not only increases the cost of surgery but also increases the likelihood of recurrence.',
                ].map((point) => (
                  <li key={point} className="flex items-start text-sm sm:text-base">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Can My Inguinal Hernia go on its Own</h2>
              <p className="text-gray-700 leading-relaxed">
                There is no natural way or method to cure hernia on its own.
              </p>
              <p className="text-gray-700 leading-relaxed">
                There are certain medicines which can provide symptomatic relief, but they can never cure hernia. Hernia is a medical condition which occurs due to a tear in the muscles either because of excessive strain on the muscles or weakness of the muscles. Therefore, if these muscles are not repaired correctly, the hernia will never be cured.
              </p>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Best Inguinal Hernia Treatment in Delhi By Dr. Kapil Agrawal</h2>
              <p className="text-gray-700 leading-relaxed">
                Repair of an inguinal hernia can sometimes be technically challenging, depending upon the size of the hernia. Certain factors like obesity, recurrence, size and co-morbidities like high blood sugar make the inguinal hernia repair more challenging.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr Kapil Agrawal is an internationally trained best Inguinal hernia surgeon in delhi and he has performed more than 5000 hernia surgeries with the best outcomes. His ability to perform all types of laparoscopic and robotic surgeries makes him one of the best and outstanding surgeons for the management of inguinal hernia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The three different approaches offered by Dr Kapil Agrawal and his team are:
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Surgical Approaches for Inguinal Hernia</h2>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  1. Open Surgery for Inguinal Hernia by Dr. Kapil Agrawal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Open inguinal hernia surgery is a conventional technique of placing an incision directly over the hernia site followed by a reduction of hernia contents. The hernia defect is repaired, and the weakened groin area is then reinforced with the help of mesh.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We usually reserve this technique when patients are unfit to undergo general anaesthesia, previously failed laparoscopic repair, strangulation of the intestine or the patient&apos;s preference.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="text-[#0891b2] mr-2" size={24} />
                  2. Laparoscopic Surgery for Inguinal Hernia by Dr. Kapil Agrawal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Laparoscopic Inguinal Hernia is one of the most advanced types of hernia repair in which the entire surgery is conducted with the help of 3 tiny incisions located near the umbilicus.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With the help of a telescopic camera and specialized long thin instruments, the entire surgery is done along with the placement of a large-size mesh. It not only helps in faster recovery but also minimizes the chances of hernia coming back.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You must seek the help of the best hernia surgeon in Delhi, India, who masters all the approaches of laparoscopic hernia repair.
                </p>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Different Types of Laparoscopic Inguinal Hernia Treatment</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Laparoscopic hernia repair can be carried out using several approaches. A proper selection of approaches is necessary for the best outcomes, reducing the chances of conversion to open surgery and minimizing the chances of recurrence.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    There are three types of Laparoscopic or Robotic Inguinal Hernia Repair:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">TEP Repair</h5>
                      <p className="text-gray-700 text-sm">We usually perform TEP laparoscopic repair in patients who have small to medium-sized non-complex hernia.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">TAPP Repair</h5>
                      <p className="text-gray-700 text-sm">The TAPP repair is usually reserved for large, complex, recurrent hernias or patients who are very obese.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">e-TEP Repair</h5>
                      <p className="text-gray-700 text-sm">The e-TEP repair is an approach similar to TEP repair, but due to the camera position, the surgeon gets an extended view for carrying out the procedure, resulting in better outcomes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Shield className="text-[#0891b2] mr-2" size={24} />
                  3. Robotic Surgery for Inguinal Hernia by Dr. Kapil Agrawal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Robotic hernia repair is one of the latest and most advanced technologies for hernia repair. A robotic hernia does not give any advantage in terms of cosmesis, scars and recurrence over laparoscopic hernia surgery.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We perform Robotic Surgery for patients where the surgery is highly complex due to the size of hernia or multiple previous surgeries for hernia repair.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Mesh Is Necessary For Hernia Treatment?</h2>
              <p className="text-gray-700 leading-relaxed">
                Mesh is recommended in the majority of hernia repairs because it helps to strengthen the weakened area of the groin and provides a tension-free repair of the hernia. The use of mesh significantly reduces the risk of recurrence. It is essential in larger or complex hernias and patients with risk factors like obesity, chronic cough, or heavy lifting.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Inguinal Hernia Surgery without Mesh</h2>
              <p className="text-gray-700 leading-relaxed">
                In certain conditions, we do recommend Hernia repair without mesh.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We perform inguinal hernia repair without mesh in patients below 20 years of age where muscles are strong and do not require additional support.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The mesh is also contraindicated in infected areas, especially in patients who present with strangulation of the bowel, one of the most dangerous complications of hernia. In such patients, there is a high risk of mesh getting infected.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Patients&apos; preference also plays a significant role in the placement of mesh. For patients who strictly want to avoid mesh, we perform a technique known as the &quot;Desarda technique&quot;, where hernia repair is carried out without placing any mesh.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Desarda Technique is an open type of mesh repair, where an undetached strip of the external oblique aponeurosis muscle is used to repair the inguinal repair.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What is 3-D Mesh for Inguinal Hernia Repair?</h2>
              <p className="text-gray-700 leading-relaxed">
                3D Mesh for inguinal hernia repair is a specially anatomically designed surgical mesh which easily fits into the contour of the groin area. These meshes require less fixation and provide better comfort post-surgery.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These meshes are made of biocompatible materials like polypropylene and are designed to prevent the migration or folding of mesh.
              </p>
              <p className="text-gray-700 leading-relaxed">
                However, 3D Mesh for inguinal hernia repair doesn&apos;t decrease the chances of recurrence, and there are no long-term benefits to using this mesh.
              </p>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Dr. Kapil Agrawal is the Best Inguinal Hernia Surgeon in Delhi?</h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Dr Kapil Agrawal has experience in performing both robotic and laparoscopic surgeries for inguinal hernia with the best outcomes.',
                  'Dr Kapil Agrawal\'s affiliations with some of the best hospitals ensure excellent outcomes even for the most complex cases.',
                  'Dr Agrawal is one of the best surgeons for inguinal hernia treatment, who can carry out different types of laparoscopic repair based on the patient\'s medical condition and the complexity of the hernia.',
                  'Dr Agrawal\'s team ensures cashless insurance facilities and as well as EMI options for inguinal hernia treatment at some of the best centres in Delhi.',
                ].map((point) => (
                  <li key={point} className="flex items-start text-sm sm:text-base">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                    <p className="text-gray-700 text-sm">
                      Most patients can resume normal activities within 1-2 weeks after laparoscopic or robotic inguinal hernia repair. Discharge within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">
                      Structured follow-up visits and activity guidance help ensure complete recovery and prevent recurrence.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <RecoveryTimeline />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <CostCalculator serviceName="Inguinal Hernia Surgery" />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Inguinal Hernia Surgery" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <InguinalHerniaFAQ />
            <RelatedBlogs
              serviceName="Inguinal Hernia"
              serviceKeywords={['inguinal hernia', 'groin hernia', 'hernia repair', 'hernia surgery', 'laparoscopic hernia', 'robotic hernia']}
              maxPosts={3}
            />
          </div>
        </div>
      </div>
      {/* StructuredData moved to bottom to prevent blocking render */}
      <StructuredData data={serviceSchema} />
      <StructuredData data={procedureSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />
    </>
  )
}

