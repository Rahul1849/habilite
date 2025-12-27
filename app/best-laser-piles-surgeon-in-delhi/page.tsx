import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  CheckCircle2,
  Clock,
  User,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import CallUsButton from "@/components/lead-generation/CallUsButton";
import { blogPosts } from "@/data/blog";
import StructuredData from "@/components/seo/StructuredData";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getMedicalProcedureSchema,
  getServiceSchema,
} from "@/lib/seo/schemaBuilders";

// Dynamically import below-the-fold components to improve initial page load and LCP
// Using ssr: false for non-critical components to reduce TBT and improve mobile performance
const ConsultationForm = dynamic(
  () => import("@/components/forms/ConsultationForm"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-2xl" />
    ),
  }
);

const CostCalculator = dynamic(
  () => import("@/components/lead-generation/CostCalculator"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[300px] animate-pulse bg-gray-50 rounded-xl" />
    ),
  }
);

const PostOperativeCare = dynamic(
  () => import("@/components/lead-generation/PostOperativeCare"),
  {
    ssr: false,
    loading: () => <div className="min-h-[200px]" />,
  }
);

const WhatsAppExpertChat = dynamic(
  () => import("@/components/lead-generation/WhatsAppExpertChat"),
  {
    ssr: false,
  }
);

const PilesFAQ = dynamic(
  () => import("@/app/laser-surgery/hemorrhoids-piles/PilesFAQ"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-xl" />
    ),
  }
);

const PilesTestimonials = dynamic(
  () => import("@/app/laser-surgery/hemorrhoids-piles/PilesTestimonials"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[300px] animate-pulse bg-gray-50 rounded-xl" />
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
    loading: () => <div className="min-h-[200px]" />,
  }
);

export const metadata: Metadata = {
  title:
    "Best Piles Surgeon in Delhi | Advanced Laser Treatment for Piles | Dr. Kapil Agrawal",
  description:
    "Dr. Kapil Agrawal is the best piles surgeon in Delhi. With his advanced techniques including laser surgeries and golden experience of 23 years, he is considered as one of the best doctors for piles in Delhi. Expert in laser surgery, Stapler, and DGHAL procedures. USFDA approved laser, no cuts, same-day discharge. Book consultation now.",
  keywords: [
    "best piles surgeon delhi",
    "laser piles treatment delhi",
    "piles surgery delhi",
    "hemorrhoids treatment delhi",
    "best piles doctor delhi",
    "laser piles surgery delhi",
    "stapler piles surgery delhi",
    "DGHAL piles surgery delhi",
    "Dr. Kapil Agrawal piles",
    "piles specialist delhi",
  ],
  openGraph: {
    title:
      "Best Surgeon for Piles in Delhi - Dr. Kapil Agrawal | Laser Piles Treatment",
    description:
      "Expert laser piles treatment by Dr. Kapil Agrawal in Delhi. USFDA approved laser, no cuts, same-day discharge. Book consultation.",
    url: "https://www.habiliteclinics.com/best-laser-piles-surgeon-in-delhi",
    images: [
      {
        url: "https://www.habiliteclinics.com/images/piles-surgeon-delhi-india.webp",
        width: 1200,
        height: 630,
        alt: "Best Surgeon for Piles in Delhi - Dr. Kapil Agrawal",
      },
    ],
  },
  alternates: {
    canonical:
      "https://www.habiliteclinics.com/best-laser-piles-surgeon-in-delhi",
  },
};

const pilesFaqs = [
  {
    question: "Is laser surgery for piles painful?",
    answer:
      "No, laser surgery is near-painless and minimally invasive. Little or no discomfort is experienced by the majority of patients, and they do not require strong painkillers for the same.",
  },
  {
    question: "How long does recovery take after laser surgery?",
    answer:
      "Recovery is rapid and hassle-free. The majority of individuals are back to normal activities or at work within 3 to 5 days post-procedure.",
  },
  {
    question: "Will piles recur after laser treatment?",
    answer:
      "Recurrence is minimal after laser surgery in expert hands. High-quality laser machines, right candidate and healthy life style significantly reduces recurrence rates.",
  },
  {
    question: "Can piles be treated by medicines alone?",
    answer:
      "No, medicines control symptoms temporarily. They may delay the ailment, but surgery is needed for long-term or permanent relief.",
  },
  {
    question: "What is the ideal treatment for piles?",
    answer:
      "Treatment varies with the stage of piles. Mild stages can be controlled with medicines, but Grades II & III are best treated with laser surgery. Grade IV or complicated cases would require a stapler or open surgery.",
  },
  {
    question: "What are the effects of not having piles treated?",
    answer:
      "If left untreated, piles may lead to bleeding, anaemia or conditions like thrombosed or strangulated piles (blood clot), which can be very painful and may necessitate emergency surgery.",
  },
  {
    question: "Is laser treatment of piles safe?",
    answer:
      "Yes, laser treatment is very safe if done by an expert with USFDA-approved devices. It has lower side effects and quicker recovery compared to normal surgery.",
  },
  {
    question: "What is the advantage of early surgical treatment for piles?",
    answer:
      "Early surgery, particularly in Grade II or III cases, can be treated with painless laser techniques. Deferred treatment could involve open surgery with prolonged recovery.",
  },
];

