import { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  Clock,
  User,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import ConsultationForm from "@/components/forms/ConsultationForm";
import CallUsButton from "@/components/lead-generation/CallUsButton";
import CostCalculator from "@/components/lead-generation/CostCalculator";
import PostOperativeCare from "@/components/lead-generation/PostOperativeCare";
import WhatsAppExpertChat from "@/components/lead-generation/WhatsAppExpertChat";
import Link from "next/link";
import GallbladderFAQ from "./GallbladderFAQ";
import GallbladderTestimonials from "./GallbladderTestimonials";
import { RecoveryTimeline } from "@/components/services/RecoveryTimeline";
import RelatedBlogs from "@/components/services/RelatedBlogs";
import StructuredData from "@/components/seo/StructuredData";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getMedicalProcedureSchema,
  getServiceSchema,
} from "@/lib/seo/schemaBuilders";

export const metadata: Metadata = {
  title:
    "Best Gallbladder Surgeon in Delhi - Dr. Kapil Agrawal | 23 Years Experience | 7000+ Surgeries",
  description:
    "Dr. Kapil Agrawal is the best gallbladder surgeon in Delhi with 23+ years of experience and 7000+ successful gallbladder surgeries. Expert in laparoscopic, robotic, and single-port cholecystectomy. Painless surgery, 24-hour discharge, cashless insurance available. Book consultation now.",
  keywords: [
    "best gallbladder surgeon delhi",
    "gallbladder stone surgeon delhi",
    "gallbladder surgery delhi",
    "laparoscopic cholecystectomy delhi",
    "robotic gallbladder surgery delhi",
    "single port gallbladder surgery delhi",
    "gallbladder stone removal delhi",
    "Dr. Kapil Agrawal gallbladder",
    "gallbladder specialist delhi",
    "gallbladder surgeon india",
    "best doctor for gallbladder surgery",
    "gallbladder stone treatment delhi",
  ],
  openGraph: {
    title:
      "Best Gallbladder Surgeon in Delhi - Dr. Kapil Agrawal | 23 Years Experience",
    description:
      "Expert laparoscopic and robotic gallbladder surgeon in Delhi. 7000+ successful surgeries. Painless surgery, fast recovery, 24-hour discharge. Book consultation.",
    url: "https://www.habiliteclinics.com/best-gallbladder-stone-surgeon-delhi",
    images: [
      {
        url: "https://www.habiliteclinics.com/images/gallbladder-surgeon-delhi-india.webp",
        width: 1200,
        height: 630,
        alt: "Best Gallbladder Surgeon in Delhi - Dr. Kapil Agrawal",
      },
    ],
  },
  alternates: {
    canonical:
      "https://www.habiliteclinics.com/best-gallbladder-stone-surgeon-delhi",
  },
};

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
  );
  return match && match[1] ? match[1] : null;
}

const gallbladderFaqs = [
  {
    question: "Can I live a normal life after gallbladder removal surgery?",
    answer:
      "Yes. Most patients return to normal life within a week after gallbladder removal. Your body adapts quickly, and any dietary adjustments are temporary.",
  },
  {
    question: "Are there medicines that can dissolve gallstones?",
    answer:
      "Medicines can dissolve cholesterol gallstones in very selective cases, but the process is slow and stones often return. Laparoscopic cholecystectomy is the most reliable and permanent treatment.",
  },
  {
    question:
      "Should I undergo surgery if I have asymptomatic (silent) gallstones?",
    answer:
      "Silent gallstones can be monitored, but surgery may be advised for large stones, high-risk patients, or to prevent sudden attacks and complications in the future.",
  },
  {
    question: "Can gallbladder stones increase the risk of cancer?",
    answer:
      "Gallstones themselves are not cancerous. However, long-standing or large stones can cause chronic irritation, which slightly increases gallbladder cancer risk. Early treatment reduces this risk.",
  },
  {
    question: "What are gallbladder polyps, and do they need removal?",
    answer:
      "Gallbladder polyps are growths on the inner wall of the gallbladder. Polyps larger than 10 mm or those causing symptoms usually require surgery due to cancer risk. Smaller polyps are monitored regularly.",
  },
  {
    question: "How can I prevent gallstones from forming?",
    answer:
      "Maintain a healthy weight, follow a balanced low-fat and high-fibre diet, exercise regularly, stay hydrated, and avoid rapid weight loss to reduce gallstone risk.",
  },
  {
    question: "What happens if a gallstone enters the common bile duct (CBD)?",
    answer:
      "A stone in the CBD can cause severe pain, jaundice, and infection. It is usually removed through ERCP before or during gallbladder surgery to restore normal bile flow.",
  },
  {
    question: "Can gallstones be removed without removing the gallbladder?",
    answer:
      "Non-surgical methods rarely work and have a high recurrence rate. Removing the gallbladder (cholecystectomy) is the only permanent solution to prevent stones from forming again.",
  },
  {
    question: "What should I avoid eating after gallbladder removal?",
    answer:
      "Avoid oily, fried, and high-fat foods for a few weeks. Introduce fats slowly, choose smaller meals, and stay well-hydrated to support smooth digestion.",
  },
  {
    question: "How many days of rest are needed after gallbladder surgery?",
    answer:
      "Most patients resume desk work within 5–7 days and normal daily activities within 10–14 days after laparoscopic surgery. Heavy lifting should be avoided for about 3–4 weeks.",
  },
];

