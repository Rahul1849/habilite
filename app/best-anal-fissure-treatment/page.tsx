import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import FissureFAQ from '@/app/laser-surgery/anal-fissure/FissureFAQ'
import FissureTestimonials from '@/app/laser-surgery/anal-fissure/FissureTestimonials'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Best Anal Fissure Treatment in Delhi - Dr. Kapil Agrawal | Laser Surgery & Botox | 23 Years Experience',
  description: 'Dr. Kapil Agrawal offers the best anal fissure treatment in Delhi with non-surgical options, Botox injections, and advanced laser surgery. Complete range of procedures, same-day discharge, minimal recurrence. 23 years experience, 7000+ successful surgeries. Book consultation now.',
  keywords: [
    'best anal fissure treatment delhi',
    'anal fissure treatment delhi',
    'anal fissure surgery delhi',
    'chronic anal fissure delhi',
    'laser anal fissure treatment delhi',
    'best anal fissure surgeon delhi',
    'anal fissure botox treatment delhi',
    'Dr. Kapil Agrawal anal fissure',
    'anal fissure specialist delhi',
  ],
  openGraph: {
    title: 'Best Anal Fissure Treatment in Delhi - Dr. Kapil Agrawal | Laser Surgery & Botox',
    description: 'Expert anal fissure treatment by Dr. Kapil Agrawal in Delhi. Non-surgical, Botox, and Laser surgery options with permanent outcomes. Book consultation.',
    url: 'https://www.habiliteclinics.com/best-anal-fissure-treatment',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/anal-fissure-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Anal Fissure Treatment in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/best-anal-fissure-treatment',
  },
}

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Laser Surgery the most appropriate treatment for my specific anal fissure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laser surgery is usually recommended for severe acute anal fissures and chronic or recurrent anal fissures that do not respond to conservative treatments. Your surgeon will evaluate your condition and determine if laser surgery is the most suitable option for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any alternative treatments I should consider before opting for surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there are several non-surgical treatments for anal fissures. It depends upon the condition of the anal fissure and the pain and spasm associated with it. Discuss all available options with your doctor to find the best approach for your situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the expected success rate of Laser surgery for anal fissures?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The success rate of laser surgery varies, but it is generally very high for resolving symptoms of anal fissures. The success rate also depends upon the surgeon\'s expertise and the quality of the laser machines. We boast of an almost 100% success rate in the management of anal fissures following laser surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is the recovery period after the Laser procedure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can expect a significant decrease in pain following laser surgery, and pain completely subsides in four days during the passage of stools. However, recovery may vary depending on the condition and chronicity of the anal fissure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the duration of stay after laser surgery for anal fissure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of the patients can be discharged within 12 hours of surgery. You do not require bed rest and can gradually resume your normal activities within 24-48 hours of surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I have to stay in hospital after Botox treatment for anal fissure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Botox treatment for anal fissure is a simple procedure and the patients get discharged within 3 hours of procedure. The recovery is very fast and the results are excellent with almost zero risk of complications.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best treatment for anal fissure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best treatment for anal fissure depends upon the pain, severity of symptoms and the complexity of fissure. Depending upon these factors, the surgeon can recommend you non-surgical options, Botox injections or laser surgery. We strongly believe that treatment should be customized and tailored according to the condition of the patient.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the chances of fissure coming back after treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proper diagnosis, choosing the right modality of treatment, avoiding constipation and maintaining a healthy life style ensures almost zero chances of recurrence. However, prolonged constipation and inadequate treatment of anal fissure can result anal fissure coming back in 2-3% of patients.',
      },
    },
  ],
}

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Best Anal Fissure Treatment',
  description: 'Expert anal fissure treatment by Dr. Kapil Agrawal in Delhi. Non-surgical, Botox, and Laser surgery options with permanent outcomes.',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
  },
  procedureType: 'Laser Anal Fissure Surgery',
  followup: 'Regular follow-up appointments and post-operative care',
  preparation: 'Pre-surgery consultation, medical evaluation, and preparation instructions',
}

