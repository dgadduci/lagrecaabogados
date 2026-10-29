export type ServicePage = {
  slug: string;
  title: string;
  description: string;
  introduction: string;
  focus: readonly string[];
};

export const individualServices = [
  {
    slug: 'derecho-civil',
    title: 'Derecho civil',
    description: 'Asesoramiento en relaciones civiles, contratos y conflictos patrimoniales.',
    introduction:
      'El estudio brinda asesoramiento y representación en asuntos civiles. Cada consulta se analiza según sus circunstancias y la documentación disponible.',
    focus: ['Relaciones y obligaciones civiles', 'Contratos y acuerdos', 'Conflictos patrimoniales'],
  },
  {
    slug: 'derecho-laboral',
    title: 'Derecho laboral',
    description: 'Orientación y representación en consultas y conflictos laborales individuales.',
    introduction:
      'El área laboral acompaña a particulares ante consultas y conflictos relacionados con el trabajo, con una evaluación particular de cada situación.',
    focus: ['Consultas laborales individuales', 'Análisis de documentación y comunicaciones', 'Representación ante conflictos'],
  },
  {
    slug: 'familia',
    title: 'Derecho de familia',
    description: 'Asesoramiento en cuestiones familiares y patrimoniales vinculadas.',
    introduction:
      'El estudio atiende consultas de derecho de familia con un enfoque profesional y cuidadoso de las circunstancias de cada persona y grupo familiar.',
    focus: ['Divorcios y separaciones', 'Acuerdos familiares', 'Cuestiones patrimoniales de familia'],
  },
  {
    slug: 'sucesiones',
    title: 'Sucesiones',
    description: 'Acompañamiento jurídico en trámites y conflictos sucesorios.',
    introduction:
      'El estudio asesora en sucesiones y en las consultas relacionadas con bienes, documentación y posibles conflictos entre herederos.',
    focus: ['Inicio y seguimiento de sucesiones', 'Revisión de documentación', 'Conflictos sucesorios y patrimoniales'],
  },
  {
    slug: 'danos-y-perjuicios',
    title: 'Daños y perjuicios',
    description: 'Análisis y representación en reclamos por daños y perjuicios.',
    introduction:
      'El estudio analiza reclamos por daños y perjuicios y brinda asesoramiento sobre las alternativas que puedan corresponder a cada caso.',
    focus: ['Evaluación inicial del reclamo', 'Análisis de antecedentes y documentación', 'Negociación y representación judicial'],
  },
  {
    slug: 'contratos-y-alquileres',
    title: 'Contratos y alquileres',
    description: 'Asesoramiento sobre contratos, locaciones y conflictos vinculados.',
    introduction:
      'El estudio interviene en consultas sobre contratos y alquileres, considerando las condiciones acordadas y las circunstancias particulares.',
    focus: ['Revisión y elaboración de contratos', 'Consultas sobre alquileres', 'Conflictos vinculados a acuerdos'],
  },
] as const satisfies readonly ServicePage[];

export const businessServices = [
  {
    slug: 'asesoramiento-permanente',
    title: 'Asesoramiento jurídico permanente',
    description: 'Abonos mensuales y acompañamiento preventivo para pymes y empresas medianas.',
    introduction:
      'El estudio ofrece asesoramiento jurídico permanente mediante abonos mensuales para empresas que buscan contar con acompañamiento legal continuo.',
    focus: [
      'Consultas preventivas y detección temprana de conflictos',
      'Derecho laboral empresarial y contratos comerciales',
      'Cobro de créditos y conflictos societarios',
      'Representación judicial y seguimiento de asuntos',
    ],
  },
  {
    slug: 'derecho-laboral',
    title: 'Derecho laboral empresarial',
    description: 'Asesoramiento laboral para empresas y prevención de conflictos.',
    introduction:
      'El estudio acompaña a empresas en consultas de derecho laboral y en la gestión de conflictos relacionados con sus relaciones de trabajo.',
    focus: ['Consultas laborales de la empresa', 'Prevención y análisis de conflictos', 'Representación en asuntos laborales'],
  },
  {
    slug: 'contratos-comerciales',
    title: 'Contratos comerciales',
    description: 'Asesoramiento en contratos y acuerdos comerciales.',
    introduction:
      'El área comercial brinda asesoramiento sobre contratos y acuerdos de la actividad empresarial, atendiendo a la operación y a los objetivos de cada organización.',
    focus: ['Elaboración y revisión de contratos', 'Negociación de acuerdos comerciales', 'Análisis de conflictos contractuales'],
  },
  {
    slug: 'cobro-de-creditos',
    title: 'Cobro de créditos',
    description: 'Estrategias jurídicas para gestionar créditos impagos y su recuperación.',
    introduction:
      'El estudio asesora a empresas en la gestión y recuperación de créditos, con un análisis de los antecedentes y alternativas disponibles en cada caso.',
    focus: ['Análisis de créditos y documentación', 'Gestión de cobro', 'Representación judicial cuando corresponda'],
  },
] as const satisfies readonly ServicePage[];

export const featuredIndividualServices = [
  individualServices[0],
  individualServices[1],
  individualServices[2],
  individualServices[3],
  individualServices[4],
  individualServices[5],
];
