import type { MetadataRoute } from "next";

// Crawlers/scrapers known to train or index for AI products. Blocking these
// specifically (in addition to the general disallow below) is what most AI
// systems actually check before crawling or including a page in training data.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "PerplexityBot",
  "Perplexity-User",
  "cohere-ai",
  "Diffbot",
  "Omgilibot",
  "FacebookBot",
  "Meta-ExternalAgent",
];

// Case studies, public/work assets, and Next image optimizer URLs for those files.
const WORK_DISALLOW = [
  "/work/",
  "/_next/image?*url=%2Fwork%2F",
  "/_next/image?*url=/work/",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/explorations/", "/_next/image?*url=%2Fexplorations%2F"],
        disallow: ["/studio/", ...WORK_DISALLOW],
      },
      {
        userAgent: ["Googlebot-Image", "Googlebot-News"],
        allow: ["/explorations/", "/_next/image?*url=%2Fexplorations%2F"],
        disallow: WORK_DISALLOW,
      },
      {
        userAgent: AI_CRAWLERS,
        disallow: ["/studio/", ...WORK_DISALLOW],
      },
    ],
    sitemap: "https://gunalm.design/sitemap.xml",
  };
}
