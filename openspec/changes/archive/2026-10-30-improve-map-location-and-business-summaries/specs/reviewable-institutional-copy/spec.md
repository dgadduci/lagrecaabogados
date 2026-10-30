## MODIFIED Requirements

### Requirement: El estado de revisión se conserva internamente sin un panel público

Las piezas nuevas MUST mantener `reviewStatus: pending` en sus metadatos hasta que el estudio confirme la revisión. Los nuevos resúmenes de servicios empresariales MUST conservar ese mismo estado en sus datos internos. Las páginas MUST NOT mostrar el panel genérico “Revisión profesional pendiente” ni el texto de borrador pendiente. El pie de página MUST conservar la aclaración de que la información general no reemplaza el asesoramiento profesional individualizado.

#### Scenario: Visita una página con texto nuevo aún pendiente
- **WHEN** una persona visita una de las 13 páginas con contenido incorporado
- **THEN** ve el contenido específico y la aclaración general del pie, sin el panel genérico de revisión pendiente.

#### Scenario: Visita la página general de particulares
- **WHEN** una persona visita `/particulares/`
- **THEN** ve el resumen y las tarjetas existentes, sin el panel genérico de revisión, y la página no reutiliza el texto reservado a la portada.

#### Scenario: Los resúmenes empresariales conservan el estado pendiente
- **WHEN** se consultan los datos internos de los cuatro servicios empresariales antes de la confirmación profesional
- **THEN** cada resumen indica `reviewStatus: pending` y el sitio no muestra un aviso público de revisión pendiente.
