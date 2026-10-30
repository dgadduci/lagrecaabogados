# Reviewable Institutional Copy Specification

## Purpose

Define the page-specific institutional and legal copy supplied by the study, while recording its pending professional review status in content metadata until the study confirms approval.

## Requirements

### Requirement: La portada presenta el texto institucional provisto para esa sección

La portada MUST mostrar únicamente en `/` el contenido provisto bajo el título “Asesoramiento en cada etapa”. El bloque MUST conservar sus párrafos y énfasis; no se reutiliza en `/particulares/`.

#### Scenario: Visita de la portada
- **WHEN** una persona visita `/`
- **THEN** la sección de servicios muestra el siguiente texto sin el panel público de revisión profesional:

~~~text
Asesoramiento en cada etapa

En La Greca & Asoc. acompañamos a nuestros clientes con un asesoramiento jurídico integral, adaptado a sus necesidades y circunstancias.

Nuestra experiencia nos permite brindar orientación precisa, anticipar conflictos y desarrollar soluciones jurídicas eficaces, tanto para particulares como para empresas.

Más de 55 años de trayectoria, compromiso y confianza.
~~~

### Requirement: La página institucional usa la presentación y forma de trabajo provistas

La página `/estudio/` MUST presentar la trayectoria, los principios de trabajo y la modalidad de atención en los términos provistos por el estudio, conservando la marca de énfasis.

#### Scenario: Visita de la página del estudio
- **WHEN** una persona visita `/estudio/`
- **THEN** el contenido institucional incluye el siguiente texto sin el panel público de revisión:

~~~text
Presentación institucional y forma de trabajo

Con más de 55 años de trayectoria, La Greca & Asoc. combina experiencia, compromiso y atención personalizada en el ejercicio de la profesión.

Nuestra labor se fundamenta en el análisis riguroso de cada caso, el asesoramiento claro y la búsqueda de soluciones jurídicas adecuadas a las necesidades de particulares y empresas.

Privilegiamos el trato directo, la confianza y el acompañamiento profesional en cada instancia.
~~~

### Requirement: Las páginas de particulares presentan el contenido específico provisto

Cada página de servicio para particulares MUST mostrar exclusivamente el texto correspondiente a su ruta. Debe conservar las áreas, descripciones, enfoque y énfasis provistos, usando encabezados semánticos sin duplicar el encabezado principal de la página.

#### Scenario: Visita de Derecho Civil
- **WHEN** una persona visita `/particulares/derecho-civil/`
- **THEN** la página muestra este contenido sin el panel público de revisión:

~~~text
Derecho Civil

En La Greca & Asoc. brindamos asesoramiento y representación jurídica en cuestiones de derecho civil, tanto en la prevención de conflictos como en su resolución judicial y extrajudicial.

Nuestra labor se orienta a la protección de los derechos e intereses de nuestros clientes, mediante un análisis riguroso de cada situación y la búsqueda de soluciones jurídicas adecuadas.

Principales áreas de actuación

Obligaciones y contratos
Redacción, interpretación, cumplimiento y resolución de contratos. Reclamos por incumplimientos contractuales.

Responsabilidad civil
Asesoramiento y representación en conflictos derivados de hechos que generan responsabilidad y obligaciones de reparación.

Derechos reales
Cuestiones vinculadas con la propiedad, posesión, condominio, usufructo y demás derechos sobre bienes muebles e inmuebles.

Conflictos inmobiliarios
Controversias relacionadas con inmuebles, ocupaciones, medianería, restricciones al dominio y relaciones entre propietarios.

Cobro de créditos
Gestión de reclamos judiciales y extrajudiciales para el recupero de sumas adeudadas.

Nuestro enfoque

Con más de 55 años de trayectoria, ofrecemos un asesoramiento personalizado, fundado en la experiencia profesional, la claridad y el compromiso con los intereses de cada cliente.
~~~

#### Scenario: Visita de Derecho Laboral para particulares
- **WHEN** una persona visita `/particulares/derecho-laboral/`
- **THEN** la página muestra este contenido sin el panel público de revisión:

~~~text
Derecho Laboral

