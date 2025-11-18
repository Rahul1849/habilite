import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import CircumcisionFAQ from './CircumcisionFAQ'
import CircumcisionTestimonials from './CircumcisionTestimonials'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Best Circumcision Surgery in Delhi - Dr. Kapil Agrawal | Laser & ZSR Expert',
  description:
    'Dr. Kapil Agrawal offers the best circumcision surgery in Delhi using advanced laser and ZSR stapler techniques. Bloodless, stitchless, painless procedures with same-day discharge, cashless insurance, and EMI facility.',
  keywords: [
    'best circumcision surgeon delhi',
    'laser circumcision delhi',
    'zsr circumcision delhi',
    'stapler circumcision delhi',
    'circumcision cost delhi',
    'bloodless circumcision delhi',
    'circumcision doctor delhi',
    'dr kapil agrawal circumcision',
  ],
  openGraph: {
    title: 'Best Circumcision Surgery in Delhi - Dr. Kapil Agrawal',
    description:
      'Complete range of laser and stapler circumcision procedures with USFDA approved technology, no stitches, and rapid recovery.',
    url: 'https://www.habiliteclinics.com/laser-surgery/circumcision',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/circumcision-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Circumcision Surgery in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laser-surgery/circumcision',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can newborns undergo stapler circumcision?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ZSR staplers are available in various sizes and are completely safe for neonates and children. The procedure is performed under short general anesthesia with same-day discharge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ZSR circumcision safe for infected foreskin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stapler circumcision can be performed even in infected foreskin with excellent outcomes. Your surgeon may prescribe a longer antibiotic course for infection control.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does circumcision affect sexual drive or sensitivity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Circumcision has a very modest effect on sexual performance. Sensitivity differences vary from person to person and there is no change in penis size, sperm production, or fertility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is circumcision covered under insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most insurance companies cover circumcision as a cashless day-care procedure. Habilite Clinics coordinates approvals with partner hospitals across Delhi-NCR.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of stapler circumcision in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depending on hospital category, anesthesia, and device quality, costs range between ₹30,000 and ₹40,000. Habilite Clinics offers packages starting near ₹20,000 with EMI and cashless options.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Laser and ZSR Circumcision',
  description:
    'Bloodless, stitchless circumcision procedures using USFDA approved laser and stapler technology with same-day discharge and rapid recovery.',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
  },
  procedureType: 'Laser Stapler Circumcision',
  followup: 'Post-surgery dressing guidance and review visit if required',
  preparation: 'Pre-surgery evaluation, anaesthesia fitness, and infection control protocol',
}

