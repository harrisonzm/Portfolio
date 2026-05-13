import type { ReactNode } from 'react';

type TechPillProps = {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'quiet';
};

export function TechPill({ children, variant = 'default' }: TechPillProps) {
  return <span className={`tech-pill tech-pill--${variant}`}>{children}</span>;
}
