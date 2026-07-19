"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Loader2 } from "lucide-react";

import { CAL_LINK, CAL_NAMESPACE } from "../../lib/cal";

export default function CalBooking() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async function initCal() {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#ed254e" },
          dark: { "cal-brand": "#ed254e" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", {
        action: "linkReady",
        callback: () => setIsReady(true),
      });
    })();
  }, []);

  return (
    <div className="relative min-h-[600px] w-full">
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="animate-spin text-zinc-400" size={28} />
        </div>
      )}
      <Cal
        namespace={CAL_NAMESPACE}
        calLink={CAL_LINK}
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          opacity: isReady ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
      />
    </div>
  );
}
