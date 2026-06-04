import { ImageResponse } from "next/og";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

type OgImageProps = {
  title: string;
  subtitle: string;
  badge?: string;
};

export function createOgImage({ title, subtitle, badge = "Private Alpha" }: OgImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #080808 0%, #141414 55%, #1a1510 100%)",
          color: "#f5f0e6",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 40,
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c9a84c",
            fontWeight: 700,
          }}
        >
          MetaboliQ OS
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.08,
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 30,
            lineHeight: 1.35,
            color: "rgba(245, 240, 230, 0.78)",
            maxWidth: 880,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 16,
          }}
        >
          <div
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(201, 168, 76, 0.35)",
              background: "rgba(201, 168, 76, 0.12)",
              color: "#c9a84c",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {badge}
          </div>
          <div
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(76, 175, 125, 0.35)",
              background: "rgba(76, 175, 125, 0.1)",
              color: "#4caf7d",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Powered by MRRRU
          </div>
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}
