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

| Qué                               | Dónde                                                                                                                |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Nombre, título, frase, bio, links | `src/data/profile.ts`                                                                                                |
| Experiencia laboral               | `src/data/experience.ts`                                                                                             |
| Habilidades (chips)               | `src/data/skills.ts` — íconos de [simple-icons](https://simpleicons.org) (`import { siNombre } from 'simple-icons'`) |
| Terminal del hero                 | `src/data/terminal.ts`                                                                                               |
| Textos de la interfaz             | `src/i18n/ui.ts`                                                                                                     |
| Proyectos                         | `src/content/projects/es/*.md` y `src/content/projects/en/*.md` (mismo nombre de archivo en ambos idiomas)           |

- Los links de contacto usan `mailto:tu@correo.com` para el email y URLs completas para el resto.

### Fotos de proyectos

Guarda las fotos en una carpeta por proyecto, compartida por ambos idiomas:

```
src/content/projects/images/sicam/portada.jpg
src/content/projects/images/sicam/01.jpg
src/content/projects/images/sicam/02.jpg
```

Declara las fotos en el frontmatter de **cada** `.md` (`es/` y `en/`). Las rutas son las mismas; solo cambian los textos:

```yaml
cover: ../images/sicam/portada.jpg # foto de la tarjeta y del encabezado del detalle
coverAlt: Lector RFID en el acceso a faena # obligatorio si hay cover
gallery: # fotos al final del detalle; al hacer clic se abre el visor
  - src: ../images/sicam/01.jpg
    alt: Barrera vehicular controlada por PLC
    caption: Barrera vehicular en el acceso principal # opcional
  - src: ../images/sicam/02.jpg
    alt: Panel de acreditación
```

- Sube originales JPG/PNG grandes (≥ 1600 px de ancho): Astro los convierte a WebP y genera tamaños responsivos.
- La tarjeta recorta la portada a 16:10 y la galería a 4:3, así que conviene centrar lo importante.
- Si una ruta es incorrecta o falta `coverAlt`, `npm run build` falla con un mensaje que indica el archivo.

## Deploy en GitHub Pages

1. En `astro.config.mjs`, `site` apunta a `https://mariovaldivia.github.io`.
   Si el repositorio no se llama `portafolio`, ajusta `base`. Si el repositorio es `<usuario>.github.io`, elimina `base`.
2. Sube el repositorio a GitHub (rama `main`).
3. En **Settings → Pages → Build and deployment**, elige **Source: GitHub Actions**.
4. Cada push a `main` corre los tests, hace el build y publica el sitio.
