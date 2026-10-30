## Context

Ver `proposal.md` y `specs/confirmed-whatsapp-destination/spec.md`. El componente actual ya crea enlaces `wa.me`, admite mensajes específicos y mantiene un estado deshabilitado cuando el número está vacío. La configuración central aún está vacía; la especificación activa `contact-acquisition` describe el comportamiento genérico.

## Goals / Non-Goals

**Goals:**

- Activar todos los usos actuales del botón con el destino confirmado `5491156977905`.
- Mantener la normalización del número y la codificación de mensajes implementadas por el componente reutilizable.
- Actualizar el contexto operativo para diferenciar el contacto de WhatsApp confirmado de llamadas telefónicas, correo y dominio aún no confirmados.

**Non-Goals:**

- Cambiar los mensajes predeterminados o específicos, las variantes visuales, el texto de los botones o sus ubicaciones.
- Publicar el número como texto separado en las páginas o habilitar llamadas telefónicas.
- Cambiar el comportamiento de respaldo para una futura configuración vacía ni desplegar el sitio.

## Decisions

1. **Guardar el número internacional como dígitos en la configuración existente.** El componente ya elimina puntuación antes de armar `wa.me`; reutilizar esa única fuente evita destinos distintos entre páginas. No se usará una variable de entorno porque el enlace se genera en páginas estáticas y el número es un dato público de contacto, no un secreto.

2. **Conservar la composición actual de los enlaces.** Se mantienen el mensaje predeterminado, el parámetro opcional por página y la codificación URL existentes. Así se habilita el canal sin duplicar lógica ni alterar accesibilidad, variantes o seguridad de apertura en pestaña nueva.

3. **Actualizar solo la documentación de contacto y el contexto OpenSpec.** Se identificará el número como contacto de WhatsApp confirmado; el teléfono para llamadas, el correo y el dominio seguirán separados como datos pendientes.

## Risks / Trade-offs

- **Un número incorrecto dirigiría consultas a otro destino.** Se usará exactamente la secuencia de dígitos proporcionada y se comprobará el destino en el HTML generado para todas las rutas con el botón.
- **WhatsApp puede no estar instalado en el dispositivo.** El enlace web `wa.me` sigue permitiendo abrir WhatsApp desde navegador y mantiene el comportamiento externo existente.

## Migration Plan

No hay migración de datos ni infraestructura. Tras aplicar la configuración y actualizar la documentación, se ejecutan las verificaciones del proyecto y se revisan los enlaces generados. La reversión consiste en restablecer el valor vacío anterior en la configuración. No se realiza un despliegue.

## Open Questions

Ninguna para esta propuesta.
