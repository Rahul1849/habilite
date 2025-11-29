import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, CheckCircle2, Clock, User, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import RecoveryTimeline from '@/components/services/RecoveryTimeline'
import FissureFAQ from './FissureFAQ'
import FissureTestimonials from './FissureTestimonials'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Anal Fissure Treatment in Delhi | Expert Anal Fissure Surgeon Dr. Kapil Agrawal',
  description: 'Expert anal fissure treatment in Delhi, India by Dr. Kapil Agrawal. Offers non-surgical treatment, Botox injections, and Laser surgery for acute and chronic anal fissures with permanent outcomes. 23 years experience, 7000+ successful surgeries. Book consultation for anal fissure treatment in Delhi.',
  keywords: [
    'anal fissure treatment delhi',
    'anal fissure surgery delhi',
    'chronic anal fissure delhi',
    'laser anal fissure treatment delhi',
    'best anal fissure surgeon delhi',
    'anal fissure treatment india',
    'Dr. Kapil Agrawal anal fissure',
  ],
  openGraph: {
    title: 'Anal Fissure Treatment in Delhi | Expert Anal Fissure Surgeon Dr. Kapil Agrawal',
    description: 'Expert anal fissure treatment by Dr. Kapil Agrawal in Delhi. Non-surgical, Botox, and Laser surgery options with permanent outcomes.',
    url: 'https://www.habiliteclinics.com/laser-surgery/anal-fissure',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laser-surgery/anal-fissure',
  },
}

