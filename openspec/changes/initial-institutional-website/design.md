## Context

See `proposal.md` for motivation and the five capability specifications in `specs/` for externally visible requirements. The project is a new Astro static-site scaffold. The production domain, phone, email, approved photography, article authors, and lawyer review of legal copy are not yet available.

## Goals / Non-Goals

**Goals:**

- Keep pages static, quick to load, and deployable to Cloudflare Pages without a persistent runtime.
- Separate shared page structure, service content, institutional configuration, styles, and editorial content.
- Keep contact and domain data explicit and configurable, with safe behavior when values are missing.
- Make publishing legal content require schema validation and a professional review state.

**Non-Goals:**

- No content-management system, API, database, authentication, consultation booking, or user accounts.
- No implementation or publication before approval of this proposal.
- No Cloudflare resources, GitHub repository, domain purchase, or deployment as part of this change.

## Decisions

### Astro static output and Cloudflare Pages

Use Astro with `output: 'static'` and deploy its `dist/` directory through the Pages Astro preset. The requested site is informational and does not need request-time rendering; static HTML avoids a server adapter and reduces runtime complexity. An SSR adapter or another hosting target can be reconsidered only if a future approved requirement needs server-side behavior.

### Page and component organization

Use file-based routes under `src/pages/`, a shared document layout under `src/layouts/`, reusable navigation, footer, metadata, and contact components under `src/components/`, and shared institutional values under `src/config/`. Prefer plain Astro components and semantic HTML. Use a native disclosure control for the mobile menu if its behavior meets the design; add client JavaScript only if keyboard and assistive-technology behavior cannot be achieved natively.

### Styling and typography

Define the supplied palette as CSS custom properties and apply it through a small set of global layout, typography, spacing, and responsive rules. Use an elegant serif for headings and a legible sans-serif for body copy. Prefer system stacks initially; self-host a small licensed font only after selection. Do not use a large CSS framework or external font service for the initial implementation.

### Editorial content and review gate

Use Astro's build-time Content Collections with a typed schema for Markdown articles. Require title, date, confirmed author, category, description, SEO metadata, and a review flag; image remains optional. Unreviewed content must not produce a public route, listing entry, or sitemap URL. Use Markdown first; add MDX only if a later approved article need requires embedded components.

### Contact and configuration

Keep the WhatsApp number in one typed institutional contact configuration value. An absent value results in a disabled production action; local development may show a setup notice. Do not output an invented or placeholder number. Read `SITE_URL` from the build environment in Astro configuration; if absent, omit absolute canonicals and sitemap generation rather than emitting a fake domain. Store the confirmed address and Instagram URL centrally so repeated display stays consistent. No form is included because no email destination or processing service is confirmed.

### SEO and structured data

Provide a page metadata component with unique titles and descriptions, Open Graph and Twitter Card data, and an absolute canonical only when the configured `SITE_URL` is valid. Use Astro's sitemap integration only on builds with a confirmed site URL. Provide crawler instructions consistent with the build/publication environment. Structured data may contain only business facts that are verified and visible on the page; never infer hours, ratings, telephone, or professional credentials.

### Accessible interaction and performance

Use semantic landmarks and heading order, descriptive link names, visible focus, keyboard operation, text alternatives, and reduced-motion styling. Review text/background contrast for the selected token combinations and avoid using the gold accent as body text on light backgrounds unless it passes contrast checks. Optimize real approved images, reserve dimensions to reduce layout shift, defer below-the-fold images, and avoid client bundles for static reading and navigation.

### Verification and delivery

Use `astro check` for Astro and TypeScript diagnostics, `astro build` for static output, and a small Node-based verifier for internal links in `dist/`. Review accessibility manually with keyboard and contrast checks, and inspect representative mobile, tablet, and desktop widths. GitHub connection and Cloudflare deployment remain later operational steps after approval and repository setup.

## Risks / Trade-offs

- [The production domain or phone remains unknown] → Keep `SITE_URL` and WhatsApp number unconfigured; omit canonicals/sitemap URLs and suppress WhatsApp links until the real values are confirmed.
- [Legal information may be read as individualized advice] → Require attorney review and a plain-language disclaimer before publication; do not add legal claims without verification.
- [Static-only delivery cannot process a contact form] → Use verified external contact destinations only; propose and review any future form-processing service separately.
- [A strict article publication gate adds editorial work] → Keep it as a simple content flag and document the review step; do not invent author or reviewer records.
- [Missing network access can prevent reproducible dependency installation] → Commit a lockfile once dependencies are installed successfully and verify the same commands in local and Pages builds.

## Migration Plan

1. After explicit approval, implement routes, shared components, content schema, visual tokens, SEO, contact handling, and service content from the approved specs.
2. Install dependencies, generate and commit the npm lockfile, and run `npm run check`, `npm run build`, and `npm run check:links`.
3. Review keyboard behavior, contrast, responsive layouts, page metadata, and all legal text with the study before release.
4. Configure a confirmed `SITE_URL`, then verify canonical URLs, sitemap, robots, and social previews in the built output.
5. After separate authorization, create/connect the GitHub repository and configure Cloudflare Pages with build command `npm run build` and output `dist`.
6. If a release has a defect, disable or revert the Pages deployment to the last approved build; no data migration or server rollback is required for static files.

## Open Questions

- What production domain should populate `SITE_URL`?
- What real WhatsApp number and email address may the site publish?
- Which real photographs and logo files are approved for web use?
- Which attorneys may be named as authors, and who will review public legal copy?
