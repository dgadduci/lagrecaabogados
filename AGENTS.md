# AGENTS.md

## A. Proyecto

Sitio institucional de **LA GRECA & ASOC. – ESTUDIO JURÍDICO**, estudio argentino con más de 55 años de trayectoria. El nombre utilizado en redes es La Greca Abogados. El sitio apunta a particulares, comerciantes, pymes y empresas medianas.

## B. Objetivos institucionales

- Presentar el estudio, su trayectoria, servicios y formas de contacto con claridad y confianza.
- Generar consultas de particulares y destacar el asesoramiento jurídico permanente para empresas.
- Mantener el contenido revisable por los abogados antes de su publicación.
- No inventar hitos, profesionales, matrículas, datos de contacto, precios, sentencias, testimonios ni resultados.

## C. Arquitectura tecnológica

- Astro con salida estática, TypeScript estricto y CSS moderno.
- HTML generado estáticamente; JavaScript solo cuando una interacción accesible lo requiera.
- Git local y OpenSpec como sistema obligatorio para especificar cambios funcionales.
- Cloudflare Pages es el destino previsto; no desplegar sin autorización.
- No agregar React, Vue, Svelte, bases de datos, autenticación, WordPress ni servicios pagos sin necesidad justificada y aprobación.

## D. Organización

- `src/pages/`: rutas Astro.
- `src/layouts/`: estructuras compartidas de página.
- `src/components/`: componentes Astro reutilizables.
- `src/content/`: colecciones editoriales cuando se implementen mediante Astro Content Collections.
- `src/config/`: datos institucionales centralizados.
- `src/styles/`: variables y estilos globales.
- `public/`: recursos estáticos reales y archivos públicos.
- `openspec/specs/`: especificaciones vigentes; `openspec/changes/`: propuestas en curso e historial archivado.
- `docs/`: arquitectura, diseño, contenido y operación.

## E. Convenciones de Astro

- Preferir componentes `.astro` y renderizado en servidor durante la compilación.
- Mantener las páginas delgadas: composición y contenido en componentes, layouts y módulos de contenido.
- No añadir hidratación de cliente sin una necesidad de interacción demostrable.
- Las rutas deben ser semánticas, estables y en español, usando minúsculas y guiones.

## F. Convenciones de TypeScript

- Mantener `strict: true`; evitar `any` y conversiones de tipo que oculten errores.
- Tipar props, datos de colecciones y configuración institucional.
- Mantener validación de contenido cerca de la definición de la colección.

## G. Convenciones de CSS

- Usar CSS estándar, variables para tokens visuales y estilos por componente cuando sean locales.
- Diseñar mobile-first, con breakpoints justificados por el contenido.
- Evitar selectores globales frágiles, efectos decorativos excesivos y animaciones innecesarias.
- Respetar `prefers-reduced-motion` y mantener foco visible.

## H. Componentes reutilizables

- Extraer navegación, pie, metadatos SEO, botones de contacto y bloques repetidos cuando exista uso real en más de una ruta.
- Definir props claras, valores por defecto seguros y semántica HTML correcta.
- Un enlace de WhatsApp solo puede activarse con un número real configurado; nunca inventar uno.

## I. Accesibilidad

- Usar HTML semántico, encabezados jerárquicos, enlaces descriptivos y controles operables por teclado.
- Proveer `alt` que describa imágenes informativas; imágenes decorativas usan alternativa vacía.
- Asegurar contraste legible, foco visible, objetivos táctiles cómodos y menú móvil accesible.
- No depender solo del color ni del movimiento para transmitir información.

## J. SEO

- Cada página publicada debe tener título y descripción propios, canonical cuando exista dominio configurado, Open Graph y jerarquía de encabezados correcta.
- Centralizar `SITE_URL`; mantener consistentes nombre, dirección y perfiles institucionales.
- Generar sitemap y robots desde la configuración validada del dominio. No publicar canonical o sitemap con dominios de ejemplo.
- Usar datos estructurados solo para hechos verificables y visibles en la página.
- Evitar keyword stuffing, páginas geográficas sin contenido propio y descripciones duplicadas.

## K. Contenido jurídico

- Escribir en español argentino, con tono profesional y comprensible.
- No inventar ni citar legislación o jurisprudencia sin verificar vigencia y pertinencia.
- No prometer resultados ni formular afirmaciones absolutas cuando haya excepciones relevantes.
- Aclarar que el contenido general no reemplaza el asesoramiento profesional individualizado.
- Toda página o artículo jurídico debe quedar identificado como pendiente de revisión profesional antes de publicación.
- No ofrecer derecho penal ni previsional: el estudio no presta esos servicios.

## L. OpenSpec obligatorio

- Flujo: **EXPLORAR → PROPONER → REVISAR → IMPLEMENTAR → VERIFICAR → ARCHIVAR**.
- Para toda funcionalidad nueva o modificación significativa, usar los comandos y artefactos oficiales de OpenSpec disponibles en la versión instalada.
- Consultar `openspec/specs/` antes de definir capacidades; la especificación aprobada es la fuente de verdad funcional.
- No implementar una propuesta hasta que el usuario la apruebe explícitamente.
- No archivar cambios incompletos, no verificados o sin tareas resueltas.
- Cambios editoriales menores y correcciones tipográficas pueden seguir una especificación existente; si alteran comportamiento o alcance, abrir una propuesta.

## M. Git

- Usar ramas para cambios significativos y mensajes de commit breves y descriptivos.
- Revisar `git diff` y el estado antes de confirmar cambios.
- No subir cambios, crear repositorios remotos, publicar repositorios ni hacer despliegues sin autorización.
- No versionar `node_modules`, `dist`, secretos, credenciales ni datos personales o confidenciales.

## N. Verificación

- Mantener comandos simples y reproducibles; no añadir frameworks de testing complejos sin justificarlo.
- Verificar contenido, enlaces internos, estados accesibles y vistas móvil/escritorio.
- No inventar resultados de pruebas. Registrar cualquier verificación que no pudo ejecutarse y la causa.

## O. Compilación

- Antes de entregar cambios de código, ejecutar `npm run check` y `npm run build` cuando las dependencias estén disponibles.
- Ejecutar el verificador de enlaces internos y revisar accesibilidad y responsive según el alcance.
- Corregir errores introducidos por el cambio; documentar bloqueos externos como falta de red o dependencias.

## P. Cloudflare Pages

- Mantener la salida estática en `dist/`, sin servidor Node permanente ni adaptador SSR.
- Documentar comando `npm run build`, directorio `dist`, conexión posterior a GitHub, dominio y SSL.
- No crear recursos Cloudflare, configurar dominios, activar despliegues ni publicar sin autorización.

## Q. Restricciones

- Priorizar simplicidad y mantenimiento; evitar dependencias innecesarias.
- No usar imágenes ficticias del estudio o de sus integrantes como si fueran reales. Si se requiere una maqueta visual, identificar claramente los placeholders.
- No publicar información confidencial ni datos no confirmados.
- No ofrecer servicios gratuitos ni inventar honorarios o abonos.
- No ejecutar acciones destructivas, cambios globales del sistema, instalaciones globales o modificaciones del shell sin la autorización que corresponda.
