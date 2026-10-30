## 1. Ubicación de contacto

- [x] 1.1 Añadir una consulta de mapa separada de la dirección visible y usarla en el enlace de OpenStreetMap; verificar en el HTML generado que la búsqueda contiene `Martiniano Chilavert 6714, Ciudad Autonoma de Buenos Aires, Argentina` y que el domicilio visible conserva piso, local y Villa Lugano.

## 2. Resúmenes empresariales

- [x] 2.1 Actualizar los cuatro resúmenes de servicios empresariales según la especificación e indicar `reviewStatus: 'pending'` en sus datos; verificar que cada descripción tenga como máximo 160 caracteres.
- [x] 2.2 Confirmar que las tarjetas, las páginas de detalle y las descripciones SEO reutilicen el resumen correspondiente; revisar el HTML generado de `/empresas/` y de las cuatro rutas empresariales.

## 3. Verificación integrada

- [x] 3.1 Ejecutar `npm run check`, `npm run build` y `npm run check:links`; verificar que finalicen sin errores y revisar los resultados generados para mapa, textos y estado editorial sin aviso público.
