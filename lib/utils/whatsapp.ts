/**
 * Utility functions for WhatsApp integration
 */

const WHATSAPP_NUMBER = '919999456455' // Primary WhatsApp number

export interface WhatsAppFormData {
  formType: 'consultation' | 'appointment' | 'contact' | 'ask-surgeon' | 'best-treatment'
  name: string
  phone?: string
  email?: string
  serviceName?: string
  preferredDate?: string
  consultationType?: string
  subject?: string
  message?: string
  query?: string
  // Additional fields for specific forms
  age?: string
  currentWeight?: string
  height?: string
  weightGoal?: string
  conditions?: string
  programHistory?: string
  question?: string
  contact?: string
}

/**
 * Formats form data into a WhatsApp message
 */
export function formatWhatsAppMessage(data: WhatsAppFormData): string {
  const parts: string[] = []
  
  // Add form type header
  const formTypeLabels: Record<string, string> = {
    'consultation': '📋 Consultation Request',
    'appointment': '📅 Appointment Request',
    'contact': '💬 Contact Form Submission',
    'ask-surgeon': '❓ Ask the Surgeon',
    'best-treatment': '💊 Best Treatment Form'
  }
  
  parts.push(`*${formTypeLabels[data.formType] || 'Form Submission'}*`)
  parts.push('')
  
  // Name (always present)
  parts.push(`*Name:* ${data.name}`)
  
  // Phone
  if (data.phone) {
    parts.push(`*Phone:* ${data.phone}`)
  }
  
  // Email
  if (data.email) {
    parts.push(`*Email:* ${data.email}`)
  }
  
  // Service Name
  if (data.serviceName) {
    parts.push(`*Service:* ${data.serviceName}`)
  }
  
  // Preferred Date
  if (data.preferredDate) {
    const dateStr = new Date(data.preferredDate).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    parts.push(`*Preferred Date:* ${dateStr}`)
  }
  
  // Consultation Type / Subject
  if (data.consultationType) {
    parts.push(`*Consultation Type:* ${data.consultationType}`)
  }
  if (data.subject) {
    parts.push(`*Subject:* ${data.subject}`)
  }
  
  // Best Treatment Form specific fields
  if (data.age) {
    parts.push(`*Age:* ${data.age} years`)
  }
  if (data.currentWeight) {
    parts.push(`*Current Weight:* ${data.currentWeight} kg`)
  }
  if (data.height) {
    parts.push(`*Height:* ${data.height}`)
  }
  if (data.weightGoal) {
    parts.push(`*Weight Goal:* ${data.weightGoal} kg`)
  }
  if (data.conditions) {
    parts.push(`*Conditions:* ${data.conditions}`)
  }
  if (data.programHistory) {
    parts.push(`*Program History:* ${data.programHistory}`)
  }
  
  // Ask Surgeon specific fields
  if (data.question) {
    parts.push('')
    parts.push(`*Question:*`)
    parts.push(data.question)
  }
  if (data.contact) {
    parts.push(`*Contact:* ${data.contact}`)
  }
  
  // Message / Query
  if (data.message) {
    parts.push('')
    parts.push(`*Message:*`)
    parts.push(data.message)
  }
  if (data.query) {
    parts.push('')
    parts.push(`*Query:*`)
    parts.push(data.query)
  }
  
  return parts.join('\n')
}

/**
 * Generates WhatsApp URL with pre-filled message
 */
export function generateWhatsAppUrl(data: WhatsAppFormData, phoneNumber: string = WHATSAPP_NUMBER): string {
  const message = formatWhatsAppMessage(data)
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

/**
 * Redirects to WhatsApp with pre-filled message
 */
export function redirectToWhatsApp(data: WhatsAppFormData, phoneNumber: string = WHATSAPP_NUMBER): void {
  const url = generateWhatsAppUrl(data, phoneNumber)
  window.open(url, '_blank', 'noopener,noreferrer')
}

