import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { Award, CheckCircle2, Clock, User, TrendingUp, Heart, Activity } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import GastricBypassFAQ from './GastricBypassFAQ'
const RecoveryTimeline = dynamic(() => import('@/components/services/RecoveryTimeline'), { ssr: false })

export const metadata: Metadata = {
  title: 'Best Gastric Bypass Surgery in Delhi - Dr. Kapil Agrawal | 23 Years Experience',
  description: 'Expert gastric bypass surgery in Delhi, India by Dr. Kapil Agrawal. Gold standard bariatric procedure for significant weight loss and diabetes control. 23 years experience, 7000+ successful surgeries. Book consultation for gastric bypass in Delhi.',
  keywords: [
    'gastric bypass delhi',
    'gastric bypass surgery delhi',
    'best gastric bypass surgeon delhi',
    'bariatric surgery delhi',
    'weight loss surgery delhi',
    'gastric bypass diabetes',
    'Dr. Kapil Agrawal gastric bypass',
    'laparoscopic gastric bypass delhi',
  ],
  openGraph: {
    title: 'Best Gastric Bypass Surgery in Delhi - Dr. Kapil Agrawal | 23 Years Experience',
    description: 'Expert gastric bypass surgery by Dr. Kapil Agrawal in Delhi. Gold standard bariatric procedure for significant weight loss and diabetes control.',
    url: 'https://www.habiliteclinics.com/bariatrics/bariatric-surgery/gastric-bypass',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatrics/bariatric-surgery/gastric-bypass',
  },
}

