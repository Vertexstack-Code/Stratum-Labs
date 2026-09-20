import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/contact-schema'
import { site } from '@/content/site'

export const runtime = 'nodejs'

/**
 * Very small in-memory rate limit. Good enough for a marketing site on a single
 * instance; swap for Upstash/Redis if the site is deployed to multiple regions.
 */
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const hits = new Map<string, { count: number; resetAt: number }>()

function rateLimited(key: string): boolean {
  const now = Date.now()
  const entry = hits.get(key)

  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]!.trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}

export async function POST(request: Request) {
  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ error: 'Too many submissions. Please try again in a minute.' }, { status: 429 })
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check the form and try again.', issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  const data = parsed.data

  // Honeypot tripped — accept silently so bots do not learn anything.
  if (data.website) {
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL ?? site.email
  const from = process.env.CONTACT_FROM_EMAIL ?? `website@${new URL(site.url).hostname}`

  if (!apiKey) {
    // No mail provider configured (local dev): log and succeed so the flow is testable.
    console.info('[contact] new enquiry (no RESEND_API_KEY configured, not sent):', {
      ...data,
      website: undefined,
    })
    return NextResponse.json({ ok: true })
  }

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || '—'}`,
    `Phone: ${data.phone || '—'}`,
    `Project type: ${data.projectType}`,
    `Budget: ${data.budget}`,
    `Timeline: ${data.timeline}`,
    '',
    data.message,
  ]

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${site.name} Website <${from}>`,
        to: [to],
        reply_to: data.email,
        subject: `New project enquiry — ${data.name}${data.company ? ` (${data.company})` : ''}`,
        text: lines.join('\n'),
      }),
    })

    if (!response.ok) {
      const detail = await response.text().catch(() => '')
      console.error('[contact] email provider rejected the message:', response.status, detail)
      return NextResponse.json(
        { error: 'We could not send your message right now. Please email us directly.' },
        { status: 502 },
      )
    }
  } catch (error) {
    console.error('[contact] email provider request failed:', error)
    return NextResponse.json(
      { error: 'We could not send your message right now. Please email us directly.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
