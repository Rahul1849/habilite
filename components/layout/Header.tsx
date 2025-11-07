'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const closeDropdownTimeout = useRef<number | null>(null)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (closeDropdownTimeout.current) {
        window.clearTimeout(closeDropdownTimeout.current)
      }
    }
  }, [])

  const handleDropdownEnter = (label: string) => {
    if (closeDropdownTimeout.current) {
      window.clearTimeout(closeDropdownTimeout.current)
      closeDropdownTimeout.current = null
    }
    setActiveDropdown(label)
  }

  const handleDropdownLeave = () => {
    if (closeDropdownTimeout.current) {
      window.clearTimeout(closeDropdownTimeout.current)
    }
    closeDropdownTimeout.current = window.setTimeout(() => {
      setActiveDropdown(null)
      closeDropdownTimeout.current = null
    }, 180)
  }

  const topNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/doctors', label: 'About Doctor' },
    { href: '/about', label: 'About Clinic' },
    { href: '/awards', label: 'Awards' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/#blog', label: 'Blogs' },
  ]

  const mainNavLinks = [
    { 
      href: '/laparoscopic-surgery', 
      label: 'Laparoscopic Surgery',
      submenu: [
        { href: '/laparoscopic-surgery/gallbladder-surgery', label: 'Gallbladder Surgery' },
        { href: '/laparoscopic-surgery/hernia-surgery', label: 'Hernia Surgery' },
        { href: '/laparoscopic-surgery/rectal-prolapse-surgery', label: 'Rectal Prolapse Surgery' },
        { href: '/laparoscopic-surgery/appendix-surgery', label: 'Appendix Surgery' },
      ]
    },
    { 
      href: '/laser-surgery', 
      label: 'Laser Surgery',
      submenu: [
        { href: '/laser-surgery/hemorrhoids-piles', label: 'Hemorrhoids / Piles' },
        { href: '/laser-surgery/anal-fistula', label: 'Anal Fistula' },
        { href: '/laser-surgery/pilonidal-sinus', label: 'Pilonidal Sinus' },
        { href: '/laser-surgery/anal-fissure', label: 'Anal Fissure' },
        { href: '/laser-surgery/lipoma', label: 'Lipoma' },
        { href: '/laser-surgery/circumcision', label: 'Circumcision' },
      ]
    },
    { 
      href: '/bariatrics', 
      label: 'Bariatrics',
      submenu: [
        { href: '/bariatrics/bariatric-surgery', label: 'Bariatric Surgery' },
        { href: '/bariatrics/non-surgical-weight-loss', label: 'Non-Surgical Weight Loss Program' },
        { href: '/bariatrics/surgery-for-diabetes', label: 'Surgery for Diabetes' },
        { href: '/bariatrics/intragastric-balloon', label: 'IntraGastric Balloon' },
        { href: '/bariatrics/allurion-balloon', label: 'Allurion Balloon' },
        { href: '/bariatrics/spatz-balloon', label: 'Spatz Balloon' },
      ]
    },
    { href: '/hospital-affiliations', label: 'Hospital Affiliations' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <>
      {/* Fixed Header Container */}
      <div className="fixed top-0 left-0 right-0 z-[9999] w-full">
        {/* Top Navigation Bar */}
        <div className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] text-white py-3 hidden md:block overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base">
              {topNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-orange-100 transition-colors font-semibold whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`bg-white transition-all duration-200 overflow-visible ${
            mounted && isScrolled ? 'shadow-md' : ''
          }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-3xl md:text-4xl font-bold">
                <span className="text-[#f56336]">HABiLiTE</span>
                <span className="text-gray-800"> CLINICS</span>
              </div>
            </Link>

            {/* Right Side - Contact & Appointment */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-6 flex-shrink-0">
              <div className="flex items-center space-x-2 xl:space-x-4">
                <a
                  href="tel:+919910024564"
                  className="flex items-center space-x-1 xl:space-x-2 text-gray-700 hover:text-[#f56336] transition-colors font-bold text-sm xl:text-base"
                >
                  <Phone size={18} className="xl:w-5 xl:h-5" />
                  <span className="text-base xl:text-xl whitespace-nowrap">+91 99100 24564</span>
                </a>
                <span className="text-gray-400 hidden xl:inline">|</span>
                <a
                  href="tel:+919999456455"
                  className="flex items-center space-x-1 xl:space-x-2 text-gray-700 hover:text-[#f56336] transition-colors font-bold text-sm xl:text-base"
                >
                  <Phone size={18} className="xl:w-5 xl:h-5" />
                  <span className="text-base xl:text-xl whitespace-nowrap">+91 99994 56455</span>
                </a>
              </div>
              <Link 
                href="/appointment" 
                className="relative text-white px-4 xl:px-7 py-2.5 xl:py-3 rounded-lg font-bold text-sm xl:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#f56336]/40 hover:scale-105 transform active:scale-95 will-change-transform overflow-hidden group whitespace-nowrap"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#d4512a] via-[#e05a2f] via-[#f56336] via-[#ff8c5a] via-[#f56336] via-[#e05a2f] to-[#d4512a] bg-[length:300%_100%] animate-gradient-smooth"></span>
                <span className="relative z-10">Book an Appointment</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-[#f56336] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Main Navigation Bar */}
          <div className="hidden lg:block border-t border-gray-200 relative z-[9999] overflow-visible">
            <nav className="flex items-center pt-5 pb-5 space-x-1 xl:space-x-2 relative overflow-visible">
              {mainNavLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative group flex-shrink-0"
                  onMouseEnter={() => link.submenu && handleDropdownEnter(link.label)}
                  onMouseLeave={() => link.submenu && handleDropdownLeave()}
                >
                  <Link
                    href={link.href}
                    className="px-3 xl:px-5 py-2.5 text-gray-700 hover:text-[#f56336] font-semibold text-sm xl:text-base transition-colors duration-200 relative flex items-center whitespace-nowrap"
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown size={14} className={`xl:w-4 xl:h-4 ml-1 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    )}
                    <span className="absolute bottom-0 left-3 xl:left-5 right-3 xl:right-5 h-0.5 bg-[#f56336] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {link.submenu && (
                    <div 
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 z-[99999] transition-all duration-200 ${
                        activeDropdown === link.label 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                      onMouseEnter={() => handleDropdownEnter(link.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-[#f56336] transition-colors duration-150 text-sm font-medium"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
              {/* Top Navigation */}
              <div className="pb-4 border-b mb-4">
                <div className="text-sm font-semibold text-gray-500 mb-2">Quick Links</div>
                {topNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-[#f56336] rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Main Navigation */}
              <div className="text-sm font-semibold text-gray-500 mb-2">Main Menu</div>
              {mainNavLinks.map((link) => (
                <div key={link.href} className="mb-1">
                  {link.submenu ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-[#f56336] rounded-md font-medium transition-colors"
                        onClick={() => {
                          setOpenMobileDropdown(openMobileDropdown === link.label ? null : link.label)
                        }}
                      >
                        {link.label}
                        <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileDropdown === link.label && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-[#f56336] rounded-md transition-colors"
                              onClick={() => {
                                setIsOpen(false)
                                setOpenMobileDropdown(null)
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-[#f56336] rounded-md font-medium transition-colors"
                      onClick={() => {
                        setIsOpen(false)
                        setOpenMobileDropdown(null)
                      }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t mt-4 space-y-3">
                <a
                  href="tel:+919910024564"
                  className="flex items-center space-x-2 px-4 py-3 text-gray-700 font-semibold hover:bg-orange-50 hover:text-[#f56336] rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={20} />
                  <span>+91 99100 24564</span>
                </a>
                <a
                  href="tel:+919999456455"
                  className="flex items-center space-x-2 px-4 py-3 text-gray-700 font-semibold hover:bg-orange-50 hover:text-[#f56336] rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={20} />
                  <span>+91 99994 56455</span>
                </a>
                <Link
                  href="/appointment"
                  className="relative block w-full text-white px-4 py-3 rounded-lg font-bold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95 overflow-hidden group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#d4512a] via-[#e05a2f] via-[#f56336] via-[#ff8c5a] via-[#f56336] via-[#e05a2f] to-[#d4512a] bg-[length:300%_100%] animate-gradient-smooth"></span>
                  <span className="relative z-10">Book an Appointment</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
        </header>
      </div>
    </>
  )
}
