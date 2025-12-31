import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { CheckCircle2, PhoneCall, Leaf } from 'lucide-react'
import UploadReportCard from './UploadReportCard'
import WhatsAppOptInCard from './WhatsAppOptInCard'
import PeopleAlsoAsk from './PeopleAlsoAsk'
import AskSurgeonForm from './AskSurgeonForm'
import BestTreatmentForm from './BestTreatmentForm'
import { blogPosts } from '@/data/blog'
import {
  webPageSchema,
  medicalConditionSchema,
  medicalProcedureSchema,
  getItemListSchema,
  getFAQSchema,
} from './schemas'

export const metadata: Metadata = {
  title: 'Obesity – A Complete Guide | Dr. Kapil Agrawal | Habilite Clinics',
  description:
    'Obesity awareness hub by Dr. Kapil Agrawal. Check your metabolic risk, upload reports for review, learn about GLP-1 injectables, bariatric surgery, and personalised weight-loss roadmaps.',
  keywords: [
    'obesity guide',
    'obesity treatment delhi',
    'bariatric surgery guide',
    'weight loss guide',
    'obesity management',
    'dr kapil agrawal obesity',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/resources/obesity-complete-guide',
  },
}

type ChecklistItem = {
  label: string
}

const symptomChecklist: ChecklistItem[] = [
  { label: 'BMI above 27 or waist > 40" (men) / 35" (women)?' },
  { label: 'Diagnosed with PCOS, thyroid, or hormonal imbalance?' },
  { label: 'Snoring, sleep apnea, or constant daytime fatigue?' },
  { label: 'Cravings, stress eating, or emotional hunger?' },
  { label: 'Pre-diabetes, hypertension, or fatty liver on labs?' },
  { label: 'Joint pain, back pain, or limited mobility due to weight?' },
  { label: 'Tried diets for 6+ months without sustained results?' },
]

const avoidFoods = ['Ultra-processed snacks', 'Sugary beverages', 'Refined carbs', 'Trans-fat desserts', 'Late-night heavy meals']
const eatFoods = ['Lean protein bowls', 'Fermented foods', 'Rainbow vegetables', 'Whole grains & millets', 'Omega-3 rich fats', '2-3 L water']

const surgeryQuestions = [
  'Is your BMI ≥40 or ≥35 with diabetes, sleep apnea, or fatty liver?',
  'Have medical weight-loss programs failed after 6+ months?',
  'Do you require high insulin doses or multiple diabetes drugs?',
  'Has a doctor advised bariatric/ metabolic surgery previously?',
  'Is your quality of life or mobility severely limited?',
]

const weightLossSolutions = [
  {
    title: 'Bariatric Surgery',
    description: 'Gold-standard for severe obesity with diabetes or sleep apnea when lifestyle care alone is not enough.',
  },
  {
    title: 'Gastric Balloon for Weight Loss',
    description: 'Non-surgical 6-12 month option that reduces appetite and jumpstarts disciplined eating habits.',
  },
  {
    title: 'Medical Weight Loss Program',
    description: 'Physician-led nutrition, behaviour therapy, and GLP-1/other medications tailored to your lab profile.',
  },
  {
    title: 'Weight Loss Injections',
    description: 'GLP-1 and metabolic injectables used under supervision to control hunger and insulin resistance.',
  },
]

const featuredBlogSlugs = [
  'bariatric-surgery-complete-guide-weight-loss',
  'non-surgical-weight-loss-programs-comprehensive-approach',
  'advanced-bariatric-surgery-techniques-what-you-need-to-know',
]

const featuredBlogs = featuredBlogSlugs
  .map((slug) => {
    const blogPost = blogPosts.find((post) => post.slug === slug)
    return {
      title: blogPost?.title || '',
      description: blogPost?.excerpt || '',
      href: `/post/${slug}`,
      image: blogPost?.image || '/images/medical-weight-loss-team.webp',
    }
  })
  .filter((blog) => blog.title)

const successStories = [
  {
    id: '-Mx1uXfW1Hg',
    title: '35 kg loss after metabolic surgery',
    description: 'Corporate professional shares how structured coaching, sleeve gastrectomy, and accountability transformed her health.',
    url: 'https://youtu.be/-Mx1uXfW1Hg?si=h5GBXoIKIPNB9scD',
  },
  {
    id: '6TyERhrC7rQ',
    title: 'Reversing diabetes with bariatric care',
    description: 'Patient narrates life after gastric bypass, glucose normalisation, and return to daily workouts within weeks.',
    url: 'https://youtu.be/6TyERhrC7rQ?si=tNUtTBqN44GkPytm',
  },
  {
    id: 'vp-3_mAoip0',
    title: 'International patient experience',
    description: "A Middle East patient explains concierge travel, pre-op prep, and remote follow-up with Dr. Kapil's team.",
    url: 'https://youtu.be/vp-3_mAoip0?si=OO7ATDc5kjAVgl2h',
  },
  {
    id: 'QVc-vTgxto0',
    title: 'From diets to durable weight loss',
    description: 'Discover how biotech entrepreneur combined GLP-1 therapy, bariatric surgery, and lifestyle mentorship.',
    url: 'https://youtu.be/QVc-vTgxto0?si=NKBlXfCpw3ea7bqd',
  },
]

