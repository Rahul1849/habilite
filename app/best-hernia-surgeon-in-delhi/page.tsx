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
} from "lucide-react";
import Link from "next/link";
import StructuredData from "@/components/seo/StructuredData";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getMedicalProcedureSchema,
  getServiceSchema,
} from "@/lib/seo/schemaBuilders";

// Lazy load heavy components to improve FCP and LCP
const ConsultationForm = dynamic(
  () => import("@/components/forms/ConsultationForm"),
  {
    ssr: true,
    loading: () => (
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 min-h-[400px] animate-pulse" />
    ),
  }
);

const CallUsButton = dynamic(
  () => import("@/components/lead-generation/CallUsButton"),
  {
    ssr: true,
  }
);

const CostCalculator = dynamic(
  () => import("@/components/lead-generation/CostCalculator"),
  {
    ssr: true,
    loading: () => (
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 min-h-[300px] animate-pulse" />
    ),
  }
);

const PostOperativeCare = dynamic(
  () => import("@/components/lead-generation/PostOperativeCare"),
  {
    ssr: true,
  }
);

const WhatsAppExpertChat = dynamic(
  () => import("@/components/lead-generation/WhatsAppExpertChat"),
  {
    ssr: false,
  }
);

const HerniaTestimonials = dynamic(
  () => import("@/app/laparoscopic-surgery/hernia-surgery/HerniaTestimonials"),
  {
    ssr: true,
    loading: () => <div className="min-h-[400px] animate-pulse" />,
  }
);

const HerniaFAQ = dynamic(
  () => import("@/app/laparoscopic-surgery/hernia-surgery/HerniaFAQ"),
  {
    ssr: true,
  }
);

const RecoveryTimeline = dynamic(
  () =>
    import("@/components/services/RecoveryTimeline").then((mod) => ({
      default: mod.RecoveryTimeline,
    })),
  {
    ssr: true,
  }
);

const RelatedBlogs = dynamic(
  () => import("@/components/services/RelatedBlogs"),
  {
    ssr: true,
  }
);

export const metadata: Metadata = {
  title:
    "Best Hernia Surgeon in Delhi - Dr. Kapil Agrawal | Laparoscopic & Robotic Hernia Repair",
  description:
    "Dr. Kapil Agrawal is the best hernia surgeon in Delhi with 23+ years of experience and 7000+ laparoscopic and robotic hernia surgeries. Expert in inguinal, umbilical, femoral, hiatus, epigastric and incisional hernia repairs. Cashless insurance, 24-hour discharge, high-quality mesh, painless recovery.",
  keywords: [
    "best hernia surgeon delhi",
    "hernia surgery delhi",
    "laparoscopic hernia repair delhi",
    "robotic hernia surgeon delhi",
    "inguinal hernia specialist delhi",
    "umbilical hernia doctor delhi",
    "hernia surgery cost delhi",
    "Dr Kapil Agrawal hernia",
  ],
  openGraph: {
    title: "Best Hernia Surgeon in Delhi - Dr. Kapil Agrawal",
    description:
      "Internationally trained hernia surgeon performing painless laparoscopic & robotic hernia repairs with 24-hour discharge and cashless insurance.",
    url: "https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi",
  },
  alternates: {
    canonical: "https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi",
  },
  other: {
    "preload-image": "/images/hernia-surgeon-delhi-india.webp",
  },
};

const herniaFaqs = [
  {
    question:
      "How long do I stay in the hospital after laparoscopic hernia repair?",
    answer:
      "Most patients are discharged within 24 hours and resume light activity immediately after laparoscopic or robotic repair.",
  },
  {
    question: "Can a hernia heal on its own without surgery?",
    answer:
      "No. A hernia is a progressive defect in the muscle wall and requires surgical repair to prevent complications.",
  },
  {
    question:
      "Which hernia surgery method is better—open, laparoscopic or robotic?",
    answer:
      "Laparoscopic and robotic techniques offer smaller incisions, less pain, faster recovery and minimal scarring. Open surgery is reserved for very large or complex hernias.",
  },
  {
    question: "Is hernia surgery covered by insurance in India?",
    answer:
      "Yes. Most health insurance plans cover hernia surgery. Habilite Clinics supports cashless approvals and flexible EMI assistance.",
  },
  {
    question: "How long does it take to recover after hernia surgery?",
    answer:
      "Desk jobs resume in 7–10 days after minimally invasive repair, while physically demanding work may require 3–4 weeks of rest.",
  },
  {
    question: "Which diagnostic test is best for hernia detection?",
    answer:
      "Clinical examination is usually sufficient. Ultrasound, CT scan, or MRI are ordered for complex, recurrent, or abdominal wall hernias.",
  },
  {
    question: "What size or type of hernia typically requires surgery?",
    answer:
      "Any symptomatic, enlarging, or irreducible hernia should be repaired to avoid obstruction or strangulation of the intestine.",
  },
  {
    question: "Can I return to work quickly after hernia surgery?",
    answer:
      "Yes. Minimally invasive techniques enable return to light work within 1–2 weeks and to strenuous activity in 3–4 weeks, depending on the job.",
  },
];

