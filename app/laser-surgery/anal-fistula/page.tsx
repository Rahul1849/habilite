import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import FistulaFAQ from './FistulaFAQ'
import FistulaTestimonials from './FistulaTestimonials'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Best Laser Fistula Treatment in Delhi - Dr. Kapil Agrawal | VAAFT Technology | 23 Years Experience',
  description: 'Dr. Kapil Agrawal is the best anal fistula surgeon in Delhi with 23 years experience. Expert in laser surgery and VAAFT technology for anal fistula treatment. Faster recovery, minimal pain, lower recurrence. Book consultation now.',
  keywords: [
    'best anal fistula surgeon delhi',
    'laser anal fistula treatment delhi',
    'VAAFT anal fistula delhi',
    'anal fistula surgery delhi',
    'anal fistula treatment delhi',
    'laser fistula surgery delhi',
    'best fistula doctor delhi',
    'Dr. Kapil Agrawal anal fistula',
    'fistula specialist delhi',
  ],
  openGraph: {
    title: 'Best Laser Fistula Treatment in Delhi - Dr. Kapil Agrawal | VAAFT Technology',
    description: 'Expert laser anal fistula treatment by Dr. Kapil Agrawal in Delhi. VAAFT technology, faster recovery, minimal pain. Book consultation.',
    url: 'https://www.habiliteclinics.com/laser-surgery/anal-fistula',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/anal-fistula-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Laser Fistula Treatment in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laser-surgery/anal-fistula',
  },
}

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an anal fistula?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An anal fistula is an abnormal tunnel-like connection between the anal canal and the skin around the anus. It usually develops after an anal abscess that has not healed properly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is laser anal fistula treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laser anal fistula treatment uses focused laser energy to seal and close the fistula tract. This minimally invasive procedure causes minimal damage to surrounding tissues, reduces pain, and promotes faster healing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is VAAFT technology for anal fistula?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VAAFT (Video-Assisted Anal Fistula Treatment) is an advanced endoscopic procedure that allows the surgeon to visualize the entire fistula tract using a small camera. The fistula is then cleaned and treated from the inside, preserving sphincter function.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the recovery time after anal fistula surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With laser and VAAFT treatments, most patients can resume normal activities within 1-2 weeks. Complete healing typically takes 4-6 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of anal fistula surgery in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost of anal fistula surgery in Delhi ranges from ₹40,000 to ₹1,20,000, depending on the complexity of the fistula, the procedure chosen, and the hospital facilities.',
      },
    },
  ],
}

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Laser Anal Fistula Treatment',
  description: 'Expert laser anal fistula treatment by Dr. Kapil Agrawal in Delhi. VAAFT technology and laser surgery for faster recovery and minimal pain.',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
  },
  procedureType: 'Laser Fistulotomy',
  followup: 'Regular follow-up appointments and post-operative care',
  preparation: 'Pre-surgery consultation, medical evaluation, and preparation instructions',
}

