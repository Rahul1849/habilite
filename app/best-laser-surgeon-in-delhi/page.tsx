import { Metadata } from "next";
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
import StructuredData from "@/components/seo/StructuredData";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getMedicalProcedureSchema,
  getServiceSchema,
} from "@/lib/seo/schemaBuilders";

// Dynamically import below-the-fold components to improve initial page load and LCP
const ConsultationForm = dynamic(() => import("@/components/forms/ConsultationForm"), {
  ssr: false,
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-2xl" />,
});

const CostCalculator = dynamic(() => import("@/components/lead-generation/CostCalculator"), {
  ssr: false,
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-50 rounded-xl" />,
});

const PostOperativeCare = dynamic(() => import("@/components/lead-generation/PostOperativeCare"), {
  ssr: false,
  loading: () => <div className="min-h-[200px]" />,
});

const WhatsAppExpertChat = dynamic(() => import("@/components/lead-generation/WhatsAppExpertChat"), {
  ssr: false,
});

const RecoveryTimeline = dynamic(() => import("@/components/services/RecoveryTimeline").then(mod => ({ default: mod.RecoveryTimeline })), {
  ssr: false,
  loading: () => <div className="min-h-[200px]" />,
});

const LaserSurgeryFAQ = dynamic(() => import("./LaserSurgeryFAQ"), {
  ssr: false,
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-xl" />,
});

export const metadata: Metadata = {
  title:
    "Best Laser Surgeon in Delhi - Dr. Kapil Agrawal | Advanced Laser Surgery | 23+ Years Experience",
  description:
    "Dr. Kapil Agrawal is the best laser surgeon in Delhi with 23+ years of experience and 7000+ successful laser surgeries. Expert in laser piles treatment, anal fissure, anal fistula, pilonidal sinus, and circumcision. USFDA approved laser, painless procedures, same-day discharge.",
  keywords: [
    "best laser surgeon delhi",
    "laser surgery delhi",
    "laser piles treatment delhi",
    "laser anal fissure treatment",
    "laser fistula surgery delhi",
    "pilonidal sinus laser treatment",
    "laser circumcision delhi",
    "Dr Kapil Agrawal laser surgeon",
  ],
  openGraph: {
    title: "Best Laser Surgeon in Delhi - Dr. Kapil Agrawal",
    description:
      "Internationally trained laser surgeon performing advanced laser procedures with USFDA approved technology, minimal pain, and fast recovery.",
    url: "https://www.habiliteclinics.com/best-laser-surgeon-in-delhi",
  },
  alternates: {
    canonical: "https://www.habiliteclinics.com/best-laser-surgeon-in-delhi",
  },
};

const laserSurgeryFaqs = [
  {
    question: "What is laser surgery?",
    answer:
      "Laser surgery is a minimally invasive procedure that uses focused laser energy to treat various conditions. It offers precision, minimal tissue damage, reduced pain, faster recovery, and minimal scarring compared to traditional surgery.",
  },
  {
    question: "Is laser surgery painful?",
    answer:
      "Laser surgery is near-painless and minimally invasive. Most patients experience little to no discomfort and do not require strong painkillers. The procedure is performed under anesthesia for maximum comfort.",
  },
  {
    question: "What conditions can be treated with laser surgery?",
    answer:
      "Dr. Kapil Agrawal performs laser surgery for piles (hemorrhoids), anal fissure, anal fistula, pilonidal sinus, lipoma, and circumcision. Each procedure uses advanced USFDA-approved laser technology for optimal results.",
  },
  {
    question: "How long does recovery take after laser surgery?",
    answer:
      "Recovery is rapid and hassle-free. Most patients can return to normal activities within 3-5 days after laser surgery. Same-day discharge is common for most laser procedures, allowing patients to recover in the comfort of their home.",
  },
  {
    question: "What are the advantages of laser surgery over traditional surgery?",
    answer:
      "Laser surgery offers smaller incisions, minimal bleeding, reduced pain, faster recovery, minimal scarring, lower risk of infection, same-day discharge, and quicker return to normal activities compared to traditional open surgery.",
  },
  {
    question: "Is laser surgery safe?",
    answer:
      "Yes, laser surgery is very safe when performed by an experienced surgeon using USFDA-approved laser devices. Dr. Kapil Agrawal uses world-class, highly advanced 1470 nm Laser Machines for the best and safest results.",
  },
  {
    question: "Does insurance cover laser surgery?",
    answer:
      "Most major health insurance providers cover laser surgery procedures. Dr. Kapil Agrawal's team helps patients avail cashless treatment facilities and coordinates with insurers for smooth pre-authorization and claim processing.",
  },
  {
    question: "What is the cost of laser surgery in Delhi?",
    answer:
      "The cost of laser surgery varies depending on the type of procedure, complexity, and hospital facilities. Dr. Kapil Agrawal offers transparent pricing with fixed packages. Cashless insurance and EMI options are available at Habilite Clinics.",
  },
];

