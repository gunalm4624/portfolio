import { ImageResponse } from "next/og";

export const alt = "gunalm.design — Design Engineer who skips the handoff";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F2EEE3",
          color: "#181510",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: "-0.04em" }}>
          gunalm.design
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
          }}
        >
          <div>Designer.</div>
          <div>Engineer. who</div>
          <div>skips the handoff.</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, opacity: 0.55 }}>
          Design Engineer · Ships MVPs solo
        </div>
      </div>
    ),
    { ...size },
  );
}
