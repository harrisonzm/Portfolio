# Portafolio — Harrison Zuleta Montoya

Portafolio profesional en español con React, TypeScript y Vite. Presenta servicios de desarrollo web, automatizaciones y agentes de IA, proyectos con resultados, experiencia, formación y CV en español e inglés.

## Desarrollo

```bash
npm ci
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

El build compila la aplicación y después ejecuta `scripts/prerender.mjs`. La página completa queda en `dist/index.html`; React la hidrata para activar filtros, fichas de proyectos y formulario. No se necesita un servidor Node en producción y los rastreadores pueden leer la información sin ejecutar JavaScript.

En GitHub Actions se mantiene la base `/Portfolio/`. Para comprobar ese despliegue localmente:

```bash
GITHUB_ACTIONS=true npm run build
GITHUB_ACTIONS=true npm run preview
```

## Activar los mensajes a Gmail

El formulario envía nombre, correo, motivo y mensaje a `harrison.zmontoya@gmail.com` mediante [FormSubmit](https://formsubmit.co/documentation). Funciona en GitHub Pages sin almacenar claves ni una contraseña de Gmail en el frontend.

1. Abre el sitio servido por HTTP o HTTPS y realiza un primer envío de prueba.
2. Busca el correo de activación de FormSubmit en Gmail, incluida la carpeta de spam, y confirma la dirección.
3. Envía una segunda prueba y comprueba su recepción. Puedes responder directamente al correo del remitente.

La recepción real depende de esa activación y de la disponibilidad del proveedor. Las pruebas automatizadas interceptan las solicitudes; no envían correos reales ni confirman entregas en Gmail. FormSubmit conserva temporalmente los mensajes pendientes de activación, según su [ayuda](https://formsubmit.co/help).

El formulario tiene validación HTML, límites de longitud, un campo trampa para bots, bloqueo de envíos duplicados y un tiempo máximo de espera. Conserva los datos si el servicio falla. Sin JavaScript, el formulario usa el envío POST nativo y la página de confirmación de FormSubmit.

## SEO y lectura por sistemas de IA

El build genera:

- HTML con servicios, proyectos, experiencia y contacto, disponible sin JavaScript.
- URL canónica y metadatos de indexación, autor y redes sociales.
- Datos estructurados JSON-LD de `Person`, `ProfilePage`, `WebSite` y `Service`, basados en el contenido visible.
- `sitemap.xml` con la URL principal y `robots.txt` sin restricciones.
- Imagen PNG de 1200 × 630 para las vistas previas al compartir enlaces.

La URL pública predeterminada es `https://harrisonzm.github.io/Portfolio/`, verificada como accesible durante la implementación. Si cambias de dominio, configura `SITE_URL` al compilar y ajusta la base de Vite al lugar donde se sirve el sitio:

```bash
SITE_URL=https://tu-dominio.com/ npm run build
```

`robots.txt` solo se aplica desde la raíz del dominio. En un sitio de proyecto de GitHub Pages, `/Portfolio/robots.txt` no controla el rastreo: para hacerlo debes servirlo desde `https://harrisonzm.github.io/robots.txt`, a través del repositorio del sitio principal. No tener un robots.txt en la raíz no bloquea el rastreo por sí solo. El sitemap se puede enviar directamente a Search Console.

Después de publicar, verifica la propiedad en Google Search Console, envía `https://harrisonzm.github.io/Portfolio/sitemap.xml` y solicita la indexación de la página. Comprueba que los enlaces públicos desde LinkedIn y GitHub apunten a tu portafolio.

Estas medidas facilitan descubrir y comprender el contenido; no garantizan posicionamiento ni menciones en respuestas de IA. Google indica que los fundamentos de SEO también aplican a su búsqueda generativa y que no requiere archivos o esquemas especiales para IA: [guía oficial](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

## Contenido

- `src/data/profile.ts`: perfil, experiencia, tecnologías y certificaciones.
- `src/data/portfolio.ts`: textos en español de servicios y proyectos.
- `src/components/ContactForm.tsx`: envío y estados del formulario.
- `public/`: CV, favicon e imagen social.

Mantén resultados y fechas respaldados por tu experiencia real. Las ilustraciones de proyectos están identificadas como vistas conceptuales.
