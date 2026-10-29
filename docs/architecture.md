# Arquitectura

## Estado actual

La propuesta OpenSpec `initial-institutional-website` está aprobada. El sitio implementa las rutas institucionales y de servicios, navegación compartida, contenido editorial con revisión y metadatos SEO previstos por sus especificaciones. El teléfono, el correo, el dominio y las fotografías reales autorizadas siguen pendientes; los textos de servicios se muestran como borradores sujetos a revisión profesional. La estructura técnica prioriza generación estática y Astro.

## Decisiones base

- **Astro estático:** genera HTML durante la compilación y evita mantener un servidor Node en producción.
- **TypeScript estricto:** configura tipos estrictos para páginas, componentes, datos y contenido.
- **CSS nativo:** usa variables y estilos propios sin incorporar un framework visual.
- **Contenido editorial:** se organizará con Astro Content Collections al implementar la sección Actualidad, con esquemas de datos para título, fecha, autor confirmado, categoría, descripción, imagen opcional y metadatos SEO.
- **Sin backend:** no se prevén base de datos, autenticación, formularios con procesamiento propio ni funciones de servidor.
- **Contacto:** teléfono y correo se agregarán solo después de recibir datos confirmados. El destino y mensaje de WhatsApp se configurarán desde un único módulo.

## Mapa de código

```text
src/
  components/   navegación, pie, metadatos y componentes reutilizables
  config/       nombre, dirección, perfiles, dominio y contacto
  content/      artículos jurídicos revisados
  layouts/      documento base y metadatos compartidos
  pages/        páginas institucionales y de servicios
  styles/       tokens de diseño y estilos globales
public/         logo y fotografías reales aprobadas
```

Rutas implementadas: `/`, `/estudio/`, `/particulares/` y sus especialidades, `/empresas/` y sus servicios, `/actualidad/` y `/contacto/`. Las especificaciones OpenSpec mantienen el contrato de comportamiento.

## Flujo de datos

Los datos institucionales se centralizan en configuración de código. El contenido jurídico se almacena como Markdown/MDX con esquema validado y metadatos; cada artículo requiere revisión profesional. Las URLs canónicas, sitemap y datos estructurados dependen de una `SITE_URL` confirmada.

## Verificación arquitectónica

El flujo previsto es `npm run check`, `npm run build` y verificación de enlaces internos. La revisión de accesibilidad y responsive se realiza en páginas compiladas en anchos móvil, tablet y escritorio, incluyendo teclado, contraste, foco y movimiento reducido.