const faqSchema = getFAQSchema({
  title: "Gallbladder Surgery FAQs",
  description:
    "Answers by Dr. Kapil Agrawal on gallbladder stones, laparoscopic cholecystectomy, cost, and recovery timelines.",
  faqs: gallbladderFaqs,
});

const procedureSchema = getMedicalProcedureSchema({
  name: "Gallbladder Surgery (Laparoscopic Cholecystectomy)",
  description:
    "Comprehensive gallbladder stone treatment by Dr. Kapil Agrawal featuring laparoscopic, single-port, and robotic cholecystectomy with 24-hour discharge.",
  url: "/best-gallbladder-stone-surgeon-delhi",
  procedureType: "Laparoscopic Cholecystectomy",
  bodyLocation: "Gallbladder",
  followup:
    "Tele-follow up within 48 hours and in-person review after 7–10 days.",
  preparation:
    "Pre-surgery consultation, blood tests, anaesthesia clearance, and 8-hour fasting.",
  howPerformed:
    "Keyhole incisions with laparoscope or robotic assistance remove the gallbladder and stones safely with minimal blood loss.",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Treatments", url: "/treatments" },
  { name: "Gallbladder Surgery", url: "/best-gallbladder-stone-surgeon-delhi" },
]);

const serviceSchema = getServiceSchema({
  name: "Gallbladder Surgery - Laparoscopic Cholecystectomy",
  description:
    "Expert laparoscopic gallbladder surgery by Dr. Kapil Agrawal in Delhi, India. Comprehensive gallbladder stone treatment featuring laparoscopic, single-port, and robotic cholecystectomy with 24-hour discharge.",
  url: "/laparoscopic-surgery/gallbladder-surgery",
  serviceType: "Medical Procedure",
  category: "Laparoscopic Surgery",
  areaServed: ["Delhi", "NCR", "India"],
});

