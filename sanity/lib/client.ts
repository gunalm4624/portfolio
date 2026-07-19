import { createClient, type SanityClient } from "next-sanity";

import { apiVersion, dataset, isSanityConfigured, projectId } from "../env";

let cachedClient: SanityClient | null = null;

export function getClient(): SanityClient {
  if (!isSanityConfigured) {
    throw new Error("Sanity is not configured");
  }

  if (!cachedClient) {
    cachedClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    });
  }

  return cachedClient;
}
