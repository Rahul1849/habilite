import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// In-memory rate limiting store
// For production, consider using Vercel KV or Redis
interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds
const MAX_REQUESTS_PER_HOUR = 3

// Clean up old entries periodically (only runs when function is active)
// In serverless, this will run during warm instances
// For production scale, consider using Vercel KV or Redis
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [key, entry] of rateLimitStore.entries()) {
      if (entry.resetTime < now) {
        rateLimitStore.delete(key)
      }
    }
  }, 10 * 60 * 1000)
}

// Validation and sanitization utilities
function sanitizeString(input: string): string {
  if (typeof input !== 'string') return ''
  // Remove null bytes and trim
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
  // Allow letters, spaces, hyphens, apostrophes
  if (!/^[a-zA-Z\s\-'\.]+$/.test(sanitized)) {
    return { valid: false, error: 'Name contains invalid characters' }
  }
  return { valid: true }
}

function validatePhone(phone: string): { valid: boolean; error?: string } {
  const sanitized = sanitizeString(phone)
  if (!sanitized || sanitized.length === 0) {
    return { valid: false, error: 'Phone number is required' }
  }
  // Remove common phone formatting characters
  const cleaned = sanitized.replace(/[\s\-\(\)\+]/g, '')
  // Allow digits, minimum 10, maximum 15
  if (!/^\d{10,15}$/.test(cleaned)) {
    return { valid: false, error: 'Phone number must be 10-15 digits' }
  }
  return { valid: true }
}

function validateMessage(message: string): { valid: boolean; error?: string } {
  const sanitized = sanitizeString(message)
  if (!sanitized || sanitized.length === 0) {
    return { valid: false, error: 'Message is required' }
  }
  if (sanitized.length < 10) {
    return { valid: false, error: 'Message must be at least 10 characters' }
  }
  if (sanitized.length > 2000) {
    return { valid: false, error: 'Message must be less than 2000 characters' }
  }
  return { valid: true }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

function getClientIP(request: NextRequest): string {
  // Try to get IP from various headers (for Vercel/proxies)
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  const realIP = request.headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }
  // Fallback (won't work in serverless, but good for local dev)
  return 'unknown'
}

function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry || entry.resetTime < now) {
    // Create new entry or reset expired one
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    })
    return { allowed: true }
  }

  if (entry.count >= MAX_REQUESTS_PER_HOUR) {
    return { allowed: false, resetTime: entry.resetTime }
  }

  // Increment count
  entry.count++
  rateLimitStore.set(ip, entry)
  return { allowed: true }
}

// Initialize Nodemailer transporter
function createTransporter() {
  const host = process.env.EMAIL_HOST
  const port = process.env.EMAIL_PORT
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS

  if (!host || !port || !user || !pass) {
    throw new Error('Email configuration is missing. Please check environment variables.')
  }

  return nodemailer.createTransport({
    host,
    port: parseInt(port, 10),
    secure: false, // Use TLS
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false, // Accept self-signed certificates if needed
    },
  })
}

// Placeholder for WhatsApp Cloud API (Phase 2)
async function sendWhatsAppNotification(name: string, phone: string, message: string): Promise<void> {
  // TODO: Implement WhatsApp Cloud API integration
  // This is a placeholder that will be implemented in Phase 2
  // If this fails, it should not stop the email from being sent
  try {
    // Future implementation here
    console.log('[WhatsApp] Placeholder - Would send notification for:', { name, phone })
  } catch (error) {
    // Log error but don't throw
    console.error('[WhatsApp] Error (non-blocking):', error)
  }
}

async function sendEmail(name: string, phone: string, message: string): Promise<void> {
  const transporter = createTransporter()
  const sanitizedName = escapeHtml(name)
  const sanitizedPhone = escapeHtml(phone)
  const sanitizedMessage = escapeHtml(message)

  const htmlContent = `
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
          .label { font-weight: bold; color: #0891b2; margin-bottom: 5px; display: block; }
          .value { color: #1f2937; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #0891b2; margin-top: 10px; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">New Consultation Request</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${sanitizedName}</span>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <span class="value">${sanitizedPhone}</span>
            </div>
            <div class="field">
              <span class="label">Message:</span>
              <div class="message-box">
                <p style="margin: 0; white-space: pre-wrap;">${sanitizedMessage}</p>
              </div>
            </div>
            <div class="field" style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 12px; color: #6b7280;">
                This consultation request was submitted through the Habilite Clinics website.
              </p>
            </div>
          </div>
          <div class="footer">
            <p>Habilite Clinics - Consultation Form</p>
          </div>
        </div>
      </body>
    </html>
  `

  const textContent = `
New Consultation Request

Name: ${name}
Phone: ${phone}

Message:
${message}

---
This consultation request was submitted through the Habilite Clinics website.
  `

  await transporter.sendMail({
    from: `"Habilite Clinics Website" <${process.env.EMAIL_USER}>`,
    to: 'contact@habiliteclinics.com',
    subject: `New Consultation Request from ${sanitizedName}`,
    text: textContent,
    html: htmlContent,
  })
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request)

    // Check rate limit
    const rateLimitCheck = checkRateLimit(clientIP)
    if (!rateLimitCheck.allowed) {
      const resetTime = rateLimitCheck.resetTime
      const resetDate = resetTime ? new Date(resetTime).toISOString() : 'soon'
      console.warn(`[Rate Limit] IP ${clientIP} exceeded limit. Resets at: ${resetDate}`)
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please try again later.',
          resetTime: resetDate,
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    let body
    try {
      body = await request.json()
    } catch (error) {
      console.error('[API] Invalid JSON in request body:', error)
      return NextResponse.json(
        { success: false, error: 'Invalid request format' },
        { status: 400 }
      )
    }

    const { name, phone, message } = body

    // Validate fields
    const nameValidation = validateName(name)
    if (!nameValidation.valid) {
      return NextResponse.json(
        { success: false, error: nameValidation.error },
        { status: 400 }
      )
    }

    const phoneValidation = validatePhone(phone)
    if (!phoneValidation.valid) {
      return NextResponse.json(
        { success: false, error: phoneValidation.error },
        { status: 400 }
      )
    }

    const messageValidation = validateMessage(message)
    if (!messageValidation.valid) {
      return NextResponse.json(
        { success: false, error: messageValidation.error },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeString(name)
    const sanitizedPhone = sanitizeString(phone)
    const sanitizedMessage = sanitizeString(message)

    // Send email (primary action)
    try {
      await sendEmail(sanitizedName, sanitizedPhone, sanitizedMessage)
      console.log(`[Email] Successfully sent consultation request from ${sanitizedName} (${sanitizedPhone})`)
    } catch (emailError) {
      // Log error but don't expose details to client
      console.error('[Email] Failed to send consultation email:', emailError)
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to send consultation request. Please try again later or contact us directly.',
        },
        { status: 500 }
      )
    }

    // Send WhatsApp notification (Phase 2 - non-blocking)
    try {
      await sendWhatsAppNotification(sanitizedName, sanitizedPhone, sanitizedMessage)
    } catch (whatsappError) {
      // Log but don't fail the request
      console.error('[WhatsApp] Failed to send notification (non-blocking):', whatsappError)
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your consultation request has been submitted successfully. We will contact you shortly.',
      },
      { status: 200 }
    )
  } catch (error) {
    // Log error but don't expose stack trace or sensitive info
    console.error('[API] Unexpected error in consultation endpoint:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
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

