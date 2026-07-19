import type { LeadEmailPayload } from "./email";

const SERVICE_LABELS: Record<string, string> = {
  "web-design": "Web Design & Development",
  "ui-ux": "UI/UX Product Design",
  branding: "Branding & Identity",
  consulting: "Consulting",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string, href?: string): string {
  const content = href
    ? `<a href="${href}" style="color:#111111;text-decoration:none;">${escapeHtml(value)}</a>`
    : escapeHtml(value);

  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #ececec;font-size:13px;color:#8a8a8e;width:120px;vertical-align:top;">${label}</td>
      <td style="padding:14px 0;border-bottom:1px solid #ececec;font-size:15px;color:#111111;font-weight:500;vertical-align:top;">${content}</td>
    </tr>`;
}

export function buildLeadNotificationEmail(lead: LeadEmailPayload): {
  html: string;
  text: string;
} {
  const serviceLabel = SERVICE_LABELS[lead.service] || lead.service;

  const rows = [
    row("Email", lead.email, `mailto:${lead.email}`),
    lead.businessName ? row("Business", lead.businessName) : null,
    lead.contactNumber ? row("Phone", lead.contactNumber, `tel:${lead.contactNumber}`) : null,
    row("Service", serviceLabel),
  ]
    .filter(Boolean)
    .join("");

  const html = `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f7;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background-color:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 1px 2px rgba(0,0,0,0.04),0 8px 24px rgba(0,0,0,0.06);">
            <tr>
              <td style="padding:36px 40px 0 40px;">
                <span style="display:inline-block;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#ed254e;">New lead</span>
                <h1 style="margin:10px 0 0 0;font-size:26px;line-height:1.3;font-weight:600;color:#111111;letter-spacing:-0.02em;">${escapeHtml(lead.name)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px 0 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px 8px 40px;">
                <span style="display:block;font-size:13px;color:#8a8a8e;margin-bottom:8px;">About their project</span>
                <p style="margin:0;font-size:15px;line-height:1.6;color:#1d1d1f;background-color:#f5f5f7;border-radius:12px;padding:16px 18px;white-space:pre-wrap;">${escapeHtml(lead.about)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 40px 36px 40px;">
                <a href="mailto:${lead.email}" style="display:inline-block;background-color:#111111;color:#ffffff;font-size:15px;font-weight:500;text-decoration:none;padding:12px 24px;border-radius:100px;">Reply to ${escapeHtml(lead.name.split(" ")[0])}</a>
              </td>
            </tr>
          </table>
          <p style="margin:20px 0 0 0;font-size:12px;color:#a1a1a6;">Sent from the contact form on gunalm.design</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    `New lead: ${lead.name}`,
    "",
    `Email: ${lead.email}`,
    lead.businessName ? `Business: ${lead.businessName}` : null,
    lead.contactNumber ? `Phone: ${lead.contactNumber}` : null,
    `Service: ${serviceLabel}`,
    "",
    "About:",
    lead.about,
  ]
    .filter(Boolean)
    .join("\n");

  return { html, text };
}
