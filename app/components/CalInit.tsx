"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

import { CAL_NAMESPACE } from "../../lib/cal";

export default function CalInit() {
  useEffect(() => {
    (async function initCal() {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "auto",
        styles: { branding: { brandColor: "#ed254e" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null;
}
