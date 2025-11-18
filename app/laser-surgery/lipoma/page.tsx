import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import LipomaFAQ from './LipomaFAQ'
import LipomaTestimonials from './LipomaTestimonials'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Best Lipoma Treatment in Delhi - Dr. Kapil Agrawal | 23 Years Experience | 3000+ Procedures',
  description:
    'Dr. Kapil Agrawal offers the best lipoma treatment in Delhi with complete range of procedures including pinch technique, liposuction, laser, and surgical excision. Minimal cuts, no stitches, same-day discharge, 0% EMI, all insurance covered. Book consultation now.',
  keywords: [
    'best lipoma treatment delhi',
    'lipoma removal delhi',
    'lipoma surgery delhi',
    'lipoma specialist delhi',
    'laser lipoma removal delhi',
    'pinch technique lipoma delhi',
    'Dr. Kapil Agrawal lipoma',
    'lipoma treatment india',
  ],
  openGraph: {
    title: 'Best Lipoma Treatment in Delhi - Dr. Kapil Agrawal',
    description:
      'Minimal cuts, no stitches, same-day discharge, 0% EMI, and all insurance covered. Complete range of lipoma procedures by Dr. Kapil Agrawal.',
    url: 'https://www.habiliteclinics.com/laser-surgery/lipoma',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/lipoma-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Lipoma Treatment in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laser-surgery/lipoma',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can lipomas be dangerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lipomas are generally not dangerous. However, rapidly growing lipomas must be removed immediately and sent for biopsy to rule out cancer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best treatment options for lipoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depending on size, depth, and location, options include observation, liposuction-assisted removal, pinch technique, laser, and surgical excision. Treatment is customised for each patient.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do lipomas grow back after removal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Properly and completely excised lipomas do not grow back in the same place. Recurrence is usually due to incomplete removal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can exercise or diet dissolve lipomas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lipomas never disappear on their own. A healthy lifestyle may slow the formation of new lipomas but surgical removal is the definitive treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the recovery time after lipoma removal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most minimally invasive procedures allow patients to resume daily activities within 1-2 days. Large or deep lipomas may require 5-7 days of downtime.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Comprehensive Lipoma Treatment',
  description:
    'Complete range of lipoma procedures including observation, liposuction, pinch technique, laser, and surgical excision with minimal downtime.',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
  },
  procedureType: 'Liposuction Assisted Excision',
  followup: 'Post-procedure wound check and scar management guidance',
  preparation: 'Pre-surgery consultation, imaging if required, and blood workup',
}

