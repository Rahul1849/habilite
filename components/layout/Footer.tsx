import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/treatments', label: 'Treatments' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const services = [
    { href: '/treatments/laparoscopic-gallbladder-surgery', label: 'Gallbladder Surgery' },
    { href: '/treatments/hernia-surgery', label: 'Hernia Surgery' },
    { href: '/treatments/robotic-surgery', label: 'Robotic Surgery' },
    { href: '/treatments/gastrointestinal-surgery', label: 'GI Surgery' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 overflow-hidden">
      <div className="container-custom py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div className="px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 break-words">Habilite Clinics</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 break-words">
              Leading laparoscopic and robotic surgery center in Delhi. Expert care with advanced technology for better outcomes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="px-4 sm:px-0">
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-primary-500 transition-colors break-words"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="px-4 sm:px-0">
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-primary-500 transition-colors break-words"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="px-4 sm:px-0">
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Habilite Clinics,<br />
                  Delhi, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a
                    href="tel:+919910024564"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    +91 99100 24564
                  </a>
                  <a
                    href="tel:+919999456455"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    +91 99994 56455
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <a
                  href="mailto:info@habiliteclinics.com"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  info@habiliteclinics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 px-4 sm:px-0">
          <p className="text-sm sm:text-base break-words">&copy; {currentYear} Habilite Clinics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
