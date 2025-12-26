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
import UmbilicalHerniaFAQ from './UmbilicalHerniaFAQ'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema, getServiceSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Best Umbilical Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
  description:
    'Dr. Kapil Agrawal is the best umbilical hernia surgeon in Delhi with 23+ years of experience. Expert in laparoscopic and robotic umbilical hernia repair with high-quality mesh, painless surgery, and 24-hour discharge.',
  keywords: [
    'best umbilical hernia surgeon delhi',
    'umbilical hernia surgery delhi',
    'laparoscopic umbilical hernia repair delhi',
    'robotic umbilical hernia surgeon delhi',
    'navel hernia specialist delhi',
    'umbilical hernia treatment delhi',
    'Dr. Kapil Agrawal umbilical hernia',
  ],
  openGraph: {
    title: 'Best Umbilical Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
    description:
      'Expert laparoscopic and robotic umbilical hernia repair by Dr. Kapil Agrawal in Delhi. Painless surgery, high-quality mesh, 24-hour discharge.',
    url: 'https://www.habiliteclinics.com/best-umbilical-hernia-surgeon-in-delhi',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/hernia-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Umbilical Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/best-umbilical-hernia-surgeon-in-delhi',
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
    question: 'What causes an umbilical hernia in adults?',
    answer:
      'Weak abdominal muscles, excessive pressure on the abdomen, or congenital factors can lead to an umbilical hernia. Other contributing factors include obesity, pregnancy, chronic conditions like ascites, and activities that increase abdominal pressure.',
  },
  {
    question: 'Can umbilical hernias heal without surgery?',
    answer:
      'No, hernias do not heal on their own. Surgery is the only permanent solution. While small hernias in infants may close naturally, adult umbilical hernias require surgical repair to prevent complications.',
  },
  {
    question: 'What is the recovery time after laparoscopic or robotic hernia surgery in Delhi?',
    answer:
      'Most patients can return to normal activities within 1-2 weeks, with full recovery in about 4-6 weeks. With minimally invasive techniques, patients typically experience less pain and faster recovery compared to open surgery.',
  },
  {
    question: 'Is the surgery covered by health insurance?',
    answer:
      'Yes, most insurance plans cover hernia surgery. Our clinic also offers cashless options. Dr. Kapil Agrawal operates at premier hospitals in Delhi that support comprehensive insurance networks.',
  },
  {
    question: 'How much does umbilical hernia surgery cost in Delhi?',
    answer:
      'The cost depends on the complexity and surgical method, typically ranging between ₹50,000 and ₹1,50,000. Laparoscopic and robotic procedures may cost more but offer faster recovery and better outcomes. We provide transparent pricing with insurance support and EMI options.',
  },
]

const faqSchema = getFAQSchema({
  title: 'Umbilical Hernia FAQs',
  description: 'Expert guidance on umbilical hernia diagnosis, treatment options, surgery costs, and recovery.',
  faqs: faqItems,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'Laparoscopic & Robotic Umbilical Hernia Repair',
  description:
    'Advanced umbilical hernia repair program by Dr. Kapil Agrawal covering laparoscopic, robotic-assisted, and open techniques with high-quality mesh and rapid recovery.',
  url: '/best-umbilical-hernia-surgeon-in-delhi',
  procedureType: 'Laparoscopic/Robotic Umbilical Hernia Repair',
  bodyLocation: 'Navel / Umbilical Region',
  preparation: 'Physical examination, ultrasound or CT scan if needed, and pre-operative optimization.',
  followup: 'Discharge within 24 hours with structured follow-up visits and activity guidance.',
  howPerformed:
    'Hernia contents are reduced, the defect is repaired, and high-quality mesh is placed to reinforce the weakened area around the navel.',
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'Hernia Surgery', url: '/best-hernia-surgeon-in-delhi' },
  { name: 'Umbilical Hernia Surgery', url: '/best-umbilical-hernia-surgeon-in-delhi' },
])

const serviceSchema = getServiceSchema({
  name: 'Umbilical Hernia Surgery - Laparoscopic & Robotic Repair',
  description:
    'Expert laparoscopic and robotic umbilical hernia surgery by Dr. Kapil Agrawal in Delhi, India. Advanced minimally invasive procedure with high-quality mesh, painless recovery, and 24-hour discharge.',
  url: '/best-umbilical-hernia-surgeon-in-delhi',
  serviceType: 'Medical Procedure',
  category: 'Laparoscopic Surgery',
  areaServed: ['Delhi', 'NCR', 'India'],
})

