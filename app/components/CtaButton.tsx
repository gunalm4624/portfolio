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
  const sharedClassName = `relative flex h-12 w-full max-w-sm justify-center sm:w-auto items-center gap-2 overflow-hidden rounded-full bg-zinc-950 px-6 text-base font-normal text-white transition-all duration-300 hover:bg-[#ed254e] cursor-pointer dark:bg-white dark:text-zinc-950 dark:hover:bg-[#ed254e] dark:hover:text-white ${
    shadow
      ? "shadow-[0_2px_1px_rgba(0,0,0,0.09),0_4px_2px_rgba(0,0,0,0.09),0_8px_4px_rgba(0,0,0,0.09),0_16px_8px_rgba(0,0,0,0.09),0_32px_16px_rgba(0,0,0,0.09)] hover:shadow-[0_2px_1px_rgba(237,37,78,0.25),0_4px_2px_rgba(237,37,78,0.22),0_8px_4px_rgba(237,37,78,0.18),0_16px_8px_rgba(237,37,78,0.15),0_32px_16px_rgba(237,37,78,0.12)]"
      : ""
  } ${className}`;

  const content = (
    <>
      <span className="pointer-events-none absolute -top-4 -right-4 h-12 w-12 rounded-full bg-gradient-to-br from-zinc-300/70 to-transparent blur-lg dark:from-zinc-500/40" />
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
