# Portafolio Software Engineer — Diseño

**Fecha:** 2026-09-27
**Autor:** Mario Valdivia
**Estado:** Aprobado en brainstorming, pendiente de plan de implementación

## 1. Objetivo

Sitio de portafolio personal, bilingüe (ES/EN), que presenta carrera laboral, habilidades y proyectos destacados de Mario Valdivia (Software Engineer, Chile). Diseño sobrio y elegante con modo claro/oscuro. 100% estático, desplegado en GitHub Pages.

## 2. Stack

- **Astro 7** (≥ 7.3.5), salida estática.
- **Tailwind CSS v4** vía `@tailwindcss/vite`, más `@tailwindcss/typography` para el cuerpo Markdown de los proyectos.
- **TypeScript** `strict`.
- **simple-icons** (npm) para íconos de tecnologías, inyectados como SVG inline en build.
- Fuentes autoalojadas con la API de fuentes de Astro: Instrument Serif, Inter, JetBrains Mono.
- **Vitest** para tests de consistencia i18n/contenido.
- **Prettier** + `prettier-plugin-astro` + `prettier-plugin-tailwindcss`.

## 3. Arquitectura

### 3.1 Estructura de carpetas

```
portafolio/
├── astro.config.mjs
├── .github/workflows/deploy.yml
├── public/
│   ├── .nojekyll
│   ├── favicon.svg
│   ├── cv-es.pdf            # lo aporta el usuario (no se crea)
│   └── cv-en.pdf            # lo aporta el usuario (no se crea)
├── src/
│   ├── content.config.ts
│   ├── content/projects/{es,en}/<slug>.md
│   ├── data/{profile,experience,skills,terminal}.ts
│   ├── i18n/{ui,utils}.ts
│   ├── layouts/BaseLayout.astro
│   ├── components/
│   │   ├── Header.astro, LangSwitch.astro, ThemeToggle.astro
│   │   ├── Hero.astro, HeroTerminal.astro
│   │   ├── About.astro, Experience.astro, Skills.astro, SkillChip.astro
│   │   ├── Projects.astro, ProjectCard.astro
│   │   ├── Contact.astro, Footer.astro
│   ├── pages/
│   │   ├── index.astro                    # redirige a /es/
│   │   └── [lang]/
│   │       ├── index.astro                # home
│   │       └── proyectos/[slug].astro     # detalle
│   └── styles/global.css
└── tests/i18n.test.ts
```

### 3.2 Rutas

| Ruta | Contenido |
|---|---|
| `/` | Redirección a `/es/` |
| `/es/`, `/en/` | Home one-page con todas las secciones |
| `/es/proyectos/<slug>`, `/en/proyectos/<slug>` | Detalle de proyecto |

El segmento `proyectos` es igual en ambos idiomas (simplifica el cambio de idioma). El slug de cada proyecto es idéntico en `es` y `en`.

### 3.3 Configuración Astro

- `i18n: { locales: ['es','en'], defaultLocale: 'es', routing: { prefixDefaultLocale: true } }`
- `site: 'https://<usuario>.github.io'`, `base: '/portafolio'`, con un comentario que explica cómo cambiarlos (otro nombre de repo, o repo `<usuario>.github.io` → quitar `base`).
- `output: 'static'`.
- Todos los links internos se construyen con un helper `localizePath(lang, path)` que antepone `import.meta.env.BASE_URL`. Nunca se usan rutas absolutas escritas a mano.

## 4. Contenido y datos

### 4.1 `data/profile.ts`

```ts
{
  name: 'Mario Valdivia',
  title: 'Software Engineer',
  location: { es: 'Chile · Remoto', en: 'Chile · Remote' },
  tagline: { es: '<placeholder>', en: '<placeholder>' },
  bio: { es: '<placeholder>', en: '<placeholder>' },
  links: { email: '#', linkedin: '#', github: '#' },
  cv: { es: 'cv-es.pdf', en: 'cv-en.pdf' },
}
```

Los textos placeholder son genéricos pero realistas. El usuario los reemplazará.

### 4.2 `data/experience.ts`

Array ordenado del puesto más reciente al más antiguo:

```ts
{
  company: 'Ninja Excel',
  url?: string,
  role: 'Software Engineer L2',
  start: '2024-06',
  end: null,               // null = actualidad
  mode: { es: 'Remoto', en: 'Remote' },
  highlights: [{ es: 'Top Performer 2025', en: 'Top Performer 2025', badge: true }],
  stack: ['PHP','Symfony','JavaScript','HTML','Docker','PostgreSQL'],
}
```

Las fechas se formatean por idioma con `Intl.DateTimeFormat` (ej. "jun 2024 — actualidad" / "Jun 2024 — Present").

### 4.3 `data/skills.ts`

Categorías con nombre bilingüe y tecnologías:

| Categoría | Tecnologías (slug simple-icons) |
|---|---|
| Backend | PHP (`php`), Symfony (`symfony`) |
| Frontend | JavaScript (`javascript`), HTML (`html5`), CSS (`css`) |
| Bases de datos / Databases | PostgreSQL (`postgresql`) |
| DevOps y herramientas / DevOps & Tools | Docker (`docker`), Git (`git`) |

