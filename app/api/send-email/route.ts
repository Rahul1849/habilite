import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Email configuration
const FROM_EMAIL = 'Habilite Clinics <no-reply@mail.habiliteclinics.com>'
const TO_EMAIL = 'contact@habiliteclinics.com'

// Type definitions for different form types
type FormType = 'appointment' | 'contact' | 'consultation' | 'ask-surgeon'

interface BaseFormData {
  formType: FormType
  name: string
  phone?: string
  email?: string
  message?: string
}

interface AppointmentFormData extends BaseFormData {
  formType: 'appointment'
  preferredDate?: string
  consultationType?: string
  query?: string
}

interface ContactFormData extends BaseFormData {
  formType: 'contact'
  subject: string
}

interface ConsultationFormData extends BaseFormData {
  formType: 'consultation'
  preferredDate?: string
  serviceName?: string
}

interface AskSurgeonFormData extends BaseFormData {
  formType: 'ask-surgeon'
  contact: string
  question: string
}

type EmailFormData = AppointmentFormData | ContactFormData | ConsultationFormData | AskSurgeonFormData

// Validation functions
function sanitizeString(input: string | undefined): string {
  if (!input || typeof input !== 'string') return ''
  return input.replace(/\0/g, '').trim()
}

function validateName(name: string): { valid: boolean; error?: string } {
  const sanitized = sanitizeString(name)
  if (!sanitized || sanitized.length === 0) {
    return { valid: false, error: 'Name is required' }
  }
  if (sanitized.length < 2) {
    return { valid: false, error: 'Name must be at least 2 characters' }
  }
  if (sanitized.length > 100) {
    return { valid: false, error: 'Name must be less than 100 characters' }
  }
  return { valid: true }
}

function validateEmail(email: string | undefined): { valid: boolean; error?: string } {
  if (!email) return { valid: true } // Email is optional for some forms
  const sanitized = sanitizeString(email)
  if (sanitized && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitized)) {
    return { valid: false, error: 'Invalid email format' }
  }
  return { valid: true }
}

function validatePhone(phone: string | undefined): { valid: boolean; error?: string } {
  if (!phone) return { valid: true } // Phone is optional for some forms
  const sanitized = sanitizeString(phone)
  if (sanitized) {
    const cleaned = sanitized.replace(/[\s\-\(\)\+]/g, '')
    if (!/^\d{10,15}$/.test(cleaned)) {
      return { valid: false, error: 'Phone number must be 10-15 digits' }
    }
  }
  return { valid: true }
}

function validateRequired(value: string | undefined, fieldName: string): { valid: boolean; error?: string } {
  const sanitized = sanitizeString(value)
  if (!sanitized || sanitized.length === 0) {
    return { valid: false, error: `${fieldName} is required` }
  }
  return { valid: true }
}

