export type ServicePage = {
  slug: string;
  title: string;
  description: string;
  copyId: string;
};

type ReviewableServicePage = ServicePage & {
  reviewStatus: 'pending' | 'approved';
};

export const individualServices = [
  {
    slug: 'derecho-civil',
    title: 'Derecho civil',
    description: 'Asesoramiento en relaciones civiles, contratos y conflictos patrimoniales.',
    copyId: 'particular-civil',
  },
  {
    slug: 'derecho-laboral',
    title: 'Derecho laboral',
    description: 'Orientación y representación en consultas y conflictos laborales individuales.',
    copyId: 'particular-labor',
  },
  {
    slug: 'familia',
    title: 'Derecho de familia',
    description: 'Asesoramiento en cuestiones familiares y patrimoniales vinculadas.',
    copyId: 'particular-family',
  },
  {
    slug: 'sucesiones',
    title: 'Sucesiones',
    description: 'Acompañamiento jurídico en trámites y conflictos sucesorios.',
    copyId: 'particular-succession',
  },
  {
    slug: 'danos-y-perjuicios',
    title: 'Daños y perjuicios',
    description: 'Análisis y representación en reclamos por daños y perjuicios.',
    copyId: 'particular-damages',
  },
  {
    slug: 'contratos-y-alquileres',
    title: 'Contratos y alquileres',
    description: 'Asesoramiento sobre contratos, locaciones y conflictos vinculados.',
    copyId: 'particular-contracts-rentals',
  },
] as const satisfies readonly ServicePage[];

export const businessServices = [
  {
    slug: 'asesoramiento-permanente',
    title: 'Asesoramiento jurídico permanente',
    description:
      'Asesoramiento jurídico continuo para pymes y empresas mediante abonos mensuales, con apoyo preventivo en temas laborales, comerciales y societarios.',
    copyId: 'business-permanent',
    reviewStatus: 'approved',
  },
  {
    slug: 'derecho-laboral',
    title: 'Derecho laboral empresarial',
    description:
      'Asesoramiento laboral para empresas en contratación, desvinculaciones, relaciones de trabajo y prevención de contingencias.',
    copyId: 'business-labor',
    reviewStatus: 'approved',
  },
  {
    slug: 'contratos-comerciales',
    title: 'Contratos comerciales',
    description:
      'Redacción, revisión y negociación de contratos comerciales; asistencia ante incumplimientos y controversias con clientes o proveedores.',
    copyId: 'business-commercial-contracts',
    reviewStatus: 'approved',
  },
  {
    slug: 'cobro-de-creditos',
    title: 'Cobro de créditos',
    description:
      'Gestión de créditos comerciales impagos, con análisis de alternativas, cobranzas extrajudiciales y acciones judiciales cuando correspondan.',
    copyId: 'business-credit-collection',
    reviewStatus: 'approved',
  },
] as const satisfies readonly ReviewableServicePage[];

export const featuredIndividualServices = [
  individualServices[0],
  individualServices[1],
  individualServices[2],
  individualServices[3],
  individualServices[4],
  individualServices[5],
];
