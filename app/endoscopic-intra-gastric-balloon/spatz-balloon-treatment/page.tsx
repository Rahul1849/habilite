import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import Image from 'next/image'
import { Award, CheckCircle2, Clock, User, TrendingUp, Heart, Activity, Zap, Shield, Users } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import SpatzBalloonFAQ from './SpatzBalloonFAQ'
const RecoveryTimeline = dynamic(() => import('@/components/services/RecoveryTimeline'), { ssr: false })

export const metadata: Metadata = {
  title: 'Best Spatz Balloon Expert in Delhi – Dr. Kapil Agrawal | Adjustable Gastric Balloon',
  description: 'Expert Spatz Adjustable Gastric Balloon treatment in Delhi, India by Dr. Kapil Agrawal. Adjustable gastric balloon that stays up to 8 months. 23 years experience, internationally trained expert. Book consultation.',
  keywords: [
    'spatz balloon delhi',
    'spatz balloon surgeon delhi',
    'best spatz balloon specialist delhi',
    'adjustable gastric balloon delhi',
    'spatz balloon treatment delhi',
    'adjustable intragastric balloon delhi',
    'non-surgical weight loss delhi',
    'Dr. Kapil Agrawal spatz balloon',
    'spatz balloon india',
  ],
  openGraph: {
    title: 'Best Spatz Balloon Expert in Delhi – Dr. Kapil Agrawal | Adjustable Gastric Balloon',
    description: 'Expert Spatz Adjustable Gastric Balloon treatment by Dr. Kapil Agrawal in Delhi. Adjustable gastric balloon that stays up to 8 months. 23 years experience.',
    url: 'https://www.habiliteclinics.com/endoscopic-intra-gastric-balloon/spatz-balloon-treatment',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/endoscopic-intra-gastric-balloon/spatz-balloon-treatment',
  },
}

