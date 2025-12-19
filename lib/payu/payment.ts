/**
 * PayU Payment Gateway Client
 * Frontend utility for initiating PayU payments
 */

import { generateTransactionId, getPaymentTypeDescription } from './utils'
import type { PayUPaymentRequest, PayUHashResponse } from './types'

/**
 * Initiate PayU payment
 * Generates hash server-side and redirects to PayU hosted checkout
 */
export async function initiatePayUPayment(
  params: Omit<PayUPaymentRequest, 'txnid' | 'surl' | 'furl'>
): Promise<void> {
  try {
    // Generate unique transaction ID
    const txnid = generateTransactionId('PAYU')

    // Get base URL from environment
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin

    // Build success and failure URLs
    // Note: PayU sends POST, so we use API routes that redirect to pages
    const surl = `${baseUrl}/api/payment/success`
    const furl = `${baseUrl}/api/payment/failure`

    // Prepare hash generation request
    const hashRequest = {
      txnid,
      amount: params.amount,
      productinfo: params.productinfo,
      firstname: params.firstname,
      email: params.email,
      phone: params.phone,
      surl,
      furl,
    }

    // Call API to generate hash
    const response = await fetch('/api/payu/generate-hash', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hashRequest),
    })

    const result = await response.json()

    if (!result.success || !result.data) {
      throw new Error(result.error || 'Failed to generate payment hash')
    }

    const paymentData: PayUHashResponse = result.data

    // Get PayU base URL from environment
    // Note: For client-side access, use NEXT_PUBLIC_PAYU_BASE_URL
    // Default to production PayU URL if not set
    const payuBaseUrl = 
      (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_PAYU_BASE_URL)
        ? process.env.NEXT_PUBLIC_PAYU_BASE_URL
        : 'https://secure.payu.in' // Default PayU production URL

    // Create form and submit to PayU
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = `${payuBaseUrl}/_payment`

    // Add all required PayU fields
    const fields = {
      key: paymentData.key,
      txnid: paymentData.txnid,
      amount: paymentData.amount,
      productinfo: paymentData.productinfo,
      firstname: paymentData.firstname,
      email: paymentData.email,
      phone: paymentData.phone,
      surl: paymentData.surl,
      furl: paymentData.furl,
      hash: paymentData.hash,
      service_provider: paymentData.service_provider,
    }

    // Create hidden input fields
    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value
      form.appendChild(input)
    })

    // Append form to body and submit
    document.body.appendChild(form)
    form.submit()
  } catch (error) {
    console.error('[PayU Payment] Error initiating payment:', error)
    throw error
  }
}

/**
 * Format payment product info
 */
export function formatProductInfo(
  paymentType: string,
  appointmentDate?: string,
  category?: string
): string {
  const typeDesc = getPaymentTypeDescription(paymentType)
  let info = typeDesc

  if (appointmentDate) {
    const date = new Date(appointmentDate).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    info += ` - ${date}`
  }

  if (category) {
    info += ` - ${category}`
  }

  return info.substring(0, 100) // PayU limit
}