const faqSchema = getFAQSchema({
  title: "Laser Piles Treatment FAQs",
  description:
    "Details on suitability, recurrence, safety, and cost for laser piles surgery by Dr. Kapil Agrawal.",
  faqs: pilesFaqs,
});

const procedureSchema = getMedicalProcedureSchema({
  name: "Laser Piles Treatment",
  description:
    "USFDA-approved laser, stapler, and DGHAL procedures for hemorrhoids performed by Dr. Kapil Agrawal with same-day discharge and minimal recurrence.",
  url: "/best-laser-piles-surgeon-in-delhi",
  procedureType: "Laser Hemorrhoidectomy",
  bodyLocation: "Anal Canal / Rectum",
  followup:
    "Structured follow-up calls, fibre-rich diet plans, and pelvic floor guidance for 4 weeks.",
  preparation:
    "Preoperative consultation, proctoscopy, blood work, and bowel preparation.",
  howPerformed:
    "Laser fibre is inserted into the hemorrhoidal tissue to shrink it from within, preserving sphincter function and allowing same-day discharge.",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Treatments", url: "/treatments" },
  { name: "Laser Piles Treatment", url: "/best-laser-piles-surgeon-in-delhi" },
]);

const serviceSchema = getServiceSchema({
  name: "Laser Piles Treatment - Hemorrhoid Surgery",
  description:
    "Expert laser piles treatment by Dr. Kapil Agrawal in Delhi, India. USFDA-approved laser, stapler, and DGHAL procedures for hemorrhoids with same-day discharge and minimal recurrence.",
  url: "/best-laser-piles-surgeon-in-delhi",
  serviceType: "Medical Procedure",
  category: "Laser Surgery",
  areaServed: ["Delhi", "NCR", "India"],
});

