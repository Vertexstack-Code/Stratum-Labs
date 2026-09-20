/**
 * Regenerates the README screenshots in `screenshots/` from a running build.
 *
 *   npm run build && npm run start -- -p 3210
 *   npm i --no-save playwright-core
 *   node scripts/screenshots.mjs
 *
 * Drives the Chrome already installed on the machine (`CHROME` to override),
 * so there is no browser download and playwright-core stays out of
 * package.json — this is a maintenance script, not part of the app.
 */
import { chromium } from 'playwright-core'

const BASE = process.env.BASE_URL ?? 'http://localhost:3210'
const CHROME = process.env.CHROME ?? '/usr/bin/google-chrome'
const OUT = new URL('../screenshots/', import.meta.url).pathname.replace(/\/$/, '')

const browser = await chromium.launch({
  executablePath: CHROME,
  args: ['--no-sandbox', '--force-color-profile=srgb', '--font-render-hinting=none'],
})

const MOBILE_UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'

async function open(path, { width = 1440, height = 900, scale = 1, mobile = false, hideHeader = false } = {}) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: scale,
    isMobile: mobile,
    hasTouch: mobile,
    ...(mobile && { userAgent: MOBILE_UA }),
  })
  const page = await ctx.newPage()
  await page.goto(BASE + path, { waitUntil: 'networkidle' })
  // Reveal hides content only under `html.js`. Dropping the class takes the
  // component's own no-JS path, so sections below the fold capture fully
  // opaque instead of mid-fade.
  await page.evaluate(() => document.documentElement.classList.remove('js'))
  // The header is sticky, so in an element screenshot it paints across the
  // middle of the captured region rather than sitting above it.
  if (hideHeader) await page.addStyleTag({ content: 'header{display:none !important}' })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(600)
  return { ctx, page }
}

async function section(page, name, sel) {
  const el = page.locator(sel).first()
  await el.scrollIntoViewIfNeeded()
  await page.waitForTimeout(300)
  await el.screenshot({ path: `${OUT}/${name}.png` })
  console.log('captured', name)
}

{
  const { ctx, page } = await open('/')
  await page.screenshot({ path: `${OUT}/hero.png` })
  console.log('captured hero')
  await ctx.close()
}

{
  const { ctx, page } = await open('/', { hideHeader: true })
  for (const [name, sel] of [
    ['services', '#services'],
    ['portfolio', '#portfolio'],
    ['process', '#process'],
    ['contact', '#contact'],
  ]) {
    await section(page, name, sel)
  }
  await ctx.close()
}

for (const [name, path] of [
  ['case-study', '/work/ledgerly'],
  ['work-index', '/work'],
]) {
  const { ctx, page } = await open(path)
  await page.screenshot({ path: `${OUT}/${name}.png` })
  console.log('captured', name)
  await ctx.close()
}

{
  const { ctx, page } = await open('/', { width: 390, height: 844, scale: 2, mobile: true })
  await page.screenshot({ path: `${OUT}/mobile-hero.png` })
  console.log('captured mobile-hero')
  await ctx.close()
}

{
  const { ctx, page } = await open('/', { width: 390, height: 844, scale: 2, mobile: true, hideHeader: true })
  const el = page.locator('#services')
  await el.scrollIntoViewIfNeeded()
  await page.waitForTimeout(300)
  await page.screenshot({ path: `${OUT}/mobile-services.png` })
  console.log('captured mobile-services')
  await ctx.close()
}

// Contact form states, driven through the real API route.
{
  const { ctx, page } = await open('/#contact', { hideHeader: true })

  await page.locator('button[type="submit"]').click()
  await page.waitForTimeout(800)
  await page.locator('#contact').first().screenshot({ path: `${OUT}/contact-errors.png` })
  console.log('captured contact-errors')

  await page.fill('input[name="name"]', 'Dana Whitfield')
  await page.fill('input[name="email"]', 'dana@northwind.co')
  await page.fill('input[name="company"]', 'Northwind Retail')
  await page.selectOption('select[name="projectType"]', 'AI product / LLM feature')
  await page.selectOption('select[name="budget"]', '$50k – $100k')
  await page.selectOption('select[name="timeline"]', '1–3 months')
  await page.fill(
    'textarea[name="message"]',
    'We run a mid-size retail catalogue and want an AI assistant that answers product questions from our own spec sheets, plus an eval suite so we can tell when it regresses.',
  )
  await page.locator('button[type="submit"]').click()
  await page.waitForTimeout(2500)
  await page.locator('#contact').first().screenshot({ path: `${OUT}/contact-success.png` })
  console.log('captured contact-success')
  await ctx.close()
}

await browser.close()
console.log('done')
