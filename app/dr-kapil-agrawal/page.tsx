import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Award, GraduationCap, Clock, Phone, Calendar, Video, Building2, BookOpen, Users, CheckCircle2 } from 'lucide-react'
import { getDoctorBySlug } from '@/data/doctors'
import { services } from '@/data/services'
import StructuredData from '@/components/seo/StructuredData'
import { getPhysicianSchema } from '@/lib/seo/schemaBuilders'

const DOCTOR_SLUG = 'dr-kapil-agrawal'

const doctor = getDoctorBySlug(DOCTOR_SLUG)

if (!doctor) {
  throw new Error('Doctor data not found for Dr. Kapil Agrawal')
}

export const metadata: Metadata = {
  title: 'About Dr. Kapil Agrawal - Laparoscopic, Laser & Bariatric Surgeon | Habilite Clinics',
  description: 'Dr. Kapil Agrawal is a leading Laparoscopic, Laser, and Bariatric surgeon based in Delhi with over 23 years of experience. MBBS, MS (Surgery), MRCS (London, U.K), MMED (Singapore), FMAS. Senior Consultant at Apollo Hospitals.',
  keywords: [
    'Dr. Kapil Agrawal',
    'laparoscopic surgeon delhi',
    'bariatric surgeon delhi',
    'laser surgeon delhi',
    'robotic surgeon delhi',
    'Apollo Hospitals',
    'Habilite Clinics',
    'gallbladder surgeon',
    'hernia surgeon',
    'weight loss surgery',
  ],
  openGraph: {
    title: 'About Dr. Kapil Agrawal - Laparoscopic, Laser & Bariatric Surgeon | Habilite Clinics',
    description: 'Dr. Kapil Agrawal is a leading Laparoscopic, Laser, and Bariatric surgeon based in Delhi with over 23 years of experience.',
    type: 'profile',
    images: [
      {
        url: doctor.image.startsWith('http')
          ? doctor.image
          : `https://www.habiliteclinics.com${doctor.image}`,
        width: 800,
        height: 1000,
        alt: 'Dr. Kapil Agrawal - Laparoscopic, Laser & Bariatric Surgeon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dr. Kapil Agrawal - Laparoscopic, Laser & Bariatric Surgeon',
    description: 'Dr. Kapil Agrawal is a leading Laparoscopic, Laser, and Bariatric surgeon based in Delhi with over 23 years of experience.',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/dr-kapil-agrawal',
  },
}

export default function DrKapilAgrawalPage() {
  const doctorData = getDoctorBySlug(DOCTOR_SLUG)

  if (!doctorData) {
    notFound()
  }

  const doctorServices = services.filter((service) => doctorData.treatments.includes(service.name))
  const physicianSchema = getPhysicianSchema()

  return (
    <>
      <StructuredData data={physicianSchema} />
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-primary py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto md:mx-0">
                <Image
                  src={doctorData.image}
                  alt={doctorData.name}
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-2xl"
                  sizes="(max-width: 768px) 320px, 384px"
                  priority
                  quality={90}
                />
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">{doctorData.name}</h1>
                <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-2">
                  Laparoscopic, Laser & Bariatric Surgeon
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  MBBS, MS (Surgery), MRCS (London, U.K), MMED (Singapore), FMAS
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                    <Award className="mr-2 text-[#0891b2]" size={20} />
                    <span className="text-gray-900 font-semibold">{doctorData.experience} Experience</span>
                  </div>
                  <div className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                    <Clock className="mr-2 text-[#0891b2]" size={20} />
                    <span className="text-gray-900 font-semibold">{doctorData.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {/* About Dr. Kapil Agrawal */}
              <section>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Dr. Kapil Agrawal – Laparoscopic, Laser & Bariatric Surgeon</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Kapil Agrawal is a leading Laparoscopic, Laser, and Bariatric surgeon based in Delhi with over 23 years of experience. He possesses a unique combination of surgical excellence and a patient-centric approach. He has earned a stellar reputation in the arena of minimally invasive and metabolic surgeries. Patients value his clear communication, attention to detail, and his ability to create a customized treatment plan to cater to individual health needs. He is committed to clinical excellence and is one of the most trusted surgeons in India.
                </p>
              </section>

              {/* Why Choose Dr. Kapil Agrawal */}
              <section>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Dr. Kapil Agrawal for Surgery in Delhi?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Here&apos;s why you should choose Dr. Kapil Agrawal for your surgery:
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-semibold text-gray-900 mb-2">Expertise & Experience</h3>
                    <p className="text-gray-700">
                      Over 23 years of surgical experience with a strong track record in bariatric, metabolic, and laparoscopic procedures.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-semibold text-gray-900 mb-2">Patient-Centric Approach</h3>
                    <p className="text-gray-700">
                      He is known for his surgical precision and genuine empathy, thus nurturing long-term credibility.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-semibold text-gray-900 mb-2">Minimally Invasive Techniques</h3>
                    <p className="text-gray-700 mb-2">
                      He possesses specialization in laparoscopic and robot-assisted laparoscopic surgeries, ensuring:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Quicker recovery</li>
                      <li>Reduced post-operative pain</li>
                      <li>Minimal scarring and better cosmetic results</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-semibold text-gray-900 mb-2">Trusted Surgical Care</h3>
                    <p className="text-gray-700">
                      He is one of the top choices for dealing with advanced, safer, and effective surgical care.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#0891b2]/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Book Appointment</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Clock className="mr-2 text-[#0891b2]" size={20} />
                    <span>{doctorData.availability}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="mr-2 text-[#0891b2]" size={20} />
                    <span>+91 99994 56455</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="mr-2 text-[#0891b2]" size={20} />
                    <span>+91 99100 24564</span>
                  </div>
                  <div className="text-2xl font-bold text-[#0891b2]">
                    Consultation Fee: {doctorData.consultationFee}
                  </div>
                </div>
                <Link href="/appointment" className="btn-primary w-full text-center block">
                  <Calendar className="inline mr-2" size={20} />
                  Book Now
                </Link>
              </div>

              {doctorServices.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Treatments Offered</h3>
                  <ul className="space-y-2">
                    {doctorServices.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/treatments/${service.slug}`}
                          className="text-[#0891b2] hover:text-[#06b6d4] hover:underline"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {doctorData.languages.map((lang, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Centered Content Sections */}
          <div className="max-w-4xl mx-auto space-y-12 mt-12">
              {/* Global Surgical Education & Qualifications */}
              <section>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                  <GraduationCap className="mr-2 text-[#0891b2]" size={28} />
                  Global Surgical Education & Qualifications
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Kapil Agrawal holds multiple prestigious degrees and certifications:
                </p>
                <div className="space-y-3">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900">MBBS</div>
                    <div className="text-gray-600">Institute of Medical Sciences, BHU, Varanasi</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900">MS in General Surgery</div>
                    <div className="text-gray-600">Institute of Medical Sciences, BHU</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900">MRCS</div>
                    <div className="text-gray-600">Royal College of Surgeons, London, U.K.</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900">MMED (Surgery)</div>
                    <div className="text-gray-600">National University of Singapore</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900">FMAS</div>
                    <div className="text-gray-600">Fellowship in Minimal Access Surgery</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  His academic background reflects his hunt for excellence and global viewpoint in surgical training.
                </p>
              </section>

              {/* Leadership Roles */}
              <section>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                  <Building2 className="mr-2 text-[#0891b2]" size={28} />
                  Leadership Roles in Surgical Practice
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Kapil Agrawal currently serves in his position:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>
                      He is a Senior Consultant in the Department of Laparoscopic & Bariatric Surgery at Apollo Group of Hospitals, New Delhi. He is affiliated with Indraprastha Apollo Hospital, Sarita Vihar Apollo Spectra Hospital, Greater Kailash, and Apollo Hospital, Noida.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>
                      He is the founder of Habilite Clinics, Super Speciality Clinics located in South Delhi in Green Park and Lajpat Nagar.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>
                      He is actively contributing to teaching, research, and hands-on surgical care.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Professional Journey */}
              <section>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Professional Journey & Global Experience</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Agrawal began his medical journey at one of India&apos;s most prestigious institutions, the Institute of Medical Sciences, Banaras Hindu University (BHU). He completed his MBBS and MS(Surgery) in 2002. This laid a solid foundation in his clinical knowledge and surgical skills.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  He underwent further training in advanced laparoscopic surgeries in the United Kingdom, and he was then granted MRCS from the Royal College of Surgeons, Edinburgh, U.K., in 2007. This was followed by a Master of Medicine (MMed) in Surgery from the National University of Singapore in 2008.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Kapil Agrawal holds 23 years of surgical excellence and has worked in all renowned institutions such as:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Ram Manohar Lohia Hospital, New Delhi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Arrow Park Hospital, Liverpool, U.K.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>North Middlesex University Hospital, Edmonton, London</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Max Hospital, Vaishali</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>RG Stone Hospital, New Delhi</span>
                  </li>
                </ul>
              </section>

              {/* Areas of Expertise */}
              <section>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Dr. Kapil Agrawal&apos;s Areas of Expertise</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">1. Laparoscopic Surgeries</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Dr Kapil Agrawal is one of the pioneers in the field of Laparoscopic Surgery and has performed more than 7000 advanced laparoscopic surgeries. He is associated with some of the top hospitals in New Delhi and is committed to providing his patients excellent surgical care and state-of-the-art facilities. In conventional laparoscopic surgeries, the entire surgery is conducted with the help of long, sophisticated instruments that are inserted through 3-4 tiny incisions.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">2. Single Port Laparoscopic Surgeries</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Single-port laparoscopic Surgery is an advanced version of laparoscopic surgeries. Single-port surgery further refines the process by conducting the surgery through a single port or hole instead of conventional four-hole laparoscopic surgery. The surgery is more technically challenging but is associated with reduced pain and best cosmesis. Early return to work and non-visible scar are the added benefits of single-port laparoscopic surgery.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Some of the most common laparoscopic surgeries performed by Dr Kapil Agrawal through the single-port technique are Appendicectomy, Cholecystectomy for gallbladder stones or gallbladder polyps, and Sleeve Gastrectomy for weight loss.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">3. Robot Assisted Laparoscopic Surgeries</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Robotic surgeries are an advanced version of laparoscopic surgeries where the entire surgery is done with the help of robotic arms, completely guided and under the control of a surgeon sitting on a console.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      The robotic surgery has added benefits in terms of enhanced dexterity, better precision, and the ability to perform in tight spaces where human hands find it difficult to accomplish. Robotic surgeries reduce the surgeon&apos;s stress as the surgeon can perform long surgeries while sitting on a console comfortably.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">4. Laser Surgeries for Anorectal Disorders</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Dr Kapil Agrawal uses state-of-the-art laser technology to treat haemorrhoids or piles with minimal discomfort and quicker healing. He uses a Stapler for the treatment of Grade IV haemorrhoids and the DGHAL procedure for recurrent piles. He also treats anal fistula, anal fissure and pilonidal sinus with the help of 1470 nm laser machines with best outcomes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Specialized Treatments */}
              <section>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Specialized Treatments Provided by Dr Kapil Agrawal</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dr. Kapil Agrawal performs following Surgeries using the latest and advanced techniques:
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: '1. Gallbladder Surgery',
                      description: 'Dr. Kapil Agrawal specializes in laparoscopic gallbladder stone removal surgery, offering a safe and minimally invasive alternative to open surgery. With the help of 2-3 tiny incisions, he removes the gallbladder with precision, reducing pain, recovery time, and hospital stay.',
                    },
                    {
                      title: '2. Hernia Surgery',
                      description: 'Dr Kapil Agrawal is well-versed in the laparoscopic and robotic techniques for the management of various types of hernia. He is a highly experienced surgeon who can perform all kinds of hernia repair surgeries, including Abdominal Wall Reconstruction for large and complex hernias.',
                    },
                    {
                      title: '3. Appendicitis Surgery',
                      description: 'Dr. Kapil Agrawal performs laparoscopic surgery for appendicitis with high precision and excellent outcomes. Dr. Kapil Agrawal offers both conventional and single-port laparoscopic surgery for appendicitis. This is an ideal procedure associated with less scarring and reduced risk of complications.',
                    },
                    {
                      title: '4. Rectal Prolapse',
                      description: 'Kapil Agrawal performs laparoscopic rectopexy to treat rectal prolapse using small incisions. The rectum is secured in its proper position, which helps in restoring normal bowel function and reducing prolapse symptoms. With his extensive experience, Dr. Agrawal ensures a low risk of recurrence and excellent functional outcomes.',
                    },
                    {
                      title: '5. Pseudo Pancreatic cyst',
                      description: 'Dr. Kapil Agrawal offers expert laparoscopic treatment for pancreatic pseudocysts. Pancreatic Pseudocysts, often sequelae of acute pancreatitis, are challenging to manage laparoscopically, but Dr Kapil Agrawal\'s experience and expertise ensure excellent outcomes with minimal complication rates.',
                    },
                    {
                      title: '6. Fundoplication for Hiatus Hernia & GERD',
                      description: 'Dr Kapil Agrawal has been offering the best treatment for the management of hiatus hernia & Gastro Oesophageal reflux disease. He is well versed with all types of fundoplication, like Nissen, Tor, and Toupet fundoplication, and is known to provide tailored solutions for the management of hernia.',
                    },
                    {
                      title: '7. Bariatric & Metabolic Surgery',
                      description: 'Dr. Kapil Agrawal specializes in advanced bariatric or weight-loss surgeries, helping patients achieve sustainable weight loss and improved health. His expertise includes Sleeve Gastrectomy, Mini Gastric Bypass, Roux-en-Y Gastric Bypass, and Revisional Bariatric Surgery. These surgeries are performed either laparoscopically or with the assistance of a Robot (robot-assisted laparoscopic surgeries). This ensures minimal scarring, faster recovery, and minimal pain post-surgery. Dr. Agrawal tailors each surgery to individual needs, especially for patients struggling with obesity-related conditions.',
                    },
                    {
                      title: '8. Intra Gastric Balloon Treatment',
                      description: 'The Intragastric Balloon is a non-surgical, minimally invasive weight loss treatment. There are various types of balloons, like Allurion, Medicon, Orbera, and Spatz II balloons, which have different methods of insertion and have different life spans. Dr Kapil Agrawal at Habilite Clinics offers a customized balloon treatment for weight loss after a thorough evaluation of the patient. The procedure involves placing a soft, saline-filled balloon in your stomach for 6 to 12 months and incorporating healthy lifestyle changes.',
                    },
                    {
                      title: '9. Piles Surgery',
                      description: 'Dr. Kapil Agrawal offers advanced treatment for piles (haemorrhoids), including laser surgery, Stapler Surgery and DGHAL surgeries. These procedures are minimally invasive, virtually painless, and ensure faster recovery. His technique allows patients to resume daily activities quickly with minimal bleeding and no stitches.',
                    },
                    {
                      title: '10. Fistula Surgery',
                      description: 'Dr. Kapil Agrawal offers advanced Anal Fistula treatment, including laser surgery and VAAFT surgery. These surgeries are minimally invasive and ensure quicker healing with less pain and minimal recurrence. Dr. Agrawal\'s expertise in proctology makes him a trusted name for complex fistula cases.',
                    },
                    {
                      title: '11. Pilonidal Sinus',
                      description: 'Dr. Kapil Agrawal offers specialized treatment for pilonidal sinus using laser surgery, a minimally invasive technique that ensures less pain, faster healing, and minimal scarring. This modern approach significantly reduces the chances of recurrence and allows patients to return to normal activities quickly. Dr. Agrawal\'s expertise in laser proctology makes him a trusted choice for effective, long-term relief from pilonidal sinus.',
                    },
                    {
                      title: '12. Anal Fissure',
                      description: 'Dr. Kapil Agrawal offers cutting-edge & customized treatment for anal fissures. He performs both Laser and Botox therapy for Acute Anal Fissures which provides rapid relief with minimal discomfort. The laser treatment helps anal fissure treatment with precision and minimal bleeding, while Botox relaxes the anal muscles to promote healing and reduce pain.',
                    },
                    {
                      title: '13. Laser & ZSR Circumcision Surgeries for Phimosis',
                      description: 'Dr Kapil Agrawal is performing both ZSR Circumcision & Laser circumcision surgeries at his clinic, as well as in hospitals, depending upon the patient\'s preference as well as insurance facilities. He is performing these surgeries with excellent outcomes, and the patients are discharged from the hospital within 2 hours of surgery.',
                    },
                    {
                      title: '14. Lipoma Surgeries',
                      description: 'Dr Kapil Agrawal is well known for performing almost scarless lipoma surgeries with micro-puncture and pinch technique. The surgery doesn\'t require any stitches, and patients can be discharged within 1 hour of completion of the procedure.',
                    },
                  ].map((treatment, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-5">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{treatment.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{treatment.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Membership & Affiliations */}
              <section>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                  <Users className="mr-2 text-[#0891b2]" size={28} />
                  Membership & Affiliations
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Kapil Agrawal has his associations with several renowned hospitals and organizations:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>AMASI (Association of Minimal Access Surgeons of India)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>IAGES (Indian Association of Gastro and Endoscopic Surgeons)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Member of the Royal College of Surgeons, London</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Member of the Association of Surgeons of India (ASI)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Member of the Obesity Surgery Society of India (OSSI)</span>
                  </li>
                </ul>
              </section>

              {/* Journals & Publications */}
              <section>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                  <BookOpen className="mr-2 text-[#0891b2]" size={28} />
                  Journals & Publications
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Agrawal has contributed to several notable research publications:
                </p>
                <div className="space-y-3">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">Pure Red Cell Aplasia Associated with Thymoma</div>
                    <div className="text-gray-600 text-sm">Indian Journal of Chest Diseases & Allied Sciences, 2002</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">Chest Wall Reconstruction in Primary Tumors and Impalement Injury</div>
                    <div className="text-gray-600 text-sm">The Antiseptic, May 2002</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">Thoracic Outlet Syndrome – An Update</div>
                    <div className="text-gray-600 text-sm">The Antiseptic, Sep 2000</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">Primary Chest Wall Tumors</div>
                    <div className="text-gray-600 text-sm">Indian Journal of Clinical Practice, April 1999</div>
                  </div>
                </div>
              </section>

              {/* Research & Projects */}
              <section>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Research & Projects</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Kapil Agrawal has performed extensive clinical research:
                </p>
                <div className="space-y-3">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">Duodenal Switch Surgery & Hypoproteinemia</div>
                    <div className="text-gray-600 text-sm">Arrow Park Hospital, Liverpool, U.K.</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">Cost-Effectiveness of Laparoscopic Appendectomy</div>
                    <div className="text-gray-600 text-sm">Arrow Park Hospital, Wirral, Liverpool</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">TEP Patients and Subcutaneous Emphysema</div>
                    <div className="text-gray-600 text-sm">Dr. RML Hospital, New Delhi</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">Evaluation of Bronchogenic Carcinoma Diagnostics</div>
                    <div className="text-gray-600 text-sm">BHU, Varanasi</div>
                  </div>
                </div>
              </section>

              {/* Affiliated Locations */}
              <section>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
                  <Building2 className="mr-2 text-[#0891b2]" size={28} />
                  Dr. Kapil Agrawal&apos;s Affiliated Locations
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-5">
                    <p className="font-semibold text-gray-900 mb-1">Kailash Colony Metro Station</p>
                    <p className="text-gray-700">A-19/A, Near, Kailash Colony Rd, New Delhi, Delhi 110048</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5">
                    <p className="font-semibold text-gray-900 mb-1">Lajpat Nagar</p>
                    <p className="text-gray-700">5A, Ring Rd, opposite Moolchand Metro station location, Block A, Lajpat Nagar 4, Kidwai Nagar, New Delhi, Delhi 110048</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5">
                    <p className="font-semibold text-gray-900 mb-1">Green Park</p>
                    <p className="text-gray-700">Gulmohar Commercial Complex, Metro station, B-5, near Green Park, Yusuf Sarai, New Delhi, Delhi 110016</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5">
                    <p className="font-semibold text-gray-900 mb-1">Lajpat Nagar II</p>
                    <p className="text-gray-700">M-11, road, Vinoba Puri, Block M, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5">
                    <p className="font-semibold text-gray-900 mb-1">Hauz Khas</p>
                    <p className="text-gray-700">C-7/186, Safdarjung Development Area, Hauz Khas, New Delhi, Delhi 110016</p>
                  </div>
                </div>
              </section>
          </div>
        </div>
      </div>
    </>
  )
}