En La Greca & Asoc. brindamos asesoramiento y representación jurídica en conflictos derivados de las relaciones laborales, procurando la protección de los derechos e intereses de nuestros clientes.

Nuestra intervención comprende tanto la instancia de negociación y resolución extrajudicial como la representación ante los organismos administrativos y tribunales competentes.

Principales áreas de actuación

Despidos e indemnizaciones
Asesoramiento y representación en despidos con y sin causa, liquidaciones finales y reclamos indemnizatorios.

Trabajo no registrado
Reclamos derivados de relaciones laborales no registradas o deficientemente registradas y diferencias en las condiciones de contratación.

Accidentes y enfermedades laborales
Asistencia en reclamos por accidentes de trabajo, enfermedades profesionales y controversias vinculadas con las aseguradoras de riesgos del trabajo (ART).

Diferencias salariales
Reclamos por remuneraciones adeudadas, horas extraordinarias y otros conceptos derivados de la relación laboral.

Conflictos laborales
Asesoramiento ante sanciones disciplinarias, modificaciones de las condiciones de trabajo e incumplimientos de las obligaciones laborales.

Acuerdos y conciliaciones
Asistencia y representación en negociaciones, audiencias de conciliación y acuerdos destinados a la resolución de controversias laborales.

Nuestro enfoque

Con más de 55 años de trayectoria, ofrecemos un asesoramiento personalizado, basado en el análisis de cada situación, la claridad en la orientación profesional y la defensa de los derechos de nuestros clientes.
~~~

#### Scenario: Visita de Derecho de Familia
- **WHEN** una persona visita `/particulares/familia/`
- **THEN** la página muestra este contenido sin el panel público de revisión:

~~~text
Derecho de Familia

En La Greca & Asoc. brindamos asesoramiento y representación jurídica en cuestiones vinculadas con las relaciones familiares, procurando soluciones que contemplen los derechos, intereses y circunstancias particulares de cada situación.

Nuestra intervención comprende la orientación preventiva, la búsqueda de acuerdos y, cuando resulta necesario, la representación ante los tribunales competentes.

Principales áreas de actuación

Divorcios
Asesoramiento y representación en procesos de divorcio, convenios reguladores y cuestiones patrimoniales derivadas de la disolución matrimonial.

Alimentos
Reclamos, fijación, modificación y ejecución de cuotas alimentarias, así como asistencia en controversias relativas a las obligaciones alimentarias.

Responsabilidad parental
Asesoramiento en cuestiones relacionadas con el ejercicio de la responsabilidad parental, el cuidado personal de los hijos y las decisiones que afectan su vida cotidiana.

Régimen de comunicación
Intervención en conflictos vinculados con el derecho de comunicación entre progenitores, hijos y otros integrantes del grupo familiar.

Uniones convivenciales
Asesoramiento sobre los efectos jurídicos de las uniones convivenciales, pactos de convivencia y cuestiones patrimoniales derivadas de su cese.

Liquidación y división de bienes
Asistencia en la liquidación del régimen patrimonial matrimonial y la distribución de bienes ante la disolución del vínculo.

Filiación
Representación en acciones de reclamación e impugnación de filiación y demás cuestiones vinculadas con el estado de familia.

Nuestro enfoque

Con más de 55 años de trayectoria, abordamos los conflictos familiares con responsabilidad, discreción y atención personalizada, privilegiando el diálogo y las soluciones consensuadas, sin descuidar la defensa de los derechos de nuestros clientes.
~~~

#### Scenario: Visita de Sucesiones
- **WHEN** una persona visita `/particulares/sucesiones/`
- **THEN** la página muestra este contenido sin el panel público de revisión:

~~~text
Derecho Sucesorio

En La Greca & Asoc. brindamos asesoramiento y representación jurídica en materia sucesoria, acompañando a nuestros clientes en los procedimientos necesarios para la transmisión, administración y distribución del patrimonio hereditario.

Nuestra intervención comprende tanto la tramitación de sucesiones como la prevención y resolución de conflictos entre herederos, procurando soluciones que resguarden sus derechos e intereses.

Principales áreas de actuación

Sucesiones testamentarias y ab intestato
Asesoramiento y representación en procesos sucesorios, desde su inicio hasta la inscripción y adjudicación de los bienes hereditarios.

