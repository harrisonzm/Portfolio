import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
};

export function Section({ eyebrow, title, description, children, id }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="section-heading">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
}
