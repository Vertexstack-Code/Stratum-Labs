/**
 * Captures real product screenshots for the portfolio.
 *
 *   npm i --no-save playwright-core
 *   node scripts/capture-work.mjs casaba=https://casaba.example tradeloop=https://tradeloop.example
 *
 * Writes `public/work/<slug>.png` at 1440x900 (the 16:10 the ProjectShot frame
 * expects). Then point the project at it in src/content/projects.ts:
 *
 *   screenshot: { src: '/work/casaba.png', alt: 'Casaba search results …' }
 *
 * Only ever run this against sites we actually built — the portfolio is headed
 * "Shipped work", and a screenshot of someone else's product under that
 * heading is a false claim, not a placeholder.
 *
 * Options:
 *   --wait=3000     extra settle time per page, for heavy client-side apps
 *   --full          full-page capture instead of the 1440x900 fold
 *   --dismiss=".cookie-banner,#consent"   selectors clicked away before capture
 */
import { mkdir } from 'node:fs/promises'
import { chromium } from 'playwright-core'

const CHROME = process.env.CHROME ?? '/usr/bin/google-chrome'
const OUT = new URL('../public/work/', import.meta.url).pathname

const args = process.argv.slice(2)
const flags = Object.fromEntries(
  args.filter((a) => a.startsWith('--')).map((a) => {
    const [k, v = 'true'] = a.replace(/^--/, '').split('=')
    return [k, v]
  }),
)
const targets = args
  .filter((a) => !a.startsWith('--'))
  .map((pair) => {
    const i = pair.indexOf('=')
    if (i < 1) throw new Error(`Expected <slug>=<url>, got: ${pair}`)
    const slug = pair.slice(0, i)
    const url = pair.slice(i + 1)
    if (!/^https?:\/\//.test(url)) throw new Error(`Not an http(s) URL: ${url}`)
    return { slug, url }
  })

if (targets.length === 0) {
  console.error('Usage: node scripts/capture-work.mjs <slug>=<url> [<slug>=<url> …]')
  process.exit(1)
}

await mkdir(OUT, { recursive: true })

const browser = await chromium.launch({
  executablePath: CHROME,
  args: ['--no-sandbox', '--force-color-profile=srgb', '--font-render-hinting=none'],
})

let failed = 0

for (const { slug, url } of targets) {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  })
  const page = await ctx.newPage()
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45_000 })

    for (const sel of (flags.dismiss ?? '').split(',').filter(Boolean)) {
      const el = page.locator(sel).first()
      if (await el.count()) await el.click({ timeout: 2000 }).catch(() => {})
    }

    // Nudge lazy-loaded imagery into view, then return to the top.
    await page.evaluate(async () => {
      for (let y = 0; y < Math.min(document.body.scrollHeight, 4000); y += 500) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 60))
      }
      window.scrollTo(0, 0)
    })
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(Number(flags.wait ?? 1200))

    const path = `${OUT}${slug}.png`
    await page.screenshot({ path, fullPage: flags.full === 'true' })
    console.log(`captured ${slug}  ->  public/work/${slug}.png   (${url})`)
  } catch (err) {
    failed++
    console.error(`FAILED  ${slug}  (${url})\n        ${err.message}`)
  } finally {
    await ctx.close()
  }
}

await browser.close()
process.exit(failed > 0 ? 1 : 0)
