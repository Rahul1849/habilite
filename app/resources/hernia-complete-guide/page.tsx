import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { CheckCircle2, PhoneCall, Leaf } from 'lucide-react'
import UploadReportCard from './UploadReportCard'
import WhatsAppOptInCard from './WhatsAppOptInCard'
import PeopleAlsoAsk from './PeopleAlsoAsk'
import AskSurgeonForm from './AskSurgeonForm'
import { blogPosts } from '@/data/blog'
import {
  webPageSchema,
  medicalOrganizationSchema,
  physicianSchema,
  getLocalBusinessSchema,
  serviceSchema,
  breadcrumbSchema,
  getFAQSchema,
  getHowToSchema,
  getVideoObjectSchema,
  getArticleSchema,
  medicalConditionSchema,
  medicalProcedureSchema,
  getItemListSchema,
  organizationSchema,
  personSchema,
  medicalSpecialtySchema,
  offerSchema,
  contactPointSchema
} from './schemas'

export const metadata: Metadata = {
  title: 'Hernia – A Complete Guide | Dr. Kapil Agrawal | Habilite Clinics',
  description:
    'Hernia awareness hub by Dr. Kapil Agrawal. Take a 30-second hernia self-check, decode ultrasound reports, and follow a doctor-approved diet chart.',
  alternates: {
    canonical: 'https://www.habiliteclinics.com/resources/hernia-complete-guide',
  },
}

type ChecklistItem = {
  label: string
}

type InsightCard = {
  title: string
  description: string
}

const symptomChecklist: ChecklistItem[] = [
  { label: 'Visible bulge in abdomen or groin?' },
  { label: 'Pain or discomfort in affected area?' },
  { label: 'Heaviness or pressure sensation?' },
  { label: 'Pain that worsens when standing, coughing, or straining?' },
  { label: 'Difficulty reducing the bulge?' },
  { label: 'Nausea or vomiting?' },
  { label: 'Constipation or difficulty with bowel movements?' },
]

const avoidFoods = ['Heavy lifting', 'Straining during bowel movements', 'Chronic coughing', 'Smoking', 'High-fat foods']
const eatFoods = ['High-fiber foods', 'Fruits', 'Vegetables', 'Whole grains', 'Lean proteins', 'Plenty of water']

const surgeryQuestions = [
  'Is the hernia causing pain or discomfort?',
  'Is the hernia enlarging over time?',
  'Is the hernia becoming irreducible (cannot be pushed back)?',
  'Do you have signs of strangulation (severe pain, nausea, vomiting)?',
  'Does the hernia interfere with daily activities?',
]

// Get featured blogs with images from blogPosts data
const featuredBlogSlugs = [
  'hernia-surgery-types-treatment-options-recovery',
  'laparoscopic-hernia-repair-modern-approach-treatment',
  'signs-you-need-hernia-surgery'
]

const featuredBlogs = featuredBlogSlugs.map(slug => {
  const blogPost = blogPosts.find(post => post.slug === slug)
  return {
    title: blogPost?.title || '',
    description: blogPost?.excerpt || '',
    href: `/post/${slug}`,
    image: blogPost?.image || '/images/hernia-surgery-delhi.jpg'
  }
}).filter(blog => blog.title) // Remove any that weren't found

const successStories = [
  {
    id: 'mx-JNlf8qOE',
    title: 'Life after complex abdominal wall reconstruction',
    description: 'Watch how a patient overcame years of pain with a single-stage robotic hernia repair and regained confidence.',
    url: 'https://youtu.be/mx-JNlf8qOE?si=hBuNT7oFzWUOaJqT'
  },
  {
    id: '4-mCfI4pnss',
    title: 'Desk job to deadlifts in weeks',
    description: 'A young executive explains her laparscopic hernia journey, from first consultation to returning to fitness training.',
    url: 'https://youtu.be/4-mCfI4pnss?si=VimgnvmoFpGRs9OO'
  },
  {
    id: 'QRxW20rp-AI',
    title: 'Minimally invasive fix for recurrent hernia',
    description: 'Detailed account of how recurrent symptoms were resolved with a tailored mesh repair and enhanced recovery.',
    url: 'https://youtu.be/QRxW20rp-AI?si=9_etS9IRPFq1KLl6'
  },
  {
    id: 'LTGyPysXqH4',
    title: 'Bilateral hernia repair success story',
    description: 'Hear how a senior patient experienced a pain-free, scar-conscious outcome after bilateral robotic surgery.',
    url: 'https://youtu.be/LTGyPysXqH4?si=u6ce4B5EYj1ciKP9'
  }
]

