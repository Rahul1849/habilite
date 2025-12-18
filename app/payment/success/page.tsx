/**
 * PayU Payment Success Page
 * Handles successful payment callback from PayU
 */

'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircle2, Loader2, X } from 'lucide-react'
import Link from 'next/link'

interface PaymentData {
  txnid: string
  amount: string
  status: string
  firstname: string
  email: string
  productinfo: string
}

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [verifying, setVerifying] = useState(true)
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null)

  useEffect(() => {
    // Verify payment with server
    const verifyPayment = async () => {
      try {
        // Get payment data from URL params (PayU redirects with these)
        const txnid = searchParams.get('txnid')
        const status = searchParams.get('status')
        const amount = searchParams.get('amount')
        const firstname = searchParams.get('firstname')
        const email = searchParams.get('email')
        const productinfo = searchParams.get('productinfo')
        const hash = searchParams.get('hash')

        if (!txnid || !status || !hash) {
          setError('Missing payment information')
          setVerifying(false)
          return
        }

        // Prepare verification data
        const formData = new FormData()
        formData.append('txnid', txnid)
        formData.append('status', status)
        formData.append('amount', amount || '')
        formData.append('firstname', firstname || '')
        formData.append('email', email || '')
        formData.append('productinfo', productinfo || '')
        formData.append('hash', hash)

        // Add all other PayU params
        searchParams.forEach((value, key) => {
          if (!formData.has(key)) {
            formData.append(key, value)
          }
        })

        // Verify payment with server
        const response = await fetch('/api/payu/verify', {
          method: 'POST',
          body: formData,
        })

        const result = await response.json()

        if (result.success && result.verified && result.status === 'success') {
          setVerified(true)
          // Amount from API is already in rupees (converted from paise)
          const amountInRupees = result.amount 
            ? result.amount 
            : amount 
              ? parseFloat(amount) / 100 // Convert from paise if from URL
              : 0

          setPaymentData({
            txnid: result.transactionId || txnid,
            amount: `₹${amountInRupees.toLocaleString('en-IN')}`,
            status: result.status,
            firstname: firstname || '',
            email: email || '',
            productinfo: productinfo || '',
          })
        } else {
          setError(result.error || 'Payment verification failed')
          setVerified(false)
        }
      } catch (err) {
        console.error('Payment verification error:', err)
        setError('Failed to verify payment. Please contact support.')
        setVerified(false)
      } finally {
        setVerifying(false)
      }
    }

    verifyPayment()
  }, [searchParams])

  if (verifying) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <Loader2 className="w-12 h-12 text-[#0891b2] animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verifying Payment</h2>
          <p className="text-gray-600">Please wait while we verify your payment...</p>
        </div>
      </div>
    )
  }

  if (error || !verified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="text-red-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Verification Failed</h2>
          <p className="text-gray-600 mb-6">{error || 'Unable to verify your payment.'}</p>
          <div className="space-y-3">
            <Link
              href="/appointment"
              className="block w-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Book Appointment Again
            </Link>
            <Link
              href="/contact"
              className="block w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-600" size={40} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Your payment has been verified and your booking is confirmed.
          </p>

          {paymentData && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left max-w-md mx-auto space-y-3">
              <div className="pb-3 border-b">
                <div className="text-sm text-gray-600 mb-1">Transaction ID</div>
                <div className="font-semibold text-gray-900 font-mono text-sm">
                  {paymentData.txnid}
                </div>
              </div>
              <div className="pb-3 border-b">
                <div className="text-sm text-gray-600 mb-1">Amount Paid</div>
                <div className="font-semibold text-gray-900 text-xl">{paymentData.amount}</div>
              </div>
              {paymentData.firstname && (
                <div className="pb-3 border-b">
                  <div className="text-sm text-gray-600 mb-1">Name</div>
                  <div className="font-semibold text-gray-900">{paymentData.firstname}</div>
                </div>
              )}
              {paymentData.email && (
                <div className="pb-3 border-b">
                  <div className="text-sm text-gray-600 mb-1">Email</div>
                  <div className="font-semibold text-gray-900">{paymentData.email}</div>
                </div>
              )}
              {paymentData.productinfo && (
                <div>
                  <div className="text-sm text-gray-600 mb-1">Service</div>
                  <div className="font-semibold text-gray-900">{paymentData.productinfo}</div>
                </div>
              )}
            </div>
          )}

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 max-w-md mx-auto">
            <p className="text-sm text-green-800">
              <strong>What&apos;s next?</strong>
            </p>
            <ul className="text-sm text-green-700 mt-2 text-left list-disc list-inside space-y-1">
              <li>You will receive a confirmation email shortly</li>
              <li>Our team will contact you to confirm your appointment details</li>
              <li>Please arrive 15 minutes before your scheduled time</li>
            </ul>
          </div>

          <div className="space-y-3">
            <Link
              href="/appointment"
              className="block w-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book Another Appointment
            </Link>
            <Link
              href="/"
              className="block w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
            <Loader2 className="w-12 h-12 text-[#0891b2] animate-spin mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading</h2>
            <p className="text-gray-600">Please wait...</p>
          </div>
        </div>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  )
}

