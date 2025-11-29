import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle2,
  Award,
  Users,
  ShieldCheck,
  TrendingUp,
  Activity,
  HeartPulse,
  Clock,
  User,
  Wallet,
} from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import DiabetesFAQ from './DiabetesFAQ'
import DiabetesTestimonials from './DiabetesTestimonials'
import { blogPosts } from '@/data/blog'
import RecoveryTimeline from '@/components/services/RecoveryTimeline'

export const metadata: Metadata = {
  title: 'Metabolic Surgery for Diabetes in Delhi - Dr. Kapil Agrawal | 85% Remission Rate',
  description:
    'Reverse type 2 diabetes with metabolic (bariatric) surgery by Dr. Kapil Agrawal in Delhi. 23+ years experience, 7000+ bariatric procedures, international techniques for obese and non-obese diabetics.',
  keywords: [
    'surgery for diabetes delhi',
    'diabetes surgery india',
    'metabolic surgery delhi',
    'type 2 diabetes remission surgery',
    'duodenal jejunal bypass delhi',
    'ileal transposition india',
    'best diabetes surgeon dr kapil agrawal',
  ],
  openGraph: {
    title: 'Metabolic Surgery for Diabetes in Delhi - Dr. Kapil Agrawal',
    description:
      'Blend of best technology, reduced-port techniques, and multi-disciplinary care for dramatic diabetes remission results at Habilite Clinics.',
    url: 'https://www.habiliteclinics.com/surgery-for-diabetes',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/diabetes-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Metabolic Surgery for Diabetes - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/surgery-for-diabetes',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What results can I expect from metabolic surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Metabolic surgery results in significant weight-loss and 80-85% remission of type 2 diabetes, with another 10-15% showing major improvement. Benefits often appear within weeks and can last lifelong if healthy weight is maintained.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who qualifies for diabetes surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ideal candidates are 18-65 years old, have BMI ≥30 kg/m2 (or ≥27.5 for Indians), have type 2 diabetes for 3-20 years, stable sugars in the last 3 months, and C-peptide levels >0.9 ng/ml.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to diabetes medicines after surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicines are tapered immediately or within weeks. Nearly one-third patients stop diabetes drugs right after surgery and 85% are off medication in six months, subject to physician guidance.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Metabolic (Diabetes) Surgery',
  description:
    'Comprehensive metabolic surgery program by Dr. Kapil Agrawal including sleeve gastrectomy, gastric bypass, mini gastric bypass, duodenal jejunal bypass, and ileal transposition for diabetes remission.',
  procedureType: 'Metabolic / Bariatric Surgery',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
  },
  followup: 'Regular metabolic monitoring, endocrinology reviews, nutritional counselling, and lifelong lifestyle support.',
}

const metabolicHighlights = [
  'Bariatric surgery now reverses type 2 diabetes even in normal or moderately overweight patients.',
  'Weight loss after surgery lowers the chance of developing diabetes by 60% in high-risk individuals.',
  'Up to 85% patients experience complete diabetes remission and remain medicine-free for years.',
  'Insulin/sugar-lowering drugs reduce immediately or within two weeks after surgery.',
  'Results last lifelong if healthy body weight is sustained.',
  'Early surgery (<5 years of diabetes) yields the highest cure rates.',
]

const candidateCriteria = [
  'Age 18–65 years with type 2 diabetes.',
  'Stable diabetes control for the last 3 months.',
  'Diabetes duration between 3 and 20 years.',
  'Post-prandial C-peptide > 0.9 ng/ml (adequate beta cell reserve).',
  'BMI ≥ 30 kg/m² (or ≥27.5 for Asian Indians).',
  'Medically fit to undergo anesthesia and committed to follow-ups.',
]

const obeseSurgeries = ['Sleeve Gastrectomy', 'Roux-en-Y Gastric Bypass', 'Mini Gastric Bypass']
const nonObeseSurgeries = ['Laparoscopic Duodenal Jejunal Bypass', 'Sleeve Gastrectomy with Duodenal Transposition']

const resultsStats = [
  '50–80% excess weight loss within 18–24 months',
  '30% stop diabetes medicines immediately after surgery',
  '85% attain diabetes cure or major control within 6 months',
  'Marked reduction in hypertension & cholesterol, lowering cardiac risk',
]

const qualityAssurances = [
  { title: 'Focus on Quality', description: 'USFDA-approved technology, standardized protocols, and NABH-grade hospitals.' },
  { title: 'Approachable Staff', description: 'Dedicated bariatric coordinators, diabetologists, and nutrition helpline.' },
  { title: 'Experience Comfort', description: 'Reduced-port techniques, enhanced recovery pathways, and boutique suites.' },
  { title: 'Health Benefits', description: 'Post-surgery classes for diet, activity, and relapse prevention.' },
]

const pricingSupport = [
  'Choice of premium or budget-friendly NABH hospitals',
  'Zero-cost EMI and tie-ups with leading lenders',
  'Discounted pre-op investigations',
  'Free post-surgical consultations & support groups',
]

