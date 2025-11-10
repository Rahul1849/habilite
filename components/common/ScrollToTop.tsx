'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 lg:bottom-10 lg:right-10 z-[9998] bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white p-3 sm:p-3.5 md:p-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Scroll to top"
        >
          <ArrowUp 
            size={20}
            className="sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-translate-y-1" 
          />
        </button>
      )}
    </>
  )
}

