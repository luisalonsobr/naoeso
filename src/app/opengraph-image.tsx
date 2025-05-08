import { ImageResponse } from "next/og";

export const alt = "neverjust - A guide to better developer communication";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #1a1a1a, #2a2a2a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "white",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          neverjust
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#a3a3a3",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          A guide to better developer communication
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#737373",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          it&apos;s never just that simple
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
