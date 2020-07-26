export {};

// eslint-disable-next-line import/no-extraneous-dependencies
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const basePath = path.resolve(__dirname, '..', 'public');

(async () => {
  const browser = await puppeteer.launch({
    args : [
      '--start-maximized',
    ],
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1440, height: 726, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  if (!fs.existsSync(basePath)) await fs.mkdirSync(basePath, { recursive: true });

  await page.pdf({
    path: `${basePath}/cv_singh_prakhar.pdf`,
    format: 'A4',
    printBackground: false,
    margin: {
      top: '1 cm',
      left: '1 cm',
      bottom: '1 cm',
      right: '1 cm',
    }
  });

  await browser.close();
})();

