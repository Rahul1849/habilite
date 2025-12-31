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
  medicalConditionSchema,
  medicalProcedureSchema,
  getItemListSchema,
  getFAQSchema,
} from './schemas'

export const metadata: Metadata = {
  title: 'Piles – A Complete Guide | Dr. Kapil Agrawal | Habilite Clinics',
  description:
    'Doctor-approved piles care hub: symptom self-check, report upload, home-care tips, and when to choose laser or stapler surgery. Curated by Dr. Kapil Agrawal.',
  alternates: {
    canonical: 'https://www.habiliteclinics.com/resources/piles-complete-guide',
  },
}

type ChecklistItem = {
  label: string
}

const symptomChecklist: ChecklistItem[] = [
  { label: 'Bright red bleeding during or after bowel movements?' },
  { label: 'Anal pain, burning, or mucous discharge?' },
  { label: 'Lump prolapsing out that you push back in?' },
  { label: 'Chronic constipation or long toilet time?' },
  { label: 'Itching, staining, or foul odour despite hygiene?' },
  { label: 'Family history of piles or previous episodes?' },
  { label: 'Tried creams/medicine for >4 weeks without relief?' },
]

const avoidFoods = ['Deep-fried snacks', 'Refined flour pastries', 'Processed meat', 'Spicy pickles', 'Alcohol & aerated drinks']
const eatFoods = ['Warm water + lemon', 'Psyllium husk with water', 'Steamed veggies & salads', 'Dates/prunes', 'Oats & millet rotis', 'Probiotic curd']

const surgeryQuestions = [
  'Do symptoms persist despite medicines and high-fibre diet?',
  'Do you have prolapse (lump coming out) or thrombosis?',
  'Is bleeding heavy enough to cause anaemia or dizziness?',
  'Do you need frequent hospital visits for painful flare-ups?',
  'Has your doctor advised laser or stapler surgery earlier?',
]

const featuredBlogSlugs = [
  'piles-treatment-understanding-hemorrhoids-modern-options',
  'piles-treatment-without-surgery-is-it-possible',
  'piles-during-pregnancy-causes-symptoms-safe-treatments',
]

const featuredBlogs = featuredBlogSlugs
  .map((slug) => {
    const blogPost = blogPosts.find((post) => post.slug === slug)
    return {
      title: blogPost?.title || '',
      description: blogPost?.excerpt || '',
      href: `/post/${slug}`,
      image: blogPost?.image || '/images/piles-surgeon-delhi-india.webp',
    }
  })
  .filter((blog) => blog.title)

const successStories = [
  {
    id: 'L7wAKZUn3s0',
    title: 'Laser piles surgery with zero recurrence',
    description: 'Learn how laser hemorrhoidoplasty provided quick relief with minimal downtime.',
    url: 'https://youtu.be/L7wAKZUn3s0?si=sNDp47kitoZZ6och',
  },
  {
    id: 'MrHf48vyeCA',
    title: 'Stapler surgery for Grade III piles',
    description: 'Patient explains painless recovery, day-care admission, and diet transition.',
    url: 'https://youtu.be/MrHf48vyeCA?si=mrf5zGUp9etG5YqP',
  },
]

const educationVideo = {
  id: 'jvc97AGolT8',
  title: 'Piles & Anal Disorders: Causes, Grades, Treatment Roadmap',
  description: 'Dr. Kapil decodes hemorrhoid grades, office procedures, and when laser or stapler surgery is needed.',
  url: 'https://youtu.be/jvc97AGolT8?si=vh7nKSn2RL_V463V',
}

const procedureVideo = {
  id: 'FY8DIc9efmI',
  title: 'Laser Hemorrhoidoplasty Walkthrough',
  description: 'Get a behind-the-scenes view of laser piles surgery, safety checks, and healing timeline.',
  url: 'https://youtu.be/FY8DIc9efmI?si=8tYFoBE7g-1nvdQ-',
}

