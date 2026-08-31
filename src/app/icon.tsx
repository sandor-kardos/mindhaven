import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D2E24",
          borderRadius: "7px",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width="24"
          height="24"
          fill="none"
        >
          <path
            d="M 22 74 V 26 L 50 56 L 78 26 V 74"
            stroke="#34D399"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
