import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  CheckCircle2,
  Clock,
  User,
  Award,
  Users,
  TrendingUp,
  Phone,
} from "lucide-react";
import Link from "next/link";
import StructuredData from "@/components/seo/StructuredData";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getMedicalProcedureSchema,
  getServiceSchema,
} from "@/lib/seo/schemaBuilders";

// Lazy load heavy components to improve FCP and LCP - defer to reduce TBT and unused JS
const ConsultationForm = dynamic(
  () => import("@/components/forms/ConsultationForm"),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 min-h-[400px] animate-pulse" />
    ),
  }
);

const CallUsButton = dynamic(
  () => import("@/components/lead-generation/CallUsButton"),
  {
    ssr: true, // Keep SSR for above-the-fold CTA
  }
);

const CostCalculator = dynamic(
  () => import("@/components/lead-generation/CostCalculator"),
  {
    ssr: false,
    loading: () => (
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 min-h-[300px] animate-pulse" />
    ),
  }
);

const PostOperativeCare = dynamic(
  () => import("@/components/lead-generation/PostOperativeCare"),
  {
    ssr: false,
  }
);

const WhatsAppExpertChat = dynamic(
  () => import("@/components/lead-generation/WhatsAppExpertChat"),
  {
    ssr: false,
  }
);

const GallbladderFAQ = dynamic(() => import("./GallbladderFAQ"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-xl" />
  ),
});

const GallbladderTestimonials = dynamic(
  () => import("./GallbladderTestimonials"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-xl" />
    ),
  }
);

const RecoveryTimeline = dynamic(
  () =>
    import("@/components/services/RecoveryTimeline").then((mod) => ({
      default: mod.RecoveryTimeline,
    })),
  {
    ssr: false,
  }
);

const RelatedBlogs = dynamic(
  () => import("@/components/services/RelatedBlogs"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-xl" />
    ),
  }
);