Cada tecnología: `{ name, icon?: string, brand?: string, brandDark?: string }`. Si `icon` no existe en simple-icons, el chip se renderiza solo con texto (sin romper el build).

### 4.4 `data/terminal.ts`

Líneas de la terminal del hero, editables:

```
$ docker compose up -d
 ✔ postgres   healthy
 ✔ php-fpm    started
$ bin/phpunit
 ............... 142 / 142
 OK (142 tests, 389 assertions)
$ ▍
```

Cada línea es `{ text, kind: 'cmd' | 'out' | 'ok' }`.

### 4.5 Colección `projects`

Esquema Zod en `content.config.ts` (loader `glob` sobre `src/content/projects/**/*.md`):

| Campo | Tipo | Notas |
|---|---|---|
| `title` | string | |
| `summary` | string | 1 línea, usada en la tarjeta |
| `stack` | string[] | |
| `year` | number | |
| `order` | number | orden en la home (ascendente) |
| `repo` | url opcional | |
| `demo` | url opcional | |
| `cover` | image opcional | con `image()` de Astro; no se muestra si falta |
| `featured` | boolean, default `true` | solo los featured aparecen en la home |

El idioma se deriva de la carpeta (`es/` o `en/`) y el slug del nombre de archivo.

Cuerpo Markdown con secciones: **Contexto / Qué hice / Retos técnicos / Resultado** (en inglés: Context / What I did / Technical challenges / Outcome).

**Proyectos de ejemplo** (ficticios, coherentes con el perfil):

1. `api-facturacion`: API de facturación multi-tenant (Symfony, PostgreSQL, Messenger, Docker).
2. `dashboard-metricas`: Dashboard de métricas operativas con jobs asíncronos (PHP, JavaScript, PostgreSQL).
3. `toolkit-docker`: Toolkit para entornos de desarrollo reproducibles (Docker, Bash, Makefile).

## 5. Páginas y componentes

### 5.1 Home `/[lang]/`

Orden de secciones y anclas:

1. **Header** (sticky, fondo translúcido con blur, borde inferior). Nombre en serif a la izquierda; anclas Sobre mí · Experiencia · Habilidades · Proyectos · Contacto; `LangSwitch` (ES / EN, idioma activo en acento) y `ThemeToggle`. En móvil (< md) las anclas van en un menú desplegable (`<details>` o botón con estado mínimo en JS).
2. **Hero** (`Hero.astro`):
   - Título profesional en mono, en mayúsculas y color secundario.
   - Nombre en Instrument Serif grande (`clamp(3rem, 7vw, 5rem)`).
   - Tagline en color secundario, con ubicación en mono.
   - Botones "Ver proyectos" (primario, a `#proyectos`) y "Descargar CV ↓" (secundario, al PDF del idioma activo).
   - **Fondo:** grilla CSS de 32px con líneas del color `border`, con máscara radial centrada a la derecha.
   - **`HeroTerminal`:** ventana con 3 puntos, fondo `surface`, rotada −1.5°, a la derecha y centrada verticalmente en ≥ md. En móvil pasa debajo del texto, sin rotación. Cursor parpadeante en acento, desactivado con `prefers-reduced-motion`. Es decorativa: `aria-hidden="true"`.
3. **Sobre mí** (`#sobre-mi` / `#about`): kicker "01 — Sobre mí" y el párrafo de la bio.
4. **Experiencia** (`#experiencia`): kicker "02", título serif y línea de tiempo vertical (borde izquierdo, punto en acento por entrada). Por entrada: fechas en mono, cargo en negrita · empresa en secundario, lista de logros (los que tienen `badge: true` llevan la píldora "★" en acento) y etiquetas de stack.
5. **Habilidades** (`#habilidades`): kicker "03", título "Stack" y, por categoría, un encabezado pequeño en mayúsculas más una fila de `SkillChip`.
   - **`SkillChip`:** fondo `surface`, borde `border`, radio 8px, ícono SVG de 18px y nombre. En reposo el ícono usa el color `muted`; en hover el borde pasa a acento, el chip sube 1px y el ícono toma `brand` (o `brandDark` en modo oscuro).
6. **Proyectos** (`#proyectos`): kicker "04" y grilla `auto-fit minmax(260px, 1fr)` de `ProjectCard`: año en mono, título serif, resumen, etiquetas de stack y "Ver detalle →". En hover el borde pasa a acento y la tarjeta sube 2px.
7. **Contacto** (`#contacto`): kicker "05", título serif grande ("¿Conversamos?" / "Let's talk"), una frase y los links Email · LinkedIn · GitHub subrayados con el borde.
8. **Footer**: "© {año} Mario Valdivia" · "Hecho con Astro" en mono y color secundario.

Las anclas se localizan por idioma (ES: `sobre-mi`, `experiencia`, `habilidades`, `proyectos`, `contacto`; EN: `about`, `experience`, `skills`, `projects`, `contact`).

### 5.2 Detalle `/[lang]/proyectos/[slug]`

