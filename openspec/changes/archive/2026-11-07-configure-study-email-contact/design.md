## Context

La configuración compartida `siteConfig` ya centraliza datos institucionales visibles, y `/contacto/` y `SiteFooter.astro` los consumen. El sitio genera HTML estático, por lo que los enlaces de correo no requieren lógica de cliente.

## Goals / Non-Goals

**Goals:**

- Mantener una única fuente de verdad para la dirección institucional.
- Hacer que la dirección sea visible, copiable y operable como enlace desde contacto y el pie.

**Non-Goals:**

- Procesar mensajes dentro del sitio ni construir un formulario.
- Cambiar los otros destinos de contacto, los metadatos o el despliegue.

## Decisions

- Agregar `email` a `siteConfig`, junto a los demás datos institucionales confirmados. Esto evita duplicar la dirección entre páginas.
- Renderizar el valor como texto visible en enlaces `mailto:` en `/contacto/` y `SiteFooter.astro`. Se usarán los estilos de enlace existentes; el vínculo delega el envío a la aplicación de correo de la persona.
- No agregar dependencias ni JavaScript: Astro genera los enlaces directamente en el HTML estático.

## Risks / Trade-offs

- El enlace `mailto:` depende de que la persona tenga una aplicación de correo configurada → La dirección queda visible para copiar aunque el enlace no abra una aplicación.

## Migration Plan

No hay migración de datos ni cambios de infraestructura. Una nueva compilación estática incorpora el correo; se verifica el HTML de salida antes de cualquier publicación posterior.
