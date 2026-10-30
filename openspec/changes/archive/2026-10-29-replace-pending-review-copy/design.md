## Context

See `proposal.md` and `specs/reviewable-institutional-copy/spec.md` for scope and exact copy. The current service detail template renders short `introduction` and `focus` fields from `src/data/services.ts`; the site already uses Astro Content Collections for editorial Markdown and has a shared `ReviewNotice` component. The supplied text has paragraphs, nested section headings, bold spans, and additional service topics that do not fit the current `focus` list.

## Goals / Non-Goals

**Goals:**

- Keep long-form page copy easy for the study to review and update.
- Preserve semantic headings, paragraphs, lists, and bold emphasis from the provided text.
- Keep current SEO titles, descriptions, URLs, service cards, and contact actions.
- Keep `reviewStatus: pending` in content metadata until the study confirms review, without rendering a generic pending-review panel to visitors.
- Preserve the general legal-information disclaimer in the shared footer.

**Non-Goals:**

- Marking legal content as professionally approved or changing the site's deployment approval rule.
- Rewriting service-card summaries beyond the copy supplied for the target sections.
- Adding articles, legal citations, prices, contact details, or services not supplied by the study.
- Replacing the `/particulares/` overview copy; the user reserved the general text for the home page and supplied no separate overview text.

## Decisions

1. **Store the supplied long-form copy as local Markdown content.** Add a `website-copy` Astro Content Collection under `src/content/website-copy/`, with a schema for its page key and `reviewStatus`. Use `pending` for every entry in this change. Astro already provides the content loader and renderer, so this keeps the copy editable without adding a dependency and preserves the supplied bold formatting.

2. **Keep route metadata separate from editorial body content.** Retain the existing service slugs, titles, SEO descriptions, and card summaries in `src/data/services.ts`. Match each detail route to its Markdown entry by a stable key; do not duplicate the route H1 inside the rendered body. For the home, study, and company overview, render their matching entries inside the existing sections and preserve their current calls to action.

3. **Keep review status in source metadata, not in a public banner.** The 13 new Markdown entries retain `reviewStatus: pending` until professional review is confirmed. Remove the generic `ReviewNotice` panel from all pages, including `/particulares/`; the page's existing introductory copy remains its summary. Keep the general legal-information disclaimer already present in the shared footer.

4. **Preserve heading hierarchy.** Use the existing page H1 for each service title. Render the provided “Principales áreas de actuación”, “Nuestro enfoque”, and other subsection headings at the next appropriate level; render each named practice area as a subordinate heading with its description. Convert supplied bold spans to semantic `<strong>` elements through Markdown rendering.

5. **Do not change deployment behavior.** All entries are compiled into the existing static Astro output. The `dist/` output, Cloudflare Pages build command, routes, and dependencies remain unchanged.

## Risks / Trade-offs

- [Legal content may require correction after attorney review] → Keep every new entry marked pending in source metadata and do not deploy until the study confirms review; do not claim that the copy has been approved.
- [Markdown headings can duplicate existing page titles or create skipped heading levels] → Omit the repeated top-level title from the rendered body where the page already provides an H1, and verify the generated heading tree.
- [A missing or mismatched content key could leave a detail page empty] → Validate collection keys and add a check that all 10 service detail routes resolve to their corresponding entry.
- [The overview `/particulares/` still has its existing summary] → Leave its copy unchanged and remove only the generic pending-review panel.

## Migration Plan

1. Add the collection schema and Markdown entries with `reviewStatus: pending`.
2. Render the entries from their matching existing pages without changing public URLs or SEO metadata.
3. Run Astro checks, production build, internal-link checks, and verify every expected content heading and review notice in generated HTML.
4. Roll back by reverting the content entries, collection registration, and page-template changes together; no data migration or hosted resource is involved.
