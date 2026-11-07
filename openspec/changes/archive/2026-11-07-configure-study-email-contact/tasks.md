## 1. Correo institucional

- [x] 1.1 Agregar el correo confirmado a la configuración institucional compartida; verificar que las páginas puedan consumir un único valor y que `npm run check` no informe errores.
- [x] 1.2 Mostrar la dirección como enlace `mailto:` visible en `/contacto/`; verificar el enlace y su texto en el HTML compilado de esa ruta.
- [x] 1.3 Incorporar el mismo enlace al pie compartido; verificar que aparece en HTML compilado de una página que use ese pie.

## 2. Verificación

- [x] 2.1 Ejecutar `npm run check`, `npm run build` y `npm run check:links`; confirmar que finalizan correctamente y que el HTML generado contiene el correo visible y sus dos destinos `mailto:`.
