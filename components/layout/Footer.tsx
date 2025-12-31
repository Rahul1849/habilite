import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 18}
    height={props.height ?? 18}
    {...props}
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 4.988 3.657 9.127 8.437 9.877-.118-.841-.223-2.13.049-3.048l1.566-6.714c-.296-.568-.47-1.275-.47-2.02 0-1.886 1.094-3.296 2.743-3.296 1.303 0 1.93.978 1.93 2.146 0 1.306-.836 3.263-1.267 5.085-.359 1.513.762 2.743 2.256 2.743 2.717 0 4.785-2.869 4.785-7.014 0-3.668-2.604-6.244-6.311-6.244-4.305 0-6.84 3.196-6.84 6.422 0 1.141.321 1.95.881 2.566.103.11.118.206.087.318l-.283 1.118c-.045.178-.149.229-.341.137-1.275-.594-2.068-2.456-2.068-3.955 0-3.356 2.515-6.428 7.258-6.428 3.827 0 7.024 2.729 7.024 6.386 0 3.92-2.472 7.08-5.907 7.08-1.153 0-2.239-.623-2.602-1.361l-.706 2.688c-.277 1.055-1.004 2.356-1.492 3.146C10.058 23.861 11.01 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const primaryLinks = [
    { href: "/", label: "Home" },
    { href: "/habilite-clinic", label: "About" },
    { href: "/dr-kapil-agrawal", label: "Dr. Kapil Agrawal" },
    { href: "/appointment", label: "Book Consultation" },
  ];

  const services = [
    { href: "/", label: "Laparoscopic Surgery" },
    { href: "/best-robotic-surgeon-in-delhi", label: "Robotic Surgery" },
    { href: "/bariatrics", label: "Bariatric Surgery" },
    { href: "/best-laser-surgeon-in-delhi", label: "Laser Surgery" },
    { href: "/video-consultation", label: "Video Consultation" },
  ];

  const insights = [
    { href: "/testimonials", label: "Patient Testimonials" },
    { href: "/post", label: "Insights & Outcomes" },
    { href: "/international-patient", label: "International Patients" },
    { href: "/contact", label: "Contact & Locations" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/habiliteclinics/",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/habiliteclinics",
      label: "Instagram",
    },
    { icon: Twitter, href: "https://x.com/habilitecare", label: "X (Twitter)" },
    {
      icon: PinterestIcon,
      href: "https://in.pinterest.com/habiliteclinics/",
      label: "Pinterest",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@habiliteclinics",
      label: "YouTube",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/habiliteclinics",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container-custom py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-b border-gray-800 pb-10">
          <div className="space-y-3 max-w-2xl">
            <Link href="/" className="inline-flex items-center">
              <div className="text-2xl md:text-3xl font-bold">
                <span className="text-[#f56336]">HABiLiTE</span>
                <span className="text-gray-300"> CLINICS</span>
              </div>
            </Link>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Dr. Kapil Agrawal &mdash; Senior Consultant, Apollo Hospitals. 23+
              years in advanced laparoscopic, robotic, bariatric, and laser
              surgeries with 7000+ successful procedures and NABH-compliant
              protocols.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary-500 hover:bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition"
            >
              Book Consultation
            </Link>
            <Link
              href="/video-consultation"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-primary-500 px-6 py-3 text-sm font-semibold text-primary-200 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition"
            >
              Video Consultation
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Navigate
            </h3>
            <ul className="space-y-3">
              {primaryLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-primary-200 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Specialities
            </h3>
            <ul className="space-y-3">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-primary-200 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Resources
            </h3>
            <ul className="space-y-3">
              {insights.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-primary-200 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <a
                href="mailto:contact@habiliteclinics.com"
                className="inline-flex items-center gap-3 hover:text-primary-200 transition"
              >
                <Mail size={18} className="text-primary-400" />{" "}
                contact@habiliteclinics.com
              </a>
              <a
                href="tel:+919999456455"
                className="inline-flex items-center gap-3 hover:text-primary-200 transition"
              >
                <Phone size={18} className="text-primary-400" /> +91 99994 56455
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 mt-0.5" />
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Lajpat Nagar:</span><br />
                    M-11, Block M, Lajpat Nagar II, <br/>
                    New Delhi – 110024
                  </p>
                  <p>
                    <span className="font-semibold">Hauz Khas:</span><br />
                    C-7/186, SDA, Hauz Khas, <br/>
                    New Delhi – 110016
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-4 pt-2"
                aria-label="Social media"
              >
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-gray-500 hover:text-primary-200 transition"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-6 text-xs sm:text-sm text-gray-500 flex flex-col lg:flex-row items-center justify-between gap-3 text-center lg:text-left">
          <p>
            &copy; {currentYear} Habilite Clinics. NABH-compliant surgical care
            · 23+ years of excellence · 10000+ successful procedures.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-primary-200 transition"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-700">/</span>
            <Link href="/terms" className="hover:text-primary-200 transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