// Build email HTML content
function buildEmailHTML(data: EmailFormData): string {
  const formTypeLabels: Record<FormType, string> = {
    appointment: 'Appointment Booking',
    contact: 'Contact Form Submission',
    consultation: 'Consultation Request',
    'ask-surgeon': 'Ask Surgeon Question',
  }

  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; margin-bottom: 5px; display: block; }
        .value { color: #111827; padding: 8px; background: white; border-radius: 4px; border: 1px solid #d1d5db; }
        .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>${formTypeLabels[data.formType]}</h2>
        </div>
        <div class="content">
  `

  // Common fields
  html += `
          <div class="field">
            <span class="label">Name:</span>
            <div class="value">${sanitizeString(data.name)}</div>
          </div>
  `

  if (data.phone) {
    html += `
          <div class="field">
            <span class="label">Phone:</span>
            <div class="value">${sanitizeString(data.phone)}</div>
          </div>
    `
  }

  if (data.email) {
    html += `
          <div class="field">
            <span class="label">Email:</span>
            <div class="value">${sanitizeString(data.email)}</div>
          </div>
    `
  }

  // Form-specific fields
  if (data.formType === 'appointment') {
    const appointmentData = data as AppointmentFormData
    if (appointmentData.preferredDate) {
      const dateStr = new Date(appointmentData.preferredDate).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      html += `
          <div class="field">
            <span class="label">Preferred Date:</span>
            <div class="value">${dateStr}</div>
          </div>
      `
    }
    if (appointmentData.consultationType) {
      html += `
          <div class="field">
            <span class="label">Consultation Type:</span>
            <div class="value">${sanitizeString(appointmentData.consultationType)}</div>
          </div>
      `
    }
    if (appointmentData.query) {
      html += `
          <div class="field">
            <span class="label">Message/Query:</span>
            <div class="value">${sanitizeString(appointmentData.query).replace(/\n/g, '<br>')}</div>
          </div>
      `
    }
  }

  if (data.formType === 'contact') {
    const contactData = data as ContactFormData
    html += `
          <div class="field">
            <span class="label">Subject:</span>
            <div class="value">${sanitizeString(contactData.subject)}</div>
          </div>
    `
    if (contactData.message) {
      html += `
          <div class="field">
            <span class="label">Message:</span>
            <div class="value">${sanitizeString(contactData.message).replace(/\n/g, '<br>')}</div>
          </div>
      `
    }
  }

  if (data.formType === 'consultation') {
    const consultationData = data as ConsultationFormData
    if (consultationData.serviceName) {
      html += `
          <div class="field">
            <span class="label">Service:</span>
            <div class="value">${sanitizeString(consultationData.serviceName)}</div>
          </div>
      `
    }
    if (consultationData.preferredDate) {
      const dateStr = new Date(consultationData.preferredDate).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      html += `
          <div class="field">
            <span class="label">Preferred Date:</span>
            <div class="value">${dateStr}</div>
          </div>
      `
    }
    if (consultationData.message) {
      html += `
          <div class="field">
            <span class="label">Message:</span>
            <div class="value">${sanitizeString(consultationData.message).replace(/\n/g, '<br>')}</div>
          </div>
      `
    }
  }

  if (data.formType === 'ask-surgeon') {
    const askSurgeonData = data as AskSurgeonFormData
    html += `
          <div class="field">
            <span class="label">Contact:</span>
            <div class="value">${sanitizeString(askSurgeonData.contact)}</div>
          </div>
          <div class="field">
            <span class="label">Question:</span>
            <div class="value">${sanitizeString(askSurgeonData.question).replace(/\n/g, '<br>')}</div>
          </div>
    `
  }

  html += `
        </div>
        <div class="footer">
          <p>This email was sent from the Habilite Clinics website contact form.</p>
          <p>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      </div>
    </body>
    </html>
  `

  return html
}

// Build email text content (fallback)
function buildEmailText(data: EmailFormData): string {
  const formTypeLabels: Record<FormType, string> = {
    appointment: 'Appointment Booking',
    contact: 'Contact Form Submission',
    consultation: 'Consultation Request',
    'ask-surgeon': 'Ask Surgeon Question',
  }

  let text = `${formTypeLabels[data.formType]}\n\n`
  text += `Name: ${sanitizeString(data.name)}\n`

  if (data.phone) text += `Phone: ${sanitizeString(data.phone)}\n`
  if (data.email) text += `Email: ${sanitizeString(data.email)}\n`

  if (data.formType === 'appointment') {
    const appointmentData = data as AppointmentFormData
    if (appointmentData.preferredDate) {
      const dateStr = new Date(appointmentData.preferredDate).toLocaleDateString('en-IN')
      text += `Preferred Date: ${dateStr}\n`
    }
    if (appointmentData.consultationType) text += `Consultation Type: ${sanitizeString(appointmentData.consultationType)}\n`
    if (appointmentData.query) text += `Message/Query: ${sanitizeString(appointmentData.query)}\n`
  }

  if (data.formType === 'contact') {
    const contactData = data as ContactFormData
    text += `Subject: ${sanitizeString(contactData.subject)}\n`
    if (contactData.message) text += `Message: ${sanitizeString(contactData.message)}\n`
  }

  if (data.formType === 'consultation') {
    const consultationData = data as ConsultationFormData
    if (consultationData.serviceName) text += `Service: ${sanitizeString(consultationData.serviceName)}\n`
    if (consultationData.preferredDate) {
      const dateStr = new Date(consultationData.preferredDate).toLocaleDateString('en-IN')
      text += `Preferred Date: ${dateStr}\n`
    }
    if (consultationData.message) text += `Message: ${sanitizeString(consultationData.message)}\n`
  }

  if (data.formType === 'ask-surgeon') {
    const askSurgeonData = data as AskSurgeonFormData
    text += `Contact: ${sanitizeString(askSurgeonData.contact)}\n`
    text += `Question: ${sanitizeString(askSurgeonData.question)}\n`
  }

  text += `\nSubmitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`

  return text
}

// Get email subject
function getEmailSubject(data: EmailFormData): string {
  const formTypeLabels: Record<FormType, string> = {
    appointment: 'New Appointment Booking',
    contact: 'New Contact Form Submission',
    consultation: 'New Consultation Request',
    'ask-surgeon': 'New Question for Surgeon',
  }

  const name = sanitizeString(data.name)
  return `${formTypeLabels[data.formType]} - ${name}`
}

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey || apiKey.trim() === '') {
      const errorMsg = 'Email service is not configured. Please contact support.'
      const details = 'RESEND_API_KEY environment variable is missing. Please add it to your Vercel environment variables.'
      
      console.error('[Send Email API] RESEND_API_KEY is not configured', {
        nodeEnv: process.env.NODE_ENV,
        hasApiKey: !!apiKey,
        apiKeyLength: apiKey?.length || 0,
        timestamp: new Date().toISOString()
      })
      
      return NextResponse.json(
        { 
          success: false, 
          error: errorMsg,
          details: details // Always include details for debugging
        },
        { status: 500 }
      )
    }

    // Parse request body
    let body: EmailFormData
    try {
      body = await request.json()
    } catch (error) {
      console.error('[Send Email API] Invalid JSON in request body:', error)
      return NextResponse.json(
        { success: false, error: 'Invalid request format' },
        { status: 400 }
      )
    }

    // Validate form type
    if (!body.formType || !['appointment', 'contact', 'consultation', 'ask-surgeon'].includes(body.formType)) {
      return NextResponse.json(
        { success: false, error: 'Invalid form type' },
        { status: 400 }
      )
    }

    // Validate required fields based on form type
    const nameValidation = validateName(body.name)
    if (!nameValidation.valid) {
      return NextResponse.json(
        { success: false, error: nameValidation.error },
        { status: 400 }
      )
    }

    // Form-specific validation
    if (body.formType === 'contact') {
      const contactData = body as ContactFormData
      const emailValidation = validateEmail(contactData.email)
      if (!emailValidation.valid) {
        return NextResponse.json(
          { success: false, error: emailValidation.error },
          { status: 400 }
        )
      }
      const phoneValidation = validatePhone(contactData.phone)
      if (!phoneValidation.valid) {
        return NextResponse.json(
          { success: false, error: phoneValidation.error },
          { status: 400 }
        )
      }
      const subjectValidation = validateRequired(contactData.subject, 'Subject')
      if (!subjectValidation.valid) {
        return NextResponse.json(
          { success: false, error: subjectValidation.error },
          { status: 400 }
        )
      }
      const messageValidation = validateRequired(contactData.message, 'Message')
      if (!messageValidation.valid) {
        return NextResponse.json(
          { success: false, error: messageValidation.error },
          { status: 400 }
        )
      }
    }

    if (body.formType === 'appointment') {
      const appointmentData = body as AppointmentFormData
      const phoneValidation = validatePhone(appointmentData.phone)
      if (!phoneValidation.valid) {
        return NextResponse.json(
          { success: false, error: phoneValidation.error },
          { status: 400 }
        )
      }
      const dateValidation = validateRequired(appointmentData.preferredDate, 'Preferred Date')
      if (!dateValidation.valid) {
        return NextResponse.json(
          { success: false, error: dateValidation.error },
          { status: 400 }
        )
      }
    }

    if (body.formType === 'consultation') {
      const consultationData = body as ConsultationFormData
      const phoneValidation = validatePhone(consultationData.phone)
      if (!phoneValidation.valid) {
        return NextResponse.json(
          { success: false, error: phoneValidation.error },
          { status: 400 }
        )
      }
    }

    if (body.formType === 'ask-surgeon') {
      const askSurgeonData = body as AskSurgeonFormData
      const contactValidation = validateRequired(askSurgeonData.contact, 'Contact')
      if (!contactValidation.valid) {
        return NextResponse.json(
          { success: false, error: contactValidation.error },
          { status: 400 }
        )
      }
      const questionValidation = validateRequired(askSurgeonData.question, 'Question')
      if (!questionValidation.valid) {
        return NextResponse.json(
          { success: false, error: questionValidation.error },
          { status: 400 }
        )
      }
    }

    // Validate optional fields if provided
    if (body.email) {
      const emailValidation = validateEmail(body.email)
      if (!emailValidation.valid) {
        return NextResponse.json(
          { success: false, error: emailValidation.error },
          { status: 400 }
        )
      }
    }

    // Build email content
    const subject = getEmailSubject(body)
    const html = buildEmailHTML(body)
    const text = buildEmailText(body)

    // Initialize Resend client (inside function to avoid build-time issues)
    const resend = new Resend(apiKey)

    // Send email using Resend
    try {
      const result = await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject,
        html,
        text,
      })

      if (result.error) {
        console.error('[Send Email API] Resend error:', {
          error: result.error,
          message: result.error.message,
          name: result.error.name
        })
        return NextResponse.json(
          { 
            success: false, 
            error: 'Failed to send email. Please try again later.',
            ...(process.env.NODE_ENV === 'development' && { 
              debug: result.error.message || 'Unknown Resend error' 
            })
          },
          { status: 500 }
        )
      }

      console.log('[Send Email API] Email sent successfully:', result.data?.id)

      return NextResponse.json(
        {
          success: true,
          message: 'Your message has been sent successfully. We will contact you shortly.',
        },
        { status: 200 }
      )
    } catch (resendError) {
      const error = resendError as Error
      console.error('[Send Email API] Resend exception:', {
        message: error.message,
        name: error.name,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send email. Please try again later.',
          ...(process.env.NODE_ENV === 'development' && { 
            debug: error.message || 'Unknown error occurred' 
          })
        },
        { status: 500 }
      )
    }
  } catch (error) {
    const err = error as Error
    console.error('[Send Email API] Unexpected error:', {
      message: err.message,
      name: err.name,
      stack: err.stack,
      timestamp: new Date().toISOString()
    })
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      },
      { status: 500 }
    )
  }
}

// Reject all other HTTP methods
export async function GET() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function PATCH() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  )
}

