'use client'

import { ReactNode } from 'react'

interface PreviewProviderProps {
  children: ReactNode
  token?: string
}

export default function PreviewProvider({ children }: PreviewProviderProps) {
  return (
    <>
      <PreviewBanner />
      {children}
    </>
  )
}

function PreviewBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black px-4 py-2 text-center text-sm font-semibold">
      🔴 Live Preview Mode - You are viewing draft content
    </div>
  )
}
