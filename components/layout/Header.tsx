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
    // Defer all client-side logic to prevent blocking initial render
    if (typeof window === 'undefined') return
    
    let cleanup: (() => void) | undefined
    let rafId: number | null = null
    let ticking = false
    
    const scheduleMount = () => {
      setMounted(true)
      
      // Throttled scroll handler using requestAnimationFrame for better performance
      const handleScroll = () => {
        if (!ticking) {
          rafId = requestAnimationFrame(() => {
            setIsScrolled(window.scrollY > 50)
            ticking = false
          })
          ticking = true
        }
      }
      
      // Initial check
      handleScroll()
      
      // Use passive listener for better scroll performance
      window.addEventListener('scroll', handleScroll, { passive: true })
      cleanup = () => {
        if (rafId !== null) {
          cancelAnimationFrame(rafId)
        }
        window.removeEventListener('scroll', handleScroll)
      }
    }
    
    // Use requestIdleCallback with longer timeout to reduce TBT
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(scheduleMount, { timeout: 500 })
      return () => {
        cancelIdleCallback(id)
        cleanup?.()
      }
    } else {
      // Fallback: delay more aggressively to reduce blocking
      const timer = setTimeout(scheduleMount, 100)
      return () => {
        clearTimeout(timer)
        cleanup?.()
      }
    }
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
    {
      label: 'About Us',
      submenu: [
        { href: '/dr-kapil-agrawal', label: 'About Dr. Kapil Agrawal' },
        { href: '/habilite-clinic', label: 'About Clinic' },
        { href: '/hospital-affiliations', label: 'Hospital Affiliations' },
        { href: '/contact', label: 'Our Clinic Locations' },
      ],
    },
    {
      label: 'Resources',
      submenu: [
        { href: '/resources/gallbladder-complete-guide', label: 'Gallbladder – A Complete Guide' },
        { href: '/resources/hernia-complete-guide', label: 'Hernia – A Complete Guide' },
        { href: '/resources/obesity-complete-guide', label: 'Obesity – A Complete Guide' },
        { href: '/resources/piles-complete-guide', label: 'Piles – A Complete Guide' },
      ],
    },
    { href: '/awards', label: 'Awards' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/international-patient', label: 'International Patient' },
    { href: '/post', label: 'Blogs' },
  ]

  const mainNavLinks = [
    { 
      label: 'Laparoscopic Surgery',
      submenu: [
        { href: '/best-gallbladder-stone-surgeon-delhi', label: 'Gallbladder Surgery' },
        { href: '/best-hernia-surgeon-in-delhi', label: 'Hernia Surgery' },
        { href: '/best-hiatus-hernia-surgeon-in-delhi', label: 'GERD & Hiatus Surgery' },
        { href: '/best-rectal-prolapse-surgeon-in-delhi', label: 'Rectal Prolapse Surgery' },
        { href: '/best-appendix-surgeon-in-delhi', label: 'Appendix Surgery' },
      ]
    },
    { 
      label: 'Laser Surgery',
      submenu: [
        { href: '/best-laser-piles-surgeon-in-delhi', label: 'Hemorrhoids / Piles' },
        { href: '/best-laser-fistula-treatment', label: 'Anal Fistula' },
        { href: '/best-laser-pilonidal-sinus-treatment', label: 'Pilonidal Sinus' },
        { href: '/laser-surgery/anal-fissure', label: 'Anal Fissure' },
        { href: '/lipoma-treatment', label: 'Lipoma' },
        { href: '/laser-zsr-circumcision', label: 'Circumcision' },
      ]
    },
    { 
      label: 'Bariatrics',
      submenu: [
        { href: '/bariatric-surgeon-in-delhi-india', label: 'Bariatric Surgery' },
        { href: '/medical-weight-loss-program', label: 'Non-Surgical Weight Loss Program' },
        { href: '/surgery-for-diabetes', label: 'Surgery for Diabetes' },
        { href: '/endoscopic-intra-gastric-balloon', label: 'IntraGastric Balloon' },
      ]
    },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <>
      {/* Fixed Header Container */}
      <div className="fixed top-0 left-0 right-0 z-[9999] w-full">
              {/* Top Navigation Bar */}
      <div className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] text-white py-3 hidden md:block overflow-visible">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base">
              {topNavLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.submenu && handleDropdownEnter(link.label)}
                  onMouseLeave={() => link.submenu && handleDropdownLeave()}
                >
                  {link.submenu ? (
                    <>
                      <button
                        type="button"
                        className="hover:text-cyan-100 transition-colors font-semibold whitespace-nowrap inline-flex items-center gap-1"
                        onClick={(e) => {
                          e.preventDefault()
                          handleDropdownEnter(link.label)
                        }}
                      >
                        {link.label}
                      </button>
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-white text-gray-800 rounded-lg shadow-2xl border border-gray-100 py-2 ${
                          activeDropdown === link.label ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                        } transition-all duration-200 z-[10000]`}
                      >
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm font-medium hover:bg-cyan-50 hover:text-[#0891b2]"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href!}
                      className="hover:text-cyan-100 transition-colors font-semibold whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`bg-white overflow-visible ${
            mounted && isScrolled ? 'shadow-md transition-shadow duration-200' : ''
          }`}
          style={{ willChange: 'auto' }}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible relative z-[9999]">
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
                  href="tel:+919999456455"
                  className="flex items-center space-x-1 xl:space-x-2 text-gray-700 hover:text-[#f56336] transition-colors font-bold text-sm xl:text-base"
                >
                  <Phone size={18} className="xl:w-5 xl:h-5" />
                  <span className="text-base xl:text-xl whitespace-nowrap">+91 99994 56455</span>
                </a>
                <span className="text-gray-400 hidden xl:inline">|</span>
                <a
                  href="tel:+919910024564"
                  className="flex items-center space-x-1 xl:space-x-2 text-gray-700 hover:text-[#f56336] transition-colors font-bold text-sm xl:text-base"
                >
                  <Phone size={18} className="xl:w-5 xl:h-5" />
                  <span className="text-base xl:text-xl whitespace-nowrap">+91 99100 24564</span>
                </a>
              </div>
              <Link 
                href="/appointment" 
                className="relative text-white px-4 xl:px-7 py-2.5 xl:py-3 rounded-lg font-bold text-sm xl:text-base transition-transform duration-300 shadow-md hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 will-change-transform overflow-hidden group whitespace-nowrap"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-black via-[#0e7490] via-[#0891b2] via-[#06b6d4] via-[#22d3ee] via-[#06b6d4] via-[#0891b2] via-[#0e7490] to-black bg-[length:300%_100%] animate-gradient-smooth"></span>
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
                  key={link.label}
                  className="relative group flex-shrink-0"
                  onMouseEnter={() => link.submenu && handleDropdownEnter(link.label)}
                  onMouseLeave={() => link.submenu && handleDropdownLeave()}
                >
                  {link.submenu ? (
                    <button
                      type="button"
                      className="px-3 xl:px-5 py-2.5 text-[#0891b2] hover:text-[#06b6d4] font-semibold text-sm xl:text-base transition-colors duration-200 relative flex items-center whitespace-nowrap focus:outline-none"
                      onClick={(e) => {
                        e.preventDefault()
                        handleDropdownEnter(link.label)
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`xl:w-4 xl:h-4 ml-1 transition-transform duration-200 ${
                          activeDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                      <span className="absolute bottom-0 left-3 xl:left-5 right-3 xl:right-5 h-0.5 bg-[#0891b2] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-3 xl:px-5 py-2.5 text-[#0891b2] hover:text-[#06b6d4] font-semibold text-sm xl:text-base transition-colors duration-200 relative flex items-center whitespace-nowrap"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-3 xl:left-5 right-3 xl:right-5 h-0.5 bg-[#0891b2] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
                    </Link>
                  )}
                  
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
                          className="block px-4 py-2.5 text-gray-700 hover:bg-cyan-50 hover:text-[#0891b2] transition-colors duration-150 text-sm font-medium"
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
          <div className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
              {/* Top Navigation */}
              <div className="pb-4 border-b mb-4">
                <div className="text-base font-semibold text-gray-500 mb-3">Quick Links</div>
                {topNavLinks.map((link) => (
                  <div key={link.label} className="mb-1">
                    {link.submenu ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full px-4 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-[#f56336] rounded-md font-medium transition-colors"
                          onClick={() => {
                            setOpenMobileDropdown(openMobileDropdown === link.label ? null : link.label)
                          }}
                        >
                          {link.label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${openMobileDropdown === link.label ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {openMobileDropdown === link.label && (
                          <div className="ml-4 mt-1 space-y-1">
                            {link.submenu.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-4 py-3 text-base text-gray-600 hover:bg-orange-50 hover:text-[#f56336] rounded-md transition-colors font-medium"
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
                        href={link.href!}
                        className="block px-4 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-[#f56336] rounded-md transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Main Navigation */}
              <div className="text-base font-semibold text-gray-500 mb-3">Main Menu</div>
              {mainNavLinks.map((link) => (
                <div key={link.label} className="mb-1">
                  {link.submenu ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-base text-[#0891b2] hover:bg-cyan-50 hover:text-[#06b6d4] rounded-md font-semibold transition-colors"
                        onClick={() => {
                          setOpenMobileDropdown(openMobileDropdown === link.label ? null : link.label)
                        }}
                      >
                        {link.label}
                        <ChevronDown size={18} className={`transition-transform ${openMobileDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileDropdown === link.label && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-3 text-base text-gray-600 hover:bg-cyan-50 hover:text-[#0891b2] rounded-md transition-colors font-medium"
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
                      href={link.href || '#'}
                      className="block px-4 py-3 text-base text-[#0891b2] hover:bg-cyan-50 hover:text-[#06b6d4] rounded-md font-semibold transition-colors"
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
                  href="tel:+919999456455"
                  className="flex items-center space-x-2 px-4 py-3.5 text-base text-gray-700 font-semibold hover:bg-orange-50 hover:text-[#f56336] rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={22} />
                  <span>+91 99994 56455</span>
                </a>
                <a
                  href="tel:+919910024564"
                  className="flex items-center space-x-2 px-4 py-3.5 text-base text-gray-700 font-semibold hover:bg-orange-50 hover:text-[#f56336] rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={22} />
                  <span>+91 99100 24564</span>
                </a>
                <Link
                  href="/appointment"
                  className="relative block w-full text-white px-4 py-3.5 rounded-lg font-bold text-base text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 transform active:scale-95 overflow-hidden group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-black via-[#0e7490] via-[#0891b2] via-[#06b6d4] via-[#22d3ee] via-[#06b6d4] via-[#0891b2] via-[#0e7490] to-black bg-[length:300%_100%] animate-gradient-smooth"></span>
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