export default function BestLaserPilesSurgeonPage() {
  const pilesBlogs = blogPosts
    .filter(
      (post) =>
        post.category.toLowerCase().includes("piles") ||
        post.category.toLowerCase().includes("hemorrhoid") ||
        post.tags.some(
          (tag) =>
            tag.toLowerCase().includes("piles") ||
            tag.toLowerCase().includes("hemorrhoid")
        )
    )
    .slice(0, 3);

  return (
    <>
      <div className="pt-20 pb-16">
        {/* LCP Optimization: Hero image with highest priority for mobile */}
        <div className="container-custom mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/piles-surgeon-delhi-india.webp"
              alt="Best Surgeon for Piles in Delhi - Dr. Kapil Agrawal | Expert Laser Piles Treatment | 23 Years Experience"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              priority
              fetchPriority="high"
              quality={85}
              loading="eager"
              decoding="sync"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>

        <div className="container-custom mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">
              best-piles-surgeon-delhi
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Piles Surgeon in{" "}
              <span className="text-[#0891b2]">Delhi</span> | Advanced Laser
              Treatment for Piles
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Dr. Kapil Agrawal is the best piles surgeon in Delhi. With his
              advanced techniques including laser surgeries and golden
              experience of 23 years, he is considered as one of the best
              doctors for piles in Delhi. He holds expertise in efficacious
              performing the latest and effective treatment for piles, including
              laser surgery, Stapler, and DGHAL surgeries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: "23+ Years Experience" },
                { icon: Users, text: "5000+ Successful Procedures" },
                { icon: TrendingUp, text: "USFDA Approved Laser" },
                { icon: Clock, text: "Same-Day Discharge" },
              ].map((highlight) => (
                <div
                  key={highlight.text}
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
            <div className="mb-8">
              <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
                <Image
                  src="/images/best-piles-surgeon-in-delhi.webp"
                  alt="Best Piles Surgeon in Delhi Dr Kapil Agrawal" title="Best Surgeon for Piles in Delhi Dr Kapil Agrawal"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <div className="defer-section">
                <ConsultationForm
                  serviceName="Laser Piles Treatment"
                  serviceSlug="best-laser-piles-surgeon-in-delhi"
                />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Best Pile Treatment in Delhi
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal is the best piles surgeon in Delhi. With his
                advanced techniques including laser surgeries and golden
                experience of 23 years, he is considered as one of the best
                doctors for piles in Delhi. He holds expertise in efficacious
                performing the latest and effective treatment for piles,
                including laser surgery, Stapler, and DGHAL surgeries.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Backed by an expert team of medical professionals and
                nutritionists, Dr. Kapil Agrawal is devoted to offering the best
                patient care and treatment to ensure favourable patient
                outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Piles (Hemorrhoids) – A Common Yet Treatable Condition
              </h2>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                What Are Piles and Why They Occur
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Piles, or hemorrhoids, are enlarged veins in the anus or lower
                rectum. It is a very common medical condition that may result in
                pain, itching, bleeding, and discomfort while passing stools. It
                is a gradually progressive condition that can be treated easily.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Types of Piles – Internal, External, Thrombosed & Prolapsed
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                Types of Piles: Internal vs External
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">
                    Internal Piles
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    They are located within anal canal. Internal piles are
                    normally painless but can bleed. They are graded into four
                    grades depending on the degree of prolapse.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">
                    External Piles
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    These are just outside the anal canal and are painful. Their
                    treatment differs significantly from internal piles due to
                    their external location.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">
                    Thrombosed Piles
                  </h4>
                  <p className="text-gray-700 text-sm">
                    When a blood clot forms in an external hemorrhoid, causing
                    severe pain and a hard lump.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                  Grading of Internal Piles (Grade I–IV)
                </h4>
                <p className="text-gray-700 mb-3">
                  Piles are graded according to how bad they are:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Grade I: Early non visible piles but sometimes they bleed.",
                    "Grade II: Piles emerge as small lump while passing stools, but go back in naturally once stools are passed.",
                    "Grade III: Piles protrude during a bowel movement and have to be pushed back in with fingers after passing stools.",
                    "Grade IV: Piles always protrude out and cannot be pushed in. This is the advanced stage of Internal Piles.",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2
                        className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Common Symptoms of Piles You Should Not Ignore
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As per Dr. Kapil Agrawal, the best Piles doctor in Delhi
                following are the visible symptoms of piles-
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span>
                    Bright red, Painless bleeding is frequently the first sign
                    people notice with piles.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span>
                    As piles progress further along, you can feel a visible bump
                    which can sometimes hurt.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span>You can feel irritation or itching around anus.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span>Slight mucus discharge may be present.</span>
                </li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Why Home Remedies Fall Short
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Home remedies can provide temporary relief for mild symptoms;
                they don&apos;t address the root cause of piles.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                They cannot shrink or remove the swollen blood vessels
                completely. This means the problem is likely to return, often
                becoming worse over time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                When to Consult a Piles Specialist Doctor in Delhi
              </h2>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Early vs Advanced Piles – Knowing the Right Time for Treatment
              </h3>
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Early-Stage Piles (Grade 1 & 2)
                  </h4>
                  <p className="text-gray-700 text-sm">
                    You might notice occasional bleeding or mild discomfort. At
                    this stage, non-surgical treatments can be very effective.
                    Don&apos;t wait until the problem worsen. Early consultation
                    can save you from more invasive procedures later.
                  </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Advanced Stage Piles (Grade 3 & 4)
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Symptoms become more frequent and severe. At this stage,
                    surgical treatment for piles is usually recommended for a
                    permanent solution.
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Signs You Need Surgical Treatment for Piles
              </h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "Frequent or heavy bleeding that doesn't stop",
                  "Severe pain that interferes with daily activities",
                  "A prolapsed hemorrhoid that cannot be pushed back inside",
                  "Symptoms that persist despite dietary changes and medications",
                  "Signs of anemia (fatigue, weakness) due to blood loss",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Why Consulting an Experienced Piles Doctor in Delhi Matters
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Piles treatment isn&apos;t &quot;one size fits all.&quot; An
                experienced piles specialist doctor in Delhi can:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "Accurately diagnose your specific condition",
                  "Rule out other serious conditions like colorectal cancer (which can have similar symptoms)",
                  "Recommend the most appropriate treatment based on your unique needs",
                  "Perform delicate procedures with precision and care",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Meet the Best Piles Doctor in Delhi: Dr. Kapil Agrawal
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Agrawal, leading piles surgeon in Delhi, is well known for
                his advanced, compassionate and effective piles treatment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr Kapil Agrawal offers customized and tailored treatment for
                piles depending on the grade, stage and symptoms.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Experience & Expertise in Laser Proctology
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal brings specialized expertise for piles
                treatment particularly in minimally invasive laser treatments.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    <strong>Focused Advanced Training:</strong> Dr. Agrawal has
                    pursued dedicated training and certifications in Laser
                    Proctology—the use of precise laser energy to treat
                    anorectal conditions like piles, fissures, and fistulas.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    <strong>Proven Track Record:</strong> He has successfully
                    performed thousands of laser procedures for piles. His
                    extensive hands-on experience means he is adept at handling
                    the nuances of each unique case.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    <strong>Master of Modern Techniques:</strong> Beyond lasers,
                    Dr. Agrawal is highly skilled in other advanced techniques
                    like Stapler Hemorrhoidopexy and Doppler-Guided HAL
                    (DG-HAL).
                  </span>
                </li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Specialized Treatment for Complex & Recurrent Piles
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Agrawal conducts a thorough re-evaluation to identify the
                underlying cause and then crafts a robust, definitive solution.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                Expertise in Complex and Recurrent Piles: He specializes in
                managing complicated piles cases, such as:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "Large, prolapsed Grade IV hemorrhoids",
                  "Acutely thrombosed (clotted) piles causing severe pain",
                  "Piles with co-existing conditions like anal fissures or fistulas",
                  "Cases with significant bleeding raising concerns about anemia",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Patient-Centric Approach & Ethical Care
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    Dr. Agrawal explains your condition, all possible treatment
                    options and his recommended plan in clear, simple language.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    Dr. Agrawal follows strict ethical guidelines. He guides you
                    the best customized treatment plan.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    You can trust him to provide honest advice, clear options,
                    and compassionate care from start to finish.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Advanced Piles Treatment in Delhi at Habilite Clinics:
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We offer personalized treatment plans using the latest medical
                technology.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Non-Surgical Piles Treatment Options (For Early Stages)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These options work best for early-stage piles.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "Diet and lifestyle guidance",
                  "Medications",
                  "Rubber band ligation & Sclerotherapy (in few, selected cases)",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Surgical Treatment for Piles – When Surgery Is Required
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For advanced or recurrent piles, surgery gives permanent relief.
                Modern techniques make surgery safe and comfortable. These
                include laser procedures, Stapler surgery and DGHAL treatment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Laser Treatment for Piles – Safe, Painless & Effective:
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Laser treatment has become the gold standard treatment in the
                management of piles. However, laser surgery is not recommended
                for every patient. Laser surgery is not effective for very
                advanced stage of piles.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                What Is Laser Surgery for Piles?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Laser Surgery uses a highly focused, precise beam of light
                energy. Dr. Kapil Agrawal gently targets this beam into the
                piles tissue without making any external cuts or incisions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                Here&apos;s how it works in a few clear steps:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    <strong>Precise Targeting:</strong> This means there is no
                    cutting of the sensitive external skin around the anus.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    <strong>Sealing & Shrinking:</strong> The laser energy
                    performs two key actions simultaneously:
                  </span>
                </li>
                <li className="flex items-start ml-6">
                  <span className="text-gray-700">
                    • It seals the tiny blood vessels feeding the piles, which
                    immediately reduces bleeding.
                  </span>
                </li>
                <li className="flex items-start ml-6">
                  <span className="text-gray-700">
                    • It causes the swollen tissue to shrink and gradually be
                    absorbed by the body over the following days and weeks.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    <strong>Minimal Disruption:</strong> Because the laser is so
                    precise, it leaves the surrounding healthy tissues
                    untouched. This is the core reason why laser operation for
                    piles leads to so much less pain and faster healing.
                  </span>
                </li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Laser Operation for Piles vs Conventional Surgery
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#0891b2]/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                        Aspect
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                        Laser Surgery
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                        Traditional Surgery
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        aspect: "Pain",
                        laser: "Minimal discomfort",
                        traditional: "Often significant pain",
                      },
                      {
                        aspect: "Cuts/Stitches",
                        laser: "None required",
                        traditional: "Requires cuts and stitches",
                      },
                      {
                        aspect: "Bleeding",
                        laser: "Almost none",
                        traditional: "Can be significant",
                      },
                      {
                        aspect: "Recovery Time",
                        laser: "1-2 days",
                        traditional: "2-3 weeks",
                      },
                      {
                        aspect: "Return to Work",
                        laser: "Next day",
                        traditional: "After 1-2 weeks",
                      },
                      {
                        aspect: "Risk of Infection",
                        laser: "Very low",
                        traditional: "Higher",
                      },
                      {
                        aspect: "Hospital Stay",
                        laser: "Day care (go home same day)",
                        traditional: "Often requires 1-3 day stay",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                          {row.aspect}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          {row.laser}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          {row.traditional}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Benefits of Laser Treatment for Piles:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some of the major benefits of laser treatment include:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "Minimal discomfort and pain",
                  "No need for stitches or bandages",
                  "Fast recovery—most individuals resume work within 3–4 days",
                  "Low infection risk",
                  "Nearly no bleeding",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Who Is the Right Candidate for Laser Piles Surgery?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are likely an excellent candidate for laser piles surgery if
                you have:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span>
                    Laser is exceptionally effective for Grade II or III
                    internal hemorhhoids.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span>
                    If your primary symptom is recurrent bleeding, laser
                    treatment excels at sealing the bleeding vessels.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span>
                    Individuals with a low pain threshold or fear of painful
                    surgery benefit greatly from the minimal discomfort
                    associated with laser procedures.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Why Laser Piles Treatment Is the Best Piles Treatment in Delhi
              </h2>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    <strong>Minimal Pain, No Cuts & Faster Recovery:</strong>{" "}
                    Laser surgery results in faster recovery and most patients
                    walk out comfortably the same day.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    <strong>
                      Day-Care Procedure with Quick Return to Work:
                    </strong>{" "}
                    You can resume daily activities within a few days.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    <strong>
                      Lower Risk of Bleeding, Infection & Recurrence:
                    </strong>{" "}
                    Laser precision ensures safer outcomes and has lowest
                    incidence of infection.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Stapler Surgery for Piles (STARR): Advanced Treatment for
                Prolapsed Hemorrhoids:
              </h2>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Indications and Technique
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stapler surgery is applied to Grade IV piles. This technique
                uses a special instrument to cut away excess tissue and restores
                normal anatomy.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Advantages of Stapler Surgery for Piles
              </h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "No external cuts or dressings",
                  "Pain-free recovery",
                  "Faster return to daily activities",
                  "Low risk of recurrence",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                DG-HAL (Doppler-Guided Hemorrhoid Artery Ligation): Minimally
                Invasive LDGHAL Surgery (Doppler-Guided Hemorrhoidal Artery
                Ligation)
              </h2>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Indications and Procedure
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                DGHAL is a less invasive procedure that shrinks the piles by
                reducing the blood supply to them. DGHAL is carried out under
                ultrasound guidance. The procedure involves ligation of bleeding
                arteries and repositioning of prolapsed piles tissue.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Outcomes and Recovery
              </h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "Latest, safe, and minimally invasive",
                  "Perfect for bleeding or recurrent piles",
                  "Sooner recovery and minimal discomfort post-operative",
                  "Least chance of recurrence",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Traditional Open Surgery: Reserved for Specific, Complex Cases
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr Agrawal performs conventional open surgery for highly
                prolapsed, infected piles. This procedure can be quite painful
                and associated with slow recovery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The procedure involves cutting the prolapsed piles and suturing
                them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                The Technology Advantage: Why Laser & Stapler Surgery Are
                Game-Changers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our advanced laser systems and surgical equipment allow us to
                perform procedures with unprecedented precision, safety, and
                comfort.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This technological edge translates to real benefits in form of:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "Shorter procedure times",
                  "Better outcomes",
                  "Faster recovery",
                  "Greater overall satisfaction with your treatment experience.",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Cost of Piles Treatment in Delhi:
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We truly understand that cost significantly matters when you are
                seeking medical treatment. At Habilite Clinics, we offer
                transparent pricing with no hidden charges.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Cost of Laser Surgery for Piles in Delhi
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The cost of laser surgery for piles in Delhi varies based on the
                complexity of your condition and the type of laser procedure
                involved. We provide laser treatment at highly competitive
                prices without compromising quality.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Factors Affecting the Cost of Piles Treatment
              </h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "Type and grade of hemorrhoids",
                  "Specific treatment method required",
                  "Any additional medical conditions that need to be considered",
                  "Type of hospital",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Insurance, Cashless & EMI Options
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We work with every cashless insurance provider and offer
                cashless treatment facilities at best, state of the art
                hospitals.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide convenient EMI plans to make quality treatment
                accessible to everyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                What to Expect – Your Piles Treatment Journey
              </h2>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Consultation & Diagnosis
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your journey begins with a confidential consultation. Dr Agrawal
                will:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "Listen carefully to your symptoms and concerns",
                  "Perform a gentle examination",
                  "Explain your diagnosis clearly",
                  "Discuss all treatment options and recommend what's best for you",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Laser Piles Surgery Procedure
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If surgery is recommended:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    <strong>Preparation:</strong> Simple instructions to follow
                    before the procedure
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    <strong>Procedure Day:</strong> Quick admission, same day
                    procedure and recovery in comfortable facility
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    <strong>Post-Procedure:</strong> You can go home within 24
                    hours with clear aftercare instructions
                  </span>
                </li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Recovery, Diet & Lifestyle After Treatment
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide comprehensive guidance for your recovery:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "Our team of dedicated dieticians with recommend customized diets to prevent constipation and promote healing",
                  "Our team will guide you about return to normal life for a smooth recovery",
                  "We will provide free follow-up appointments to monitor your progress",
                  "We will provide long-term lifestyle tips to prevent recurrence",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2
                      className="text-[#0891b2] mr-2 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Why Patients Choose Habilite Clinics for Piles Treatment in
                Delhi
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal is one of the best laser Piles Surgeon in
                Delhi and offers top-notch treatment for piles in Delhi.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Advanced Laser Technology
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We use state-of-the-art laser systems and ensure the highest
                standards of safety and effectiveness.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                High Success Rates & Patient Satisfaction
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr Kapil Agrawal has performed thousands of successful laser
                surgeries for piles and patients have returned to a comfortable,
                piles-free life.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Team of Expert Dieticians
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal has a team of skilled dietitians providing
                round-the-clock care and support.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 mt-6">
                Complete Range of Minimally Invasive Procedures:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr Kapil Agrawal provides the entire range of modern procedures
                like laser surgery, stapler surgery, and DGHAL. We recommend and
                perform the right procedure tailored to your specific diagnosis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Real Patient Stories: Journeys to a Piles-Free Life at Habilite
                Clinics
              </h2>
            </section>

            <div className="max-w-5xl mx-auto">
              <div className="defer-section">
                <CostCalculator serviceName="Laser Piles Treatment" />
              </div>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <div className="defer-section">
                <PilesTestimonials />
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
                        Most patients can resume normal activities within 2-3
                        days after laser piles treatment, with minimal
                        discomfort. Patients are typically discharged within 24
                        hours.
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
                        Regular follow-up appointments ensure optimal recovery
                        and address any concerns. Dr. Kapil Agrawal provides
                        comprehensive post-operative care.
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
        </div>

        <div className="container-custom space-y-8 mt-12">
          <div className="defer-section">
            <PostOperativeCare />
          </div>
          <div className="defer-section">
            <WhatsAppExpertChat serviceName="Laser Piles Treatment" />
          </div>
        </div>

        <div className="container-custom space-y-12 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="defer-section">
              <PilesFAQ />
            </div>
            {pilesBlogs.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <TrendingUp className="text-[#0891b2] mr-3" size={32} />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Latest Piles Blogs
                    </h2>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                      Expert advice on piles treatment, recovery, and laser
                      surgery options
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pilesBlogs.map((post) => (
                    <Link
                      key={post.id}
                      href={`/post/${post.slug}`}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                          quality={75}
                        />
                      </div>
                      <div className="p-5">
                        <div className="text-xs text-[#0891b2] font-semibold mb-2">
                          {post.category}
                        </div>
                        <h3 className="text-base font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#0891b2] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-3 line-clamp-2 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>
                            {new Date(post.publishedDate).toLocaleDateString(
                              "en-IN",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                          <span>By {post.author}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
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
