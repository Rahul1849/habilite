import Link from 'next/link'
import type { Metadata } from 'next'
import { CheckCircle2, PhoneCall, Leaf } from 'lucide-react'
import UploadReportCard from './UploadReportCard'
import WhatsAppOptInCard from './WhatsAppOptInCard'

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

const ultrasoundTerms: InsightCard[] = [
  { title: 'Sludge', description: 'Thickened bile that can irritate the gallbladder and trigger inflammation.' },
  { title: 'Wall thickening', description: 'Indicates chronic inflammation and higher risk of complications.' },
  { title: 'Calculi', description: 'Medical term for stones – can be single or multiple in number.' },
  { title: 'Impacted stone', description: 'Stone stuck in the neck or duct, often requiring urgent surgery.' },
  { title: 'CBD dilation', description: 'Widened common bile duct, usually due to a lodged stone.' },
  { title: 'Polyp', description: 'Small growth on the wall. Size and growth rate determine treatment.' },
  { title: 'Multiple stones', description: 'Several stones increase chances of recurring pain and infection.' },
  { title: '3–5 mm polyp', description: 'Typically monitored; rapid growth or symptoms need intervention.' },
  { title: 'When stones are dangerous', description: 'Persistent pain, fever, jaundice, or duct blockage.' },
  { title: 'When surgery is urgent', description: 'Impacted stones, infection, or repeated painful attacks.' },
]

const avoidFoods = ['Oily', 'Fried', 'Butter / cream', 'Red meat', 'Heavy dairy']
const eatFoods = ['Fruits', 'Vegetables', 'Khichdi', 'Dal', 'Low-fat milk', 'Lemon water']

export default function GallbladderCompleteGuidePage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f8fbff] to-white">
      <section className="pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.5em] text-[#0891b2]">Gallbladder Awareness Hub</p>
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
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Need Immediate Support?</p>
                  <h3 className="text-2xl font-semibold leading-snug">
                    👉 Share your symptoms for a personalised review.
                  </h3>
                  <p className="text-white/85 text-sm max-w-md mx-auto">
                    Dr. Kapil Agrawal&apos;s gallbladder team will study your responses and call you within 12 working hours with next steps.
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
                <p className="text-xs text-white/75">
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

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ultrasoundTerms.map((term) => (
              <div
                key={term.title}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm p-4 flex flex-col gap-2 hover:shadow-lg transition"
              >
                <h4 className="text-base font-semibold text-gray-900">{term.title}</h4>
                <p className="text-sm text-gray-600">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diet Chart */}
      <section className="pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Gallbladder Diet Chart — What to Eat & Avoid</h2>
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

