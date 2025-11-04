'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppFloat() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'
  const message = encodeURIComponent('Hello, I would like to book an appointment.')

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  )
}
