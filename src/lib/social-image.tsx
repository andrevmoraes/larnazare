import { ORG_NAME, SITE_TAGLINE, ADDRESS_CITY, ADDRESS_STATE } from "./site-config";

export function SocialImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(135deg, #e3f2fd 0%, #e8f5e9 100%)",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 96,
          height: 96,
          borderRadius: "50%",
          backgroundColor: "#1565c0",
          color: "#ffffff",
          fontSize: 44,
          marginBottom: 36,
        }}
      >
        +
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 800,
          color: "#1565c0",
          textAlign: "center",
          lineHeight: 1.15,
        }}
      >
        {ORG_NAME}
      </div>
      <div
        style={{
          fontSize: 32,
          color: "#2c3e50",
          textAlign: "center",
          marginTop: 28,
        }}
      >
        {SITE_TAGLINE}
      </div>
      <div
        style={{
          fontSize: 26,
          color: "#43a047",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 2,
          marginTop: 32,
        }}
      >
        {ADDRESS_CITY} - {ADDRESS_STATE}
      </div>
    </div>
  );
}
