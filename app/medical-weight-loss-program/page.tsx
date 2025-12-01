import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ClipboardList, PhoneCall, Award, Users, ShieldCheck, TrendingUp, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import MedicalWeightLossFAQ from './MedicalWeightLossFAQ'
import MedicalWeightLossTestimonials from './MedicalWeightLossTestimonials'
import { blogPosts } from '@/data/blog'
import StructuredData from '@/components/seo/StructuredData'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema } from '@/lib/seo/schemaBuilders'
import RecoveryTimeline from '@/components/services/RecoveryTimeline'

export const metadata: Metadata = {
  title: 'Medical Weight Loss Program in Delhi - Non-Surgical Weight Loss | Habilite Clinics',
  description:
    'Join the medically supervised weight loss program by Dr. Kapil Agrawal in Delhi. Multi-disciplinary team of obesity physicians, dietitians, exercise trainers, and psychologists offering comprehensive non-surgical weight loss solutions.',
  keywords: [
    'medical weight loss delhi',
    'non surgical weight loss delhi',
    'medical weight management program',
    'weight loss clinic delhi',
    'nutritionist delhi',
    'non surgical weight loss program india',
    'weight loss doctor delhi',
    'medical weight loss program',
  ],
  openGraph: {
    title: 'Medical Weight Loss Program in Delhi - Non-Surgical Weight Loss | Habilite Clinics',
    description:
      'Comprehensive, multi-disciplinary, non-surgical weight loss program by Dr. Kapil Agrawal in Delhi. Personalized care, medical supervision, and long-term maintenance.',
    url: 'https://www.habiliteclinics.com/medical-weight-loss-program',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/non-surgical-weightloss-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Medical Weight Loss Program in Delhi - Habilite Clinics',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/medical-weight-loss-program',
  },
}

const programFaqs = [
  {
    question: 'How effective is your medical weight loss program?',
    answer:
      'Most patients lose 1–2 kg per week initially with an average of 12–15 kg over 5–6 months when they follow the customised nutrition, exercise, and behaviour plan with regular monitoring.',
  },
  {
    question: 'Do you prescribe medicines or appetite suppressants?',
    answer:
      'Medications are used judiciously by the bariatric physician only when clinically indicated and always alongside nutrition, behaviour, and exercise support.',
  },
  {
    question: 'Is exercise compulsory in the program?',
    answer:
      'Yes. Exercise physiologists design personalised routines that preserve muscle mass, boost metabolism, and improve long-term weight maintenance.',
  },
]

const faqSchema = getFAQSchema({
  title: 'Medical Weight Loss Program FAQs',
  description: 'Answers on effectiveness, medication use, and exercise protocols for our supervised weight loss program.',
  faqs: programFaqs,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'Medically Supervised Weight Loss Program',
  description:
    'Non-surgical weight loss program led by Dr. Kapil Agrawal with bariatric physicians, nutritionists, physiologists, and psychologists delivering customised plans.',
  url: '/medical-weight-loss-program',
  procedureType: 'Medical Weight Loss Therapy',
  bodyLocation: 'Metabolic / Whole Body',
  medicalSpecialty: ['BariatricSurgery', 'Nutrition', 'Endocrinology'],
  followup: 'Weekly check-ins, monthly medical reviews, and maintenance plans extending up to one year.',
  preparation: 'Comprehensive metabolic panel, body composition, dietary recall, and psychological screening.',
  howPerformed:
    'Combines customised diet, monitored exercise, behaviour therapy, and optional medication under a multidisciplinary team with digital accountability.',
  areaServed: ['Delhi', 'Gurgaon', 'Noida', 'India'],
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'Medical Weight Loss Program', url: '/medical-weight-loss-program' },
])

const availableServices = [
  'Medical assessment and supervision of weight loss',
  'Measurements of metabolism and body composition',
  'Individualized exercise programs & personal training',
  'Support group meetings and individual psychotherapy',
  'Nutrition plans with meal replacements & low-calorie recipes',
  'Long-term weight maintenance and relapse prevention',
  'Programs tailored for medical conditions & pediatric cases',
  'Prescribed medications for weight control when required',
]

const assessmentData = [
  {
    title: 'Anthropometrical Data',
    description: 'Height, weight, BMI, and bio-electrical impedance analysis (BIA) for body composition.',
  },
  {
    title: 'Biochemical Data',
    description: 'Comprehensive blood investigations to assess metabolic health and nutritional deficiencies.',
  },
  {
    title: 'Clinical Data',
    description: 'Physical examination, blood pressure monitoring, and baseline cardiac screening (EKG).',
  },
  {
    title: 'Dietary Data',
    description: 'Detailed assessment of weight history, eating patterns, food preferences, and triggers.',
  },
]

const getStartedSteps = [
  'Call +91 99100 24564 or +91 99994 56455 to schedule a consultation with our nutritionist (Mon–Sat, 9 AM to 9 PM).',
  'Post consultation, assessments are booked with each member of the multi-disciplinary team for individualized planning.',
]

