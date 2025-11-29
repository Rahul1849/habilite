import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import PilesFAQ from '@/app/laser-surgery/hemorrhoids-piles/PilesFAQ'
import PilesTestimonials from '@/app/laser-surgery/hemorrhoids-piles/PilesTestimonials'
import { blogPosts } from '@/data/blog'
import StructuredData from '@/components/seo/StructuredData'
import { RecoveryTimeline } from '@/components/services/RecoveryTimeline'
import { getBreadcrumbSchema, getFAQSchema, getMedicalProcedureSchema } from '@/lib/seo/schemaBuilders'

export const metadata: Metadata = {
  title: 'Best Surgeon for Piles in Delhi - Dr. Kapil Agrawal | Laser Piles Treatment | 23 Years Experience',
  description:
    'Dr. Kapil Agrawal is one of the best piles doctor in Delhi with 23 years experience. Expert in laser surgery, Stapler, and DGHAL procedures for piles treatment. USFDA approved laser, no cuts, same-day discharge. Book consultation now.',
  keywords: [
    'best piles surgeon delhi',
    'laser piles treatment delhi',
    'piles surgery delhi',
    'hemorrhoids treatment delhi',
    'best piles doctor delhi',
    'laser piles surgery delhi',
    'stapler piles surgery delhi',
    'DGHAL piles surgery delhi',
    'Dr. Kapil Agrawal piles',
    'piles specialist delhi',
  ],
  openGraph: {
    title: 'Best Surgeon for Piles in Delhi - Dr. Kapil Agrawal | Laser Piles Treatment',
    description: 'Expert laser piles treatment by Dr. Kapil Agrawal in Delhi. USFDA approved laser, no cuts, same-day discharge. Book consultation.',
    url: 'https://www.habiliteclinics.com/best-laser-piles-surgeon-in-delhi',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/piles-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Surgeon for Piles in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/best-laser-piles-surgeon-in-delhi',
  },
}

const pilesFaqs = [
  {
    question: 'What is the best treatment for piles?',
    answer:
      'Treatment depends on grade. Early stages are managed medically, while grade II–III respond best to laser surgery and grade IV often needs stapler hemorrhoidopexy.',
  },
  {
    question: 'What are the chances of recurrence after laser surgery?',
    answer:
      'Recurrence rates are around 4–5% and can be minimised by proper patient selection, using premium USFDA-approved lasers, and preventing constipation post-surgery.',
  },
  {
    question: 'Is laser treatment safe for piles?',
    answer:
      'Yes. Laser hemorrhoidoplasty is minimally invasive, uses precise USFDA-approved energy, and preserves surrounding tissue with minimal side effects.',
  },
  {
    question: 'Which is the best surgery for piles?',
    answer:
      'Laser surgery offers painless recovery and tiny wounds. Stapler or DGHAL options are chosen for advanced grades based on anatomy and symptoms.',
  },
  {
    question: 'What is the cost of piles surgery?',
    answer: 'Laser piles surgery typically ranges from ₹30,000 to ₹90,000 in India depending on grade, technology, and hospital category.',
  },
]

const faqSchema = getFAQSchema({
  title: 'Laser Piles Treatment FAQs',
  description: 'Details on suitability, recurrence, safety, and cost for laser piles surgery by Dr. Kapil Agrawal.',
  faqs: pilesFaqs,
})

const procedureSchema = getMedicalProcedureSchema({
  name: 'Laser Piles Treatment',
  description:
    'USFDA-approved laser, stapler, and DGHAL procedures for hemorrhoids performed by Dr. Kapil Agrawal with same-day discharge and minimal recurrence.',
  url: '/best-laser-piles-surgeon-in-delhi',
  procedureType: 'Laser Hemorrhoidectomy',
  bodyLocation: 'Anal Canal / Rectum',
  medicalSpecialty: ['ColorectalSurgery', 'LaserSurgery'],
  followup: 'Structured follow-up calls, fibre-rich diet plans, and pelvic floor guidance for 4 weeks.',
  preparation: 'Preoperative consultation, proctoscopy, blood work, and bowel preparation.',
  howPerformed:
    'Laser fibre is inserted into the hemorrhoidal tissue to shrink it from within, preserving sphincter function and allowing same-day discharge.',
})

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treatments', url: '/treatments' },
  { name: 'Laser Piles Treatment', url: '/best-laser-piles-surgeon-in-delhi' },
])

