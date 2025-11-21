import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { CheckCircle2, PhoneCall, Leaf } from 'lucide-react'
import UploadReportCard from './UploadReportCard'
import WhatsAppOptInCard from './WhatsAppOptInCard'
import PeopleAlsoAsk from './PeopleAlsoAsk'
import AskSurgeonForm from './AskSurgeonForm'

export const metadata: Metadata = {
  title: 'Gallbladder – A Complete Guide | Dr. Kapil Agrawal | Habilite Clinics',
  description:
    'Gallbladder awareness hub by Dr. Kapil Agrawal. Take a 30-second gallbladder self-check, decode ultrasound reports, and follow a doctor-approved diet chart.',
  alternates: {
    canonical: 'https://www.habiliteclinics.com/resources/gallbladder-complete-guide',
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
  { label: 'Pain on right side of upper stomach?' },
  { label: 'Pain after oily/spicy meals?' },
  { label: 'Nausea or vomiting?' },
  { label: 'Bloating or indigestion?' },
  { label: 'Back or shoulder pain?' },
  { label: 'Fever with pain?' },
  { label: 'Pain lasting more than 30–60 minutes?' },
]

const avoidFoods = ['Oily', 'Fried', 'Butter / cream', 'Red meat', 'Heavy dairy']
const eatFoods = ['Fruits', 'Vegetables', 'Khichdi', 'Dal', 'Low-fat milk', 'Lemon water']

const surgeryQuestions = [
  'Are your stones causing pain?',
  'Has the pain repeated more than twice?',
  'Are stones larger than 10 mm?',
  'Is the gallbladder wall thick on ultrasound?',
  'Is there sludge or infection noted?',
]

const featuredBlogs = [
  {
    title: 'Life After Gallbladder Removal: What to Expect in 6 Months',
    description: 'Understand the recovery timeline, diet changes, and long-term lifestyle tips after cholecystectomy.',
    href: '/post/life-after-gallbladder-removal-what-to-expect-in-6-months'
  },
  {
    title: 'Gallbladder Stone Operation Cost in Delhi',
    description: 'Detailed cost breakdown, hospital choices, and financial planning tips for gallbladder surgery.',
    href: '/post/gallbladder-stone-operation-cost-delhi'
  },
  {
    title: 'Laparoscopic vs Open Gallbladder Surgery: What’s Right for You?',
    description: 'Compare both approaches, recovery timelines, and risk profiles to make an informed choice.',
    href: '/post/laparoscopic-vs-open-gallbladder-surgery-whats-right-for-you'
  }
]

const successStories = [
  {
    id: 'N09RpTwI_HY',
    title: 'Pain-free life after complex gallstone surgery',
    description: 'Patient shares her journey from repeated attacks to a smooth laparoscopic recovery with Dr. Kapil.',
    url: 'https://youtu.be/N09RpTwI_HY?si=Jff75poDunpnVd0Y'
  },
  {
    id: 'sBfXG1Miajs',
    title: 'Rapid recovery and minimal scars',
    description: 'A working professional explains how he returned to work within days after gallbladder removal.',
    url: 'https://youtu.be/sBfXG1Miajs?si=JU9Ysdjk6CBXPHNA'
  },
  {
    id: '-Lq2NxW1d1s',
    title: 'International patient experience',
    description: 'Hear how a patient travelling from abroad received seamless diagnosis, surgery, and follow-up care.',
    url: 'https://youtu.be/-Lq2NxW1d1s?si=oqA2-yTLrgcGoAJv'
  },
  {
    id: 'DxoM1_39Xec',
    title: 'From anxiety to confidence',
    description: 'This success story highlights pre-op counselling, precision surgery, and post-op support.',
    url: 'https://youtu.be/DxoM1_39Xec?si=8c7s1zF06HD5qJoY'
  }
]

const detailedVideo = {
  id: 'NBP2vClykfs',
  title: 'Gallbladder Stones: Causes, Symptoms, Risk Factors & Treatment Options',
  description:
    'Dr. Kapil explains why stones form, how to identify warning signs early, and when surgery becomes essential.',
  url: 'https://youtu.be/NBP2vClykfs?si=WMdIMppYC8P6sPId'
}

const procedureVideo = {
  id: 'lfhv5H9VVJ8',
  title: 'How Gallbladder Surgery Is Done Step by Step | Complete Laparoscopic Procedure Explained',
  description:
    'Walk through the exact steps of laparoscopic gallbladder removal—from anaesthesia and port placement to suturing and discharge.',
  url: 'https://youtu.be/lfhv5H9VVJ8?si=0BdUwl0QIV22rA39'
}

const roboticCompareVideo = {
  id: 'FZHmnGH0Frw',
  title: 'Robotic vs Laparoscopic Gallbladder Stone Surgery — Which Is Better for Fast, Safe Recovery?',
  description:
    'Dr. Kapil compares robotic precision with advanced laparoscopy, explaining how he selects the safest option for each patient.',
  url: 'https://youtu.be/FZHmnGH0Frw?si=xcEwZ5l10eJayEew'
}

export default function GallbladderCompleteGuidePage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f8fbff] to-white">
      <section className="pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-base uppercase tracking-[0.5em] font-bold  text-[#0891b2]">Gallbladder Awareness Hub</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Gallbladder – A Complete Guide by Dr. Kapil Agrawal
            </h1>
            <p className="text-lg text-gray-600">
              Educate yourself before you decide. Use these interactive tools to understand symptoms, reports, diet plans,
              and next steps for gallbladder care.
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
                  Do You Have Gallbladder Stones? Take This 30-Second Self-Check
                </h2>
                <p className="text-gray-600">
                  Tick all the symptoms that apply to you. If two or more are true, it&apos;s time to speak with our gallbladder
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
                    Dr. Kapil Agrawal&apos;s gallbladder team will study your responses and our team will reach out to you soon.
                  </p>
                </div>
                <Link
                  href="https://wa.me/919999456455?text=I%20would%20like%20a%20gallbladder%20symptom%20review"
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
              Confused About Your Gallbladder Ultrasound Report? We’ll Explain It Clearly.
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
                Every term in your ultrasound can change the treatment plan. Here’s what we interpret and explain in simple language.
              </p>
              <ul className="space-y-3 text-sm">
                {['Sludge vs. thick bile', 'Wall thickening = chronic inflammation', 'Calculi size & number', 'Impacted stones needing urgent removal', 'CBD dilation signalling duct blockage', 'Polyps & when they need removal', 'Multiple stones & repeated pain', 'Small polyps that still need monitoring', 'When stones become risky', 'When surgery cannot wait'].map(
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
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Do You Need Gallbladder Surgery? Answer These 5 Questions</h2>
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
                  If you answered “Yes” to two or more questions, surgery prevents repeated attacks and complications. If all answers are “No”, continue a strict diet and repeat ultrasound in 6 months.
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
                href="https://wa.me/919999456455?text=I%20want%20an%20opinion%20on%20gallbladder%20surgery"
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
              <h2 className="text-2xl sm:text-3xl font-bold">Have A Question About Gallbladder Problems?</h2>
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
              Real experiences from patients who overcame gallbladder problems with personalised care and advanced laparoscopic surgery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {successStories.map((story) => (
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
                    loading="lazy"
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
                  <li>• Understand metabolic reasons behind stone formation</li>
                  <li>• Spot critical symptoms that need urgent evaluation</li>
                  <li>• Compare medical, endoscopic, and surgical treatment</li>
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
                  <li>• Step-by-step overview of laparoscopic gallbladder removal</li>
                  <li>• Stone and gallbladder removal through keyhole incisions</li>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Additional Reading on Gallbladder Care</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dive deeper into recovery, surgery options, and financial planning with curated guides from our blog.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredBlogs.map((blog) => (
              <Link
                key={blog.href}
                href={blog.href}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex-1 p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0891b2]">{blog.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{blog.description}</p>
                </div>
                <div className="px-6 py-3 border-t border-gray-100 text-sm font-semibold text-[#0891b2] group-hover:text-[#067a94]">
                  Read article →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Diet Chart */}
      <section className="pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Do You Have Gallstones? — What to Eat & Avoid</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A gentle, low-fat diet keeps attacks under control until surgery. Follow these doctor-approved guidelines.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <DietCard title="Foods to Avoid" accent="from-[#fee2e2] to-white" iconColor="text-rose-500" items={avoidFoods} />
            <DietCard title="Foods to Eat" accent="from-[#ecfeff] to-white" iconColor="text-emerald-500" items={eatFoods} />
          </div>

          <WhatsAppOptInCard />
        </div>
      </section>
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

