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

const RoboticSurgeryFAQ = dynamic(() => import("./RoboticSurgeryFAQ"), {
  ssr: false,
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-xl" />,
});

export const metadata: Metadata = {
  title:
    "Best Robotic Surgeon in Delhi - Dr. Kapil Agrawal | Robot-Assisted Surgery | 23+ Years Experience",
  description:
    "Dr. Kapil Agrawal is the best robotic surgeon in Delhi with 23+ years of experience and 7000+ successful robotic and laparoscopic surgeries. Expert in robotic hernia repair, gallbladder surgery, bariatric surgery, and GERD treatment. Internationally trained, cashless insurance available.",
  keywords: [
    "best robotic surgeon delhi",
    "robotic surgery delhi",
    "robot-assisted surgery delhi",
    "robotic hernia repair delhi",
    "robotic gallbladder surgery delhi",
    "robotic bariatric surgery delhi",
    "Dr Kapil Agrawal robotic surgeon",
    "robotic surgery cost delhi",
  ],
  openGraph: {
    title: "Best Robotic Surgeon in Delhi - Dr. Kapil Agrawal",
    description:
      "Internationally trained robotic surgeon performing advanced robot-assisted surgeries with 3D HD visualization, minimal recovery time, and excellent outcomes.",
    url: "https://www.habiliteclinics.com/best-robotic-surgeon-in-delhi",
  },
  alternates: {
    canonical: "https://www.habiliteclinics.com/best-robotic-surgeon-in-delhi",
  },
};

const roboticSurgeryFaqs = [
  {
    question: "Does Medical Insurance Cover Robotic Surgery?",
    answer:
      "It depends upon the insurance company and the type of surgery that needs to be performed by robotic assistance. Some major health insurance providers cover robotic surgery. Dr. Kapil Agrawal's team helps patients avail cashless treatment facilities and coordinates with their insurer to get smooth pre-authorisation and the claim process.",
  },
  {
    question: "Does Robotic Surgery Provide Better Cosmesis Than Laparoscopic Surgery?",
    answer:
      "The robotic system doesn't offer better cosmesis than laparoscopic surgery, as the size and number of incisions remain the same for both laparoscopic and robotic surgeries. In both robotic and laparoscopic surgeries, the recovery period and post-operative discomfort remain the same.",
  },
  {
    question: "Does Robotic Surgery Have Faster Recovery Rates Than Laparoscopic Surgery?",
    answer:
      "As the size and number of incisions are the same for laparoscopic and robotic surgeries, the recovery period and return to normal activities are similar for both approaches.",
  },
  {
    question: "What are the advantages of robotic surgery?",
    answer:
      "Robotic surgery offers better precision with 3D HD visualization, smaller incisions leading to faster recovery, reduced blood loss, less post-operative pain, lower risk of infection, shorter hospital stay, minimal scar marks, greater surgical control in complex procedures, improved access to hard-to-reach areas, and better outcomes in high-risk or obese patients.",
  },
  {
    question: "What types of surgeries can be performed robotically?",
    answer:
      "Dr. Kapil Agrawal performs robotic hernia repair (inguinal, umbilical, incisional), robotic gallbladder surgery, robotic bariatric surgery (sleeve, bypass), robotic anti-reflux (GERD) and hiatus hernia surgery, and robotic appendectomy for complex cases.",
  },
];

const serviceSchema = getServiceSchema({
  name: "Robotic Surgery - Robot-Assisted Laparoscopic Surgery",
  description:
    "Expert robotic surgery by Dr. Kapil Agrawal in Delhi, India. Advanced robot-assisted laparoscopic surgeries with 3D HD visualization, enhanced precision, and minimal recovery time. Specialized in robotic hernia repair, gallbladder surgery, bariatric surgery, and GERD treatment.",
  url: "/best-robotic-surgeon-in-delhi",
  serviceType: "Medical Procedure",
  category: "Laparoscopic Surgery",
  areaServed: ["Delhi", "NCR", "India"],
});

const medicalProcedureSchema = getMedicalProcedureSchema({
  name: "Robotic Surgery",
  description:
    "Advanced robot-assisted laparoscopic surgery with 3D HD visualization and enhanced precision for complex surgical procedures.",
  url: "/best-robotic-surgeon-in-delhi",
  procedureType: "Surgical Procedure",
  bodyLocation: "Abdomen",
  preparation: "Pre-operative assessment, fasting instructions, and medical clearance",
  followup: "Post-operative care, diet instructions, and follow-up consultations",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Robotic Surgery", url: "/best-robotic-surgeon-in-delhi" },
]);