Declaratoria de herederos
Tramitación de las actuaciones necesarias para el reconocimiento judicial de la calidad de heredero.

Partición y adjudicación de bienes
Asistencia en la división del patrimonio hereditario, acuerdos entre coherederos y adjudicación de los bienes que integran la sucesión.

Conflictos entre herederos
Representación en controversias relacionadas con la administración, disposición y distribución de los bienes hereditarios.

Administración de bienes sucesorios
Asesoramiento sobre la conservación, administración y utilización de los bienes que integran la herencia.

Uso exclusivo de inmuebles hereditarios
Asistencia en reclamos derivados de la ocupación exclusiva de inmuebles por parte de uno o varios coherederos, incluyendo compensaciones económicas cuando correspondan.

Testamentos y planificación sucesoria
Asesoramiento en la elaboración de disposiciones testamentarias y organización de la transmisión patrimonial, dentro del marco legal vigente.

Acciones hereditarias
Representación en acciones de petición de herencia, colación, reducción de liberalidades y demás controversias vinculadas con los derechos sucesorios.

Nuestro enfoque

Con más de 55 años de trayectoria, abordamos cada proceso sucesorio con experiencia, rigor jurídico y atención personalizada, procurando una administración ordenada del patrimonio y soluciones que contribuyan a prevenir o resolver los conflictos familiares y patrimoniales.
~~~

#### Scenario: Visita de Daños y perjuicios
- **WHEN** una persona visita `/particulares/danos-y-perjuicios/`
- **THEN** la página muestra este contenido sin el panel público de revisión:

~~~text
Daños y Perjuicios

En La Greca & Asoc. brindamos asesoramiento y representación jurídica en reclamos por daños y perjuicios, tanto en el ámbito de la responsabilidad contractual como extracontractual.

Nuestra intervención comprende la evaluación de los daños sufridos, la determinación de las responsabilidades y la gestión de los reclamos indemnizatorios, procurando una reparación integral conforme a las circunstancias de cada caso.

Principales áreas de actuación

Accidentes de tránsito
Asesoramiento y representación en reclamos por lesiones, daños materiales y demás perjuicios derivados de accidentes de tránsito.

Responsabilidad civil
Reclamos por daños ocasionados por acciones u omisiones de particulares, profesionales, empresas y otras personas jurídicamente responsables.

Incumplimientos contractuales
Asistencia en reclamos indemnizatorios derivados del incumplimiento de obligaciones contractuales y de los perjuicios ocasionados.

Responsabilidad profesional
Representación en controversias vinculadas con daños derivados del ejercicio de actividades profesionales, cuando exista responsabilidad legal.

Daños materiales y patrimoniales
Reclamos por deterioro, destrucción o pérdida de bienes, lucro cesante y demás consecuencias económicas indemnizables.

Daño moral y consecuencias no patrimoniales
Asesoramiento en reclamos por afectaciones a derechos e intereses extrapatrimoniales jurídicamente protegidos.

Responsabilidad por productos y servicios
Intervención en reclamos derivados de productos defectuosos, prestación irregular de servicios e incumplimientos de proveedores.

Reclamos ante compañías aseguradoras
Asesoramiento y representación en controversias relacionadas con coberturas, liquidaciones de siniestros y cumplimiento de obligaciones asegurativas.

Nuestro enfoque

Con más de 55 años de trayectoria, abordamos cada reclamo con rigor jurídico, atención personalizada y una evaluación integral de sus circunstancias, procurando la adecuada protección de los derechos e intereses de nuestros clientes.
~~~

#### Scenario: Visita de Contratos y Alquileres
- **WHEN** una persona visita `/particulares/contratos-y-alquileres/`
- **THEN** la página muestra este contenido sin el panel público de revisión:

~~~text
Contratos y Alquileres

En La Greca & Asoc. brindamos asesoramiento y representación jurídica en materia contractual y locativa, tanto en la celebración y ejecución de acuerdos como en la prevención y resolución de conflictos derivados de su incumplimiento.

