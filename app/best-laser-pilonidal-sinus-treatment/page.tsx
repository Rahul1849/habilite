import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import PilonidalSinusFAQ from '@/app/laser-surgery/pilonidal-sinus/PilonidalSinusFAQ'
import PilonidalSinusTestimonials from '@/app/laser-surgery/pilonidal-sinus/PilonidalSinusTestimonials'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Best Laser Pilonidal Sinus Treatment in Delhi - Dr. Kapil Agrawal | SiLaC & LA-EPSIT | 23 Years Experience',
  description: 'Dr. Kapil Agrawal offers the best laser pilonidal sinus treatment in Delhi with advanced SiLaC and LA-EPSIT procedures. USFDA approved laser, same-day discharge, minimal recurrence. 23 years experience, 7000+ successful surgeries. Book consultation now.',
  keywords: [
    'best laser pilonidal sinus treatment delhi',
    'laser pilonidal sinus delhi',
    'pilonidal sinus surgery delhi',
    'SiLaC procedure delhi',
    'LA-EPSIT procedure delhi',
    'best pilonidal sinus surgeon delhi',
    'pilonidal sinus specialist delhi',
    'Dr. Kapil Agrawal pilonidal sinus',
    'pilonidal sinus laser treatment delhi',
  ],
  openGraph: {
    title: 'Best Laser Pilonidal Sinus Treatment in Delhi - Dr. Kapil Agrawal | SiLaC & LA-EPSIT',
    description: 'Expert laser pilonidal sinus treatment by Dr. Kapil Agrawal in Delhi. USFDA approved laser, same-day discharge, minimal recurrence. Book consultation.',
    url: 'https://www.habiliteclinics.com/best-laser-pilonidal-sinus-treatment',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/pilonidal-sinus-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Laser Pilonidal Sinus Treatment in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/best-laser-pilonidal-sinus-treatment',
  },
}

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best treatment for pilonidal sinus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best treatment for pilonidal sinus depends upon several factors: Whether the fistula is a simple type or complex type, whether it is a recurrence or a fresh fistula, and whether there are significant branching or ramifications. Laser procedures like SiLaC and LA-EPSIT are highly effective for most cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the chances of recurrence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple Pilonidal disease can be cured with almost zero recurrences, but in complex cases associated with multiple and extensive branching, there are chances of recurrence. Early intervention and choosing the right treatment option minimize recurrence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is SiLaC procedure for pilonidal sinus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SiLaC (Pilonidal Sinus Laser Assisted Closure) is done for simple, single-track pilonidal disease. After cleaning and thorough irrigation of the tract, laser emitting laser fiber is inserted into the track, and a defined amount of energy is delivered, causing thermal ablation and collapse of the tract.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is LA-EPSIT procedure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laser Assisted EPSIT Procedure uses a highly sophisticated, skinny endoscopic camera introduced into the sinus to remove all debris and small tuft of hairs under direct vision. The tract is then ablated with laser emitting radial fiber through a photocoagulation mechanism.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the duration of stay in the hospital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We usually discharge the patients on the same day or the next day of surgery. Laser procedures typically allow same-day discharge with minimal follow-ups.',
      },
    },
  ],
}

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Best Laser Pilonidal Sinus Treatment',
  description: 'Expert laser pilonidal sinus treatment by Dr. Kapil Agrawal in Delhi. SiLaC and LA-EPSIT procedures with USFDA approved laser technology.',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
  },
  procedureType: 'Laser Pilonidal Sinusectomy',
  followup: 'Regular follow-up appointments and post-operative care',
  preparation: 'Pre-surgery consultation, medical evaluation, and preparation instructions',
}

