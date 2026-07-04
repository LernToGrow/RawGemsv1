import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#10182b",
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(192,136,41,0.3), transparent)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#c08829",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
            }}
          >
            💎
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Raw<span style={{ color: "#c08829" }}>Gems</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 44,
            fontWeight: 700,
            color: "#ffffff",
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          Raw problems, cut into working software.
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 800,
          }}
        >
          Product Engineering &amp; AI Software Company
        </div>
      </div>
    ),
    { ...size }
  );
}
