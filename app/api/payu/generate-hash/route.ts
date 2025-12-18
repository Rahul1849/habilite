/**
 * PayU Hash Generation API Route
 * Generates secure hash for PayU payment gateway
 * 
 * This route is server-side only and never exposes secrets to the client
 */

import { NextRequest, NextResponse } from 'next/server'
import { generatePayUHash, formatAmount, sanitizeProductInfo } from '@/lib/payu/utils'
import type { PayUHashRequest, PayUHashResponse } from '@/lib/payu/types'

// Route segment config
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * POST /api/payu/generate-hash
 * Generates PayU hash for payment request
 */
export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    const merchantKey = process.env.PAYU_MERCHANT_KEY
    const merchantSalt = process.env.PAYU_MERCHANT_SALT
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    if (!merchantKey || !merchantSalt) {
      console.error('[PayU Hash API] Missing environment variables')
      return NextResponse.json(
        {
          success: false,
          error: 'Payment gateway configuration error',
        },
        { status: 500 }
      )
    }

    if (!baseUrl) {
      console.error('[PayU Hash API] Missing NEXT_PUBLIC_BASE_URL')
      return NextResponse.json(
        {
          success: false,
          error: 'Base URL not configured',
        },
        { status: 500 }
      )
    }

    // Parse request body
    let body: PayUHashRequest
    try {
      body = await request.json()
    } catch (error) {
      console.error('[PayU Hash API] Invalid JSON:', error)
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request format',
        },
        { status: 400 }
      )
    }

    // Validate required fields
    const requiredFields = ['txnid', 'amount', 'productinfo', 'firstname', 'email', 'phone', 'surl', 'furl']
    for (const field of requiredFields) {
      if (!body[field as keyof PayUHashRequest]) {
        return NextResponse.json(
          {
            success: false,
            error: `Missing required field: ${field}`,
          },
          { status: 400 }
        )
      }
    }

    // Validate amount
    const amount = parseFloat(body.amount.toString())
    if (isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid amount',
        },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email format',
        },
        { status: 400 }
      )
    }

    // Sanitize product info
    const sanitizedProductInfo = sanitizeProductInfo(body.productinfo)

    // Format amount (convert to paise)
    const formattedAmount = formatAmount(amount)

    // Generate PayU hash
    const hash = generatePayUHash({
      key: merchantKey,
      txnid: body.txnid,
      amount: formattedAmount,
      productinfo: sanitizedProductInfo,
      firstname: body.firstname,
      email: body.email,
      salt: merchantSalt,
      phone: body.phone,
    })

    // Prepare response with all required PayU fields
    const response: PayUHashResponse = {
      hash,
      key: merchantKey,
      txnid: body.txnid,
      amount: formattedAmount,
      productinfo: sanitizedProductInfo,
      firstname: body.firstname,
      email: body.email,
      phone: body.phone,
      surl: body.surl,
      furl: body.furl,
      service_provider: 'payu_paisa',
    }

    console.log('[PayU Hash API] Hash generated successfully:', {
      txnid: body.txnid,
      amount: formattedAmount,
      hasHash: !!hash,
    })

    return NextResponse.json(
      {
        success: true,
        data: response,
      },
      { status: 200 }
    )
  } catch (error) {
    const err = error as Error
    console.error('[PayU Hash API] Unexpected error:', {
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    })

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate payment hash',
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

