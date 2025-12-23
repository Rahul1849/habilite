import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import { blogPosts } from '@/data/blog'

// Dynamically import below-the-fold components to improve initial page load and LCP
// Using ssr: false for non-critical components to reduce TBT and improve mobile performance
const ConsultationForm = dynamic(() => import('@/components/forms/ConsultationForm'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-2xl" />,
})

const CostCalculator = dynamic(() => import('@/components/lead-generation/CostCalculator'), {
  ssr: false,
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-50 rounded-xl" />,
})

const PostOperativeCare = dynamic(() => import('@/components/lead-generation/PostOperativeCare'), {
  ssr: false,
  loading: () => <div className="min-h-[200px]" />,
})

const WhatsAppExpertChat = dynamic(() => import('@/components/lead-generation/WhatsAppExpertChat'), {
  ssr: false,
})

const FistulaFAQ = dynamic(() => import('@/app/laser-surgery/anal-fistula/FistulaFAQ'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-xl" />,
})

const FistulaTestimonials = dynamic(() => import('@/app/laser-surgery/anal-fistula/FistulaTestimonials'), {
  ssr: false,
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-50 rounded-xl" />,
})

const RecoveryTimeline = dynamic(() => import('@/components/services/RecoveryTimeline').then(mod => ({ default: mod.RecoveryTimeline })), {
  ssr: false,
  loading: () => <div className="min-h-[200px]" />,
})

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
      <div className="pt-20 pb-16">
        {/* LCP Optimization: Hero image with highest priority for mobile */}
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/anal-fistula-surgeon-delhi-india.webp"
              alt="Best Laser Fistula Treatment in Delhi - Dr. Kapil Agrawal | Expert VAAFT Technology | 23 Years Experience"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              priority
              fetchPriority="high"
              quality={85}
              loading="eager"
              decoding="sync"
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
              Best Fistula Treatment in <span className="text-[#0891b2]">Delhi</span>: Advanced Laser & Painless Fistula Treatment By Dr Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              If you are struggling with persistent anal pain, swelling, or discharge from the skin near anal area it could be a sign of an anal fistula. Anal Fistula is a common condition which can significantly affect your daily life. Dr Kapil Agrawal, one of the best fistula surgeon in Delhi, offers latest and advanced fistula treatment with minimal recurrences. He also offers advanced Laser surgery for the anal fistula treatment with excellent outcomes.
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
              <div className="defer-section">
                <ConsultationForm 
                  serviceName="Anal Fistula Treatment"
                  serviceSlug="best-laser-fistula-treatment"
                />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Understanding Anal Fistula */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Understanding Anal Fistula: A Common Yet Treatable Condition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                An anal fistula is an abnormal tunnel that forms as a result of an infected anal gland located inside the anus. The tunnel usually develops from inside the anus to the skin surrounding the anus. Due to an infected anal gland, there is the formation of abscess or pus which slowly bursts or drains into the external skin surrounding the anus.
              </p>
            </section>

            {/* Identifying Symptoms of Fistula in Ano */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Identifying Symptoms of Fistula in Ano</h2>
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

            {/* More Than Just Discomfort */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">More Than Just Discomfort: How Fistula Affects Daily Life & Health</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fistulas can cause pain, swelling, discharge, and itching, making it uncomfortable to sit, work, or even walk.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If left untreated, they may lead to recurring infections and serious complications.
              </p>
            </section>

            {/* Modern Fistula Treatment */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Modern Fistula Treatment: Moving Beyond Painful Traditional Surgery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Modern treatment focuses on precision, patient comfort, and preserving normal body function. Dr Kapil Agrawal uses advanced technologies that treat the root cause with minimal discomfort.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You can now seek treatment with confidence, without suffering from overwhelming pain or a prolonged healing period.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">The Goal: Complete Healing with Minimal Pain & Quick Recovery</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our expertise in latest techniques ensures faster and smoother recovery, complete eradication of fistula with no damage to bowel control function.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our modern techniques achieve this by targeting only the diseased tissue, leaving healthy muscles untouched. This leads to significantly less pain often managed with simple pain relievers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many of our patients are back to their routine activities within days, not weeks.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Key Difference: Advanced Minimally Invasive Techniques vs. Conventional Surgery</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conventional surgery requires a larger incision and cutting through muscles. As a result, you experience more pain, a higher risk of complications, and a very slow recovery that can take 6-8 weeks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In contrast, Advanced Minimally Invasive Techniques like Laser or the LIFT procedure use tiny instruments or specialized energy to treat the fistula through a minimal access point. This results in less tissue damage, negligible blood loss, and a much faster recovery.
              </p>
            </section>

            {/* Meet Your Expert */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Meet Your Expert: Renowned Fistula Surgeon in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr Kapil Agrawal is one of the well-known surgeons offering latest and most advanced treatment for anal fistula. He performs complete range of fistula surgeries and offers a customized treatment for the management of fistula.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Proven Surgical Excellence</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                He is known to provide excellent outcomes with more than 2000 fistula surgeries accomplished by him successfully.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Expertise in Modern Techniques: 15+ Years Focus on Laser & LIFT Procedures</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Agrawal has proficiency in the state-of-the-art, evidence-based, latest minimally invasive surgical procedures for anal fistula treatment, allowing patients an easy access to pioneering care.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">A Pioneer in Painless Recovery: Leader in Minimally Invasive Fistula Surgery</h3>
              <p className="text-gray-700 leading-relaxed">
                Dr Kapil Agrawal is committed to provide his patients the latest minimally invasive fistula techniques. He has mastered all the latest techniques for the best management of fistula which include Laser Surgery, VAAFT techniques and LIFT procedure.
              </p>
            </section>

            {/* Our Advanced, Patient-Centric Fistula Treatment Procedures */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Our Advanced, Patient-Centric Fistula Treatment Procedures in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We offer a range of modern fistula treatments, chosen based on your specific condition:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Laser Fistula Surgery</h3>
                  <p className="text-gray-700 mb-4">
                    In this procedure, we use a laser beam to seal the fistula tract with minimal pain and bleeding.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">LIFT Procedure</h3>
                  <p className="text-gray-700">
                    LIFT procedure or Ligation of Intershphincteric tract preserves anal muscles while closing the fistula tunnel, reducing the risk of incontinence.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Fistulotomy & Seton Placement</h3>
                  <p className="text-gray-700">
                    Traditional surgery for complex or recurrent fistulas.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">VAAFT: Excellent for Complex, Branching Fistulas</h3>
                  <p className="text-gray-700">
                    VAAFT is a minimally invasive technique that uses a thin scope to visualize the entire fistula track through the camera. This allows for complete cleaning of the tract, identifying the internal opening, and closing the internal opening with a unique stapler.
                  </p>
                </div>
              </div>
            </section>

            {/* Laser Fistula Surgery */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Laser Fistula Surgery: Minimal Pain, Faster Return to Work</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Laser surgery for anal fistula is a minimally invasive procedure that uses a highly focussed laser beam to ablate or seal the fistula tract.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every patient is not a candidate for laser surgery. Extremely complex fistulas, excessive branching of fistulas, and fistulas associated with abscess formation are some of the contraindications of this procedure.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The procedure&apos;s success depends upon the surgeon&apos;s experience and expertise, the quality of laser machines and patient selection.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Advantages of Laser Treatment for Fistula include-</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Minimally Invasive-</strong> Laser treatment is less invasive as compared to traditional surgery, resulting in more minor wounds and less tissue damage.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Reduced Postoperative Pain-</strong> Patients usually experience less pain post laser treatment as compared to conventional surgical methods.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Faster Recovery-</strong> The recovery time is usually shorter; thus, patients are able to return to their normal life easily.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Zero Risk of Incontinence-</strong> The precision of the laser surgery has also low risk of damaging sphincter muscles, that helps to preserve continence.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Less Scarring-</strong> The procedure ends up with minimal scarring as compared to other invasive surgical techniques.</span>
                </li>
              </ul>
            </section>

            {/* LIFT Surgery Benefits */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">LIFT Surgery Benefits: Effective Healing with Sphincter Preservation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                LIFT is a surgical technique that is used in the management of complex trans-sphincteric fistula. It significantly reduces the chances of faecal incontinence by preserving sphincter muscles.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The procedure involves accessing the fistula tract between the internal and external sphincter muscles. The tract is ligated and divided, allowing it to heal from the inside out.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To maximize the best outcomes, the distal tract is ablated with the help of laser energy.
              </p>
            </section>

            {/* Seton wiring */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Seton wiring: For Complex and Recurrent Fistula</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Seton Wiring involves placing a seton (a piece of surgical thread or wire) through the fistula tract to allow continuous drainage of pus and promote healing. Seton wiring is particularly useful for high or complex fistulas.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                There are two types of setons:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Cutting setons:</strong> Also known as Ksharsutra, the setons are coated with unique materials which gradually cut through the fistula tract.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Non-cutting setons:</strong> These are used to keep the tract open for drainage and are simple cotton or silk sutures.</span>
                </li>
              </ul>
            </section>

            {/* VAAFT */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">VAAFT ( Video Assisted Anal Fistula Treatment)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                VAAFT is a minimally invasive technique that uses a thin scope to visualize the entire fistula track through the camera. This allows for complete cleaning of the tract, identifying the internal opening, and closing the internal opening with a unique stapler.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                VAAFT is particularly useful for complex fistulas and offers the advantage of preserving the sphincter muscles.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This procedure has delivered excellent results with the combination of laser therapy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                After closing the internal opening, laser energy is used to ablate the entire track.
              </p>
            </section>

            {/* Are You a Candidate */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Are You a Candidate? Identifying the Right Treatment for Your Fistula</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr Kapil Agrawal starts the treatment process by identifying the type of fistula and then plans a customized treatment for you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Fistulas vary in size, location, and complexity. A detailed assessment helps him choose the safest and most effective treatment.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Types of Anal Fistula: Simple, Complex, High, Low, and Recurrent Cases</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fistulas are categorized by their path and complexity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                A simple, low fistula has a short, straight tunnel usually not involving muscles. A complex or high fistula may have multiple branches or tunnel deep through the sphincter muscles, requiring more advanced care. Recurrent fistulas are those that have come back after previous surgery, often needing specialized techniques.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Signs You Need Surgical Intervention: Discharge, Pain, Infection & Recurrence</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you experience persistent pus or fluid discharge, recurrent painful swellings or abscesses, constant skin irritation, or if a previously treated fistula has returned, it&apos;s a clear sign that surgical intervention is necessary.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Ensuring Best Results: Comprehensive Pre-Treatment Evaluation & Imaging</h3>
              <p className="text-gray-700 leading-relaxed">
                Dr Kapil Agrawal always believe that a successful outcome is built on precise diagnosis. We always advise MRI Fistulogram, which acts as a detailed roadmap, showing the exact course, branches, and internal opening of the fistula. This allows him to confidently plan the most effective and least invasive procedure tailored for you.
              </p>
            </section>

            {/* Your Seamless Journey */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Your Seamless Journey: Step-by-Step Care at Habilite Clinics, Delhi</h2>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Step 1: Detailed Consultation & Diagnosis (MRI Fistula, Proctoscopy)</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your journey with a detailed consultation and thorough examination. Dr Kapil Agrawal usually advise MRI Fistulogram—a painless scan that maps the fistula&apos;s exact path and provides him an accurate diagnosis.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Step 2: Day of Procedure: Advanced Technology in Expert Hands</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr Kapil Agrawal, fistula specialist surgeon, then performs your chosen advanced procedure high-precision technology. Your safety and comfort are our only focus from start to finish.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Step 3: Recovery & Discharge: Outpatient Focus or Short-Stay Care</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                You will be discharged from the hospital within 24 hours of surgery. You will receive clear instructions, medications, and a tailored diet chart for speedy recovery.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Step 4: Long-Term Wellness: Diet, Hygiene Advice & Follow-Up Care</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide timely guidance on diet, proper hygiene, and sitz baths (soaking in warm water) to promote healing. Scheduled follow-up visits allow us to monitor your progress and ensure complete recovery.
              </p>
            </section>

            {/* Real Patient Stories */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Real Patient Stories: Journeys to a Fistula-Free Life at Habilite Clinics</h2>
            </section>

            <div className="max-w-5xl mx-auto">
              <div className="defer-section">
                <CostCalculator serviceName="Anal Fistula Treatment" />
              </div>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <div className="defer-section">
                <FistulaTestimonials />
              </div>
              <div className="defer-section">
                <RecoveryTimeline />
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <div className="defer-section">
            <PostOperativeCare />
          </div>
          <div className="defer-section">
            <WhatsAppExpertChat serviceName="Anal Fistula Treatment" />
          </div>
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Begin Your Path to Permanent Fistula Relief */}
            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Begin Your Path to Permanent Fistula Relief in Delhi</h2>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Your choice of surgeon directly impacts your results, recovery experience, and long-term wellness. Dr. Kapil Agrawal&apos;s expertise in modern techniques ensures you get the most effective treatment, tailored just for you.
              </p>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Why Choosing a Specialist Fistula Surgeon in Delhi is Crucial for Your Results</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Kapil Agrawal, one of the best fistula surgeons in Delhi, ensures:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-base"><strong>Precise diagnosis</strong> - Comprehensive evaluation using advanced imaging techniques like MRI Fistulogram to map the exact fistula tract</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-base"><strong>Chooses the right modern procedure</strong> - Customized treatment plan based on your specific fistula type and complexity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-base"><strong>Minimises complications and recurrence</strong> - Expert technique and advanced technology reduce risks significantly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-base"><strong>Excellent outcomes with rapid recovery</strong> - Most patients return to normal activities within 3-4 days</span>
                  </li>
                </ul>
              </div>
            </section>

            <div className="defer-section">
              <FistulaFAQ />
            </div>
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
      {/* StructuredData moved to bottom to prevent blocking render and improve LCP */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} suppressHydrationWarning />
    </>
  )
}