const faqSchema = getFAQSchema({
  title: "Hernia Surgery FAQs",
  description:
    "Common questions answered by Dr. Kapil Agrawal related to hernia symptoms, surgery, insurance, and recovery timelines.",
  faqs: herniaFaqs,
});

const procedureSchema = getMedicalProcedureSchema({
  name: "Laparoscopic & Robotic Hernia Surgery",
  description:
    "Advanced hernia program by Dr. Kapil Agrawal covering inguinal, umbilical, femoral, hiatus, and complex incisional hernias with laparoscopic, robotic, and abdominal wall reconstruction techniques.",
  url: "/best-hernia-surgeon-in-delhi",
  procedureType: "Laparoscopic Hernia Repair",
  bodyLocation: "Abdominal Wall / Groin",
  followup:
    "Same-day discharge with structured physiotherapy, tele-support, and in-person review within 10 days.",
  preparation:
    "Pre-operative imaging, anaesthesia clearance, optimisation of comorbidities, and fasting guidelines.",
  howPerformed:
    "Hernia contents are reduced laparoscopically or robotically, followed by placement of high-quality mesh to reinforce the abdominal wall.",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Hernia Surgery", url: "/best-hernia-surgeon-in-delhi" },
]);

const serviceSchema = getServiceSchema({
  name: "Hernia Surgery - Laparoscopic & Robotic Hernia Repair",
  description:
    "Expert laparoscopic and robotic hernia surgery by Dr. Kapil Agrawal in Delhi, India. Advanced minimally invasive procedure for inguinal, umbilical, femoral, hiatus, and incisional hernia repairs with fast recovery and minimal scarring.",
  url: "/best-hernia-surgeon-in-delhi",
  serviceType: "Medical Procedure",
  category: "Laparoscopic Surgery",
  areaServed: ["Delhi", "NCR", "India"],
});

