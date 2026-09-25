import { chromium } from 'playwright-core';
const [,, url, dir, prefix, w, h, ...sels] = process.argv;
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport: { width: +w, height: +h }, reducedMotion: 'reduce' });
await ctx.addInitScript(() => localStorage.setItem('kyde_cookie_consent', 'accepted'));
const p = await ctx.newPage();
await p.goto(url, { waitUntil: 'networkidle' });
for (const [i, sel] of sels.entries()) {
  await p.evaluate((s) => { const el = document.querySelectorAll('main > section')[+s]; window.scrollTo(0, el ? el.offsetTop : document.body.scrollHeight); }, sel);
  await p.waitForTimeout(500);
  await p.screenshot({ path: `${dir}/${prefix}${i}.png` });
}
await b.close();