export default function BestAnalFissureTreatmentPage() {
  const fissureBlogs = blogPosts
    .filter((post) => post.category.toLowerCase().includes('fissure') || post.tags.some((tag) => tag.toLowerCase().includes('fissure')))
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
              src="/images/anal-fissure-surgeon-delhi-india.webp"
              alt="Best Anal Fissure Treatment in Delhi - Dr. Kapil Agrawal | Expert Laser Surgery & Botox | 23 Years Experience"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-anal-fissure-treatment-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Anal Fissure Treatment in <span className="text-[#0891b2]">Delhi</span>
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
                serviceName="Anal Fissure Treatment"
                serviceSlug="best-anal-fissure-treatment"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Understanding Anal Fissures */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Understanding Anal Fissures</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Anal fissures can be broadly classified as &quot;Acute&quot; or &quot;Chronic&quot; based on their duration and characteristics.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                An <strong>Acute Anal Fissure</strong> resembles a fresh cut and responds well to conservative or non-surgical methods. About 60% to 70% Anal fissures usually heal within 2-3 weeks with the help of medicines.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                When Acute Anal Fissure fails to heal for more than eight weeks, it is termed as <strong>Chronic Anal Fissure</strong>. Such fissures develop excessive swelling, scar tissue, and skin tags. These fissures usually respond to surgical intervention due to continuous pain, spasms, and tissue ischemia.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-[#0891b2]/20 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Key Characteristics Comparison</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Acute Anal Fissure:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Resembles a fresh paper cut</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Heals within a few weeks with conservative care</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Less likely to have associated complications</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Chronic Anal Fissure:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Lasts for more than eight weeks</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>May have excess swelling and scar tissue</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Often accompanied by skin tags</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Requires more intensive treatment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Causes */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Identifying the Common Causes of Anal Fissures</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Anal fissures are often the result of trauma to the sensitive lining of the anus. The primary cause is typically the passage of hard or large stools, which can lead to tears in the anal canal. Other common factors include:
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Constipation, leading to excessive straining</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Chronic diarrhoea</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Anal intercourse</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Childbirth</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Less frequently, anal fissures may be associated with inflammatory bowel diseases (e.g., Crohn&apos;s disease), infections such as syphilis, HIV, or tuberculosis, or anal cancer.
              </p>
            </section>

            {/* Symptoms */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Symptoms of Anal Fissure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some of the most common symptoms of Anal Fissures are:
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Bright red blood on the toilet paper or stool</strong> after a bowel movement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Severe Pain</strong> during and after bowel movements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Skin tag or lump</strong> near the anal area</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                It&apos;s crucial to differentiate these signs from other colorectal conditions, such as hemorrhoids, which may present similarly. Early recognition and treatment of anal fissures are essential to prevent complications and improve outcomes.
              </p>
            </section>

            {/* Best Treatment */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Best Treatment for Anal Fissure</h2>
              
              {/* Conservative Treatment */}
              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Conservative or Non-Surgical Treatment of Anal Fissure</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    This is mainly indicated for acute anal fissures, which are associated with mild to moderate anal spasms.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Lifestyle and Dietary Changes:</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        The basis of treating anal fissures begins with simple lifestyle and dietary adjustments aimed at preventing constipation and reducing strain during bowel movements.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                          <span><strong>High Fiber Diet:</strong> Consuming a diet high in fiber help soften stool, making it easier to pass and reducing the risk of further injury to the anal area.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                          <span><strong>Hydration:</strong> Adequate fluid intake is another important factor for maintaining soft stool consistency. It is recommended that you drink plenty of water throughout the day.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                          <span><strong>Regular Exercise:</strong> Regular physical activity can help stimulate bowel movements and prevent constipation.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Topical Treatments:</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Local application of certain ointments provides relief from discomfort and promotes healing.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                          <span><strong>Topical Anaesthetics:</strong> These creams contain local anesthetics, which can numb the area and reduce pain.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                          <span><strong>Calcium Channel Blockers:</strong> These ointments relax the sphincter muscles and stimulate blood flow, and help in the healing of anal fissures.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Medications:</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Oral medications may be prescribed to manage symptoms and support healing.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                          <span><strong>Stool Softeners:</strong> Avoiding hard stools is a significant component in the healing of anal fissures. Avoiding passage of hard stools helps in preventing further insult to anal fissures and aids in the healing process.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                          <span><strong>Pain Relievers:</strong> Nonsteroidal anti-inflammatory drugs (NSAIDs) can help manage pain and inflammation. However, they should be used cautiously and under the guidance of a specialist doctor.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Botox Injections */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Botox Injections in Treating Anal Fissures</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Botox injection is one of the minimally invasive treatment options for chronic anal fissures. Botox injection is injected into the internal anal sphincter muscle. It causes temporary paralysis of the muscle.
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    As a result, the tone of the muscle decreases, and the spasm and tightness of the anal canal significantly decrease within a few hours. This causes relief from pain while passing stools and allows fissures to heal within a couple of days.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Recovery:</strong> Patients can generally resume normal activities shortly after the procedure, though they are advised to avoid strenuous activities for a day or two.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Healing Rates:</strong> Clinical trials have shown that Botox injections result in 80-100% healing rates within a few days of treatment.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Pain Relief:</strong> Many patients experience significant pain relief within a few days after the injection.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Laser Surgery */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Laser Surgery for Anal Fissures</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    When conservative treatments and medications fail to heal the fissure, surgical options may be necessary. Surgery is typically reserved for chronic anal fissures.
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    <strong>Lateral Internal Sphincterotomy</strong> performed with the help of Laser therapy has become the best treatment for anal fissures. It involves making a small incision in the internal anal sphincter muscle to reduce tension and promote healing.
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    It is usually performed as an outpatient procedure, and patients are discharged within 12 hours of surgery. With almost 100% healing rates and zero percent recurrence, laser surgery for anal fissures is one of the most promising treatments for management of anal fissures.
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits of Laser Treatment */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Laser treatment for Anal fissure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Bloodless Procedure', description: 'Laser surgery is virtually bloodless, minimizing bleeding during the procedure.' },
                  { title: 'No Stitches', description: 'No stitches required, reducing post-operative discomfort and complications.' },
                  { title: 'Painless Procedure', description: 'Minimal pain during and after the procedure compared to traditional surgery.' },
                  { title: 'Same Day Discharge', description: 'Most patients can be discharged within 12 hours of surgery.' },
                  { title: 'No Follow up', description: 'Minimal follow-up required, allowing faster return to normal activities.' },
                  { title: 'Rapid Recovery', description: 'Faster recovery time with minimal downtime compared to conventional methods.' },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                    <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-700 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Dr. Kapil Agrawal for Anal Fissure Treatment?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal, with over 23 years of experience, is well known for his expertise in the management of colorectal conditions, including anal fissures. He has been associated with top-notch hospitals in Delhi, ensuring access to the best facilities and medical care.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Expertise & Approach</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Dr. Kapil Agrawal&apos;s comprehensive treatment approach addresses all aspects of anal fissures, focusing on curing the condition with medicines in 70% of patients, thereby avoiding invasive procedures.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Dr Kapil Agrawal&apos;s expertise ensures a high success rate with Botox injections, demonstrating our commitment to effective, patient-centric care.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>He utilizes the best quality laser machines, ensuring optimal results and almost zero recurrences, setting him apart in providing cutting-edge treatment.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Patient Care & Support</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Dr Agrawal&apos;s team includes dedicated nutritionists who provide customized diets to promote healing and prevent constipation, ensuring a holistic approach to treatment.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>23+ years of surgical experience with 7000+ successful surgeries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#f56336] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Complete range of treatment options from non-surgical to advanced laser procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="max-w-5xl mx-auto">
              <CostCalculator serviceName="Anal Fissure Treatment" />
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <FissureTestimonials />
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
              <section className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                      <p className="text-gray-700 text-sm">You can expect a significant decrease in pain following laser surgery, and pain completely subsides in four days during the passage of stools. Most patients can resume normal activities within 24-48 hours of surgery.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                      <p className="text-gray-700 text-sm">Most patients do not require any follow-ups after laser surgery. For Botox treatment, patients are discharged within 3 hours of the procedure with excellent results and almost zero risk of complications.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Anal Fissure Treatment" />
        </div>
      </div>
    </>
  )
}

