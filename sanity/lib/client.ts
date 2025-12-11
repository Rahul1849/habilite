import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_TOKEN;

export const client =
  projectId && dataset && apiVersion
    ? createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false, // fetch fresh data always
        token,
      })
    : null;

export function getSanityLibClient() {
  return client;
}