Nuestra intervención se orienta a brindar seguridad jurídica en las relaciones contractuales, proteger los derechos e intereses de nuestros clientes y procurar soluciones eficaces, tanto en instancias extrajudiciales como judiciales.

Principales áreas de actuación

Redacción y revisión de contratos
Elaboración, análisis e interpretación de contratos civiles y comerciales, procurando establecer condiciones claras y resguardar los intereses de las partes.

Incumplimientos contractuales
Asesoramiento y representación en reclamos por incumplimiento de obligaciones, resolución de contratos y reparación de los perjuicios ocasionados.

Contratos de locación
Redacción, revisión y negociación de contratos de alquiler de inmuebles destinados a vivienda, comercio y otras actividades.

Desalojos
Representación en procesos de desalojo por vencimiento contractual, falta de pago y demás causales legalmente previstas.

Cobro de alquileres y expensas
Gestión de reclamos judiciales y extrajudiciales por alquileres, expensas y otras obligaciones económicas derivadas de contratos de locación.

Conflictos entre propietarios e inquilinos
Asesoramiento en controversias relacionadas con el cumplimiento de las obligaciones locativas, conservación del inmueble, restitución y garantías contractuales.

Rescisión y resolución contractual
Asistencia en la extinción anticipada de contratos, negociación de acuerdos y determinación de sus consecuencias jurídicas y patrimoniales.

Ejecución de garantías
Representación en reclamos derivados de fianzas, garantías personales y demás obligaciones asumidas para asegurar el cumplimiento contractual.

Nuestro enfoque

Con más de 55 años de trayectoria, abordamos las relaciones contractuales con rigor jurídico, experiencia y atención personalizada, privilegiando la prevención de controversias y la búsqueda de soluciones que resguarden los derechos e intereses de nuestros clientes.
~~~

### Requirement: La presentación empresarial y sus servicios usan el contenido provisto

Las páginas de empresas MUST mostrar el texto correspondiente a cada ruta, manteniendo sus párrafos, apartados, áreas de actuación y énfasis. Las piezas nuevas mantienen `reviewStatus: pending` en sus metadatos hasta que el estudio confirme la revisión; la interfaz no muestra un panel público de pendiente.

#### Scenario: Visita de la presentación de empresas
- **WHEN** una persona visita `/empresas/`
- **THEN** la página muestra el siguiente contenido sin el panel público de revisión:

~~~text
Asesoramiento Jurídico para Empresas

En La Greca & Asoc. brindamos asesoramiento jurídico integral y permanente a pequeñas y medianas empresas, acompañándolas en el desarrollo de sus actividades y en la gestión de sus relaciones laborales, comerciales y societarias.

Nuestra labor se orienta a la prevención de contingencias legales, la protección de los intereses empresariales y la resolución de conflictos, mediante un asesoramiento personalizado y un conocimiento directo de las necesidades de cada organización.

Asesoramiento permanente mediante abonos mensuales

Ofrecemos un servicio de asesoramiento jurídico externo mediante abonos mensuales, que permite a las empresas contar con asistencia profesional continua, sin necesidad de incorporar una estructura jurídica propia.

Esta modalidad comprende el acompañamiento en las cuestiones legales habituales de la actividad empresarial, la evaluación preventiva de riesgos y la intervención oportuna ante situaciones que requieren asesoramiento especializado.

El alcance de los servicios se establece de acuerdo con las características, necesidades y actividad de cada empresa.

Principales áreas de actuación

Derecho Laboral Empresarial
Asesoramiento en contratación de personal, relaciones laborales, desvinculaciones, conflictos individuales y colectivos, cumplimiento normativo y prevención de contingencias laborales.

Contratos Comerciales
Redacción, revisión y negociación de contratos con clientes, proveedores y terceros. Asistencia ante incumplimientos y controversias contractuales.

Derecho Societario
Asesoramiento en constitución, organización y funcionamiento de sociedades, relaciones entre socios, administración y conflictos societarios.

Cobro y Recuperación de Créditos
Gestión de cobranzas judiciales y extrajudiciales, ejecución de obligaciones y recuperación de créditos comerciales.

Responsabilidad Civil y Comercial
Asistencia en reclamos indemnizatorios, responsabilidad contractual y extracontractual, y controversias derivadas de la actividad empresarial.

