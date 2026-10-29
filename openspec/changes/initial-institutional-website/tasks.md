## 1. Base técnica

- [x] 1.1 Install Astro and required development dependencies, commit the npm lockfile, and verify `npm ci` completes on the documented Node version.
- [x] 1.2 Configure strict TypeScript, static Astro output, shared CSS tokens, and the base document layout; verify `npm run check` and `npm run build` complete.
- [x] 1.3 Create shared institutional configuration for the confirmed name, address, Instagram, optional `SITE_URL`, and unconfigured contact values; verify missing domain and phone values produce no fabricated public URLs.

## 2. Institutional and service pages

- [x] 2.1 Implement the home page, study page, shared navigation, and footer from the institutional-presence spec; verify the required heading, subtitle, address, Instagram, and destinations appear in built HTML.
- [x] 2.2 Implement every individual and business route from the legal-services spec with distinct, review-ready Spanish content; verify each URL resolves and excluded practice areas, prices, guarantees, and unconfirmed facts are absent.
- [ ] 2.3 Review every legal service page with a firm lawyer before production publication; verify the approved copy and reviewer state are recorded in the release checklist.

## 3. Contact, editorial content, and search

- [ ] 3.1 Implement the reusable WhatsApp action with text, visual variant, and configurable initial message; verify an empty number disables production links and shows a development-only setup notice.
- [x] 3.2 Define the legal article collection schema and review gate; verify an unreviewed draft or unconfirmed author is excluded from public routes, listings, and sitemap.
- [ ] 3.3 Implement per-page titles, descriptions, canonical and social metadata, local business data, sitemap, and crawler instructions; verify builds with and without `SITE_URL` contain only appropriate absolute URLs.
- [ ] 3.4 Add approved real images with alternatives and reserved dimensions; verify image-heavy pages defer below-the-fold media where appropriate and have no invented photography.

## 4. Accessibility, verification, and delivery readiness

- [ ] 4.1 Complete responsive layouts and keyboard-operable navigation, focus, contrast, semantic structure, and reduced-motion support; verify representative mobile, tablet, and desktop widths plus keyboard-only navigation.
- [x] 4.2 Run `npm run check`, `npm run build`, and `npm run check:links`; verify all complete successfully and inspect the generated static routes in `dist/`.
- [x] 4.3 Review page-level SEO, contact destinations, and legal-content disclaimers; verify metadata and contact facts match the confirmed institutional configuration.
- [x] 4.4 Update README and deployment guidance with the verified Cloudflare Pages build command and output directory; verify the documented values match the Astro build configuration.