export default function CircumcisionPage() {
  const circumcisionBlogs = blogPosts
    .filter((post) => {
      const category = post.category?.toLowerCase() ?? ''
      const title = post.title?.toLowerCase() ?? ''
      const tags = post.tags ?? []
      return (
        category.includes('circumcision') ||
        title.includes('circumcision') ||
        tags.some((tag) => tag.toLowerCase().includes('circumcision'))
      )
    })
    .slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        suppressHydrationWarning
      />

      <div className="pt-20 pb-16">
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-xl">
            <Image
              src="/images/circumcision-surgeon-delhi-india.webp"
              alt="Best Circumcision Surgery in Delhi - Dr. Kapil Agrawal"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>

        <div className="container-custom mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-circumcision-surgery-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Circumcision Surgery in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Complete range of procedures · USFDA approved laser & ZSR stapler · No bleeding · No stitches · Same-day discharge ·
              Cashless insurance & EMI support
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Experience' },
                { icon: Users, text: '7000+ Successful Surgeries' },
                { icon: TrendingUp, text: 'Laser & Stapler Expertise' },
                { icon: Clock, text: 'Procedure Time ~10 Minutes' },
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
              <ConsultationForm serviceName="Circumcision Surgery" serviceSlug="circumcision" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is Circumcision?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Circumcision removes the foreskin covering the glans of the penis. It is advised for tight foreskin (phimosis),
                repeated infections, hygiene difficulties, or as a cultural and religious choice. Consulting a specialist helps decide
                the safest technique for newborns, adolescents, and adults.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At Habilite Clinics, Dr. Kapil Agrawal performs laser and stapler circumcision with meticulous infection control,
                minimal discomfort, and precise cosmetic results so recovery is smooth for the entire family.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Medical Indications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Phimosis or tight foreskin',
                  'Paraphimosis',
                  'Balanitis or balanoposthitis',
                  'Pain or bleeding during intercourse',
                  'Balanitis Xerotica Obliterans (BXO)',
                  'Recurrent urinary tract infections',
                  'Hygiene difficulties due to tight foreskin',
                  'Chronic irritation or recurrent infections',
                ].map((item) => (
                  <div key={item} className="bg-white border border-gray-200 rounded-lg p-4 flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Treatment Options</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Conventional Circumcision',
                    description:
                      'Traditional open technique performed under local or general anaesthesia. Effective but associated with more bleeding, haematoma formation, and longer recovery compared to modern options.',
                  },
                  {
                    title: 'Laser Circumcision',
                    description:
                      'High-precision laser energy cuts and seals simultaneously, protecting healthy skin, reducing bleeding, minimising pain, and accelerating healing.',
                  },
                  {
                    title: 'Stapler (ZSR) Circumcision',
                    description:
                      'A cylindrical ZSR device cuts the foreskin and seals vessels with a silicone ring and micro staples. The daycare procedure takes 10–15 minutes and patients go home within 2 hours.',
                  },
                ].map((option) => (
                  <div key={option.title} className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-700 text-sm">{option.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Laser Circumcision</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'High precision without damaging normal tissue',
                  'Reduced bleeding and almost no haematoma',
                  'Minimal pain due to limited nerve stimulation',
                  'Lower risk of infection',
                  'Faster wound healing and return to routine',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Advantages of Stapler (ZSR) Technique</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Procedure time around 10 minutes',
                  'Bloodless, stitchless method',
                  'Minimal swelling and discomfort',
                  'Same-day discharge with rapid recovery',
                  'Silicone ring auto-detaches in 4–5 days',
                  'Extremely low complication and infection rates',
                ].map((advantage) => (
                  <div key={advantage} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Circumcision Cost & Insurance</h2>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                The average cost of stapler circumcision in Delhi ranges between ₹30,000 and ₹40,000 depending on hospital category,
                anaesthesia, and device quality. Habilite Clinics packages start near ₹20,000 with cashless tie-ups across Delhi-NCR and
                flexible EMI plans.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  'Transparent estimates covering surgeon fee, day-care stay, and device',
                  'Cashless coordination with leading insurance providers',
                  'Dedicated team for documentation and claim approvals',
                  '0% EMI support for self-pay patients',
                ].map((point) => (
                  <li key={point} className="flex items-start">
                    <CheckCircle2 className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Habilite Clinics?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Clinical Excellence</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {[
                      'Experienced surgeons with specialised laser & ZSR training',
                      'Complete range of circumcision procedures under one roof',
                      'Strict surgical protocols for hygiene and infection control',
                    ].map((bullet) => (
                      <li key={bullet} className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f97316]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Patient Experience</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {[
                      'Direct consultation with Dr. Kapil Agrawal — no third-party chains',
                      'Cashless insurance help desk and concierge assistance',
                      'Dedicated post-operative follow-up with 24/7 helpline',
                    ].map((bullet) => (
                      <li key={bullet} className="flex items-start">
                        <CheckCircle2 className="text-[#f97316] mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <CostCalculator serviceName="Circumcision Surgery" />

            <CircumcisionTestimonials />

            <CircumcisionFAQ />

            {circumcisionBlogs.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <TrendingUp className="text-[#0891b2] mr-3" size={32} />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Circumcision Blogs</h2>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                      Insights on recovery timelines, hygiene practices, and insurance readiness
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {circumcisionBlogs.map((post) => (
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
                          <span>
                            {new Date(post.publishedDate).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                          <span>By {post.author}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Timeline</p>
                    <p className="text-gray-700 text-sm">
                      Patients walk out the same day, resume desk work within 1–2 days, and return to routine in about a week. Silicone
                      rings from ZSR devices shed naturally in 4–5 days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Care Tips</p>
                    <p className="text-gray-700 text-sm">
                      Keep the site clean and dry, wear relaxed clothing, avoid strenuous workouts for two weeks, and follow the pain
                      relief plan advised by Dr. Kapil. Our nursing team schedules virtual or in-person reviews to track healing.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Circumcision Surgery" />
        </div>
      </div>
    </>
  )
}

