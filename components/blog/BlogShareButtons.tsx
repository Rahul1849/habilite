'use client'

import { useState } from 'react'
import { Share2, MessageCircle, Facebook, Linkedin, Copy, Check } from 'lucide-react'

type BlogShareButtonsProps = {
  title: string
  url: string
  excerpt?: string
  variant?: 'sidebar' | 'mobile'
}

export default function BlogShareButtons({ title, url, excerpt, variant = 'sidebar' }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url

  const handleShare = async (platform: 'whatsapp' | 'facebook' | 'linkedin' | 'copy') => {
    const shareText = `${title}${excerpt ? ` - ${excerpt}` : ''}`
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${shareText} ${fullUrl}`)}`, '_blank')
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`, '_blank')
        break
      case 'copy':
        if (navigator.clipboard) {
          navigator.clipboard.writeText(fullUrl)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }
        break
    }
  }

  if (variant === 'mobile') {
    return (
      <div className="fixed bottom-20 left-0 right-0 z-[9998] lg:hidden px-4">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-900 flex items-center">
              <Share2 className="mr-2 text-[#0891b2]" size={18} />
              Share Article
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => handleShare('whatsapp')}
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20BA5A] transition-colors text-xs"
              aria-label="Share on WhatsApp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 bg-[#1877F2] text-white rounded-lg font-medium hover:bg-[#166FE5] transition-colors text-xs"
              aria-label="Share on Facebook"
            >
              <Facebook size={18} />
              <span>Facebook</span>
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 bg-[#0A66C2] text-white rounded-lg font-medium hover:bg-[#095195] transition-colors text-xs"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-xs"
              aria-label="Copy link"
            >
              {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <Share2 className="mr-2 text-[#0891b2]" size={20} />
        Share this article
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => handleShare('whatsapp')}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20BA5A] transition-colors"
          aria-label="Share on WhatsApp"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">WhatsApp</span>
        </button>
        <button
          onClick={() => handleShare('facebook')}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1877F2] text-white rounded-lg font-medium hover:bg-[#166FE5] transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook size={18} />
          <span className="hidden sm:inline">Facebook</span>
        </button>
        <button
          onClick={() => handleShare('linkedin')}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0A66C2] text-white rounded-lg font-medium hover:bg-[#095195] transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={18} />
          <span className="hidden sm:inline">LinkedIn</span>
        </button>
        <button
          onClick={() => handleShare('copy')}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          aria-label="Copy link"
        >
          {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
          <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  )
}



