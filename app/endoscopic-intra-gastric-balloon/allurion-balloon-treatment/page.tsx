import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import Image from 'next/image'
import { Award, CheckCircle2, Clock, User, TrendingUp, Heart, Activity, Zap, Shield } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import AllurionBalloonFAQ from './AllurionBalloonFAQ'
const RecoveryTimeline = dynamic(() => import('@/components/services/RecoveryTimeline'), { ssr: false })

export const metadata: Metadata = {
  title: 'Best Allurion Balloon Surgeon in Delhi - Dr. Kapil Agrawal | Swallowable Gastric Balloon',
  description: 'Expert Allurion Balloon treatment in Delhi, India by Dr. Kapil Agrawal. Swallowable gastric balloon that doesn\'t require endoscopy or anesthesia. Automatically deflates after 16 weeks. 23 years experience, 7000+ successful procedures. Book consultation.',
  keywords: [
    'allurion balloon delhi',
    'allurion balloon surgeon delhi',
    'best allurion balloon specialist delhi',
    'swallowable gastric balloon delhi',
    'allurion balloon treatment delhi',
    'gastric balloon without endoscopy delhi',
    'non-surgical weight loss delhi',
    'Dr. Kapil Agrawal allurion balloon',
    'allurion balloon india',
  ],
  openGraph: {
    title: 'Best Allurion Balloon Surgeon in Delhi - Dr. Kapil Agrawal | Swallowable Gastric Balloon',
    description: 'Expert Allurion Balloon treatment by Dr. Kapil Agrawal in Delhi. Swallowable gastric balloon without endoscopy or anesthesia. 23 years experience.',
    url: 'https://www.habiliteclinics.com/endoscopic-intra-gastric-balloon/allurion-balloon-treatment',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/endoscopic-intra-gastric-balloon/allurion-balloon-treatment',
  },
}

