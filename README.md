# Portafolio — Mario Valdivia

Portafolio bilingüe (ES/EN) construido con [Astro 7](https://astro.build) y Tailwind CSS 4.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321/portafolio/es/
npm test          # tests de i18n, datos y proyectos
npm run build     # astro check + build estático en dist/
npm run preview   # sirve dist/
npm run format    # Prettier
```

## Editar contenido

| Qué | Dónde |
|---|---|
| Nombre, título, frase, bio, links, CV | `src/data/profile.ts` |
| Experiencia laboral | `src/data/experience.ts` |
| Habilidades (chips) | `src/data/skills.ts` — íconos de [simple-icons](https://simpleicons.org) (`import { siNombre } from 'simple-icons'`) |
| Terminal del hero | `src/data/terminal.ts` |
| Textos de la interfaz | `src/i18n/ui.ts` |
| Proyectos | `src/content/projects/es/*.md` y `src/content/projects/en/*.md` (mismo nombre de archivo en ambos idiomas) |

- Los links de contacto usan `mailto:tu@correo.com` para el email y URLs completas para el resto.
- Los CV van en `public/cv-es.pdf` y `public/cv-en.pdf`.
- Para agregar una portada a un proyecto, guarda la imagen junto al `.md` y agrega `cover: ./imagen.png` al frontmatter.

## Deploy en GitHub Pages

1. En `astro.config.mjs`, reemplaza `usuario` en `site` por tu usuario de GitHub.
   Si el repositorio no se llama `portafolio`, ajusta `base`. Si el repositorio es `<usuario>.github.io`, elimina `base`.
2. Sube el repositorio a GitHub (rama `main`).
3. En **Settings → Pages → Build and deployment**, elige **Source: GitHub Actions**.
4. Cada push a `main` corre los tests, hace el build y publica el sitio.
