import { Metadata } from 'next'
import Image from 'next/image'
import { Award, CheckCircle2, Clock, HeartPulse, Shield, Stethoscope, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import { blogPosts } from '@/data/blog'
import { RecoveryTimeline } from '@/components/services/RecoveryTimeline'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Best Hiatus Hernia Surgeon in Delhi | Dr. Kapil Agrawal',
  description:
    'Dr. Kapil Agrawal offers advanced laparoscopic and robotic GERD & hiatus hernia surgery in Delhi with high-quality mesh, tailored fundoplication, and 24-hour discharge.',
  keywords: [
    'best hiatus hernia surgeon delhi',
    'GERD surgery delhi',
    'fundoplication specialist india',
    'paraesophageal hernia repair',
    'anti reflux surgery delhi',
  ],
  openGraph: {
    title: 'Best Hiatus Hernia Surgeon in Delhi',
    description:
      'Scarless laparoscopic hiatus hernia repair, personalised reflux management, and rapid recovery care by Dr. Kapil Agrawal at Habilite Clinics, Delhi.',
    url: 'https://www.habiliteclinics.com/best-hiatus-hernia-surgeon-in-delhi',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/gerdhiatushernia-surgery-delhi.jpg',
        width: 1200,
        height: 630,
        alt: 'GERD & Hiatus Hernia Surgery in Delhi',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/best-hiatus-hernia-surgeon-in-delhi',
  },
}

const heroHighlights = [
  { icon: Award, text: '23+ Years Minimally Invasive Expertise' },
  { icon: Shield, text: 'High-Quality Mesh & Suturing' },
  { icon: Clock, text: '24–36 Hour Discharge' },
  { icon: Stethoscope, text: 'Dedicated Reflux & Diet Team' },
]

const conditionOverview = [
  'Sliding hiatus hernia: the gastro-oesophageal junction moves above the diaphragm, worsening acid reflux.',
  'Paraesophageal hernia: the stomach rolls into the chest alongside the oesophagus and can strangulate if untreated.',
]

const symptoms = [
  'Night-time heartburn or chest pain that persists despite PPIs.',
  'Sour or bitter taste in the mouth due to reflux after meals.',
  'Difficulty swallowing, frequent belching, or post-meal bloating.',
  'Chronic cough, hoarseness, or throat irritation triggered by reflux.',
  'Nausea, vomiting, or anaemia caused by large paraesophageal hernias.',
]

const diagnosticTests = [
  'Upper GI endoscopy to inspect inflammation, ulcers, or Barrett’s oesophagus.',
  'Barium swallow (X-ray) to visualise the size and type of hiatus hernia.',
  'Esophageal manometry to record sphincter pressures and motility before deciding the fundoplication type.',
  '24-hour pH monitoring to correlate acid exposure with symptoms.',
  'CT or MRI scan for complex, recurrent, or giant paraesophageal hernias.',
]

const lifestyleTips = [
  'Lose excess weight, quit smoking, and avoid tight clothing around the abdomen.',
  'Eat small, frequent meals; stay upright for two hours after eating; avoid late-night dinners.',
  'Elevate the head end of the bed, skip high-fat or spicy meals, and limit caffeine or alcohol.',
]

const medicationPoints = [
  'Proton pump inhibitors and H2 blockers reduce acid production but do not cure the hernia.',
  'Antacids or alginate-based liquids provide quick relief from breakthrough symptoms.',
  'Medication plans are reviewed regularly to limit side-effects and nutrient deficiencies.',
]

const laparoscopicAdvantages = [
  'Four keyhole incisions with minimal tissue trauma and virtually scarless outcomes.',
  'High-quality mesh reinforcement to reduce recurrence risk.',
  'Less pain, quicker mobility, and low infection rates compared to open surgery.',
  'Most patients resume routine activities within 4–5 days after discharge.',
]

const fundoplicationTypes = [
  {
    name: 'Nissen Fundoplication',
    desc: 'A 360° wrap of the stomach around the oesophagus to stop reflux. Ideal for patients with good motility.',
  },
  {
    name: 'Toupet Fundoplication',
    desc: 'A 270° posterior wrap used when manometry shows weaker motility, ensuring easier swallowing.',
  },
  {
    name: 'Dor Fundoplication',
    desc: 'A 180° anterior wrap often combined with myotomy or for select paraesophageal hernias.',
  },
]

const recoveryTimeline = [
  {
    title: 'Day of Surgery',
    detail: 'Walk within 4–6 hours, start sips of water, and perform guided breathing exercises.',
  },
  {
    title: 'First Week',
    detail: 'Follow liquid-to-soft diet, manage discomfort with minimal analgesics, and increase indoor mobility.',
  },
  {
    title: 'Week 2–3',
    detail: 'Shift to semi-solid or pureed diet, resume desk work, and continue posture-led physiotherapy.',
  },
  {
    title: 'Week 4 Onwards',
    detail: 'Gradually return to full activity with core-strength guidance and nutrition follow-up.',
  },
]

