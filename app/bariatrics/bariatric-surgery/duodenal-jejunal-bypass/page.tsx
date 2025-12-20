import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { Award, CheckCircle2, Clock, User, TrendingUp, Heart, Activity, Shield } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import DuodenalJejunalBypassFAQ from './DuodenalJejunalBypassFAQ'
const RecoveryTimeline = dynamic(() => import('@/components/services/RecoveryTimeline'), { ssr: false })

export const metadata: Metadata = {
  title: 'Duodenal Jejunal Bypass Surgery in Delhi - Dr. Kapil Agrawal | Single Anastomosis Gastric Bypass',
  description: 'Expert duodenal jejunal bypass surgery in Delhi, India by Dr. Kapil Agrawal. Laparoscopic sleeve gastrectomy with duodenal jejunal bypass - a safe and effective bariatric procedure. 23 years experience, 7000+ successful surgeries. Book consultation.',
  keywords: [
    'duodenal jejunal bypass delhi',
    'duodenal jejunal bypass surgery delhi',
    'single anastomosis gastric bypass delhi',
    'sleeve gastrectomy with duodenal jejunal bypass',
    'bariatric surgery delhi',
    'weight loss surgery delhi',
    'Dr. Kapil Agrawal duodenal jejunal bypass',
    'laparoscopic duodenal jejunal bypass delhi',
  ],
  openGraph: {
    title: 'Duodenal Jejunal Bypass Surgery in Delhi - Dr. Kapil Agrawal | Single Anastomosis Gastric Bypass',
    description: 'Expert duodenal jejunal bypass surgery by Dr. Kapil Agrawal in Delhi. Safe and effective bariatric procedure combining sleeve gastrectomy with duodenal jejunal bypass.',
    url: 'https://www.habiliteclinics.com/bariatrics/bariatric-surgery/duodenal-jejunal-bypass',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatrics/bariatric-surgery/duodenal-jejunal-bypass',
  },
}

export default function DuodenalJejunalBypassPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Content */}
      <div className="container-custom mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">duodenal-jejunal-bypass-surgery-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Duodenal Jejunal Bypass Surgery in <span className="text-[#0891b2]">Delhi</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
            <Award size={16} className="text-[#f59e0b]" />
            <span>Dr. Kapil Agrawal - Expert Surgeon with Over 23 Years of Experience</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Laparoscopic duodenal jejunal bypass or single anastomosis gastric bypass is an upcoming bariatric surgery that is making its mark across the world. A very safe and effective operation yielding excellent results when performed on suitable candidates.
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
        <div className="max-w-5xl mx-auto space-y-12">
          {/* About Duodenal Jejunal Bypass */}
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Laparoscopic Sleeve Gastrectomy with Duodenal Jejunal Bypass</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              Laparoscopic duodenal jejunal bypass or single anastomosis gastric bypass is an upcoming bariatric surgery that is making its mark across the world as we discuss.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              A very safe and effective operation yielding excellent results when performed on suitable candidates. It is a modification of Duodenal Switch operation which is till date the most effective weight loss procedure but earned bad reputation because of severe malabsorption and other side effects.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              It is a combination of sleeve gastrectomy and mini gastric bypass and this combination eliminates some of the negative aspects of both the procedures.
            </p>
            
            {/* Cost Calculator */}
            <div className="my-8 flex justify-center">
              <div className="w-full max-w-5xl">
                <CostCalculator serviceName="Duodenal Jejunal Bypass Surgery" />
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">How It Works</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              As like other bariatric surgeries, it is also done laparoscopically with the help of small 4-5 tiny incisions.
            </p>
            
            <div className="space-y-6">
              {/* Stomach Removal */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  Stomach Reduction
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  About 70% of the stomach is removed with the help of staplers. It is done quite similar to sleeve gastrectomy but the amount of restriction is very less when compared to sleeve gastrectomy.
                </p>
              </div>

              {/* Intestinal Bypass */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="text-[#0891b2] mr-2" size={24} />
                  Intestinal Bypass
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Just below the stomach, the intestine is divided or cut preserving the pylorus or valve which controls passage of food from stomach to intestine. A new connection between stomach and intestine is created after bypassing approximately 250 cm of intestine.
                </p>
              </div>
            </div>
          </section>

          {/* Advantages of Duodenal Jejunal Bypass */}
          <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Advantages of Duodenal Jejunal Bypass</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">More Eating Freedom</p>
                    <p className="text-gray-700 text-sm">Although this procedure has both restrictive and malabsorptive elements, it is mainly a malabsorptive procedure. As a result, patient can eat a larger quantity of food when compared to sleeve gastrectomy.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Excellent Long-term Results</p>
                    <p className="text-gray-700 text-sm">It has excellent long-term results and the success rate is as good as gastric bypass both in terms of weight loss as well as resolution of obesity related health problems.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Profound Hormonal Changes</p>
                    <p className="text-gray-700 text-sm">It produces profound hormonal changes which reduce the appetite, causes secretion of insulin and control of diabetes.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Stomach Removed from Body</p>
                    <p className="text-gray-700 text-sm">The excised stomach is removed from the body. This does not happen with mini gastric bypass or standard gastric bypass. Sometimes these remnants of stomach may develop ulcer or even cancer which come into notice after a long time. It is also especially good for patients having a history of gastric cancer in the family.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Reduced Dumping Syndrome</p>
                    <p className="text-gray-700 text-sm">The pylorus or the valve controlling the passage of food is maintained in this procedure. As a result, the incidence of dumping syndrome is reduced which is more often seen in gastric bypass.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Duodenal Jejunal Bypass and Diabetes */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Duodenal Jejunal Bypass and Diabetes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Duodenal jejunal bypass procedure is a very good option in patients who are diabetic but not very obese. This bariatric procedure certainly has the benefits of gastric bypass but does not cause dumping or significant weight loss.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This procedure causes marked hormonal changes in the body which not only increases the secretion of insulin but also decreases the production of hormones which act against insulin. As a result, patient experiences a very good resolution of diabetes within a short span of time.
            </p>
          </section>

          {/* Comparison with Other Procedures */}
          <section className="w-full max-w-5xl mx-auto bg-gray-50 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 text-center">Duodenal Jejunal Bypass vs Other Procedures</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Feature</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Duodenal Jejunal Bypass</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Sleeve Gastrectomy</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Gastric Bypass</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Stomach Removal</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">70% removed</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">75-80% removed</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Small pouch created</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Food Intake</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">More freedom</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">More restrictive</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Restrictive</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Intestinal Bypass</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">250 cm</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">None</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">~100 cm</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Pylorus Preserved</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Yes</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Yes</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">No</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Dumping Syndrome</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Reduced</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Rare</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">More common</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Stomach Removed</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Yes</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Yes</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Recovery & Aftercare */}
          <section className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Recovery & Aftercare</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                  <p className="text-gray-700 text-sm">Most patients are discharged within 24 hours after duodenal jejunal bypass surgery. Full recovery typically takes 2-4 weeks with gradual return to normal activities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                  <p className="text-gray-700 text-sm">Regular follow-up appointments with nutrition counseling and medical monitoring help ensure optimal weight loss results and long-term success. Vitamin supplementation is essential due to malabsorption.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Lifestyle Changes</p>
                  <p className="text-gray-700 text-sm">Adherence to post-surgery lifestyle changes, proper diet, and regular exercise are essential for maintaining weight loss and preventing weight regain.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Recovery Timeline */}
          <section className="w-full max-w-5xl mx-auto bg-gray-50 rounded-2xl shadow-md border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Aftercare Milestones</h2>
            <RecoveryTimeline title="Duodenal Jejunal Bypass Recovery Timeline" />
          </section>
        </div>

        {/* Consultation Form */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
            <ConsultationForm 
              serviceName="Duodenal Jejunal Bypass Surgery"
              serviceSlug="duodenal-jejunal-bypass"
            />
          </div>
        </div>

        {/* Post-operative Care Section */}
        <div className="mt-12">
          <PostOperativeCare />
        </div>

        {/* WhatsApp Expert Chat */}
        <div className="mt-8">
          <WhatsAppExpertChat serviceName="Duodenal Jejunal Bypass Surgery" />
        </div>

        {/* Learn More Section */}
        <div className="max-w-5xl mx-auto mt-12 bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Learn More about Your Weight Loss Options at Habilite Clinics</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-4">
            Depending on your specific needs and lifestyle, Dr. Kapil Agrawal, will help you decide the weight loss treatment most likely to work best for you. Contact our team of weight loss specialists today to learn more about the affordable, safe, and effective weight loss treatment options, including cost-effective single anastomosis or loop duodenal jejunal bypass surgery.
          </p>
          <div className="text-center mt-6">
            <p className="text-gray-700 font-semibold mb-2">You can contact us on:</p>
            <p className="text-[#0891b2] text-lg font-semibold">+91-9910024564, +91-9999456455</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <DuodenalJejunalBypassFAQ />
          </div>
        </div>
      </div>
    </div>
  )
}


