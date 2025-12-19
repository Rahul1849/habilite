/**
 * PayU Payment Failure Page
 * Handles failed payment callback from PayU
 */

'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { X, AlertCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

interface PaymentError {
  txnid: string
  error: string
  errorMessage: string
  amount: string
}

function PaymentFailureContent() {
  const searchParams = useSearchParams()
  const [verifying, setVerifying] = useState(true)
  const [errorData, setErrorData] = useState<PaymentError | null>(null)

  useEffect(() => {
    // Verify payment failure with server
    const verifyPayment = async () => {
      try {
        // Get payment data from URL params
        const txnid = searchParams.get('txnid')
        const status = searchParams.get('status')
        const hash = searchParams.get('hash')
        const error = searchParams.get('error')
        const errorMessage = searchParams.get('error_Message')
        const amount = searchParams.get('amount')

        if (txnid && hash) {
          // Prepare verification data
          const formData = new FormData()
          formData.append('txnid', txnid)
          formData.append('status', status || 'failure')
          formData.append('amount', amount || '')
          formData.append('hash', hash)

          // Add all other PayU params
          searchParams.forEach((value, key) => {
            if (!formData.has(key)) {
              formData.append(key, value)
            }
          })

          // Verify payment with server (to log the failure)
          try {
            await fetch('/api/payu/verify', {
              method: 'POST',
              body: formData,
            })
          } catch (err) {
            // Ignore verification errors for failed payments
            console.log('Payment verification skipped for failed payment')
          }
        }

        setErrorData({
          txnid: txnid || 'N/A',
          error: error || 'Payment failed',
          errorMessage: errorMessage || 'Your payment could not be processed',
          amount: amount ? `₹${parseFloat(amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'N/A',
        })
      } catch (err) {
        console.error('Payment verification error:', err)
        setErrorData({
          txnid: 'N/A',
          error: 'Unknown error',
          errorMessage: 'Unable to process payment information',
          amount: 'N/A',
        })
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Processing</h2>
          <p className="text-gray-600">Please wait...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <X className="text-red-600" size={40} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Failed</h1>
          <p className="text-lg text-gray-600 mb-8">
            We couldn&apos;t process your payment. Please try again.
          </p>

          {errorData && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left max-w-md mx-auto space-y-3">
              {errorData.txnid !== 'N/A' && (
                <div className="pb-3 border-b">
                  <div className="text-sm text-gray-600 mb-1">Transaction ID</div>
                  <div className="font-semibold text-gray-900 font-mono text-sm">
                    {errorData.txnid}
                  </div>
                </div>
              )}
              <div className="pb-3 border-b">
                <div className="text-sm text-gray-600 mb-1">Error</div>
                <div className="font-semibold text-gray-900">{errorData.error}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Details</div>
                <div className="text-gray-700">{errorData.errorMessage}</div>
              </div>
            </div>
          )}

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 max-w-md mx-auto">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-amber-600 mt-0.5 flex-shrink-0" size={20} />
              <div className="text-sm text-amber-800 text-left">
                <p className="font-semibold mb-1">Common reasons for payment failure:</p>
                <ul className="list-disc list-inside space-y-1 text-amber-700">
                  <li>Insufficient funds in your account</li>
                  <li>Incorrect card details or CVV</li>
                  <li>Card expired or blocked</li>
                  <li>Network issues during payment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              href="/appointment"
              className="block w-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Try Payment Again
            </Link>
            <Link
              href="/contact"
              className="block w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
            >
              Contact Support
            </Link>
            <Link
              href="/"
              className="block w-full text-gray-600 px-6 py-3 rounded-lg font-medium hover:text-gray-900 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PaymentFailurePage() {
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
      <PaymentFailureContent />
    </Suspense>
  )
}

