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
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Habilite Clinics</h3>
            <p className="text-gray-400 mb-4">
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
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
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
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  +91 98765 43210
                </a>
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

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Habilite Clinics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
