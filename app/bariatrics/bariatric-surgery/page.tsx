import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp, ArrowRight, Calculator, Flame, Dumbbell } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import BariatricFAQ from './BariatricFAQ'
import BariatricTestimonials from './BariatricTestimonials'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Best Bariatric Surgeon in Delhi - Dr. Kapil Agrawal | 23 Years Experience | 7000+ Surgeries',
  description: 'Dr. Kapil Agrawal is an internationally recognized, one of the experienced and best bariatric surgeon in Delhi. He has well known experience of 23+ years and has done more than 7000 successful advanced Bariatric surgeries. Book consultation now.',
  keywords: [
    'best bariatric surgeon delhi',
    'bariatric surgery delhi',
    'weight loss surgery delhi',
    'sleeve gastrectomy delhi',
    'gastric bypass delhi',
    'bariatric surgery india',
    'Dr. Kapil Agrawal bariatric',
    'bariatric surgeon delhi ncr',
    'robotic bariatric surgery delhi',
    'laparoscopic bariatric surgery delhi',
  ],
  openGraph: {
    title: 'Best Bariatric Surgeon in Delhi - Dr. Kapil Agrawal | 23 Years Experience',
    description: 'Internationally recognized bariatric surgeon with 23+ years experience and 7000+ successful surgeries. Expert in laparoscopic and robotic bariatric procedures.',
    url: 'https://www.habiliteclinics.com/bariatric-surgeon-in-delhi-india',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/bariatric-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Bariatric Surgeon in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatric-surgeon-in-delhi-india',
  },
}

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the duration of stay in hospital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The type of procedure and condition of the patient typically determines the standard length of stay in the hospital. However, most patients are sent home by 24-48 hours after surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can bariatric surgery cure my diabetes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upto 95% of patients who undergo bariatric surgery see improvement or even resolution in their type 2 diabetes. How long you have had diabetes, the type of bariatric procedure used, and how accomplished your surgeon is are significant variables that can influence the results.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the effect of bariatric surgery on pregnancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bariatric Surgery has significant positive effects on the pregnancy. Bariatric surgery by resolving PCOS and hormonal imbalances increases the chances of conception. It also prevents obesity-related complications like gestational diabetes during pregnancy. Bariatric surgery makes pregnancy a pleasant experience by avoiding unnecessary complications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can bariatric surgery cure my PCOD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PCOD (Polycystic Ovary Syndrome) is cured in almost every patient after bariatric surgery. If you are severely obese and suffering from PCOS, you must seriously look into the option of bariatric surgery by the best bariatric surgeon.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the chances of weight regain following bariatric surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are adherent to post-surgery lifestyle changes, eat well (even after the recommended diet stages), and exercise reasonably regularly, the chances of weight regain are almost negligible. Regular follow-up with healthcare providers, keeping yourself motivated, and following the recommendations are ways to prevent weight restoration.',
      },
    },
  ],
}

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Bariatric Surgery',
  description: 'Expert bariatric surgery by Dr. Kapil Agrawal in Delhi. Complete range of weight loss procedures including sleeve gastrectomy, gastric bypass, and robotic surgery.',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
  },
  procedureType: 'Laparoscopic Bariatric Surgery',
  followup: 'Regular follow-up appointments and post-operative care',
  preparation: 'Pre-surgery consultation, medical evaluation, and preparation instructions',
}