Prevención de Conflictos
Análisis de riesgos jurídicos, revisión de procedimientos y asesoramiento preventivo para reducir contingencias legales y económicas.

Representación Judicial y Extrajudicial
Defensa de los intereses empresariales en procesos judiciales, negociaciones, mediaciones y procedimientos administrativos.

Nuestro enfoque

Con más de 55 años de trayectoria, La Greca & Asoc. ofrece a sus clientes empresariales una relación profesional basada en la confianza, el conocimiento de su actividad y la continuidad del asesoramiento.

Nuestro propósito es constituirnos en un respaldo jurídico permanente, que permita a cada empresa desarrollar sus operaciones con mayor seguridad y previsibilidad.
~~~

#### Scenario: Visita de Asesoramiento Jurídico Permanente
- **WHEN** una persona visita `/empresas/asesoramiento-permanente/`
- **THEN** la página muestra el siguiente contenido sin el panel público de revisión:

~~~text
Asesoramiento Jurídico Permanente

En La Greca & Asoc. brindamos asesoramiento jurídico permanente a pequeñas y medianas empresas, ofreciendo un acompañamiento profesional continuo en las distintas cuestiones legales vinculadas con su actividad.

Nuestro servicio se orienta a la prevención de contingencias, la resolución de conflictos y la protección de los intereses empresariales, mediante una relación directa y un conocimiento integral de cada organización.

Modalidad de abono mensual

Ofrecemos un sistema de asesoramiento jurídico externo mediante abonos mensuales, diseñado para que las empresas cuenten con asistencia legal permanente, sin necesidad de incorporar un departamento jurídico propio.

El servicio se adapta a las características, dimensiones y necesidades de cada empresa, estableciendo un marco de colaboración profesional estable y previsible.

Alcance del asesoramiento

Consultoría jurídica permanente
Asistencia y orientación en las cuestiones legales que surgen durante el desarrollo habitual de la actividad empresarial.

Asesoramiento laboral
Asistencia en relaciones laborales, contratación de personal, medidas disciplinarias, desvinculaciones y prevención de conflictos.

Contratos y relaciones comerciales
Redacción, revisión e interpretación de contratos, asesoramiento en negociaciones y controversias con clientes y proveedores.

Prevención de contingencias
Identificación de riesgos jurídicos y evaluación de alternativas destinadas a prevenir conflictos y reducir su impacto económico.

Gestión de conflictos
Intervención en negociaciones, intimaciones y reclamos extrajudiciales, procurando soluciones oportunas y adecuadas.

Asesoramiento societario
Orientación en cuestiones vinculadas con la organización, administración y funcionamiento de sociedades comerciales.

Representación judicial
Asistencia y representación en litigios relacionados con la actividad empresarial, conforme a las condiciones y alcances que se acuerden en cada contratación.

Un servicio adaptado a cada empresa

La modalidad de abono se establece considerando la actividad, estructura y necesidades particulares de cada organización.

Las prestaciones comprendidas, los canales de consulta y las condiciones de intervención se definen previamente, permitiendo contar con un servicio jurídico organizado y acorde con los requerimientos de cada empresa.

Nuestro compromiso

Con más de 55 años de trayectoria, en La Greca & Asoc. entendemos el asesoramiento jurídico permanente como una relación profesional basada en la confianza, la continuidad y el conocimiento de la actividad empresarial.

Nuestro objetivo es brindar seguridad jurídica, previsibilidad y respaldo profesional, acompañando a cada empresa en sus decisiones y en la protección de sus intereses.
~~~

#### Scenario: Visita de Derecho Laboral Empresarial
- **WHEN** una persona visita `/empresas/derecho-laboral/`
- **THEN** la página muestra el siguiente contenido sin el panel público de revisión:

~~~text
Derecho Laboral Empresarial

En La Greca & Asoc. brindamos asesoramiento y representación jurídica a empresas en las distintas cuestiones derivadas de las relaciones laborales, tanto en su gestión cotidiana como en la prevención y resolución de conflictos.

