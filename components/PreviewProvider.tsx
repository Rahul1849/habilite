'use client'

import { LiveQueryProvider } from '@sanity/preview-kit'
import { createClient } from '@sanity/preview-kit/client'
import { ReactNode, useMemo } from 'react'

interface PreviewProviderProps {
  children: ReactNode
  token?: string
  projectId: string
  dataset: string
  apiVersion?: string
}

export default function PreviewProvider({
  children,
  token,
  projectId,
  dataset,
  apiVersion,
}: PreviewProviderProps) {
  const client = useMemo(
    () =>
      createClient({
        projectId,
        dataset,
        apiVersion: apiVersion || '2023-10-20',
        useCdn: false,
        perspective: 'previewDrafts',
        stega: true,
      }),
    [projectId, dataset, apiVersion],
  )

  return (
    <LiveQueryProvider client={client} token={token} logger={console}>
      <PreviewBanner />
      {children}
    </LiveQueryProvider>
  )
}

function PreviewBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black px-4 py-2 text-center text-sm font-semibold">
      🔴 Live Preview Mode - You are viewing draft content
    </div>
  )
}