export default function SurgeryForDiabetesPage() {
  const diabetesBlogs = blogPosts
    .filter(
      (post) =>
        post.category.toLowerCase().includes('diabetes') ||
        post.tags.some((tag) => tag.toLowerCase().includes('diabetes') || tag.toLowerCase().includes('metabolic'))
    )
    .slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} suppressHydrationWarning />

      <div className="pt-20 pb-16">
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-xl">
            <Image
              src="/images/diabetes-surgeon-delhi-india.webp"
              alt="Metabolic surgery for diabetes in Delhi - Dr. Kapil Agrawal"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              priority
              quality={85}
            />
          </div>
        </div>

        <div className="container-custom mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">surgery-for-diabetes</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Surgery for Diabetes in <span className="text-[#0891b2]">Delhi</span>
            </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ecfeff] border border-[#06b6d4]/30 text-sm font-semibold text-[#0f766e] mb-4">
            <Award size={16} className="text-[#06b6d4]" />
            <span>Delhi&apos;s Leading Metabolic & Diabetes Surgery Team</span>
          </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Blend of best technology & infrastructure • Internationally trained metabolic surgeons • Complete range of procedures for obese and non-obese diabetics • Honest pricing with EMI support
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Expertise' },
                { icon: Users, text: '7000+ Bariatric Procedures' },
                { icon: ShieldCheck, text: 'Reduced-Port Surgeries' },
                { icon: TrendingUp, text: '85% Diabetes Remission' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#0891b2]/10 px-4 py-2 rounded-full">
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
              <ConsultationForm serviceName="Surgery for Diabetes" serviceSlug="surgery-for-diabetes" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Metabolic Surgery for Diabetes – Why it Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {metabolicHighlights.map((point) => (
                  <div key={point} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-5 border border-[#0891b2]/20 flex items-start gap-3">
                    <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Link Between Weight and Diabetes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Obesity is the single most important driver for type 2 diabetes. Being overweight doubles your risk, while being severely obese increases it tenfold. Nearly 80% of Indian diabetic patients are obese or centrally obese. Metabolic surgery addresses the hormonal and metabolic defects that link obesity with diabetes, making remission sustainable.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Diabetes & Obesity Snapshot</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <Activity className="text-[#0891b2] mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                      <span>Overweight patients have 2x risk; severe obesity raises risk 10x.</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="text-[#0891b2] mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                      <span>80% of diabetics present with central/abdominal fat accumulation.</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="text-[#0891b2] mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                      <span>Metabolic surgery cuts the chance of future diabetes by 60% in high-risk patients.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Ideal Candidates for Diabetes Surgery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We follow strict eligibility criteria to deliver safe outcomes and predictable remission.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {candidateCriteria.map((criterion) => (
                  <div key={criterion} className="flex items-start bg-white border border-gray-200 rounded-lg p-4">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-sm">{criterion}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Procedures Offered by Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Obese & Diabetic Patients</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {obeseSurgeries.map((surgery) => (
                      <li key={surgery} className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>{surgery}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100/60 rounded-xl p-6 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Non-Obese & Diabetic Patients</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {nonObeseSurgeries.map((surgery) => (
                      <li key={surgery} className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>{surgery}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Results Following Metabolic Surgery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resultsStats.map((stat) => (
                  <div key={stat} className="bg-white border border-gray-200 rounded-lg p-5 flex items-start gap-3">
                    <HeartPulse className="text-rose-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-sm">{stat}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Dr. Kapil Agrawal for Diabetes Surgery?</h2>
              <p className="text-gray-700 mb-6">
                International exposure, academic credentials, and affiliations with premier hospitals allow us to offer world-class metabolic surgery in Delhi.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qualityAssurances.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Worried About Pricing?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pricingSupport.map((item) => (
                  <div key={item} className="flex items-start bg-white border border-gray-200 rounded-lg p-4">
                    <Wallet className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Dr. Kapil Agrawal & His Team</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Dr. Kapil Agrawal is one of the most trusted bariatric and metabolic surgeons in Delhi, associated with premier hospitals that offer world-class infrastructure and safety protocols.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                He performs a complete array of bariatric & metabolic procedures—from sleeve and Roux-en-Y bypass to revision surgeries—and supports patients with psychological screening, medical evaluations, and nutrition counselling.
              </p>
              <p className="text-gray-700 leading-relaxed">
                His personalized care pathway ensures you receive transparent information, individual attention, and a stress-free journey before, during, and after surgery.
              </p>
            </section>
          </div>

          <div className="max-w-5xl mx-auto">
            <CostCalculator serviceName="Surgery for Diabetes" />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <DiabetesTestimonials />
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recovery Timeline</p>
                    <p className="text-gray-700 text-sm">Resume desk work in 1–2 weeks and active lifestyle in 3–4 weeks. Most patients are discharged within 48 hours.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Metabolic Follow-up</p>
                    <p className="text-gray-700 text-sm">Endocrinology reviews, nutrition visits, and lab checks ensure long-term remission with minimal chance of relapse.</p>
                  </div>
                </div>
              </div>
            </section>
            <RecoveryTimeline />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Surgery for Diabetes" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <DiabetesFAQ />
            {diabetesBlogs.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <TrendingUp className="text-[#0891b2] mr-3" size={32} />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Diabetes & Metabolic Health Blogs</h2>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">Insights on remission, nutrition, and patient journeys</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {diabetesBlogs.map((post) => (
                    <Link
                      key={post.id}
                      href={`/post/${post.slug}`}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                          quality={80}
                        />
                      </div>
                      <div className="p-5">
                        <div className="text-xs text-[#0891b2] font-semibold mb-2">{post.category}</div>
                        <h3 className="text-base font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#0891b2] transition-colors">{post.title}</h3>
                        <p className="text-gray-600 mb-3 line-clamp-2 text-sm leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{new Date(post.publishedDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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