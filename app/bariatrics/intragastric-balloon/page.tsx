import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'

export const metadata: Metadata = {
  title: 'Intragastric Balloon in Delhi | Gastric Balloon Expert Dr. Kapil Agrawal',
  description: 'Expert intragastric balloon treatment in Delhi, India by Dr. Kapil Agrawal. Specializes in gastric balloon treatment for moderate weight loss, including Allurion and Spatz balloon. 23 years experience, 7000+ successful surgeries. Book consultation for gastric balloon in Delhi.',
  keywords: [
    'intragastric balloon delhi',
    'gastric balloon delhi',
    'allurion balloon delhi',
    'spatz balloon delhi',
    'non-surgical weight loss delhi',
    'gastric balloon treatment delhi',
    'Dr. Kapil Agrawal gastric balloon',
  ],
  openGraph: {
    title: 'Intragastric Balloon in Delhi | Gastric Balloon Expert Dr. Kapil Agrawal',
    description: 'Expert intragastric balloon treatment by Dr. Kapil Agrawal in Delhi. Specializes in Allurion and Spatz balloon for weight loss.',
    url: 'https://www.habiliteclinics.com/bariatrics/intragastric-balloon',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatrics/intragastric-balloon',
  },
}

export default function IntragastricBalloonPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Image */}
      <div className="container-custom mb-8">
        <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
          <Image
            src="/images/intragastric-surgeon-delhi-india.webp"
            alt="Intragastric Balloon Expert in Delhi - Dr. Kapil Agrawal | Gastric Balloon Treatment | Allurion & Spatz Balloon"
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
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">intragastric-balloon-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Intra Gastric Balloon Expert in <span className="text-[#0891b2]">Delhi, India</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Dr. Kapil Agrawal specializes in the gastric balloon treatment for patients looking for a moderate amount of weight loss. He specializes in both Allurion and Spatz balloon treatment.
          </p>
          <CallUsButton />
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Intragastric Balloon</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal specializes in the gastric balloon treatment for patients looking for a moderate amount of weight loss. He specializes in both Allurion and Spatz balloon treatment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With 23 years of experience and 7000+ successful procedures, Dr. Kapil Agrawal provides personalized treatment plans for patients seeking non-surgical weight loss solutions, ensuring optimal results and patient satisfaction.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8">
                <CostCalculator serviceName="Intragastric Balloon" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Types of Gastric Balloons</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal offers three types of gastric balloon treatments, each designed to meet different patient needs and preferences. All procedures are non-surgical and provide effective weight loss solutions.
              </p>
              <div className="space-y-6">
                {/* Allurion Balloon */}
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Allurion Balloon</h3>
                  <p className="text-gray-700 mb-4">
                    The Allurion Balloon is a revolutionary swallowable gastric balloon that doesn&apos;t require endoscopy, anesthesia, or surgical procedures. It offers the most convenient and comfortable gastric balloon experience.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">How It Works:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-2">
                        <li>The balloon is swallowed as a pill with water - no endoscopy needed</li>
                        <li>Once in the stomach, it&apos;s filled with a safe liquid through a thin tube under X-ray guidance</li>
                        <li>The procedure takes approximately 20 minutes</li>
                        <li>Remains in the stomach for approximately 16 weeks</li>
                        <li>Automatically deflates and passes naturally through your digestive system after 16 weeks</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Key Benefits:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-2">
                        <li>No endoscopy or anesthesia required</li>
                        <li>Most convenient and comfortable procedure</li>
                        <li>Natural removal - no removal procedure needed</li>
                        <li>Ideal for patients seeking a non-invasive weight loss solution</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spatz Balloon */}
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Spatz Balloon</h3>
                  <p className="text-gray-700 mb-4">
                    The Spatz Balloon is an advanced adjustable gastric balloon system that offers flexibility and extended treatment duration. It can be adjusted in size during the treatment period for personalized weight loss management.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">How It Works:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-2">
                        <li>Placed in the stomach through a simple endoscopic procedure under mild sedation</li>
                        <li>Unique adjustable feature - can be filled or deflated as needed during treatment</li>
                        <li>Can remain in place for up to 12 months for longer-term weight loss support</li>
                        <li>Removed through a simple endoscopic procedure after the treatment period</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Key Benefits:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-2">
                        <li>Adjustable volume for personalized treatment</li>
                        <li>Extended treatment duration (up to 12 months)</li>
                        <li>Better long-term weight loss results</li>
                        <li>Ideal for patients needing longer-term weight loss support</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Traditional Intragastric Balloon */}
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional Intragastric Balloon</h3>
                  <p className="text-gray-700 mb-4">
                    Traditional intragastric balloons are a well-established non-surgical weight loss option. They are placed endoscopically and provide effective weight loss support for patients seeking moderate weight reduction.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">How It Works:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-2">
                        <li>Placed in the stomach through an endoscopic procedure under mild sedation</li>
                        <li>Filled with saline solution to occupy space in the stomach</li>
                        <li>Helps you feel full faster and eat smaller portions</li>
                        <li>Typically remains in place for 6 months</li>
                        <li>Removed through an endoscopic procedure after the treatment period</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Key Benefits:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-2">
                        <li>Proven track record with years of clinical use</li>
                        <li>Effective for moderate weight loss</li>
                        <li>Non-surgical and reversible</li>
                        <li>Suitable for patients who prefer traditional, well-established procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Gastric Balloon</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Non-surgical procedure',
                  'No incisions or scars',
                  'Moderate weight loss',
                  'Quick recovery time',
                  'Reversible treatment',
                  'Lower risk than surgery',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                    <p className="text-gray-700 text-sm">Most patients can return to normal activities within 1-2 days after gastric balloon placement, with minimal discomfort.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments with nutrition counseling help ensure optimal weight loss results and long-term success.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Intragastric Balloon"
                serviceSlug="intragastric-balloon"
              />
            </div>
          </div>
        </div>

        {/* Post-operative Care Section - Full Width Centered */}
        <PostOperativeCare />

        {/* WhatsApp Expert Chat - Full Width Centered */}
        <WhatsAppExpertChat serviceName="Intragastric Balloon" />
      </div>
    </div>
  )
}