export default function SpatzBalloonPage() {
  return (
    <div className="pt-20 pb-16">

      {/* Hero Content */}
      <div className="container-custom mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-spatz-balloon-surgeon-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Best Spatz Balloon Expert in <span className="text-[#0891b2]">Delhi</span> – Dr. Kapil Agrawal
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
            <Award size={16} className="text-[#f59e0b]" />
            <span>Expert Surgeon with Over 23 Years of Experience</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Dr. Kapil Agrawal is famous throughout the Delhi NCR region for offering the Spatz Adjustable Gastric Balloon procedure. With experience of 23+ years in both surgical and non-surgical obesity care, he offers advanced treatment to patients seeking flexible, long-lasting weight loss solutions.
          </p>
          
          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              { icon: Award, text: 'Expert Surgeon with Over 23 Years of Experience' },
              { icon: Users, text: 'Internationally Trained Expert - Dr. Kapil Agrawal' },
              { icon: Clock, text: 'Painless Surgery for Fast Recovery' },
              { icon: CheckCircle2, text: 'Cashless Insurance Facility Available' },
              { icon: TrendingUp, text: 'Discharge within 24 hours' },
            ].map((highlight) => (
              <div
                key={highlight.text}
                className="flex items-center gap-2 bg-[#0891b2]/10 px-4 py-2 rounded-full"
              >
                <highlight.icon className="text-[#0891b2] w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">
                  {highlight.text}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <CallUsButton />
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Service Image */}
          <div className="mb-8">
            <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
              <Image
                src="/images/best-spartz-balloon-specialist-in-delhi.webp"
                alt="Top 5 Best Spatz Balloon Specialist in Delhi - Dr. Kapil Agrawal | Adjustable Gastric Balloon | Non-Surgical Weight Loss | 23 Years Experience | Apollo Hospital | Book Consultation"
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* About Spatz Balloon */}
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">What Is a Spatz Intragastric Balloon?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              Spatz is a special type of weight loss balloon that goes inside the stomach through endoscopy and stays up to 8 months. The main difference? It is adjustable. That means if a patient feels too full or not full enough, the balloon size can be changed later. This helps in improving results and reducing early side effects.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Unlike swallowable balloons, Spatz requires light sedation and endoscopy for placing and removing the balloon. Once inside, it takes up space in the stomach, reducing how much you can eat and making you feel full faster.
            </p>
            
            {/* Cost Calculator */}
            <div className="my-8 flex justify-center">
              <div className="w-full max-w-5xl">
                <CostCalculator serviceName="Spatz Balloon" />
              </div>
            </div>
          </section>

          {/* Who Can Consider */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Who Can Consider a Spatz Balloon?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              According to Dr. Kapil Agrawal, the Spatz Balloon is ideal for:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Those with a BMI of 27 to 40+</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Individuals seeking longer assistance (up to 8 months)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Failed previous weight reduction programs</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Individuals getting ready for bariatric surgery</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Those who are comfortable with endoscopy and desire increased control of outcomes</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> Individuals suffering from stomach ulcers, bleeding disorders, or previous stomach surgery are not good candidates.
              </p>
            </div>
          </section>

          {/* How the Procedure Works */}
          <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 text-center">How the Spatz Balloon Procedure Works</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  Check-up First
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your BMI, medical history, and fitness for endoscopy are reviewed.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Zap className="text-[#0891b2] mr-2" size={24} />
                  Balloon Placement
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The balloon is inserted into the stomach via endoscopy under light sedation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="text-[#0891b2] mr-2" size={24} />
                  Balloon Filling
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The balloon is inflated with sterile saline once placed in the stomach.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Shield className="text-[#0891b2] mr-2" size={24} />
                  Adjustment
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Later, the size can be changed to improve comfort or boost results.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Clock className="text-[#0891b2] mr-2" size={24} />
                  Monitoring
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Regular check-ins to see weight, side effects, and progress.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Heart className="text-[#0891b2] mr-2" size={24} />
                  Balloon Removal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  After 8 months, the balloon is removed by another endoscopy.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Benefits of the Spatz Adjustable Balloon</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Longer Duration</p>
                    <p className="text-gray-700 text-sm">Balloon stays up to 8 months for extended weight loss</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Adjustable Volume</p>
                    <p className="text-gray-700 text-sm">Unique feature to increase or decrease size based on need</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Higher Average Weight Loss</p>
                    <p className="text-gray-700 text-sm">Many patients lose 15–25 kg</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Better Tolerability</p>
                    <p className="text-gray-700 text-sm">If discomfort happens, the size can be reduced</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Non-Surgical</p>
                    <p className="text-gray-700 text-sm">Still doesn&apos;t need any cutting or stitches</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Custom Plans</p>
                    <p className="text-gray-700 text-sm">Diet and follow-up care personalised as per weight goals</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Global Results</p>
                    <p className="text-gray-700 text-sm">Used in more than 45 countries, with good safety profile</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Advanced Endoscopic Care</p>
                    <p className="text-gray-700 text-sm">Done by trained gastro-bariatric experts only</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Now Accessible Across Delhi NCR</p>
                    <p className="text-gray-700 text-sm">The procedure is offered at various Habilite locations</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Aftercare and Patient Support */}
          <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Aftercare and Patient Support</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Once the balloon is inside, the journey doesn&apos;t stop. Dr. Kapil Agrawal&apos;s team supports with:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Meal Planning</p>
                    <p className="text-gray-700 text-sm">Weekly diet changes by experienced nutritionists</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Lifestyle Coaching</p>
                    <p className="text-gray-700 text-sm">Experts to help change patterns that cause weight gain</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Medical Follow-Ups</p>
                    <p className="text-gray-700 text-sm">Regular checks and blood work</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Balloon Adjustments</p>
                    <p className="text-gray-700 text-sm">Extra visits allowed for filling or deflating the balloon</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Emergency Care</p>
                    <p className="text-gray-700 text-sm">On-call help available for side effects or queries</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Clinic-Based Monitoring</p>
                    <p className="text-gray-700 text-sm">All tools under one roof, from ECG to diet tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Side Effects */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Are There Any Side Effects?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most side effects typically occur in the first few days and can be managed with medication:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center">
                <CheckCircle2 className="text-[#0891b2] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Nausea</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-[#0891b2] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Upper belly discomfort</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-[#0891b2] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Vomiting</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-[#0891b2] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Mild bloating or reflux</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-[#0891b2] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Balloon intolerance (rare)</span>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              Balloon volume can be reduced to ease symptoms.
            </p>
          </section>

          {/* Why Choose Dr. Kapil Agrawal */}
          <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Why Choose Dr. Kapil Agrawal for Spatz Balloon in Delhi?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Kapil is one of the few in Delhi trained in adjustable balloon therapy like Spatz. With deep endoscopic skills and an obesity care background, he handles both simple and complex cases with care. He&apos;s not just doing the balloon placement—he offers full support before and after, including diet changes, activity coaching, and emotional guidance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              His clinic setup is supported by Habilite Clinics so appointments, emergencies, and follow-ups are well handled. He also listens. Plans are made not just from reports, but from what the patient feels, needs, and can manage long-term.
            </p>
            <p className="text-gray-700 leading-relaxed">
              He works with top hospitals in Delhi NCR like Apollo Group of Hospitals and has a full team of dieticians, bariatric-trained nurses, behaviour experts, and fitness guides. This makes the treatment well-rounded from placement to aftercare.
            </p>
          </section>

          {/* Recovery & Aftercare */}
          <section className="w-full max-w-4xl mx-auto bg-gray-50 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Recovery & Aftercare</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                  <p className="text-gray-700 text-sm">Most patients can return to normal activities within 1-2 days after Spatz balloon placement, with minimal discomfort. Discharge within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start">
                <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                  <p className="text-gray-700 text-sm">Regular follow-up appointments with nutrition counseling, balloon adjustments, and medical monitoring help ensure optimal weight loss results and long-term success.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Lifestyle Support</p>
                  <p className="text-gray-700 text-sm">Our team provides comprehensive support including tailored meal planning, lifestyle coaching, balloon adjustments, and 24/7 helpline access to help you achieve and maintain successful weight loss.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Recovery Timeline */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-md border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Aftercare Milestones</h2>
            <RecoveryTimeline title="Spatz Balloon Recovery Timeline" />
          </section>
        </div>

        {/* Consultation Form */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
            <ConsultationForm 
              serviceName="Spatz Balloon"
              serviceSlug="best-spatz-surgeon-in-delhi"
            />
          </div>
        </div>

        {/* Post-operative Care Section */}
        <div className="mt-12">
          <PostOperativeCare />
        </div>

        {/* WhatsApp Expert Chat */}
        <div className="mt-8">
          <WhatsAppExpertChat serviceName="Spatz Balloon" />
        </div>

        {/* Contact Section */}
        <div className="max-w-5xl mx-auto mt-12 bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Contact Dr. Kapil Agrawal Today</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-4">
            Book your appointment with Dr. Kapil Agrawal, one of the best Spatz Balloon specialists in Delhi, India today to schedule your consultation.
          </p>
          <div className="text-center mt-6">
            <p className="text-gray-700 font-semibold mb-2">You can contact us on:</p>
            <p className="text-[#0891b2] text-lg font-semibold">+91-9999456455, +91-9910024564</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <SpatzBalloonFAQ />
          </div>
        </div>
      </div>
    </div>
  )
}


