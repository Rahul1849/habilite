import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { Award, CheckCircle2, Clock, User, TrendingUp, Activity, Heart } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import MiniGastricBypassFAQ from './MiniGastricBypassFAQ'
const RecoveryTimeline = dynamic(() => import('@/components/services/RecoveryTimeline'), { ssr: false })

export const metadata: Metadata = {
  title: 'Best Mini Gastric Bypass Surgery in Delhi - Dr. Kapil Agrawal | 23 Years Experience',
  description: 'Expert mini gastric bypass surgery in Delhi, India by Dr. Kapil Agrawal. Simplified version of gastric bypass with similar results and fewer complications. 23 years experience, 7000+ successful surgeries. Book consultation for mini gastric bypass in Delhi.',
  keywords: [
    'mini gastric bypass delhi',
    'mini gastric bypass surgery delhi',
    'best mini gastric bypass surgeon delhi',
    'bariatric surgery delhi',
    'weight loss surgery delhi',
    'mini bypass delhi',
    'Dr. Kapil Agrawal mini gastric bypass',
    'laparoscopic mini gastric bypass delhi',
  ],
  openGraph: {
    title: 'Best Mini Gastric Bypass Surgery in Delhi - Dr. Kapil Agrawal | 23 Years Experience',
    description: 'Expert mini gastric bypass surgery by Dr. Kapil Agrawal in Delhi. Simplified version of gastric bypass with similar results and fewer complications.',
    url: 'https://www.habiliteclinics.com/bariatric-surgeon-in-delhi-india/mini-gastric-bypass-surgery',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatric-surgeon-in-delhi-india/mini-gastric-bypass-surgery',
  },
}

export default function MiniGastricBypassPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Content */}
      <div className="container-custom mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">mini-gastric-bypass-surgery-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Best Mini Gastric Bypass Surgery in <span className="text-[#0891b2]">Delhi</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
            <Award size={16} className="text-[#f59e0b]" />
            <span>Dr. Kapil Agrawal - Expert Surgeon with Over 23 Years of Experience</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            A simplified version of standard gastric bypass with similar results and lesser rate of complications. Mini gastric bypass surgery is a modified and simplified version of standard gastric bypass, providing safer and more straightforward surgery with similar results.
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
          {/* About Mini Gastric Bypass */}
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Mini Gastric Bypass</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              A simplified version of standard gastric bypass with similar results and lesser rate of complications.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Mini gastric bypass surgery is a modified and simplified version of standard gastric bypass. While the traditional bypass surgery is highly efficient and provides very effective weight loss, the mini gastric bypass is safer, straight forward surgery with similar results.
            </p>
            
            {/* Cost Calculator */}
            <div className="my-8 flex justify-center">
              <div className="w-full max-w-5xl">
                <CostCalculator serviceName="Mini Gastric Bypass Surgery" />
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">How It Works</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Mini Gastric Bypass is a combined type of procedure having both restrictive and malabsorptive components.
            </p>
            
            <div className="space-y-6">
              {/* Restriction Component */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="text-[#0891b2] mr-2" size={24} />
                  Restrictive Component
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  However, when compared to standard gastric bypass, the stomach pouch is quite long due to which the restriction in intake of food is quite less. This gives patients more freedom for intake of foods while patients still are able to maintain weight.
                </p>
              </div>

              {/* Malabsorptive Component */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  Malabsorptive Component
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  In this procedure, the malabsorption is more in comparison to gastric bypass. About 200 cm of intestine is bypassed. As a result, there is no processing of food or absorption of calories or nutrients takes place in that part of intestine promoting further weight loss.
                </p>
              </div>

              {/* Hormonal Changes */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Heart className="text-[#0891b2] mr-2" size={24} />
                  Hormonal Changes
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This surgery brings profound hormonal changes in the body. It increases the secretion as well as sensitivity of insulin thus causing resolution of diabetes.
                </p>
              </div>
            </div>

            {/* Procedure Details */}
            <div className="mt-6 bg-white rounded-lg p-6 border border-[#0891b2]/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Procedure Details</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Like all other bariatric procedures offered by our team, the mini gastric bypass is performed laparoscopically, with a fiber-optic camera and four or five small incisions. This minimizes post-operative discomfort, speeds recovery, and reduces scarring.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In this procedure, with the help of laparoscopic staplers, a new stomach pouch is created. The new pouch is quite thin and long. This stomach pouch is joined to lower part of small intestine or bowel, thereby, bypassing about 200 cm of intestine.
              </p>
            </div>
          </section>

          {/* Advantages of Mini Gastric Bypass */}
          <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Advantages of Mini Gastric Bypass</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Less Food Restriction</p>
                    <p className="text-gray-700 text-sm">The restriction of food is less when compared to standard gastric bypass. It means patients will have more liberty to eat food when compared to standard gastric bypass.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Simpler Procedure</p>
                    <p className="text-gray-700 text-sm">This procedure involves a single joint or anastomosis whereas in standard gastric bypass, there are two joints or anastomosis, thereby making it a bit more complicated and more prone to complications.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Lower Risk</p>
                    <p className="text-gray-700 text-sm">This procedure is less risky to perform and technically easier for the surgeon to perform.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Better Weight Loss & Health Outcomes</p>
                    <p className="text-gray-700 text-sm">Better weight loss and better resolution of co-morbidities like diabetes, hypertension when compared to gastric bypass. Patients often report losing up to 80 or 85 percent of excess weight in a span of 12 months.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison with Standard Gastric Bypass */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 text-center">Mini Gastric Bypass vs Standard Gastric Bypass</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Feature</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Mini Gastric Bypass</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Standard Gastric Bypass</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Anastomosis (Joints)</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Single</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Two</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Complexity</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Simpler</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">More Complex</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Food Restriction</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Less Restrictive</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">More Restrictive</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Intestinal Bypass</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">200 cm</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">~100 cm</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Risk Level</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Lower</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">Higher</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Weight Loss</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">80-85% excess weight</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">80-85% excess weight</td>
                  </tr>
                </tbody>
              </table>
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
                  <p className="text-gray-700 text-sm">Most patients are discharged within 24 hours after mini gastric bypass surgery. Full recovery typically takes 2-4 weeks with gradual return to normal activities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                  <p className="text-gray-700 text-sm">Regular follow-up appointments with nutrition counseling and medical monitoring help ensure optimal weight loss results and long-term success.</p>
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
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-md border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Aftercare Milestones</h2>
            <RecoveryTimeline title="Mini Gastric Bypass Recovery Timeline" />
          </section>
        </div>

        {/* Consultation Form */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
            <ConsultationForm 
              serviceName="Mini Gastric Bypass Surgery"
              serviceSlug="mini-gastric-bypass"
            />
          </div>
        </div>

        {/* Post-operative Care Section */}
        <div className="mt-12">
          <PostOperativeCare />
        </div>

        {/* WhatsApp Expert Chat */}
        <div className="mt-8">
          <WhatsAppExpertChat serviceName="Mini Gastric Bypass Surgery" />
        </div>

        {/* FAQs */}
        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <MiniGastricBypassFAQ />
          </div>
        </div>
      </div>
    </div>
  )
}

