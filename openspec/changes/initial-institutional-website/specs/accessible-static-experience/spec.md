## Purpose

Provide a fast, responsive, keyboard-operable institutional website that works as static HTML and remains usable with common accessibility preferences and input methods.

## ADDED Requirements

### Requirement: Responsive layout
The site SHALL remain readable and operable on mobile, tablet, and desktop viewports without horizontal overflow caused by page layout.

#### Scenario: Visitor changes viewport size
- **WHEN** a visitor views a public route at a narrow mobile width or a wide desktop width
- **THEN** text, navigation, content, and contact actions remain visible and usable without horizontal page scrolling

### Requirement: Keyboard and assistive technology access
All navigation and interactive controls SHALL be reachable by keyboard, expose meaningful names and states to assistive technology, and show visible keyboard focus.

#### Scenario: Visitor navigates without a pointer
- **WHEN** a visitor uses Tab, Shift+Tab, Enter, and Space to navigate the page
- **THEN** every interactive action is reachable in a logical order, focus is visible, and no keyboard trap occurs

### Requirement: Semantic and legible content
Public pages SHALL use semantic landmarks and a logical heading hierarchy, provide meaningful image alternatives, and maintain readable contrast.

#### Scenario: Assistive technology reads a public page
- **WHEN** a screen reader or browser accessibility tree inspects the page
- **THEN** the main content, navigation, page heading, links, and controls have meaningful semantic roles and names

### Requirement: Reduced motion
The site SHALL respect the visitor's reduced-motion preference and SHALL NOT rely on animation to communicate essential information.

#### Scenario: Visitor requests reduced motion
- **WHEN** the operating system requests reduced motion
- **THEN** nonessential animation is removed or reduced and all content and controls remain available

### Requirement: Static delivery and lean client code
Public pages SHALL be pre-rendered as static output and SHALL NOT require a persistent Node.js server, database, or client-side JavaScript for reading content and navigating routes.

#### Scenario: Pages deployment build is produced
- **WHEN** the production build completes
- **THEN** public pages and assets are available in `dist/` as static files suitable for Cloudflare Pages

#### Scenario: Visitor loads the public site
- **WHEN** the visitor opens a route with JavaScript disabled
- **THEN** the page content and primary navigation remain usable

### Requirement: Image and runtime performance
The site SHALL use appropriately sized images and avoid unnecessary client-side scripts and heavy dependencies.

#### Scenario: Image-heavy page is built
- **WHEN** a public page includes images
- **THEN** image alternatives are provided, dimensions are reserved to reduce layout shift, and below-the-fold images are deferred when appropriate
