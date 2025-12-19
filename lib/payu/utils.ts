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

  // PayU verification hash string format
  const hashString = [status, salt, txnid, amount, key].join('|')

  // Generate SHA512 hash
  const calculatedHash = crypto.createHash('sha512').update(hashString).digest('hex')

  // Compare hashes (case-insensitive)
  return calculatedHash.toLowerCase() === receivedHash.toLowerCase()
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

