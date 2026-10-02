import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

const site = new URL(
  process.env.SITE_URL || "https://harrisonzm.github.io/Portfolio/",
);
if (site.protocol !== "https:" || site.search || site.hash) {
  throw new Error(
    "SITE_URL must be an absolute HTTPS URL without a query or fragment.",
  );
}
if (!site.pathname.endsWith("/")) site.pathname += "/";
const siteUrl = site.href;
const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.tsx");
  const { profile } = await server.ssrLoadModule("/src/data/profile.ts");
  const { services } = await server.ssrLoadModule("/src/data/portfolio.ts");
  const markup = renderToString(createElement(App));
  const personId = `${siteUrl}#harrison`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url: siteUrl,
        jobTitle: "Full Stack Developer & AI Engineer",
        description:
          "Desarrollador full stack en Colombia. Ofrece desarrollo web, automatizaciones y agentes de inteligencia artificial, y está disponible para oportunidades laborales.",
        email: profile.email,
        sameAs: [profile.linkedin, profile.github],
        knowsAbout: [
          "Desarrollo web",
          "Automatización de procesos",
          "Agentes de inteligencia artificial",
          "React",
          "TypeScript",
          "Python",
          "LangGraph",
          "n8n",
          "Backend",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Itagüí",
          addressRegion: "Antioquia",
          addressCountry: "CO",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: `${profile.name} | Portafolio`,
        inLanguage: "es",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}#webpage`,
        url: siteUrl,
        name: `${profile.name} | Desarrollo web, automatización e IA`,
        inLanguage: "es",
        mainEntity: { "@id": personId },
        isPartOf: { "@id": `${siteUrl}#website` },
      },
      ...services.map((service, index) => ({
        "@type": "Service",
        "@id": `${siteUrl}#service-${index + 1}`,
        name: service.title,
        description: service.description,
        serviceType: service.title,
        url: `${siteUrl}#servicios`,
        provider: { "@id": personId },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${siteUrl}#contacto`,
        },
      })),
    ],
  };
  const imageUrl = new URL("social-preview.png", siteUrl).href;
  const seo = `<link rel="canonical" href="${escapeHtml(siteUrl)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="author" content="${escapeHtml(profile.name)}" />
    <meta property="og:type" content="profile" />
    <meta property="og:url" content="${escapeHtml(siteUrl)}" />
    <meta property="og:locale" content="es_CO" />
    <meta property="og:site_name" content="Harrison Zuleta | Portafolio" />
    <meta property="og:image" content="${escapeHtml(imageUrl)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Harrison Zuleta: desarrollo web, automatizaciones y agentes de IA" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Harrison Zuleta | Desarrollo web, automatización e IA" />
    <meta name="twitter:description" content="Desarrollo web, automatizaciones y agentes de IA en Colombia. Disponible para proyectos y oportunidades laborales." />
    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />
    <link rel="sitemap" type="application/xml" href="${escapeHtml(new URL("sitemap.xml", siteUrl).href)}" />
    <script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>`;
  const template = await readFile("dist/index.html", "utf8");
  if (
    !template.includes('<div id="root"></div>') ||
    !template.includes("<!--seo-head-->")
  ) {
    throw new Error("Prerender placeholders are missing from index.html.");
  }
  await writeFile(
    "dist/index.html",
    template
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
      .replace("<!--seo-head-->", seo),
  );
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapeHtml(siteUrl)}</loc></url></urlset>\n`,
  );
  // This file only controls crawlers if served at the origin's /robots.txt.
  await writeFile(
    "dist/robots.txt",
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap.xml", siteUrl).href}\n`,
  );
  console.log(
    `Prerendered portfolio, structured data and sitemap for ${siteUrl}`,
  );
} finally {
  await server.close();
}
