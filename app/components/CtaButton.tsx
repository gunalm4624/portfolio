import type { ReactNode } from "react";

import { CAL_NAMESPACE, calLinkFromHref } from "../../lib/cal";
import SendIcon from "./SendIcon";

export default function CtaButton({
  label = "Book an intro call",
  href = "#contact",
  shadow = true,
  className = "",
  icon = <SendIcon />,
  iconPosition = "prefix",
}: {
  label?: string;
  href?: string;
  shadow?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "prefix" | "suffix";
}) {
  const sharedClassName = `group relative inline-flex h-11 w-full max-w-sm items-center justify-center gap-2 rounded-full bg-[#141413] px-5 text-sm font-normal tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-[#2f2f2c] sm:w-auto cursor-pointer ${
    shadow ? "shadow-[0_1px_2px_rgba(20,20,19,0.18),0_8px_20px_-8px_rgba(20,20,19,0.35)]" : ""
  } ${className}`;

  const content = (
    <>
      {iconPosition === "prefix" && icon}
      {label}
      {iconPosition === "suffix" && icon}
    </>
  );

  const calLink = calLinkFromHref(href);
  if (calLink) {
    return (
      <button
        type="button"
        title={label}
        data-cal-namespace={CAL_NAMESPACE}
        data-cal-link={calLink}
        data-cal-config='{"layout":"month_view"}'
        className={sharedClassName}
      >
        {content}
      </button>
    );
  }

  return (
    <a href={href} title={label} className={sharedClassName}>
      {content}
    </a>
  );
}
