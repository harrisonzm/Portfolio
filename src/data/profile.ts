export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export type Project = {
  name: string;
  category: string;
  description: string;
  impact: string;
  stack: string[];
  highlights: string[];
};

export const profile = {
  name: 'Harrison Zuleta Montoya',
  initials: 'HZM',
  headline: 'Full Stack Developer & AI Engineer',
  location: 'Itagüí, Antioquia, Colombia',
  email: 'harrison.zmontoya@gmail.com',
  phone: '+57 305 265 4536',
  linkedin: 'https://www.linkedin.com/in/harrison-zuleta-montoya',
  github: 'https://github.com/harrisonzm',
  summary:
    'Systems Engineering student at Universidad Nacional de Colombia with 2+ years of experience building scalable backend services, modern web platforms, cloud integrations, and generative AI workflows. Focused on clean architecture, secure APIs, reliable automation, and software that turns complex processes into usable products.',
  elevatorPitch:
    'I build production-oriented software across backend, frontend, cloud, and AI. My work combines technical depth with product thinking: modular APIs, responsive interfaces, role-based access, cloud deployment, multi-agent AI flows, and automation pipelines that improve reliability and operational speed.',
  availability:
    'Open to Full Stack, Backend, AI Engineering, and Software Engineering roles in teams that value learning, collaboration, and technical excellence.',
};

export const metrics = [
  { value: '2+ yrs', label: 'Software engineering experience' },
  { value: '150+', label: 'Teachers enabled through UNGameLab' },
  { value: '35%', label: 'Faster AI response workflows' },
  { value: '30%', label: 'Improved retrieval accuracy in RAG pipeline' },
];

export const coreStack = [
  'Java',
  'Spring Boot',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'NestJS',
  'Express.js',
  'React',
  'Angular',
  'Svelte',
  'Next.js',
  'Python',
  'FastAPI',
  'Django',
  'PostgreSQL',
  'MongoDB',
  'Sequelize',
  'Mongoose',
  'TypeORM',
  'Docker',
  'AWS',
  'GCP',
  'Cloudflare',
  'LangGraph',
  'LangChain',
  'ChromaDB',
  'n8n',
  'Claude Agent SDK',
];

export const skillGroups = [
  {
    title: 'Backend & APIs',
    items: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'Express.js', 'FastAPI', 'Django', 'JWT', 'OAuth2'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'Svelte', 'Next.js', 'TypeScript', 'SASS', 'Tailwind CSS', 'Redux'],
  },
  {
    title: 'Data & Storage',
    items: ['PostgreSQL', 'MongoDB', 'Sequelize', 'Mongoose', 'TypeORM', 'ChromaDB', 'pandas'],
  },
  {
    title: 'Cloud, DevOps & AI',
    items: ['AWS EC2', 'AWS S3', 'GCP', 'Docker', 'Cloudflare', 'LangGraph', 'LangChain', 'Claude', 'n8n'],
  },
];

