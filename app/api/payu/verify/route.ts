/**
 * PayU Payment Verification API Route
 * Verifies payment callback from PayU and sends email notification
 * 
 * This route handles POST requests from PayU after payment completion
 */

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { verifyPayUHash } from '@/lib/payu/utils'
import type { PayUCallbackData, PayUVerificationResponse } from '@/lib/payu/types'

// Route segment config
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * POST /api/payu/verify
 * Verifies PayU payment callback
 */
export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    const merchantKey = process.env.PAYU_MERCHANT_KEY
    const merchantSalt = process.env.PAYU_MERCHANT_SALT

    if (!merchantKey || !merchantSalt) {
      console.error('[PayU Verify API] Missing environment variables')
      return NextResponse.json(
        {
          success: false,
          verified: false,
          error: 'Payment gateway configuration error',
        } as PayUVerificationResponse,
        { status: 500 }
      )
    }

    // Parse request body (PayU sends form data)
    let body: PayUCallbackData
    try {
      // PayU sends data as form-urlencoded, but Next.js can parse it
      const formData = await request.formData()
      
      // Convert FormData to object
      body = {
        txnid: formData.get('txnid') as string,
        amount: formData.get('amount') as string,
        productinfo: formData.get('productinfo') as string,
        firstname: formData.get('firstname') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        status: formData.get('status') as string,
        hash: formData.get('hash') as string,
        mihpayid: formData.get('mihpayid') as string || undefined,
        mode: formData.get('mode') as string || undefined,
        bank_ref_num: formData.get('bank_ref_num') as string || undefined,
        bankcode: formData.get('bankcode') as string || undefined,
        error: formData.get('error') as string || undefined,
        error_Message: formData.get('error_Message') as string || undefined,
        PG_TYPE: formData.get('PG_TYPE') as string || undefined,
        cardnum: formData.get('cardnum') as string || undefined,
        name_on_card: formData.get('name_on_card') as string || undefined,
        cardhash: formData.get('cardhash') as string || undefined,
        net_amount_debit: formData.get('net_amount_debit') as string || undefined,
        discount: formData.get('discount') as string || undefined,
        addedon: formData.get('addedon') as string || undefined,
        payment_source: formData.get('payment_source') as string || undefined,
        payment_mode: formData.get('payment_mode') as string || undefined,
      }
    } catch (error) {
      // Try JSON format as fallback
      try {
        body = await request.json()
      } catch (jsonError) {
        console.error('[PayU Verify API] Failed to parse request:', error)
        return NextResponse.json(
          {
            success: false,
            verified: false,
            error: 'Invalid request format',
          } as PayUVerificationResponse,
          { status: 400 }
        )
      }
    }

    // Validate required fields
    if (!body.txnid || !body.amount || !body.status || !body.hash) {
      console.error('[PayU Verify API] Missing required fields:', {
        hasTxnid: !!body.txnid,
        hasAmount: !!body.amount,
        hasStatus: !!body.status,
        hasHash: !!body.hash,
      })
      return NextResponse.json(
        {
          success: false,
          verified: false,
          error: 'Missing required payment data',
        } as PayUVerificationResponse,
        { status: 400 }
      )
    }

    // Verify hash
    const isHashValid = verifyPayUHash({
      status: body.status,
      salt: merchantSalt,
      txnid: body.txnid,
      amount: body.amount,
      key: merchantKey,
      receivedHash: body.hash,
    })

    if (!isHashValid) {
      console.error('[PayU Verify API] Hash verification failed:', {
        txnid: body.txnid,
        status: body.status,
      })
      return NextResponse.json(
        {
          success: false,
          verified: false,
          error: 'Hash verification failed',
        } as PayUVerificationResponse,
        { status: 400 }
      )
    }

    // Check payment status
    const isSuccess = body.status === 'success'
    const amount = parseFloat(body.amount) / 100 // Convert from paise to rupees

    // Log payment verification
    console.log('[PayU Verify API] Payment verified:', {
      txnid: body.txnid,
      status: body.status,
      amount,
      isSuccess,
      mihpayid: body.mihpayid,
    })

    // Send email notification if payment successful
    if (isSuccess) {
      try {
        // Get email configuration
        const apiKey = process.env.RESEND_API_KEY
        const fromEmail = process.env.RESEND_FROM_EMAIL?.replace(/^["']|["']$/g, '') || 'Habilite Clinics <no-reply@habiliteclinics.com>'
        const toEmail = process.env.RESEND_TO_EMAIL?.replace(/^["']|["']$/g, '') || 'contact@habiliteclinics.com'

        if (!apiKey) {
          console.warn('[PayU Verify API] RESEND_API_KEY not configured, skipping email notification')
        } else {
          // Parse productinfo to extract payment details
          // Format: "Payment Type - Date - Category" or "Payment Type"
          const productInfo = body.productinfo || ''
          let appointmentDate: string | undefined
          let consultationType: string | undefined

          // Try to extract date and category from productinfo
          // Example: "Appointment Booking - 15 Jan 2024 - General Consultation"
          const parts = productInfo.split(' - ')
          if (parts.length >= 2) {
            // Try to parse date (format: "15 Jan 2024")
            const datePart = parts[1]
            if (datePart && datePart.match(/\d{1,2}\s+\w{3}\s+\d{4}/)) {
              try {
                const parsedDate = new Date(datePart)
                if (!isNaN(parsedDate.getTime())) {
                  appointmentDate = parsedDate.toISOString().split('T')[0]
                }
              } catch (e) {
                // Date parsing failed, ignore
              }
            }
            // Category might be in the last part
            if (parts.length >= 3) {
              consultationType = parts[2]
            }
          }

          // Determine payment type from productinfo
          const isVideoConsultation = productInfo.toLowerCase().includes('video consultation')
          const paymentTypeLabel = isVideoConsultation ? 'Video Consultation' : 'Appointment Booking'

          // Format date for display
          const dateStr = appointmentDate
            ? new Date(appointmentDate).toLocaleDateString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : 'Not specified'

          // Build email HTML
          const emailHTML = `
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
                .payment-success { background: #10b981; color: white; padding: 12px; border-radius: 4px; margin-bottom: 20px; text-align: center; font-weight: bold; }
                .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>Payment Successful - ${paymentTypeLabel}</h2>
                </div>
                <div class="content">
                  <div class="payment-success">✓ Payment Received Successfully</div>
                  
                  <div class="field">
                    <span class="label">Name:</span>
                    <div class="value">${body.firstname}</div>
                  </div>
                  
                  <div class="field">
                    <span class="label">Phone:</span>
                    <div class="value">${body.phone || 'N/A'}</div>
                  </div>
                  
                  <div class="field">
                    <span class="label">Email:</span>
                    <div class="value">${body.email || 'N/A'}</div>
                  </div>
                  
                  <div class="field">
                    <span class="label">Payment Type:</span>
                    <div class="value">${paymentTypeLabel}</div>
                  </div>
                  
                  ${appointmentDate ? `
                  <div class="field">
                    <span class="label">Preferred Date:</span>
                    <div class="value">${dateStr}</div>
                  </div>
                  ` : ''}
                  
                  ${consultationType ? `
                  <div class="field">
                    <span class="label">Consultation Type:</span>
                    <div class="value">${consultationType}</div>
                  </div>
                  ` : ''}
                  
                  <div class="field">
                    <span class="label">Amount Paid:</span>
                    <div class="value">₹${amount.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div class="field">
                    <span class="label">Transaction ID:</span>
                    <div class="value">${body.txnid}</div>
                  </div>
                  
                  ${body.mihpayid ? `
                  <div class="field">
                    <span class="label">Payment ID:</span>
                    <div class="value">${body.mihpayid}</div>
                  </div>
                  ` : ''}
                  
                  ${body.payment_mode ? `
                  <div class="field">
                    <span class="label">Payment Mode:</span>
                    <div class="value">${body.payment_mode}</div>
                  </div>
                  ` : ''}
                  
                  ${body.bank_ref_num ? `
                  <div class="field">
                    <span class="label">Bank Reference Number:</span>
                    <div class="value">${body.bank_ref_num}</div>
                  </div>
                  ` : ''}
                </div>
                <div class="footer">
                  <p>This payment confirmation was sent from the Habilite Clinics payment system.</p>
                  <p>Payment received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                </div>
              </div>
            </body>
            </html>
          `

          // Build email text (fallback)
          const emailText = `
Payment Successful - ${paymentTypeLabel}

Name: ${body.firstname}
Phone: ${body.phone || 'N/A'}
Email: ${body.email || 'N/A'}
Payment Type: ${paymentTypeLabel}
${appointmentDate ? `Preferred Date: ${dateStr}\n` : ''}${consultationType ? `Consultation Type: ${consultationType}\n` : ''}
Amount Paid: ₹${amount.toLocaleString('en-IN')}
Transaction ID: ${body.txnid}
${body.mihpayid ? `Payment ID: ${body.mihpayid}\n` : ''}${body.payment_mode ? `Payment Mode: ${body.payment_mode}\n` : ''}${body.bank_ref_num ? `Bank Reference Number: ${body.bank_ref_num}\n` : ''}

Payment received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          `.trim()

          // Send email using Resend
          const resend = new Resend(apiKey)
          const emailResult = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            subject: `Payment Successful - ${paymentTypeLabel} - ${body.firstname}`,
            html: emailHTML,
            text: emailText,
          })

          if (emailResult.error) {
            console.error('[PayU Verify API] Failed to send payment confirmation email:', emailResult.error)
          } else {
            console.log('[PayU Verify API] Payment confirmation email sent successfully:', emailResult.data?.id)
          }
        }
      } catch (emailError) {
        console.error('[PayU Verify API] Error sending payment confirmation email:', emailError)
        // Don't fail the payment verification if email fails
      }
    }

    const response: PayUVerificationResponse = {
      success: true,
      verified: true,
      message: isSuccess ? 'Payment verified successfully' : 'Payment failed',
      transactionId: body.txnid,
      amount,
      status: body.status,
    }

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    const err = error as Error
    console.error('[PayU Verify API] Unexpected error:', {
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    })

    return NextResponse.json(
      {
        success: false,
        verified: false,
        error: 'Payment verification failed',
      } as PayUVerificationResponse,
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