const serviceSchema = getServiceSchema({
  name: "Laser Surgery - Advanced Laser Procedures",
  description:
    "Expert laser surgery by Dr. Kapil Agrawal in Delhi, India. Advanced laser treatments for piles, anal fissure, anal fistula, pilonidal sinus, and circumcision using USFDA-approved technology with minimal pain and fast recovery.",
  url: "/best-laser-surgeon-in-delhi",
  serviceType: "Medical Procedure",
  category: "Laser Surgery",
  areaServed: ["Delhi", "NCR", "India"],
});

const medicalProcedureSchema = getMedicalProcedureSchema({
  name: "Laser Surgery",
  description:
    "Advanced laser surgery procedures using USFDA-approved technology for minimally invasive treatment of various conditions with minimal pain and fast recovery.",
  url: "/best-laser-surgeon-in-delhi",
  procedureType: "Laser Surgery",
  bodyLocation: "Anorectal Region / Various",
  preparation: "Pre-operative consultation, diagnostic tests, and anesthesia clearance",
  followup: "Post-operative care, diet instructions, and follow-up consultations",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Laser Surgery", url: "/best-laser-surgeon-in-delhi" },
]);

const faqSchema = getFAQSchema({
  title: "Laser Surgery FAQs",
  description:
    "Common questions answered by Dr. Kapil Agrawal related to laser surgery, procedures, recovery, safety, and costs.",
  faqs: laserSurgeryFaqs,
});

