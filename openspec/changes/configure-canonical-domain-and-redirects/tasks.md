## 1. Project Configuration and Instructions

- [x] 1.1 Update the project context and README with the confirmed domains and canonical host; verify no project reference still calls the domain unconfirmed.
- [x] 1.2 Document the production `SITE_URL`, Pages build settings, registrar delegation, proxied alias DNS records, and exact Cloudflare redirect rule behavior; verify all hostnames and redirect targets match the spec.

## 2. Local Build Verification

- [x] 2.1 Run `npm run check` and `npm run check:links`; verify both complete successfully.
- [x] 2.2 Build with `SITE_URL=https://www.lagrecaabogados.com.ar`; inspect generated canonical, `og:url`, sitemap, and `robots.txt` for the expected host and indexing directives. Also verified a build without `SITE_URL` omits production canonical/sitemap and emits `noindex` with a disallowing `robots.txt`.

## 3. Manual Cloudflare and Registrar Setup

- [ ] 3.1 Add `lagrecaabogados.com.ar` and `lagrecaabogados.com` as Cloudflare Free zones and delegate both domains at their registrars; verify both zones become active and preserve any existing DNS records needed by other services.
- [ ] 3.2 Connect the repository to Cloudflare Pages with `npm run build`, output directory `dist`, and the pinned Node version; add `www.lagrecaabogados.com.ar` as the production custom domain and set `SITE_URL` only for Production. Verify the canonical host serves the site after the content review and deployment are authorized.
- [ ] 3.3 Configure proxied DNS records and one Single Redirect rule per zone for the aliases in the spec; use HTTPS target `www.lagrecaabogados.com.ar`, status 301, and preserve path and query. Verify every alias returns the expected redirect without a loop.
