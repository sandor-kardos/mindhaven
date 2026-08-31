const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  
  const portraitBase64 = fs.readFileSync('public/images/erika-portrait.png').toString('base64');

  const html = `
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;800&family=Inter:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
      </head>
      <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #FEFFF7 0%, #E6F5EE 100%); font-family: 'Inter', sans-serif; display: flex; align-items: center; justify-content: space-between; height: 100vh; padding: 0 100px;">
        <div style="flex: 1; max-width: 650px;">
          
          <!-- Mindhaven SVG + Typographic Logo -->
          <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 50px;">
            <div style="position: relative; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
              <svg viewBox="0 0 100 100" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 22 76 V 44 C 22 28.536 34.536 16 50 16 C 65.464 16 78 28.536 78 44 V 76" stroke="#0D2E24" stroke-width="6" stroke-linecap="round" />
                <path d="M 50 30 V 76" stroke="#10B981" stroke-width="5" stroke-linecap="round" />
                <path d="M 50 54 C 36 54 30 42 30 42" stroke="#10B981" stroke-width="5" stroke-linecap="round" />
                <path d="M 50 44 C 64 44 70 32 70 32" stroke="#10B981" stroke-width="5" stroke-linecap="round" />
              </svg>
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center;">
              <div style="display: flex; align-items: baseline;">
                <span style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 36px; font-weight: 800; letter-spacing: -0.05em; line-height: 0.85;">
                  <span style="color: #0D2E24;">Mind</span><span style="color: #10B981;">Haven</span>
                </span>
                <span style="color: #10B981; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 36px; font-weight: 900; line-height: 0.85; margin-left: 2px;">.</span>
              </div>
              <span style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.25em; line-height: 1; margin-top: 6px; color: rgba(13, 46, 36, 0.5);">
                Private Counselling
              </span>
            </div>
          </div>

          <h1 style="color: #0D2E24; font-family: 'Outfit', sans-serif; font-size: 72px; font-weight: 800; margin: 0 0 24px 0; line-height: 1.1;">Mindhaven Counselling</h1>
          <p style="color: #0D2E24; font-size: 32px; font-weight: 500; margin: 0; opacity: 0.8; line-height: 1.4;">Professional counselling for stress, burnout, and anxiety by Erika Martin.</p>
        </div>
        <div style="flex: 1; display: flex; justify-content: flex-end; position: relative;">
          <div style="position: absolute; width: 500px; height: 500px; border-radius: 50%; background: rgba(52, 211, 153, 0.2); filter: blur(80px); top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 0;"></div>
          <div style="width: 440px; height: 440px; border-radius: 55% 45% 40% 60% / 60% 40% 55% 45%; overflow: hidden; border: none; box-shadow: 0 24px 48px rgba(13, 46, 36, 0.15); z-index: 10; position: relative; background: #FEFFF7;">
            <img src="data:image/png;base64,${portraitBase64}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 20%; transform: scale(1.02);" />
          </div>
        </div>
      </body>
    </html>
  `;
  
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'public/og-image.png' });
  await browser.close();
  console.log("Created public/og-image.png");
})();
