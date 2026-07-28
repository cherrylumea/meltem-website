# Meltem Ersoy — website

Marketing site for Meltem Ersoy (Jungian Analyst & Psychological Astrologer, Toronto),
built with Next.js and Sanity CMS. Every section of the home page is editable by the
client through Sanity Studio — no code changes needed to update content.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Sanity v5** — headless CMS, Studio embedded at `/studio`
- **Tailwind CSS v4**
- **Formspree** — contact form delivery (no server code required)

## Getting started

```bash
npm install
cp .env.example .env.local   # values are already correct for this project
npm run dev
```

- Site: http://localhost:3000
- Studio: http://localhost:3000/studio

## Environment variables

| Variable | Required | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | yes | Public Sanity project id. |
| `NEXT_PUBLIC_SANITY_DATASET` | yes | Usually `production`. |
| `NEXT_PUBLIC_SANITY_API_VERSION` | no | Date-pinned API version. |

No write token is used anywhere in the app — the site only reads from Sanity, so
there is no secret to leak. Content is written by signed-in editors inside Studio.

## Project structure

```
app/
  layout.tsx              root shell: <html>, fonts, metadata
  (site)/
    layout.tsx            public site chrome (header + footer + skip link)
    page.tsx              home page — renders sections from Sanity
  studio/[[...tool]]/     embedded Sanity Studio (no site chrome)
components/               one component per page section, plus Header/Footer
lib/
  sanity.ts               Sanity client + image URL builder
  queries.ts              GROQ queries
  types.ts                shared TypeScript types for CMS content
sanity/
  schemaTypes/            content models (one export per file)
  structure.ts            Studio sidebar layout + singletons
seed.ndjson               starter content (see below)
```

The `(site)` route group exists so that Sanity Studio renders full-screen without
the site's header and footer wrapped around it.

## Editing content

All home page content lives in a single **Home Page** document, built from a list of
section blocks. In Studio, open *Home Page* → *Page Sections* → **+ Add item** to add,
reorder, or remove any section. Header, navigation, and footer live in **Site Settings**.

Both are singletons — Studio is configured so duplicates can't be created.

### Loading the starter content

`seed.ndjson` contains the original site copy for every section. To import it:

```bash
npx sanity dataset import seed.ndjson production --replace
```

`--replace` overwrites the `homePage` and `siteSettings` documents, so it is safe to
re-run to reset to the baseline.

## Contact form

The form posts directly to Formspree. To activate it:

1. Create a free form at [formspree.io](https://formspree.io) pointed at Meltem's inbox.
2. Copy the form's endpoint URL.
3. Paste it into Studio → Home Page → Contact section → **Form Endpoint**.

Until an endpoint is set the form still shows a thank-you message but sends nothing.
A hidden honeypot field filters basic spam bots.

## Caching

Pages use ISR with `revalidate = 60`, so published edits appear within a minute
without rebuilding. Sanity's CDN is enabled for reads.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Deployment

Deploy to Vercel. Set the two `NEXT_PUBLIC_SANITY_*` variables in the project's
environment settings, and add the production domain to Sanity's CORS origins
(manage.sanity.io → API → CORS origins).

## Known limitations

- **Blog and Announcements** have Sanity schemas and appear in Studio, but no public
  pages exist yet (`/blog`, `/announcements` are not implemented). Content entered
  there will not appear on the site until those routes are built.
- The Resources section's "Blog" and "Glossary" links point at `#` placeholders for
  the same reason.
- No automated test suite yet; verification is currently `npm run build` + manual review.
