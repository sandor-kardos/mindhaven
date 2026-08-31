const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  
  // Scroll to the gallery
  await page.evaluate(() => {
    const gallery = document.evaluate('//h2[contains(text(), "Insights on Resilience & Clarity")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (gallery) {
      gallery.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
  });

  // Wait a bit for images to load if needed
  await new Promise(r => setTimeout(r, 1000));
  
  await page.screenshot({ path: 'public/mobile-carousel-test.png' });
  await browser.close();
  console.log("Screenshot taken: public/mobile-carousel-test.png");
})();
