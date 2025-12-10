import { createClient } from "next-sanity";

// Standard client for published content
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-20",
  // Disable the edge CDN so publishes are visible immediately
  useCdn: false,
});

// Preview client for draft content
export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-20",
  useCdn: false,
  // Enable token for draft content access
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: "drafts", // This enables draft content
});

// Helper to get the right client based on draft mode
export function getClient(preview: boolean) {
  return preview ? previewClient : sanityClient;
}

// Re-export for convenience
export { sanityClient as client };

