export const services = [
  {
    icon: "code" as const,
    title: "Desarrollo web",
    description:
      "Una presencia digital que se siente tan bien como funciona. Sitios y aplicaciones pensados para tus usuarios y tus objetivos.",
    items: [
      "Páginas web & landing pages",
      "Aplicaciones full stack",
      "APIs & plataformas a medida",
    ],
    subject: "Tengo un proyecto de desarrollo web",
  },
  {
    icon: "flow" as const,
    title: "Automatizaciones",
    description:
      "Menos tareas repetitivas, más tiempo para lo importante. Conecto tus herramientas y convierto procesos manuales en flujos confiables.",
    items: [
      "Integraciones entre herramientas",
      "Flujos con n8n & APIs",
      "Documentos, reportes & notificaciones",
    ],
    subject: "Quiero automatizar un proceso",
  },
  {
    icon: "spark" as const,
    title: "Agentes & soluciones de IA",
    description:
      "Inteligencia artificial con un propósito claro. Agentes que consultan información, conectan sistemas y apoyan a tu equipo.",
    items: [
      "Agentes & asistentes inteligentes",
      "RAG con tus documentos",
      "Análisis & flujos multiagente",
    ],
    subject: "Quiero explorar una solución de IA",
  },
];
export const projectCopy = [
  {
    name: "UNGameLab",
    category: "DESARROLLO WEB / EDTECH",
    filter: "Web",
    description:
      "Una plataforma para descubrir, organizar y compartir videojuegos educativos en la comunidad universitaria.",
    impact: "150+ docentes con acceso a recursos educativos",
    highlights: [
      "Diseño e implementación full stack de una biblioteca de juegos educativos.",
      "Autenticación con JWT y Google OAuth2, con permisos por rol.",
      "APIs con Express y NestJS, bases de datos PostgreSQL y MongoDB e integración con AWS.",
      "Mejora del 50% en la organización y reutilización de recursos.",
    ],
  },
  {
    name: "Cotizaciones en automático",
    category: "AUTOMATIZACIÓN / BACKEND",
    filter: "Automatización",
    description:
      "Del formulario a la entrega: generación de cotizaciones PDF y envío conectado por WhatsApp y correo.",
    impact: "35% menos errores en la entrega de cotizaciones",
    highlights: [
      "Integración de canales de WhatsApp, MessageBird y SMTP para la distribución de PDF.",
      "Validaciones en tiempo real y control de errores durante la entrega.",
      "Servicios TypeScript con inyección de dependencias y repositorios TypeORM.",
      "Paneles Angular para gestionar usuarios, roles y operaciones.",
    ],
  },
  {
    name: "De los datos a las decisiones",
    category: "AGENTES / INTELIGENCIA ARTIFICIAL",
    filter: "IA",
    description:
      "Un flujo multiagente que clasifica consultas, recupera contexto y transforma datos en información útil.",
    impact: "35% menos tiempo de respuesta en flujos de IA",
    highlights: [
      "Orquestación de agentes con LangGraph y responsabilidades definidas por nodo.",
      "Recuperación de información con RAG local y ChromaDB.",
      "Mejora del 30% en la precisión de recuperación y del 20% en la precisión de decisiones.",
      "Análisis con Python y FastAPI; exportación de archivos TXT y CSV a AWS S3.",
    ],
  },
  {
    name: "Una plataforma, módulos independientes",
    category: "DESARROLLO WEB / ARQUITECTURA",
    filter: "Web",
    description:
      "Gestión de estudiantes, cursos e inscripciones con microservicios y microfrontends que pueden evolucionar por separado.",
    impact: "Arquitectura desacoplada para facilitar el mantenimiento",
    highlights: [
      "Comunicación por eventos sobre TCP entre servicios NestJS.",
      "Microfrontends React con componentes compartidos mediante Module Federation.",
      "Registro de estudiantes, creación de cursos e inscripciones en tiempo real.",
      "Servicios modulares desplegables con Docker Compose.",
    ],
  },
];
export const experienceCopy = [
  {
    period: "ENE 2026 — ACTUALIDAD",
    summary:
      "Consultoría e ingeniería de soluciones de IA, automatización y sistemas de software aplicados a necesidades de negocio.",
    highlight:
      "Transformo problemas de clientes en flujos de trabajo, planes de integración y componentes mantenibles.",
  },
  {
    period: "MAR 2025 — NOV 2025",
    summary:
      "Desarrollo de servicios backend, automatizaciones y paneles administrativos para una plataforma de cotizaciones y mensajería.",
    highlight:
      "Reduje los errores de entrega un 35% con validaciones en tiempo real y mejores flujos de control.",
  },
  {
    period: "ENE 2025 — ENE 2026",
    summary:
      "Diseño y desarrollo de plataformas de software, desde el análisis de requerimientos hasta el despliegue en un entorno ágil.",
    highlight:
      "Conecté las necesidades del cliente con decisiones de arquitectura, prioridades y entregas de producto.",
  },
  {
    period: "ABR 2025 — ENE 2026",
    summary:
      "Monitoría de Sistemas Operativos: Linux, programación en C, procesos, memoria y sincronización.",
    highlight:
      "Acompañé a más de 40 estudiantes con ejercicios prácticos, revisión de proyectos y retroalimentación técnica.",
  },
  {
    period: "ENE 2024 — FEB 2025",
    summary:
      "Diseño y desarrollo full stack de UNGameLab para organizar y compartir recursos de videojuegos educativos.",
    highlight:
      "Habilité el acceso para más de 150 docentes y mejoré la organización y reutilización de recursos un 50%.",
  },
];
