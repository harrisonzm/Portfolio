import { useRef, useState } from "react";
import { ContactForm } from "./components/ContactForm";
import {
  profile,
  projects,
  experiences,
  certifications,
  skillGroups,
} from "./data/profile";
import { projectCopy, experienceCopy, services } from "./data/portfolio";

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;
const filters = ["Todos", "Web", "Automatización", "IA"] as const;
type Filter = (typeof filters)[number];

function Icon({
  kind = "arrow",
}: {
  kind?: "arrow" | "download" | "code" | "flow" | "spark" | "close";
}) {
  const paths = {
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />,
    code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />,
    flow: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
        <path d="M9 6h6a3 3 0 0 1 3 3v6M6 9v9h9" />
      </>
    ),
    spark: <path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
  };
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[kind]}
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>("Todos");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [contactTopic, setContactTopic] = useState(
    "Hablemos de una oportunidad",
  );
  const [copyStatus, setCopyStatus] = useState("Copiar correo");
  const dialog = useRef<HTMLDialogElement>(null);
  function openProject(index: number) {
    setSelectedProject(index);
    dialog.current?.showModal();
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("¡Correo copiado!");
    } catch {
      setCopyStatus("Selecciona el correo para copiarlo");
    }
  }
  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <header className="header">
        <div className="container nav-bar">
          <a
            className="brand"
            href="#inicio"
            aria-label="Harrison Zuleta, inicio"
          >
            hz<span>.</span>
            <small>HARRISON ZULETA</small>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Cerrar" : "Menú"} <span>{menuOpen ? "−" : "+"}</span>
          </button>
          <nav
            id="main-nav"
            className={menuOpen ? "navigation is-open" : "navigation"}
            aria-label="Navegación principal"
          >
            {[
              ["#servicios", "Servicios"],
              ["#proyectos", "Proyectos"],
              ["#experiencia", "Experiencia"],
              ["#sobre-mi", "Sobre mí"],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contacto"
              onClick={() => setMenuOpen(false)}
            >
              Hablemos <Icon />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section
          className="hero container"
          id="inicio"
          aria-labelledby="hero-title"
        >
          <div className="hero-main">
            <div className="hero-copy">
              <div className="availability">
                <span className="status-dot" /> Disponible para proyectos y
                oportunidades
              </div>
              <p className="hero-intro">
                Hola, soy Harrison. <span>Desarrollo software.</span>
              </p>
              <h1 id="hero-title">
                Ideas claras.
                <br />
                Software que
                <br />
                <em>hace más.</em>
                <span className="title-dot">↗</span>
              </h1>
              <p className="hero-description">
                Convierto ideas en experiencias web, automatizo procesos y
                construyo agentes de IA. Tecnología bien pensada para resolver
                problemas reales.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#proyectos">
                  Explora mi trabajo <Icon />
                </a>
                <a
                  className="text-link"
                  href={asset("cv-es.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Descargar CV <Icon kind="download" />
                </a>
              </div>
              <div className="hero-location">
                <span>◎</span> Desde Colombia. Con alcance global.
              </div>
            </div>
            <div
              className="hero-visual"
              aria-label="Ilustración del proceso: idea, desarrollo y producto"
            >
              <div className="visual-top">
                <span>
                  <i /> DE LA IDEA AL PRODUCTO
                </span>
                <span>01 — 03</span>
              </div>
              <div className="visual-grid">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="idea-node">
                  <Icon kind="spark" />
                  <span>Una buena idea</span>
                  <small>El punto de partida</small>
                </div>
                <div className="connector connector-one" />
                <div className="code-node">
                  <div>
                    <span className="window-dots">● ● ●</span>
                    <span>build.ts</span>
                  </div>
                  <pre>
                    <span className="code-muted">
                      // Menos fricción. Más posibilidades.
                    </span>
                    {"\n"}
                    <span className="code-lime">const</span> solución = {"{\n"}{" "}
                    web: <span className="code-lime">'intuitiva'</span>,{"\n"}{" "}
                    procesos: <span className="code-lime">'conectados'</span>,
                    {"\n"} ia:{" "}
                    <span className="code-lime">'con propósito'</span>
                    {"\n};"}
                  </pre>
                </div>
                <div className="connector connector-two" />
                <div className="result-node">
                  <span className="result-check">✓</span>
                  <div>
                    Listo para crecer<small>Software que trabaja contigo</small>
                  </div>
                  <Icon />
                </div>
                <span className="visual-cross cross-one">+</span>
                <span className="visual-cross cross-two">+</span>
              </div>
              <div className="visual-bottom">
                <span className="status-dot" /> Diseñado con intención.
                Construido para durar.
              </div>
              <div className="floating-label">
                <span>✳</span> Pensar. Crear. Mejorar.
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <p>
              FULL STACK DEVELOPMENT <span>/</span> AUTOMATIZACIÓN{" "}
              <span>/</span> AI ENGINEERING
            </p>
            <a href="#servicios">
              Sigue explorando <span>↓</span>
            </a>
          </div>
        </section>

        <section className="services-section" id="servicios">
          <div className="container section-space">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Lo que puedo hacer por ti</p>
                <h2>
                  Una idea. Muchas <em>posibilidades.</em>
                </h2>
              </div>
              <p>
                Desde tu primera página web hasta los procesos que hacen crecer
                tu negocio.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service" key={service.title}>
                  <div className="service-top">
                    <Icon kind={service.icon} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-deliverables">
                    {service.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <a
                    className="text-link"
                    href="#contact-form"
                    onClick={() => setContactTopic(service.subject)}
                  >
                    Hablemos de tu idea <Icon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container section-space" id="proyectos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Trabajo seleccionado</p>
              <h2>
                Del código al <em>impacto.</em>
              </h2>
            </div>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              Mi GitHub <Icon />
            </a>
          </div>
          <div className="project-toolbar">
            <p>Una selección de lo que he construido.</p>
            <div
              className="filters"
              role="group"
              aria-label="Filtrar proyectos"
            >
              {filters.map((item) => (
                <button
                  key={item}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {projectCopy.map(
              (project, index) =>
                (filter === "Todos" || project.filter === filter) && (
                  <article className="project" key={project.name}>
                    <button
                      className={`project-preview preview-${index}`}
                      onClick={() => openProject(index)}
                      aria-label={`Ver detalles de ${project.name}`}
                    >
                      <ProjectVisual index={index} />
                      <span className="preview-caption">VISTA CONCEPTUAL</span>
                      <span className="preview-open">
                        <Icon />
                      </span>
                    </button>
                    <div className="project-meta">
                      <span>{project.category}</span>
                    </div>
                    <h3>
                      <button onClick={() => openProject(index)}>
                        {project.name}
                        <Icon />
                      </button>
                    </h3>
                    <p>{project.description}</p>
                    <div className="project-impact">
                      <span>↗</span>
                      {project.impact}
                    </div>
                    <div className="tags">
                      {projects[index].stack.slice(0, 4).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </article>
                ),
            )}
          </div>
        </section>

        <section className="experience-section" id="experiencia">
          <div className="container section-space experience-layout">
            <div className="experience-intro">
              <p className="eyebrow">Experiencia</p>
              <h2>
                Construir. <br />
                Aprender. <br />
                <em>Aportar.</em>
              </h2>
              <p>
                He trabajado en productos web, sistemas backend y soluciones de
                IA, desde el entorno universitario hasta equipos de desarrollo y
                consultoría.
              </p>
              <a
                className="text-link"
                href={asset("cv-es.pdf")}
                target="_blank"
                rel="noreferrer"
              >
                Ver mi trayectoria completa <Icon kind="download" />
              </a>
            </div>
            <div className="timeline">
              {experienceCopy.map((experience, index) => (
                <details
                  className="experience"
                  key={`${experiences[index].company}-${index}`}
                  open={index === 0}
                >
                  <summary>
                    <span className="experience-date">{experience.period}</span>
                    <span className="experience-role">
                      <strong>{experiences[index].role}</strong>
                      <span>{experiences[index].company}</span>
                    </span>
                    <span className="expand-icon">+</span>
                  </summary>
                  <div className="experience-body">
                    <p>{experience.summary}</p>
                    <p className="experience-highlight">
                      {experience.highlight}
                    </p>
                    <div className="tags">
                      {experiences[index].stack.slice(0, 4).map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="container section-space about-layout" id="sobre-mi">
          <div className="about-art" aria-hidden="true">
            <span className="about-art-label">
              LA PERSONA DETRÁS DEL CÓDIGO
            </span>
            <div className="monogram">
              h<span>z</span>
              <i>.</i>
            </div>
            <div className="about-art-bottom">
              <span>MEDELLÍN, COLOMBIA</span>
              <span>6°14′ N · 75°34′ O</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Un poco sobre mí</p>
            <h2>
              Curiosidad por entender.
              <br />
              <em>Pasión por construir.</em>
            </h2>
            <p>
              Soy Harrison Zuleta Montoya. Mi trabajo conecta el desarrollo full
              stack con la automatización y la inteligencia artificial. Me
              interesa entender el problema, cuidar los detalles y crear
              soluciones que sean fáciles de usar y mantener.
            </p>
            <p>
              Me formo en Ingeniería de Sistemas e Informática en la Universidad
              Nacional de Colombia. Disfruto colaborar, compartir lo que aprendo
              y llevar una idea desde la primera conversación hasta su
              implementación.
            </p>
            <div className="about-facts">
              <span>⌁ Arquitectura y producto</span>
              <span>◎ Colombia · Trabajo remoto</span>
            </div>
            <details className="credentials">
              <summary>
                Formación y certificaciones <span>+</span>
              </summary>
              <p>
                Ingeniería de Sistemas e Informática · Universidad Nacional de
                Colombia
                <br />
                2022 – 2028 · En formación
              </p>
              <div className="tags">
                {certifications.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="stack-section">
          <div className="container">
            <div className="stack-heading">
              <p className="eyebrow">Las herramientas detrás de las ideas</p>
              <p>La tecnología adecuada para cada problema.</p>
            </div>
            <div className="stack-grid">
              {skillGroups.map((group, index) => (
                <div key={group.title}>
                  <h3>
                    {
                      [
                        "Backend & APIs",
                        "Frontend",
                        "Datos & almacenamiento",
                        "Cloud, DevOps & IA",
                      ][index]
                    }
                  </h3>
                  <p>{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="container contact-layout">
            <div className="contact-intro">
              <p className="eyebrow">
                <span className="status-dot" /> El siguiente paso: conversar
              </p>
              <h2>
                ¿Construimos algo
                <br />
                <em>que importe?</em>
              </h2>
              <p>
                ¿Tienes un proyecto en mente o una oportunidad en tu equipo?
                <br />
                Me encantaría conocerla.
              </p>
              <a
                className="button button-lime"
                href="#contact-form"
                onClick={() => setContactTopic("Hablemos de una oportunidad")}
              >
                Hablemos de tu proyecto <Icon />
              </a>
            </div>
            <div className="contact-form-column">
              <ContactForm
                topic={contactTopic}
                onTopicChange={setContactTopic}
              />
            </div>
            <div className="contact-side">
              <span className="contact-label">Puedes encontrarme aquí</span>
              <a className="email-address" href={`mailto:${profile.email}`}>
                {profile.email}
                <Icon />
              </a>
              <button
                className="copy-email"
                onClick={copyEmail}
                aria-live="polite"
              >
                {copyStatus} <span>⧉</span>
              </button>
              <div className="contact-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <Icon />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub <Icon />
                </a>
              </div>
              <div className="recruiter-note">
                <span>¿Buscas sumar talento a tu equipo?</span>
                <p>
                  Disponible para oportunidades en desarrollo full stack,
                  backend e ingeniería de IA.
                </p>
                <div>
                  <a href={asset("cv-es.pdf")} target="_blank" rel="noreferrer">
                    CV en español <Icon kind="download" />
                  </a>
                  <a href={asset("cv-en.pdf")} target="_blank" rel="noreferrer">
                    CV in English <Icon kind="download" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a className="brand" href="#inicio">
          hz<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Harrison Zuleta Montoya</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
      <dialog
        ref={dialog}
        className="project-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        aria-labelledby="dialog-title"
      >
        {selectedProject !== null && (
          <div className="dialog-content">
            <button
              className="dialog-close"
              aria-label="Cerrar detalles"
              onClick={() => dialog.current?.close()}
            >
              <Icon kind="close" />
            </button>
            <p className="eyebrow">{projectCopy[selectedProject].category}</p>
            <h2 id="dialog-title">{projectCopy[selectedProject].name}</h2>
            <p>{projectCopy[selectedProject].description}</p>
            <div className="project-impact">
              <span>↗</span>
              {projectCopy[selectedProject].impact}
            </div>
            <h3>Qué construí</h3>
            <ul>
              {projectCopy[selectedProject].highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="tags">
              {projects[selectedProject].stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              className="button button-dark"
              href="#contact-form"
              onClick={() => {
                setContactTopic(
                  `Quiero conocer más sobre ${projectCopy[selectedProject].name}`,
                );
                dialog.current?.close();
              }}
            >
              Conversemos sobre este proyecto <Icon />
            </a>
          </div>
        )}
      </dialog>
    </>
  );
}

function ProjectVisual({ index }: { index: number }) {
  if (index === 0)
    return (
      <div className="mock-browser" aria-hidden="true">
        <div className="mock-toolbar">
          <span>● ● ●</span>
          <span>UNGameLab</span>
          <span>↗</span>
        </div>
        <div className="game-body">
          <div className="game-sidebar">
            <strong>
              un<span>game</span>lab.
            </strong>
            <span>Explorar</span>
            <span>Mi biblioteca</span>
            <span>Comunidad</span>
          </div>
          <div className="game-content">
            <small>APRENDER JUGANDO</small>
            <strong>
              El siguiente nivel
              <br />
              de la educación.
            </strong>
            <div className="game-tiles">
              <span>
                ✳<small>Descubre</small>
              </span>
              <span>
                ◈<small>Explora</small>
              </span>
              <span>
                ⌘<small>Aprende</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  if (index === 1)
    return (
      <div className="automation-visual" aria-hidden="true">
        <span className="workflow-label">UN FLUJO. TODO CONECTADO.</span>
        <div className="workflow-nodes">
          <div>
            <Icon kind="code" />
            <span>Cotización</span>
          </div>
          <i>→</i>
          <div className="workflow-center">
            <Icon kind="flow" />
            <span>Automatización</span>
          </div>
          <i>→</i>
          <div>
            <span className="document-icon">PDF</span>
            <span>Entrega</span>
          </div>
        </div>
        <div className="workflow-status">
          <span>✓ Validación</span>
          <span>✓ WhatsApp</span>
          <span>✓ Email</span>
        </div>
      </div>
    );
  if (index === 2)
    return (
      <div className="ai-visual" aria-hidden="true">
        <div className="ai-header">
          <Icon kind="spark" />
          <span>Inteligencia conectada</span>
          <small>AGENT WORKFLOW</small>
        </div>
        <div className="ai-question">
          ¿Qué nos dicen estos datos?<span>↑</span>
        </div>
        <div className="ai-steps">
          <span>01 Clasificar</span>
          <span>02 Recuperar</span>
          <span>03 Analizar</span>
        </div>
        <div className="ai-answer">
          <span>✳</span>
          <div>
            <strong>De la información a la decisión.</strong>
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    );
  return (
    <div className="architecture-visual" aria-hidden="true">
      <span className="workflow-label">INDEPENDIENTE POR DISEÑO</span>
      <div className="architecture-apps">
        <div>
          <span>◉</span>Estudiantes
        </div>
        <div>
          <span>▦</span>Cursos
        </div>
        <div>
          <span>↗</span>Inscripciones
        </div>
      </div>
      <div className="architecture-bus">EVENT-DRIVEN COMMUNICATION</div>
      <div className="architecture-services">
        <span>API</span>
        <span>API</span>
        <span>API</span>
      </div>
    </div>
  );
}
export default App;
