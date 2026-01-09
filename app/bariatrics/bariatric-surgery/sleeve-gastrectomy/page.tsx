import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { Award, CheckCircle2, Clock, User, TrendingUp, Heart, Activity, Zap } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import GastricSleeveFAQ from './GastricSleeveFAQ'
const RecoveryTimeline = dynamic(() => import('@/components/services/RecoveryTimeline'), { ssr: false })

export const metadata: Metadata = {
  title: 'Sleeve Gastrectomy Surgeon in Delhi - Dr. Kapil Agrawal | Gastric Sleeve Surgery',
  description: 'Expert sleeve gastrectomy (gastric sleeve) surgery in Delhi, India by Dr. Kapil Agrawal. One of the most popular, low maintenance, straightforward bariatric procedure with excellent weight loss. 23 years experience, 7000+ successful surgeries. Book consultation.',
  keywords: [
    'sleeve gastrectomy delhi',
    'gastric sleeve surgery delhi',
    'sleeve gastrectomy surgeon delhi',
    'vertical sleeve gastrectomy delhi',
    'bariatric surgery delhi',
    'weight loss surgery delhi',
    'Dr. Kapil Agrawal sleeve gastrectomy',
    'laparoscopic sleeve gastrectomy delhi',
    'single port gastric sleeve delhi',
  ],
  openGraph: {
    title: 'Sleeve Gastrectomy Surgeon in Delhi - Dr. Kapil Agrawal | Gastric Sleeve Surgery',
    description: 'Expert sleeve gastrectomy surgery by Dr. Kapil Agrawal in Delhi. Popular, low maintenance bariatric procedure with excellent weight loss results.',
    url: 'https://www.habiliteclinics.com/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy-surgery',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy-surgery',
  },
}