const metabolicVideo = {
  id: 'NBP2vClykfs',
  title: 'Metabolic Syndrome & Obesity: Causes, Risk Factors, and Treatment Pathways',
  description:
    'Dr. Kapil explains why obesity is a chronic disease, how hormones affect weight, and when to escalate to medical or surgical therapy.',
  url: 'https://youtu.be/NBP2vClykfs?si=WMdIMppYC8P6sPId',
}

const bariatricProcedureVideo = {
  id: 'lfhv5H9VVJ8',
  title: 'Sleeve Gastrectomy Explained Step-by-Step',
  description: 'Walk through pre-op prep, anaesthesia, staple line creation, leak tests, and recovery milestones.',
  url: 'https://youtu.be/lfhv5H9VVJ8?si=0BdUwl0QIV22rA39',
}

const technologyVideo = {
  id: 'FZHmnGH0Frw',
  title: 'Robotic vs Laparoscopic Bariatric Surgery – Precision, Recovery, and Costs',
  description: 'Compare approaches, who is eligible, and how advanced systems enhance safety for complex cases.',
  url: 'https://youtu.be/FZHmnGH0Frw?si=xcEwZ5l10eJayEew',
}

const peopleAlsoAskFaqs = [
  {
    question: 'What is the fastest yet safe way to lose weight?',
    answer:
      'Combine medical nutrition therapy, strength workouts, stress management, and if indicated, GLP-1 medication or bariatric surgery under specialist supervision.',
  },
  {
    question: 'Can obesity be reversed without surgery?',
    answer:
      'Mild to moderate obesity can often be reversed with structured plans, but severe obesity with comorbidities might require advanced therapies.',
  },
  {
    question: 'How soon after bariatric surgery do I see results?',
    answer:
      'Most patients lose 10–15% body weight within 3 months and 60–70% of excess weight by 12-18 months when they follow the program.',
  },
]

const faqSchema = getFAQSchema(peopleAlsoAskFaqs)
const dietAvoidSchema = getItemListSchema(
  'Foods to Avoid for Obesity',
  'High-calorie foods that worsen metabolic health',
  avoidFoods,
)
const dietEatSchema = getItemListSchema('Foods to Eat for Obesity', 'Nutrition guidelines for sustainable weight loss', eatFoods)

