import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const PinterestIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 4.988 3.657 9.127 8.437 9.877-.118-.841-.223-2.13.049-3.048l1.566-6.714c-.296-.568-.47-1.275-.47-2.02 0-1.886 1.094-3.296 2.743-3.296 1.303 0 1.93.978 1.93 2.146 0 1.306-.836 3.263-1.267 5.085-.359 1.513.762 2.743 2.256 2.743 2.717 0 4.785-2.869 4.785-7.014 0-3.668-2.604-6.244-6.311-6.244-4.305 0-6.84 3.196-6.84 6.422 0 1.141.321 1.95.881 2.566.103.11.118.206.087.318l-.283 1.118c-.045.178-.149.229-.341.137-1.275-.594-2.068-2.456-2.068-3.955 0-3.356 2.515-6.428 7.258-6.428 3.827 0 7.024 2.729 7.024 6.386 0 3.92-2.472 7.08-5.907 7.08-1.153 0-2.239-.623-2.602-1.361l-.706 2.688c-.277 1.055-1.004 2.356-1.492 3.146C10.058 23.861 11.01 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Z" />
  </svg>
);

export default function AboutDoctorSection() {
  const doctor = {
    name: "Dr. Kapil Agrawal",
    designation: "Senior Consultant - Laparoscopic & Robotic Surgeon",
    image: "/images/dr-kapil-agrawal.png",
    experience: "23+ years",
    qualifications: [
      "MBBS - Institute of Medical Sciences, BHU, Varanasi",
      "MS (Surgery) - Institute of Medical Sciences, BHU, Varanasi",
      "MRCS (London, U.K) - Royal College of Surgeons, London",
      "MMED (Singapore) - National University of Singapore",
      "FMAS - Fellowship in Minimal Access Surgery",
    ],
    specialization: [
      "Laparoscopic Surgery",
      "Robotic Surgery",
      "Gallbladder Surgery",
      "Hernia Surgery",
      "Gastrointestinal Surgery",
      "Bariatric Surgery",
    ],
    bio: "Dr. Kapil Agrawal is a leading and one of the best Robotic and Laparoscopic Surgeon in Delhi, India. He has an overall experience of 23 years and has been working as a Senior Consultant Surgeon at Apollo Group of Hospitals, New Delhi, India. He is performing advanced laparoscopic and robotic surgeries for various conditions, which include Gallbladder stones, Hernia, Appendicitis, Rectal prolapse, and pseudo-pancreatic cyst.",
    profileUrl: "/dr-kapil-agrawal",
    socialLinks: [
      {
        icon: Facebook,
        href: "https://www.facebook.com/habiliteclinics/",
        label: "Facebook",
        color: "hover:text-[#1877F2]",
      },
      {
        icon: Instagram,
        href: "https://www.instagram.com/habiliteclinics",
        label: "Instagram",
        color: "hover:text-[#E4405F]",
      },
      {
        icon: Twitter,
        href: "https://x.com/habilitecare",
        label: "X (Twitter)",
        color: "hover:text-[#000000]",
      },
      {
        icon: PinterestIcon,
        href: "https://in.pinterest.com/habiliteclinics/",
        label: "Pinterest",
        color: "hover:text-[#BD081C]",
      },
      {
        icon: Youtube,
        href: "https://www.youtube.com/@habiliteclinics",
        label: "YouTube",
        color: "hover:text-[#FF0000]",
      },
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/company/habiliteclinics",
        label: "LinkedIn",
        color: "hover:text-[#0A66C2]",
      },
    ],
  };

  return (
    <section className="mt-12 max-w-[1150px] mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#0891b2] flex items-center justify-center">
            <Award className="text-white" size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            About the Doctor
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Doctor Image */}
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square max-w-[280px] mx-auto md:mx-0 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>
          </div>

          {/* Doctor Info */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                {doctor.name}
              </h4>
              <p className="text-[#0891b2] font-semibold mb-3">
                {doctor.designation}
              </p>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Calendar className="text-[#0891b2]" size={18} />
                <span className="font-medium">
                  {doctor.experience} of Experience
                </span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {doctor.bio}
            </p>

            {/* Qualifications */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="text-[#0891b2]" size={20} />
                <h5 className="font-bold text-gray-900">Qualifications</h5>
              </div>
              <ul className="space-y-2">
                {doctor.qualifications.slice(0, 3).map((qual, index) => (
                  <li
                    key={index}
                    className="text-sm md:text-base text-gray-700 flex items-start gap-2"
                  >
                    <span className="text-[#0891b2] mt-1">•</span>
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specializations */}
            <div>
              <h5 className="font-bold text-gray-900 mb-3">Specializations</h5>
              <div className="flex flex-wrap gap-2">
                {doctor.specialization.slice(0, 4).map((spec, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-[#0891b2]/10 text-[#0891b2] rounded-full text-sm font-semibold"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h5 className="font-bold text-gray-900 mb-3">
                Connect with Dr. Kapil Agrawal
              </h5>
              <div className="flex flex-wrap gap-3">
                {doctor.socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  const isPinterest = social.label === "Pinterest";
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gray-200 ${social.color}`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      {isPinterest ? (
                        <PinterestIcon size={20} />
                      ) : (
                        <IconComponent size={20} />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={doctor.profileUrl}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0891b2] text-white rounded-lg font-semibold hover:bg-[#06b6d4] transition-colors"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