const detailedVideo = {
  id: '42vI3uOJSQI',
  title: 'Complete Hernia Treatment Journey: Evaluation, Surgery & Rehab',
  description:
    'Dr. Kapil Agrawal explains how hernias are diagnosed, how to choose the right surgical approach, and what to expect during recovery.',
  url: 'https://youtu.be/42vI3uOJSQI?si=IhUHlr2B1hlNlpYI'
}

const procedureVideo = {
  id: 'lfhv5H9VVJ8',
  title: 'How Hernia Surgery Is Done Step by Step | Complete Laparoscopic Procedure Explained',
  description:
    'Walk through the exact steps of laparoscopic hernia repair—from anaesthesia and port placement to suturing and discharge.',
  url: 'https://youtu.be/lfhv5H9VVJ8?si=0BdUwl0QIV22rA39'
}

const roboticCompareVideo = {
  id: 'FZHmnGH0Frw',
  title: 'Robotic vs Laparoscopic Hernia Surgery — Which Is Better for Fast, Safe Recovery?',
  description:
    'Dr. Kapil compares robotic precision with advanced laparoscopy, explaining how he selects the safest option for each patient.',
  url: 'https://youtu.be/FZHmnGH0Frw?si=xcEwZ5l10eJayEew'
}

export default function HerniaCompleteGuidePage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f8fbff] to-white">
      <section className="pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-base uppercase tracking-[0.5em] font-bold  text-[#0891b2]">Hernia Awareness Hub</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Best Hernia Treatment in Delhi - A Complete Guide
            </h1>
            <p className="text-lg text-gray-600">
              Educate yourself before you decide. Use these interactive tools to understand symptoms, reports, diet plans,
              and next steps for hernia care.
            </p>
          </header>
        </div>
      </section>

      {/* Self-Check Section */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-xl border border-[#0891b2]/20 p-6 sm:p-8 lg:p-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-stretch">
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Do You Have Hernia? Take This 30-Second Self-Check
                </h2>
                <p className="text-gray-600">
                  Tick all the symptoms that apply to you. If two or more are true, it&apos;s time to speak with our hernia
                  care team.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {symptomChecklist.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gradient-to-r from-[#ecfeff] to-white px-4 py-3 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="text-[#0891b2]" size={22} />
                    </div>
                    <p className="text-gray-800 text-sm font-medium leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#0891b2] via-[#06b6d4] to-[#22d3ee] text-white p-5 sm:p-6 lg:p-7 shadow-2xl flex items-center">
              <div className="w-full flex flex-col items-center text-center gap-4">
                <div className="space-y-2">
                  <p className="text-base uppercase tracking-[0.4em] font-bold text-white/90">Need Immediate Support?</p>
                  <h3 className="text-2xl font-semibold leading-snug">
                    👉 Share your symptoms for a personalised review.
                  </h3>
                  <p className="text-white/85 text-sm max-w-md mx-auto">
                    Dr. Kapil Agrawal&apos;s hernia team will study your responses and our team will reach out to you soon.
                  </p>
                </div>
                <Link
                  href="https://wa.me/919999456455?text=I%20would%20like%20a%20hernia%20symptom%20review"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#0f172a] font-semibold px-5 py-3 shadow-lg hover:shadow-xl transition"
                >
                  <PhoneCall size={20} />
                  Share Symptoms on WhatsApp
                </Link>
                <p className="text-base font-bold text-white/90">
                  Prefer email?{' '}
                  <a href="mailto:contact@habiliteclinics.com" className="underline">
                    contact@habiliteclinics.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultrasound Explainer */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Confused About Your Hernia Ultrasound Report? We&apos;ll Explain It Clearly.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Upload your ultrasound report and receive a plain-English explanation of every finding from our medical team.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr,1fr]">
            <UploadReportCard />

            <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6 sm:p-10 shadow-2xl">
              <h3 className="text-xl font-semibold mb-4">What we decode for you</h3>
              <p className="text-white/80 mb-6">
                Every term in your ultrasound can change the treatment plan. Here&apos;s what we interpret and explain in simple language.
              </p>
              <ul className="space-y-3 text-sm">
                {['Hernia size and location', 'Type of hernia (inguinal, umbilical, incisional)', 'Contents of hernia sac', 'Signs of strangulation or obstruction', 'Muscle wall defect size', 'Recurrence risk factors', 'Mesh placement evaluation', 'Post-operative healing assessment', 'When surgery cannot wait', 'When monitoring is possible'].map(
                  (feature) => (
                    <li key={feature} className="flex gap-3">
                      <CheckCircle2 size={18} className="text-emerald-300 mt-0.5" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Surgery Necessity Checker */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-gray-100 shadow-xl p-6 sm:p-8 lg:p-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">Surgery Necessity Checker</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Do You Need Hernia Surgery? Answer These 5 Questions</h2>
                <p className="text-gray-600">
                  This framework is what we use during clinic consultations. Answer honestly to understand whether surgery is the safer path or if monitoring is possible.
                </p>
              </div>
              <div className="space-y-3">
                {surgeryQuestions.map((question) => (
                  <div key={question} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gradient-to-r from-white to-[#f8fbff] px-4 py-3 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#ecfeff] flex items-center justify-center text-[#0891b2] text-sm font-semibold">?</div>
                    <p className="text-gray-800 text-sm font-medium">{question}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-[#ecfeff] border border-[#0891b2]/30 px-4 py-4 text-sm text-gray-700">
                <p className="font-semibold text-[#0891b2] mb-1">Interpreting your answers:</p>
                <p>
                  If you answered &quot;Yes&quot; to two or more questions, surgery prevents complications and improves quality of life. If all answers are &quot;No&quot;, continue monitoring and avoid activities that increase abdominal pressure.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 space-y-5 flex flex-col justify-center items-center text-center">
              <div className="space-y-3 max-w-md">
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">Need confirmation?</p>
                <h3 className="text-2xl font-semibold leading-snug">👉 Send your report for confirmation.</h3>
                <p className="text-sm text-white/80">
                  We will review your ultrasound, blood reports, and symptom history, then tell you if surgery is the safest route or if you can wait.
                </p>
              </div>
              <Link
                href="https://wa.me/919999456455?text=I%20want%20an%20opinion%20on%20hernia%20surgery"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-lg hover:shadow-xl transition"
              >
                <PhoneCall size={20} />
                Share Reports on WhatsApp
              </Link>
              <p className="text-xs text-white/70">
                Prefer email?{' '}
                <a href="mailto:contact@habiliteclinics.com" className="underline">
                  contact@habiliteclinics.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ask the Surgeon */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#0e7490] to-[#06b6d4] text-white shadow-2xl p-6 sm:p-10">
            <div className="space-y-3 text-center">
              <p className="text-base uppercase tracking-[0.6em] font-bold text-white/100">Ask the Surgeon</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Have A Question About Hernia Problems?</h2>
              <p className="text-white/90 text-base">
                Ask Dr. Kapil Agrawal directly. Share your concern, and his team will get back to you with a personalised response.
              </p>
            </div>
            <AskSurgeonForm />
          </div>
        </div>
      </section>

      <PeopleAlsoAsk />

      {/* Success Stories */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">Success stories</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Patients Who Trusted Dr. Kapil Agrawal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences from patients who overcame hernia problems with personalised care and advanced laparoscopic surgery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {successStories.map((story, index) => (
              <Link
                key={story.id}
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56 w-full bg-gray-100">
                  <Image
                    src={`https://img.youtube.com/vi/${story.id}/hqdefault.jpg`}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={85}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#b91c1c] shadow">
                      Watch Story
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#0891b2]">{story.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{story.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500">
            Videos hosted on YouTube. Clicking a card opens the testimonial in a new tab.
          </p>
        </div>
      </section>

      {/* Educational Video */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-gray-100 shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[250px] bg-gray-100">
                <Link href={detailedVideo.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Image
                    src={`https://img.youtube.com/vi/${detailedVideo.id}/hqdefault.jpg`}
                    alt={detailedVideo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-[#b91c1c] shadow">
                      Watch on YouTube
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">Expert video</p>
                <h2 className="text-2xl font-bold text-gray-900">{detailedVideo.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{detailedVideo.description}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Understand reasons behind hernia formation</li>
                  <li>• Spot critical symptoms that need urgent evaluation</li>
                  <li>• Compare conservative management and surgical treatment</li>
                </ul>
                <Link
                  href={detailedVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0f172a] to-[#0891b2] text-white font-semibold px-5 py-3 shadow hover:shadow-lg transition"
                >
                  Open Video in New Tab
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Video */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-gray-100 shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[250px] bg-gray-100">
                <Link href={procedureVideo.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Image
                    src={`https://img.youtube.com/vi/${procedureVideo.id}/hqdefault.jpg`}
                    alt={procedureVideo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-[#b91c1c] shadow">
                      Watch on YouTube
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">Procedure video</p>
                <h2 className="text-2xl font-bold text-gray-900">{procedureVideo.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{procedureVideo.description}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Step-by-step overview of laparoscopic hernia repair</li>
                  <li>• Mesh placement and hernia reduction through keyhole incisions</li>
                  <li>• Recovery timeline, safety tips, and advantages</li>
                </ul>
                <Link
                  href={procedureVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0f172a] to-[#0891b2] text-white font-semibold px-5 py-3 shadow hover:shadow-lg transition"
                >
                  Watch Procedure Video
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Robotic vs Laparoscopic Video */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-gray-100 shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[250px] bg-gray-100">
                <Link href={roboticCompareVideo.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Image
                    src={`https://img.youtube.com/vi/${roboticCompareVideo.id}/hqdefault.jpg`}
                    alt={roboticCompareVideo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-[#b91c1c] shadow">
                      Watch on YouTube
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">Technology insights</p>
                <h2 className="text-2xl font-bold text-gray-900">{roboticCompareVideo.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{roboticCompareVideo.description}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Key differences in precision, incision size, pain, and recovery</li>
                  <li>• Cost comparison and suitability for different patient conditions</li>
                  <li>• When doctors recommend robotic surgery over laparoscopic — and why</li>
                </ul>
                <Link
                  href={roboticCompareVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0f172a] to-[#0891b2] text-white font-semibold px-5 py-3 shadow hover:shadow-lg transition"
                >
                  Watch Comparison Video
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Blogs */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">Featured blogs</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Additional Reading on Hernia Care</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dive deeper into recovery, surgery options, and financial planning with curated guides from our blog.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {featuredBlogs.map((blog) => {
              const blogPost = blogPosts.find(post => post.slug === blog.href.split('/').pop());
              if (!blogPost) return null;
              return (
                <Link
                  key={blog.href}
                  href={blog.href}
                  className="group flex flex-col md:flex-row rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                >
                  <div className="relative w-full md:w-1/2 h-48 md:h-auto overflow-hidden">
                    <Image
                      src={blogPost.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  <div className="flex-1 p-6 space-y-3 w-full md:w-1/2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0891b2]">{blog.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{blog.description}</p>
                    <div className="text-sm font-semibold text-[#0891b2] group-hover:text-[#067a94]">
                      {blog.title.toLowerCase().includes('cost') || blog.title.toLowerCase().includes('price')
                        ? `Discover ${blog.title.toLowerCase()}`
                        : blog.title.toLowerCase().includes('surgery') || blog.title.toLowerCase().includes('treatment')
                        ? `Learn about ${blog.title.toLowerCase()}`
                        : blog.title.toLowerCase().includes('guide') || blog.title.toLowerCase().includes('how to')
                        ? `Read complete guide on ${blog.title.toLowerCase()}`
                        : `Explore ${blog.title.toLowerCase()}`} →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diet Chart */}
      <section className="pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Do You Have Hernia? — What to Eat & Avoid</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A gentle, high-fiber diet helps prevent constipation and reduces strain. Follow these doctor-approved guidelines.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <DietCard title="Activities to Avoid" accent="from-[#fee2e2] to-white" iconColor="text-rose-500" items={avoidFoods} />
            <DietCard title="Foods to Eat" accent="from-[#ecfeff] to-white" iconColor="text-emerald-500" items={eatFoods} />
          </div>

          <WhatsAppOptInCard />
        </div>
      </section>

      {/* Comprehensive Structured Data Schemas for SEO - 20 Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalOrganizationSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getHowToSchema()) }} suppressHydrationWarning />
      {successStories.map((story) => (
        <script key={`video-${story.id}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getVideoObjectSchema(story)) }} suppressHydrationWarning />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getVideoObjectSchema({ id: detailedVideo.id, title: detailedVideo.title, description: detailedVideo.description, url: detailedVideo.url })) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getVideoObjectSchema({ id: procedureVideo.id, title: procedureVideo.title, description: procedureVideo.description, url: procedureVideo.url })) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getVideoObjectSchema({ id: roboticCompareVideo.id, title: roboticCompareVideo.title, description: roboticCompareVideo.description, url: roboticCompareVideo.url })) }} suppressHydrationWarning />
      {featuredBlogs.map((blog) => (
        <script key={`article-${blog.href}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema(blog)) }} suppressHydrationWarning />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema('Hernia Symptoms Checklist', 'Common symptoms of hernia that require medical attention', symptomChecklist.map(item => item.label))) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema('Activities to Avoid with Hernia', 'Activities that should be avoided if you have hernia', avoidFoods)) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema('Foods to Eat with Hernia', 'Recommended foods for people with hernia', eatFoods)) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSpecialtySchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }} suppressHydrationWarning />
    </div>
  )
}

type DietCardProps = {
  title: string
  accent: string
  iconColor: string
  items: string[]
}

function DietCard({ title, accent, iconColor, items }: DietCardProps) {
  return (
    <div className={`rounded-3xl bg-gradient-to-br ${accent} border border-gray-100 shadow-lg p-6 sm:p-8`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-2xl bg-white shadow flex items-center justify-center ${iconColor}`}>
          <Leaf size={24} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-3 text-gray-700">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0891b2]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

