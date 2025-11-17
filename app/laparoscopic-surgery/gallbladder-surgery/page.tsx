import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock, User, Award, Users, TrendingUp } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'
import Link from 'next/link'
import GallbladderFAQ from './GallbladderFAQ'
import GallbladderTestimonials from './GallbladderTestimonials'

export const metadata: Metadata = {
  title: 'Best Gallbladder Surgeon in Delhi - Dr. Kapil Agrawal | 23 Years Experience | 7000+ Surgeries',
  description: 'Dr. Kapil Agrawal is the best gallbladder surgeon in Delhi with 23+ years of experience and 7000+ successful gallbladder surgeries. Expert in laparoscopic, robotic, and single-port cholecystectomy. Painless surgery, 24-hour discharge, cashless insurance available. Book consultation now.',
  keywords: [
    'best gallbladder surgeon delhi',
    'gallbladder stone surgeon delhi',
    'gallbladder surgery delhi',
    'laparoscopic cholecystectomy delhi',
    'robotic gallbladder surgery delhi',
    'single port gallbladder surgery delhi',
    'gallbladder stone removal delhi',
    'Dr. Kapil Agrawal gallbladder',
    'gallbladder specialist delhi',
    'gallbladder surgeon india',
    'best doctor for gallbladder surgery',
    'gallbladder stone treatment delhi',
  ],
  openGraph: {
    title: 'Best Gallbladder Surgeon in Delhi - Dr. Kapil Agrawal | 23 Years Experience',
    description: 'Expert laparoscopic and robotic gallbladder surgeon in Delhi. 7000+ successful surgeries. Painless surgery, fast recovery, 24-hour discharge. Book consultation.',
    url: 'https://www.habiliteclinics.com/laparoscopic-surgery/gallbladder-surgery',
    images: [
      {
        url: 'https://www.habiliteclinics.com/images/gallbladder-surgeon-delhi-india.webp',
        width: 1200,
        height: 630,
        alt: 'Best Gallbladder Surgeon in Delhi - Dr. Kapil Agrawal',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laparoscopic-surgery/gallbladder-surgery',
  },
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
  return match && match[1] ? match[1] : null
}

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can gall bladder and hernia surgery be performed together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is common to perform gallbladder surgery and hernia repair at the same time. This is especially beneficial in cases where both conditions are present, and the patient can undergo both procedures simultaneously. However, the decision depends on the complexity of both surgeries and the experience of the surgeon. Your surgeon is the best person to decide if it is safe to perform both surgeries together.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I live a normal life after gallbladder removal surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can live a completely normal life without a gallbladder and resume normal activities within a week. Most people adapt well to life without a gallbladder, and any dietary adjustments are usually temporary.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any medicines that can help in dissolving gallstones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are few medicines that may dissolve cholesterol stones, but they are slow and often ineffective. Surgery remains the ultimate and most effective solution for gallstone removal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I go for gallbladder surgery for asymptomatic gallstones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Surgery is generally not recommended for silent (asymptomatic) stones. However, there are risks for further complications, and thus surgery may be advised in certain cases, especially for larger stones or in patients with specific risk factors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can gallbladder stones be cancerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gallstones themselves are not cancerous. However, long-lasting or large gallstones can have risks for gallbladder cancer over time, which is why regular monitoring and timely treatment are important.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are gallbladder polyps, and should I remove them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gallbladder polyps form on the inner wall of the gallbladder. Polyps larger than 10 mm may require gallbladder removal due to cancer risk. Smaller polyps are usually monitored regularly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I prevent the formation of gallstones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maintain a healthy weight, eat a balanced diet with high-fiber and low-fat foods, stay physically active, and stay hydrated. Avoid rapid weight loss or weight gain.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we confirm a stone in the CBD (common bile duct)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stones in the CBD are diagnosed using imaging tests like MRCP (Magnetic Resonance Cholangiopancreatography), ultrasound, or ERCP (Endoscopic Retrograde Cholangiopancreatography).',
      },
    },
    {
      '@type': 'Question',
      name: 'What if a stone slips into the common bile duct (CBD)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stones in the CBD can cause jaundice, pain, or infection. They are typically removed using ERCP (endoscopic procedure) before or along with gallbladder surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a 7mm gallstone need surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 7 mm stone may require surgery if it causes symptoms or complications. The decision depends on symptoms, location, and individual patient factors.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size gallstones are bad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stones larger than 2 cm or multiple small stones that can slip into the bile duct are considered higher risk and may require surgery even if they don\'t have any symptoms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I remove my gallstones without removing gallbladder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non-surgical methods are not very effective and are associated with high recurrence rates. Surgery to remove the gallbladder (cholecystectomy) is the definitive and most effective treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What to avoid after gallbladder removal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avoid eating high-fat, greasy, or fried foods for a few weeks. Gradually introduce fiber and fats as per instructions from your nutritionist. Stay hydrated and eat smaller, more frequent meals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are permanent issues after gallbladder removal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most people don\'t have long-term problems. Few symptoms like occasional diarrhea or digestive discomfort are manageable with diet and lifestyle changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days should I rest after gallbladder surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients are advised to take rest for 3–5 days. You can resume light work in a week and normal activities in about 10–14 days after laparoscopic gallbladder surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does gallbladder surgery cost in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laparoscopic gallbladder surgery in Delhi ranges between Rs.60,000 to Rs.1,20,000 based on hospital, surgical experience, and amenities. Costs may vary based on the type of procedure and hospital chosen.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I choose a gallbladder surgeon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should look for a surgeon having extensive experience in advanced laparoscopic surgery, good patient reviews, hospital associations, and personalized care. Check credentials, years of experience, and number of successful surgeries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which gallbladder surgery is best?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laparoscopic cholecystectomy is the gold standard. It is minimally invasive, safe, and offers quicker recovery with minimal scarring compared to open surgery.',
      },
    },
  ],
}

