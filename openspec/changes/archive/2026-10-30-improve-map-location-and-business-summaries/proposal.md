## Why

La búsqueda actual de OpenStreetMap incluye datos del piso y local que dificultan encontrar el domicilio. Además, las tarjetas empresariales necesitan explicar con mayor claridad cada servicio al que llevan.

## What Changes

- Generar la búsqueda de OpenStreetMap con `Martiniano Chilavert 6714, Ciudad Autonoma de Buenos Aires, Argentina`, separada de la dirección institucional que se muestra en el sitio.
- Ampliar las descripciones de los cuatro servicios empresariales para que expliquen su alcance en las tarjetas y al abrir cada servicio, sin exceder 160 caracteres.
- Mantener esos nuevos textos identificados internamente como pendientes de revisión profesional, sin mostrar un aviso público.

## Capabilities

### New Capabilities

- `local-contact-and-business-service-discovery`: ubicación precisa en OpenStreetMap y resúmenes breves para descubrir los servicios empresariales.

### Modified Capabilities

- `reviewable-institutional-copy`: los nuevos resúmenes empresariales conservan el estado interno de revisión pendiente.

## Impact

- Código afectado: `src/config/site.ts`, `src/pages/contacto.astro` y `src/data/services.ts`.
- Especificación afectada: `openspec/specs/reviewable-institutional-copy/spec.md`.
- No requiere dependencias nuevas ni cambios en el domicilio institucional visible.
