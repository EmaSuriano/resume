import { chromium } from 'playwright';

(async () => {
  const executablePath = process.env.NETLIFY_DEV
    ? '/opt/homebrew/bin/chromium'
    : await chromium.executablePath();

  const browser = await chromium.launch({ executablePath });
  const page = await browser.newPage();

  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle' });

  const downloadButton = page.locator('a[download]');
  await downloadButton.evaluate((node) => (node.innerHTML = ''));

  await page.pdf({
    path: 'public/resume.pdf',
    margin: {
      top: '50px',
      bottom: '80px',
    },
    printBackground: true,
  });

  await browser.close();
})();