const techVideo = {
  id: '-izldvPcmpk',
  title: 'Stapler vs Laser vs DGHAL – Choosing the Right Technique',
  description: 'Understand pros & cons of each method and who is best suited for them.',
  url: 'https://youtu.be/-izldvPcmpk?si=n6el4JQ4CjwJXVay',
}

const peopleAlsoAskFaqs = [
  { question: 'Do piles always need surgery?', answer: 'No. Grade I–II often respond to medicines, fibre, and office procedures. Grade III–IV usually need laser or stapler surgery.' },
  { question: 'Can piles come back after laser surgery?', answer: 'Recurrence is <5% when lifestyle advice is followed. We emphasise fibre, hydration, and proper toilet habits.' },
  { question: 'Is piles surgery safe during pregnancy?', answer: 'During pregnancy we focus on conservative management. Surgery is performed only if complications arise, otherwise postpartum.' },
]

const faqSchema = getFAQSchema(peopleAlsoAskFaqs)
const dietAvoidSchema = getItemListSchema('Foods to Avoid with Piles', 'Items that worsen constipation or bleeding', avoidFoods)
const dietEatSchema = getItemListSchema('Foods to Eat with Piles', 'Fibre-rich, soothing foods for healing', eatFoods)

export default function PilesCompleteGuidePage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f8fbff] to-white">
      <section className="pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-base uppercase tracking-[0.5em] font-bold  text-[#0891b2]">Piles Awareness Hub</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Best Piles Treatment in Delhi – A Complete Guide</h1>
            <p className="text-lg text-gray-600">
              From self-check tips to laser/stapler comparisons, use this resource to remove fear and act decisively on piles treatment.
            </p>
          </header>
        </div>
      </section>




      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-xl border border-[#0891b2]/20 p-6 sm:p-8 lg:p-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Do You Need Specialist Piles Care? Take This 30-Second Check</h2>
                <p className="text-gray-600">Two or more &ldquo;yes&rdquo; answers mean it’s time to talk to a colorectal expert.</p>
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
                  <p className="text-base uppercase tracking-[0.4em] font-bold text-white/90">Need fast relief?</p>
                  <h3 className="text-2xl font-semibold leading-snug">
                    👉 Share your symptoms to get same-day piles management advice.
                  </h3>
                  <p className="text-white/85 text-sm max-w-md mx-auto">
                    We prioritise privacy and provide personalised guidance on medicines, laser, or stapler options.
                  </p>
                </div>
                <Link
                  href="https://wa.me/919999456455?text=I%20need%20piles%20treatment%20guidance"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#0f172a] font-semibold px-5 py-3 shadow-lg hover:shadow-xl transition"
                >
                  <PhoneCall size={20} />
                  Message on WhatsApp
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Upload Reports or Images for Doctor Review</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Share colonoscopy, ultrasound, or even photos (if comfortable) so we can advise laser vs stapler vs medical therapy confidently.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr,1fr]">
            <UploadReportCard />

            <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6 sm:p-10 shadow-2xl">
              <h3 className="text-xl font-semibold mb-4">What we analyse</h3>
              <p className="text-white/80 mb-6">
                Each report helps us grade piles precisely and suggest the safest, quickest treatment.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  'Grade and location of hemorrhoids',
                  'Presence of fissure, fistula, or skin tag',
                  'Pregnancy-related or post-delivery piles',
                  'Anaemia risk from repeated bleeding',
                  'Impact on lifestyle, travel, or office work',
                  'Suitability for local anaesthesia vs day-care surgery',
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
                <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">When to choose advanced treatment</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Do You Need Laser / Stapler Surgery?</h2>
                <p className="text-gray-600">Use this quick checklist to evaluate if office procedures are sufficient or if surgery is safer.</p>
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
                  Two or more &ldquo;yes&rdquo; responses indicate you’re likely a candidate for laser/stapler surgery. We still evaluate medically to confirm.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 space-y-5 flex flex-col justify-center items-center text-center">
              <div className="space-y-3 max-w-md">
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">Need confirmation?</p>
                <h3 className="text-2xl font-semibold leading-snug">👉 Share your reports. We’ll suggest the safest route.</h3>
                <p className="text-sm text-white/80">
                  Our team reviews history, meds, and exams before recommending laser, DGHAL, stapler, or office procedures.
                </p>
              </div>
              <Link
                href="https://wa.me/919999456455?text=I%20need%20piles%20surgery%20opinion"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-lg hover:shadow-xl transition"
              >
                <PhoneCall size={20} />
                Share Details on WhatsApp
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
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#0e7490] to-[#06b6d4] text-white shadow-2xl p-6 sm:p-10">
            <div className="space-y-3 text-center">
              <p className="text-base uppercase tracking-[0.6em] font-bold text-white/100">Ask the Surgeon</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Unsure if it’s piles, fissure, or fistula?</h2>
              <p className="text-white/90 text-base">Describe your symptoms and we’ll respond with doctor-reviewed guidance.</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Patients Who Trusted Our Piles Program</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real experiences from people who chose laser, stapler, or DGHAL surgery.</p>
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
          <p className="text-center text-xs text-gray-500">Videos open in YouTube.</p>
        </div>
      </section>

      {[educationVideo, procedureVideo, techVideo].map((video, idx) => (
        <section className="pb-12 sm:pb-16" key={video.id}>
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white border border-gray-100 shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[250px] bg-gray-100">
                  <Link href={video.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
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
                  <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">
                    {idx === 0 ? 'Expert video' : idx === 1 ? 'Procedure video' : 'Technology insights'}
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900">{video.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {idx === 0 && (
                      <>
                        <li>• Understand symptoms, grades, and prevention</li>
                        <li>• Learn home remedies vs clinical treatments</li>
                        <li>• Know when to escalate to surgery</li>
                      </>
                    )}
                    {idx === 1 && (
                      <>
                        <li>• Step-by-step laser piles surgery flow</li>
                        <li>• Recovery milestones and diet guidelines</li>
                        <li>• Pain control and post-op hygiene tips</li>
                      </>
                    )}
                    {idx === 2 && (
                      <>
                        <li>• Compare stapler, laser, and DGHAL outcomes</li>
                        <li>• Cost, downtime, and anaesthesia needs</li>
                        <li>• How we personalise technique per patient</li>
                      </>
                    )}
                  </ul>
                  <Link
                    href={video.url}
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
      ))}

      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-center space-y-2">
            <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">Featured blogs</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Piles Education & Home-Care Tips</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn about modern treatments, pregnancy-safe care, and non-surgical remedies.</p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {featuredBlogs.map((blog) => {
              const blogPost = blogPosts.find((post) => post.slug === blog.href.split('/').pop())
              if (!blogPost) return null
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
                      {blog.title.toLowerCase().includes('pregnancy')
                        ? `Discover ${blog.title.toLowerCase()}`
                        : blog.title.toLowerCase().includes('treatment')
                        ? `Learn about ${blog.title.toLowerCase()}`
                        : `Read ${blog.title.toLowerCase()}`}
                      {' '}
                      →
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              'grade-4-piles-symptoms-treatments',
              'how-to-stop-piles-bleeding',
              'how-to-prevent-piles-at-home',
              'best-way-to-cure-piles-in-3-days',
              'symptoms-of-piles-in-women',
              'foods-to-eat-and-avoid-in-piles',
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Piles Diet & Lifestyle Cheat Sheet</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Use the fibre-first mantra: hydrate, soften stool, and avoid triggers to calm flare-ups and enhance healing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <DietCard title="Avoid or Limit" accent="from-[#fee2e2] to-white" iconColor="text-rose-500" items={avoidFoods} />
            <DietCard title="Load Your Plate With" accent="from-[#ecfeff] to-white" iconColor="text-emerald-500" items={eatFoods} />
          </div>

          <WhatsAppOptInCard />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }} suppressHydrationWarning />
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


