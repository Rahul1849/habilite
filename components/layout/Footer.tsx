import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const primaryLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/doctors', label: 'Dr. Kapil Agrawal' },
    { href: '/appointment', label: 'Book Consultation' },
  ]

  const services = [
    { href: '/laparoscopic-surgery', label: 'Laparoscopic & Robotic Surgery' },
    { href: '/bariatrics', label: 'Bariatric & Metabolic Surgery' },
    { href: '/laser-surgery', label: 'Laser Proctology' },
    { href: '/video-consultation', label: 'Video Consultation' },
  ]

  const insights = [
    { href: '/testimonials', label: 'Patient Testimonials' },
    { href: '/post', label: 'Insights & Outcomes' },
    { href: '/international-patient', label: 'International Patients' },
    { href: '/contact', label: 'Contact & Locations' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/habiliteclinics', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/habiliteclinics', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/habilite-clinics', label: 'LinkedIn' },
  ]

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
              Dr. Kapil Agrawal &mdash; Senior Consultant, Apollo Hospitals. 23+ years in advanced laparoscopic, robotic,
              bariatric, and laser surgeries with 7000+ successful procedures and NABH-compliant protocols.
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">Navigate</h3>
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">Specialties</h3>
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">Resources</h3>
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="mailto:contact@habiliteclinics.com" className="inline-flex items-center gap-3 hover:text-primary-200 transition">
                <Mail size={18} className="text-primary-400" /> contact@habiliteclinics.com
              </a>
              <a href="tel:+919910024564" className="inline-flex items-center gap-3 hover:text-primary-200 transition">
                <Phone size={18} className="text-primary-400" /> +91 99100 24564
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 mt-0.5" />
                <p>
                  M-11, Block M, Lajpat Nagar II, New Delhi 110024<br />
                  Satellite clinics in Green Park & Greater Kailash
                </p>
              </div>
              <div className="flex items-center gap-4 pt-2" aria-label="Social media">
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
            &copy; {currentYear} Habilite Clinics. NABH-compliant surgical care · 23+ years of excellence · 10000+ successful procedures.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-primary-200 transition">Privacy Policy</Link>
            <span className="text-gray-700">/</span>
            <Link href="/terms" className="hover:text-primary-200 transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
