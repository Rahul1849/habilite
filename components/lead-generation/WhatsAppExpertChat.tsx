'use client'

import { MessageCircle } from 'lucide-react'

interface WhatsAppExpertChatProps {
  serviceName?: string
}

export default function WhatsAppExpertChat({ serviceName }: WhatsAppExpertChatProps) {
  const whatsappNumber = '919910024564'
  const defaultMessage = serviceName 
    ? `Hello, I would like to know more about ${serviceName} and chat with an expert.`
    : 'Hello, I would like to chat with an expert about my treatment options.'

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 md:p-8 shadow-lg my-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="text-white" size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Chat with Expert for Free</h3>
            <p className="text-green-50">
              Get instant answers to your questions from our medical experts via WhatsApp
            </p>
          </div>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <MessageCircle size={24} />
          <span>Start Chat Now</span>
        </a>
      </div>
    </div>
  )
}