export default function BestLaserPilesSurgeonPage() {
  const pilesBlogs = blogPosts
    .filter(
      (post) =>
        post.category.toLowerCase().includes('piles') ||
        post.category.toLowerCase().includes('hemorrhoid') ||
        post.tags.some((tag) => tag.toLowerCase().includes('piles') || tag.toLowerCase().includes('hemorrhoid')),
    )
    .slice(0, 3)

  return (
    <>
      <StructuredData data={procedureSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      <div className="pt-20 pb-16">
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/piles-surgeon-delhi-india.webp"
              alt="Best Surgeon for Piles in Delhi - Dr. Kapil Agrawal | Expert Laser Piles Treatment | 23 Years Experience"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-piles-surgeon-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Surgeon for Piles in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Complete Range of Procedures | Best in Class, USFDA Approved Laser Treatment | No Cuts and No Stitches | Same-Day Discharge | All Medical Insurance Accepted | EMI Options Available
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Experience' },
                { icon: Users, text: '5000+ Successful Procedures' },
                { icon: TrendingUp, text: 'USFDA Approved Laser' },
                { icon: Clock, text: 'Same-Day Discharge' },
              ].map((highlight) => (
                <div key={highlight.text} className="flex items-center gap-2 bg-[#0891b2]/10 px-4 py-2 rounded-full">
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
              <ConsultationForm serviceName="Laser Piles Treatment" serviceSlug="best-laser-piles-surgeon-in-delhi" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Dr. Kapil Agrawal - Best Piles Doctor in Delhi, India</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal is one of the best piles doctor in Delhi, India. With an overall experience of 23 years, he is renowned for his expertise in performing all the latest and most
                effective treatment modalities for piles, including laser surgery, Stapler, and DGHAL surgeries.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                He is empaneled with some of the best hospitals offering the best piles treatment of piles. Supported by a top team of medical professionals and nutritionists, Dr Agrawal is dedicated
                to providing comprehensive care and guidance to prevent recurrences and ensure the best patient outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr. Kapil Agrawal, a laparoscopic and laser surgeon in Delhi, is widely regarded as the best piles surgeon in Delhi, India. With over 23 years of experience and more than 5,000
                successful piles procedures, he is known for delivering excellent patient outcomes with minimal recurrence rates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is Piles?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When the veins located in the lower rectum or anus become inflamed and swollen, then this condition is known as piles or haemorrhoids. The size and location of these growths can vary
                depending on the extent of the disease.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">It is a gradually progressive disease and one of the most common causes of painless bleeding while passing stools.</p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Types of Piles</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hemorrhoids can be either internal, external or thrombosed, and the symptoms can also vary based on their positioning. Recognizing the symptoms of each type can help you out in timely
                diagnosis and treatment.
              </p>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">1. Outer Hemorrhoids (Piles)</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    These are found under the skin around the anus. They can be painful sometimes and may also cause symptoms like swelling or visible lumps. Bleeding can also occur during passing of
                    stools.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">2. Internal Hemorrhoids (Piles)</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Positioned inside the rectum, internal haemorrhoids are mostly painless. However, putting excess strain during bowel movements can result in bleeding or in prolapsed hemorrhoid.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mt-3">
                    <p className="font-semibold text-gray-900 mb-2">Internal piles can prolapse as the disease progress. They can be classified into 4 grades:</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Grade 1: Only swollen veins or vessels are present, but no prolapse.',
                        'Grade 2: Prolapse while passing stools, but piles go inside on their own.',
                        'Grade 3: Prolapse while passing stools and must be reduced with fingers.',
                        'Grade 4: Permanent prolapse with continuous symptoms.',
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">3. Thrombosed Hemorrhoids (Piles)</h3>
                  <p className="text-gray-700 text-sm">These hemorrhoids are formed when blood collects and clots in an external hemorrhoid causing painful swollen lumps.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Best Treatment for Piles by Dr. Kapil Agrawal</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Habilite clinics, we provide customized piles treatment in Delhi. It starts from initial-stage non-surgical options to advanced, painless surgical techniques. Each method is chosen
                on the basis of the intensity of the hemorrhoid to have better recovery and long-term relief.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: '1. Medical or Non-Surgical Treatment for Piles',
                    desc: 'For piles at the initial stage, usually non-surgical treatments are recommended that may provide relief at your symptoms and prevent progress in piles. These methods are effective at dealing with minor discomforts, still they do not offer permanent cure.',
                    list: ['High-fiber diet', 'Increased fluid intake', 'Topical creams', 'Oral medications to reduce inflammation and bleeding', 'Lifestyle and diet changes to avoid constipation'],
                  },
                  {
                    title: '2. Laser Surgery for Piles - Latest & Painless Treatment for Piles',
                    desc: 'Laser surgery is a highly precise, minimally invasive and painless process. It can effectively target and remove hemorrhoid tissues with use of focused laser beams, thus making it best to treat Grade II and III piles.',
                    list: ['No cutting or stitches', 'Seals bleeding vessels during the procedure', 'Minimal pain and fast recovery', 'Very low recurrence rate'],
                  },
                  {
                    title: '3. Stapler Surgery for Piles - Painless Treatment for Piles',
                    desc: 'Stapled hemorrhoidopexy is the best treatment for prolapsed, symptomatic Grade III and IV level of piles. This procedure is a quick and painless treatment for Piles that seals the bleeding vessels with use of stapling devices.',
                    list: ['No external cuts or dressings', 'Pain-free recovery', 'Faster return to daily activities', 'Low risk of recurrence'],
                  },
                  {
                    title: '4. DGHAL Surgery for Piles',
                    desc: 'Doppler-guided Hemorrhoidal Artery Ligation (DGHAL) is a minimally invasive procedure that can effectively ligate blood vessels supplying hemorrhoids using Doppler ultrasound guidance.',
                    list: ['Latest, safe, and minimally invasive', 'Perfect for bleeding or recurrent piles', 'Repositions prolapsed tissue', 'Sooner recovery and minimal discomfort'],
                  },
                ].map((card) => (
                  <div key={card.title} className={`rounded-xl p-6 ${card.title.includes('Laser') || card.title.includes('DGHAL') ? 'bg-gradient-to-br from-orange-50 to-orange-100/50 border border-[#f56336]/20' : 'bg-gradient-to-br from-cyan-50 to-blue-50 border border-[#0891b2]/20'}`}>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{card.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{card.desc}</p>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {card.list.map((item) => (
                          <li key={item} className="flex items-start">
                            <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Dr. Kapil Agrawal Should Be Your #1 Choice for Piles Surgery?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Choosing the right expert is essential for effective, painless, and long-lasting piles treatment. At Habilite Clinics, Dr. Kapil Agrawal provides precise treatment for piles with
                latest technologies and a customized treatment tailored to individual patient needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Best Laser Piles Surgeon in Delhi', desc: '23+ years of expertise and 5000+ successful procedures.' },
                  { title: 'Complete Range of Treatments', desc: 'Laser, Stapler & DGHAL surgeries performed with precision.' },
                  { title: 'USFDA-Approved Laser Technology', desc: 'Minimally invasive, painless, and stitch-free solutions.' },
                  { title: 'Same-Day Discharge', desc: 'Faster healing and minimal downtime.' },
                  { title: 'Cashless Insurance & EMI Options', desc: 'Flexible payment support for every patient.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="max-w-5xl mx-auto">
              <CostCalculator serviceName="Laser Piles Treatment" />
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <PilesTestimonials />
              <section className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                      <p className="text-gray-700 text-sm">
                        Most patients can resume normal activities within 2-3 days after laser piles treatment, with minimal discomfort. Patients are typically discharged within 24 hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                      <p className="text-gray-700 text-sm">
                        Regular follow-up appointments ensure optimal recovery and address any concerns. Dr. Kapil Agrawal provides comprehensive post-operative care.
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
          <WhatsAppExpertChat serviceName="Laser Piles Treatment" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <PilesFAQ />
            {pilesBlogs.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <TrendingUp className="text-[#0891b2] mr-3" size={32} />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Piles Blogs</h2>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">Expert advice on piles treatment, recovery, and laser surgery options</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pilesBlogs.map((post) => (
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
                        <h3 className="text-base font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#0891b2] transition-colors">{post.title}</h3>
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


