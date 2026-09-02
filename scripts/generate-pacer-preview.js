const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Dimensions matching 16:9 aspect ratio for ToolCard preview
const width = 1200;
const height = 675;

// Circle math
const cx = 600;
const cy = 325;
const r = 165;
const strokeWidth = 18;
const circumference = 2 * Math.PI * r;

// Active arc fraction (e.g. 70% of circle)
const progress = 0.72;
const strokeDasharray = `${circumference * progress} ${circumference * (1 - progress)}`;
// Rotate so start is at 1 o'clock (about -30 deg clockwise from top)
const rotation = -30;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .title {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        font-size: 27px;
        font-weight: 800;
        fill: #0D2E24;
        letter-spacing: 2.5px;
      }
      .seconds {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        font-size: 110px;
        font-weight: 900;
        fill: #0D2E24;
        letter-spacing: -2px;
      }
      .phase {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        font-size: 26px;
        font-weight: 800;
        fill: #0D2E24;
        letter-spacing: 4.5px;
      }
      .subtitle {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        font-size: 30px;
        font-weight: 700;
        fill: #0D2E24;
        letter-spacing: -0.5px;
      }
    </style>
    <linearGradient id="pacerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34D399" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#10B981" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="#FFFFFF" />

  <!-- Header: Wind Icon + Title -->
  <g transform="translate(600, 85)">
    <!-- Wind Icon -->
    <g transform="translate(-185, -20) scale(1.4)" stroke="#34D399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </g>
    <!-- Title -->
    <text x="-140" y="8" class="title">NERVOUS SYSTEM PACER</text>
  </g>

  <!-- Circle Track & Arc -->
  <g transform="translate(${cx}, ${cy})">
    <!-- Background Faint Ring -->
    <circle r="${r}" fill="none" stroke="#E6F7F0" stroke-width="${strokeWidth - 6}" />
    
    <!-- Active Arc Ring -->
    <circle
      r="${r}"
      fill="none"
      stroke="url(#pacerGrad)"
      stroke-width="${strokeWidth}"
      stroke-linecap="round"
      stroke-dasharray="${strokeDasharray}"
      transform="rotate(${rotation})"
      filter="url(#glow)"
    />

    <!-- Center Text -->
    <text x="0" y="15" text-anchor="middle" class="seconds">6s</text>
    <text x="0" y="70" text-anchor="middle" class="phase">EXHALE</text>
  </g>

  <!-- Subtitle Footer -->
  <text x="600" y="585" text-anchor="middle" class="subtitle">4–7–8 Parasympathetic Regulation Rhythm</text>
</svg>
`;

const outputPath = path.join(__dirname, '../public/images/tools/pacer-preview.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log('Successfully regenerated pacer-preview.png at:', outputPath);
  })
  .catch((err) => {
    console.error('Error generating image:', err);
  });
