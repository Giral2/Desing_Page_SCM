# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Rediseño de la página de inicio de saludencasamedicos.com (IPS de atención domiciliaria en Cali, Colombia), para personas mayores y sus familias. Contexto de producto en `PRODUCT.md`, sistema de diseño en `DESIGN.md`. Idioma de la interfaz y de los commits: español.

## Comandos

```powershell
npm install
npm run dev      # http://localhost:4321 (también hay config en .claude/launch.json)
npm run build    # genera dist/; es lo único que valida el CI
```

No hay linter ni tests: `npm run build` es la verificación. Los cambios visuales se comprueban a mano en escritorio, en móvil (375 px y 320 px, sin scroll horizontal) y en modo oscuro.

## Arquitectura

Sitio estático Astro con **una sola página** (`src/pages/index.astro`), CSS propio y un script TypeScript sin framework.

- **`src/data/site.ts`** es la fuente única de contacto (teléfono, WhatsApp, correo, horarios), los 8 servicios y las URLs de fotos (Unsplash, provisionales). El texto de la página lee de aquí; no duplicar esos datos en el HTML.
- **`src/styles/global.css`** contiene todo el CSS. Los colores son tokens en `:root` y se redefinen en `:root[data-theme='dark']`: nunca hardcodear colores, o el modo oscuro se rompe. Los dígitos usan la fuente `SCM Cifras` (`unicode-range` 0-9 tomado de Gabarito) porque el cero con barra de Atkinson parece tachado.
- **`src/scripts/site.ts`** se engancha al HTML por atributos `data-*` (`data-theme-toggle`, `data-text-toggle`, `data-booking`, `data-pick`, `data-dock`, `data-menu-toggle`…). Renombrar un atributo en `index.astro` exige renombrarlo aquí.
- **Tema:** un script inline en el `<head>` de `index.astro` lee `localStorage` (`scm-theme`, `scm-text`) y fija `data-theme`/`data-text` **antes del primer render**, para evitar el parpadeo. "Letra grande" sube el `font-size` raíz al 115 %.
- **Citas:** no hay backend. `site.ts` valida el formulario (nombre, teléfono, servicio, sin domingos ni fechas pasadas), arma el mensaje y abre `https://wa.me/573159565622?text=…`. Hay dos formularios (`data-booking="quick"` y `"full"`); el botón "Solicitar" de cada servicio (`data-pick`) preselecciona el servicio en el completo.
- **Logo "Vigilado Supersalud":** `VigiladoSprite.astro` define un `<symbol>` SVG una vez, y la página lo usa con `<use>`. Así las letras negras (`--vig-ink`) y el verde (`--vig-green`) cambian con el tema. Un `<img>` no podría.
- **Enlaces heredados:** los enlaces institucionales y la política de privacidad apuntan al sitio Joomla actual (`site.legacy`). Se dejaron así a propósito; dejarán de funcionar si este inicio reemplaza ese sitio en el mismo dominio.

## Flujo de Git

`main` está protegida por un ruleset de GitHub: **exige PR, exige que el check `build` pase y bloquea force-push**. Un push directo se rechaza. Todo cambio va por rama:

```powershell
git switch main; git pull
git switch -c tipo/nombre-corto       # feat/ fix/ docs/ ci/ refactor/
npm run build
git add <archivos>; git commit -m "Verbo en infinitivo + qué se hizo"
git push -u origin tipo/nombre-corto
gh pr create --fill
gh pr merge --squash --delete-branch  # solo con aprobación explícita del dueño
git switch main; git pull
```

- **Títulos de commit y de PR:** cortos, claros, nombrando el cambio más importante y **siempre empezando con un verbo en infinitivo** ("Agregar…", "Corregir…", "Convertir…"). Un commit = un cambio.
- **No fusionar un PR sin la aprobación explícita del dueño:** abrirlo, dar el enlace y esperar.
- Nada de `--force` ni `--no-verify`.
- Se usa `git` + `gh` (CLI), no un MCP de GitHub: menos tokens y la sesión ya está iniciada.
- El porqué de cada práctica está explicado para principiantes en `docs/flujo-git.md`.
