'use client'

import { useLiveQuery } from '@sanity/preview-kit'
import type { QueryParams } from '@sanity/client'

/**
 * Lightweight wrapper around preview-kit live queries.
 * Accepts initial data from the server and keeps it in sync with draft updates.
 */
export function usePreview<QueryResponse>(
  initialData: QueryResponse,
  query: string,
  params: QueryParams = {},
) {
  const [data] = useLiveQuery<QueryResponse>(initialData, query, params)
  return data
}


