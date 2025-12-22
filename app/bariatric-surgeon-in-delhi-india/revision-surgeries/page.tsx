import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { Award, CheckCircle2, Clock, User, TrendingUp, Heart, Activity, AlertCircle, Shield } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import RevisionSurgeryFAQ from './RevisionSurgeryFAQ'
const RecoveryTimeline = dynamic(() => import('@/components/services/RecoveryTimeline'), { ssr: false })

export const metadata: Metadata = {
  title: 'Revision Bariatric Surgery in Delhi - Dr. Kapil Agrawal | Correcting Previous Weight Loss Surgery',
  description: 'Expert revision bariatric surgery in Delhi, India by Dr. Kapil Agrawal. Correcting and improving previous weight loss surgeries for inadequate weight loss, weight regain, or complications. 23 years experience, 7000+ successful surgeries. Book consultation.',
  keywords: [
    'revision bariatric surgery delhi',
    'revision weight loss surgery delhi',
    'bariatric revision surgery delhi',
    'failed bariatric surgery delhi',
    'weight regain after bariatric surgery',
    'Dr. Kapil Agrawal revision surgery',
    'lap band revision delhi',
    'gastric sleeve revision delhi',
    'gastric bypass revision delhi',
  ],
  openGraph: {
    title: 'Revision Bariatric Surgery in Delhi - Dr. Kapil Agrawal | Correcting Previous Weight Loss Surgery',
    description: 'Expert revision bariatric surgery by Dr. Kapil Agrawal in Delhi. Correcting and improving previous weight loss surgeries for better outcomes.',
    url: 'https://www.habiliteclinics.com/bariatric-surgeon-in-delhi-india/revision-surgeries',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatric-surgeon-in-delhi-india/revision-surgeries',
  },
}

