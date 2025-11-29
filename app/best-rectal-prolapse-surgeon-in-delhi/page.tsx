import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, Award, Users, TrendingUp, Shield } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import { blogPosts } from '@/data/blog'
import { RecoveryTimeline } from '@/components/services/RecoveryTimeline'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Best Rectal Prolapse Surgeon in Delhi | Laparoscopic & STARR Repair | Dr. Kapil Agrawal',
  description:
    'Comprehensive rectal prolapse treatment in Delhi by Dr. Kapil Agrawal. STARR, Delorme, Altemeier, laparoscopic & robotic rectopexy, cashless insurance, 24-36 hr discharge, personalised rehab and female care coordinators.',
  keywords: [
    'rectal prolapse surgery delhi',
    'best rectal prolapse surgeon delhi',
    'STARR procedure delhi',
    'delorme surgery rectal prolapse',
    'altemeier procedure delhi',
    'laparoscopic rectopexy',
    'rectal prolapse treatment india',
    'rectal prolapse specialist delhi',
  ],
  openGraph: {
    title: 'Rectal Prolapse Surgery in Delhi | Dr. Kapil Agrawal',
    description:
      'Advanced STARR, laparoscopic and robotic rectal prolapse surgery by Dr. Kapil Agrawal. 23+ yrs experience, 7000+ surgeries, cashless insurance and fast recovery.',
    url: 'https://www.habiliteclinics.com/best-rectal-prolapse-surgeon-in-delhi',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/best-rectal-prolapse-surgeon-in-delhi',
  },
}

const highlightChips = [
  { icon: Award, label: '23+ Years Experience' },
  { icon: Users, label: '7000+ Minimally Invasive Surgeries' },
  { icon: Shield, label: 'Cashless Insurance & 0% EMI' },
  { icon: TrendingUp, label: 'STARR • Delorme • Laparoscopic Rectopexy' },
]

const symptoms = [
  'Lump protruding through the anus during bowel movement, coughing or walking',
  'Difficulty in manual reduction or prolapse becoming permanent',
  'Mucous discharge, bleeding or foul odour from irritated mucosa',
  'Severe constipation or feeling of incomplete evacuation',
  'Incontinence or inability to control gas/stools due to sphincter fatigue',
]

const causes = [
  'Advancing age and weak pelvic floor muscles',
  'Multiple pregnancies or difficult deliveries',
  'Chronic constipation, prolonged straining or laxative abuse',
  'Neurological disorders such as spinal cord lesions or multiple sclerosis',
  'Chronic cough, COPD or activities that raise abdominal pressure',
]

const treatmentApproach = [
  {
    title: 'STARR Procedure (Stapled Trans Anal Rectal Resection)',
    detail:
      'Performed through the anal canal with specialised staplers, ideal for internal prolapse and obstructed defecation. No abdominal incisions, same-day mobility and rapid pain-free recovery.',
  },
  {
    title: 'Delorme / Altemeier Procedures',
    detail:
      'Perineal approaches (mucosal sleeve resection or perineal proctosigmoidectomy) recommended for elderly or high-risk patients unfit for general anaesthesia. Minimal pain and short stay.',
  },
  {
    title: 'Laparoscopic / Robotic Rectopexy',
    detail:
      'Gold-standard for full thickness prolapse. The rectum is mobilised, lifted and fixed to the sacrum with sutures or mesh via 3 tiny incisions for excellent functional outcomes and <2% recurrence.',
  },
  {
    title: 'Rectopexy with Sigmoid Resection',
    detail:
      'Recommended when severe constipation accompanies prolapse. Removing redundant bowel improves transit while the rectum is secured to prevent relapse.',
  },
]

const recoveryChecklist = [
  { title: '24–36 Hr Hospital Stay', description: 'Enhanced recovery protocols, DVT prophylaxis and early ambulation.' },
  { title: 'Personalised Diet Plans', description: 'High-fibre, probiotic-rich diet chart with hydration targets to prevent constipation.' },
  { title: 'Pelvic Floor Rehab', description: 'Physiotherapist-led Kegel and breathing exercises with progress tracking via WhatsApp.' },
  { title: 'Tele-follow Ups', description: 'Video reviews at week 1, 4 and 12 plus unlimited nurse helpline access.' },
]

const testimonials = [
  {
    name: 'Sanjay Kumar',
    summary:
      '“My 70-year-old mother underwent laparoscopic rectopexy. The surgery and recovery were smoother than we imagined. Thank you Dr. Kapil for the confident counselling and post-op support.”',
  },
  {
    name: 'Om Prakash Gupta',
    summary:
      '“Due to cardiac issues I was offered the STARR procedure. No cuts, no dressings and I went home the next day. Constipation and prolapse issues disappeared.”',
  },
  {
    name: 'Rajni',
    summary:
      '“Multiple pregnancies left me embarrassed about the prolapse. Dr. Kapil’s female coordinators made me comfortable, and the laparoscopic surgery healed with barely visible scars.”',
  },
]

