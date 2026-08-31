const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1000, deviceScaleFactor: 2 });
  
  await page.goto('http://localhost:3000/resources/life-compass', { waitUntil: 'networkidle0' });
  
  // Wait a bit for components
  await new Promise(r => setTimeout(r, 1000));
  
  await page.screenshot({ path: 'C:/Users/kardo/.gemini/antigravity/brain/0331e2d5-43c5-44a5-ab84-1125402bae37/life-compass-contrast.png' });
  await browser.close();
  console.log("Screenshot taken: life-compass-contrast.png");
})();
