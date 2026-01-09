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
import RecoveryTimeline from '@/components/services/RecoveryTimeline'
import { getServiceSchema } from '@/lib/seo/schemaBuilders'

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
        url: 'https://www.habiliteclinics.com/images/best-bariatric-surgeon-delhi.webp',
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
const serviceSchema = getServiceSchema({
  name: 'Bariatric Surgery - Weight Loss Surgery',
  description: 'Expert bariatric surgery by Dr. Kapil Agrawal in Delhi, India. Complete range of weight loss procedures including sleeve gastrectomy, gastric bypass, and robotic bariatric surgery with 23+ years experience and 7000+ successful surgeries.',
  url: '/bariatrics/bariatric-surgery',
  serviceType: 'Medical Procedure',
  category: 'Bariatric Surgery',
  areaServed: ['Delhi', 'NCR', 'India'],
})

export default function BariatricSurgeryPage() {
  const bariatricBlogs = blogPosts
    .filter((post) => 
      // Exclude "Bariatric Surgery: A Complete Guide to Weight Loss Surgery"
      post.slug !== 'bariatric-surgery-complete-guide-weight-loss' &&
      (post.category.toLowerCase().includes('bariatric') || post.tags.some((tag) => tag.toLowerCase().includes('bariatric') || tag.toLowerCase().includes('weight loss')))
    )
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
              src="/images/best-bariatric-surgeon-delhi.webp"
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
              Best Bariatric Surgeon in <span className="text-[#0891b2]">Delhi,</span> India: Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Dr. Kapil Agrawal is an internationally recognized and one of the best bariatric surgeons in Delhi, India. With over 23 years of surgical experience, he has an outstanding record of accomplishing over 7000 advanced Laparoscopic & Bariatric surgeries. He is a Senior Consultant Surgeon at the Apollo Group of Hospitals, New Delhi. He has handled some of the most complex patients suffering from severe obesity and obesity related health problems.
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
            {/* Service Image */}
            <div className="mb-8">
              <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
                <Image
                  src="/images/best-bariatric.webp"
                  alt="Best bariatric surgeon in Delhi Dr Kapil Agrawal" title='Best bariatric surgeon in Delhi'
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div>
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
                Understanding Severe Obesity: A Medical Condition, Not a Choice:
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Severe obesity is a complex, multifactorial medical condition influenced by hormones, metabolism, genetics, and lifestyle factors. Medical evaluation and treatment become essential for safe, long-term weight control.
              </p>
              
            </section>

            <section className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Your Health at Stake: How Excess Weight Affects Your Body
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Severe obesity is not just about how you look; it&apos;s about how your body works.
              </p>
              <div className="space-y-3">
                <p className="text-gray-700 text-sm sm:text-base">
                  It affects all your vital organs. Your heart works harder, leading to high blood pressure, heart disease, and stroke.
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Excessive fat interferes with insulin action, leading to Type II diabetes.
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Excessive fat around the chest and neck can lead to breathing problems, resulting in poor sleep, fatigue, and low oxygen levels.
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Obesity causes early damage to weight-bearing joints, leading to arthritis and loss of stamina.
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Hormonal disturbances due to obesity cause infertility, irregular menstrual cycles, and low testosterone levels.
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Fatty liver disease, acidity, gallstones, and increased cancer risk are also linked to severe obesity.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                You Are Not Alone: Why Diets Often Fail and What Comes Next
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Dieting results in temporary weight loss because our body always resists weight loss.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                When we diet, our metabolism slows down, and the levels of hunger hormones increase, leading to failure and weight regain.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Effective medical solutions include structured medical weight-loss programs, medications, and bariatric surgery, which address the biological causes of obesity.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Bariatric surgery addresses the root cause of obesity. Apart from reducing stomach size and altering fat absorption, it modifies the gut hormone levels.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Bariatric surgery alters the body&apos;s weight set point, making effective, sustainable weight loss easier for you.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                The next step is not another fad diet, but a scientific, long-term treatment plan tailored to your body, health conditions, and lifestyle—so weight loss becomes achievable and sustainable.
              </p>
            </section>

            {/* What is Bariatric Surgery */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What Is Bariatric Surgery? A Simple Explanation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bariatric surgery is not a cosmetic surgery but a Metabolic procedure. Bariatric surgery involves a suite of 4-5 distinct surgical procedures. Each operation has specific benefits and is indicated for different patient profiles.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                More Than Just Weight Loss: A Tool to Reset Your Metabolism
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Bariatric or weight loss surgery changes how your stomach and gut work to reduce hunger and improve fullness.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                The surgery helps balance hormones that control appetite and blood sugar.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Patients experience improvement or resolution of diabetes, hypertension, and sleep apnea.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                By correcting the body&apos;s weight-regulation system, long-term weight loss becomes achievable.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Key Difference: Bariatric Surgery vs. Medical Weight Loss Plans
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Medical weight loss focuses on diet, exercise, counselling, and medications.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                These plans work best for mild to moderate obesity and may yield limited results in patients with higher BMIs.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Bariatric surgery is recommended for severe obesity or when medical plans fail.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Surgery produces greater hormonal and metabolic changes.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                It offers greater, more sustained weight loss with better control of obesity-related diseases.
              </p>
            </section>

            {/* Why Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Meet Your Expert: Why Dr. Kapil Agrawal is a Leading Bariatric Surgeon in Delhi</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Elite Credentials: MBBS, MS, MRCS (London) & Advanced Bariatric Training
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr. Agrawal&apos;s educational journey is a strong foundation of excellence. He has pursued advanced, specialised training in bariatric and metabolic surgery at leading international centres, ensuring you are in the hands of a globally competent surgeon.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    A Legacy of Success: 23+ Years & Leadership in Weight Loss Surgery
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    For over 23 years, Dr. Kapil Agrawal has been at the forefront of weight loss surgery in India. His extensive experience and thousands of successful bariatric surgeries represent a track record you can rely on. He has helped people from all over India lose weight and regain their health. This vast experience means he has likely encountered and expertly managed almost every possible surgical scenario. His reputation is so strong that other surgeons often invite him to teach and share his knowledge. This legacy is built on a simple promise: providing safe, effective care that earns the deep, lasting trust of every patient who walks through his door.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Pioneer in Minimally Invasive Techniques: Robotic & Single-Port Surgery
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr. Agrawal believes your recovery should be as smooth as our surgical precision. He is a champion of the most advanced minimally invasive techniques. He is a leading authority in Laparoscopic Surgery in Delhi, using tiny &quot;keyhole&quot; incisions for faster healing. He has taken this further by mastering Robotic Bariatric Surgery, where a state-of-the-art robotic system gives him very high precision and control, especially in complex cases.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Advanced, Patient-Tailored Weight Loss Procedures */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Our Advanced, Patient-Tailored Weight Loss Procedures</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Gastric Sleeve (Sleeve Gastrectomy): The Reliable, Most Common Choice
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    In this surgical procedure, 75-80% of the stomach is removed, resulting in a banana-shaped &quot;sleeve&quot;. It reduces hunger by lowering ghrelin (the hunger hormone) levels and limits food intake, resulting in effective weight loss. [<Link href="/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy-surgery" className="text-[#0891b2] hover:underline">Learn more about Gastric Sleeve Surgery →</Link>]
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Gastric Bypass: For Significant Weight Loss & Controlling Type 2 Diabetes
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    This surgery creates a small pouch from the stomach using endo-staplers and connects it directly to the small intestine. It limits food intake and calorie absorption, leading to substantial, long-lasting weight loss. [<Link href="/bariatric-surgeon-in-delhi-india/gastric-bypass-surgery" className="text-[#0891b2] hover:underline">Learn more about Gastric Bypass →</Link>]
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Mini Gastric Bypass: Better and Safer than Gastric Bypass
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    This is a shorter version of the traditional gastric bypass. This process involves creating a long gastric pouch and attaching it to the lower part of the small intestine. It is a faster process with quicker weight-loss solutions and minimal risks. [<Link href="/bariatrics/bariatric-surgery/mini-gastric-bypass-surgery" className="text-[#0891b2] hover:underline">Learn more about Mini gastric Bypass →</Link>]
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Duodenal Jejunal Bypass: Alternative to Mini Gastric Bypass
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    This surgical process is best for people dealing with Type 2 Diabetes and less obesity. This procedure bypasses the first part of the small intestine (duodenum), even without reducing the stomach size. It helps to control blood sugar and promotes modest weight loss. [<Link href="/bariatrics/bariatric-surgery/duodenal-jejunal-bypass-surgery" className="text-[#0891b2] hover:underline">Learn more about Duodenal Jejunal Bypass →</Link>]
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Revisional Bariatric Surgery: Correcting and Improving Past Procedures
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Patients who are regaining weight or facing complications after their previous bariatric procedure may need revision surgery that helps to improve or adjust the last surgery to restore its effectiveness and safety. [<Link href="/bariatric-surgeon-in-delhi-india/revision-surgeries-surgery" className="text-[#0891b2] hover:underline">Learn more about Revision Bariatric Surgery →</Link>]
                  </p>
                </div>
              </div>
            </section>

            {/* Advantages of Choosing the Best Bariatric Surgeon in Delhi */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Advantages of Choosing the Best Bariatric Surgeon in Delhi</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Safer Surgery & Minimal Complications
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr Kapil Agrawal is an experienced & high-volume surgeon. His expertise in advanced minimally invasive techniques significantly lowers the risk of complications. You benefit from precise surgical skill, meticulous pre-operative planning, and a dedicated team focused on your well-being. This approach ensures the highest standard of care for a smooth surgical journey.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Choosing the Best Bariatric Surgery
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr Kapil Agrawal offers a complete spectrum of weight-loss or bariatric surgeries. After detailed evaluation and consultation, he guides you in selecting the most effective and sustainable procedure.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Laparoscopic vs Robotic Bariatric Surgery
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Both are advanced minimally invasive techniques offering faster recovery than open surgery. Dr. Agrawal will recommend the best approach for you based on his expertise with both technologies.
                  </p>
                </div>
              </div>
            </section>

            {/* The Precision Advantage: Laparoscopic & Robotic Bariatric Surgery in Delhi */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">The Precision Advantage: Laparoscopic & Robotic Bariatric Surgery in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal specializes in advanced, minimally invasive bariatric surgeries and primarily uses Laparoscopic and Robotic-assisted techniques. Dr. Kapil Agrawal performs a thorough evaluation of every patient to determine the safest, most effective, and personalized surgical approach.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Laparoscopic Bariatric Surgery: Still the Gold Standard
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    For most patients, laparoscopic surgery is the established and preferred technique.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Through 3-4 tiny incisions, Dr. Kapil Agrawal uses a slender camera to see inside with clarity.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    He then performs the surgery using advanced instruments while monitoring a screen.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Robotic Bariatric Surgery: Unmatched Precision for Complex Cases
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Robotic surgery in obese patients is mainly indicated for patients with very high BMI and previous abdominal surgeries.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr. Agrawal performs the procedure using a console that guides the robotic arms. The robotic arms translate his hand movements into ultra-precise motions.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    The 3D visualization of internal organs enables him to perform surgery more efficiently and precisely.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Why &apos;Keyhole&apos; Surgery Means Less Pain and a Faster Recovery for You
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base font-semibold mb-2">
                    Robotic vs Laparoscopic Bariatric Surgery:
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Patients enjoy similar practical benefits with both techniques, including scars and recovery. In fact, hospital stays and postoperative pain are the same in both methods.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Robot-assisted surgery offers enhanced precision, flexibility, and range of motion, making it ideal for complex anatomy. It is even beneficial for patients with very high BMI or who have a history of previous major abdominal surgeries.
                  </p>
                </div>
              </div>
            </section>

            {/* How Does Bariatric Surgery Function */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">How Does Bariatric Surgery Function?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                There are several types of weight loss surgeries, and each surgery causes weight loss in its way. Some of the standard mechanisms through which bariatric procedures induce weight loss include:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-semibold text-gray-900 mb-3">Reduction in Stomach Size</h3>
                  <p className="text-gray-700 text-sm">
                    A bariatric procedure aims to reduce food intake at a single time by reducing the size of the stomach. The stomach is usually reduced to one-third of its standard size, and this is achieved with the help of endo staplers. The feeling of fullness after eating a small meal leads to fewer calories being consumed, which leads to weight loss.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-semibold text-gray-900 mb-3">Rerouting of Intestines</h3>
                  <p className="text-gray-700 text-sm">
                    In some bariatric surgeries, the intestines or bowel are rerouted. As a result, there is minimal fat absorption into the body, leading to weight loss.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-[#0891b2]/20">
                  <h3 className="font-semibold text-gray-900 mb-3">Hormonal Changes</h3>
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
                  <h3 className="font-semibold text-gray-900 mb-3">BMI Categories</h3>
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
                      <h3 className="font-semibold text-gray-900 mb-3">{tool.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">{tool.description}</p>
                    <div className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0891b2] text-white font-semibold text-sm hover:bg-[#06b6d4] transition-colors">
                      {tool.cta}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Are You a Candidate? A Clear, Compassionate Guide */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Are You a Candidate? A Clear, Compassionate Guide</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Understanding BMI and Other Health Indicators
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    The first and foremost step in managing obesity is to assess its severity. The most common and reliable tool for determining obesity is BMI. The BMI is a statistical measurement of your weight and height.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    If your BMI is 30 or more, you are considered obese. Sometimes, Waist Circumference & Waist-to-Hip Ratio are also taken into account to assess obesity levels.
                  </p>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 overflow-x-auto">
                    <table className="w-full text-sm text-gray-700">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">BMI Range-kg/m2</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4">&lt;18.5</td>
                          <td className="py-3 px-4">Underweight</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4">18.5 - 23.5</td>
                          <td className="py-3 px-4">Normal</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4">23.5 - 27.5</td>
                          <td className="py-3 px-4">Overweight</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4">27.5 - 37.5</td>
                          <td className="py-3 px-4">Obese</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4">&gt;37.5</td>
                          <td className="py-3 px-4">Morbidly Obese</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4">&gt;50</td>
                          <td className="py-3 px-4">Super Obese</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">&gt;60</td>
                          <td className="py-3 px-4">Super Super Obese</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Who can undergo Bariatric Surgery: An ideal candidate
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    While bariatric surgery is a powerful tool, it&apos;s not the right choice for everyone. To ensure safety and long-term success, we carefully evaluate patients against established medical criteria. Key requirements typically include:
                  </p>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                        <span>When your BMI is 37.5 or higher, it just means that you have Grade III obesity levels.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                        <span>When your BMI is 32.5 or higher, and you have obesity-related health issues like diabetes, high blood pressure, or respiratory problems such as sleep apnea, asthma, or joint pain.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                        <span>You have a documented history of unsuccessful weight loss via medically supervised programs.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                        <span>You are not facing any mental disorders that hamper your decision-making ability or have an eating disorder that leads to unsuccessful weight loss.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                        <span>When you are unable to perform your routine activities due to obesity.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Ensuring Safety: Who May Need Extra Evaluation Before Surgery
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Your safety is our top priority. Certain pre-existing conditions, such as complex heart or lung issues, specific nutritional deficiencies, or unmanaged mental health concerns, may require a more thorough evaluation with our multidisciplinary team. It ensures we design the safest possible surgical plan and provide the proper support for you, both before and after your procedure.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Journey with Us: Step-by-Step Care from Start to Success */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Your Journey with Us: Step-by-Step Care from Start to Success</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Step 1: Comprehensive Pre-Surgery Evaluation & Personalised Planning
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-3">
                    Your journey begins with a thoughtful, thorough assessment and the necessary medical tests.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base mb-3">
                    You&apos;ll have a detailed one-on-one consultation with Dr. Kapil Agrawal. Together, you&apos;ll discuss your health profile and goals to determine which surgical option is safest and best suited to you.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base mb-3">
                    Finally, you&apos;ll meet with our dedicated dietician to prepare your mind and body for the changes ahead.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Our dedicated patient care coordinator will handle all the details, from paperwork and insurance coordination to hospital admission.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Step 2: Surgery Day: Safety, Advanced Technology, and Expert Hands
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr Kapil Agrawal and his team perform the surgery using the most advanced laparoscopic or robotic technology with precision.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Our team adheres to the highest standards of care in a modern operating room.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Step 3: Your Recovery: In-Hospital Care and Going Home
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-3">
                    You&apos;ll recover in a supportive environment where our nursing and medical staff closely monitor your progress.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Before you leave, you&apos;ll receive clear, personalised instructions for wound care, medications, and initial diet.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Step 4: Lifelong Success: Nutrition, Lifestyle Support & Regular Follow-Ups
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-3">
                    Our team will guide you through your evolving dietary needs and activity plans.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr. Kapil Agrawal will see you for regular follow-ups to track your progress and adjust your plan as needed.
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits Beyond Weight Loss: Reclaiming Your Health & Life */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits Beyond Weight Loss: Reclaiming Your Health & Life</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Health Benefits Beyond the Scale: Improving Diabetes, Blood Pressure, and More
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    One of the most potent effects of bariatric surgery is its ability to transform your metabolic health. Many patients see a dramatic improvement in their diabetes. High blood pressure also often decreases, reducing your risk of heart disease and stroke. This means managing fewer medications and focusing on living a fuller, healthier life.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Rediscovering Energy and Vitality
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Within a few weeks post-surgery, you will experience better stamina for daily tasks and feel like you&apos;re getting your spark back in life.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Moving Without Pain: Enhancing Mobility
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Losing weight significantly reduces pressure on your joints and spine. This relief allows you to walk farther, climb stairs comfortably, and enjoy activities.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Boosting Confidence and Self-Esteem
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Losing weight and regaining health gives you a powerful sense of accomplishment and self-control. You will face and engage with the world with renewed confidence and positivity.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Participating Fully in Life Again
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    After surgery, you can fully engage in family vacations, social gatherings, and everyday adventures. You no longer need to watch from the sidelines; you can actively create and enjoy memories.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    The Ripple Effect: How Improved Health Changes Everything
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    When your health transforms, the benefits touch every part of your life. Better sleep improves your mood. More energy brings more happiness. This positive shift often inspires healthier choices in your whole family, creating a lasting legacy of wellness.
                  </p>
                </div>
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
            <RecoveryTimeline />
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Bariatric Surgery" />
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
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
          </div>
        </div>
      </div>
    </>
  )
}
