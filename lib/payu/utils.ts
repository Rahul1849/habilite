/**
 * PayU Payment Gateway Utilities
 * Helper functions for PayU integration
 */

import crypto from 'crypto'

/**
 * Generate a unique transaction ID
 * Format: APP{timestamp}{random}
 */
export function generateTransactionId(prefix: string = 'TXN'): string {
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `${prefix}${timestamp}${random}`
}

/**
 * Generate PayU hash for payment request
 * Hash format: SHA512(key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10|salt)
 */
export function generatePayUHash(params: {
  key: string
  txnid: string
  amount: string
  productinfo: string
  firstname: string
  email: string
  salt: string
  phone?: string
}): string {
  const {
    key,
    txnid,
    amount,
    productinfo,
    firstname,
    email,
    salt,
    phone = '',
  } = params

  // PayU hash string format
  const hashString = [
    key,
    txnid,
    amount,
    productinfo,
    firstname,
    email,
    '', // udf1
    '', // udf2
    '', // udf3
    '', // udf4
    '', // udf5
    '', // udf6
    '', // udf7
    '', // udf8
    '', // udf9
    '', // udf10
    salt,
  ].join('|')

  // Generate SHA512 hash
  const hash = crypto.createHash('sha512').update(hashString).digest('hex')
  return hash
}

/**
 * Verify PayU callback hash
 * Hash format: SHA512(status|salt|txnid|amount|key)
 * 
 * Note: PayU sends amount as decimal string (e.g., "1.00"), and the hash
 * must match exactly. We normalize the amount to ensure consistent comparison.
 * 
 * Some PayU implementations might use slightly different formats, so we try
 * multiple variations if the standard format fails.
 */
export function verifyPayUHash(params: {
  status: string
  salt: string
  txnid: string
  amount: string
  key: string
  receivedHash: string
}): boolean {
  const { status, salt, txnid, amount, key, receivedHash } = params

  // Normalize amount: ensure it's a decimal string with 2 decimal places
  // PayU sends amounts like "1.00", "100.00", etc.
  let normalizedAmount = amount
  try {
    // Parse and reformat to ensure consistent format
    const amountNum = parseFloat(amount)
    if (!isNaN(amountNum)) {
      normalizedAmount = amountNum.toFixed(2)
    }
  } catch (e) {
    // If parsing fails, use original amount
    normalizedAmount = amount
  }

  // Try standard format first: status|salt|txnid|amount|key
  const hashString1 = [status, salt, txnid, normalizedAmount, key].join('|')
  const calculatedHash1 = crypto.createHash('sha512').update(hashString1).digest('hex')
  
  if (calculatedHash1.toLowerCase() === receivedHash.toLowerCase()) {
    return true
  }

  // Try alternative format: status|salt|txnid|amount|key (with original amount if different)
  if (normalizedAmount !== amount) {
    const hashString2 = [status, salt, txnid, amount, key].join('|')
    const calculatedHash2 = crypto.createHash('sha512').update(hashString2).digest('hex')
    if (calculatedHash2.toLowerCase() === receivedHash.toLowerCase()) {
      return true
    }
  }

  // Try without normalizing amount (use as-is)
  const hashString3 = [status, salt, txnid, amount, key].join('|')
  const calculatedHash3 = crypto.createHash('sha512').update(hashString3).digest('hex')
  
  const isValid = calculatedHash3.toLowerCase() === receivedHash.toLowerCase()

  // Log hash verification details for debugging (only in development or when verification fails)
  if (!isValid || process.env.NODE_ENV === 'development') {
    console.log('[PayU Hash Verification]', {
      isValid,
      triedFormats: 3,
      hashString1,
      calculatedHash1: calculatedHash1.toLowerCase().substring(0, 20) + '...',
      receivedHash: receivedHash.toLowerCase().substring(0, 20) + '...',
      params: {
        status,
        txnid,
        originalAmount: amount,
        normalizedAmount,
        keyPrefix: key.substring(0, 6) + '...',
        saltPrefix: salt.substring(0, 6) + '...',
      },
    })
  }

  return isValid
}

/**
 * Sanitize product info for PayU
 * PayU has restrictions on productinfo field
 */
export function sanitizeProductInfo(info: string): string {
  // Remove special characters and limit length
  return info
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .substring(0, 100)
    .trim()
}

/**
 * Format amount for PayU
 * PayU expects amount as a decimal string in rupees (e.g., "1.00" for ₹1)
 * Format: Two decimal places, as string
 */
export function formatAmount(amount: number): string {
  // Format as decimal string with 2 decimal places (in rupees)
  // Example: 1 -> "1.00", 100 -> "100.00"
  return amount.toFixed(2)
}

/**
 * Get payment type description
 */
export function getPaymentTypeDescription(type: string): string {
  const descriptions: Record<string, string> = {
    appointment: 'Appointment Booking',
    'video-consultation': 'Video Consultation',
    consultation: 'Consultation',
  }
  return descriptions[type] || 'Payment'
}