const faqs = [
  {
    question: 'Can rectal prolapse be managed without surgery?',
    answer:
      'Dietary changes, pelvic floor therapy, and treating constipation may slow early prolapse, but most patients eventually need surgery for lasting relief.',
  },
  {
    question: 'Which surgery is best for rectal prolapse?',
    answer:
      'Procedure selection depends on age, fitness, bowel habits, and prolapse length. Options include STARR, Delorme, Altemeier, laparoscopic or robotic rectopexy with mesh.',
  },
  {
    question: 'How long is the hospital stay?',
    answer:
      'Minimally invasive rectal prolapse procedures typically require a 24–36 hour stay with early mobilisation and home-based recovery protocols.',
  },
  {
    question: 'Is rectal prolapse surgery covered by insurance?',
    answer:
      'Yes. The Habilite Clinics insurance desk assists with cashless approvals, reimbursement files, and optional zero-interest EMIs.',
  },
  {
    question: 'Will rectal prolapse recur after surgery?',
    answer:
      'Recurrence is rare when the right technique is chosen and mesh-supported laparoscopic or robotic rectopexy is performed by an experienced surgeon.',
  },
  {
    question: 'What is recovery like?',
    answer:
      'Patients walk within 24 hours, resume desk work in 7–10 days, and follow a customised diet plus pelvic floor rehabilitation supervised by our care team.',
  },
  {
    question: 'Can medicines cure rectal prolapse?',
    answer:
      'Medicines cannot reverse rectal prolapse. However, stool softeners, diet changes and pelvic floor therapy may slow progression till you are ready for surgery.',
  },
  {
    question: 'Is surgery always necessary?',
    answer:
      'Mild mucosal prolapse may be observed with lifestyle changes, but full thickness prolapse, bleeding, incontinence or recurrent infections are definite indications for surgery.',
  },
  {
    question: 'Which technique prevents recurrence best?',
    answer:
      'For fit adults, laparoscopic or robotic rectopexy with mesh support offers the best long-term durability. STARR and perineal procedures are chosen for tailored scenarios.',
  },
  {
    question: 'When can I resume work?',
    answer: 'Desk work generally resumes in 7–10 days, light exercise in 2 weeks and heavy lifting after 4–6 weeks depending on healing.',
  },
  {
    question: 'Do you treat female patients separately?',
    answer:
      'Yes, female care coordinators assist during counselling, consent and follow-up to maintain privacy and address pelvic floor concerns sensitively.',
  },
]

const faqSchema = getFAQSchema({
  title: 'Rectal Prolapse Surgery FAQs',
  description: 'Answers from Dr. Kapil Agrawal on STARR, laparoscopic rectopexy, recovery, and insurance support.',
  faqs,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'Rectal Prolapse Surgery (STARR, Delorme, Laparoscopic Rectopexy)',
  description:
    'Comprehensive rectal prolapse program offering STARR, Delorme, Altemeier, laparoscopic and robotic rectopexy with pelvic floor rehab and cashless insurance.',
  url: '/best-rectal-prolapse-surgeon-in-delhi',
  procedureType: 'Laparoscopic/Robotic Rectopexy & Perineal Procedures',
  bodyLocation: 'Rectum and Pelvic Floor',
  medicalSpecialty: ['ColorectalSurgery', 'LaparoscopicSurgery'],
  followup: 'Structured visits with nutrition counselling, pelvic floor therapy, and tele-support at weeks 1, 4, and 12.',
  preparation: 'Comprehensive evaluation, bowel preparation, anaesthesia clearance, and pelvic floor training.',
  howPerformed:
    'Depending on indication, the rectum is mobilised laparoscopically and fixed to the sacrum with mesh, or perineal resection is done for high-risk patients.',
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'Rectal Prolapse Surgery', url: '/best-rectal-prolapse-surgeon-in-delhi' },
])

