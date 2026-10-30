## Context

Ver `proposal.md` para el motivo y `specs/local-contact-and-business-service-discovery/spec.md` para el comportamiento requerido. Hoy `/contacto/` arma la búsqueda de OpenStreetMap desde `siteConfig.address.formatted`, mientras las cuatro descripciones de `businessServices` ya se reutilizan en las tarjetas, la cabecera de detalle y la descripción SEO.

## Goals / Non-Goals

**Goals:**

- Separar la consulta cartográfica simplificada de la dirección institucional completa.
- Mantener un único texto de resumen empresarial compartido entre tarjetas, páginas de detalle y metadatos SEO.
- Conservar el estado interno `reviewStatus: pending` sin cambiar el contenido visible de contacto.

**Non-Goals:**

- Cambiar el domicilio que se muestra en la página o pie de contacto.
- Incorporar mapas incrustados, geocodificación adicional, dependencias o servicios externos distintos de OpenStreetMap.
- Modificar los textos extensos de las páginas empresariales o publicar el sitio.

## Decisions

1. **Guardar una consulta de mapa aparte en la configuración institucional.** La consulta literal solicitada se mantendrá separada de `address.formatted`, porque esta última representa la dirección postal completa e incluye piso, local y barrio. La alternativa de alterar `formatted` se descarta porque afectaría la información visible del estudio.

2. **Conservar los resúmenes en `businessServices.description`.** Las páginas ya comparten ese campo entre las tarjetas, la cabecera individual y la descripción SEO; mantener una sola fuente evita divergencias. Cada valor quedará dentro del límite especificado de 160 caracteres.

3. **Anotar el estado editorial en los datos de cada servicio empresarial.** El estado `reviewStatus: 'pending'` permitirá reconocer internamente que estos textos requieren confirmación profesional. No se presentará en la interfaz. El componente de tarjeta no necesita leer ni exponer ese campo.

4. **Mantener la búsqueda como enlace externo existente.** Se conservará el enlace accesible a OpenStreetMap que abre una pestaña nueva; no se añadirá un mapa embebido ni JavaScript.

## Risks / Trade-offs

- **OpenStreetMap puede devolver resultados distintos según su índice y la forma de la consulta.** Usar la dirección normalizada indicada mejora la búsqueda; el enlace seguirá permitiendo corregir o explorar resultados en el sitio cartográfico.
- **El límite de 160 caracteres puede restringir matices editoriales.** Los resúmenes se basarán en las áreas de servicio ya provistas y los detalles permanecerán en sus páginas específicas.
- **Los resúmenes siguen pendientes de revisión profesional.** Se conservará el metadato interno pendiente y no se considerarán aprobados por el solo hecho de compilar el sitio.

## Migration Plan

No hay migración de datos ni infraestructura. Al implementar, se actualizan la configuración y los datos estáticos, luego se comprueban el enlace generado, el límite de caracteres, el estado editorial y la compilación. La reversión consiste en restaurar los valores previos de esos archivos. El despliegue permanece fuera de alcance.

## Open Questions

Ninguna para esta propuesta.
