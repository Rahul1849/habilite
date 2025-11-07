'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">Oops!</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-8">
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary inline-flex items-center justify-center"
          >
            <RefreshCw className="mr-2" size={20} />
            Try Again
          </button>
          <Link href="/" className="btn-outline inline-flex items-center justify-center">
            <Home className="mr-2" size={20} />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
