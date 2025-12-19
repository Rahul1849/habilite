/**
 * PayU Success Callback Route Handler
 * Accepts POST from PayU and redirects to the success page with GET parameters
 */

import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * POST /payment/success
 * Handles PayU POST callback and redirects to success page
 */
export async function POST(request: NextRequest) {
  try {
    // Parse form data from PayU
    const formData = await request.formData()
    
    // Convert FormData to URL search params
    const params = new URLSearchParams()
    formData.forEach((value, key) => {
      if (value && typeof value === 'string') {
        params.append(key, value)
      }
    })

    // Redirect to the success page with query parameters
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin
    const redirectUrl = `${baseUrl}/payment/success?${params.toString()}`

    return NextResponse.redirect(redirectUrl, 302)
  } catch (error) {
    console.error('[PayU Success Route] Error handling POST:', error)
    // Fallback: redirect to success page anyway
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin
    return NextResponse.redirect(`${baseUrl}/payment/success`, 302)
  }
}

/**
 * GET /payment/success
 * Allow direct access to success page
 */
export async function GET() {
  // This will be handled by the page.tsx file
  return NextResponse.next()
}

