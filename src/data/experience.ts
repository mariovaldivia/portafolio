import type { Localized } from '../i18n/ui';

export interface Highlight {
  text: Localized;
  /** Muestra la píldora "★" de logro destacado. */
  badge?: boolean;
}

export interface Job {
  company: string;
  url?: string;
  role: Localized;
  /** 'AAAA-MM' */
  start: string;
  /** 'AAAA-MM' o null si es el puesto actual. */
  end: string | null;
  /** Ubicación y modalidad, por ejemplo "Santiago, Chile · Remoto". */
  mode: Localized;
  highlights: Highlight[];
  stack: string[];
}

/** Del más reciente al más antiguo. */
export const experience: Job[] = [
  {
    company: 'Ninja Excel',
    role: { es: 'Software Engineer II', en: 'Software Engineer II' },
    start: '2024-06',
    end: null,
    mode: { es: 'Santiago, Chile · Remoto', en: 'Santiago, Chile · Remote' },
    highlights: [
      {
        text: {
          es: 'Seleccionado como Top Performer 2025 del área de ingeniería por el impacto en la calidad del código y el cumplimiento de objetivos.',
          en: 'Selected as Top Performer 2025 in the engineering team for impact on code quality and goal delivery.',
        },
        badge: true,
      },
      {
        text: {
          es: 'Responsable del mantenimiento y la evolución del backend de la plataforma con Symfony 7 y PHP 8, asegurando alta disponibilidad y rendimiento.',
          en: 'Own the maintenance and evolution of the platform backend with Symfony 7 and PHP 8, ensuring high availability and performance.',
        },
      },
      {
        text: {
          es: 'Champion de épicas de desarrollo bajo Scrum: coordino la entrega técnica y mentoreo a ingenieros junior mediante revisiones de código exhaustivas.',
          en: 'Champion of development epics under Scrum: I coordinate technical delivery and mentor junior engineers through thorough code reviews.',
        },
      },
    ],
    stack: ['PHP 8', 'Symfony 7', 'JavaScript', 'PostgreSQL', 'Docker', 'Scrum'],
  },
  {
    company: 'Sattel Chile',
    role: {
      es: 'Ingeniero de Software / Ingeniero de Proyectos',
      en: 'Software Engineer / Project Engineer',
    },
    start: '2013-03',
    end: '2024-06',
    mode: { es: 'Copiapó, Chile', en: 'Copiapó, Chile' },
    highlights: [
      {
        text: {
          es: 'Creé y consolidé el departamento de desarrollo de software, transformando la capacidad tecnológica interna y expandiendo el catálogo de productos hacia Chile y Perú.',
          en: 'Founded and grew the software development department, transforming in-house technical capabilities and expanding the product catalog to Chile and Peru.',
        },
      },
      {
        text: {
          es: 'Diseñé e implementé SICAM, sistema de control de acceso a mina con Python/Django, edge computing, RFID y activación de periféricos vía PLC, Modbus y Serial.',
          en: 'Designed and built SICAM, a mine access control system using Python/Django, edge computing, RFID and peripheral activation via PLC, Modbus and Serial.',
        },
      },
      {
        text: {
          es: 'Desarrollé SCIC, integrando software (Python/Django) con hardware (PLC) para el monitoreo automatizado de carga de agua en camiones aljibe.',
          en: 'Developed SCIC, integrating software (Python/Django) with hardware (PLC) to automatically monitor water loading in tanker trucks.',
        },
      },
      {
        text: {
          es: 'Lideré el desarrollo de la intranet corporativa en Symfony, centralizando la gestión de recursos, prevención de riesgos y servicios técnicos.',
          en: 'Led the development of the corporate intranet in Symfony, centralizing resource management, risk prevention and technical services.',
        },
      },
      {
        text: {
          es: 'Gestión de proyectos de ingeniería, formulación de propuestas técnicas y licitaciones.',
          en: 'Managed engineering projects and prepared technical proposals and tenders.',
        },
      },
    ],
    stack: ['Python', 'Django', 'PHP', 'Symfony', 'RFID', 'PLC', 'Modbus', 'Edge computing'],
  },
  {
    company: 'NBETA',
    role: { es: 'FullStack Developer', en: 'Full-Stack Developer' },
    start: '2011-03',
    end: '2013-02',
    mode: { es: 'Copiapó, Chile', en: 'Copiapó, Chile' },
    highlights: [
      {
        text: {
          es: 'Diseñé y desplegué aplicaciones web a medida para clientes regionales, desde la propuesta técnica hasta la implementación final.',
          en: 'Designed and shipped custom web applications for regional clients, from technical proposal to final delivery.',
        },
      },
    ],
    stack: ['PHP', 'Symfony', 'MySQL', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Bash'],
  },
];
