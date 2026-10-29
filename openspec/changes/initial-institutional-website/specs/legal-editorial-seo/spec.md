## Purpose

Support useful, professionally reviewed legal articles and search metadata grounded in confirmed facts, with no publication of fabricated authorship or unverified legal advice.

## ADDED Requirements

### Requirement: Legal article collection
The site SHALL support articles with a title, publication date, confirmed author, category, description, optional image, Markdown or MDX content, and page-specific SEO metadata.

#### Scenario: Valid article draft is prepared
- **WHEN** an editor creates an article draft with the required metadata
- **THEN** the article can be previewed in the editorial workflow and an optional image can be omitted without making the article invalid

### Requirement: Public actuality listing
The site SHALL provide `/actualidad/` as a list of published, reviewed articles and SHALL provide a readable route for each published article.

#### Scenario: Visitor browses actuality
- **WHEN** a visitor opens `/actualidad/`
- **THEN** each listed article shows its title, date, category, and description, and links to a page containing the article content and confirmed author

#### Scenario: No reviewed articles are available
- **WHEN** the collection has no articles approved for publication
- **THEN** `/actualidad/` provides a useful editorial status message and does not display fabricated sample articles

### Requirement: Professional review before article publication
Legal articles SHALL remain unpublished until an authorized lawyer has reviewed their content and the displayed author is confirmed.

#### Scenario: Article lacks legal review
- **WHEN** an article is a draft, has no confirmed author, or has not passed professional review
- **THEN** it is not included in public article listings, sitemap, or production routes

### Requirement: Page-specific search metadata
Each public route SHALL have a unique title and description and appropriate canonical, Open Graph, and Twitter Card metadata when the production domain is configured.

#### Scenario: Production domain is configured
- **WHEN** the site is built with the confirmed production `SITE_URL`
- **THEN** each public route emits an absolute canonical URL based on that configuration and route-specific social metadata

#### Scenario: Production domain is not configured
- **WHEN** the site is built without a confirmed `SITE_URL`
- **THEN** the output does not contain a fabricated canonical domain or sitemap URL

### Requirement: Local and structured search information
The site SHALL use accurate local business information and structured data only when the same facts are visible on the page and confirmed by the firm.

#### Scenario: Search crawler reads business data
- **WHEN** structured data is included on a public page
- **THEN** it contains only verified business name, address, and confirmed public profile information and does not invent a phone number, opening hours, rating, or service claim

### Requirement: Sitemap and crawler instructions
The production build SHALL provide sitemap and robots instructions appropriate to the configured production domain and publication state.

#### Scenario: Public production site is built
- **WHEN** `SITE_URL` is configured for a release build
- **THEN** the sitemap lists public canonical routes and crawler instructions do not block the intended public site

#### Scenario: Local or preview site is built
- **WHEN** the site is built for local development or preview
- **THEN** it does not advertise itself as the production canonical site

### Requirement: Natural local SEO
The content SHALL address relevant local searches naturally and SHALL NOT generate repetitive keyword pages or unsupported geographic claims.

#### Scenario: Search-oriented content is reviewed
- **WHEN** local search terms are included in a page
- **THEN** they are used only where relevant to real services and the Villa Lugano/CABA address, without keyword stuffing or doorway pages
