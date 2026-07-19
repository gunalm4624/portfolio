export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const isSanityConfigured = Boolean(projectId && dataset);

// Server-only. Never expose this to the client — it grants write access to the dataset.
export const sanityWriteToken = process.env.SANITY_API_WRITE_TOKEN || "";

export const isSanityWriteConfigured = Boolean(
  projectId && dataset && sanityWriteToken,
);
