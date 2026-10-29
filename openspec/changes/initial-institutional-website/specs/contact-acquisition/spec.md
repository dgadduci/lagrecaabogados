## Purpose

Help visitors reach the firm using confirmed contact information while preventing calls to action from exposing invented or unconfigured phone, email, or WhatsApp details.

## ADDED Requirements

### Requirement: Contact page
The site SHALL provide `/contacto/` with the confirmed address and a clear location reference, the confirmed Instagram profile, and available configured contact methods.

#### Scenario: Visitor opens contact information
- **WHEN** a visitor opens `/contacto/`
- **THEN** the page shows Chilavert 6714, Piso 1 - Local 27, Villa Lugano, Ciudad Autónoma de Buenos Aires, Argentina, a usable location reference, and does not display an unconfirmed phone number or email address

### Requirement: Configurable WhatsApp action
The site SHALL provide a reusable, accessible WhatsApp action that supports page-specific text, visual variants, and a configurable initial message.

#### Scenario: Confirmed WhatsApp number is configured
- **WHEN** the firm supplies and configures its real WhatsApp number
- **THEN** the action links to that number with the configured initial message and has an accessible name that describes the action

#### Scenario: WhatsApp number is missing
- **WHEN** no confirmed WhatsApp number is configured
- **THEN** the action is disabled and no WhatsApp URL containing a placeholder or invented number is rendered in production

#### Scenario: Developer previews an unconfigured contact action
- **WHEN** a developer runs the site locally without a configured number
- **THEN** a clear setup-pending notice is visible in development only

### Requirement: Contact action destinations
Every contact call to action SHALL point to an available, confirmed destination or remain unavailable with an understandable status.

#### Scenario: Visitor selects a contact call to action
- **WHEN** the visitor activates a contact call to action
- **THEN** it opens the configured contact method or reports that the destination has not yet been configured without implying that the consultation is free
