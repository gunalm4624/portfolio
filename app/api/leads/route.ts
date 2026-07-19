import { NextResponse } from "next/server";
import * as z from "zod";

import { isEmailConfigured, sendLeadNotificationEmail } from "../../../lib/email";
import { isSanityWriteConfigured } from "../../../sanity/env";
import { getWriteClient } from "../../../sanity/lib/writeClient";

const leadSchema = z.object({
  name: z.string().min(2),
  businessName: z.string().optional(),
  about: z.string().min(10),
  service: z.string().min(1),
  email: z.string().email(),
  contactNumber: z.string().optional(),
});

export async function POST(request: Request) {
  if (!isSanityWriteConfigured && !isEmailConfigured) {
    console.error(
      "Lead submission received but neither SANITY_API_WRITE_TOKEN nor email notifications (RESEND_API_KEY / LEAD_NOTIFICATION_EMAIL) are configured — dropping lead.",
    );
    return NextResponse.json(
      { error: "Lead capture is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data.", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const lead = parsed.data;

  const [sanityResult, emailResult] = await Promise.allSettled([
    isSanityWriteConfigured
      ? getWriteClient().create({
          _type: "lead",
          ...lead,
          status: "new",
          source: "contact-form",
          submittedAt: new Date().toISOString(),
        })
      : Promise.resolve(null),
    isEmailConfigured ? sendLeadNotificationEmail(lead) : Promise.resolve(null),
  ]);

  if (sanityResult.status === "rejected") {
    console.error("Failed to save lead to Sanity:", sanityResult.reason);
  }
  if (emailResult.status === "rejected") {
    console.error("Failed to send lead notification email:", emailResult.reason);
  }

  const sanityOk = !isSanityWriteConfigured || sanityResult.status === "fulfilled";
  const emailOk = !isEmailConfigured || emailResult.status === "fulfilled";

  if (!sanityOk && !emailOk) {
    return NextResponse.json(
      { error: "Something went wrong saving your request. Please try again." },
      { status: 500 },
    );
  }

  const id =
    sanityResult.status === "fulfilled" && sanityResult.value ? sanityResult.value._id : undefined;

  return NextResponse.json({ id }, { status: 201 });
}