export const experiences: Experience[] = [
  {
    role: 'AI Engineer & Consultant',
    company: 'OFI Services',
    period: 'Jan 2026 — Present',
    location: 'Medellín, Colombia',
    summary:
      'Consulting and engineering role focused on AI-enabled solutions, automation, and applied software systems.',
    bullets: [
      'Designing AI-oriented software solutions that combine product requirements, technical feasibility, and scalable implementation paths.',
      'Supporting clients and teams in transforming business problems into structured workflows, integration plans, and maintainable software components.',
    ],
    stack: ['AI Consulting', 'Automation', 'Software Architecture', 'Backend Systems'],
  },
  {
    role: 'Software Developer',
    company: 'ABI / Connect AI',
    period: 'Mar 2025 — Nov 2025',
    location: 'Remote / Colombia',
    summary:
      'Modernized backend services, automation flows, and administrative dashboards for a business platform with quoting and messaging integrations.',
    bullets: [
      'Automated quote delivery by orchestrating backend services and integrating WhatsApp, email, MessageBird, and SMTP flows for dynamic PDF distribution.',
      'Improved backend maintainability by refactoring TypeScript services with dependency injection, Tsyringe, TypeORM repositories, and clearer module boundaries.',
      'Built responsive Angular dashboards for brokers, users, roles, and configuration workflows, improving usability for administrative operations.',
      'Reduced delivery errors by 35% through real-time validations, cross-field forms, and stronger error-control flows.',
      'Contributed to AI and data workflows using LangGraph, FastAPI, pandas, and AWS integrations for advanced information analysis.',
    ],
    stack: ['Angular', 'Tailwind CSS', 'Express.js', 'TypeScript', 'Tsyringe', 'TypeORM', 'PostgreSQL', 'AWS', 'LangGraph', 'FastAPI'],
  },
  {
    role: 'Software Engineer',
    company: 'Agora Excelencia',
    period: 'Jan 2025 — Jan 2026',
    location: 'Medellín, Colombia',
    summary:
      'Led the design and delivery of scalable software solutions in an agile environment, from requirements analysis to deployment.',
    bullets: [
      'Directed the development, design, and deployment of reliable software platforms using modern engineering practices and scalable architecture decisions.',
      'Translated client needs into practical requirements, implementation priorities, and stable product increments through collaborative analysis and technical planning.',
      'Promoted maintainable solutions by aligning architecture, usability, and delivery goals across development workflows.',
    ],
    stack: ['Software Architecture', 'Agile Delivery', 'Requirements Analysis', 'Scalable Platforms'],
  },
  {
    role: 'Teaching Assistant — Operating Systems',
    company: 'Universidad Nacional de Colombia',
    period: 'Apr 2025 — Jan 2026',
    location: 'Medellín, Colombia',
    summary:
      'Academic support role focused on Linux, C programming, process management, memory, synchronization, and systems-level debugging.',
    bullets: [
      'Guided 40+ students through operating systems topics including processes, threads, synchronization, memory management, CPU scheduling, and deadlocks.',
      'Supported practical learning through C and Linux exercises using GDB, semaphores, mutexes, virtual machines, and systems programming workflows.',
      'Reviewed weekly assignments and projects with technical feedback based on rigorous performance criteria and systems theory foundations.',
    ],
    stack: ['C', 'Linux', 'GDB', 'Operating Systems', 'Concurrency', 'Virtual Machines'],
  },
  {
    role: 'Full Stack Engineer',
    company: 'Universidad Nacional de Colombia',
    period: 'Jan 2024 — Feb 2025',
    location: 'Medellín, Colombia',
    summary:
      'Designed and developed UNGameLab, a web platform for organizing, sharing, and managing educational videogame resources.',
    bullets: [
      'Led the design and implementation of UNGameLab, increasing educational resource organization and reuse by 50% while enabling access for 150+ teachers.',
      'Built secure and scalable backend APIs with Express.js and NestJS, integrated with PostgreSQL and MongoDB through Sequelize and Mongoose.',
      'Implemented JWT and Google OAuth2 authentication with role-based access control for users, creators, and moderators.',
      'Improved scalability and deployment reliability by integrating AWS S3, AWS EC2, Cloudflare, and agile delivery practices.',
    ],
    stack: ['React', 'TypeScript', 'SASS', 'Redux', 'Express.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'JWT', 'OAuth2', 'AWS', 'Cloudflare'],
  },
];

export const projects: Project[] = [
  {
    name: 'UNGameLab Platform',
    category: 'Full Stack / EdTech',
    description:
      'A web platform to centralize, classify, and share educational games for university teaching communities.',
    impact: '50% improvement in resource organization and reuse; access enabled for 150+ teachers.',
    stack: ['React', 'TypeScript', 'Express.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'AWS', 'Cloudflare'],
    highlights: [
      'Role-based access control with JWT and Google OAuth2.',
      'Backend architecture designed for maintainability and growth.',
      'Cloud storage and deployment integrations for better performance and scalability.',
    ],
  },
  {
    name: 'Quote Automation Platform',
    category: 'Backend Automation',
    description:
      'Automation layer for quote delivery through generated PDFs, messaging APIs, and email channels.',
    impact: '35% fewer delivery errors through stronger validations and controlled service orchestration.',
    stack: ['TypeScript', 'Express.js', 'TypeORM', 'PostgreSQL', 'MessageBird', 'SMTP', 'Angular'],
    highlights: [
      'Integrated WhatsApp and email APIs for dynamic PDF delivery.',
      'Refactored backend services with dependency injection and repositories.',
      'Built management dashboards for brokers, users, roles, and operational settings.',
    ],
  },
  {
    name: 'Generative AI Analytics Workflow',
    category: 'AI Engineering',
    description:
      'Multi-agent workflow for query classification, contextual data analysis, insight generation, and export automation.',
    impact: '35% faster response time, 20% higher decision accuracy, and 30% better retrieval accuracy.',
    stack: ['LangGraph', 'LangChain', 'ChromaDB', 'FastAPI', 'Python', 'AWS S3', 'boto3'],
    highlights: [
      'Built reflective multi-agent flows with clear node responsibilities.',
      'Implemented local RAG using ChromaDB and optimized prompting templates.',
      'Connected TXT/CSV artifacts to AWS S3 through scalable output automation.',
    ],
  },
  {
    name: 'Students & Courses Administration System',
    category: 'Microservices / Microfrontends',
    description:
      'Modular platform to register students, create courses, and handle real-time enrollment through independent services.',
    impact: 'Improved collaboration and maintainability through architectural decoupling.',
    stack: ['React', 'TypeScript', 'Module Federation', 'MUI', 'NestJS', 'Docker'],
    highlights: [
      'Implemented event-driven communication with TCP between NestJS services.',
      'Used Module Federation to reuse React components across projects.',
      'Containerized modular services with Docker Compose.',
    ],
  },
];

export const certifications = [
  'CyberOps Associate',
  'Curso de Java Spring',
  'Claude Code in Action',
  'Cybersecurity Essentials',
  'Intermediate English',
  'Java Backend with Spring — Platzi',
];

export const education = {
  institution: 'Universidad Nacional de Colombia',
  degree: 'Systems and Computer Science Engineering',
  period: 'Aug 2022 — Jul 2028',
};