export default function BestUmbilicalHerniaSurgeonPage() {
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
              alt="Best Umbilical Hernia Surgeon in Delhi - Dr. Kapil Agrawal | Laparoscopic & Robotic Umbilical Hernia Repair"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-umbilical-hernia-surgeon-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Umbilical Hernia Surgeon in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
              <Award size={16} className="text-[#f59e0b]" />
              <span>Expert Surgeon with Over 23 Years of Experience</span>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Umbilical Hernia is commonly observed in infants, affecting adults with weak abdominal muscles or those who experience excessive pressure on their lower stomach. The person suffering from Umbilical Hernia has a noticeable bulge near the navel, which may become more visible when coughing, sneezing, straining, or standing. Small Umbilical Hernia might not cause discomfort or pain but larger ones are painful and may lead to complications and lifestyle limitations.
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
              <ConsultationForm serviceName="Umbilical Hernia Surgery" serviceSlug="best-umbilical-hernia-surgeon-in-delhi" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What is Umbilical Hernia?</h2>
              <p className="text-gray-700 leading-relaxed">
                Umbilical Hernia is commonly observed in infants, affecting adults with weak abdominal muscles or those who experience excessive pressure on their lower stomach. The person suffering from Umbilical Hernia has a noticeable bulge near the navel, which may become more visible when coughing, sneezing, straining, or standing. Small Umbilical Hernia might not cause discomfort or pain but larger ones are painful and may lead to complications and lifestyle limitations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Should You Not Ignore an Umbilical Hernia?</h2>
              <p className="text-gray-700 leading-relaxed">
                Umbilical Hernia are harmless initially but they can lead to serious complications without timely treatment. Some major complications like Incarceration and Strangulation of blood vessels may make room for unbearable discomfort and severe pain.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In case of incarceration, the hernia gets trapped in one position and cannot be pushed back which is a medical emergency that requires immediate surgery. Don&apos;t wait for it to get worse. By ignoring or delaying it because it is painless in the beginning might increase the risk of these complications and may require a surgical treatment.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                Seek the help of Best Hernia Surgeon in Delhi immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Common Symptoms of Umbilical Hernia</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 space-y-3">
                {[
                  'Swelling near the belly button which is more visible when coughing, standing, sneezing, or straining.',
                  'Pain in the abdominal area, very discomfortable during activities that involve bending or lifting or stretching.',
                  'If you feel nausea or vomiting, this also may indicate complications.',
                  'Redness around the swelling area or slightly tendered bulge area.',
                ].map((symptom) => (
                  <div key={symptom} className="flex items-start text-gray-800 text-sm sm:text-base">
                    <CheckCircle2 className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Are you experiencing these symptoms? This may be a Umbilical Hernia. An early detection & appropriate treatment can prevent any further complications.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Causes of Umbilical Hernia</h2>
              <p className="text-gray-700 leading-relaxed">
                There are several factors that can contribute to the development of an Umbilical Hernia.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: 'Congenital Weakness',
                    desc: 'Some people are born with weak abdominal muscles around the belly button which is a congenital weakness.',
                  },
                  {
                    title: 'Obesity',
                    desc: 'Overweight is another leading cause of the Umbilical Hernia as it increases the pressure on the abdominal area which ultimately leads to weakening of the abdominal muscles.',
                  },
                  {
                    title: 'Pregnancy',
                    desc: 'Pregnant women are prone to the Umbilical Hernias. Repeated or multiple pregnancies stretch out the belly area and weakens the abdominal muscles.',
                  },
                  {
                    title: 'Chronic Conditions',
                    desc: 'Chronic conditions like ascites also increase the risk of umbilical hernias.',
                  },
                ].map((cause) => (
                  <div key={cause.title} className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                    <h3 className="font-semibold text-gray-900 mb-3">{cause.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{cause.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Once our specialists evaluate your conditions, they can recommend to you the most suitable procedure based on the size, locations, and severity of your Umbilical hernia.
              </p>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Advanced Umbilical Hernia Treatment in Delhi by Dr. Kapil Agrawal</h2>
              <p className="text-gray-700 leading-relaxed">
                Umbilical Hernia is prescribed to be cured as early as one gets to know about it. Habilite Clinics specializes in providing advanced treatment options for Umbilical Hernia Treatment in Delhi. From its multiple range of diagnosis to assured recovery, Habilite Clinics is offering the best hernia treatment in Delhi with updated modern techniques.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Surgical Approaches for Umbilical Hernia</h2>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  1. Laparoscopic Surgery for Umbilical Hernia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The advantage of the Laparoscopic Hernia Treatment option for your Umbilical Hernia is its minimally invasive approach using small incisions during the procedure. A camera device i.e. a laparoscope is used to diagnose and treat the hernia. Laparoscopic hernia Repair Option is suitable for Umbilical Hernia as it is best for reducing post-operative pain and ensures minimal risk of infection.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="text-[#0891b2] mr-2" size={24} />
                  2. Robotic Assisted Surgery for Umbilical Hernia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Highly preferred by the patients and recommended by the best surgeons, Robotic Assisted Hernia Repair is the most advanced surgical technique. Surgeons use robotic systems for precise and controlled movements during the procedure. Robotic Assisted Hernia Repair is enhancing the visualisation. It is the best choice for complex and recurrent hernias. If you are looking for the best hernia treatment in Delhi then Robotic Assisted Hernia Treatment at Habilite Clinics is best recommended.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Shield className="text-[#0891b2] mr-2" size={24} />
                  3. Open Surgery for Umbilical Hernia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Open Hernia Repair is a traditional approach used for all types of hernia treatments. It is recommended for larger in shape hernias and cases where minimally invasive surgery options like Laparoscopic Hernia Repair is not suitable. Open Hernia Repair in Habilite Clinics is an excellent choice for long-term results with robust repair of the abdominal wall.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Minimally Invasive Hernia Repair Options in Delhi</h2>
              <p className="text-gray-700 leading-relaxed">
                We are dedicated to providing the best surgical care for hernia patients. Habilite Clinics have been providing best hernia treatment options for years. It is often a trusted choice of its patients for personalized care & its modern and updated surgery techniques.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Comprehensive Treatment Options</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Our comprehensive treatment options have a full spectrum of advanced solutions for hernia treatment like laparoscopic and robotic-assisted surgery facility in Delhi makes Habilite Clinics a modern approach for all types of hernia treatments.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Highly Skilled Specialists</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Our team consists of highly skilled hernia surgery specialists with years of expertise in open repair hernia & robotic assisted hernia in Delhi. We are committed to delivering minimally invasive, precise and effective hernia treatments to individual patient needs.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Cutting-Edge Technology</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    We are well equipped with cutting-edge technology for accurate diagnosis and advanced surgical procedures which enables us to provide world-class care in a comfortable and safe environment.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Premium Surgical Mesh</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    We use premium surgical mesh and high quality materials to enhance the durability and effectiveness of hernia repairs. These materials ensure optimal results and reduce the risk of complications like postoperative pain discomfort & excessive blood loss during the procedure.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Insurance & Payment Options</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    We offer cashless treatment options for insured patients, ensuring no out-of-pocket expenses. Additionally, flexible EMI plans are available to make high-quality care accessible to everyone.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Complex Hernia Management</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Complex hernia needs an abdominal wall reconstruction which is a very disciplined surgery having advanced surgical techniques like Anterior Component Separation and Posterior Component Separation.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Known for patient-focused expertise and care, Dr. Kapil Agrawal has always ensured precise surgeries, the fastest recoveries, and exceptional outcomes, making them a trustworthy choice for Umbilical Hernia treatment.
              </p>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Affordable & Personalized Umbilical Hernia Treatment in Delhi</h2>
              <p className="text-gray-700 leading-relaxed">
                From your initial consultation to post-surgery recovery, we focus on personalized care. Our goal is to ensure your comfort, address your concerns, and provide a seamless treatment experience.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: 'Initial Consultation',
                    desc: 'Comprehensive evaluation by our hernia specialists to understand your symptoms and medical history.',
                  },
                  {
                    title: 'Diagnosis',
                    desc: 'Use of advanced imaging techniques, such as ultrasound or CT scans, for accurate assessment.',
                  },
                  {
                    title: 'Personalized Treatment Plan',
                    desc: 'Tailored surgical recommendations to suit your specific needs.',
                  },
                  {
                    title: 'Surgery Day',
                    desc: 'Performed by our expert team, ensuring safety and precision.',
                  },
                  {
                    title: 'Post-Surgery Care',
                    desc: 'Regular follow-ups and guidance for a smooth recovery.',
                  },
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
                      Most patients can return to normal activities within 1-2 weeks after laparoscopic or robotic umbilical hernia repair. Discharge within 24 hours for minimally invasive procedures.
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
            <CostCalculator serviceName="Umbilical Hernia Surgery" />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Umbilical Hernia Surgery" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <UmbilicalHerniaFAQ />
            <RelatedBlogs
              serviceName="Umbilical Hernia"
              serviceKeywords={['umbilical hernia', 'navel hernia', 'hernia repair', 'hernia surgery', 'laparoscopic hernia', 'robotic hernia']}
              maxPosts={3}
            />
          </div>
        </div>
      </div>
    </>
  )
}