export default function GastricSleevePage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Content */}
      <div className="container-custom mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">sleeve-gastrectomy-surgeon-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Sleeve Gastrectomy Surgeon in <span className="text-[#0891b2]">Delhi</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
            <Award size={16} className="text-[#f59e0b]" />
            <span>Dr. Kapil Agrawal - Expert Surgeon with Over 23 Years of Experience</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            One of the most popular, low maintenance, straight forward bariatric procedure with excellent weight loss. Vertical Sleeve Gastrectomy is a purely restrictive type of surgery that has become one of the most commonly performed surgery because of substantial weight loss, no requirement of supplements and minimal follow-up.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center mb-2">
                <Award className="text-[#0891b2]" size={24} />
              </div>
              <p className="text-sm font-semibold text-gray-900">Set and Forget Type</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center mb-2">
                <Clock className="text-[#0891b2]" size={24} />
              </div>
              <p className="text-sm font-semibold text-gray-900">Minimal Follow-up</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle2 className="text-[#0891b2]" size={24} />
              </div>
              <p className="text-sm font-semibold text-gray-900">No Supplements Required</p>
            </div>
          </div>
          
          <div className="mt-6">
            <CallUsButton />
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* About Sleeve Gastrectomy */}
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Sleeve Gastrectomy</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              One of the most popular, low maintenance, straight forward bariatric procedure with excellent weight loss.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Vertical Sleeve Gastrectomy is a purely restrictive type of surgery. It has become one of the most commonly performed surgery because of substantial weight loss, no requirement of supplements and minimal follow-up. It is in fact, set and forget type of surgery.
            </p>
            
            {/* Cost Calculator */}
            <div className="my-8 flex justify-center">
              <div className="w-full max-w-5xl">
                <CostCalculator serviceName="Sleeve Gastrectomy Surgery" />
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">How It Works</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The entire surgery is performed laparoscopically with the help of 4-5 small incisions. About 85% of the stomach is removed with the help of staplers. It significantly reduces the capacity of stomach from 1.5 liter to 150 ml. The unwanted portion of stomach is removed from the body.
            </p>
            
            <div className="space-y-6">
              {/* Ghrelin Reduction */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  Reduced Hunger Hormone (Ghrelin)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The fundus of stomach which is removed is responsible for the production of hormone &quot;Ghrelin&quot;. It is also known as hunger hormone as it continuously stimulates the brain to eat more food. After surgery, you can be confident that your hunger levels are going to be significantly down.
                </p>
              </div>

              {/* Patient Benefits */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Heart className="text-[#0891b2] mr-2" size={24} />
                  Patient Benefits
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Patients who undergo this form of weight loss surgery get fuller faster, feel fuller longer because of reduced appetite.
                </p>
              </div>
            </div>
          </section>

          {/* Advantages of Gastric Sleeve Surgery */}
          <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Advantages of Gastric Sleeve Surgery</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Successful gastric sleeve surgery often has an enormous impact on patients&apos; quality of life. Potential benefits include:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Rapid Weight Loss</p>
                    <p className="text-gray-700 text-sm">Gastric sleeve surgery produces excellent weight loss and patient satisfaction.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Reduced Appetite</p>
                    <p className="text-gray-700 text-sm">Because of profound hormonal changes, especially reduced levels of ghrelin, there is significantly reduced appetite and cravings for sweets.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Reduced Complications</p>
                    <p className="text-gray-700 text-sm">This procedure is associated with less complications when compared to other bariatric procedures. Since there is no rerouting of intestines and intestines remain untouched, the chances of technical complications are quite low.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Minimal Follow-up, No Supplements</p>
                    <p className="text-gray-700 text-sm">Gastric sleeve surgery is a set and forget type of surgery. Patients do not require stringent follow-ups as in other bariatric procedures. Since there is no re-routing of the intestines or any malabsorption, patients do not require any nutritional supplements.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results of Gastric Sleeve Surgery */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Results of Gastric Sleeve Surgery</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Weight Loss Results</h3>
                <p className="text-gray-700 leading-relaxed">
                  The patients lose about 60%-70% of the excess body weight following weight loss surgery. One can achieve more weight loss by following a strict diet plan and regular exercise.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Diabetes Resolution</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Gastric sleeve surgery can cure diabetes in 80% of the patients. In rest 20% of the patients, the requirement of medicines is greatly reduced. The duration of diabetes is one of the most important factor in deciding the results. If the duration of diabetes is less than 5 years, the chances of cure are very high.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Other Health Benefits</h3>
                <p className="text-gray-700 leading-relaxed">
                  Because of significant weight loss, patients will find tremendous relief from back pain, hip pain, knee pain, and foot pain allowing them to walk and exercise more. After weight loss, patients also benefit from menstrual irregularity, sleep apnea, snoring and depression.
                </p>
              </div>
            </div>
          </section>

          {/* Single Port Gastric Sleeve Surgery */}
          <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Single Port Gastric Sleeve Surgery</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Single port bariatric surgery is an advanced, minimal access technique to ease post-operative discomfort and reduce complications in bariatric surgery. In traditional or conventional laparoscopic bariatric surgery, a surgeon creates 4-5 tiny incisions whereas in this technique, the entire surgery remains the same but carried out through a single, small incision made into the umbilicus.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Zap className="text-[#0891b2] mr-2" size={24} />
                Benefits of Single Port Surgery
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>As a result, the scar is invisible making it a virtually scar free surgery.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Along with amazing aesthetic results, rate of complications and infections are reduced and recovery becomes much faster.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>We offer this technique in selected group of patients. The patients with very high BMI, cirrhotic liver, multiple abdominal surgeries are usually advised to undergo conventional laparoscopic sleeve gastrectomy.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Long-term Success */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Long-term Success</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Although sleeve gastrectomy is an excellent bariatric procedure, the long-term success or long-lasting results depend on the patient&apos;s commitment of maintaining healthy eating habits, mindful eating and leading an active healthy lifestyle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To help you achieve long lasting results, our team ensures continuous care and monitoring of our patients. Our team of bariatric nutritionists stay in touch during your weight loss journey and ensure that you develop positive, permanent changes in your dietary habits and life style.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our support group meetings keep you motivated and helps in addressing all your concerns from time to time.
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
                  <p className="text-gray-700 text-sm">Most patients are discharged within 24 hours after sleeve gastrectomy surgery. Full recovery typically takes 2-4 weeks with gradual return to normal activities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                  <p className="text-gray-700 text-sm">Regular follow-up appointments with nutrition counseling help ensure optimal weight loss results. Our team of bariatric nutritionists provide continuous support throughout your weight loss journey.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">No Supplements Required</p>
                  <p className="text-gray-700 text-sm">Since there is no re-routing of the intestines or any malabsorption, patients do not require any nutritional supplements, making it a low-maintenance procedure.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Recovery Timeline */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-md border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Aftercare Milestones</h2>
            <RecoveryTimeline title="Sleeve Gastrectomy Recovery Timeline" />
          </section>
        </div>

        {/* Consultation Form */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
            <ConsultationForm 
              serviceName="Sleeve Gastrectomy Surgery"
              serviceSlug="sleeve-gastrectomy"
            />
          </div>
        </div>

        {/* Post-operative Care Section */}
        <div className="mt-12">
          <PostOperativeCare />
        </div>

        {/* WhatsApp Expert Chat */}
        <div className="mt-8">
          <WhatsAppExpertChat serviceName="Sleeve Gastrectomy Surgery" />
        </div>

        {/* Contact Section */}
        <div className="max-w-5xl mx-auto mt-12 bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Contact Our Bariatric Team</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-4">
            Learn if you qualify for most advanced single port gastric sleeve surgery. Our team is happy to speak with you and help you understand any of the treatments we offer or answer any questions you have.
          </p>
          <div className="text-center mt-6">
            <p className="text-gray-700 font-semibold mb-2">You can contact us on:</p>
            <p className="text-[#0891b2] text-lg font-semibold">+91-9999456455, +91-9910024564</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <GastricSleeveFAQ />
          </div>
        </div>
      </div>
    </div>
  )
}


