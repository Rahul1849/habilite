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
  
  // Form type labels for identification
  const formTypeLabels: Record<string, string> = {
    'consultation': 'Consultation Form',
    'appointment': 'Appointment Form',
    'contact': 'Contact Form',
    'ask-surgeon': 'Ask the Surgeon Form',
    'best-treatment': 'Best Treatment Form'
  }
  
  // Start with greeting
  parts.push('Hello Habilite Clinics,')
  parts.push('')
  parts.push('I would like to enquire through your website. Please find my details below:')
  parts.push('')
  
  // Form Type - Important for identification
  parts.push(`Form Submitted: ${formTypeLabels[data.formType] || 'Website Form'}`)
  parts.push('')
  
  // Name (always present)
  parts.push(`Name: ${data.name}`)
  
  // Mobile/Phone
  if (data.phone) {
    parts.push(`Mobile: ${data.phone}`)
  } else if (data.contact) {
    // For ask-surgeon form, contact field might be phone or email
    parts.push(`Mobile: ${data.contact}`)
  }
  
  // Email
  if (data.email) {
    parts.push(`Email: ${data.email}`)
  } else if (data.contact && data.contact.includes('@')) {
    // For ask-surgeon form, if contact is email
    parts.push(`Email: ${data.contact}`)
  }
  
  // Service Name
  if (data.serviceName) {
    parts.push(`Service: ${data.serviceName}`)
  }
  
  // Preferred Date
  if (data.preferredDate) {
    const dateStr = new Date(data.preferredDate).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    parts.push(`Preferred Date: ${dateStr}`)
  }
  
  // Consultation Type / Subject
  if (data.consultationType) {
    parts.push(`Consultation Type: ${data.consultationType}`)
  }
  if (data.subject) {
    parts.push(`Subject: ${data.subject}`)
  }
  
  // Best Treatment Form specific fields
  if (data.age) {
    parts.push(`Age: ${data.age} years`)
  }
  if (data.currentWeight) {
    parts.push(`Current Weight: ${data.currentWeight} kg`)
  }
  if (data.height) {
    parts.push(`Height: ${data.height}`)
  }
  if (data.weightGoal) {
    parts.push(`Weight Goal: ${data.weightGoal} kg`)
  }
  if (data.conditions) {
    parts.push(`Conditions: ${data.conditions}`)
  }
  if (data.programHistory) {
    parts.push(`Program History: ${data.programHistory}`)
  }
  
  // Ask Surgeon - Contact field (if not already used as phone/email)
  if (data.contact && !data.phone && !data.email) {
    parts.push(`Contact: ${data.contact}`)
  }
  
  // Message section
  const messageParts: string[] = []
  
  // Question (for ask-surgeon form)
  if (data.question) {
    messageParts.push(data.question)
  }
  
  // Message
  if (data.message) {
    messageParts.push(data.message)
  }
  
  // Query
  if (data.query) {
    messageParts.push(data.query)
  }
  
  // Add message section if there's any message content
  if (messageParts.length > 0) {
    parts.push('')
    parts.push('Message:')
    parts.push(messageParts.join('\n\n'))
  }
  
  // Closing
  parts.push('')
  parts.push('Thank you.')
  
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

