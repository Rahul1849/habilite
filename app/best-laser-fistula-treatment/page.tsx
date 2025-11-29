import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import FistulaFAQ from '@/app/laser-surgery/anal-fistula/FistulaFAQ'
import FistulaTestimonials from '@/app/laser-surgery/anal-fistula/FistulaTestimonials'
import { blogPosts } from '@/data/blog'
import { RecoveryTimeline } from '@/components/services/RecoveryTimeline'

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
    url: 'https://www.habiliteclinics.com/best-laser-fistula-treatment',
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
    canonical: 'https://www.habiliteclinics.com/best-laser-fistula-treatment',
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

export default function BestLaserFistulaTreatmentPage() {
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
              Complete range of latest, painless and most advanced procedures | Best in class, USFDA approved laser treatment | No cuts and no stitches | Same day discharge | All medical insurance accepted | EMI options available
            </p>
            
            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Experience' },
                { icon: Users, text: '2000+ Successful Surgeries' },
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
                serviceSlug="best-laser-fistula-treatment"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Understanding Fistula in Ano */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Understanding Fistula in Ano</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                An anal fistula is an abnormal tunnel that forms as a result of an infected anal gland located inside the anus. The tunnel usually develops from inside the anus to the skin surrounding the anus. Due to an infected anal gland, there is the formation of abscess or pus which slowly bursts or drains into the external skin surrounding the anus.
              </p>
            </section>

            {/* Symptoms of Fistula in Ano */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Symptoms of Fistula in Ano</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some of the most common symptoms associated with anal fistula include:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Intermittent discharge of pus or fluid:</strong> This is the most common symptom of anal fistula, and there is pus discharge from an opening in the skin surrounding the anal area.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Pain and Discomfort:</strong> Persistent pain and discomfort around the anus, especially during bowel movements.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Swelling and Redness:</strong> Swelling and redness around the affected area.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Recurrent Abscesses:</strong> Frequent formation of abscesses in the perianal area.</span>
                </li>
              </ul>
            </section>

            {/* Types and Grade of Fistula */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Types and Grade of Fistula</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fistulas can be classified based on their complexity and relationship to the sphincter muscles.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Based on their relationship to sphincter muscles:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span><strong>Intersphincteric Fistula:</strong> Most common type and accounts for 70% of anal fistulas.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span><strong>Transsphincteric Fistula:</strong> The second most common type and involves both the sphincter muscles.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span><strong>Suprasphincteric Fistula:</strong> Less common and challenging to treat, this type originates above the sphincter muscles and descends to the perianal skin.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span><strong>Extrasphincteric Fistula:</strong> Rare and often associated with complex diseases like Crohn&apos;s disease.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Based on Complexity:</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-sm"><strong>Simple Fistulas:</strong></p>
                      <p className="text-gray-700 text-sm mb-2">
                        Simple fistulas are relatively straightforward in their anatomy and have minimal involvement of the sphincter muscle. They are typically low-lying and involve minimal branching. Simple fistulas are more accessible to treat and have a lower risk of complications and recurrence.
                      </p>
                      <p className="text-gray-700 text-sm">
                        Common types of simple fistulas include Intersphincteric Fistula and Low type Transsphincteric Fistula.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-sm"><strong>Complex Fistulas:</strong></p>
                      <p className="text-gray-700 text-sm mb-2">
                        Complex fistulas are more intricate and involve a more significant portion of the sphincter muscles. They may have multiple tracts and openings, making them more challenging to treat. Complex fistulas are more likely to recur and have a higher risk of complications.
                      </p>
                      <p className="text-gray-700 text-sm">
                        Examples of complex fistulas include High Transsphincteric Fistula, Suprasphincteric and Extrasphincteric Fistulas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Diagnosing Fistula in Ano */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Diagnosing Fistula in Ano</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Diagnosing a fistula in ano typically involves a combination of medical history, physical examination, and imaging studies. Imaging studies help plan the appropriate treatment strategy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Imaging studies such as MRI (Magnetic Resonance Imaging) or Endoanal Ultrasound are often used to map the fistula tract and determine its complexity.
              </p>
            </section>

            {/* Best Treatment for Fistula in Ano */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Best Treatment for Fistula in Ano</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Several treatment options exist for the management of fistula in ano. The choice of treatment depends on the type and complexity of the fistula and the patient&apos;s overall health. Here are some of the best treatment options:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Laser Surgery For Anal Fistula</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Laser Treatment for Anal Fistula: Laser treatment for fistula in ano is a minimally invasive procedure that uses laser energy to ablate the fistula tract. This treatment has gained tremendous popularity due to its precision, reduced postoperative pain, and faster recovery compared to traditional surgical methods.
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    The procedure has its indications, and not every patient is a candidate for laser surgery. Extremely complex fistulas, excessive branching of fistulas, and fistulas associated with abscess formation are some of the contraindications of this procedure.
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    The procedure&apos;s success depends upon the surgeon&apos;s experience and expertise, the quality of laser machines and patient selection.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Advantages of Laser Treatment for Fistula:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Minimally Invasive:</strong> Laser treatment is less invasive than traditional surgery, resulting in more minor wounds and less tissue damage.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Reduced Postoperative Pain:</strong> Patients typically experience less pain after laser treatment compared to conventional surgical methods.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Faster Recovery:</strong> The recovery time is generally shorter, allowing patients to return to normal activities sooner.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Zero Risk of Incontinence:</strong> The precision of the laser reduces the risk of damaging the sphincter muscles, which can help preserve continence.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Less Scarring:</strong> The procedure results in minimal scarring compared to more invasive surgical techniques.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Outpatient Procedure:</strong> Laser treatment can often be performed as an outpatient procedure, reducing hospital stay times.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">VAAFT Procedure (Video-Assisted Anal Fistula Treatment)</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    VAAFT is a minimally invasive technique that uses a thin scope to visualize the entire fistula track through the camera. This allows for complete cleaning of the tract, identifying the internal opening, and closing the internal opening with a unique stapler.
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    VAAFT is particularly useful for complex fistulas and offers the advantage of preserving the sphincter muscles.
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    VAAFT was introduced a few years back but became disreputed due to its high recurrence. However, this procedure has delivered excellent results with the combination of laser therapy.
                  </p>
                  <p className="text-gray-700 text-sm">
                    After closing the internal opening, laser energy is used to ablate the entire track. This laser-assisted VAAFT technique has given excellent results.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">LIFT (Ligation of Inter sphincteric Fistula Tract)</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    LIFT is a surgical technique that is used in the management of complex trans-sphincteric fistula. It significantly reduces the chances of faecal incontinence by preserving sphincter muscles.
                  </p>
                  <p className="text-gray-700 text-sm">
                    The procedure involves accessing the fistula tract between the internal and external sphincter muscles. The tract is ligated and divided, allowing it to heal from the inside out. To maximize the best outcomes, the distal tract is ablated with the help of laser energy.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Seton Wiring</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Seton wiring involves placing a seton (a piece of surgical thread or wire) through the fistula tract to allow continuous drainage and promote healing. Seton wiring is particularly useful for high or complex fistulas.
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    There are two types of setons:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span><strong>Cutting setons:</strong> Also known as Ksharsutra, the setons are coated with unique materials which gradually cut through the fistula tract.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span><strong>Non-cutting setons:</strong> These are used to keep the tract open for drainage and are simple cotton or silk sutures.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Us</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Availability of a complete range of procedures conducted by a team of highly experienced and internationally trained surgeons.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Empanelment with some of the best hospitals for fistula surgery, with state-of-the-art facilities, ensures excellent outcomes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Zero per cent Interest EMI options.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Complete cashless facilities with all insurance companies.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Advanced, USFDA-approved 1470 nm laser machines of the highest quality.</span>
                </li>
              </ul>
            </section>

            {/* About Dr Kapil Agrawal */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Dr Kapil Agrawal</h2>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Extensive Experience:</strong> Dr. Kapil Agrawal has 23 years of experience performing advanced procedures for anal fistulas.</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>High Volume of Successful Surgeries:</strong> He has performed over 2,000 fistula surgeries with excellent outcomes.</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Comprehensive Care Team:</strong> He has a dietician team who guides the surgical journey.</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Expertise in Latest Procedures:</strong> Dr Agrawal is skilled in all the latest procedures for anal fistula treatment.</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Customized Treatment Plans:</strong> He offers personalized treatment plans tailored to each patient&apos;s medical history and the complexity of their fistula.</span>
                </p>
              </div>
            </section>

            <div className="max-w-5xl mx-auto">
              <CostCalculator serviceName="Anal Fistula Treatment" />
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <FistulaTestimonials />
              <RecoveryTimeline />
            </div>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Anal Fistula Treatment" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
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
          </div>
        </div>
      </div>
    </>
  )
}

