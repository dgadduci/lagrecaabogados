## Purpose

Permite que visitantes encuentren y usen el correo institucional confirmado para contactar al estudio desde las páginas principales del sitio.

## ADDED Requirements

### Requirement: El correo institucional está disponible como destino de contacto

El sitio MUST mostrar `contacto@lagrecaabogados.com.ar` como enlace `mailto:` tanto en `/contacto/` como en el pie compartido. El texto visible MUST permitir identificar y copiar la dirección.

#### Scenario: Una persona consulta los medios de contacto
- **WHEN** una persona visita `/contacto/`
- **THEN** encuentra `contacto@lagrecaabogados.com.ar` visible y enlazado mediante `mailto:contacto@lagrecaabogados.com.ar`.

#### Scenario: Una persona encuentra el contacto desde otra página
- **WHEN** una persona visita cualquier página que incluye el pie compartido
- **THEN** encuentra `contacto@lagrecaabogados.com.ar` visible y enlazado mediante `mailto:contacto@lagrecaabogados.com.ar`.
