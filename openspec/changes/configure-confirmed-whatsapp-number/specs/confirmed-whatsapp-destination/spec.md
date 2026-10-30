## Purpose

Registra el destino de WhatsApp confirmado y garantiza que las llamadas a la acción existentes abran una conversación con ese número y el mensaje previsto.

## ADDED Requirements

### Requirement: Las acciones de WhatsApp usan el número confirmado

Las acciones de WhatsApp del sitio MUST dirigirse al número internacional confirmado `5491156977905` mediante un enlace de conversación de WhatsApp. MUST incluir el mensaje inicial correspondiente codificado en la URL. Al estar configurado el número confirmado, el control MUST funcionar como enlace y MUST NOT mostrar el aviso de configuración pendiente.

#### Scenario: Apertura de WhatsApp desde una página del sitio
- **WHEN** una persona activa una acción de WhatsApp en la portada, contacto o una página de servicio
- **THEN** el enlace dirige a `wa.me/5491156977905` e incluye el mensaje inicial predeterminado codificado, y el texto accesible de la acción se conserva.

#### Scenario: Mensaje específico en una acción de WhatsApp
- **WHEN** una página configura un mensaje inicial distinto para su acción
- **THEN** el enlace usa el mismo número confirmado y codifica el mensaje específico en el parámetro correspondiente.
