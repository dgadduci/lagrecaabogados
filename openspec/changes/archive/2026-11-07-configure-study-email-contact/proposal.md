## Why

El estudio ya cuenta con un correo institucional confirmado y operativo, pero el sitio todavía no lo publica. Incorporarlo brinda a particulares y empresas una vía directa para escribir al estudio.

## What Changes

- Configurar centralmente `contacto@lagrecaabogados.com.ar` como correo institucional confirmado.
- Mostrarlo como enlace `mailto:` en `/contacto/` y en el pie compartido del sitio.
- Mantener el contacto estático, sin formulario, backend ni servicio externo.

## Capabilities

### New Capabilities

- `institutional-email-contact`: publicación del correo institucional confirmado como destino de contacto.

### Modified Capabilities

Ninguna.

## Impact

Se actualizarán la configuración institucional, la página `/contacto/` y el componente `SiteFooter.astro`. No se requieren dependencias, APIs, cambios de infraestructura ni despliegue.
