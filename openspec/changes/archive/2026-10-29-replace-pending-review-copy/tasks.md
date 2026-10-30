## 1. Contenido editorial

- [x] 1.1 Crear la colección Astro `website-copy` con validación de claves estables y estado `pending`; incorporar las 13 piezas de texto definidas en `specs/reviewable-institutional-copy/spec.md` como Markdown y verificar su esquema con `npm run check`.
- [x] 1.2 Mantener `/particulares/` fuera de la migración, quitar el panel genérico y conservar su resumen actual; verificarlo en el HTML generado.

## 2. Integración en páginas

- [x] 2.1 Renderizar los textos de portada, estudio y presentación empresarial dentro de sus secciones existentes; verificar párrafos, énfasis semánticos y ausencia del panel genérico en las tres rutas.
- [x] 2.2 Renderizar las diez piezas de servicio en las rutas de detalle correspondientes, manteniendo los H1, descripciones SEO, tarjetas y acciones existentes; verificar que cada ruta resuelve el contenido de su clave sin duplicar el H1.
- [x] 2.3 Quitar el panel genérico de todas las páginas y conservar la aclaración legal del pie; verificar que el HTML no contiene “Revisión profesional pendiente” ni “Borrador institucional pendiente”.

## 3. Verificación

- [x] 3.1 Ejecutar `npm run check`, `npm run build` y `npm run check:links`; comprobar que las 13 rutas contienen el texto previsto, el aviso genérico está ausente y no se alteraron las URLs.
- [x] 3.2 Revisar encabezados, énfasis, lectura por teclado y presentación responsive de las páginas modificadas; registrar cualquier limitación del entorno antes de dar por terminada la verificación.

La inspección visual e interactiva fue probada y aprobada por el usuario.