export default function LipomaPage() {
  const lipomaBlogs = blogPosts
    .filter(
      (post) =>
        post.category.toLowerCase().includes('lipoma') ||
        post.tags.some((tag) => tag.toLowerCase().includes('lipoma'))
    )
    .slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} suppressHydrationWarning />

      <div className="pt-20 pb-16">
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/lipoma-surgeon-delhi-india.webp"
              alt="Best Lipoma Treatment in Delhi - Dr. Kapil Agrawal | Minimal Cuts | No Stitches | Same Day Discharge"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-lipoma-treatment-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Lipoma Treatment in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Minimal Cuts & No Stitches | Trusted Doctors & Clinics | 0% Interest EMI Facility | All Insurance Covered | Same Day Discharge | Complete Recovery in 1-2 Days
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Experience' },
                { icon: Users, text: '3000+ Lipoma Procedures' },
                { icon: TrendingUp, text: 'Minimal Scarring Outcomes' },
                { icon: Clock, text: 'Same-Day Discharge' },
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
              <ConsultationForm serviceName="Lipoma Treatment" serviceSlug="lipoma" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Dr. Kapil Agrawal - Best Lipoma Specialist Doctor in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr Kapil Agrawal offers the best lipoma treatment in Delhi. His vast experience and expertise to perform complete range of lipoma procedures makes him one of the best specialist surgeon in Delhi for the management of lipomas. Depending upon the patient's requirement, he provides treatment at top hospitals as well as at Habilite Clinics with affordable packages and cashless facilities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                He has performed more than 3000 lipoma procedures with excellent cosmetic results. Customized treatment plans ensure that each patient receives the most appropriate technique based on the size, location, and consistency of lipomas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is a Lipoma?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lipomas are slowly growing lumps of non-cancerous fat cells that form between the skin and underlying muscle layer. They are usually soft, painless, and mobile when pressed. Lipomas can form anywhere in the body but most commonly occur on the neck, shoulders, back, abdomen, arms, and thighs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Though harmless in most cases, they can cause discomfort, pain, or cosmetic concerns depending on their size and location. Rapidly enlarging lipomas must always be evaluated to rule out liposarcoma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Different Types of Lipomas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Subcutaneous Lipomas',
                    description: 'Most common type. Form just under the skin and are soft and rubbery to the touch.',
                  },
                  {
                    title: 'Intramuscular Lipomas',
                    description: 'Form within muscles and are often firm or painful. Common in thigh or shoulder region.',
                  },
                  {
                    title: 'Intermuscular Lipomas',
                    description: 'Form between muscles and can be either soft or firm. Frequently found in forearm or calf.',
                  },
                  {
                    title: 'Visceral Lipomas',
                    description: 'Form inside body cavities around organs such as the heart, kidneys, or liver and usually require imaging for diagnosis.',
                  },
                ].map((type) => (
                  <div key={type.title} className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-700 text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Causes & Risk Factors</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Genetics:</strong> Familial multiple lipomatosis leads to numerous lipomas across the body.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Injury or Trauma:</strong> Rarely, an injury can trigger growth of a lipoma at the site.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Underlying Conditions:</strong> Adiposis dolorosa, Madelung's disease, Gardner's syndrome, or Cowden syndrome increase lipoma formation.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Diagnosis of Lipomas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Clinical Examination</h3>
                  <p className="text-gray-700 text-sm">
                    Most lipomas can be diagnosed clinically by palpation. They feel soft, mobile, and painless.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Imaging & Biopsy</h3>
                  <p className="text-gray-700 text-sm">
                    Ultrasound, MRI, or CT scan is ordered for deep or fast-growing lipomas. FNAC/biopsy is rarely needed to confirm diagnosis.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Best Treatment Options for Lipoma</h2>
              <div className="space-y-5">
                {[
                  {
                    title: 'Observation',
                    description: 'Small, non-growing lipomas that are asymptomatic may only require monitoring.',
                  },
                  {
                    title: 'Liposuction for Lipomas',
                    description:
                      'Useful for superficial, soft lipomas, especially in cosmetically sensitive areas. Minimally invasive with quick recovery but unsuitable for deep or firm lipomas.',
                  },
                  {
                    title: 'Pinch Technique',
                    description:
                      'One of the best treatment options for most lipomas. Specialized instruments elevate the lipoma, allowing removal through a tiny opening. Minimal scarring and fast healing.',
                  },
                  {
                    title: 'Laser Assisted Removal',
                    description:
                      'Laser energy breaks down fat cells. Effective for small, superficial lipomas but may be inadequate for large or hard lipomas, leading to recurrence.',
                  },
                  {
                    title: 'Steroid Injections',
                    description:
                      'Can shrink very small lipomas but often require multiple sessions and have higher recurrence. Not a definitive cure.',
                  },
                ].map((option) => (
                  <div key={option.title} className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-700 text-sm">{option.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Dr. Kapil Agrawal for Lipoma Removal?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Experience & Technology</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>22+ years experience | 3000+ lipoma procedures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Complete range of procedures tailored to each case</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Affiliations with top hospitals and day-care centres</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Patient-Centred Care</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Personalised treatment plans considering size, location & cosmetic goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Patient-friendly EMI, cashless insurance, and transparent pricing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Direct doctor-patient communication without third-party middlemen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="max-w-5xl mx-auto">
              <CostCalculator serviceName="Lipoma Treatment" />
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <LipomaTestimonials />
              <LipomaFAQ />
              {lipomaBlogs.length > 0 && (
                <section>
                  <div className="flex items-center mb-6">
                    <TrendingUp className="text-[#0891b2] mr-3" size={32} />
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Lipoma Blogs</h2>
                      <p className="text-gray-600 mt-1 text-sm sm:text-base">
                        Expert advice on lipoma removal, cosmetic outcomes, and recovery tips
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {lipomaBlogs.map((post) => (
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
              <section className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                      <p className="text-gray-700 text-sm">
                        Complete recovery usually occurs within 1-2 days for minimally invasive procedures. Large or deep lipomas may need dressing support for 5-7 days.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                      <p className="text-gray-700 text-sm">
                        Scar management creams, customized exercises, and diet guidance are provided to ensure optimal healing and reduce the chances of new lipoma formation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Lipoma Treatment" />
        </div>
      </div>
    </>
  )
}