export default function GallbladderSurgeryPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={procedureSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

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
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">
              best-gallbladder-surgeon-delhi
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Gallbladder Surgeon in{" "}
              <span className="text-[#0891b2]">Delhi</span> | Advanced Laparoscopic & Robotic Surgery by Dr Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Expert Surgeon with Over 23 Years of Experience | Internationally
              Trained Expert | Painless Surgery for Fast Recovery | Cashless
              Insurance Facility Available | Discharge within 24 hours
            </p>

            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: "23+ Years Experience" },
                { icon: Users, text: "7000+ Successful Surgeries" },
                { icon: TrendingUp, text: "Painless Surgery" },
                { icon: Clock, text: "24-Hour Discharge" },
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#0891b2]/10 px-4 py-2 rounded-full"
                >
                  <highlight.icon className="text-[#0891b2] w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">
                    {highlight.text}
                  </span>
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
                Best Gallbladder Surgeon in Delhi | Advanced Laparoscopic &
                Robotic Surgery by Dr Kapil Agrawal
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr Kapil Agrawal is one of the most prominent and best
                gallbladder surgeons in Delhi. He is known for his outstanding
                surgical skills, with promising outcomes in Laparoscopic
                Gallbladder Surgeries and Robot-Assisted Gallbladder Stone
                Surgeries.  His huge surgical experience of 23 years includes
                more than 7,000 gallbladder surgeries executed. This significant
                volume speaks to his commitment to delivering the finest quality
                of care to his patients.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With his association with top hospitals
                in Delhi, Dr Kapil Agrawal delivers excellent results, combining
                empathy and strong compassion to offer brilliant patient care.
              </p>
              {/* <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal has successfully executed numerous
                laparoscopic gallbladder surgeries, earning the trust of various
                patients with his precision, excellent surgical outcomes, and
                best patient care. He possesses outstanding skills to
                effectively deal with simple and complex cases ensuring a high
                standard of patient care. With his passion to offer better
                safety, comfort, and faster healing with admirable post-surgical
                care, Dr. Kapil Agrawal is one of the top choices for
                gallbladder stone surgery in Delhi.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr. Kapil Agrawal, a laparoscopic and robotic gallbladder
                surgeon in Delhi, is widely regarded as the best gallbladder
                surgeon in Delhi, India. With over 23 years of experience and
                more than 7,000 successful gallbladder surgeries, he is known as
                a gallbladder stone specialist in Delhi for delivering excellent
                patient outcomes. Dr. Kapil Agrawal is also a Senior consultant
                at Apollo group of hospitals and he is associated with many top
                hospitals in Delhi NCR to offer safe, effective, and advanced
                surgical care.
              </p> */}
            </section>

            {/* What is Gallbladder */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Understanding Gallbladder Diseases
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2] mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  What Does the Gallbladder Do?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The gallbladder is a small pouch located beneath the liver that stores, concentrates, and releases bile. Bile is a digestive juice produced by the liver that helps in breaking down dietary fats during the digestive process after the consumption of fatty foods.
                </p>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Common Symptoms of Gallbladder Problems:
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When the gallbladder ceases to function properly, it can cause various symptoms.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>The Classic Symptom: Biliary Colic:</strong> This is the first major warning sign. You might experience a sudden, intense, and steady pain in the upper right abdomen or centre of your stomach, just below the breastbone.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>Persistent Indigestion and Bloating:</strong> You might also feel frequent bloating, gas, heartburn, and a feeling of fullness or nausea, especially after meals.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>Signs of Infection or Inflammation (Acute Cholecystitis):</strong> If a stone completely blocks the gallbladder&apos;s outlet, it can lead to a dangerous infection. This results in constant, severe pain, fever with chills, and nausea/vomiting.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>When stones slip into the bile duct:</strong> Small stones can escape the gallbladder and block the common bile duct (choledocholithiasis), or even trigger pancreatitis. This can cause jaundice, dark urine and pale stools, severe, persistent abdominal pain.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  When You Should See a Gallbladder Specialist
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If you experience recurrent episodes of upper abdominal pain, especially after meals, or any of the acute symptoms mentioned above, do not ignore them. Early consultation with a specialist like Dr Kapil Agrawal can prevent complications and lead to a simpler, scheduled surgery rather than an emergency procedure.
                </p>
              </div>
            </section>

            {/* What Are Gallstones */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Gallbladder Conditions We Treat
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While gallbladder stones are the most common problem, the gallbladder can be affected by several conditions. Dr Kapil Agrawal&apos;s expertise enables him to deal with the full spectrum of gallbladder pathologies.
Gallstones (Cholelithiasis): The presence of stones that are causing biliary colic or other symptoms. This is the most common reason for recommending laparoscopic cholecystectomy.
Acute and Chronic Cholecystitis: This refers to inflammation of the gallbladder, due to which gallbladder stops to function. 
Biliary Dyskinesia: This is a less common condition where the gallbladder loses its power to contract and cannot empty bile properly, causing classic gallbladder pain without the presence of stones. 
Gallbladder Polyps: These are growths that protrude from the gallbladder&apos;s inner lining. While most are benign, certain types or large polyps (&lt;1) may have malignant potential. 
Porcelain Gallbladder: A rare condition where the gallbladder wall becomes calcified. It is associated with a significantly increased risk of gallbladder cancer.
              </p>
            </section>

            {/* Symptoms */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Advanced Gallbladder Surgery Options:
              </h2>
<li>
  <h3 className="font-bold text-xl mb-2">
  Gold-Standard Laparoscopic Cholecystectomy: The Preferred Choice 
  </h3>
</li>

  <p className="mb-4">
  In the modern era, laparoscopic surgery has been regarded as the gold standard
  procedure for gallbladder management. Dr Kapil Agrawal is the best laparoscopic 
  surgeon in Delhi, known for his successful gallbladder stone surgeries.
</p>

<p className="mb-4">
  The surgery is performed under general anaesthesia, which means the patient is 
  completely asleep before surgery begins. In this procedure, three small holes, 
  each 0.5 cm, are made at different abdominal sites to perform the surgery.
  A laparoscope (a thin tube with a high-definition camera) and specialised 
  instruments are inserted. Dr Agrawal performs the entire surgery while viewing 
  a magnified image on a screen, enabling exceptional precision.
</p>

<p className="mb-4">
  <strong>Benefits for You:</strong> Patients experience significantly less 
  post-operative pain, minimal scarring, a lower risk of infection, and a much 
  faster return to everyday life—often within a week.
</p>


<li>
  <h3 className="font-bold text-xl mb-2">
  Single-Port (SILS) Surgery: For an Almost Scarless Result 
  </h3>
</li>


<p className="mb-4">Single-port surgery for gallbladder stones is an advanced form of conventional laparoscopic surgery.  In specific individuals who meet the eligibility criteria, the technique is known to produce excellent results in terms of aesthetics and pain relief. For eligible patients seeking the ultimate in minimally invasive cosmetic results, Dr Agrawal is a pioneer in this advanced technique.
The Innovation: Instead of 3-4 small incisions, the entire surgery is performed through a single, small incision hidden within the belly button (umbilicus).</p>
<p className="mb-4">The Aesthetic Advantage: The result is a scar that is virtually invisible after healing. Dr Agrawal performs this procedure &quot;mainly for gallbladder stones and bariatric surgery&quot;.</p>


              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Few identifying symptoms are as follows:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>Abdominal Pain:</strong> Pain can be in the right
                      upper abdomen, central referred to back or general all
                      over the abdomen.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>Nausea or Vomiting:</strong> These symptoms can be
                      generated as the stones block the ducts.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>Bloating of the Abdomen:</strong> Gallstones can
                      result in symptoms like indigestion that further led to
                      formation and accumulation of gases in your intestines,
                      resulting in abdominal bloating.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>Jaundice:</strong> A yellowish tinge in your eyes
                      and urine, which occurs when stones outflow from the
                      gallbladder into main ducts, blocking bile flow.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>High-grade Fever with Chills:</strong> Fever and
                      shivers or chills may be a sign of infection in the
                      gallbladder including that in either central bile duct.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Why do Gallstones Form */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Why do Gallstones Form?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Gallbladder stones are, in fact, solid pieces of cholesterol,
                calcium salts, or bilirubin. Main risk factors for Gallstones:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Metabolic Disturbances",
                    description:
                      "Changes in cholesterol metabolism (Hyperlipidemia) - due to obesity, rapid gain or loss of weight.",
                  },
                  {
                    title: "Infection of the Gallbladder",
                    description:
                      "Sometimes, gallbladder infection leads to loss of gallbladder function. As a result, the formation of stones starts in the gallbladder.",
                  },
                  {
                    title: "Hormonal Disturbances",
                    description:
                      "Multiple pregnancies and obesity can result in hormonal imbalances, leading to diminished function of the gallbladder. As a result, stones start forming in the gallbladder.",
                  },
                ].map((factor, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-5 border border-gray-200"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {factor.description}
                    </p>
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
                Gallstone treatment has evolved outstandingly with the invention
                of advanced surgical technologies focused on faster recovery,
                minimal pain, and better aesthetics. At Habilite Clinics, Dr.
                Kapil Agrawal, the Best Gallbladder Surgeon in Delhi, offers
                highly precise, minimally invasive solutions tailored for safe
                and effective gallstone removal.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "1. Laparoscopic Gallbladder Stone Surgery",
                    description:
                      "Laparoscopic cholecystectomy is regarded as one of the best surgical treatments available for gallstones. This is a minimally invasive procedure that is performed with general anesthesia in which:",
                    points: [
                      "Three small incisions are made on the abdomen of about 0.5 cm each.",
                      "Abdomen is inflated using carbon dioxide for better visibility.",
                      "A thin and lighted camera is inserted to assist in surgery.",
                      "The gallbladder and stones are dissected and removed via one of the incisions precisely.",
                    ],
                  },
                  {
                    title: "2. Single Port Gallbladder Stone Surgery",
                    description:
                      "Single port laparoscopic surgery is a modern version of conventional laparoscopy. In this procedure, only a single incision is performed which is hidden within the belly button, instead of multiple incisions. This surgery is aesthetically good, making the scar invisible.",
                    points: [
                      "Technically demanding but provides excellent cosmetic results",
                      "Single hidden incision in the belly button",
                      "Faster recovery with minimal visible scarring",
                      "Ideal for patients concerned about aesthetics",
                    ],
                  },
                  {
                    title: "3. Robotic Gallbladder Surgery",
                    description:
                      "Robotic-assisted gallbladder surgery uses advanced robotic technology for enhanced precision and control. This technique offers:",
                    points: [
                      "Enhanced 3D visualization for the surgeon",
                      "Greater precision and dexterity",
                      "Reduced risk of complications",
                      "Faster recovery times",
                    ],
                  },
                ].map((procedure, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]"
                  >
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">
                      {procedure.title}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {procedure.description}
                    </p>
                    <ul className="space-y-2">
                      {procedure.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start text-gray-700"
                        >
                          <CheckCircle2
                            className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                            size={18}
                          />
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
                Dr. Kapil Agrawal is the best surgeon for gallbladder removal
                and gallstone surgery in Delhi, known for his accuracy,
                patient-centric care, and expertise in advanced laparoscopic
                procedures.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "More than 23 years of surgical excellence and performed 7000+ gallbladder surgeries with positive outcomes.",
                  "Patient-centric approach by offering customized treatment plan and outstanding post-surgery care.",
                  "Huge experience of performing various laparoscopic cholecystectomy with positive outcomes.",
                  "Specialization in minimally invasive laparoscopic techniques with minimal pain, less risks for complication and quicker recovery.",
                  "Patients get same-day discharge and can go home after 24 hours of surgery.",
                  "Best surgical practices and latest equipment in gallbladder surgical care.",
                  "Augmented technology and dedicated support team for high-quality surgical care.",
                ].map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
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
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    CBD Stones
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Expert Common Bile Duct stone treatment for bile duct
                    blockages with advanced diagnosis, minimally invasive
                    procedures, and faster recovery.
                  </p>
                  <Link
                    href="/laparoscopic-surgery/gallbladder-surgery/cbd-stones"
                    className="text-[#0891b2] font-semibold text-sm hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    Gallbladder Polyps
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Advanced treatment for gallbladder polyps with expert
                    evaluation, accurate diagnosis, and minimally invasive
                    surgical options if needed.
                  </p>
                  <Link
                    href="/laparoscopic-surgery/gallbladder-surgery/gallbladder-polyps"
                    className="text-[#0891b2] font-semibold text-sm hover:underline"
                  >
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
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Recovery & Aftercare
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock
                    className="text-[#0891b2] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Recovery Time
                    </p>
                    <p className="text-gray-700 text-sm">
                      Most patients can return to normal activities within 1-2
                      weeks after laparoscopic gallbladder surgery. Many
                      patients are discharged within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User
                    className="text-[#0891b2] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Follow-up Care
                    </p>
                    <p className="text-gray-700 text-sm">
                      Regular follow-up appointments ensure optimal recovery and
                      address any concerns. Dr. Kapil Agrawal provides
                      comprehensive post-operative care.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <RecoveryTimeline />
            <div className="max-w-5xl mx-auto">
              <PostOperativeCare />
            </div>
            <div className="max-w-5xl mx-auto">
              <WhatsAppExpertChat serviceName="Gallbladder Surgery" />
            </div>
            <GallbladderFAQ />
            <RelatedBlogs
              serviceName="Gallbladder"
              serviceKeywords={[
                "gallbladder",
                "gall bladder",
                "gallstone",
                "gall stone",
                "cholecystectomy",
                "gallbladder stone",
                "gallbladder surgery",
              ]}
              maxPosts={3}
            />
          </div>
        </div>
      </div>
    </>
  );
}