// Physician Schema
const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Kapil Agrawal',
  jobTitle: 'Best Gallbladder Surgeon in Delhi',
  description: 'Expert laparoscopic and robotic gallbladder surgeon with 23+ years of experience and 7000+ successful gallbladder surgeries.',
  url: 'https://www.habiliteclinics.com/laparoscopic-surgery/gallbladder-surgery',
  image: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.jpg',
  medicalSpecialty: 'Laparoscopic Surgery, Gallbladder Surgery, Cholecystectomy',
  knowsAbout: ['Laparoscopic Cholecystectomy', 'Robotic Gallbladder Surgery', 'Single Port Surgery', 'Gallbladder Stone Removal'],
  affiliation: {
    '@type': 'Organization',
    name: 'Habilite Clinics',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi',
      addressCountry: 'IN',
    },
  },
}

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Gallbladder Surgery',
  description: 'Expert laparoscopic, robotic, and single-port gallbladder surgery by Dr. Kapil Agrawal in Delhi. 23+ years experience, 7000+ successful surgeries.',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
  },
  procedureType: 'Laparoscopic Cholecystectomy',
  followup: 'Regular follow-up appointments and post-operative care',
  preparation: 'Pre-surgery consultation, medical evaluation, and preparation instructions',
}

export default function GallbladderSurgeryPage() {

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        suppressHydrationWarning
      />

      <div className="pt-20 pb-16">
        {/* Hero Image */}
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/gallbladder-surgeon-delhi-india.webp"
              alt="Best Gallbladder Surgeon in Delhi - Dr. Kapil Agrawal | Expert Gallbladder Stone Removal | 23 Years Experience | 7000+ Surgeries"
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">best-gallbladder-surgeon-delhi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Gallbladder Surgeon in <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Expert Surgeon with Over 23 Years of Experience | Internationally Trained Expert | Painless Surgery for Fast Recovery | Cashless Insurance Facility Available | Discharge within 24 hours
            </p>
            
            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: '23+ Years Experience' },
                { icon: Users, text: '7000+ Successful Surgeries' },
                { icon: TrendingUp, text: 'Painless Surgery' },
                { icon: Clock, text: '24-Hour Discharge' },
              ].map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#0891b2]/10 px-4 py-2 rounded-full">
                  <highlight.icon className="text-[#0891b2] w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">{highlight.text}</span>
                </div>
              ))}
            </div>
            
            <CallUsButton />
          </div>
        </div>

        <div className="container-custom space-y-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <ConsultationForm 
                serviceName="Gallbladder Surgery"
                serviceSlug="gallbladder-surgery"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* About Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Dr. Kapil Agrawal - Expert Laparoscopic Surgeon for Gallbladder Stone Removal at Habilite Clinics
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal is a highly experienced surgeon in gallbladder stone treatment, known for his surgical excellence in laparoscopic cholecystectomy—a minimally invasive surgery including gallbladder removal through small incisions. This technique involves reduced pain, shorter hospital stays, and faster recovery, making it the best choice for gallstone management.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal has successfully executed numerous laparoscopic gallbladder surgeries, earning the trust of various patients with his precision, excellent surgical outcomes, and best patient care. He possesses outstanding skills to effectively deal with simple and complex cases ensuring a high standard of patient care. With his passion to offer better safety, comfort, and faster healing with admirable post-surgical care, Dr. Kapil Agrawal is one of the top choices for gallbladder stone surgery in Delhi.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr. Kapil Agrawal, a laparoscopic and robotic gallbladder surgeon in Delhi, is widely regarded as the best gallbladder surgeon in Delhi, India. With over 23 years of experience and more than 7,000 successful gallbladder surgeries, he is known as a gallbladder stone specialist in Delhi for delivering excellent patient outcomes. Dr. Kapil Agrawal is also a Senior consultant at Apollo group of hospitals and he is associated with many top hospitals in Delhi NCR to offer safe, effective, and advanced surgical care.
              </p>
            </section>

            {/* What is Gallbladder */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What is Gallbladder?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The gallbladder is a tiny pear-shaped organ located just below the liver. It is situated on the right upper side of the belly. The liver produces a yellow-coloured fluid known as BILE. This bile flows into the intestine and helps digest foods, especially fatty meals.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                <h3 className="font-semibold text-gray-900 mb-3">Function of the Gallbladder:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Storage of Bile:</strong> The liver produces 1.5 litres of bile daily. Most of the bile goes directly into the food pipe or intestine. Nevertheless, 50 ml of bile goes into the gallbladder and is stored as an emergency reserve.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Bile Release:</strong> As soon as fatty foods or numerous large meals enter the small intestine, the gallbladder starts releasing bile so that food can be digested properly.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* What Are Gallstones */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What Are Gallstones (Cholelithiasis)?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Gallstones are solid particles that develop in the gallbladder—a small organ located beneath the liver. The gallbladder stores and releases a digestive fluid, named bile produced by the liver. Bile helps to break down food ingested and also transmits waste products like cholesterol and bilirubin, which are created from the breakdown of red blood cells. Sometimes, these substances can harden and form gallstones of varied sizes. Gallstones have a tendency to block bile duct; they can cause intense pain and may need instant medical intervention.
              </p>
            </section>

            {/* Symptoms */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Symptoms of Gallbladder Stones</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                According to Dr. Kapil Agrawal, the best doctor for gallbladder surgery, there are no noticeable symptoms of gallstones in many cases. When small stones restrict flow of bile juice, they can result in biliary colic—identified by sudden upper abdominal pain, nausea, and digestive discomfort.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">Few identifying symptoms are as follows:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-red-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Abdominal Pain:</strong> Pain can be in the right upper abdomen, central referred to back or general all over the abdomen.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-red-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Nausea or Vomiting:</strong> These symptoms can be generated as the stones block the ducts.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-red-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Bloating of the Abdomen:</strong> Gallstones can result in symptoms like indigestion that further led to formation and accumulation of gases in your intestines, resulting in abdominal bloating.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-red-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Jaundice:</strong> A yellowish tinge in your eyes and urine, which occurs when stones outflow from the gallbladder into main ducts, blocking bile flow.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-red-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>High-grade Fever with Chills:</strong> Fever and shivers or chills may be a sign of infection in the gallbladder including that in either central bile duct.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Why do Gallstones Form */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why do Gallstones Form?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Gallbladder stones are, in fact, solid pieces of cholesterol, calcium salts, or bilirubin. Main risk factors for Gallstones:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Metabolic Disturbances',
                    description: 'Changes in cholesterol metabolism (Hyperlipidemia) - due to obesity, rapid gain or loss of weight.',
                  },
                  {
                    title: 'Infection of the Gallbladder',
                    description: 'Sometimes, gallbladder infection leads to loss of gallbladder function. As a result, the formation of stones starts in the gallbladder.',
                  },
                  {
                    title: 'Hormonal Disturbances',
                    description: 'Multiple pregnancies and obesity can result in hormonal imbalances, leading to diminished function of the gallbladder. As a result, stones start forming in the gallbladder.',
                  },
                ].map((factor, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">{factor.title}</h3>
                    <p className="text-gray-700 text-sm">{factor.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Types of Gallbladder Surgery */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Gallbladder Surgeries Done by Dr. Kapil Agrawal in Delhi, India
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Gallstone treatment has evolved outstandingly with the invention of advanced surgical technologies focused on faster recovery, minimal pain, and better aesthetics. At Habilite Clinics, Dr. Kapil Agrawal, the Best Gallbladder Surgeon in Delhi, offers highly precise, minimally invasive solutions tailored for safe and effective gallstone removal.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: '1. Laparoscopic Gallbladder Stone Surgery',
                    description: 'Laparoscopic cholecystectomy is regarded as one of the best surgical treatments available for gallstones. This is a minimally invasive procedure that is performed with general anesthesia in which:',
                    points: [
                      'Three small incisions are made on the abdomen of about 0.5 cm each.',
                      'Abdomen is inflated using carbon dioxide for better visibility.',
                      'A thin and lighted camera is inserted to assist in surgery.',
                      'The gallbladder and stones are dissected and removed via one of the incisions precisely.',
                    ],
                  },
                  {
                    title: '2. Single Port Gallbladder Stone Surgery',
                    description: 'Single port laparoscopic surgery is a modern version of conventional laparoscopy. In this procedure, only a single incision is performed which is hidden within the belly button, instead of multiple incisions. This surgery is aesthetically good, making the scar invisible.',
                    points: [
                      'Technically demanding but provides excellent cosmetic results',
                      'Single hidden incision in the belly button',
                      'Faster recovery with minimal visible scarring',
                      'Ideal for patients concerned about aesthetics',
                    ],
                  },
                  {
                    title: '3. Robotic Gallbladder Surgery',
                    description: 'Robotic-assisted gallbladder surgery uses advanced robotic technology for enhanced precision and control. This technique offers:',
                    points: [
                      'Enhanced 3D visualization for the surgeon',
                      'Greater precision and dexterity',
                      'Reduced risk of complications',
                      'Faster recovery times',
                    ],
                  },
                ].map((procedure, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{procedure.title}</h3>
                    <p className="text-gray-700 mb-3">{procedure.description}</p>
                    <ul className="space-y-2">
                      {procedure.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start text-gray-700">
                          <CheckCircle2 className="text-[#0891b2] mr-2 mt-1 flex-shrink-0" size={18} />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Dr. Kapil Agrawal */}
            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Why Choose Dr. Kapil Agrawal for Gallbladder Surgery?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal is the best surgeon for gallbladder removal and gallstone surgery in Delhi, known for his accuracy, patient-centric care, and expertise in advanced laparoscopic procedures.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'More than 23 years of surgical excellence and performed 7000+ gallbladder surgeries with positive outcomes.',
                  'Patient-centric approach by offering customized treatment plan and outstanding post-surgery care.',
                  'Huge experience of performing various laparoscopic cholecystectomy with positive outcomes.',
                  'Specialization in minimally invasive laparoscopic techniques with minimal pain, less risks for complication and quicker recovery.',
                  'Patients get same-day discharge and can go home after 24 hours of surgery.',
                  'Best surgical practices and latest equipment in gallbladder surgical care.',
                  'Augmented technology and dedicated support team for high-quality surgical care.',
                ].map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Other Treatments */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Other Gallbladder Treatments Offered by Dr. Kapil Agrawal
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">CBD Stones</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Expert Common Bile Duct stone treatment for bile duct blockages with advanced diagnosis, minimally invasive procedures, and faster recovery.
                  </p>
                  <Link href="/laparoscopic-surgery/gallbladder-surgery/cbd-stones" className="text-[#0891b2] font-semibold text-sm hover:underline">
                    Learn More →
                  </Link>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Gallbladder Polyps</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Advanced treatment for gallbladder polyps with expert evaluation, accurate diagnosis, and minimally invasive surgical options if needed.
                  </p>
                  <Link href="/laparoscopic-surgery/gallbladder-surgery/gallbladder-polyps" className="text-[#0891b2] font-semibold text-sm hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <div className="max-w-5xl mx-auto">
            <CostCalculator serviceName="Gallbladder Surgery" />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <GallbladderTestimonials />
            <GallbladderFAQ />
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                    <p className="text-gray-700 text-sm">Most patients can return to normal activities within 1-2 weeks after laparoscopic gallbladder surgery. Many patients are discharged within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments ensure optimal recovery and address any concerns. Dr. Kapil Agrawal provides comprehensive post-operative care.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <PostOperativeCare />
          <WhatsAppExpertChat serviceName="Gallbladder Surgery" />
        </div>
      </div>
    </>
  )
}
