export const site = {
  name: 'Salud en Casa Médicos S.A.S.',
  shortName: 'Salud en Casa Médicos',
  tagline: 'Servicios asistenciales domiciliarios. Fomentando el autocuidado.',
  phoneDisplay: '315 956 5622',
  phoneHref: 'tel:+573159565622',
  whatsappNumber: '573159565622',
  email: 'info@saludencasamedicos.com',
  address: 'Calle 10 bis # 67A - 69',
  city: 'Cali, Colombia',
  hours: [
    { days: 'Lunes a viernes', time: '7:30 a. m. a 4:30 p. m.' },
    { days: 'Sábados', time: '8:00 a. m. a 12:00 p. m.' },
  ],
  instagram: 'https://www.instagram.com/saludencasamedicos',
  privacyPdf: 'https://www.saludencasamedicos.com/images/politica-proteccion-datos-salud-en-casa.pdf',
  legacy: 'https://www.saludencasamedicos.com/index.php',
};

export type Service = {
  id: string;
  name: string;
  icon: string;
  summary: string;
  includes: string[];
};

export const services: Service[] = [
  {
    id: 'cuidados-paliativos',
    name: 'Cuidados paliativos',
    icon: 'heart',
    summary:
      'Un programa integral y humanizado para mejorar la calidad de vida del paciente y de su familia, previniendo y aliviando el sufrimiento.',
    includes: [
      'Alivio del dolor y de otros síntomas',
      'Apoyo psicológico y espiritual',
      'Acompañamiento a la familia, también en el duelo',
    ],
  },
  {
    id: 'atencion-domiciliaria',
    name: 'Atención domiciliaria',
    icon: 'home',
    summary: 'Para pacientes que no se pueden desplazar y cursan patologías especiales.',
    includes: [
      'Continuidad del servicio en el domicilio',
      'Menos hospitalizaciones y consultas',
      'Educación y apoyo a la familia',
    ],
  },
  {
    id: 'paciente-cronico',
    name: 'Paciente crónico',
    icon: 'activity',
    summary: 'Manejo continuo en el domicilio para enfermedades de larga duración.',
    includes: ['EPOC y diabetes', 'Secuelas neurológicas', 'Ventilación mecánica en casa'],
  },
  {
    id: 'paciente-agudo',
    name: 'Paciente agudo',
    icon: 'stethoscope',
    summary: 'Atención de baja, mediana y alta complejidad, según lo que el paciente necesite cada día.',
    includes: [
      'Medicamentos, visita médica y de enfermería',
      'Terapias de rehabilitación',
      'Traqueotomía o trastorno neurológico menor a 90 días',
    ],
  },
  {
    id: 'clinica-de-heridas',
    name: 'Clínica de heridas',
    icon: 'bandage',
    summary: 'Manejo de heridas de mediana y alta complejidad sin salir de casa.',
    includes: ['Curaciones y manejo médico', 'Terapia enterostomal', 'Insumos y rehabilitación'],
  },
  {
    id: 'rehabilitacion',
    name: 'Rehabilitación',
    icon: 'figure',
    summary: 'Terapias domiciliarias para recuperar movimiento, respiración y autonomía.',
    includes: ['Terapia física y respiratoria', 'Lenguaje y deglución', 'Terapia ocupacional'],
  },
  {
    id: 'consulta-domiciliaria',
    name: 'Consulta domiciliaria',
    icon: 'clipboard',
    summary: 'El profesional va hasta su casa para la consulta.',
    includes: ['Medicina general', 'Nutrición y psicología', 'Trabajo social'],
  },
  {
    id: 'enfermeria',
    name: 'Enfermería',
    icon: 'syringe',
    summary: 'Cuidados de enfermería y educación a la familia en el cuidado del paciente.',
    includes: ['Toma de laboratorios y glucometría', 'Cambio de sondas', 'Curaciones tipo I y II'],
  },
];

const u = (id: string, w: number, extra = '') =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}${extra}`;

/* Fotografías provisionales de Unsplash (licencia libre). Reemplazar por fotos propias de la IPS. */
export const photos = {
  hero: {
    src: u('1765896387377-e293914d1e69', 1400),
    srcSmall: u('1765896387377-e293914d1e69', 800),
    alt: 'Una cuidadora y una paciente mayor ríen juntas en la sala de la casa.',
  },
  palliative: {
    src: u('1775049728396-d641f91f6c62', 900),
    alt: 'Las manos de una persona mayor descansan sobre una manta azul.',
  },
  team: {
    src: u('1758691462477-976f771224d8', 1200),
    alt: 'Una médica conversa con un paciente mayor sentados en el sofá de su casa.',
  },
  caregiver: {
    src: u('1762955911431-4c44c7c3f408', 1200),
    alt: 'Una cuidadora acompaña a una pareja mayor en una actividad en la mesa de su casa.',
  },
};