// Lazy YouTube component - only loads when user scrolls near it (saves 1.5MB of JS)
const LazyYouTubeVideo = dynamic(
  () => import("@/components/video/LazyYouTubeVideo"),
  {
    ssr: false,
    loading: () => (
      <section className="my-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="relative w-full aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="mb-4">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <p className="text-sm">Click to load video</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
  }
);

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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical:
      "https://www.habiliteclinics.com/best-gallbladder-stone-surgeon-delhi",
  },
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
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
      <div className="pt-20 pb-16">
        {/* Hero Image - LCP Element */}
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/gallbladder-surgeon-delhi-india.webp"
              alt="Best Gallbladder Surgeon in Delhi - Dr. Kapil Agrawal | Expert Gallbladder Stone Removal | 23 Years Experience | 7000+ Surgeries"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              priority
              fetchPriority="high"
              quality={85}
              loading="eager"
              decoding="async"
              unoptimized={false}
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="container-custom mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2] mb-3">
              best-gallbladder-surgeon-delhi
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Gallbladder Surgeon in{" "}
              <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Dr Kapil Agrawal is one of the most prominent and best gallbladder
              surgeons in Delhi. He is known for his outstanding surgical
              skills, with promising outcomes in Laparoscopic Gallbladder
              Surgeries and Robot-Assisted Gallbladder Stone Surgeries. His huge
              surgical experience of 23 years includes more than 7,000
              gallbladder surgeries executed. This significant volume speaks to
              his commitment to delivering the finest quality of care to his
              patients.
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
            {/* Service Image */}
            {/* <div className="mb-8">
              <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
                <Image
                  src="/images/best-gallbladder.webp"
                  alt="Dr Kapil Agrawal best gallbladder specialists and surgeon in Delhi" title="best Gallbladder Surgeon in Delhi"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div> */}
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <div className="defer-section">
                <ConsultationForm
                  serviceName="Gallbladder Surgery"
                  serviceSlug="gallbladder-surgery"
                />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
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
                  The gallbladder is a small pouch located beneath the liver
                  that stores, concentrates, and releases bile. Bile is a
                  digestive juice produced by the liver that helps in breaking
                  down dietary fats during the digestive process after the
                  consumption of fatty foods.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Common Symptoms of Gallbladder Problems:
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When the gallbladder ceases to function properly, it can cause
                  various symptoms.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>The Classic Symptom: Biliary Colic:</strong> This
                      is the first major warning sign. You might experience a
                      sudden, intense, and steady pain in the upper right
                      abdomen or centre of your stomach, just below the
                      breastbone.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>Persistent Indigestion and Bloating:</strong> You
                      might also feel frequent bloating, gas, heartburn, and a
                      feeling of fullness or nausea, especially after meals.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>
                        Signs of Infection or Inflammation (Acute
                        Cholecystitis):
                      </strong>{" "}
                      If a stone completely blocks the gallbladder&apos;s
                      outlet, it can lead to a dangerous infection. This results
                      in constant, severe pain, fever with chills, and
                      nausea/vomiting.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>When stones slip into the bile duct:</strong>{" "}
                      Small stones can escape the gallbladder and block the
                      common bile duct (choledocholithiasis), or even trigger
                      pancreatitis. This can cause jaundice, dark urine and pale
                      stools, severe, persistent abdominal pain.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  When You Should See a Gallbladder Specialist
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If you experience recurrent episodes of upper abdominal pain,
                  especially after meals, or any of the acute symptoms mentioned
                  above, do not ignore them. Early consultation with a
                  specialist like Dr Kapil Agrawal can prevent complications and
                  lead to a simpler, scheduled surgery rather than an emergency
                  procedure.
                </p>
              </div>
            </section>

            {/* What is Gallbladder Image - Optimized sizes to reduce 25 KiB */}
            <section className="mb-12">
              <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl bg-gray-50">
                <Image
                  src="/images/what-is-gallbladder.webp"
                  alt="What is Gallbladder Explained by Dr. Kapil Agrawal Best Gallbladder Stone Surgeon in Delhi"
                  title="What is Gallbladder"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                  quality={70}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>
            </section>

            {/* What Are Gallstones */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Gallbladder Conditions We Treat
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While gallbladder stones are the most common problem, the
                gallbladder can be affected by several conditions. Dr Kapil
                Agrawal&apos;s expertise enables him to deal with the full
                spectrum of gallbladder pathologies.
                <p>
                  <strong>Gallstones (Cholelithiasis):</strong> The presence of
                  stones that are causing biliary colic or other symptoms. This
                  is the most common reason for recommending laparoscopic
                  cholecystectomy.
                </p>
                <p>
                  <strong>Acute and Chronic Cholecystitis:</strong> This refers
                  to inflammation of the gallbladder, due to which gallbladder
                  stops to function.{" "}
                </p>
                <p>
                  <strong>Biliary Dyskinesia:</strong> This is a less common
                  condition where the gallbladder loses its power to contract
                  and cannot empty bile properly, causing classic gallbladder
                  pain without the presence of stones.
                </p>
                <p>
                  <strong>Gallbladder Polyps:</strong> These are growths that
                  protrude from the gallbladder&apos;s inner lining. While most
                  are benign, certain types or large polyps (&lt;1) may have
                  malignant potential.
                </p>
                <p>
                  <strong>Porcelain Gallbladder:</strong> A rare condition where
                  the gallbladder wall becomes calcified. It is associated with
                  a significantly increased risk of gallbladder cancer.
                </p>
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                For more information, you can refer to our{" "}
                <Link
                  href="https://www.habiliteclinics.com/resources/gallbladder-complete-guide"
                  className="text-[#0891b2] hover:text-[#06b6d4] font-semibold"
                >
                  complete guide to gallbladder treatment
                </Link>
                .
              </p>
            </section>

            {/* YouTube Video Section - Deferred to reduce TBT and unused JS (1.5MB) */}
            <LazyYouTubeVideo
              videoId="NBP2vClykfs"
              title="Dr. Kapil Agrawal - Best Gallbladder Surgeon in Delhi | Advanced Laparoscopic & Robotic Surgery"
            />

            {/* Types of Gallbladder Surgery */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Advanced Gallbladder Surgery Options by Dr. Kapil Agrawal in
                Delhi, India
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Gallbladder stone treatment has advanced significantly with the
                use of modern surgical techniques that focus on safety, comfort,
                and quicker recovery. <Link
                        href="https://www.habiliteclinics.com/dr-kapil-agrawal"
                        className="text-[#0891b2] hover:text-[#06b6d4] font-semibold"
                      >
                      Dr. Kapil Agrawal -  </Link>{" "}Gallbladder Specialist Surgeon
                offers a range of minimally invasive gallbladder surgery
                options, delivering precise and patient-centric care for
                effective stone removal.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title:
                      "1. Gold-Standard Laparoscopic Cholecystectomy: The Preferred Choice",
                    description:
                      "Laparoscopic gallbladder surgery is widely accepted as the most effective and reliable method for treating gallstones. The operation is performed under general anaesthesia and uses modern surgical technology to ensure accuracy and patient comfort.",
                    points: [
                      "Three very small cuts, each around 0.5 cm, are made on the abdomen.",
                      "A slender camera-equipped scope is inserted to provide a clear, enlarged internal view.",
                      "Fine surgical tools are used to safely remove the gallbladder under visual guidance.",
                      "The approach results in reduced pain, minimal marks, lower chances of infection, and faster recovery, allowing most patients to return to routine activities quickly.",
                    ],
                  },
                  {
                    title:
                      "2. Single-Port (SILS) Surgery: For an Almost Scarless Result",
                    description:
                      "Single-port gallbladder surgery is an advanced evolution of standard laparoscopy, designed for selected patients who qualify for this technique. It offers excellent cosmetic outcomes along with reduced discomfort. Dr. Kapil Agrawal is among the early adopters of this method, performing it primarily for gallbladder stone and bariatric procedures.",
                    points: [
                      "The entire surgery is carried out through one small incision placed inside the navel (belly button).",
                      "Unlike conventional laparoscopy, no multiple abdominal cuts are required.",
                      "The single hidden entry point leads to significantly less visible scarring after healing.",
                      "Eligible patients benefit from minimal pain and an almost scar-free appearance post-surgery.",
                    ],
                  },
                  {
                    title:
                      "3. Robotic-Assisted Surgery: Unparalleled Precision for Complex Cases",
                    description:
                      "Robotic-assisted surgery is reserved for select cases where added precision offers clear advantages. Dr. Kapil Agrawal uses this technology for patients who require greater accuracy due to surgical complexity or challenging anatomy.",
                    points: [
                      "The robotic system delivers a highly magnified three-dimensional view of the surgical area.",
                      "Robotic instruments eliminate hand tremors, allowing extremely controlled and precise movements.",
                      "This technique is especially useful in cases with severe inflammation, unusual anatomy, or prior surgical scarring.",
                      "Patients can expect recovery and cosmetic outcomes comparable to laparoscopy, with added safety in complex situations.",
                    ],
                  },
                ].map((procedure, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0891b2]"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
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

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Robotic approaches can mean similar recovery times and aesthetic
                results but may be preferred in patients having complex anatomy,
                severe inflammation, or scarring from previous surgeries.
              </p>
            </div>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
                Determining the Best Surgical Approach for You
              </h2>
              <p className="text-gray-700 leading-relaxed">
                During your evaluation, Dr Kapil Agrawal at <Link
                        href="https://www.habiliteclinics.com/habilite-clinic"
                        className="text-[#0891b2] hover:text-[#06b6d4]  font-semibold"
                      >
                      Habilite Clinics </Link>{" "}in Delhi reviews your medical
                history, imaging, lifestyle goals, and recovery expectations to
                select the safest and most aesthetic option—whether that is
                standard laparoscopy, single-port surgery, or robotic-assisted
                precision for complex cases.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Why patients across Delhi, NCR choose Habilite Clinics:
                Compassionate Care from Consultation to Recovery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title:
                      "Your First Consultation: A Comprehensive Evaluation with Dr Agrawal",
                    description:
                      "Dr Agrawal provides a detailed consultation and removes all your doubts and concerns regarding gallbladder treatment. This collaborative session establishes a personalised treatment plan so you feel informed and confident from day one.",
                  },
                  {
                    title:
                      "Transparent Planning: Understanding Costs, Insurance, and EMI Options",
                    description:
                      "We believe in complete financial clarity. Our team provides a detailed, upfront cost estimate with no hidden fees. We assist with cashless insurance claims across major providers and offer convenient, zero-interest EMI options so you can focus on recovery—not paperwork.",
                  },
                  {
                    title: "World-Class Surgical Facilities",
                    description:
                      "Most surgeries are performed at the advanced Apollo Hospitals network in Delhi NCR. You benefit from state-of-the-art operating theatres with the latest laparoscopic and robotic technology plus best-in-class post-operative care.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Why Choosing the Right Gallbladder Surgeon in Delhi is Critical
                for Your Health
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  The Risks of Gallbladder Disease: Why Timely, Expert
                  Intervention Matters
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Gallbladder stones are common but should never be considered
                  minor. Delays in treatment or choosing a non-specialist can
                  raise complication risks.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>Progression to emergency:</strong> Severe infection can require
                      urgent surgery with higher risks and longer stays.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>Avoiding major complications:</strong> Migrating stones can cause
                      jaundice, life-threatening bile duct infections, or
                      gallstone pancreatitis.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>Preventing anatomical injuries:</strong> Inexperienced surgery
                      risks bile duct injury, leading to liver problems or
                      repeat procedures.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>Ensuring complete resolution:</strong> An expert removes all
                      stones, including those that may have migrated.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Beyond the Operation: How Surgical Expertise Impacts Your
                  Recovery and Long-Term Wellbeing
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                     <strong>Minimising surgical trauma:</strong>  Advanced laparoscopic
                      techniques use tiny incisions and precise movements to
                      reduce pain and tissue damage.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                     <strong>Faster, smoother recovery:</strong>  Less pain supports quicker
                      return to work and daily routines.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                     <strong>Superior aesthetic and functional results:</strong>  Proficiency in
                      single-port laparoscopic surgery (SILS) enables a single,
                      hidden incision.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                     <strong>Safeguarding digestive health:</strong>  Expert technique maintains
                      proper anatomy, helping patients enjoy regular diets
                      without persistent issues.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                     <strong>Foundation for lifelong health:</strong>  Complication-free surgery
                      prevents long-term risks tied to chronic gallbladder
                      disease.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2
                      className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>
                      <strong>Ideal time for Gallbladder Surgery:</strong> A good surgeon always
                      ensures the best and{" "}
                      <Link
                        href="https://www.habiliteclinics.com/post/when-is-the-right-time-for-gallbladder-surgery"
                        className="text-[#0891b2] hover:text-[#06b6d4] font-semibold"
                      >
                        ideal time for gallbladder surgery
                      </Link>{" "}
                      to prevent any complications.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Why Choose Dr. Kapil Agrawal */}
            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Dr Kapil Agrawal: Best Gallbladder Surgeon in Delhi
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr Kapil Agrawal is a leading laparoscopic gallbladder surgeon
                in Delhi NCR with vast experience, refined skills, and a
                dedicated team focused on patient care.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left side - Bullet points */}
                <div className="space-y-4">
                  {[
                    "Vast experience: 23+ years and over 7,000 laparoscopic and robotic gallbladder surgeries, including complex cases.",
                    "Elite training: MBBS, MS (Surgery), MRCS (London), and MMed (Singapore) ensure adherence to global best practices.",
                    "High-volume specialist: Senior Consultant Laparoscopic Surgeon with the Apollo Group across Delhi NCR centres.",
                    "Pioneer in advanced techniques: Offers single-port laparoscopic surgery that delivers virtually scarless results.",
                    "Multidisciplinary expertise: Leads teams for complex biliary cases, including hepaticojejunostomy, complex CBD explorations, and radical cholecystectomies.",
                    "Evidence-based protocols: Globally recognised, data-driven approaches that prioritise pain control and infection prevention.",
                  ].map((reason, index) => {
                    const [boldPart, ...restParts] = reason.split(": ");
                    const remainingText = restParts.join(": ");
                    return (
                      <div key={index} className="flex items-start">
                        <CheckCircle2
                          className="text-[#0891b2] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span className="text-gray-700">
                          <strong>{boldPart}:</strong> {remainingText}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/* Right side - Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/images/best-gallbladder.webp"
                    alt="Dr Kapil Agrawal best gallbladder specialists and surgeon in Delhi"
                    title="best Gallbladder Surgeon in Delhi"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={75}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="defer-section">
              <CostCalculator serviceName="Gallbladder Surgery" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mt-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Understanding the Cost of Gallbladder Surgery in Delhi
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The cost of gallbladder surgery in Delhi depends on the
                  surgical approach, disease complexity, and overall care
                  required.
                </p>
                <p>
                  Under the expertise of Dr Kapil Agrawal, most patients are
                  treated with advanced laparoscopic gallbladder surgery,
                  ensuring faster recovery and minimal discomfort. We believe
                  in complete cost transparency, with no hidden or surprise
                  charges.
                </p>
                <p>
                  The final expense may vary based on hospital stay, anaesthesia,
                  investigations, and post-operative support.
                </p>
                <p>
                  Our team explains the expected costs clearly before surgery,
                  allowing patients to make informed decisions.
                </p>
                <p>
                  With experienced hands and modern techniques, complications and
                  extended hospital stays are minimized.
                </p>
                <p>
                  This patient-first approach ensures both clinical excellence
                  and cost efficiency.
                </p>
                <p>
                  For a clear estimate and treatment guidance, explore the
                  detailed{" "}
                  <Link
                    href="https://www.habiliteclinics.com/post/gallbladder-stone-surgery-cost-in-delhi-india-habilite-clinics"
                    className="text-[#0891b2] hover:text-[#06b6d4] font-semibold"
                  >
                    cost of gallbladder surgery in Delhi
                  </Link>{" "}
                  at Habilite Clinics.
                </p>
              </div>
            </section>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <div className="defer-section">
              <GallbladderTestimonials />
            </div>
            
            <div className="max-w-5xl mx-auto">
              <section className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                  Recovery after Gallbladder Surgery
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
                        <Link
                          href="https://www.habiliteclinics.com/post/gallbladder-surgery-recovery-tips"
                          className="text-[#0891b2] hover:text-[#06b6d4] font-semibold"
                        >
                          Recovery after Laparoscopic Gallbladder Surgery
                        </Link>{" "}
                        is very fast. Most patients can return to normal
                        activities within 1-2 weeks after laparoscopic
                        gallbladder surgery. Many patients are discharged within
                        24 hours.
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
            </div>
            
            <div className="defer-section">
              <RecoveryTimeline />
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="defer-section">
                <PostOperativeCare />
              </div>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="defer-section">
                <WhatsAppExpertChat serviceName="Gallbladder Surgery" />
              </div>
            </div>
            <div className="defer-section">
              <GallbladderFAQ />
            </div>
            <div className="defer-section">
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

          {/* CTA Section */}
          <section className="my-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#0891b2] via-[#06b6d4] to-[#22d3ee] rounded-2xl shadow-2xl p-8 sm:p-12 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Schedule Your Consultation with Best Gallbladder Surgeon in
                  Delhi
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Take the first step towards expert gallbladder surgery care.
                  Call now to book your consultation with Dr. Kapil Agrawal.
                </p>
                <a
                  href="tel:+919999456455"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0891b2] rounded-xl font-bold text-lg sm:text-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl"
                >
                  <Phone size={24} className="fill-current" />
                  <span>+91 99994 56455</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* StructuredData moved to bottom to prevent blocking render */}
      <StructuredData data={serviceSchema} />
      <StructuredData data={procedureSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />
    </>
  );
}
