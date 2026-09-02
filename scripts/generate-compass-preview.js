const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 16:9 Aspect Ratio dimensions for ToolCard preview
const width = 1200;
const height = 675;

const cx = 600;
const cy = 345;
const maxRadius = 180;

const labels = ["Relationships", "Work", "Health", "Growth", "Community"];
const scores = [9.0, 9.5, 4.5, 8.5, 5.5];

const angles = labels.map((_, i) => (i * 72 * Math.PI) / 180);

// Concentric pentagons (levels 2, 4, 6, 8, 10)
const pentagonsSvg = [2, 4, 6, 8, 10].map(level => {
  const r = (level / 10) * maxRadius;
  const pts = angles.map(a => `${cx + r * Math.sin(a)},${cy - r * Math.cos(a)}`).join(" ");
  return `<polygon points="${pts}" fill="none" stroke="#E2E8F0" stroke-width="2.5" />`;
}).join("\n");

// Radial axis lines
const axesSvg = angles.map(a => {
  const x2 = cx + maxRadius * Math.sin(a);
  const y2 = cy - maxRadius * Math.cos(a);
  return `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="#E2E8F0" stroke-width="2" />`;
}).join("\n");

// Data polygon points
const polygonPoints = scores.map((score, i) => {
  const r = (score / 10) * maxRadius;
  const x = cx + r * Math.sin(angles[i]);
  const y = cy - r * Math.cos(angles[i]);
  return `${x},${y}`;
}).join(" ");

// Data dots
const dotsSvg = scores.map((score, i) => {
  const r = (score / 10) * maxRadius;
  const x = cx + r * Math.sin(angles[i]);
  const y = cy - r * Math.cos(angles[i]);
  return `<circle cx="${x}" cy="${y}" r="9" fill="#0D2E24" />`;
}).join("\n");

// Label text elements
const labelsSvg = angles.map((a, i) => {
  const r = maxRadius + 45;
  const x = cx + r * Math.sin(a);
  const y = cy - r * Math.cos(a);
  let anchor = "middle";
  if (Math.sin(a) > 0.2) anchor = "start";
  if (Math.sin(a) < -0.2) anchor = "end";

  return `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle" class="label">${labels[i]}</text>`;
}).join("\n");

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .title {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        font-size: 26px;
        font-weight: 800;
        fill: #0D2E24;
        letter-spacing: 2px;
      }
      .label {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        font-size: 26px;
        font-weight: 800;
        fill: #0D2E24;
      }
      .subtitle {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        font-size: 24px;
        font-weight: 700;
        fill: #059669;
        letter-spacing: -0.3px;
      }
    </style>
  </defs>

  <!-- Clean Background -->
  <rect width="${width}" height="${height}" fill="#FFFFFF" />

  <!-- Header: Compass Icon + Title -->
  <g transform="translate(600, 55)">
    <!-- Compass Icon -->
    <g transform="translate(-130, -18) scale(1.3)" stroke="#34D399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#34D399" fill-opacity="0.2" />
    </g>
    <text x="-90" y="8" class="title">LIFE COMPASS</text>
  </g>

  <!-- Concentric Pentagon Grid -->
  ${pentagonsSvg}

  <!-- Axis Lines -->
  ${axesSvg}

  <!-- Data Polygon Fill & Stroke -->
  <polygon points="${polygonPoints}" fill="rgba(52, 211, 153, 0.4)" stroke="#34D399" stroke-width="5.5" stroke-linejoin="round" />

  <!-- Data Points -->
  ${dotsSvg}

  <!-- Domain Labels -->
  ${labelsSvg}

  <!-- Footer Subtitle -->
  <text x="600" y="635" text-anchor="middle" class="subtitle">Values &amp; Alignment Assessment</text>
</svg>
`;

const outputPath = path.join(__dirname, '../public/images/tools/compass-preview.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log('Successfully generated compass-preview.png at:', outputPath);
  })
  .catch((err) => {
    console.error('Error generating compass image:', err);
  });