- `getStaticPaths` genera las combinaciones (lang, slug) a partir de la colección.
- Link "← Volver a proyectos" que lleva a la home del idioma, en el ancla de proyectos.
- Encabezado: año en mono, título serif, resumen, etiquetas de stack y links Repo / Demo si existen.
- Cover opcional (`<Image>` de Astro).
- Cuerpo con `prose` de Typography, adaptado a los tokens (`prose-neutral`, `dark:prose-invert`, links en acento).

## 6. Estilo

### 6.1 Tokens (variables CSS en `global.css`, expuestas con `@theme`)

| Token | Claro | Oscuro |
|---|---|---|
| `bg` | `#FAFAF7` | `#121211` |
| `surface` | `#F2F1EC` | `#1B1B19` |
| `text` | `#1C1C1A` | `#E8E6E1` |
| `muted` | `#6B6A64` | `#9A988F` |
| `border` | `#E4E2DA` | `#2A2A27` |
| `accent` | `#4A5D23` | `#A3B86C` |

El acento se usa solo en links, hover, kickers, puntos de la línea de tiempo, badges y el cursor.

### 6.2 Tipografía

- `font-serif`: Instrument Serif (nombre, títulos de sección y de proyecto).
- `font-sans`: Inter (cuerpo).
- `font-mono`: JetBrains Mono (fechas, kickers, etiquetas, terminal, título profesional).

### 6.3 Tema claro/oscuro

- Variante `dark` de Tailwind basada en la clase `.dark` en `<html>` (`@custom-variant dark (&:where(.dark, .dark *))`).
- Script inline en `<head>` antes del render: usa `localStorage.theme` y, si no existe, `prefers-color-scheme`. Así se evita el parpadeo.
- `ThemeToggle` alterna la clase, persiste la elección y actualiza su `aria-pressed` / `aria-label`.

### 6.4 Movimiento y accesibilidad

- Transiciones de color de 200–250ms y scroll suave en anclas.
- Todo movimiento (cursor, translate en hover, scroll suave) se desactiva con `prefers-reduced-motion: reduce`.
- `:focus-visible` con anillo en acento.
- Contraste AA en texto y texto secundario, en ambos temas.
- Íconos decorativos con `aria-hidden`; el nombre de la tecnología siempre es texto visible.

## 7. i18n

- `i18n/ui.ts`: diccionario `{ es: {...}, en: {...} }` con las mismas claves (nav, kickers, títulos de sección, botones, textos de contacto y footer, anclas, "actualidad/Present", etc.). El tipado exige que `en` tenga todas las claves de `es`.
- `i18n/utils.ts`:
  - `getLangFromUrl(url): 'es' | 'en'`
  - `useTranslations(lang): (key) => string`
  - `localizePath(lang, path = '')`: respeta `BASE_URL`
  - `getAlternatePath(url, targetLang)`: misma página en el otro idioma (home ↔ home, detalle ↔ detalle con el mismo slug).
- `BaseLayout`: `<html lang>`, `<title>` y meta description por idioma, `<link rel="alternate" hreflang="es|en|x-default">` y `<link rel="canonical">`.

## 8. Deploy

- `.github/workflows/deploy.yml`: al hacer push a `main` (y con `workflow_dispatch`) usa `withastro/action` para el build y `actions/deploy-pages` para el deploy, con los permisos `pages: write` e `id-token: write`.
- `public/.nojekyll`.
- README breve: cómo correr el proyecto en local, cómo editar el contenido (`data/*.ts`, `content/projects/**`), dónde van los CV y cómo ajustar `site`/`base`, además del paso manual de activar Pages con "GitHub Actions" en la configuración del repo.

## 9. Calidad y verificación

**Scripts:**
- `dev`, `build` (`astro check && astro build`), `preview`, `test` (vitest run), `format`.

**Tests (`tests/i18n.test.ts`):**
- Todas las claves de `ui.es` existen en `ui.en` y viceversa.
- Para cada archivo en `content/projects/es/` existe su par en `en/` y viceversa.
- Los campos bilingües de `profile`, `experience` y `skills` tienen valor no vacío en ambos idiomas.

**Checklist de verificación manual** (con `npm run preview`):
- `/portafolio/` redirige a `/portafolio/es/`.
- `/es/` y `/en/` muestran todas las secciones con los textos correctos.
- Los 3 proyectos abren su detalle en ambos idiomas.
- `LangSwitch` en la home y en un detalle lleva a la página equivalente.
- El toggle de tema persiste al recargar y no hay parpadeo.
- En la vista móvil (375px) el menú funciona, la terminal queda debajo del hero y no hay scroll horizontal.
- Todos los links internos incluyen `/portafolio`.
- `npm run build` termina sin errores ni warnings.

## 10. Fuera de alcance

Blog, formulario de contacto, analytics, CMS, imágenes OG autogeneradas, animaciones de entrada por scroll, y la creación de los PDF de CV (los aporta el usuario).

## 11. Supuestos abiertos (editables después)

- El nombre del repo es `portafolio`; el usuario de GitHub se deja como `<usuario>` en `site`.
- Los links de contacto quedan como `#`.
- Tagline y bio son placeholders.