export default function GastricBypassPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Content */}
      <div className="container-custom mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">gastric-bypass-surgery-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Best Gastric Bypass Surgery in <span className="text-[#0891b2]">Delhi</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] border border-[#f59e0b]/40 text-sm font-semibold text-[#92400e] mb-4">
            <Award size={16} className="text-[#f59e0b]" />
            <span>Dr. Kapil Agrawal - Expert Surgeon with Over 23 Years of Experience</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            As one of the most effective and successful bariatric procedures, gastric bypass is still referred to as the gold standard of bariatric surgery. Our highly experienced bariatric team has helped thousands of patients regain their confidence and lead a highly active and good quality of life.
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
          {/* About Gastric Bypass */}
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Gastric Bypass</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              As one of the most effective and successful bariatric procedures, it is still referred as the gold standard of bariatric surgery.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              If you are obese and other methods of weight loss have been ineffective, then gastric bypass may be a very good option for you. It is one of the most commonly performed bariatric surgery in the world because of its safely, efficacy and excellent long-term results. Our highly experienced bariatric team has helped thousands of patients regain their confidence and lead a highly active and good quality of life with low cost gastric bypass surgery.
            </p>
            
            {/* Cost Calculator */}
            <div className="my-8 flex justify-center">
              <div className="w-full max-w-5xl">
                <CostCalculator serviceName="Gastric Bypass Surgery" />
              </div>
            </div>
          </section>

          {/* What is Gastric Bypass */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">What is Gastric Bypass</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The procedure is performed laparoscopically with the help of 4-5 tiny incisions. With the help of staplers, the stomach is divided into two pouches completely sealed off from each other. The upper small pouch can now only hold only a cup of food at a given time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              It is a combination of sleeve gastrectomy and mini gastric bypass and this combination eliminates some of the negative aspects of both the procedures.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The small bowel is now divided and one of the divided end is joined to upper pouch. The other end is joined back to the intestine about 100cm down the stomach.
            </p>
          </section>

          {/* How Gastric Bypass Works */}
          <section className="w-full max-w-5xl mx-auto bg-gray-50 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 text-center">Gastric Bypass Works in Two Ways</h2>
            
            <div className="space-y-6">
              {/* Restriction */}
              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="text-[#0891b2] mr-2" size={24} />
                  Restriction
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  By creating a smaller stomach pouch that is designed to hold only a cup of food, you will be restricted in terms of how much you are able to eat.
                </p>
              </div>

              {/* Malabsorption */}
              <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Activity className="text-[#0891b2] mr-2" size={24} />
                  Malabsorption
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Because the food enters directly into lower part of small bowel and it doesn&apos;t travel the part of intestine where fat is absorbed, it further augments the weight loss. Because much of the food is not processed and broken down, it helps to maintain weight loss permanently.
                </p>
              </div>
            </div>
          </section>

          {/* Advantages of Gastric Bypass */}
          <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Advantages of Gastric Bypass</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              The list of health benefits after gastric bypass is impressive. Being more active and fit, you can do a lot of things with your family and friends which you were unable to do before. You lead a better social life, stronger interpersonal relationships, and enhanced job performance better mental health and self-esteem.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">80-85% Excess Weight Loss</p>
                  <p className="text-gray-700 text-sm">80-85% off the excess weight is achieved with this procedure.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Hyperlipidemia & High Blood Pressure</p>
                  <p className="text-gray-700 text-sm">Hyperlipidemia and high blood pressure is corrected in over 70% of patients.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Sleep Apnea Relief</p>
                  <p className="text-gray-700 text-sm">Obstructive sleep apnea and snoring is cured with surgery.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Type 2 Diabetes Cure</p>
                  <p className="text-gray-700 text-sm">Type 2 diabetes may be completely cured in about 70% of patients.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">GERD & Joint Pain Relief</p>
                  <p className="text-gray-700 text-sm">Gastroesophageal reflux disease, swelling in the legs, low back pain and joint pain is relieved in almost all patients.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Better Quality of Life</p>
                  <p className="text-gray-700 text-sm">Enhanced social life, stronger relationships, and improved mental health and self-esteem.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Gastric Bypass and Diabetes */}
          <section className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5 rounded-2xl border border-[#0891b2]/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Gastric Bypass and Diabetes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diabetes is a leading cause of death in India and despite several advances in the management of diabetes, till date, there is no medicine which can cure diabetes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              There is a strong correlation between diabetes and obesity and about 80% of diabetic patients are obese. Gastric bypass surgery is a boon for such patients as it can cure diabetes in majority of patients.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Patients who undergo bariatric surgery experience a remission in their diabetes within a few days of surgery, even before weight loss. This suggests that gastric bypass not only cure diabetes by causing weight loss but also by bring physiological and hormonal changes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The hormonal changes increase the secretion of insulin and also decreases insulin resistance resulting in cure of diabetes.
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
                  <p className="text-gray-700 text-sm">Most patients are discharged within 24 hours after gastric bypass surgery. Full recovery typically takes 2-4 weeks with gradual return to normal activities.</p>
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
            <RecoveryTimeline title="Gastric Bypass Recovery Timeline" />
          </section>
        </div>

        {/* Consultation Form */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
            <ConsultationForm 
              serviceName="Gastric Bypass Surgery"
              serviceSlug="gastric-bypass"
            />
          </div>
        </div>

        {/* Post-operative Care Section */}
        <div className="mt-12">
          <PostOperativeCare />
        </div>

        {/* WhatsApp Expert Chat */}
        <div className="mt-8">
          <WhatsAppExpertChat serviceName="Gastric Bypass Surgery" />
        </div>

        {/* Learn More Section */}
        <div className="max-w-5xl mx-auto mt-12 bg-white rounded-2xl shadow-lg border border-[#0891b2]/10 p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Learn More about Your Weight Loss Options at Habilite Clinics</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Depending on your specific needs and lifestyle, Dr. Kapil Agrawal, will help you decide the weight loss treatment most likely to work best for you. Contact our team of weight loss specialists today to learn more about the affordable, safe, and effective weight loss treatment options, including cost-effective gastric bypass surgery.
          </p>
        </div>

        {/* FAQs */}
        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <GastricBypassFAQ />
          </div>
        </div>
      </div>
    </div>
  )
}