export default function MedicalWeightLossProgramPage() {
  const weightLossBlogs = blogPosts
    .filter(
      (post) =>
        // Exclude "Bariatric Surgery: A Complete Guide to Weight Loss Surgery"
        post.slug !== 'bariatric-surgery-complete-guide-weight-loss' &&
        (post.category.toLowerCase().includes('weight') ||
        post.tags.some((tag) => tag.toLowerCase().includes('weight') || tag.toLowerCase().includes('bariatric')))
    )
    .slice(0, 3)

  return (
    <>
      <StructuredData data={procedureSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      <div className="pt-20 pb-16">
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-xl">
            <Image
              src="/images/non-surgical-weightloss-surgeon-delhi-india.webp"
              alt="Medical Weight Loss Program in Delhi - Habilite Clinics"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">medical-weight-loss-program</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Medical Weight Loss Program in <span className="text-[#0891b2]">Delhi</span>
            </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ecfeff] border border-[#06b6d4]/30 text-sm font-semibold text-[#0f766e] mb-4">
            <Award size={16} className="text-[#06b6d4]" />
            <span>Delhi&apos;s Leading Non-Surgical Weight Loss Team</span>
          </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Blend of Best Technology & Infrastructure | Highly Experienced, Internationally Trained Team | Multi-disciplinary care with
              diet, exercise & behavior modification | Honest Pricing & EMI Options Available
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Expertise' },
                { icon: Users, text: 'Dedicated Multi-disciplinary Team' },
                { icon: ShieldCheck, text: 'Medically Supervised Plans' },
                { icon: TrendingUp, text: '12-15 Kg Average Loss*' },
              ].map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#0891b2]/10 px-4 py-2 rounded-full">
                  <highlight.icon className="text-[#0891b2] w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">{highlight.text}</span>
                </div>
              ))}
            </div>
            <CallUsButton />
          </div>
        </div>

        <div className="container-custom space-y-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <ConsultationForm serviceName="Medical Weight Loss Program" serviceSlug="medical-weight-loss-program" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What Makes Habilite Weight Loss Program Different?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand that obesity is a complex problem and each individual gains weight for different reasons. Our weight management
                program starts with careful, individualized assessments performed by clinicians of our multi-disciplinary team.
              </p>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Multi-disciplinary Treatment</h3>
                <p className="text-gray-700 text-sm mb-4">
                  The key ingredients of a successful weight loss program are diet, exercise, and behavior modification. We have a team of
                  dedicated obesity physicians, dietitians, exercise trainers, psychologists and counsellors who tailor plans that fit your
                  lifestyle, medical condition, and weight loss goals.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                  {[
                    'Comprehensive medical assessment & supervision',
                    'Customised diet plans and meal replacements',
                    'Goal-based exercise prescriptions',
                    'Behavior therapy & support groups',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Available Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableServices.map((service) => (
                  <div key={service} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">{service}</h3>
                    <p className="text-gray-600 text-sm">
                      {service.includes('metabolism')
                        ? 'Detailed body composition analysis helps us personalise calorie goals and track fat loss vs muscle mass.'
                        : service.includes('exercise')
                        ? 'Exercise physiologists craft realistic routines with progressive targets matched to your stamina.'
                        : service.includes('Support group')
                        ? 'Guided group and individual sessions reinforce accountability and motivation throughout the program.'
                        : service.includes('Nutrition plans')
                        ? 'Meal plans include portion guidance, healthy recipes, and optional scientifically formulated meal replacements.'
                        : service.includes('Long-term')
                        ? 'We help you maintain results with regular reviews, relapse prevention strategies, and lifestyle coaching.'
                        : service.includes('medications')
                        ? 'Medications are prescribed judiciously by the bariatric physician when clinically indicated.'
                        : 'Special focus on unique medical needs ensures safe, coordinated weight loss journeys for every patient.'}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">How Do I Get Started?</h2>
              <div className="space-y-4">
                {getStartedSteps.map((step, index) => (
                  <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4 border-l-4 border-[#0891b2]">
                    <div className="flex-shrink-0 mt-1 mr-3 rounded-full bg-[#0891b2]/10 text-[#0891b2] w-8 h-8 flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">First Clinic Visit – Detailed Evaluations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The first visit is comprehensive. Apart from orientation to the program, our clinicians capture multiple data points to build
                an accurate baseline profile.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {assessmentData.map((item) => (
                  <div key={item.title} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-5 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Dr. Kapil Agrawal for Medical Weight Loss?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Expert Supervision & Technology</h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Internationally trained bariatric surgeon with 23+ years experience and 7000+ successful transformations.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Body composition analyzers, metabolic testing, and digital tracking for precise progress mapping.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Access to allied services including endocrinology, psychology, and physiotherapy under one roof.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-6 border border-emerald-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Continuous Care & Accountability</h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Weekly check-ins, support groups, and personalization ensure motivation never dips.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Cashless insurance assistance for obesity-related comorbidities and flexible EMI options.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Dedicated program coordinators and nutrition helpline for real-time guidance.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="max-w-5xl mx-auto">
            <CostCalculator serviceName="Medical Weight Loss Program" />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <MedicalWeightLossTestimonials />
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Program Duration & Follow-Up Support</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Program Timeline</p>
                    <p className="text-gray-700 text-sm">
                      Initial phases last 3–6 months with weekly reviews. Maintenance plans extend up to a year with gradual tapering of clinic visits.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Dedicated Support</p>
                    <p className="text-gray-700 text-sm">
                      Tele-consultations, WhatsApp check-ins, and periodic metabolic assessments keep you accountable and motivated long after the initial weight loss.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneCall className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Helpline Access</p>
                    <p className="text-gray-700 text-sm">
                      Reach our coordinators anytime between 9 AM and 9 PM for appointment assistance, diet clarifications, or motivation boosts.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <RecoveryTimeline />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Medical Weight Loss Program" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <MedicalWeightLossFAQ />
            {weightLossBlogs.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <TrendingUp className="text-[#0891b2] mr-3" size={32} />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Weight Loss & Wellness Blogs</h2>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">Guidance on meal planning, lifestyle changes, and success stories</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {weightLossBlogs.map((post) => (
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
                        <h3 className="text-base font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#0891b2] transition-colors">
                          {post.title}
                        </h3>
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

