"use client";

import { useEffect, useState } from "react";

export default function LocalTime({ timeZone = "Asia/Kolkata" }: { timeZone?: string }) {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return <span suppressHydrationWarning>{time}</span>;
}
