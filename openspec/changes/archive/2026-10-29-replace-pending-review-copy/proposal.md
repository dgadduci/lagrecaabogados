## Why

Las páginas institucionales y de servicios todavía muestran un borrador genérico donde debería haber contenido específico. Los textos proporcionados por el estudio permiten presentar con mayor claridad su trayectoria, servicios y enfoque, manteniendo la revisión profesional pendiente antes de publicar el contenido jurídico.

## What Changes

- Reemplazar el contenido genérico de la portada y de la página institucional por los textos entregados para esas secciones.
- Incorporar los textos específicos entregados para las seis áreas de particulares, la presentación de empresas y sus cuatro páginas de servicios.
- Retirar el panel público “Revisión profesional pendiente” de las páginas del sitio; la página `/particulares/` conserva su texto actual, sin mostrar ese panel.
- Mantener `reviewStatus: pending` en las piezas nuevas hasta confirmar la revisión profesional y conservar la aclaración general del pie de página.
- Preservar los títulos y la jerarquía semántica de encabezados; convertir las marcas Markdown de énfasis en HTML semántico.

## Capabilities

### New Capabilities

- `reviewable-institutional-copy`: contenido institucional y jurídico por página, con revisión profesional visible antes de publicación.

### Modified Capabilities

Ninguna.

## Impact

- Rutas Astro de portada, estudio, particulares y empresas; modelo de contenido y componentes de aviso de revisión.
- Se mantienen la salida estática, las URLs públicas, los metadatos SEO y la configuración de contacto.
- No se agregan dependencias ni servicios externos.