export default function BestLaserPilonidalSinusTreatmentPage() {
  const pilonidalBlogs = blogPosts
    .filter((post) => post.category.toLowerCase().includes('pilonidal') || post.tags.some((tag) => tag.toLowerCase().includes('pilonidal')))
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
              src="/images/pilonidal-sinus-surgeon-delhi-india.webp"
              alt="Best Laser Pilonidal Sinus Treatment in Delhi - Dr. Kapil Agrawal | Expert Laser SiLaC & LA-EPSIT | 23 Years Experience"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-laser-pilonidal-sinus-treatment-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Laser Pilonidal Sinus Treatment in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Complete Range of Procedures | Best in Class, USFDA Approved Laser Treatment | No Cuts and No Stitches | Same-Day Discharge | All Medical Insurance Accepted | EMI Options Available
            </p>
            
            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Experience' },
                { icon: Users, text: '7000+ Successful Surgeries' },
                { icon: TrendingUp, text: 'USFDA Approved Laser' },
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
              <ConsultationForm 
                serviceName="Pilonidal Sinus Treatment"
                serviceSlug="best-laser-pilonidal-sinus-treatment"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* About Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Dr. Kapil Agrawal - Expert Pilonidal Sinus Surgeon in Delhi, India
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal offers advanced pilonidal sinus treatment depending upon the complexity of the disease. The treatment includes laser technology, open conventional techniques and FLAP surgeries, ensuring optimal outcomes for each patient.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With 23 years of experience and 7000+ successful surgeries, Dr. Kapil Agrawal provides personalized treatment plans based on the complexity of the disease. He uses world-class quality, highly advanced, USFDA approved 1470 nm Laser Machines for the best results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr. Kapil Agrawal, a laparoscopic and laser surgeon in Delhi, is widely regarded as one of the best pilonidal sinus surgeons in Delhi, India. He offers extreme confidentiality, strict adherence to international guidelines, and personalized care with direct doctor-patient relationship.
              </p>
            </section>

            {/* What is Pilonidal Sinus */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is Pilonidal Sinus?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A pilonidal sinus is an abnormal tract or tunnel running underneath the skin. Also known as a pilonidal cyst or pilonidal abscess, the tract usually contains fluid, hair, abscess, and dirt. It usually occurs in the cleft at the top of the buttocks.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                It is a chronic inflammatory process that can result in a substantial decrease in quality of life. The treatment of pilonidal sinus is challenging because of the high chances of recurrence and delayed wound healing by conventional procedures.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Laser treatment of pilonidal sinus is quite promising as the chances of recurrence are almost negligible, and wound healing is swift because of its minimally invasive nature.
              </p>
            </section>

            {/* Causes */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Causes of Pilonidal Disease</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Positive family history of the disease</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Obesity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Poor hygiene</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Deep natal cleft anatomy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Hirsutism or excessive hair in the natal cleft</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Occupation requiring prolonged sitting like drivers (also known as Jeep disease)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Excessive sweating</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Presentation Stages */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Presentation of Pilonidal Sinus</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The pilonidal disease has a broad spectrum of presentations starting from incidental findings to a severe form with significant disability.
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Asymptomatic Stage</h3>
                  <p className="text-gray-700 text-sm mb-3">No symptoms except for small swellings or small pits in the buttock&apos;s cleft.</p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Management:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Wait and watch policy, or no intervention is required</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Avoid prolonged sitting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Maintain personal hygiene</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-6 border border-amber-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Acute Stage</h3>
                  <p className="text-gray-700 text-sm mb-3">Formation of abscess or pus associated with pain and fever.</p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Initial Management:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Drainage of pus or abscess and dressings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Laser depilation or removal of hair to be done to prevent a recurrence</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-orange-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Chronic Phase</h3>
                  <p className="text-gray-700 text-sm mb-3">Formation of the sinus with the intermittent discharge of pus. Sinus formation can be associated with multiple tracts or branches. Pain is less intense and often intermittent.</p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Treatment:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Laser surgery (SiLaC procedure, LA-EPSIT procedure) is highly effective for treating such a condition</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Sometimes flap based repairs are advised for extensive disease</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-orange-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Recurrent Phase</h3>
                  <p className="text-gray-700 text-sm mb-3">Sometimes pilonidal sinus can recur despite the best treatment.</p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Management:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>The best way to prevent or lower the recurrence rate is the early and timely intervention of the primary disease</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>A flap-based repair (cleft lift repair, Limburg flap repair) is done in complex, recurrent pilonidal disease</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Management Options */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Management of Pilonidal Sinus - Most Advanced Laser Treatment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Laser procedures for pilonidal sinus are significantly becoming popular because of its minimally invasive nature, speedy recovery, same-day discharge with minimal post-operative follow ups or dressings.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">1. SiLaC - Pilonidal Sinus Laser Assisted Closure</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    This procedure is done for only simple, single-track pilonidal disease. After cleaning and thorough irrigation of the tract, laser emitting laser fiber is inserted into the track, and a defined amount of energy is delivered. This energy causes thermal ablation and collapse of the tract.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Patient is discharged on the same day</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Minimal follow-up required</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Effective for simple, single-track disease</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">2. Laser Assisted EPSIT Procedure (LA-EPSIT)</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    A highly sophisticated, skinny endoscopic camera is introduced into the sinus, and all the debris and a small tuft of hairs are removed under direct vision. This technique provides a good clearance of the cavity and hence minimizes the chance of recurrence.
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    Performed at very centers due to the high cost of infrastructure involved, this technique is beneficial for complex fistula with multiple branching. The tract is then ablated with the help of laser emitting radial fiber through a photocoagulation mechanism.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Fast recovery</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Negligible recurrence</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Same day discharge</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Effective for complex fistula with multiple branching</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">3. Flap-Based Repairs for Complex Cases</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    In highly complex or recurrent pilonidal disease, we might advise a flap-based repair. Such types of pilonidal disease have extensive branching with involvement of both buttocks. These require extensive debridement of the wound, which is then closed with a flap-based repair.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Cleft Lift Repair</h4>
                      <p className="text-gray-700 text-sm">Usually indicated for the patient having deep natal cleft anatomy.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Limberg Flap Repair</h4>
                      <p className="text-gray-700 text-sm">Indicated for patients having an extensive disease involving both buttocks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Advantages */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Advantages of Laser Treatment for Pilonidal Sinus</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Minimally Invasive</h3>
                    <p className="text-gray-700 text-sm">Laser procedures are minimally invasive, causing minimal tissue damage and faster healing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Speedy Recovery</h3>
                    <p className="text-gray-700 text-sm">Patients experience faster recovery compared to traditional surgical methods.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Same-Day Discharge</h3>
                    <p className="text-gray-700 text-sm">Most patients can be discharged on the same day or next day of surgery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Minimal Follow-ups</h3>
                    <p className="text-gray-700 text-sm">Minimal post-operative follow-ups or dressings required.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Negligible Recurrence</h3>
                    <p className="text-gray-700 text-sm">The chances of recurrence are almost negligible with laser treatment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Management of Complex Cases</h3>
                    <p className="text-gray-700 text-sm">Effective for complex and recurrent pilonidal disease with multiple branching.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Dr. Kapil */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Dr. Kapil Agrawal for Pilonidal Sinus Treatment?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Expertise & Technology</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>23+ years of surgical experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>World best quality, USFDA approved 1470 nm Laser Machines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Complete range of all the best treatment modalities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Highly experienced and internationally trained team</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Patient Care & Approach</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Extreme confidentiality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Strict adherence to international guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Honest opinion and detailed discussion about the best modality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Customized treatment plans and personalized care</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Direct doctor-patient relationship without third-party involvement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="max-w-5xl mx-auto">
              <CostCalculator serviceName="Pilonidal Sinus Treatment" />
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <PilonidalSinusTestimonials />
              <PilonidalSinusFAQ />
              {pilonidalBlogs.length > 0 && (
                <section>
                  <div className="flex items-center mb-6">
                    <TrendingUp className="text-[#0891b2] mr-3" size={32} />
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Pilonidal Sinus Blogs</h2>
                      <p className="text-gray-600 mt-1 text-sm sm:text-base">
                        Expert advice on pilonidal sinus treatment, recovery, and laser surgery options
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pilonidalBlogs.map((post) => (
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
                      <p className="text-gray-700 text-sm">The majority of our patients can join back their work in five to seven days post-surgery. Recovery depends on the pilonidal sinus disease complexity and the type of procedure chosen. Most patients are discharged on the same day or the next day of surgery.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                      <p className="text-gray-700 text-sm">The majority of the patients don&apos;t require any follow-ups. Some patients might require irrigation of wounds 2-3 times. We have specialized dressers who can visit your house to clean and rinse the wound or guide you on how to rinse the track at home.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Pilonidal Sinus Treatment" />
        </div>
      </div>
    </>
  )
}

