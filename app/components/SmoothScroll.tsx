"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.055,
        duration: 1.8,
        autoRaf: true,
        smoothWheel: true,
        wheelMultiplier: 0.7,
        touchMultiplier: 1.1,
        allowNestedScroll: true,
        anchors: { duration: 1.8, offset: -8 },
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
}
