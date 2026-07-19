import "server-only";

import { Resend } from "resend";

import { buildLeadNotificationEmail } from "./emailTemplates";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const LEAD_NOTIFICATION_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL || "";

export const isEmailConfigured = Boolean(RESEND_API_KEY && LEAD_NOTIFICATION_EMAIL);

let cachedResend: Resend | null = null;

function getResendClient(): Resend {
  if (!cachedResend) {
    cachedResend = new Resend(RESEND_API_KEY);
  }
  return cachedResend;
}

export type LeadEmailPayload = {
  name: string;
  email: string;
  businessName?: string;
  contactNumber?: string;
  service: string;
  about: string;
};

export async function sendLeadNotificationEmail(lead: LeadEmailPayload) {
  if (!isEmailConfigured) {
    throw new Error(
      "Email notifications are not configured. Set RESEND_API_KEY and LEAD_NOTIFICATION_EMAIL.",
    );
  }

  const resend = getResendClient();
  const { html, text } = buildLeadNotificationEmail(lead);

  const { error } = await resend.emails.send({
    from: `gunalm.design <${RESEND_FROM_EMAIL}>`,
    to: LEAD_NOTIFICATION_EMAIL,
    replyTo: lead.email,
    subject: `New lead: ${lead.name}${lead.businessName ? ` (${lead.businessName})` : ""}`,
    html,
    text,
  });

  if (error) {
    throw new Error(error.message);
  }
}
