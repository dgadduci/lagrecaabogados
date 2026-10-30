## Purpose

Esta capacidad presenta el logo institucional provisto por el estudio de forma reconocible y consistente, manteniendo su accesibilidad, proporciones y disponibilidad en la salida estática del sitio.

## ADDED Requirements

### Requirement: Official logo in shared site branding
The site SHALL use the supplied circular logo as the institutional mark in the shared header and footer on every published page, and SHALL link those marks to the home page.

#### Scenario: Visitor opens a published route
- **WHEN** a visitor opens any published page
- **THEN** the shared header and footer show the same supplied logo and each logo link returns to `/`

### Requirement: Official logo in the home hero
The home page SHALL show the supplied logo in its hero identity area in place of the CSS-drawn typographic mark.

#### Scenario: Visitor opens the home page
- **WHEN** the home page hero is rendered
- **THEN** it shows the supplied logo without a separately reconstructed or altered version of the mark

### Requirement: Accessible logo links and image alternatives
Logo links SHALL expose a meaningful accessible name that identifies La Greca & Asoc. and their home-page destination; decorative logo images SHALL NOT cause duplicate announcements.

#### Scenario: Visitor inspects logo links with assistive technology
- **WHEN** a screen reader reaches the header or footer logo link
- **THEN** it announces a meaningful home link for La Greca & Asoc. without repeating the image's decorative contents

### Requirement: Responsive and stable logo presentation
Displayed logo variants SHALL preserve the circular proportions without distortion or page-layout overflow on mobile, tablet, and desktop viewports; the shared header mark SHALL remain visible at every viewport size, and rendered dimensions SHALL be reserved to avoid layout shift.

#### Scenario: Visitor views the logo at different viewport widths
- **WHEN** a visitor views the shared branding at a narrow or wide viewport
- **THEN** the header logo remains visible, each displayed mark maintains its aspect ratio, the home hero follows the responsive layout, and no horizontal scrolling is introduced

### Requirement: Local approved logo asset
The site SHALL include the supplied logo as a local build asset and SHALL NOT depend on an external image host or a generated substitute to display the institutional mark.

#### Scenario: Static site is built without external image services
- **WHEN** the production build creates the static site
- **THEN** the logo is available from the site's own output and no remote logo request is required