const faqSchema = getFAQSchema({
  title: "Robotic Surgery FAQs",
  description:
    "Common questions answered by Dr. Kapil Agrawal related to robotic surgery, insurance coverage, recovery, and benefits.",
  faqs: roboticSurgeryFaqs,
});

export default function BestRoboticSurgeonPage() {
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
              best-robotic-surgeon-delhi
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Robotic Surgeon in{" "}
              <span className="text-[#0891b2]">Delhi</span> – Dr. Kapil Agrawal
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Dr. Kapil Agrawal is a credible and one of the best Robotic and Laparoscopic surgeons in Delhi. He has an overall experience of more than 23 years and has been trained at some of the best and advanced laparoscopic centres in India, the UK, and Singapore. He has a golden track record of performing more than 7,000 minimally invasive surgeries that include augmented robotic procedures with incredible benefits.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Award, text: "23+ Years Experience" },
                { icon: Users, text: "7000+ Successful Surgeries" },
                { icon: TrendingUp, text: "Internationally Trained" },
                { icon: Clock, text: "24-Hour Discharge" },
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
                  serviceName="Robotic Surgery"
                  serviceSlug="best-robotic-surgeon-in-delhi"
                />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* About Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Dr. Kapil Agrawal - Best Robotic Surgeon in Delhi
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Kapil Agrawal is a credible and one of the best Robotic and Laparoscopic surgeons in Delhi. He has an overall experience of more than 23 years and has been trained at some of the best and advanced laparoscopic centres in India, the UK, and Singapore. He has a golden track record of performing more than 7,000 minimally invasive surgeries that include augmented robotic procedures with incredible benefits.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  He holds specializations in robotic podiums in performing complicated abdominal, gastrointestinal, and bariatric procedures with high precision, minimal recovery time and reduced risks for complications. He is currently serving some of the most prominent hospitals in Delhi NCR. He is known to perform complicated surgeries precisely, deliver personalized care, and offer the best post-surgery care for smooth recovery.
                </p>
              </div>
            </section>

            {/* What Is Robotic Surgery */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                What Is Robotic Surgery?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Robotic surgery is an advanced version of the laparoscopic technique. In this augmented surgery technique, instead of performing surgery with a hand, Dr. Kapil Agrawal operates this surgery from a console with instruments. This setup allows better precision, 3D HD visual guidance, and better access to the tight surgical areas with a magnified view, which is perfect for complicated surgical procedures.
                </p>
              </div>
            </section>

            {/* Why Choose Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Why Choose Dr. Kapil Agrawal for Robot-Assisted Surgery?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  There are several reasons to choose Dr. Kapil Agrawal for robotic-assisted surgery:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>He has vast experience of 23 years and has performed thousands of laparoscopic, robotic, and laser surgeries with excellent outcomes.</li>
                  <li>He is affiliated with some of the best and state-of-the-art hospitals in New Delhi, which house advanced robotic consoles and 3-D laparoscopic systems.</li>
                  <li>He has world-class expertise with his global training accomplished from nations like the UK and Singapore.</li>
                  <li>He has a team of internationally trained dieticians and physicians who help you in faster post-operative recovery.</li>
                </ul>
              </div>
            </section>

            {/* Advantages of Robotic Surgery */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Advantages of Robotic Surgery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Better Precision With Robotic Arms And 3D Visions",
                    description: "In robotic surgery, the surgeon gets magnified and 3D images of the operative area, resulting in better accuracy.",
                  },
                  {
                    title: "Small Incisions Lead To Faster Recovery",
                    description: "Robotic surgery typically requires only a few tiny holes to perform surgery. This results in less damage to the body tissues and early discharge from the hospital.",
                  },
                  {
                    title: "Reduced Blood Loss During Surgery",
                    description: "Due to minor cuts and better precision, the blood loss during surgery is much less when compared to open surgery.",
                  },
                  {
                    title: "Reduced Post-Operative Pain And Discomfort",
                    description: "Smaller incisions and gentle tissue handling result in less pain after surgery and reduced need for pain medications.",
                  },
                  {
                    title: "Lower Risk Of Infection And Complications",
                    description: "In robotics, due to the smaller incisions and better control, the risk of infection and other complications is much lower when compared to open surgery.",
                  },
                  {
                    title: "Shorter Hospital Stay And Faster Recovery",
                    description: "Patients often go home sooner and return to normal activities faster due to quicker healing and fewer complications.",
                  },
                  {
                    title: "Minimal Scar Marks And Better Cosmetic Outcomes",
                    description: "Tiny incisions leave behind minimal and almost non-visible marks, which is especially important for patients concerned about cosmetic appearance.",
                  },
                  {
                    title: "Greater Surgical Control In Complex Or Revisional Procedures",
                    description: "The robotic system allows surgeons to handle complex anatomy or redo previous surgeries with enhanced dexterity and precision.",
                  },
                  {
                    title: "Improved Access To Hard-To-Reach Areas In The Body",
                    description: "Robotic arms can move in ways the human hand cannot, making it easier to operate in deep or narrow areas with limited space.",
                  },
                  {
                    title: "Better Outcomes In High-Risk Or Obese Patients",
                    description: "Robotic surgery provides better visibility and access, helping reduce complications and improve safety in patients with higher surgical risk.",
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

            {/* Treatments Done by Dr. Kapil Agrawal */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Treatments Done by Dr. Kapil Agrawal with Robotic Surgery
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dr. Kapil Agrawal applies Advanced Robot-Assisted Laparoscopic Surgeries to a wide range of surgical procedures, thus customising each according to patient needs to ensure maximum safety and positive outcomes.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      1. Robotic Hernia Repair (inguinal, umbilical, incisional)
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      This surgical procedure offers less chronic pain, faster recovery, and low risks of infection, as highlighted in hernia infections. Dr Kapil Agrawal usually prefers robotic surgical treatment of hernia in large, complex and recurrent hernias requiring detailed dissection and reconstruction.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      2. Robotic Gallbladder Surgery
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Robotic cholecystectomy is a minimally invasive surgical procedure to remove the gallbladder using advanced robotic technology. It offers enhanced precision, 3D visualisation, and improved dexterity for the surgeon. Robotic technology is beneficial for patients having complex gallstone pathology or who have multiple previous abdominal surgeries.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      3. Robotic Bariatric Surgery (sleeve, bypass)
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Robotic bariatric surgery is an advanced, minimally invasive approach to weight loss surgery for greater precision and control. The common bariatric surgeries performed by Dr Kapil Agrawal include Sleeve Gastrectomy, Roux-en-Y gastric bypass, Mini Gastric Bypass and Revision Bariatric Surgery. This technique allows safer, precise interventions for obesity issues with minimal complications. Dr Kapil Agrawal usually prefers robotic surgery in patients who are super obese, who have undergone multiple abdominal surgeries and who are undergoing revision bariatric surgery.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      4. Robotic Anti-Reflux (GERD) and Hiatus Hernia Surgery
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      This technique allows better precision in subtle gastroesophageal repair. Dr. Kapil Agrawal performs all types of fundoplication and prefers robotic surgery for patients having large and complex hiatus hernias.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      5. Robotic Appendectomy
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      This technique involves higher precision and shorter post-operative discomfort and stay. Dr. Kapil Agrawal usually reserves robotic surgery for highly complicated appendicitis or when the appendix has burst, resulting in spillage of bowel contents in the abdomen.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Laparoscopic vs Robotic Surgery */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Laparoscopic vs Robotic Surgery
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Laparoscopy uses hand-held tools; on the other hand, robotic surgery uses console-controlled robotic arms.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Robotic surgery offers greater precision and steadiness in the outcomes as compared to laparoscopic surgery.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Laparoscopy allows 2D visuals; robotics offers high-definition 3D imaging.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Surgeons need to stand during laparoscopic surgery, while they sit during robotic surgery.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Robotic systems reduced fatigue during lengthy procedures as compared to laparoscopic surgery.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Laparoscopic surgery is best suited for standard cases, while robotics is best for complicated cases.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Robotic tools improve accuracy as well as visualisation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Both are minimally invasive, allowing quicker recovery as compared to open surgery.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Recovery Post-Robotic Surgery */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Recovery Post-Robotic Surgery
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Patients undergoing robotic surgery by Dr. Kapil Agrawal get the benefits of a smoother and faster recovery process with excellent post-surgery care.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Short hospital stays (Same-day discharge or next-day)</li>
                  <li>Quick return to normal daily life activities</li>
                  <li>Less painful than traditional surgery</li>
                  <li>Lower chances of infection and wound complications</li>
                  <li>Minimal dietary restrictions based on procedure.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Kapil Agrawal offers a personalised treatment plan for excellent post-surgery care, including other things such as post-operative guidance, diet instructions, and follow-up plans to maximise healing and long-term benefits.
                </p>
              </div>
            </section>

            {/* Cost of Robotic Surgery */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Cost of Robotic Surgery
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  The cost of robotic surgery may vary based on the type of procedure, hospital amenities, and the complications involved in the condition. The robotic surgery is substantially expensive as compared to traditional laparoscopic surgery methods, but is beneficial in complex surgeries. There are various types of robotic systems, and the cost may vary depending upon the type of robotic console used.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <div className="defer-section">
              <RoboticSurgeryFAQ />
            </div>
          </div>
        </div>
      </div>
      <WhatsAppExpertChat />
    </>
  );
}