export default function BariatricSurgeryPage() {
  const bariatricBlogs = blogPosts
    .filter((post) => post.category.toLowerCase().includes('bariatric') || post.tags.some((tag) => tag.toLowerCase().includes('bariatric') || tag.toLowerCase().includes('weight loss')))
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
              src="/images/bariatric-surgeon-delhi-india.webp"
              alt="Best Bariatric Surgeon in Delhi - Dr. Kapil Agrawal | Expert Weight Loss Surgery | 23 Years Experience | 7000+ Surgeries"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-bariatric-surgeon-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Bariatric Surgeon in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Blend of Best Technology & Infrastructure | Highly Experienced, Internationally Trained Team | Reduced Port Surgeries for Best Cosmesis | Complete Range of Bariatric Procedures | Honest Pricing and No Hidden Charges | EMI Options Available
            </p>
            
            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Experience' },
                { icon: Users, text: '7000+ Successful Surgeries' },
                { icon: TrendingUp, text: 'Internationally Trained' },
                { icon: Clock, text: '24-48 Hour Discharge' },
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
                serviceName="Bariatric Surgery"
                serviceSlug="bariatric-surgery"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* About Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Dr. Kapil Agrawal - Best Bariatric Surgeon in Delhi, India
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agarwal is an internationally recognized, one of the experienced and best bariatric surgeon in Delhi. He has well known experience of 23+ years and has done more than 7000 successful advanced Bariatric surgeries. With affiliations with some of the best hospitals for bariatric surgery in Delhi, he is committed to providing his patients with state-of-the-art facilities and the highest quality standards.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr Agrawal&apos;s excellent surgical skills, ability to perform a complete range of bariatric procedures and caring demeanour make him one of the best choices for bariatric surgery in Delhi, India.
              </p>
            </section>

            {/* What is Bariatric Surgery */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is Bariatric Surgery?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bariatric surgery is an umbrella term that includes several types of weight-loss surgeries that help you lose weight significantly and help in getting rid of obesity-related health problems. Surgery of this type is usually resorted to when the more straightforward methods, such as diet and exercise, become ineffective or don&apos;t produce the desired results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bariatric procedures primarily function by limiting food intake or modifying the digestive tract to prevent fat absorption.
              </p>
            </section>

            {/* Why Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Dr. Kapil Agrawal is the Best Bariatric Surgeon in Delhi NCR?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal is the most trusted and internationally accredited bariatric surgeon in Delhi NCR, with over 23+ years experience and over 7000 successful surgeries. He offers augmented laparoscopic and robotic bariatric surgery using the latest technology and reduced-port techniques for minimal scarring and quick recovery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From sleeve gastrectomy to revision surgeries, his team performs the wide-ranging weight-loss procedures. He keeps transparent pricing, EMI options and top-notch infrastructures. Dr. Kapil Agrawal offers personalized care and world-class amenities for best patient-care.
              </p>
            </section>

            {/* How Does Bariatric Surgery Function */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">How Does Bariatric Surgery Function?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                There are several types of weight loss surgeries, and each surgery causes weight loss in its way. Some of the standard mechanisms through which bariatric procedures induce weight loss include:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Reduction in Stomach Size</h3>
                  <p className="text-gray-700 text-sm">
                    A bariatric procedure aims to reduce food intake at a single time by reducing the size of the stomach. The stomach is usually reduced to one-third of its standard size, and this is achieved with the help of endo staplers. The feeling of fullness after eating a small meal leads to fewer calories being consumed, which leads to weight loss.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Rerouting of Intestines</h3>
                  <p className="text-gray-700 text-sm">
                    In some bariatric surgeries, the intestines or bowel are rerouted. As a result, there is minimal fat absorption into the body, leading to weight loss.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Hormonal Changes</h3>
                  <p className="text-gray-700 text-sm">
                    Bariatric surgery can affect the release of hormones that regulate appetite, sugar metabolism, and carbohydrate metabolism. For example, a sleeve gastrectomy reduces the production of hunger-stimulating hormone ghrelin. As a result, appetite is suppressed. Specific bariatric procedures alter the output of various gut hormones, which helps to maintain better sugar levels, resulting in a cure for diabetes.
                  </p>
                </div>
              </div>
            </section>

            {/* BMI Calculator */}
            <section className="bg-gradient-to-br from-[#ecfeff] via-white to-[#f0f9ff] border border-[#0891b2]/20 rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Check Your BMI Before Surgery</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Knowing your Body Mass Index (BMI) helps determine whether you qualify for bariatric surgery and guides the best treatment approach. Use our BMI Calculator to understand your current health status and plan next steps with Dr. Kapil Agrawal.
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>BMI ≥ 37.5 typically indicates Grade III obesity and eligibility for bariatric surgery.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>BMI ≥ 32.5 with diabetes, hypertension, or sleep apnea may also qualify.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>Track changes over time to measure progress before and after surgery.</span>
                    </div>
                  </div>
                  <Link
                    href="/bmi-calculator"
                    className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-[#0891b2] text-white font-semibold hover:bg-[#06b6d4] transition-colors"
                  >
                    Calculate Your BMI
                    <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">BMI Categories</h3>
                  <div className="space-y-3">
                    {[
                      { range: '18.5 – 22.9', label: 'Healthy Weight' },
                      { range: '23 – 24.9', label: 'Overweight (At Risk)' },
                      { range: '25 – 32.4', label: 'Obese Class I & II' },
                      { range: '≥ 32.5', label: 'Severe Obesity (Consider Bariatric Surgery)' },
                    ].map((item) => (
                      <div key={item.range} className="flex items-center justify-between bg-[#ecfeff] rounded-lg px-4 py-3">
                        <span className="text-gray-700 font-medium">{item.range}</span>
                        <span className="text-sm text-[#0891b2] font-semibold">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    *Based on Asian BMI classification used for bariatric surgery eligibility in India.
                  </p>
                </div>
              </div>
            </section>

            {/* Health Calculators */}
            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">Plan with Health Calculators</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Use these tools to understand your health metrics before meeting Dr. Kapil Agrawal. Accurate BMI, calorie, and activity data help us customise your bariatric journey.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    href: '/bmi-calculator',
                    title: 'BMI Calculator',
                    description: 'Check your Body Mass Index using Asian criteria to know if you qualify for bariatric surgery.',
                    icon: Calculator,
                    cta: 'Calculate BMI',
                  },
                  {
                    href: '/bariatrics/calorie-calculator',
                    title: 'Calorie Calculator',
                    description: 'Estimate daily calorie needs to plan your nutrition goals with our bariatric dieticians.',
                    icon: Flame,
                    cta: 'Calculate Calories',
                  },
                  {
                    href: '/bariatrics/exercise-calculator',
                    title: 'Exercise Calculator',
                    description: 'Track calories burnt during different activities to align your fitness plan post-surgery.',
                    icon: Dumbbell,
                    cta: 'Track Activity',
                  },
                ].map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col h-full"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                        <tool.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{tool.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">{tool.description}</p>
                    <div className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0891b2] text-white font-semibold text-sm hover:bg-[#06b6d4] transition-colors">
                      {tool.cta}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Is Bariatric Surgery Right For Everyone */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Is Bariatric Surgery Right For Everyone?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Several factors determine whether you qualify for bariatric surgery. These include:
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>When your BMI is 37.5 or higher, it means you have Grade III obesity levels.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>When your BMI is 32.5 or higher, you have obesity-related health issues such as diabetes, high blood pressure, or respiratory problems such as sleep apnea, asthma, or joint pain.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>There is a documented history of unsuccessful weight loss through medically supervised programs.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>You are not suffering from any mental disorders that hamper your decision-making ability or any eating disorder that fails to produce the desired weight loss.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>When you are unable to perform routine activities due to obesity.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Health Benefits */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Health Benefits of Bariatric Surgery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bariatric surgery is the most reliable long-term solution for weight loss, while also transforming overall health, lifestyle, and emotional well-being in profound and lasting ways.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Lose 60–70% of excess weight effectively',
                  'Achieve long-term weight maintenance',
                  'Boost energy levels and daily activity',
                  'Improve self-esteem and confidence',
                  'Enjoy better quality of life and mobility',
                  'Resolve or improve type 2 diabetes, hypertension, and PCOD',
                  'Alleviate sleep apnea, snoring, joint pain, and spine issues',
                  'Reduce migraines and other obesity-linked conditions',
                  'Experience enhanced outcomes with healthy lifestyle changes',
                  'Supported by leading experts like Dr. Agrawal, top bariatric surgeon in Delhi',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Best Bariatric Weight Loss Surgery */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Best Bariatric Weight Loss Surgery at Habilite Clinics</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The two latest and most advanced techniques our team uses to perform bariatric surgery are laparoscopic surgery and robotic surgery. Our team, led by Dr Kapil Agrawal, the bariatric surgery specialist in Delhi NCR, carried out a detailed evaluation of the patients. This helps us to assess which technique is going to deliver the best results and be cost-effective at the same time.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">1. Laparoscopic Bariatric Surgery</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    It is a minimally-invasive weight-loss surgery that uses small incisions and a camera-guided laparoscopic to perform precise surgical procedures. It offers a safer and better alternative for traditional open surgery for weight-loss treatment.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Benefits of Laparoscopic Bariatric Surgery:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Minimal scarring</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Less postoperative pain</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Faster recovery and healing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Discharge within 48 hours</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Early return to daily routine</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Why Choose Dr. Kapil Agrawal for Laparoscopic Bariatric Surgery:</p>
                    <p className="text-gray-700 text-sm">
                      Dr. Kapil Agrawal is one of the leading laparoscopic bariatric surgeons in Delhi with over 23+ years of surgical experience. He is trusted for his safer procedures and positive surgical outcomes with latest laparoscopic techniques.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">2. Robot-Assisted Bariatric Surgery</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    It is a top-notch bariatric surgery where the surgeon uses robotic arms for better precision and flexibility during surgery. The 3D high-definition visualization helps surgeons to have better control and accuracy, especially in complicated or recurrence cases.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Benefits of Robot-Assisted Bariatric Surgery:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Greater precision and control</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Minimal scarring</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Reduced risk of complications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Faster recovery and healing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span>Ideal for super-obese patients or those with prior surgeries</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">Why Choose Dr. Kapil Agrawal for Robot-Assisted Bariatric Surgery:</p>
                    <p className="text-gray-700 text-sm">
                      Dr. Kapil Agrawal is the best bariatric surgeon in Delhi NCR, highly skilled in robotic bariatric procedures. With 20 plus years of experience, he offers one of the safest procedures, latest technologies and patient-centric approaches.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Bariatric Surgeries */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Common Bariatric Surgeries Done by Dr. Kapil Agrawal and His Team</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal, a renowned bariatric surgery specialist and one of the best surgeons for bariatric surgery in Delhi, offers an all-inclusive range of weight-loss procedures. Each surgery is chosen after careful evaluation based on health, lifestyle and weight-loss goals. His expert team ensures personalized care, best surgical outcomes and safer recovery process.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Sleeve Gastrectomy',
                    description: 'Most popular bariatric procedure that removes a portion of the stomach, creating a smaller stomach pouch. Effective for significant weight loss and improvement in obesity-related conditions.',
                  },
                  {
                    title: 'Gastric Bypass',
                    description: 'Creates a small stomach pouch and reroutes the small intestine. Highly effective for weight loss and diabetes resolution.',
                  },
                  {
                    title: 'Duodenal Jejunal Bypass',
                    description: 'Advanced procedure that combines sleeve gastrectomy with intestinal bypass for optimal results. Ideal for patients needing both restrictive and malabsorptive component.',
                  },
                  {
                    title: 'Revision Bariatric Surgery',
                    description: 'Weight loss surgery performed when patients do not obtain outstanding results from previous bariatric procedures. Requires expert surgical skills.',
                  },
                ].map((procedure) => (
                  <div key={procedure.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{procedure.title}</h3>
                    <p className="text-gray-700 text-sm">{procedure.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Dr. Kapil Agrawal */}
            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Why Choose Dr. Kapil Agrawal for Bariatric Surgery?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal is the best bariatric surgeon in Delhi, known for his surgical excellence, patient-centric care, and expertise in advanced laparoscopic and robotic procedures.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'More than 23 years of surgical excellence and performed 7000+ bariatric surgeries with positive outcomes.',
                  'Patient-centric approach by offering customized treatment plan and outstanding post-surgery care.',
                  'Huge experience of performing various bariatric procedures including sleeve gastrectomy, gastric bypass, and revision surgeries.',
                  'Specialization in minimally invasive laparoscopic and robotic techniques with minimal pain, less risks for complication and quicker recovery.',
                  'Patients get discharge within 24-48 hours and can return to normal activities faster.',
                  'Best surgical practices and latest equipment in bariatric surgical care.',
                  'Augmented technology and dedicated support team for high-quality surgical care.',
                  'Transparent pricing with EMI options and cashless insurance facilities.',
                ].map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="max-w-5xl mx-auto">
            <CostCalculator serviceName="Bariatric Surgery" />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <BariatricTestimonials />
            <BariatricFAQ />
            {bariatricBlogs.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <TrendingUp className="text-[#0891b2] mr-3" size={32} />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Bariatric Weight Loss Surgery Blogs</h2>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                      Expert advice on bariatric surgery, recovery, and weight loss journey
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {bariatricBlogs.map((post) => (
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
                    <p className="text-gray-700 text-sm">Most patients can return to normal activities within 2-4 weeks after bariatric surgery, with full recovery in 6-8 weeks. Most patients are sent home by 24-48 hours after surgery.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments ensure optimal recovery and address any concerns. Dr. Kapil Agrawal provides comprehensive post-operative care including nutritional guidance and lifestyle modifications.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Bariatric Surgery" />
        </div>
      </div>
    </>
  )
}
