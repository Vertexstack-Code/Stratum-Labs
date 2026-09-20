# Stratum Labs — agency website

Marketing site for a design & engineering studio: SaaS platforms, two-sided marketplaces,
web applications, native mobile apps, AI products, e-commerce, blockchain and games. Built as a content-driven Next.js app so copy,
services, case studies and posts can be edited without touching components.

Structure and section flow follow the brief provided by the client
(reference: `vertexstack.io`) — hero, about, services, portfolio, tech stack, process,
differentiators, testimonials, contact, FAQ, CTA.

## Stack

- **Next.js 15** (App Router, React 19, server components by default)
- **TypeScript** in strict mode
- **Tailwind CSS 3** with a small set of shared component classes in `src/app/globals.css`
- **Zod** for shared client/server form validation
- No UI library, no CMS — content lives in typed files under `src/content/`

## Getting started

```bash
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build       # production build
npm run start       # serve the production build
npm run lint        # eslint (next/core-web-vitals)
npm run typecheck   # tsc --noEmit
```

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | for production | Canonical URLs, sitemap, Open Graph |
| `RESEND_API_KEY` | optional | Sends contact-form enquiries by email. If unset, submissions are validated and logged to the server console so the flow is testable locally. |
| `CONTACT_TO_EMAIL` | optional | Inbox that receives enquiries (defaults to `site.email`) |
| `CONTACT_FROM_EMAIL` | optional | Verified sender address |

## Where the content lives

Everything editable is in `src/content/`:

| File | Controls |
| --- | --- |
| `site.ts` | Brand name, description, availability banner, email, phone, social links, all navigation |
| `services.ts` | The eight service cards |
| `projects.ts` | Portfolio — featured case studies (with full `/work/[slug]` detail), plus smaller projects |
| `process.ts` | Five-step process, the four differentiators, headline stats |
| `tech.ts` | Technology stack groups and the hero stack strip |
| `testimonials.ts` | Client quotes |
| `faq.ts` | FAQ accordion (also feeds FAQPage structured data) |
| `posts.ts` | Blog posts |

## Rebranding checklist

1. `src/content/site.ts` — name, legal name, tagline, description, contact details, social links.
2. `src/components/ui/Icons.tsx` — replace the `Logo` component with the client's mark.
3. `tailwind.config.ts` — swap the `brand` colour scale (currently indigo) for the client's palette.
4. `src/app/layout.tsx` — change the fonts (`Inter` body, `Space_Grotesk` display) if the brand differs.
5. Replace the placeholder case studies and testimonials in `src/content/` with real ones.
6. Add `public/og.png` (1200×630) and reference it from the `openGraph.images` metadata.

## Notes on implementation

- **Contact form** — validated with the same Zod schema on the client (`src/lib/contact-schema.ts`)
  and in the API route (`src/app/api/contact/route.ts`). The route has a honeypot field and a small
  in-memory rate limit (5 requests/minute/IP). On multi-instance hosting, replace the in-memory
  limiter with Redis/Upstash.
- **SEO** — per-page metadata via `src/lib/seo.ts`, `ProfessionalService` and `FAQPage` JSON-LD,
  plus generated `sitemap.xml` and `robots.txt`.
- **Accessibility** — skip link, labelled form fields with inline errors, `aria-expanded` on the
  mobile menu, visible focus rings, and reduced-motion handling for all animation.
- **Case studies and posts** are statically generated via `generateStaticParams`.

## Deployment

Deploys as-is to Vercel (zero config). For a Node host: `npm run build && npm run start`.
Set `NEXT_PUBLIC_SITE_URL` in the production environment, or canonical URLs and the sitemap
will point at the placeholder domain.