export default function BestHerniaSurgeonPage() {
  return (
    <>
      <div className="pt-20 pb-16">
        {/* LCP Optimization: Hero image with highest priority for mobile */}
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/hernia-surgeon-delhi-india.webp"
              alt="Best Hernia Surgeon in Delhi - Dr. Kapil Agrawal | Laparoscopic & Robotic Hernia Repair"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              priority
              fetchPriority="high"
              quality={75}
              loading="eager"
              decoding="async"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>

        <div className="container-custom mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">
              best-hernia-surgeon-delhi
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Hernia Surgeon in{" "}
              <span className="text-[#0891b2]">Delhi</span> - Dr. Kapil Agrawal
              
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              With more than twenty years of committed surgery experience, Dr.
              Kapil Agrawal is recognized as one of the leading and best Hernia
              Surgeon in Delhi, NCR. Dr. Kapil Agrawal offers the tailored and
              most advanced Laparoscopic and Robotic hernia repair techniques
              and ensures you get back to your life with minimal discomfort and
              maximum confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: "23+ Years Experience" },
                { icon: Users, text: "7000+ Hernia Repairs" },
                { icon: TrendingUp, text: "Laparoscopic & Robotic" },
                { icon: Clock, text: "24-Hour Discharge" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 bg-[#0891b2]/10 px-4 py-2 rounded-full"
                >
                  <item.icon className="text-[#0891b2] w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">
                    {item.text}
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
            <div className="mb-8">
              <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
                <Image
                  src="/images/best-hernia.webp"
                  alt="Best Hernia Repair Surgeon in Delhi Dr Kapil Agrawal" title="Dr Kapil Agrawal Best Hernia Surgeon in Delhi"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <div className="defer-section">
                <ConsultationForm
                  serviceName="Hernia Surgery"
                  serviceSlug="best-hernia-surgeon-in-delhi"
                />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Understanding Your Hernia: A Guide to Types, Symptoms, and
                Urgency
              </h2>
            </section>

            <section className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                What is a Hernia? Identifying the Bulge and Discomfort{" "}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                A hernia is a progressive medical condition that occurs when an
                internal organ or tissue bulges through a weak spot in the
                muscle or the layer covering the tissues.
              </p>

              <p>
                Hernia symptoms can differ based on the type, location, size,
                and severity of the condition. Some of the common symptoms to
                watch out are:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Visible Bulge",
                  "Pain and Discomfort",
                  "Nausea and Vomiting",
                  "Heaviness or Pressure Sensation",
                  "Sensations of Burning, Gurgling, or Aching",
                  "Heartburn or Chest Pain (Hiatal Hernia)",
                ].map((item) => (
                  <div key={item} className="flex items-start text-gray-700">
                    <CheckCircle2
                      className="text-[#0891b2] mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Different Types of Hernia We Treat
              </h2>

              <p className="text-gray-700">
                Dr. Kapil Agrawal provides expert care for a wide range of
                hernias, including both simple and complex conditions, using
                advanced surgical techniques for safe and effective treatment.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Inguinal Hernia",
                    desc: "An inguinal hernia occurs in the groin when abdominal tissue pushes through a weak spot in the abdominal wall. It is more common in men and may cause pain or discomfort during physical activity.",
                    link: "/best-inguinal-hernia-surgeon-in-delhi",
                  },
                  {
                    title: "Umbilical Hernia",
                    desc: "An umbilical hernia develops near the navel. While it is commonly seen in infants, it can also affect adults, especially those with obesity or repeated abdominal strain.",
                    link: "/best-umbilical-hernia-surgeon-in-delhi",
                  },
                  {
                    title: "Incisional Hernia",
                    desc: "An incisional hernia forms at the site of a previous surgical scar. These hernias may enlarge over time and often require specialized surgical management.",
                    link: "/best-incisional-hernia-surgeon-in-delhi",
                  },
                  {
                    title: "Hiatus Hernia",
                    desc: "A hiatus hernia occurs when part of the stomach moves upward into the chest through the diaphragm. It may lead to symptoms such as acid reflux, heartburn, or chest discomfort.",
                    link: "/best-hiatus-hernia-surgeon-in-delhi",
                  },
                  {
                    title: "Epigastric Hernia",
                    desc: "Epigastric hernia occurs between the umbilicus and the rib cage.",
                    link: "/best-epigastric-hernia-surgeon-in-delhi",
                  },
                  {
                    title: "Femoral Hernia",
                    desc: "A femoral hernia appears near the upper thigh and is more commonly seen in women. It can be difficult to detect and carries a higher risk of complications such as strangulation. Early specialist evaluation helps prevent emergency situations and ensures timely repair. Timely laparoscopic repair offers faster recovery and lowers recurrence risk.",
                    link: "/best-femoral-hernia-surgeon-in-delhi",
                    compact: true,
                  },
                  {
                    title: "Complex and Recurrent Hernias",
                    desc: "Complex hernias involve large defects, multiple hernias, or hernias that return after previous surgery. These cases require advanced evaluation and expert surgical planning.",
                    points: [
                      "Hernias larger than 10 cm",
                      "Loss of more than 20% of abdominal domain",
                      "Recurrent hernias after previous surgical repair",
                      "Medical conditions that delay healing, such as obesity, diabetes, smoking, or poor nutrition",
                    ],
                    note: "Management of complex hernias may involve intensive care support, specialized surgical techniques, and individualized treatment plans to ensure optimal recovery.",
                  },
                ].map((type) => (
                  <div
                    key={type.title}
                    className={`bg-gray-50 rounded-lg ${type.compact ? "p-4" : "p-5"} border-l-4 border-[#0891b2]`}
                  >
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {type.link ? (
                        <Link href={type.link} className="text-[#0891b2] hover:underline">
                          {type.title}
                        </Link>
                      ) : (
                        type.title
                      )}
                    </h3>

                    <p className="text-gray-700 text-sm sm:text-base">
                      {type.desc}
                    </p>

                    {type.points && (
                      <ul className="list-disc pl-5 mt-3 text-gray-700 text-sm sm:text-base space-y-1">
                        {type.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    )}

                    {type.note && (
                      <p className="mt-3 text-gray-700 text-sm sm:text-base">
                        {type.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Warning Signs That Require Immediate Specialist Consultation
              </h3>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 space-y-3">
                {[
                  "If your hernia bulge suddenly becomes very painful and hard",
                  "Inability to push it back due to trapping or strangulation — a serious condition",
                  "Sudden severe pain, nausea, vomiting, or fever",
                ].map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-start text-gray-800 text-sm sm:text-base"
                  >
                    <CheckCircle2
                      className="text-amber-600 mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>{symptom}</span>
                  </div>
                ))}

                <p className="mt-2  text-amber-800 text-sm sm:text-base">
                  If you experience any of these symptoms, seek medical help
                  immediately.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Advantages of Laparoscopic &amp; Robotic Hernia Repair
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Painless surgery with minimal blood loss",
                  "Very small incisions and excellent cosmetic results",
                  "Early mobilisation, faster discharge and return to work",
                  "High-quality mesh placed with precision, reducing recurrence",
                  "Better view of both groins, ideal for bilateral hernias",
                  "Suitable for diabetics, elderly and high BMI patients",
                ].map((advantage) => (
                  <div
                    key={advantage}
                    className="flex items-start text-gray-700 text-sm sm:text-base"
                  >
                    <CheckCircle2
                      className="text-[#0891b2] mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>{advantage}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Why Choose Dr. Kapil Agrawal: Delhi&apos;s Leading Expert in Hernia
                Surgery
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Dr. Kapil Agrawal stands out as a top choice for patients across
                Delhi NCR, not just for his surgical skill, but for his
                dedicated, patient-first approach.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Unmatched Credentials: MBBS, MS, MRCS (London) & 23+ Years
                    of Specialized Focus
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr. Agrawal&apos;s after his foundational training in India
                    (MBBS, MS), earned the prestigious MRCS from London, UK and
                    MMed from Singapore. These fellowships enhanced his
                    capabilities in the most current surgical techniques and
                    advancements in hernia treatment. He brings international
                    standards of care right to New Delhi.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    A Track Record of Excellence: 7,000+ Successful Surgeries &
                    High Patient Satisfaction
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr Agrawal has a huge experience of performing more than
                    7000 successful surgeries. He has encountered and healed
                    almost every type of hernia and is well known to provide
                    comprehensive range of laparoscopic and robotic surgeries.
                    His vast experience allows for precise diagnosis, tailored
                    surgical planning, and smooth recovery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Global Techniques, Local Care: Pioneering Minimally Invasive
                    Surgery in Delhi NCR
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr. Agrawal is a pioneer in bringing advanced minimally
                    invasive techniques to the region. His minimally invasive
                    techniques mean you benefit from less pain, smaller scars,
                    and a faster return home and to work. He always ensures you
                    receive personalized care that makes you feel understood and
                    supported.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Advanced Surgical Solutions: Tailored Techniques for Every
                Hernia
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Dr Kapil Agrawal offers a comprehensive portfolio of advanced
                surgical solutions. He always ensures that each patient receives
                a procedure meticulously tailored to their specific hernia type,
                size, location, and overall health. Some of the advanced
                techniques performed by Dr Kapil Agrawal are:
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Laparoscopic (Keyhole) Hernia Repair: The Gold Standard for
                    Minimal Recovery
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Laparoscopic Surgery still remains the gold standard for
                    simple and uncomplicated hernias.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    The technique involves making 3-4 tiny incisions (5-10mm)
                    through which a laparoscope (a tiny camera) and specialized
                    instruments are inserted.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    The surgeon views a magnified image on a monitor to repair
                    the hernia from behind the abdominal wall.
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900 mb-2">
                      Benefits:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "significantly less post-operative pain",
                        "minimal visible scarring",
                        "drastically reduced risk of infection",
                        "faster return to daily activities and work",
                      ].map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start text-gray-700 text-sm sm:text-base"
                        >
                          <CheckCircle2
                            className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                            size={16}
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Robotic-Assisted Surgery: Precision for Complex, Recurrent &
                    Large Abdominal Hernias
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Robotic surgery is the latest, most advanced and best
                    technology for the management of complex and recurrent
                    hernias.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    The surgeon operates from a console. He controls robotic
                    arms with unparalleled precision, 3D high-definition vision,
                    and enhanced dexterity.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    No benefits in terms of cosmesis and recovery,
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900 mb-2">
                      Benefits:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Ideal for delicate suturing in tight spaces",
                        "Better Mesh placement and abdominal wall reconstruction",
                        "Enhanced accuracy leading to better outcomes and low recurrence rates.",
                      ].map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start text-gray-700 text-sm sm:text-base"
                        >
                          <CheckCircle2
                            className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                            size={16}
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                The Science of Repair: A Guide to Modern Surgical Meshes
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Surgical Meshes have become an integral part for hernia repair.
                Modern meshes are designed to integrate with tissue to provide a
                strong, durable repair.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                They can vary by material (synthetic, biologic) & weight (light,
                mid, heavy).
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                We always select the mesh based on hernia location and patient
                factors to promote optimal tissue ingrowth while minimizing
                complications like chronic pain or stiffness. For detailed
                information on surgical meshes, you can read: Meshes in Hernia
                Repair
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Dr. Agrawal&apos;s Approach: How We Select the Perfect Procedure for
                You
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Our approach is patient-centric, not procedure-centric. The
                decision integrates your hernia&apos;s anatomy (from advanced
                imaging), your health profile (age, activity, comorbidities),
                and personal recovery goals. We then match you with the ideal
                technique—open, laparoscopic, or robotic—from our repertoire,
                ensuring the safest, most effective and tailored path to a
                lasting cure.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Selection of right technique and approach is of paramount
                importance for best outcomes of hernia repair. Dr Kapil Agrawal
                approach is always patient centric and not procedure centric. We
                recommend the procedure based on:
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-start text-gray-700 text-sm sm:text-base">
                  <CheckCircle2
                    className="text-[#0891b2] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong>Detailed Evaluation:</strong> Comprehensive history,
                    physical examination, and assessment of factors like
                    obesity, smoking, and diabetes.
                  </span>
                </div>
                <div className="flex items-start text-gray-700 text-sm sm:text-base">
                  <CheckCircle2
                    className="text-[#0891b2] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong>Advanced Imaging:</strong> Utilization of ultrasound
                    or CT scans to determine the exact size, location, and
                    contents of the hernia.
                  </span>
                </div>
                <div className="flex items-start text-gray-700 text-sm sm:text-base">
                  <CheckCircle2
                    className="text-[#0891b2] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong>Patient-Centric Discussion:</strong> Discussing all
                    suitable options (Open, Laparoscopic, Robotic), their pros
                    and cons, and involving the patient in the final decision
                    based on their lifestyle and recovery goals.
                  </span>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Specialized Care for Complex & Recurrent Abdominal Hernias
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                This is where the expertise of a best hernia specialist truly
                matters. With our dedicated protocols and advanced skills, we
                manage cases that are often deemed high-risk or inoperable
                elsewhere.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    When Hernias are Challenging: Defining Complex Ventral &
                    Incisional Cases
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-3">
                    A hernia is classified as &quot;complex&quot; in scenarios such as:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                    <li>
                      Large size (often &gt;10 cm wide or with significant loss
                      of domain).
                    </li>
                    <li>
                      Recurrent hernias that have come back after previous
                      repairs.
                    </li>
                    <li>
                      Incisional hernias from old surgical wounds, especially
                      after multiple surgeries.
                    </li>
                    <li>Presence of infection or compromised tissue.</li>
                    <li>
                      Hernias in patients with co-morbidities like morbid
                      obesity, COPD, or a history of abdominal surgery.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Our Protocol for Success: Advanced Imaging, Component
                    Separation & Expert Technique
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-3">
                    Our dedicated multi-disciplinary team, step-wise protocol:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">
                        Preoperative Optimization:
                      </p>
                      <p className="text-gray-700 text-sm sm:text-base">
                        We manage weight, blood sugar, and encourage smoking
                        cessation to ensure the patient is in the best possible
                        condition for surgery.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">
                        High-Resolution CT scan with 3D Reconstruction:
                      </p>
                      <p className="text-gray-700 text-sm sm:text-base">
                        We meticulously plan the surgery, map the muscle
                        anatomy, and measure the hernia defect and its contents.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">
                        Advanced Surgical Techniques:
                      </p>
                      <p className="text-gray-700 text-sm sm:text-base mb-2">
                        <strong>Component Separation (ACS/TAR):</strong> Dr
                        Kapil Agrawal and his team perform component separation
                        technique, where mobilization of lateral abdominal
                        muscles is done. This allows them to be brought back to
                        the midline without undue tension. This is crucial for
                        large defects.
                      </p>
                      <p className="text-gray-700 text-sm sm:text-base mb-2">
                        <strong>Reinforcement with Mesh:</strong> We employ high
                        quality meshes for reinforcement of defect for a durable
                        repair.
                      </p>
                      <p className="text-gray-700 text-sm sm:text-base">
                        <strong>Multidisciplinary Collaboration:</strong> Our
                        team of top nutritionists, pulmonologists, and
                        physiotherapists provide comprehensive care for best
                        outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Robotic Repair for complex abdominal wall hernias.
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr. Kapil Agrawal has a vast experience of dealing with
                    complex abdominal wall hernias. He along with his team
                    performs complex abdominal wall hernia repair using Robot
                    Assisted Laparoscopic Surgery. The 3D vision and wristed
                    instruments along with his expertise allows him to navigate
                    scarred anatomy with greater safety and precision.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Restoring Confidence: Patient Success Stories of Complex
                    Hernia Recovery
                  </h3>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                The Habilite Clinics Experience: Your Journey from Pain to
                Relief
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Step-by-Step: From Your First Consultation to Full Recovery
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Your journey begins with a detailed consultation and
                    creation of a personalized surgical plan. On surgery day,
                    our dedicated team ensures your complete comfort and safety.
                    After your surgery, we provide a structured recovery
                    blueprint, including diet, activity guidelines, and
                    physiotherapy.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    World-Class Facilities: Surgery at Premium Hospitals with
                    Advanced Technology
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    We perform the surgery at Delhi-NCR&apos;s premier hospitals. We
                    always ensure the highest global standards of safety,
                    hygiene, and nursing care. These hospitals are equipped with
                    the latest generation technology including advanced 3D/4K
                    laparoscopic system and the Robotic system.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Transparent Planning: Clear Cost Estimates, Insurance & EMI
                    Assistance
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    The cost of hernia surgery in Delhi can vary depending on
                    the type of hernia, the kind of surgery (open, laparoscopic,
                    or robotic), and the hospital and facilities.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Laparoscopic and robotic surgeries tend to cost more, but
                    they also offer faster healing, smaller scars, and less
                    pain.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Dr. Kapil Aggarwal&apos;s clinic offers clear pricing with
                    insurance support and cost-effective packages, so you know
                    exactly what you&apos;re paying for.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Our clinic partners also offer zero interest EMI options.
                    For more information, you can read the article, on exact
                    cost of hernia surgery in Delhi.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="defer-section">
              <CostCalculator serviceName="Hernia Surgery" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <div className="defer-section">
              <HerniaTestimonials />
            </div>
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
                      Most patients can resume normal activities within 1-2
                      weeks after laparoscopic or robotic repair.
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
                      Structured follow-up visits, physiotherapy guidance, and
                      tele-support help ensure complete recovery.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className="defer-section">
              <RecoveryTimeline />
            </div>
          </div>
        </div>

        <div className="container-custom space-y-8 mt-12">
          <div className="defer-section">
            <PostOperativeCare />
          </div>
          <div className="defer-section">
            <WhatsAppExpertChat serviceName="Hernia Surgery" />
          </div>
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="defer-section">
              <HerniaFAQ />
            </div>
            <div className="defer-section">
              <RelatedBlogs
              serviceName="Hernia"
              serviceKeywords={[
                "hernia",
                "inguinal hernia",
                "umbilical hernia",
                "hiatal hernia",
                "hiatus hernia",
                "hernia repair",
                "hernia surgery",
              ]}
              maxPosts={3}
              />
            </div>
          </div>
        </div>
      </div>
      {/* StructuredData moved to bottom to prevent blocking render and improve LCP */}
      <StructuredData data={serviceSchema} />
      <StructuredData data={procedureSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />
    </>
  );
}
