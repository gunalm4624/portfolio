import "server-only";

import { createClient, type SanityClient } from "next-sanity";

import { apiVersion, dataset, isSanityWriteConfigured, projectId, sanityWriteToken } from "../env";

let cachedWriteClient: SanityClient | null = null;

export function getWriteClient(): SanityClient {
  if (!isSanityWriteConfigured) {
    throw new Error(
      "Sanity write access is not configured. Set SANITY_API_WRITE_TOKEN (a token with Editor/Write permissions) in your environment.",
    );
  }

  if (!cachedWriteClient) {
    cachedWriteClient = createClient({
      projectId,
      dataset,
      apiVersion,
      token: sanityWriteToken,
      useCdn: false,
    });
  }

  return cachedWriteClient;
}
