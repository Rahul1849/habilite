import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import LipomaFAQ from '@/app/laser-surgery/lipoma/LipomaFAQ'
import LipomaTestimonials from '@/app/laser-surgery/lipoma/LipomaTestimonials'
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
    url: 'https://www.habiliteclinics.com/lipoma-treatment',
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
    canonical: 'https://www.habiliteclinics.com/lipoma-treatment',
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
        text: 'Lipomas are generally not dangerous. However, lipomas that are rapidly growing must be removed immediately and sent for biopsy to assess if they are cancerous. If the lipomas are small and not increasing in size, they are usually harmless.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you treat a lipoma without surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lipomas usually require some form of surgical intervention for permanent results. However, very small and soft lipomas can be treated with the instillation of steroid injections directly into lipomas. High recurrence rates are associated with this procedure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can lipomas be treated with ayurvedic medicines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The role of ayurvedic medicines is highly controversial in managing lipomas, especially multiple and large in size.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can lipomas grow back at the same site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proper and completely excised lipomas do not grow back in the same place. Lipomas that are large or hard in consistency when removed by liposuction can result in incomplete removal of lipomas, resulting in recurrence.',
      },
    },
    {
      '@type': 'Question',
      name: 'At what size should lipoma be reduced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The decision to remove lipomas generally depends upon the symptoms and the progression of lipoma. Lipomas that are increasing in size should be removed immediately. However, lipomas over 3cm in length should be removed for cosmetic purposes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to cure lipoma by exercise?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once formed, lipomas cannot be cured by exercise. However, maintaining a healthy weight is always beneficial in managing lipomas. It has been seen that maintaining a healthy weight can reduce the further formation of lipomas in a few individuals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can lipoma cream be used for lipoma removal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lipoma cream can never remove or dissolve lipomas. It can only help to relieve pain, discomfort, or irritation caused by lipoma. One should never buy these creams to remove lipomas as these creams are ineffective in curing lipomas.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to stop lipoma from spreading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no definitive way to prevent the spreading of lipoma, especially for patients with a genetic predisposition. However, maintaining a healthy weight and lifestyle definitely reduces the formation of lipomas. A healthy diet and less use of junk foods also help to detoxify the body and prevent the further formation of lipomas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can lipomas dissolve on their own?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lipomas can never disappear on their own. However, significantly reducing weight and maintaining a healthy lifestyle might reduce the size of lipomas to a certain extent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the special diets to prevent the spreading of lipoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Certain fruits, like blueberries, raspberries, citrus fruits, apples, plums, etc., help detoxify the body and reduce the chances of lipoma formation. Green leafy vegetables and omega-3 fatty acids also decrease inflammation and growth of lipomas.',
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

export default function LipomaTreatmentPage() {
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
              Best Lipoma Treatment in <span className="text-[#0891b2]">Delhi</span>
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
              <ConsultationForm serviceName="Lipoma Treatment" serviceSlug="lipoma-treatment" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Dr. Kapil Agrawal - Best Lipoma Specialist Doctor in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr Kapil Agrawal offers the best lipoma treatment in Delhi. His vast experience and expertise to perform complete range of lipoma procedures makes him one of the best specialist surgeon in Delhi for the management of lipomas. Depending upon the patient&apos;s requirement, he is offering best treatment of lipomas at some of the best hospitals in Delhi and as well at his own clinic at affordable prices.
              </p>
              <p className="text-gray-700 leading-relaxed">
                He has performed more than 3000 lipoma procedures with excellent cosmetic results. Customized treatment plans ensure that each patient receives the most appropriate technique based on the size, location, and consistency of lipomas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is Lipoma?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lipomas are slowly growing lump of non-cancerous fat cells that form between the skin and underlying muscle layer.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>They are usually soft and smooth to touch and can vary in size.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>They are usually painless and tend to move easily when pressed.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>They can form anywhere in the body but most commonly occur on the neck, shoulders, back, abdomen, arms, and thighs.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>They are usually harmless but can cause discomfort or pain depending on their size and location.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Different Types of Lipoma</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                There are four main types of lipomas:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Subcutaneous Lipomas</h3>
                  <p className="text-gray-700 text-sm">
                    Subcutaneous Lipomas are the most common type of lipoma. They form just under the skin, and are usually soft and rubbery to the touch. Subcutaneous lipomas can occur anywhere on the body, but are most commonly found on the trunk, shoulders, neck, and arms.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Intramuscular Lipomas</h3>
                  <p className="text-gray-700 text-sm">
                    Intramuscular Lipomas form within the muscles, and are often firm and Painful to the touch. Intramuscular lipomas are most commonly found in the thigh or shoulder region.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Intermuscular Lipomas</h3>
                  <p className="text-gray-700 text-sm">
                    Intermuscular Lipomas form between the muscles, and can be either soft or hard to the touch. Intermuscular lipomas are most commonly found in the forearm or calf region.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Visceral Lipomas</h3>
                  <p className="text-gray-700 text-sm">
                    Visceral Lipomas form inside the body cavities, including around organs such as the heart, kidneys, or liver. Visceral lipomas are typically not palpable from the outside of the body.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Causes of Lipoma</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The exact cause of lipomas is never established. However, some factors that may contribute to the development of lipomas include:
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <span className="font-semibold">Genetics:</span> Lipomas can develop due to genetic tendency resulting in formation of multiple lipomas all over body.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <span className="font-semibold">Injury:</span> Although rare, but sometimes trauma or injury can trigger the growth of lipomas.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <span className="font-semibold">Conditions:</span> Certain congenital conditions like Adiposis Dolorosa or Madelung&apos;s disease result in the formation of multiple lipomas. Certain rare conditions like Gardner&apos;s syndrome or Cowden syndrome also increase the risk for lipoma formation.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Diagnosis of Lipomas</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lipomas can be diagnosed in almost all cases with physical and clinical examination. However additional tests may be recommended in certain cases which include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Imaging Studies</h3>
                  <p className="text-gray-700 text-sm">
                    Ultrasound, MRI, or CT scans can provide detailed images of the lump and its location within the body.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">FNAC or Biopsy</h3>
                  <p className="text-gray-700 text-sm">
                    Rarely, a small tissue sample or few fat cells may be taken and examined under a microscope to confirm the diagnosis.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Best Treatment Options for Lipoma</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Observation</h3>
                  <p className="text-gray-700 text-sm">
                    As lipomas are usually harmless, simple observation and no intervention is all required for small, non-growing lipomas.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Liposuction for Lipomas</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Liposuction plays a significant role in the management of lipomas but has its own indications and limitations. It is most effective for lipomas which are very superficial, small and soft in consistency.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Advantages:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>The main advantage of liposuction is minimally invasive procedure resulting in rapid recovery and better cosmetic outcomes in aesthetically sensitive areas like face or neck.</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-gray-900 mb-2 text-sm mt-3">Limitations:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>The major limitation of this procedure is its non-suitability for deep lipomas, large lipomas or lipomas near blood vessels or nerves.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Sometimes, liposuction may result in incomplete removal of lipomas resulting in recurrence.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-[#f56336]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Pinch Technique for Lipomas</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    This is one of the best treatment options for the treatment of lipomas. This technique can be performed in almost every case of lipomas and has least complication rates.
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    The procedure involves use of highly specialized instruments to elevate the lipoma from underlying tissues. A sharp tool is then introduced to cut around base of lipoma and remove it from underlying tissues. The wound is then allowed to heal on its own.
                  </p>
                  <p className="text-gray-700 text-sm">
                    This technique is not used for very large and deep lipomas.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Laser Procedure for Lipomas</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Laser therapy has not gained much popularity in the treatment of lipomas. This is because of incomplete destruction of lipomas resulting in recurrence of lipomas.
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    Laser therapy works by delivering focused light energy that is absorbed by the fat cells within the lipoma. This absorption generates heat, which leads to thermal damage and subsequent breakdown of the fat cells. However, hard lipomas and large lipomas may not completely break down resulting in recurrences.
                  </p>
                  <p className="text-gray-700 text-sm">
                    The effectiveness of laser therapy for lipomas can vary depending on the size, location, and characteristics of the lipoma. Small, superficial lipomas may respond well to laser treatment, whereas larger or deeper lipomas may require alternative or adjunctive treatments.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-6 border border-amber-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Steroid Injections into Lipomas</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Direct instillation of steroids into the lipomas can sometimes shrink smaller lipomas. However, this technique is less commonly used due to multiple sessions, incomplete removal of lipomas and higher recurrences.
                  </p>
                  <p className="text-gray-700 text-sm">
                    They are not considered a definitive cure and may need to be repeated periodically for sustained benefit.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Dr. Kapil Agrawal for Lipoma Treatment?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Experience & Expertise</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Vast experience of 22 years:</strong> Dr Kapil Agrawal brings over two decades of extensive experience and has performed more than 3000 lipoma procedures with excellent results and high patient satisfaction rates.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Complete Range of Procedures:</strong> Dr Kapil Agrawal offers a comprehensive suite of procedures for lipoma removal, ensuring that each patient receive the most appropriate and effective treatment for their specific condition.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Patient-Centred Approach</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Personalised Treatment Plans:</strong> At Habilite Clinics, Dr Kapil Agrawal offers customized treatment plans after taking into consideration factors such as size, location, consistency and location of lipomas. His treatment strategy aims at maximizing effectiveness while minimizing discomfort.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Patient Centred Approach:</strong> Dr Agrawal prioritizes the well being and comfort of his patients and ensure that each individual receive personalized attention and care throughout their treatment journey.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Affiliations with Top Hospitals in Delhi:</strong> Dr Agrawal is associated with some of the best hospitals for lipoma treatment in Delhi. These hospitals apart from providing state of the art facilities, also offer cashless insurance facilities, making the treatment process more convenient and financially manageable for patients.</span>
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

