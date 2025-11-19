import Link from 'next/link'
import Image from 'next/image'
import { Award, GraduationCap, Briefcase, Users, CheckCircle2, ArrowRight } from 'lucide-react'

export default function MeetDoctor() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Image & Info */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/dr-kapil-agrawal.png"
                alt="Dr. Kapil Agrawal - Senior Consultant Laparoscopic and Robotic Surgeon at Apollo Hospitals, Delhi with 23 years experience and 7000+ successful surgeries"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Dr. Kapil Agrawal</h3>
                <p className="text-lg md:text-xl text-white/90 font-semibold mb-2">
                  MBBS, MS (Surgery), MRCS (London, U.K), MMED (Singapore), FMAS
                </p>
                <p className="text-base text-white/80">
                  Senior Consultant at Apollo Group of Hospitals, Delhi NCR
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Details */}
          <div>
            <div className="mb-6 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 break-words">
                Meet <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Dr. Kapil Agrawal</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed break-words">
                Dr. Kapil Agrawal is a leading and one of the best Robotic and Laparoscopic Surgeon in Delhi, India. 
                He has an overall experience of <strong>23 years</strong> and has been working as a Senior Consultant 
                Surgeon at Apollo Group of Hospitals, New Delhi, India.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed break-words">
                He is performing advanced laparoscopic and robotic surgeries for various conditions, which include 
                Gallbladder stones, Hernia, Appendicitis, Rectal prolapse, and pseudo-pancreatic cyst. He is also 
                offering a complete range of bariatric or weight loss surgeries, which are performed both by 
                laparoscopic and robotic approaches.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent mb-1">
                  7000+
                </div>
                <div className="text-sm text-gray-600 font-medium">Surgeries Performed</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent mb-1">
                  23 Years
                </div>
                <div className="text-sm text-gray-600 font-medium">Experience</div>
              </div>
            </div>

            {/* Qualifications & Highlights */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-full p-2 mt-1">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Education & Training</h4>
                  <p className="text-gray-700 text-sm">
                    Completed graduation and post-graduation from Institute of Medical Sciences, BHU, Varanasi. 
                    Trained at best hospitals in London, U.K., and received MRCS degree from London, U.K., in 2007.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-full p-2 mt-1">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expertise & Recognition</h4>
                  <p className="text-gray-700 text-sm">
                    Associated with best hospitals in New Delhi, India, and has performed some of the most complex 
                    cases with excellent outcomes. One of the best and leading laparoscopic surgeons in Delhi, NCR.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-full p-2 mt-1">
                  <Briefcase className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Hospital Affiliations</h4>
                  <p className="text-gray-700 text-sm">
                    Senior Consultant at Apollo Group of Hospitals - Sarita Vihar, Greater Kailash, and Noida. 
                    Also offers consultation at Habilite Clinic in Lajpat Nagar, South Delhi.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
              <Link
                href="/dr-kapil-agrawal"
                className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 inline-flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-cyan-500/50 w-full sm:w-auto"
              >
                Know More About Dr. Kapil Agrawal
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/appointment"
                className="border-2 border-[#0891b2] text-[#0891b2] hover:bg-gradient-to-r hover:from-[#0891b2] hover:to-[#06b6d4] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

