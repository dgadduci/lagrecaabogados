## 1. Configuración y documentación

- [x] 1.1 Configurar el destino `5491156977905` en el módulo central de contacto; verificar que el valor contenga solo los dígitos internacionales confirmados.
- [x] 1.2 Actualizar el contexto OpenSpec, README y documentación arquitectónica para registrar el número como WhatsApp confirmado y conservar como pendientes el teléfono para llamadas, el correo y el dominio; revisar que las referencias queden consistentes.

## 2. Verificación

- [x] 2.1 Ejecutar `npm run check`, `npm run build` y `npm run check:links`; revisar el HTML generado de todas las páginas con botones para confirmar el destino `wa.me/5491156977905`, el mensaje codificado y la ausencia del aviso de configuración pendiente.
