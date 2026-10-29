## Purpose

Present La Greca & Asoc. and its verified institutional identity so visitors can understand the study, its experience, and the next step for contacting it.

## ADDED Requirements

### Requirement: Institutional home page
The site SHALL provide a Spanish-language home page that identifies LA GRECA & ASOC. as an Argentine law firm and communicates its reported experience of more than 55 years without adding an unconfirmed founding date or milestone.

#### Scenario: Visitor opens the home page
- **WHEN** a visitor opens `/`
- **THEN** the page displays the heading “Más de 55 años de trayectoria”, the subtitle “Asesoramiento y representación jurídica para particulares y empresas.”, and the actions “Solicitar una consulta” and “Conocer el estudio”

### Requirement: Home page institutional and service sections
The home page SHALL introduce the firm, show representative confirmed services, highlight ongoing business counsel, communicate experience without unverified dates, and present address and contact actions.

#### Scenario: Visitor scans the home page
- **WHEN** a visitor scrolls through `/`
- **THEN** the visitor finds institutional information, service cards, a prominent business advisory section, a trajectory section without invented milestones, and a contact section with the confirmed address and available contact actions

### Requirement: Firm presentation
The site SHALL provide `/estudio/` with an institutional presentation based only on information confirmed by the firm.

#### Scenario: Visitor reads about the firm
- **WHEN** a visitor opens `/estudio/`
- **THEN** the page explains the firm's experience and professional approach without inventing names, credentials, dates, awards, or case outcomes

### Requirement: Shared institutional navigation
The site SHALL expose consistent navigation to the main individual, business, study, news, and contact sections, along with the confirmed Instagram profile.

#### Scenario: Visitor uses shared navigation
- **WHEN** a visitor follows navigation from any published page
- **THEN** the destination resolves to a published site route or the confirmed Instagram profile, and institutional address and naming remain consistent wherever repeated

### Requirement: Institutional footer
The site SHALL display the confirmed firm name and address in a shared footer on published pages.

#### Scenario: Visitor checks the footer
- **WHEN** a visitor reaches the bottom of a published page
- **THEN** the footer identifies La Greca & Asoc. and shows Chilavert 6714, Piso 1 - Local 27, Villa Lugano, Ciudad Autónoma de Buenos Aires, Argentina
