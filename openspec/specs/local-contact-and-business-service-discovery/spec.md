# Local Contact and Business Service Discovery Specification

## Purpose

Facilita encontrar el estudio en el mapa y ayuda a las empresas a reconocer qué cubre cada servicio antes de abrir su página.

## Requirements

### Requirement: La búsqueda del mapa usa una dirección normalizada

El enlace de ubicación MUST buscar en OpenStreetMap `Martiniano Chilavert 6714, Ciudad Autonoma de Buenos Aires, Argentina`. MUST mantener separada esta búsqueda de la dirección institucional visible, que conserva piso, local y barrio.

#### Scenario: Apertura de la ubicación desde contacto
- **WHEN** una persona activa el enlace al mapa en `/contacto/`
- **THEN** OpenStreetMap recibe la consulta `Martiniano Chilavert 6714, Ciudad Autonoma de Buenos Aires, Argentina` y la dirección visible del estudio sigue incluyendo Chilavert 6714, Piso 1 - Local 27, Villa Lugano.

### Requirement: Las tarjetas empresariales describen sus servicios en hasta 160 caracteres

La página `/empresas/` MUST mostrar un resumen descriptivo de hasta 160 caracteres para cada uno de sus cuatro servicios. La página individual del servicio MUST repetir el resumen correspondiente junto al título y utilizarlo como descripción SEO. Los resúmenes MUST corresponder al contenido institucional provisto, sin prometer resultados.

#### Scenario: Visualización de los cuatro servicios empresariales
- **WHEN** una persona visita `/empresas/`
- **THEN** ve estos resúmenes en sus tarjetas:

~~~text
Asesoramiento jurídico permanente: Asesoramiento jurídico continuo para pymes y empresas mediante abonos mensuales, con apoyo preventivo en temas laborales, comerciales y societarios.
Derecho laboral empresarial: Asesoramiento laboral para empresas en contratación, desvinculaciones, relaciones de trabajo y prevención de contingencias.
Contratos comerciales: Redacción, revisión y negociación de contratos comerciales; asistencia ante incumplimientos y controversias con clientes o proveedores.
Cobro de créditos: Gestión de créditos comerciales impagos, con análisis de alternativas, cobranzas extrajudiciales y acciones judiciales cuando correspondan.
~~~

#### Scenario: Apertura de un servicio empresarial
- **WHEN** una persona activa «Conocer el servicio» en una tarjeta empresarial
- **THEN** la página correspondiente presenta el mismo resumen junto al título y como su descripción SEO, con un máximo de 160 caracteres.
