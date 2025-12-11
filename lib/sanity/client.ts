import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-20"
const token = process.env.SANITY_API_READ_TOKEN

// Standard client for published content
export const sanityClient = projectId && dataset
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      // Disable CDN so we always get fresh data
      useCdn: false,
      // Use read token when available (needed if dataset is private)
      token,
    })
  : null

// Preview client for draft content
export const previewClient = projectId && dataset
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      // Enable token for draft content access
      token,
      perspective: "drafts", // This enables draft content
    })
  : null

// Helper to get the right client based on draft mode
export function getClient(preview: boolean) {
  if (!projectId || !dataset || !sanityClient || !previewClient) {
    return null
  }
  return preview ? previewClient : sanityClient
}

// Re-export for convenience
export { sanityClient as client };