export default function ObesityCompleteGuidePage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f8fbff] to-white">
      <section className="pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-base uppercase tracking-[0.5em] font-bold  text-[#0891b2]">Obesity Awareness Hub</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Best Obesity & Weight Loss Treatment in Delhi – A Complete Guide 
            </h1>
            <p className="text-lg text-gray-600">
              Evaluate your metabolic risks, explore evidence-based weight loss therapies, and understand when injectables or bariatric surgery make sense.
            </p>
          </header>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-xl border border-[#0891b2]/20 p-6 sm:p-8 lg:p-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-stretch">
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Do You Need Medical Weight Loss Support? Try This 30-Second Self-Check
                </h2>
                <p className="text-gray-600">
                  Tick every statement that resonates. Two or more &ldquo;yes&rdquo; answers indicate it’s time to speak with our metabolic clinic.
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
                  <p className="text-base uppercase tracking-[0.4em] font-bold text-white/90">Need immediate guidance?</p>
                  <h3 className="text-2xl font-semibold leading-snug">
                    👉 Share your health journey for a personalised metabolic review.
                  </h3>
                  <p className="text-white/85 text-sm max-w-md mx-auto">
                    Our bariatric team analyses your BMI, labs, and prior attempts to create a realistic next-step plan.
                  </p>
                </div>
                <Link
                  href="https://wa.me/919999456455?text=I%20need%20an%20obesity%20care%20plan"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#0f172a] font-semibold px-5 py-3 shadow-lg hover:shadow-xl transition"
                >
                  <PhoneCall size={20} />
                  Share Details on WhatsApp
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

      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Upload Labs & Body Composition Reports</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our clinicians decode HbA1c, fasting insulin, lipid profile, sleep study scores, and DEXA scans to personalise your weight loss path.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr,1fr]">
            <UploadReportCard />

            <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6 sm:p-10 shadow-2xl">
              <h3 className="text-xl font-semibold mb-4">What we interpret for you</h3>
              <p className="text-white/80 mb-6">
                Every lab tells a story. Share your numbers so we can craft actionable, doctor-reviewed recommendations.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  'Visceral fat % and basal metabolic rate insights',
                  'Insulin resistance score & fasting glucose trends',
                  'Liver enzymes indicating fatty liver grade',
                  'Vitamin D, B12, iron status influencing energy',
                  'Hormonal panels (thyroid, cortisol, PCOS markers)',
                  'Sleep apnea severity & cardiometabolic risk',
                ].map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-emerald-300 mt-0.5" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-gray-100 shadow-xl p-6 sm:p-8 lg:p-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">Bariatric Readiness Checklist</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Is Bariatric Surgery the Right Step For You?</h2>
                <p className="text-gray-600">
                  Answer honestly. We follow global eligibility criteria plus individualised medical assessment before advising surgery.
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
                <p className="font-semibold text-[#0891b2] mb-1">Interpretation:</p>
                <p>
                  Two or more &ldquo;yes&rdquo; answers suggest you qualify for bariatric evaluation. A single yes still warrants metabolic therapy with close monitoring.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 space-y-5 flex flex-col justify-center items-center text-center">
              <div className="space-y-3 max-w-md">
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">Need a medical opinion?</p>
                <h3 className="text-2xl font-semibold leading-snug">👉 Share your labs & history for a surgical candidacy review.</h3>
                <p className="text-sm text-white/80">
                  We interpret medical reports, imaging, and prior attempts before suggesting injectable therapy or surgery.
                </p>
              </div>
              <Link
                href="https://wa.me/919999456455?text=I%20want%20an%20opinion%20on%20bariatric%20surgery"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-lg hover:shadow-xl transition"
              >
                <PhoneCall size={20} />
                Send Reports on WhatsApp
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

            
      
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-gray-100 shadow-xl p-6 sm:p-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">Best Weight Loss Solutions in India</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Personalised Pathways You Can Explore</h2>
              <p className="text-gray-600">
                Whether you need a surgical reset or medication-assisted care, our multidisciplinary team in Delhi helps you select the safest,
                most effective route after evaluating labs, BMI, and comorbidities.
              </p>
              <div className="space-y-4">
                {weightLossSolutions.map((solution) => (
                  <div key={solution.title} className="rounded-2xl border border-gray-100 bg-gradient-to-r from-[#ecfeff] to-white p-4 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">{solution.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <BestTreatmentForm />
          </div>
        </div>
      </section>

      
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#0e7490] to-[#06b6d4] text-white shadow-2xl p-6 sm:p-10">
            <div className="space-y-3 text-center">
              <p className="text-base uppercase tracking-[0.6em] font-bold text-white/100">Ask the surgeon</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Have a question about obesity treatment?</h2>
              <p className="text-white/90 text-base">
                Ask Dr. Kapil Agrawal directly. Share your health story, and our team will revert with personalised guidance.
              </p>
            </div>
            <AskSurgeonForm />
          </div>
        </div>
      </section>

      <PeopleAlsoAsk faqs={peopleAlsoAskFaqs} />

      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">Success stories</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Patients Who Trusted Our Obesity Program</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real transformations from medical weight loss, injectable therapy, and bariatric surgery with full-spectrum support.
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
                    loading={index === 0 ? 'eager' : 'lazy'}
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
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-center space-y-2">
            <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">Featured blogs</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Obesity, Bariatric & Lifestyle Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dive deeper into non-surgical weight loss, modern bariatric techniques, and long-term maintenance strategies from our blog.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              'what-is-bariatric-surgery',
              'bariatric-surgery-myths',
              'difference-between-traditional-dieting-and-bariatric-surgery',
              'how-to-lose-weight-fast-without-surgery',
              'what-is-the-role-of-exercise-after-bariatric-surgery',
              'which-is-the-best-bariatric-surgery',
              'what-are-the-benefits-of-gastric-sleeve-surgery-for-weight-loss',
              'how-to-prepare-for-bariatric-surgery',
              'how-to-boost-metabolism-a-prerequisite-for-weight-loss',
            ]
              .map((slug) => {
                const blogPost = blogPosts.find((post) => post.slug === slug)
                if (!blogPost) return null
                return (
                  <Link
                    key={slug}
                    href={`/post/${slug}`}
                    className="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-[#0891b2]/30 p-5"
                  >
                    <div className="flex-1 space-y-3">
                      <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#0891b2] transition-colors">
                        {blogPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{blogPost.excerpt}</p>
                      <div className="flex items-center text-sm font-semibold text-[#0891b2] group-hover:text-[#067a94] transition-colors pt-2">
                        Read more
                        <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </div>
                    </div>
                  </Link>
                )
              })
              .filter(Boolean)}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Struggling With Obesity? — What to Eat & Avoid</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Follow the traffic-light approach: remove inflammatory foods, add high-volume meals, and hydrate consistently.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <DietCard title="Foods to Reframe" accent="from-[#fee2e2] to-white" iconColor="text-rose-500" items={avoidFoods} />
            <DietCard title="Plate More of These" accent="from-[#ecfeff] to-white" iconColor="text-emerald-500" items={eatFoods} />
          </div>

          <WhatsAppOptInCard />
        </div>
      </section>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} suppressHydrationWarning />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
        suppressHydrationWarning
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dietAvoidSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dietEatSchema) }} suppressHydrationWarning />
    </div>
  )
}

function DietCard({ title, accent, iconColor, items }: { title: string; accent: string; iconColor: string; items: string[] }) {
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