export default function AnalFistulaPage() {
  const fistulaBlogs = blogPosts
    .filter((post) => post.category.toLowerCase().includes('fistula') || post.tags.some((tag) => tag.toLowerCase().includes('fistula')))
    .slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} suppressHydrationWarning />

      <div className="pt-20 pb-16">
        {/* Hero Image */}
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/anal-fistula-surgeon-delhi-india.webp"
              alt="Best Laser Fistula Treatment in Delhi - Dr. Kapil Agrawal | Expert VAAFT Technology | 23 Years Experience"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-laser-fistula-treatment-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Laser Fistula Treatment in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Expert Surgeon with Over 23 Years of Experience | Latest Laser Surgery & VAAFT Technology | Faster Recovery | Minimal Pain | Lower Recurrence Rate | Cashless Insurance Available
            </p>
            
            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Experience' },
                { icon: Users, text: '7000+ Successful Surgeries' },
                { icon: TrendingUp, text: 'VAAFT Technology' },
                { icon: Clock, text: 'Faster Recovery' },
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
              <ConsultationForm 
                serviceName="Anal Fistula Treatment"
                serviceSlug="anal-fistula"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* About Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Dr. Kapil Agrawal - Best Anal Fistula Surgeon in Delhi, India
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal performs all the latest and advanced treatment options for the management of anal fistula. His procedures include Laser surgery & VAAFT technology which ensures faster recovery, minimal pain, and excellent outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With 23 years of experience and 7000+ successful surgeries, Dr. Kapil Agrawal uses the latest techniques to ensure faster recovery and excellent outcomes for his patients, with minimal discomfort and lower recurrence rates.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr. Kapil Agrawal, a laparoscopic and laser surgeon in Delhi, is widely regarded as the best anal fistula surgeon in Delhi, India. He is empaneled with some of the best hospitals offering advanced fistula treatment with state-of-the-art technology.
              </p>
            </section>

            {/* What is Anal Fistula */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is Anal Fistula?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                An anal fistula is an abnormal tunnel-like connection between the anal canal and the skin around the anus. It usually develops after an anal abscess that has not healed properly. The fistula allows pus and other fluids to drain from the infected area.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Anal fistulas can cause persistent drainage, pain, and discomfort. Without proper treatment, they can lead to complications and may recur. Early diagnosis and appropriate treatment are essential for complete healing.
              </p>
            </section>

            {/* Causes and Symptoms */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Causes and Symptoms of Anal Fistula</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Common Causes</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Anal abscess that has not healed properly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Crohn&apos;s disease or inflammatory bowel disease</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Trauma or injury to the anal area</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Radiation therapy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Tuberculosis or sexually transmitted infections</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Common Symptoms</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Persistent drainage of pus or blood</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Pain and swelling around the anus</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Irritation of the skin around the anus</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Pain during bowel movements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Fever and chills (if infection is present)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Treatment Options */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Advanced Treatment Options for Anal Fistula</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal offers the latest and most effective treatment options for anal fistula, tailored to each patient&apos;s specific condition and needs.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">1. Laser Anal Fistula Surgery</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Laser anal fistula treatment uses focused laser energy to seal and close the fistula tract. This minimally invasive procedure causes minimal damage to surrounding tissues, reduces pain, and promotes faster healing compared to traditional surgery.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Minimal tissue damage</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Reduced pain and faster recovery</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Preserved sphincter function</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Lower recurrence rate</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">2. VAAFT Technology (Video-Assisted Anal Fistula Treatment)</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    VAAFT is an advanced endoscopic procedure that allows the surgeon to visualize the entire fistula tract using a small camera. The fistula is then cleaned and treated from the inside, preserving sphincter function and reducing the risk of incontinence.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Complete visualization of fistula tract</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Preserves sphincter function</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Effective for complex fistulas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Lower risk of incontinence</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">3. Fistulotomy</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Surgical procedure to open and drain the fistula tract, suitable for simple fistulas with excellent outcomes. This traditional method is still effective for certain types of fistulas.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">4. Seton Placement</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Placing a seton (thread) through the fistula to help it heal gradually, often used for complex fistulas. This method allows controlled healing and prevents premature closure.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Dr. Kapil */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Dr. Kapil Agrawal for Anal Fistula Treatment?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Expertise & Experience</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>23+ years of surgical experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>7000+ successful surgeries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Expert in complex and recurrent fistulas</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Advanced Technology</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Latest laser technology</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>VAAFT endoscopic technology</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Minimally invasive approach</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Preserved sphincter function</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="max-w-5xl mx-auto">
              <CostCalculator serviceName="Anal Fistula Treatment" />
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <FistulaTestimonials />
              <FistulaFAQ />
              {fistulaBlogs.length > 0 && (
                <section>
                  <div className="flex items-center mb-6">
                    <TrendingUp className="text-[#0891b2] mr-3" size={32} />
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Anal Fistula Blogs</h2>
                      <p className="text-gray-600 mt-1 text-sm sm:text-base">
                        Expert advice on anal fistula treatment, recovery, and laser surgery options
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {fistulaBlogs.map((post) => (
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
                      <p className="text-gray-700 text-sm">Most patients can resume normal activities within 1-2 weeks after anal fistula treatment, with complete healing in 4-6 weeks. Laser and VAAFT procedures offer faster recovery compared to traditional surgery.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                      <p className="text-gray-700 text-sm">Regular follow-up appointments ensure proper healing, monitor for recurrence, and address any concerns. Dr. Kapil Agrawal provides comprehensive post-operative care.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Anal Fistula Treatment" />
        </div>
      </div>
    </>
  )
}