const reasonsToChoose = [
  {
    title: 'Advanced Laparoscopic & Robotic Setup',
    detail: 'Dedicated reflux theatres with articulating instruments for safe hiatal closure and mesh placement.',
  },
  {
    title: 'Holistic GERD Program',
    detail: 'Gastroenterology, dietetics, physiotherapy, and insurance teams work together for seamless care.',
  },
  {
    title: 'Experience Across 7,000+ Procedures',
    detail: 'Extensive portfolio covering primary, recurrent, and combined bariatric anti-reflux surgeries.',
  },
]

const faqItems = [
  {
    question: 'What is a hiatus hernia and how is it treated?',
    answer:
      'A hiatus hernia occurs when part of the stomach slides into the chest through the diaphragm. Medicines and lifestyle changes help small hernias, but symptomatic or paraesophageal ones need laparoscopic repair plus fundoplication.',
  },
  {
    question: 'How effective is laparoscopic Nissen fundoplication?',
    answer:
      'Over 90% of patients report long-term reflux relief. The hiatal defect is repaired, the stomach is wrapped around the oesophagus, and recovery takes about a week with minimal restrictions.',
  },
  {
    question: 'How long is the hospital stay after GERD surgery?',
    answer:
      'Patients walk within hours, start liquids the same day, and are discharged within 24–36 hours. Desk work resumes in about a week with guided diet advancement.',
  },
  {
    question: 'Can medicines cure a hiatus hernia?',
    answer: 'Medicines suppress acid and reduce irritation but cannot repair the anatomical defect. Symptomatic or large hernias eventually need surgery.',
  },
  {
    question: 'When should I consider surgery for GERD?',
    answer: 'Surgery is recommended if symptoms persist on medicines, complications such as aspiration or Barrett’s develop, or imaging shows a large paraesophageal hernia.',
  },
  {
    question: 'What dietary precautions are advised after surgery?',
    answer: 'Follow a liquid diet for 7–10 days, transition to semi-solids for another 10 days, chew thoroughly, and avoid fatty or acidic meals initially.',
  },
]

const faqSchema = getFAQSchema({
  title: 'GERD & Hiatus Hernia FAQs',
  description: 'Expert guidance on diagnosis, fundoplication outcomes, hospital stay, medication, and post-op lifestyle.',
  faqs: faqItems,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'Laparoscopic GERD & Hiatus Hernia Surgery',
  description:
    'Advanced laparoscopic and robotic anti-reflux program featuring hiatal repair, mesh reinforcement, and tailored fundoplication with rapid recovery.',
  url: '/best-hiatus-hernia-surgeon-in-delhi',
  procedureType: 'Laparoscopic/Robotic Fundoplication',
  bodyLocation: 'Diaphragm and Lower Esophagus',
  medicalSpecialty: ['LaparoscopicSurgery', 'ThoracicSurgery'],
  preparation:
    'Upper GI endoscopy, barium swallow, esophageal manometry, 24-hour pH monitoring, and cross-sectional imaging for large hernias.',
  followup: 'Soft diet for 3 weeks, breathing exercises, posture training, and virtual follow-ups at 1, 3, and 6 weeks.',
  howPerformed:
    'The hiatus is tightened laparoscopically, the stomach fundus is wrapped around the oesophagus, and high-quality mesh is used when needed to prevent recurrence.',
  areaServed: ['Delhi', 'Gurgaon', 'Noida', 'International Patients'],
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'GERD & Hiatus Hernia Surgery', url: '/best-hiatus-hernia-surgeon-in-delhi' },
])

