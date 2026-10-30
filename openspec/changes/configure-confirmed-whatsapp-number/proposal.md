## Why

El componente reutilizable ya genera enlaces seguros de WhatsApp con mensajes configurables, pero su número central sigue vacío y por eso los botones aparecen deshabilitados. El estudio confirmó el número `5491156977905`, así que ya puede habilitarse el canal en las páginas existentes.

## What Changes

- Configurar `5491156977905` como destino confirmado de WhatsApp en el módulo central de contacto.
- Habilitar los botones existentes con el enlace `wa.me` y el mensaje inicial configurable, manteniendo el texto alternativo por página.
- Actualizar el contexto OpenSpec y la documentación para distinguir el WhatsApp confirmado del teléfono para llamadas, correo y dominio aún no confirmados.

## Capabilities

### New Capabilities

- `confirmed-whatsapp-destination`: fija el destino de WhatsApp confirmado que utilizan los botones de contacto del sitio.

### Modified Capabilities

Ninguna. La especificación general de `contact-acquisition` está en el cambio inicial aún activo; esta capacidad complementa ese contrato al registrar el destino concreto confirmado.

## Impact

- Código afectado: `src/config/contact.ts`; se reutiliza el componente de WhatsApp ya presente en las páginas.
- Documentación y contexto: `README.md`, `docs/architecture.md` y `openspec/config.yaml`.
- No requiere dependencias nuevas ni cambios en el mensaje predeterminado o en los destinos alternativos de contacto.