export default function BestRectalProlapseSurgeonPage() {
  const rectalBlogs = blogPosts
    .filter((post) => post.category.toLowerCase().includes('rectal') || post.tags.some((tag) => tag.toLowerCase().includes('rectal')))
    .slice(0, 3)

  return (
    <>
      <StructuredData data={procedureSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      <div className="pt-20 pb-16">
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl">
            <Image
              src="/images/rectal-prolapse-surgeon-delhi-india.webp"
              alt="Rectal Prolapse Surgeon in Delhi - Habilite Clinics"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
            />
          </div>
        </div>

        <div className="container-custom mb-12">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-700 mb-4">rectal prolapse care in delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Best Rectal Prolapse Surgeon in <span className="text-[#0891b2]">Delhi</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Internationally trained Dr. Kapil Agrawal offers STARR, Delorme, Altemeier, laparoscopic and robotic rectopexy for personalised, painless and recurrence-free rectal
              prolapse treatment with 24–36 hour discharge and dedicated female coordinators.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {highlightChips.map((chip) => {
                const Icon = chip.icon
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 bg-[#0891b2]/10 border border-[#0891b2]/30 text-sm font-semibold text-gray-700 px-4 py-2 rounded-full"
                  >
                    <Icon size={16} className="text-[#0891b2]" />
                    {chip.label}
                  </span>
                )
              })}
            </div>
            <div className="mt-6">
              <CallUsButton />
            </div>
          </div>
        </div>

        <div className="container-custom mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <ConsultationForm serviceName="Rectal Prolapse Surgery" serviceSlug="best-rectal-prolapse-surgeon-in-delhi" />
            </div>
          </div>
        </div>

        <div className="container-custom space-y-12">
          <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What is Rectal Prolapse?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Rectal prolapse occurs when the last part of the intestine weakens and slips out through the anus. It begins as an internal intussusception but may progress to a
              full-thickness prolapse with concentric rings. Apart from social embarrassment, untreated prolapse causes infections, ulcers, constipation and even incontinence.
              Early assessment ensures we choose the least invasive, most durable treatment plan.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="bg-cyan-50 rounded-xl p-5 border border-cyan-100">
                <h3 className="font-semibold text-gray-900 mb-2">Partial (Mucosal) Prolapse</h3>
                <p className="text-sm text-gray-700">Only the inner mucosal lining protrudes (&lt;2 cm). Patients complain of constipation, incomplete evacuation or mucus discharge.</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                <h3 className="font-semibold text-gray-900 mb-2">Full Thickness Prolapse</h3>
                <p className="text-sm text-gray-700">
                  The entire rectal wall with blood vessels collapses outside (3–5 cm). It produces concentric folds, pain, bleeding and faecal leakage.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Symptoms</h2>
              <ul className="space-y-3">
                {symptoms.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 size={20} className="text-[#0891b2] mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Does it Occur?</h2>
              <ul className="space-y-3">
                {causes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 size={20} className="text-[#f97316] mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Treatment Options at Habilite Clinics</h2>
            <div className="space-y-4">
              {treatmentApproach.map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Advantages of Minimally Invasive Surgery', points: ['Tiny incisions & almost invisible scars', 'Low blood loss & pain', 'Early mobility and discharge', 'Lowest recurrence with mesh rectopexy'] },
              { title: 'Why Choose Dr. Kapil Agrawal?', points: ['23+ years bariatric & colorectal experience', 'Dedicated female coordinators & physiotherapists', 'In-house insurance desk & 0% EMI', 'Post-op diet & WhatsApp monitoring'] },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm sm:text-base">
                      <CheckCircle2 size={18} className="text-[#0891b2] mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Recovery & Aftercare</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {recoveryChecklist.map((item) => (
                <div key={item.title} className="border border-gray-100 rounded-xl p-4 flex gap-3">
                  <Clock className="text-[#0891b2]" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <RecoveryTimeline />

          <div className="max-w-5xl mx-auto">
            <CostCalculator serviceName="Rectal Prolapse Surgery" />
          </div>

          <section className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Patient Stories</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-[#f97316]" size={28} />
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">Verified Google Review</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">{item.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Rectal Prolapse Surgery" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">FAQs on Rectal Prolapse Surgery</h2>
              <div className="space-y-4">
                {faqs.map((item) => (
                  <details key={item.question} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
                    <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
                      {item.question}
                      <span className="text-[#0891b2] text-sm group-open:hidden">+</span>
                      <span className="text-[#0891b2] text-sm hidden group-open:inline">−</span>
                    </summary>
                    <p className="text-gray-700 mt-3 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {rectalBlogs.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-[#0891b2]" size={32} />
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Latest Rectal Prolapse Blogs</h2>
                    <p className="text-gray-600 text-sm">Evidence-based articles on symptoms, minimally invasive options and recovery diets.</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {rectalBlogs.map((post) => (
                    <Link
                      key={post.id}
                      href={`/post/${post.slug}`}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition"
                    >
                      <div className="relative h-40">
                        <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                      </div>
                      <div className="p-4 space-y-2">
                        <span className="text-xs font-semibold text-[#0891b2] uppercase">{post.category}</span>
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                        <div className="text-xs text-gray-500 flex justify-between">
                          <span>{new Date(post.publishedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          <span>By {post.author}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  )
}