Nuestra intervención se orienta al cumplimiento de la normativa vigente, la prevención de contingencias y la protección de los intereses empresariales, mediante un asesoramiento profesional continuo y adaptado a las características de cada organización.

Principales áreas de actuación

Contratación y registración laboral
Asesoramiento en modalidades de contratación, registración de trabajadores, condiciones laborales y cumplimiento de las obligaciones legales del empleador.

Despidos y desvinculaciones
Asistencia en la finalización de relaciones laborales, evaluación de causales, liquidaciones finales, acuerdos y prevención de conflictos indemnizatorios.

Sanciones disciplinarias
Asesoramiento en la aplicación de medidas disciplinarias, apercibimientos, suspensiones y demás cuestiones vinculadas con las facultades de dirección y organización del empleador.

Conflictos individuales y colectivos
Intervención en controversias laborales, negociaciones, reclamos de trabajadores y conflictos que afecten el normal desarrollo de la actividad empresarial.

Intercambio telegráfico
Redacción y contestación de comunicaciones laborales, intimaciones y requerimientos vinculados con las relaciones de trabajo.

Accidentes de trabajo y ART
Asesoramiento a empleadores en cuestiones relacionadas con accidentes laborales, enfermedades profesionales, aseguradoras de riesgos del trabajo y reclamos derivados de estas contingencias.

Auditoría y prevención laboral
Revisión de documentación, modalidades de contratación y procedimientos internos, con el objetivo de identificar riesgos y prevenir conflictos legales.

Representación administrativa y judicial
Asistencia en audiencias de conciliación, negociaciones y procedimientos administrativos, así como defensa y representación en procesos judiciales laborales.

Asesoramiento preventivo y permanente

El adecuado manejo de las relaciones laborales constituye un aspecto esencial de la organización empresarial.

Por ello, ofrecemos un servicio de asesoramiento continuo que permite abordar oportunamente las cuestiones laborales, evaluar alternativas y adoptar decisiones con mayor seguridad jurídica.

Esta asistencia puede integrarse a nuestros servicios de asesoramiento jurídico permanente mediante abonos mensuales, conforme a las necesidades de cada empresa.

Nuestro enfoque

Con más de 55 años de trayectoria, en La Greca & Asoc. acompañamos a nuestros clientes empresariales con un asesoramiento basado en la experiencia, el rigor jurídico y el conocimiento de su actividad.

Nuestro compromiso es contribuir a una gestión laboral ordenada, prevenir contingencias y brindar una representación profesional eficaz ante los conflictos que puedan presentarse.
~~~

#### Scenario: Visita de Contratos Comerciales
- **WHEN** una persona visita `/empresas/contratos-comerciales/`
- **THEN** la página muestra el siguiente contenido sin el panel público de revisión:

~~~text
Contratos Comerciales

En La Greca & Asoc. brindamos asesoramiento jurídico a empresas y comerciantes en la elaboración, negociación, interpretación y ejecución de contratos comerciales.

Nuestra intervención se orienta a establecer relaciones contractuales claras y seguras, prevenir contingencias y proteger los intereses de nuestros clientes, tanto en el desarrollo habitual de sus actividades como ante eventuales controversias.

Principales áreas de actuación

Redacción y revisión de contratos
Elaboración y análisis de contratos comerciales, procurando establecer condiciones precisas, obligaciones equilibradas y mecanismos adecuados para la protección de los intereses empresariales.

Negociación contractual
Asistencia jurídica durante las negociaciones comerciales, evaluación de condiciones y formalización de acuerdos con clientes, proveedores y terceros.

Contratos de distribución y suministro
Asesoramiento en relaciones contractuales vinculadas con la provisión de bienes y servicios, distribución comercial y abastecimiento empresarial.

Contratos de prestación de servicios
Redacción, revisión y negociación de acuerdos de servicios profesionales, técnicos y comerciales, con especial atención a las obligaciones y responsabilidades de las partes.

Incumplimientos contractuales
Asesoramiento y representación ante incumplimientos de obligaciones comerciales, intimaciones, resolución contractual y reclamos por daños y perjuicios.

Garantías contractuales
Análisis y constitución de garantías destinadas a asegurar el cumplimiento de las obligaciones asumidas en las relaciones comerciales.

