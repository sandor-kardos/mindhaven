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
          background: "transparent",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width="32"
          height="32"
          fill="#155D49"
        >
          <path d="M 22 25 L 38 25 C 42 35, 46 42, 50 42 C 54 42, 58 35, 62 25 L 78 25 L 78 75 L 63 75 L 63 56 C 59 50, 54 46, 50 46 C 46 46, 41 50, 37 56 L 37 75 L 22 75 Z" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