export default function AllurionBalloonPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Content */}
      <div className="container-custom mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-allurion-balloon-surgeon-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Best Allurion Balloon Surgeon in <span className="text-[#0891b2]">Delhi</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
            <Award size={16} className="text-[#f59e0b]" />
            <span>Dr. Kapil Agrawal - Expert Surgeon with Over 23 Years of Experience</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Dr. Kapil Agrawal is well known across Delhi for handling the Allurion Balloon with experience and care. He got more than 23 years of experience doing both surgery and non-surgery weight loss. Many patients have already taken help from him and lost weight safely, with modern methods that don&apos;t need cuts or operations. His advanced training and results in swallowable, no-endoscopy balloon therapy have made him a leading name in the field of obesity treatment in India.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center mb-2">
                <Award className="text-[#0891b2]" size={24} />
              </div>
              <p className="text-sm font-semibold text-gray-900">Internationally Trained Expert</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center mb-2">
                <Clock className="text-[#0891b2]" size={24} />
              </div>
              <p className="text-sm font-semibold text-gray-900">Discharge within 24 hours</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle2 className="text-[#0891b2]" size={24} />
              </div>
              <p className="text-sm font-semibold text-gray-900">Cashless Insurance Facility</p>
            </div>
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
                src="/images/best-allurion-intragastric-balloon-specialist-in-delhi.webp"
                alt="Top 5 Best Allurion Intragastric Balloon Specialist in Delhi - Dr. Kapil Agrawal | Swallowable Gastric Balloon | Non-Surgical Weight Loss | 23 Years Experience | Apollo Hospital | Book Consultation"
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
          {/* About Allurion Balloon */}
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">What Is Allurion Intragastric Balloon</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              Allurion Intragastric Balloon is a non-surgical, swallow-type balloon that helps with weight loss by reducing hunger and helping with portion control. The person swallows a small capsule that has a balloon inside, deflated. After it reaches the stomach, the balloon is filled with gas and takes up space, so the person starts feeling full quickly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              This balloon is different from the regular ones used before—there&apos;s no need for anaesthesia or endoscopy to put it in or take it out. It stays in the stomach for about 16 weeks, then slowly deflates on its own and leaves the body through the digestive system.
            </p>
            
            {/* Cost Calculator */}
            <div className="my-8 flex justify-center">
              <div className="w-full max-w-5xl">
                <CostCalculator serviceName="Allurion Balloon" />
              </div>
            </div>
          </section>

          {/* Who Can Benefit */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Who Can Benefit from the Allurion Balloon</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              According to Dr. Kapil Agrawal, ideal candidates for the Allurion Balloon procedure include:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Individuals with a BMI between 27 and 40+</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">People who have struggled with long-term weight loss</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Those who want to avoid surgery</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Patients preparing for future bariatric surgery</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">People at risk of diabetes, high BP, joint pain, PCOS, or sleep apnea</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> Patients should not have active ulcers, strictures, or gastrointestinal bleeding disorders.
              </p>
            </div>
          </section>

          {/* Step-by-Step Process */}
          <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 text-center">Step-by-Step Process of the Allurion Balloon Treatment</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  Pre-treatment Evaluation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Complete medical history review, blood tests, and BMI check to determine eligibility
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Zap className="text-[#0891b2] mr-2" size={24} />
                  Swallowing the Capsule
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Patient swallows a capsule containing the deflated balloon under supervision
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="text-[#0891b2] mr-2" size={24} />
                  Inflation Phase
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The balloon is expanded with gas after it settles in the stomach.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Shield className="text-[#0891b2] mr-2" size={24} />
                  X-ray Confirmation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Imaging is done to verify proper placement and inflation
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Clock className="text-[#0891b2] mr-2" size={24} />
                  Observation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Patient is monitored for up to 2 hours before discharge
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Heart className="text-[#0891b2] mr-2" size={24} />
                  Natural Expulsion
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Around the 4-month mark, the balloon deflates by itself and passes out naturally through the gastrointestinal tract.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Benefits of the Allurion Gastric Balloon</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">No Anaesthesia or Surgery</p>
                    <p className="text-gray-700 text-sm">Entirely non-invasive procedure with no cuts, stitches, or hospital stay</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Quick Placement</p>
                    <p className="text-gray-700 text-sm">The procedure takes less than 30 minutes and is completed in a single outpatient visit</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Natural Exit</p>
                    <p className="text-gray-700 text-sm">No endoscopic removal needed as the balloon exits on its own</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Reduces Appetite</p>
                    <p className="text-gray-700 text-sm">The balloon limits stomach space, making the patient feel full with less food</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Improves Portion Control</p>
                    <p className="text-gray-700 text-sm">Encourages better calorie intake habits and mindful eating</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Helps Rewire Eating Patterns</p>
                    <p className="text-gray-700 text-sm">The 4-month support program aids in resetting long-term behaviours</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Effective Weight Loss</p>
                    <p className="text-gray-700 text-sm">Average weight loss is 10–15 kg within 16 weeks, depending on compliance</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Globally Recognised Technology</p>
                    <p className="text-gray-700 text-sm">Developed in Europe and widely adopted in the US</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Smart Monitoring Tools</p>
                    <p className="text-gray-700 text-sm">Supported by Allurion&apos;s AI-powered app, digital scales, and trackers</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Care Continuity via Habilite Clinics</p>
                    <p className="text-gray-700 text-sm">Coordinated by Habilite&apos;s clinical team for seamless scheduling, care follow-ups, and emergency assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Post-Treatment Support */}
          <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Post-Treatment Support and Monitoring</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Once the balloon is placed, Dr. Kapil Agrawal&apos;s team offers structured aftercare:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Tailored Meal Planning</p>
                    <p className="text-gray-700 text-sm">Personalised nutrition plans designed by in-house dietitians</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Lifestyle Tracking Tools</p>
                    <p className="text-gray-700 text-sm">Allurion&apos;s mobile app and Bluetooth-connected devices help monitor food intake, weight, and activity</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Routine Medical Check-ins</p>
                    <p className="text-gray-700 text-sm">Follow-up consultations with behavioural and medical specialists to track adherence and provide guidance</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">24/7 Helpline Access</p>
                    <p className="text-gray-700 text-sm">Patients can connect with the clinic team for any questions or concerns</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Consistent Support from Habilite Clinics</p>
                    <p className="text-gray-700 text-sm">The clinic&apos;s infrastructure ensures proper follow-up appointments and comprehensive wellness tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Side Effects */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Are There Any Side Effects?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mild side effects may occur during the first few days and generally resolve without intervention:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center">
                <CheckCircle2 className="text-[#0891b2] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Nausea</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-[#0891b2] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Mild abdominal cramps</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-[#0891b2] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Acid reflux</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-[#0891b2] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Temporary bloating</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-[#0891b2] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Vomiting</span>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              These can be effectively managed with medication and rest.
            </p>
          </section>

          {/* Why Choose Dr. Kapil Agrawal */}
          <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Why Choose Dr. Kapil Agrawal for the Allurion Balloon Treatment in Delhi</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              With years of work in obesity care, Dr. Kapil Agrawal stands out in Delhi, among specialists offering Allurion Balloon treatment. He has been doing bariatric and endoscopy work for more than 23 years now. Many patients come to him who don&apos;t want surgery but still want proper weight loss treatment. He is trained in advanced global methods, so he follows safe and updated techniques.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              His team also helps a lot—it includes dieticians, hormone doctors, fitness people, and behaviour experts too. They all work together so that patient care is complete, not just one part. Dr. Kapil also listens to what the patient needs and makes the plan according to that. He doesn&apos;t just do the procedure and leave. He supports till the patient gets real, long-term results.
            </p>
            <p className="text-gray-700 leading-relaxed">
              He is affiliated with premier hospitals all over Delhi NCR, with centres in South Delhi, Noida and Gurugram. His organization consists of trained bariatric personnel, nutritionists certified by their respective organizations, and behaviour counsellors, who assist patients at every stage of the treatment to ensure that outcomes are long-lasting and life-changing.
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
                  <p className="text-gray-700 text-sm">The Allurion Balloon is a daycare procedure. You can go home within a couple of hours after placement. Most patients can return to normal activities immediately with minimal discomfort.</p>
                </div>
              </div>
              <div className="flex items-start">
                <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                  <p className="text-gray-700 text-sm">Regular follow-up appointments with nutrition counseling, lifestyle tracking through Allurion&apos;s app, and medical monitoring help ensure optimal weight loss results and long-term success.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Lifestyle Support</p>
                  <p className="text-gray-700 text-sm">Our team provides comprehensive support including tailored meal planning, lifestyle tracking tools, and 24/7 helpline access to help you achieve and maintain successful weight loss.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Consultation Form */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
            <ConsultationForm 
              serviceName="Allurion Balloon"
              serviceSlug="best-allurion-surgeon-in-delhi"
            />
          </div>
        </div>

        {/* Post-operative Care Section */}
        <div className="mt-12">
          <PostOperativeCare />
        </div>

        {/* WhatsApp Expert Chat */}
        <div className="mt-8">
          <WhatsAppExpertChat serviceName="Allurion Balloon" />
        </div>

        {/* Contact Section */}
        <div className="max-w-5xl mx-auto mt-12 bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Contact Dr. Kapil Agrawal Today</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-4">
            Book your appointment with Dr. Kapil Agrawal, one of the best Allurion Balloon specialists in Delhi, India today to schedule your consultation.
          </p>
          <div className="text-center mt-6">
            <p className="text-gray-700 font-semibold mb-2">You can contact us on:</p>
            <p className="text-[#0891b2] text-lg font-semibold">+91-9999456455, +91-9910024564</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <AllurionBalloonFAQ />
          </div>
        </div>
      </div>
    </div>
  )
}