export default function BestHiatusHerniaSurgeonPage() {
  const relatedBlogs = blogPosts
    .filter(
      (post) =>
        post.category.toLowerCase().includes('gerd') ||
        post.category.toLowerCase().includes('hiatus') ||
        post.tags.some((tag) => ['gerd', 'reflux', 'hiatus', 'hernia'].includes(tag.toLowerCase())),
    )
    .slice(0, 3)

  return (
    <>
      <StructuredData data={procedureSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      <div className="pt-20 pb-16">
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/gerdhiatushernia-surgery-delhi.jpg"
              alt="Best Hiatus Hernia Surgeon in Delhi"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              priority
            />
          </div>
        </div>

        <div className="container-custom mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-hiatus-hernia-surgeon-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Best GERD &amp; Hiatus Hernia Surgeon in <span className="text-[#0891b2]">Delhi, India</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Dr. Kapil Agrawal offers painless laparoscopic hiatus hernia repair, tailored fundoplication, and robotic support when required. Every plan covers diagnostics,
            lifestyle counselling, cashless assistance, and the same enhanced recovery protocol followed for other flagship services at Habilite Clinics.
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

        <div className="container-custom space-y-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <ConsultationForm serviceName="GERD & Hiatus Hernia Surgery" serviceSlug="best-hiatus-hernia-surgeon-in-delhi" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Patients Choose Habilite Clinics</h2>
              <p>
                International fellowships, 7,000+ minimally invasive procedures, and a focused reflux program ensure precise diagnosis, safe surgery, and meticulous aftercare.
                The same team handles endoscopy, pH monitoring, manometry, robotic theatres, nutrition, and physiotherapy so patients aren’t shuffled between departments.
              </p>
              <p>
                Treatment plans are personalised—ranging from lifestyle optimisation and medicines to laparoscopic or robotic hiatal repair, mesh-reinforced cruroplasty, and
                combined bariatric reflux surgery when obesity is a trigger.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {reasonsToChoose.map((item) => (
                  <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What is a Hiatus Hernia?</h2>
              <p className="text-gray-700">
                A hiatus hernia occurs when a portion of the stomach migrates through the diaphragm into the chest. The diaphragm opening (hiatus) becomes lax, letting the
                stomach or gastro-oesophageal junction slip upward and trigger reflux. Understanding the type of hernia guides the repair strategy.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-[#0891b2] space-y-2">
                {conditionOverview.map((point) => (
                  <div key={point} className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Symptoms That Need Evaluation</h2>
              <p className="text-gray-700">Ignoring persistent reflux can lead to strictures, Barrett’s oesophagus, or aspiration. Seek a specialist if you notice:</p>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 space-y-2">
                {symptoms.map((symptom) => (
                  <div key={symptom} className="flex items-start text-gray-800 text-sm sm:text-base">
                    <CheckCircle2 className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Diagnostic Work-Up</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {diagnosticTests.map((test) => (
                  <div key={test} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-sm sm:text-base">{test}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Lifestyle Modifications</h2>
              <ul className="space-y-3 text-gray-700">
                {lifestyleTips.map((tip) => (
                  <li key={tip} className="flex items-start text-sm sm:text-base">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Medicines for GERD &amp; Hiatus Hernia</h2>
              <p className="text-gray-700">Medicines provide relief but cannot correct the diaphragm defect. Plans are titrated to avoid chronic dependence.</p>
              <ul className="space-y-3 text-gray-700">
                {medicationPoints.map((point) => (
                  <li key={point} className="flex items-start text-sm sm:text-base">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Laparoscopic Hiatus Hernia Surgery</h2>
              <p className="text-gray-700 leading-relaxed">
                Four tiny 0.5 cm incisions are used to reposition the stomach, repair the hiatal defect, and perform fundoplication based on manometry. Patients mobilise
                within hours, stay on a liquid-to-soft diet for about three weeks, and typically return to office work in five days.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {laparoscopicAdvantages.map((advantage) => (
                  <div key={advantage} className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>{advantage}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Fundoplication Options</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {fundoplicationTypes.map((type) => (
                  <div key={type.name} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">{type.name}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{type.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Recovery Roadmap</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow">
                  <ul className="space-y-4 text-sm text-gray-700">
                    {recoveryTimeline.map((step) => (
                      <li key={step.title} className="flex">
                        <HeartPulse className="text-[#0891b2] w-5 h-5 mr-3 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900">{step.title}</p>
                          <p>{step.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#0891b2]/5 rounded-2xl border border-[#0891b2]/20 p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">Enhanced Recovery Support</h3>
                  <p className="text-sm text-gray-700">
                    Patients receive a structured handbook covering swallowing exercises, breathing drills, diet upgrades, posture cues, and tele-follow-ups—mirroring the
                    protocol used for gallbladder, bariatric, and laser surgery patients at Habilite Clinics.
                  </p>
                </div>
              </div>
            </section>
            <RecoveryTimeline />

            <section className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
                  Everything you need to know about GERD and hiatus hernia symptoms, treatment choices, recovery timelines, and insurance assistance.
                </p>
              </div>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div key={item.question} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {relatedBlogs.length > 0 && (
              <section className="max-w-6xl mx-auto">
                <div className="flex items-center mb-6">
                  <TrendingUp className="text-[#0891b2] mr-3" size={32} />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest GERD &amp; Hiatus Hernia Blogs</h2>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                      Stay informed about GERD symptoms, treatment options, and recovery tips curated by Dr. Kapil Agrawal.
                    </p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {relatedBlogs.map((post) => (
                    <a
                      key={post.slug}
                      href={`/post/${post.slug}`}
                      className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <p className="text-xs uppercase tracking-widest text-[#0891b2] mb-2">{post.category}</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                      <span className="text-sm font-semibold text-[#f56336]">
                        {post.title.toLowerCase().includes('cost') || post.title.toLowerCase().includes('price')
                          ? `Discover ${post.title.toLowerCase()}`
                          : post.title.toLowerCase().includes('surgery') || post.title.toLowerCase().includes('treatment')
                          ? `Learn about ${post.title.toLowerCase()}`
                          : post.title.toLowerCase().includes('guide') || post.title.toLowerCase().includes('how to')
                          ? `Read complete guide on ${post.title.toLowerCase()}`
                          : `Explore ${post.title.toLowerCase()}`} →
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <CostCalculator serviceName="GERD & Hiatus Hernia Surgery" />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="GERD & Hiatus Hernia Surgery" />
        </div>
      </div>
    </>
  )
}


