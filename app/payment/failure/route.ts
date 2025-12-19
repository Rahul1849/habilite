/**
 * PayU Failure Callback Route Handler
 * Accepts POST from PayU and redirects to the failure page with GET parameters
 */

import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * POST /payment/failure
 * Handles PayU POST callback and redirects to failure page
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

    // Redirect to the failure page with query parameters
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin
    const redirectUrl = `${baseUrl}/payment/failure?${params.toString()}`

    return NextResponse.redirect(redirectUrl, 302)
  } catch (error) {
    console.error('[PayU Failure Route] Error handling POST:', error)
    // Fallback: redirect to failure page anyway
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin
    return NextResponse.redirect(`${baseUrl}/payment/failure`, 302)
  }
}

/**
 * GET /payment/failure
 * Allow direct access to failure page
 */
export async function GET() {
  // This will be handled by the page.tsx file
  return NextResponse.next()
}