export default function BestLaserSurgeonPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={medicalProcedureSchema} />
      <StructuredData data={faqSchema} />
      <div className="pt-20 pb-16">
        <div className="container-custom mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">
              best-laser-surgeon-delhi
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Laser Surgeon in{" "}
              <span className="text-[#0891b2]">Delhi</span> – Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Dr. Kapil Agrawal is a credible and one of the best Laser and Laparoscopic surgeons in Delhi. He has an overall experience of more than 23 years and has been trained at some of the best and advanced laparoscopic centres in India, the UK, and Singapore. He has a golden track record of performing more than 7,000 minimally invasive surgeries including advanced laser procedures with incredible benefits.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: "23+ Years Experience" },
                { icon: Users, text: "7000+ Successful Surgeries" },
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
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <div className="defer-section">
                <ConsultationForm
                  serviceName="Laser Surgery"
                  serviceSlug="best-laser-surgeon-in-delhi"
                />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* About Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Dr. Kapil Agrawal - Best Laser Surgeon in Delhi
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Kapil Agrawal is a credible and one of the best Laser and Laparoscopic surgeons in Delhi. He has an overall experience of more than 23 years and has been trained at some of the best and advanced laparoscopic centres in India, the UK, and Singapore. He has a golden track record of performing more than 7,000 minimally invasive surgeries including advanced laser procedures with incredible benefits.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  He holds specializations in laser surgery for performing complicated anorectal, gastrointestinal, and other procedures with high precision, minimal recovery time and reduced risks for complications. He is currently serving some of the most prominent hospitals in Delhi NCR. He is known to perform complicated surgeries precisely, deliver personalized care, and offer the best post-surgery care for smooth recovery.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Kapil Agrawal uses world-class quality, highly advanced, USFDA approved 1470 nm Laser Machines for the best results. He offers extreme confidentiality, strict adherence to international guidelines, and personalized care with direct doctor-patient relationship.
                </p>
              </div>
            </section>

            {/* What Is Laser Surgery */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                What Is Laser Surgery?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Laser surgery is a minimally invasive procedure that uses focused laser energy to treat various medical conditions. Instead of using traditional surgical instruments, laser surgery uses a highly focused beam of light to precisely cut, vaporize, or coagulate tissue.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This advanced technique allows better precision, minimal tissue damage, reduced pain, faster recovery, and minimal scarring. Laser surgery is particularly effective for anorectal conditions, offering patients a less painful alternative to traditional surgery with excellent outcomes.
                </p>
              </div>
            </section>

            {/* Why Choose Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Why Choose Dr. Kapil Agrawal for Laser Surgery?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  There are several reasons to choose Dr. Kapil Agrawal for laser surgery:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>He has vast experience of 23 years and has performed thousands of laser, laparoscopic, and robotic surgeries with excellent outcomes.</li>
                  <li>He is affiliated with some of the best and state-of-the-art hospitals in New Delhi, which house advanced laser systems and USFDA-approved laser machines.</li>
                  <li>He has world-class expertise with his global training accomplished from nations like the UK and Singapore.</li>
                  <li>He uses USFDA-approved 1470 nm Laser Machines for optimal results and safety.</li>
                  <li>He has a team of internationally trained dieticians and physicians who help you in faster post-operative recovery.</li>
                  <li>He offers same-day discharge for most laser procedures, allowing patients to recover in the comfort of their home.</li>
                </ul>
              </div>
            </section>

            {/* Advantages of Laser Surgery */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Advantages of Laser Surgery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Minimal Pain and Discomfort",
                    description: "Laser surgery is near-painless and minimally invasive. Most patients experience little to no discomfort and do not require strong painkillers.",
                  },
                  {
                    title: "Faster Recovery",
                    description: "Recovery is rapid and hassle-free. Most patients can return to normal activities within 3-5 days after laser surgery.",
                  },
                  {
                    title: "Minimal Bleeding",
                    description: "Laser energy coagulates blood vessels as it cuts, resulting in minimal bleeding during and after the procedure.",
                  },
                  {
                    title: "Precision and Accuracy",
                    description: "Laser surgery offers precise targeting of affected tissue while preserving surrounding healthy tissue, resulting in better outcomes.",
                  },
                  {
                    title: "Minimal Scarring",
                    description: "Smaller incisions and precise tissue handling result in minimal scarring and better cosmetic outcomes.",
                  },
                  {
                    title: "Lower Risk of Infection",
                    description: "The laser beam sterilizes as it cuts, reducing the risk of infection compared to traditional surgery.",
                  },
                  {
                    title: "Same-Day Discharge",
                    description: "Most laser procedures allow same-day discharge, enabling patients to recover in the comfort of their home.",
                  },
                  {
                    title: "Quick Return to Normal Activities",
                    description: "Faster healing and minimal pain allow patients to return to work and daily activities much sooner than traditional surgery.",
                  },
                ].map((advantage, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Treatments Done by Dr. Kapil Agrawal with Laser Surgery */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Laser Surgery Treatments by Dr. Kapil Agrawal
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dr. Kapil Agrawal applies Advanced Laser Surgery techniques to a wide range of surgical procedures, customizing each according to patient needs to ensure maximum safety and positive outcomes.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      1. Laser Piles (Hemorrhoids) Treatment
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Kapil Agrawal offers the latest and most advanced Stapler, Laser, and DGHAL procedures for the best management of piles. The laser fiber is inserted into the hemorrhoidal tissue to shrink it from within, preserving sphincter function and allowing same-day discharge. This procedure is near-painless with minimal recurrence rates.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      2. Laser Anal Fissure Treatment
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Kapil Agrawal offers non-surgical treatment, Botox injections, and Laser surgery for the management of both acute and chronic anal fissures. Laser surgery uses focused laser energy to precisely treat the fissure and relax the anal sphincter, causing minimal tissue damage and promoting faster healing.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      3. Laser Anal Fistula Treatment
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Kapil Agrawal performs all the latest and advanced treatment options for the management of anal fistula. His procedures include Laser surgery & VAAFT technology which ensures faster recovery, minimal pain, and lower recurrence rates compared to traditional surgery.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      4. Laser Pilonidal Sinus Treatment
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Kapil Agrawal offers advanced pilonidal sinus treatment depending upon the complexity of the disease. The treatment includes laser technology, open conventional techniques and FLAP surgeries. Laser treatment offers minimal scarring and faster recovery for suitable cases.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      5. Laser Lipoma Treatment
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Laser surgery for lipoma removal offers a minimally invasive alternative to traditional excision. The procedure results in minimal scarring, reduced pain, and faster recovery compared to open surgery.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      6. Laser Circumcision (ZSR)
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Kapil Agrawal performs ZSR (Zipper Circumcision) using advanced laser technology. This procedure offers minimal pain, faster healing, no stitches, and excellent cosmetic results compared to traditional circumcision methods.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Recovery Post-Laser Surgery */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Recovery Post-Laser Surgery
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Patients undergoing laser surgery by Dr. Kapil Agrawal get the benefits of a smoother and faster recovery process with excellent post-surgery care.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Same-day discharge for most procedures</li>
                  <li>Quick return to normal daily life activities (3-5 days)</li>
                  <li>Minimal pain compared to traditional surgery</li>
                  <li>Lower chances of infection and wound complications</li>
                  <li>Minimal dietary restrictions based on procedure</li>
                  <li>Faster healing with minimal scarring</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Kapil Agrawal offers a personalized treatment plan for excellent post-surgery care, including post-operative guidance, diet instructions, and follow-up plans to maximize healing and long-term benefits.
                </p>
              </div>
            </section>

            {/* Cost of Laser Surgery */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Cost of Laser Surgery
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  The cost of laser surgery may vary based on the type of procedure, complexity, and hospital amenities. Laser surgery is generally more cost-effective in the long run due to faster recovery and reduced need for pain medications. Dr. Kapil Agrawal offers transparent pricing with fixed packages. Cashless insurance facilities and EMI options are available at Habilite Clinics to make treatment accessible.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <div className="defer-section">
              <LaserSurgeryFAQ />
            </div>
          </div>
        </div>
      </div>
      <WhatsAppExpertChat />
    </>
  );
}

