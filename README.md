# Portfolio — Harrison Zuleta Montoya

Professional portfolio for **Harrison Zuleta Montoya**, Full Stack Developer and AI Engineer focused on scalable web platforms, backend systems, cloud integrations, automation, and generative AI workflows.

The portfolio was designed to be recruiter-friendly: fast to scan, visually polished, and centered on impact, ownership, technologies, and measurable outcomes.

## Highlights

- Modern responsive landing page built with **React + TypeScript + Vite**.
- Recruiter-oriented sections: hero, impact metrics, experience, projects, tech stack, education, certifications, and contact.
- CV and LinkedIn profile PDFs included in `/public` for direct download.
- Experience bullets rewritten to emphasize outcomes, technical depth, and business impact.
- Clean, accessible, dark UI with glass cards, gradients, strong hierarchy, and mobile-first behavior.

## Tech Stack

- React
- TypeScript
- Vite
- CSS3
- Responsive design

## Project Structure

```txt
Portfolio/
├── public/
│   ├── cv-en.pdf
│   ├── cv-es.pdf
│   └── profile.pdf
├── src/
│   ├── components/
│   │   ├── Section.tsx
│   │   └── TechPill.tsx
│   ├── data/
│   │   └── profile.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Run locally

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:5173
```

## Build for production

```bash
npm run build
npm run preview
```

## Deploy

Recommended platforms:

- Vercel
- Netlify
- GitHub Pages with a Vite deployment workflow

## Suggested GitHub commands

If the repository does not exist yet, create a new GitHub repository named `Portfolio`, then run:

```bash
git init
git add .
git commit -m "Create professional portfolio"
git branch -M main
git remote add origin https://github.com/harrisonzm/Portfolio.git
git push -u origin main
```

If the repository already exists:

```bash
git remote add origin https://github.com/harrisonzm/Portfolio.git
git branch -M main
git push -u origin main
```

## Customization checklist

- Replace or add real project links when public repositories are available.
- Add a profile photo or professional illustration if desired.
- Update metrics only when there is evidence for new numbers.
- Add deployment URL after publishing.
- Consider adding analytics only if privacy requirements are clear.