export default function AnalFissurePage() {
  const fissureBlogs = blogPosts
    .filter(
      (post) =>
        post.category.toLowerCase().includes('fissure') ||
        post.tags.some((tag) => tag.toLowerCase().includes('fissure')),
    )
    .slice(0, 3)

  return (
    <div className="pt-20 pb-16">
      {/* Hero Image */}
      <div className="container-custom mb-8">
        <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
          <Image
            src="/images/anal-fissure-surgeon-delhi-india.webp"
            alt="Anal Fissure Treatment in Delhi - Dr. Kapil Agrawal | Laser Fissure Surgery | Botox Treatment"
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

      {/* Hero Content */}
      <div className="container-custom mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">anal-fissure-treatment-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Anal Fissure Treatment in <span className="text-[#0891b2]">Delhi, India</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
            <Award size={16} className="text-[#f59e0b]" />
            <span>Delhi&apos;s Best Anal Fissure Surgeon</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive anal fissure care with customised medicines, advanced Botox injections, and USFDA-approved laser surgery for painless, stitch-free recovery, same-day discharge, and insurance-covered treatment.
          </p>
          <CallUsButton />
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
          <div className="lg:col-span-2 space-y-8 flex flex-col items-center w-full max-w-5xl">
            <section className="text-center bg-white/90 rounded-2xl shadow-md border border-[#0891b2]/10 p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Understanding Anal Fissures</h2>
              <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
                Anal fissures are tiny tears in the anal canal that cause pain, bleeding, and intense spasms. Acute fissures resemble a fresh cut and often heal within 2-3 weeks with medicines and dietary changes, whereas chronic fissures persist for more than eight weeks, develop skin tags and scar tissue, and usually require advanced intervention.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
                {[
                  {
                    title: 'Acute Anal Fissure',
                    description: 'Fresh tear, minimal swelling, usually responds to conservative care in a few weeks.',
                  },
                  {
                    title: 'Chronic Anal Fissure',
                    description: 'Lasts beyond eight weeks, develops skin tags and muscle spasm, needs Botox or laser surgery.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white shadow-sm rounded-lg p-5 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-2 text-center">{item.title}</h3>
                    <p className="text-gray-700 text-sm text-center">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="my-10">
                <CostCalculator serviceName="Anal Fissure Treatment" />
              </div>
            </section>

          </div>

          <div className="lg:col-span-1 w-full max-w-md mx-auto">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Anal Fissure Treatment"
                serviceSlug="anal-fissure"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 mt-12">
          <section className="text-center bg-white/90 rounded-2xl shadow-md border border-[#0891b2]/10 p-8 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Common Causes</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Most fissures result from trauma to the anal lining. These everyday triggers increase the risk:
            </p>
            <div className="flex flex-col items-center space-y-3 text-gray-700 max-w-3xl mx-auto w-full">
              {[
                'Chronic constipation or hard stools causing excessive strain',
                'Chronic diarrhoea or repeated bowel movements',
                'Anal intercourse or childbirth-related trauma',
                'Inflammatory bowel disease, infections, or rarely anal cancer',
              ].map((cause) => (
                <div key={cause} className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center w-full">
                  <span className="text-[#0891b2] font-bold">•</span>
                  <span className="text-sm sm:text-base text-center">{cause}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-white/90 rounded-2xl shadow-md border border-[#0891b2]/10 p-8 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Key Symptoms</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              If you experience these signs, book an expert evaluation to prevent complications.
            </p>
            <div className="flex flex-col items-center space-y-3 text-gray-700 max-w-3xl mx-auto w-full">
              {[
                'Sharp pain during and after passing stools',
                'Bright red blood on toilet paper or stool',
                'Visible skin tag or small lump near the anal area',
                'Burning sensation, spasms, or persistent discomfort',
              ].map((symptom) => (
                <div key={symptom} className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center w-full">
                  <span className="text-[#0891b2] font-bold">•</span>
                  <span className="text-sm sm:text-base text-center">{symptom}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-white/90 rounded-2xl shadow-md border border-[#0891b2]/10 p-8 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Best Treatment Options</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Dr. Kapil Agrawal tailors the treatment plan based on pain, duration, and muscle spasm to offer the quickest relief with minimum downtime.
            </p>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  title: 'Conservative & Non-Surgical Care',
                  description:
                    'High-fibre diet, hydration, customised exercise plans, topical anaesthetics, calcium channel blockers, stool softeners, and guided medications heal 60-70% of acute fissures.',
                },
                {
                  title: 'Botox Injections',
                  description:
                    'Targets the internal anal sphincter to relieve spasm within hours, offers 80-100% healing, almost zero downtime, and discharge within three hours.',
                },
                {
                  title: 'Laser Lateral Internal Sphincterotomy',
                  description:
                    'Gold-standard, USFDA-approved laser procedure for chronic or recurrent fissures with near-100% success, bloodless surgery, no stitches, and same-day discharge.',
                },
              ].map((treatment, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5 border border-[#0891b2]/20 text-center mx-auto">
                  <h3 className="font-bold text-gray-900 mb-2">{treatment.title}</h3>
                  <p className="text-gray-700 text-sm">{treatment.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-white/90 rounded-2xl shadow-md border border-[#0891b2]/10 p-8 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Laser Treatment</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">Experience the most advanced and pain-free fissure management.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                'Bloodless, painless procedure',
                'No cuts, no stitches',
                'Same-day discharge',
                'Rapid recovery within days',
                'Almost zero recurrence',
                'Insurance & EMI assistance',
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center justify-center bg-gray-50 px-4 py-3 rounded-lg shadow-sm gap-2 text-center">
                  <CheckCircle2 className="text-[#0891b2]" size={20} />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <FissureTestimonials />

          <section className="bg-white/90 rounded-2xl shadow-md border border-[#0891b2]/10 p-8 text-center w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <Clock className="text-[#0891b2] mb-2" size={24} />
                <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                <p className="text-gray-700 text-sm">
                  Resume routine activities within 24-48 hours after laser surgery; pain subsides in four days and complete healing occurs in 2-4 weeks.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <User className="text-[#0891b2] mb-2" size={24} />
                <p className="font-semibold text-gray-900 mb-1">Follow-up & Nutrition</p>
                <p className="text-gray-700 text-sm">
                  Dedicated nutritionists customise fibre-rich diets, and structured follow-up visits ensure long-term comfort with almost zero recurrence.
                </p>
              </div>
            </div>
          </section>
          <RecoveryTimeline />

          <section className="text-center bg-white/90 rounded-2xl shadow-md border border-[#0891b2]/10 p-8 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Dr. Kapil Agrawal?</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Multi-disciplinary team, latest laser machines, and a 23-year legacy of excellence in treating complex colorectal conditions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                '7000+ successful surgeries with global training',
                'Holistic care with customised diet and recovery plans',
                'Insurance coordination and EMI support',
                'Dedicated team for international & local patients',
              ].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm border border-gray-100 px-4 py-3">
                  <p className="text-gray-700 text-center">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Post-operative Care Section - Full Width Centered */}
        <PostOperativeCare />

        {/* WhatsApp Expert Chat - Full Width Centered */}
        <WhatsAppExpertChat serviceName="Anal Fissure Treatment" />

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <FissureFAQ />
            {fissureBlogs.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <TrendingUp className="text-[#0891b2] mr-3" size={32} />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Anal Fissure Blogs</h2>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                      Expert advice on anal fissure treatment, recovery, and laser surgery options
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {fissureBlogs.map((post) => (
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
    </div>
  )
}

