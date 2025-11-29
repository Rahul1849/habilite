import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import CircumcisionFAQ from '@/app/laser-surgery/circumcision/CircumcisionFAQ'
import CircumcisionTestimonials from '@/app/laser-surgery/circumcision/CircumcisionTestimonials'
import { blogPosts } from '@/data/blog'
import RecoveryTimeline from '@/components/services/RecoveryTimeline'

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
    url: 'https://www.habiliteclinics.com/laser-zsr-circumcision',
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
    canonical: 'https://www.habiliteclinics.com/laser-zsr-circumcision',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can newborns be circumcised through a stapler circumcision procedure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, ZSR stapler comes in various sizes. It is completely safe and provides excellent results in neonates and children. The procedure can be carried out under short GA and children can be discharged on same day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get stapler circumcision surgery even if I have an infected foreskin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The stapler or ZSR circumcision can be done even in infected skin with excellent results. However, patient might need to take antibiotics for a longer period of time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to visit a doctor to get the silicone ring removed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, you need not visit the doctor for the removal of silicon ring as it automatically comes out within 4-5 days after complete healing takes place. However, in 1% of patient\'s silicon ring has to be taken out by the surgeon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will circumcision affect my sexual drive or performance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The impact of circumcision on sexual drive is a complex phenomenon and results may vary individually. The findings are not consistent and sexual performance can be influenced by a variety of psychological & emotional factors. In a nutshell, circumcision per say if any has a very modest effect on performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is circumcision covered under insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost all the insurance companies cover this procedure as a cashless facility. Our clinic is partnered with some of the best hospitals in Delhi-NCR and provides cashless treatment with all the insurance companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I have pain after stapler circumcision surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stapler circumcision procedure is an almost painless procedure and patients are completely comfortable after the procedure. We advise patients to resume normal activities from the next day of surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it affect penis size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Circumcision doesn\'t affect the size of your penis. The size of penis is determined by various genetic factors, and individual variation is quite normal. There is no scientific evidence to support that circumcision increases the size of penis if performed during childhood period.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it affect sexual sensitivity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The impact of circumcision on sexual sensitivity has always been a matter of debate and individual experience may vary. While some studies have documented decreased sensitivity in circumcised patients, other studies have found no significant difference in sexual sensitivity between circumcised and uncircumcised individuals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it affect sperm production or overall fertility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several studies have been conducted to study the effect of circumcision procedure on sperm parameters like motility, sperm count and morphology. does not affect the overall fertility and neither increases the sperm production. These studies didn\'t document any significant change in the sperm parameters between circumcised and non-circumcised patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which circumcision is best?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laser circumcision is more effective as compared to the conventional methods of circumcision. Laser circumcision is performed as a daycare procedure that means that the person can go home on the same day. Healing is faster and easier and the patient can resume his normal routine within 2-3 days of the procedure',
      },
    },
    {
      '@type': 'Question',
      name: 'What are 3 benefits of male circumcision?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best benefit of male circumcision is that it increases the hygiene of penis and has a protective effect against three severely sexually transmitted diseases like HIV, Genital Herpes and Human Papilloma Virus. Human papilloma virus is one of the carcinogenic viruses leading to cancer of penis and cervix.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of stapler circumcision in Delhi, India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost of stapler circumcision in Delhi, India may vary. The average cost of circumcision can vary from Rs 30,000 to Rs. 40,000 depending upon the various factors. The various factors which can influence the cost of procedure include type of hospital, room category, choice of anesthesia, patient health, severity of condition and quality of stapler. However, at our center, we can complete the procedure at a package of approximately Rs 20000.',
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

export default function LaserZSRCircumcisionPage() {
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
              Best Circumcision Surgery in <span className="text-[#0891b2]">Delhi</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Complete Range of Procedures | Best in Class, USFDA Approved Treatment | No Bleeding and No Stitches | Same-Day Discharge | All Medical Insurance Accepted | EMI Options Available
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
              <ConsultationForm serviceName="Circumcision Surgery" serviceSlug="laser-zsr-circumcision" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is Circumcision</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Circumcision is a procedure which involves removal of foreskin present over the head or glans of the penis. Circumcision is a personal and often culturally influenced decision. It can also be done due to some medical complications. If you are considering circumcision for yourself or your child, it is crucial to consult with a specialist and discuss the implications and benefits based on your beliefs and medical considerations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Indications of Circumcision</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Severe pain while passing stools',
                  'Balanitis: It is a type of infection involving head or glans of penis. It usually occurs due to poor hygiene, improper fitting clothes and bacterial and fungus infections',
                  'Phimosis: Phimosis is a condition in which the patient is unable to retract the foreskin covering the glans or head of the penis, and in severe cases, Phimosis surgery may be required for effective treatment',
                  'Paraphimosis',
                  'Tight Foreskin',
                  'Balanoposthitis',
                  'Bleeding during Intercourse',
                  'Pain during Sexual Intercourse',
                  'Balanitis Xerotica Obliterans (BXO): An autoimmune condition which is characterized by extensive scarring of prepuce skin resulting in phimosis',
                  'Chronic or Recurrent Urinary Tract Infection',
                ].map((item) => (
                  <div key={item} className="bg-white border border-gray-200 rounded-lg p-4 flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Types of Circumcision</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Conventional or Open Circumcision</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Conventional or traditional circumcision is the primitive method in which surgeon uses surgical knife and electrical cautery to remove the foreskin present over the glans.
                  </p>
                  <p className="text-gray-700 text-sm">
                    The procedure can be carried out in general anaesthesia or local anaesthesia depending upon the patient condition, age and preferences. The procedure is associated with higher amount of bleeding, formation of hematomas and delayed recovery.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Laser Circumcision</h3>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Precision:</strong> Laser technology is extremely precise and doesn&apos;t affect normal surrounding skin and tissues.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Reduced bleeding:</strong> Laser procedure seals the blood vessels more efficiently and minimizes formation of blood clots or hematoma.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Faster Healing:</strong> Due to better precision and reduced bleeding, it promotes faster healing of wound.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Reduced Infection:</strong> Laser procedures are found to have significantly reduced chances of infection.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Minimized Pain:</strong> Laser circumcision is associated with less pain due to reduced nerve stimulation.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">ZSR or Stapler Circumcision</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    It is the best and most advanced technique which has revolutionized the circumcision procedure. The procedure can be carried out under general anaesthesia or local anaesthesia. During the procedure, the surgeon employs a cylindrical device which automatically cuts the foreskin and seals the bleeding vessels with the help of silicon ring and micro stapler pins. The procedure typically takes 10-15 minutes and the patient can go back home 2 hours after the procedure. The procedure is extremely safe both for children and adults and has minimal chance of infection and has faster healing rates.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">The advantages of stapler (ZSR) circumcision are –</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Surgery time is around 10 minutes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Reduced bleeding: Laser procedure seals the blood vessels more efficiently and minimizes formation of blood clots or hematoma.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Minimal blood loss</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Minimal pain</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Faster recovery</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>The chances of complications are almost nil</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Lower chances of infection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of ZSR Circumcision Surgery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Bloodless Procedure', description: 'ZSR technique ensures minimal to no bleeding during the procedure' },
                  { title: 'No Stitches', description: 'The stapler device eliminates the need for stitches, reducing recovery time' },
                  { title: 'Painless Procedure', description: 'Minimal pain during and after the procedure' },
                  { title: 'Same Day Discharge', description: 'Patients can go home within 2 hours after the procedure' },
                  { title: 'No Follow up', description: 'Silicone ring automatically detaches in 4-5 days, minimal follow-up needed' },
                  { title: 'Rapid Recovery', description: 'Faster healing and return to normal activities within 1-2 days' },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                    <CheckCircle2 className="text-[#0891b2] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-700 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Dr. Kapil Agrawal for Circumcision Surgery?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Expertise & Technology</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Experienced Surgeons:</strong> Our clinic has a team of highly skilled, experienced and well-trained surgeons dedicated to providing the best care and a professional experience.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Complete Range of Procedures:</strong> We offer a complete range of circumcision procedures including the latest and most advanced options. Our entire range allow clients to choose the approach that aligns best with their requirements.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Patient Care & Support</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Excellent Results:</strong> We are committed to deliver exceptional results. Our strict No Quality Compromise Policy ensures that our clients are satisfied with the outcomes of their circumcision procedures.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Cashless Insurance Options:</strong> We understand the importance of financial convenience. Our services include hassle-free, cashless insurance options, providing our clients with a seamless and stress-free experience.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Best Post-Operative Care:</strong> We are dedicated to provide our patients excellent post operative care. We provide top-notch post-operative care to ensure a smooth surgical journey with exceptional satisfactory results.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="max-w-5xl mx-auto">
              <CostCalculator serviceName="Circumcision Surgery" />
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <CircumcisionTestimonials />
              <section className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                      <p className="text-gray-700 text-sm">
                        Patients walk out the same day, resume desk work within 1–2 days, and return to routine in about a week. Silicone rings from ZSR devices shed naturally in 4–5 days.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Care Tips</p>
                      <p className="text-gray-700 text-sm">
                        Keep the site clean and dry, wear relaxed clothing, avoid strenuous workouts for two weeks, and follow the pain relief plan advised by Dr. Kapil. Our nursing team schedules virtual or in-person reviews to track healing.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <RecoveryTimeline />
            </div>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Circumcision Surgery" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
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
          </div>
        </div>
      </div>
    </>
  )
}