Rescisión y resolución de contratos
Asistencia en la extinción de vínculos contractuales, negociación de acuerdos y evaluación de sus consecuencias jurídicas y patrimoniales.

Resolución de controversias comerciales
Intervención en negociaciones, mediaciones y procesos judiciales derivados de conflictos contractuales.

Prevención y seguridad jurídica

Una adecuada instrumentación contractual constituye una herramienta fundamental para prevenir conflictos y otorgar previsibilidad a las relaciones comerciales.

Por ello, ofrecemos asesoramiento preventivo y permanente, adaptado a las características y necesidades de cada empresa, que puede integrarse a nuestros servicios de asistencia jurídica mediante abonos mensuales.

Nuestro enfoque

Con más de 55 años de trayectoria, en La Greca & Asoc. abordamos las relaciones contractuales con rigor jurídico, experiencia y una visión práctica de la actividad empresarial.

Nuestro compromiso es brindar seguridad jurídica en las operaciones comerciales, prevenir controversias y proteger los intereses de nuestros clientes en cada etapa de sus relaciones contractuales.
~~~

#### Scenario: Visita de Gestión y Recuperación de Créditos
- **WHEN** una persona visita `/empresas/cobro-de-creditos/`
- **THEN** la página muestra el siguiente contenido sin el panel público de revisión:

~~~text
Gestión y Recuperación de Créditos

En La Greca & Asoc. brindamos asesoramiento y representación jurídica a empresas y comerciantes en la gestión y recuperación de créditos, procurando soluciones eficaces frente al incumplimiento de obligaciones de pago.

Nuestra intervención comprende desde la evaluación inicial de la deuda y las gestiones extrajudiciales de cobro hasta la promoción de las acciones judiciales correspondientes, con especial atención a la protección de los intereses patrimoniales de nuestros clientes.

Principales áreas de actuación

Análisis y evaluación de créditos
Examen de la documentación respaldatoria, condiciones de exigibilidad y alternativas legales para la recuperación de sumas adeudadas.

Gestión extrajudicial de cobranzas
Intimaciones de pago, negociaciones con deudores y celebración de acuerdos destinados a obtener el cumplimiento de las obligaciones pendientes.

Cobro judicial de créditos
Promoción y seguimiento de acciones judiciales por facturas impagas, incumplimientos comerciales y demás obligaciones exigibles.

Juicios ejecutivos
Asesoramiento y representación en procesos de ejecución de cheques, pagarés y otros títulos que reúnan los requisitos legales correspondientes.

Ejecución de garantías
Intervención en reclamos derivados de garantías personales y reales constituidas para asegurar el cumplimiento de obligaciones comerciales.

Acuerdos de pago y refinanciación
Negociación e instrumentación de convenios de reconocimiento de deuda, planes de pago y garantías destinadas a asegurar su cumplimiento.

Medidas cautelares
Evaluación y solicitud de embargos y otras medidas judiciales destinadas a preservar la posibilidad de cobro, cuando se encuentren reunidos los requisitos legales.

Ejecución de sentencias
Representación en procedimientos de ejecución judicial para procurar el cumplimiento de resoluciones firmes y la satisfacción de los créditos reconocidos.

Prevención y gestión del riesgo crediticio

Una adecuada gestión de las relaciones comerciales permite reducir contingencias vinculadas con la morosidad y el incumplimiento de obligaciones.

Por ello, ofrecemos asesoramiento preventivo en la instrumentación de operaciones comerciales, evaluación de garantías y documentación de créditos, procurando fortalecer la seguridad jurídica de las transacciones empresariales.

Estos servicios pueden integrarse a nuestros programas de asesoramiento jurídico permanente mediante abonos mensuales, conforme a las necesidades de cada empresa.

Nuestro enfoque

Con más de 55 años de trayectoria, en La Greca & Asoc. abordamos la recuperación de créditos con rigor jurídico, criterio profesional y una evaluación práctica de las alternativas disponibles.

Nuestro objetivo es proteger los intereses patrimoniales de nuestros clientes y procurar la recuperación de sus créditos mediante estrategias jurídicas adecuadas a las características de cada situación.
~~~

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
