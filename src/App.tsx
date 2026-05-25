import type { CSSProperties } from 'react';
import { Section } from './components/Section';
import { TechPill } from './components/TechPill';
import {
  certifications,
  coreStack,
  education,
  experiences,
  metrics,
  profile,
  projects,
  skillGroups,
} from './data/profile';

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

const navItems = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <div className="page-shell">
        <Section
          id="experience"
          eyebrow="Selected impact"
          title="Experience built across product, backend, cloud, and AI"
          description="Recruiter-friendly highlights rewritten from the CV and LinkedIn profile to focus on ownership, outcomes, and technical depth."
        >
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="experience-card" key={`${experience.company}-${experience.role}`}>
                <div className="experience-topline">
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="company">{experience.company}</p>
                  </div>
                  <div className="period">
                    <span>{experience.period}</span>
                    <small>{experience.location}</small>
                  </div>
                </div>
                <p className="experience-summary">{experience.summary}</p>
                <ul>
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="pill-row">
                  {experience.stack.map((item) => (
                    <TechPill key={item} variant="quiet">
                      {item}
                    </TechPill>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Portfolio proof"
          title="Projects that make the technical story concrete"
          description="A curated set of projects that show backend architecture, full stack delivery, AI workflows, automation, and distributed systems thinking."
        >
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-category">{project.category}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="impact">{project.impact}</div>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="pill-row">
                  {project.stack.map((item) => (
                    <TechPill key={item}>{item}</TechPill>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="stack"
          eyebrow="Technical foundation"
          title="A stack shaped for scalable software and AI-enabled systems"
          description="Balanced coverage across backend, frontend, data, cloud, automation, and AI agent workflows."
        >
          <div className="stack-showcase">
            <div className="stack-cloud">
              {coreStack.map((tech, index) => (
                <span style={{ '--delay': `${index * 35}ms` } as CSSProperties} key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="pill-row">
                    {group.items.map((item) => (
                      <TechPill key={item} variant="accent">
                        {item}
                      </TechPill>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Education & credentials"
          title="Academic background and certifications"
          description="Formal education complemented by applied certifications in backend, cybersecurity, AI tooling, and English."
        >
          <div className="credential-grid">
            <article className="credential-card featured-credential">
              <span className="eyebrow">Education</span>
              <h3>{education.institution}</h3>
              <p>{education.degree}</p>
              <small>{education.period}</small>
            </article>
            <article className="credential-card">
              <span className="eyebrow">Certifications</span>
              <div className="cert-list">
                {certifications.map((certification) => (
                  <span key={certification}>{certification}</span>
                ))}
              </div>
            </article>
          </div>
        </Section>

        <Contact />
      </div>
    </main>
  );
}

function Navigation() {
  return (
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Go to homepage">
        <span>{profile.initials}</span>
        <strong>{profile.name}</strong>
      </a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <div className="hero-content">
        <div className="hero-copy">
          <span className="availability">{profile.availability}</span>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:harrison.zmontoya@gmail.com">
              Contact me
            </a>
            <a className="button button-secondary" href={assetPath('cv-en.pdf')} target="_blank" rel="noreferrer">
              Download CV
            </a>
            <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Professional snapshot">
          <div className="avatar">{profile.initials}</div>
          <div>
            <p className="card-label">Professional focus</p>
            <h2>Scalable web platforms, backend APIs, automation, and AI agent workflows.</h2>
          </div>
          <p>{profile.elevatorPitch}</p>
          <div className="profile-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={assetPath('profile.pdf')} target="_blank" rel="noreferrer">
              LinkedIn PDF
            </a>
          </div>
        </aside>
      </div>
      <div className="metrics-grid" aria-label="Career metrics">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Let’s connect"
      title="Ready to discuss backend, full stack, and AI engineering opportunities"
      description="The portfolio is designed to give recruiters a fast, polished view of Harrison’s technical depth and impact."
    >
      <div className="contact-card">
        <div>
          <h3>Harrison Zuleta Montoya</h3>
          <p>{profile.location}</p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn Profile
          </a>
          <a href={assetPath('cv-es.pdf')} target="_blank" rel="noreferrer">
            CV en español
          </a>
        </div>
      </div>
    </Section>
  );
}

export default App;