export default function RevisionSurgeryPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Content */}
      <div className="container-custom mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">revision-bariatric-surgery-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Revision Bariatric Surgery in <span className="text-[#0891b2]">Delhi</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
            <Award size={16} className="text-[#f59e0b]" />
            <span>Dr. Kapil Agrawal - Expert Surgeon with Over 23 Years of Experience</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Revision bariatric surgery refers to weight loss surgery that is done when patients do not obtain outstanding or desired results following previous weight loss surgeries. Although bariatric surgery is very effective, but in about 10% of the patients, the patients may not achieve their weight loss goals either because of inadequate weight loss, weight regain or complications arising out of surgery.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center mb-2">
                <Shield className="text-[#0891b2]" size={24} />
              </div>
              <p className="text-sm font-semibold text-gray-900">Expert Revision Surgery</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center mb-2">
                <Clock className="text-[#0891b2]" size={24} />
              </div>
              <p className="text-sm font-semibold text-gray-900">Comprehensive Evaluation</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle2 className="text-[#0891b2]" size={24} />
              </div>
              <p className="text-sm font-semibold text-gray-900">Multi-Disciplinary Approach</p>
            </div>
          </div>
          
          <div className="mt-6">
            <CallUsButton />
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* About Revision Surgery */}
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Revision Bariatric Surgery</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              Revision bariatric surgery refers to weight loss surgery that is done when patients do not obtain outstanding or desired results following previous weight loss surgeries.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Although bariatric surgery is very effective, but in about 10% of the patients, the patients may not achieve their weight loss goals either because of inadequate weight loss, weight regain or complications arising out of surgery.
            </p>
            
            {/* Cost Calculator */}
            <div className="my-8 flex justify-center">
              <div className="w-full max-w-5xl">
                <CostCalculator serviceName="Revision Bariatric Surgery" />
              </div>
            </div>
          </section>

          {/* Evaluating the Cause of Failure */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Evaluating the Cause of Failure</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The success of bariatric surgery largely relies upon the type of procedure and the experience and expertise of surgeon in performing the procedure. One of the most challenging part during surgery is the creation of new gastric pouch. Sometimes, due to inadequate experience of the surgeon, the gastric pouch can be very large. It often results in poor weight loss or weight regain after a period of few months.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <AlertCircle className="text-[#0891b2] mr-2" size={24} />
                  Patient Factors
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Patients must understand weight loss surgery is merely a tool to achieve weight loss and they must learn to use it properly and effectively. Inadequate knowledge, poor follow ups, no change in eating habits and continuation of poor life style leads to poor outcomes.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  Surgical Complications
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Complications arising out of weight loss surgery like infection, stomach ulcer, intra-abdominal infections may also affect the weight loss. Management of such problems often tends to shift our focus from weight loss to managing and treating such complications.
                </p>
              </div>
            </div>
          </section>

          {/* Is Revision Surgery an Option */}
          <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Is Revision Surgery an Option for Me</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We recognize that morbid obesity is a multi-factorial disease and hence we always utilize a multi-disciplined approach to evaluate and treat patients who have failed to achieve desired outcomes after bariatric surgery. We have a team of dedicated bariatric physician, endocrinologist, nutritionists and psychologists who would minutely look into each and every aspect to undermine the cause of failure.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bariatric surgery can fail because it was done correctly. Sometimes, the type was procedure adopted was not the best keeping in view the medical history, dietary habits and the life style of the patient. In very few cases, we will never know the reason of failure. But, whatever may be the reason, everyone deserves a second chance and we won&apos;t leave any stone unturned in accomplishing your dream of successful weight loss.
            </p>
          </section>

          {/* Options for Revision */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Options for Revision</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              It is important to understand that we always recommend non-surgical routes whenever possible. In fact, diet and exercise alone are often the source of unsatisfying weight loss results. Imparting knowledge regarding life style modifications, helping them in adopting healthy eating habits, consuming the calories judiciously and engaging them in physical activities which increases metabolic rate.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If revision bariatric surgery is unavoidable, then Dr. Kapil Agrawal and his team will work with you to identify the most effective treatment for you. We thoroughly educate patients on the benefits and risks of every available revision surgery so that they can make informed decisions about their treatment.
            </p>
          </section>

          {/* Types of Revision Surgeries */}
          <section className="w-full max-w-5xl mx-auto space-y-8">
            {/* Lap Band Revision */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Lap Band Revision</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lap band surgery has fallen into disrepute because of inadequate weight loss and poor resolution of comorbidities. Sometimes, the band may get displaced or erode into the stomach causing infection. To correct the complications and help you in achieving outstanding weight loss, Dr. Kapil Agrawal and his team can perform other bariatric surgery procedures including gastric sleeve surgery or gastric bypass surgery to mend the hole and put your health back on track.
              </p>
            </div>

            {/* Gastric Sleeve Revision */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Gastric Sleeve Revision</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sleeve gastrectomy is one of the best bariatric procedure if done in proper candidates. However, in some individuals who don&apos;t follow dietary advices, refrain from exercise, start eating excessively, the stomach dilates or become stretched out over a period of time. Sometimes, lack of expertise on part of surgeon resulting in creation of large new stomach may also be reason for inadequate weight loss or weight regain.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Such patient could benefit from a different type of bariatric surgery like gastric bypass or mini gastric bypass. In selected individuals, we can perform the same procedure again by trimming the sleeve again.
              </p>
            </div>

            {/* Gastric Bypass Revision */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Gastric Bypass Revision</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sometimes, poor eating habits can dilate the new stomach pouch. Even lack of expertise can result in creation of large stomach pouch. As a result, patient experiences poor weight loss or weight regain in a few months.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In such patients, resizing the pouch in the revision bariatric surgery is the best option. The pouch is trimmed and reconnected to the intestine and the patient start losing weight again.
              </p>
            </div>
          </section>

          {/* Recovery & Aftercare */}
          <section className="w-full max-w-4xl mx-auto bg-gray-50 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Recovery & Aftercare</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                  <p className="text-gray-700 text-sm">Recovery from revision bariatric surgery typically takes 2-4 weeks with gradual return to normal activities. Most patients are discharged within 24-48 hours after surgery.</p>
                </div>
              </div>
              <div className="flex items-start">
                <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                  <p className="text-gray-700 text-sm">Regular follow-up appointments with our multi-disciplinary team including bariatric physician, endocrinologist, nutritionists and psychologists help ensure optimal results and long-term success.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Lifestyle Support</p>
                  <p className="text-gray-700 text-sm">Our team provides comprehensive support including lifestyle modifications, healthy eating habits, and physical activity guidance to help you achieve and maintain successful weight loss.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Consultation Form */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
            <ConsultationForm 
              serviceName="Revision Bariatric Surgery"
              serviceSlug="revision-surgeries"
            />
          </div>
        </div>

        {/* Post-operative Care Section */}
        <div className="mt-12">
          <PostOperativeCare />
        </div>

        {/* WhatsApp Expert Chat */}
        <div className="mt-8">
          <WhatsAppExpertChat serviceName="Revision Bariatric Surgery" />
        </div>

        {/* Contact Section */}
        <div className="max-w-5xl mx-auto mt-12 bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Contact Dr. Kapil Agrawal Today</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-4">
            Throughout every step of your bariatric surgery revision, our specialist team will be there to support you. We understand emotional turmoil one has to undergo after a failed procedure. We are here to offer you hope with a safe, successful second surgery!
          </p>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-4">
            Book your appointment with Dr. Kapil Agrawal, one of the best bariatric surgeon in Delhi, India today to schedule your consultation.
          </p>
          <div className="text-center mt-6">
            <p className="text-gray-700 font-semibold mb-2">You can contact us on:</p>
            <p className="text-[#0891b2] text-lg font-semibold">+91-9910024564, +91-9999456455</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <RevisionSurgeryFAQ />
          </div>
        </div>
      </div>
    </div>
  )
}

