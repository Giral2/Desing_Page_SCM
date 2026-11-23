# Salud en Casa Médicos · Guía de trabajo

Rediseño de la página de inicio de saludencasamedicos.com (IPS de atención domiciliaria en Cali). Astro + CSS propio + TypeScript, sin framework de interfaz. El contexto del producto está en `PRODUCT.md` y el sistema de diseño en `DESIGN.md`.

## Quién trabaja aquí y cómo

La persona dueña del proyecto **está aprendiendo desarrollo profesional**. Por eso:

- **Explica cada paso en una frase**: qué vas a hacer y por qué, antes de hacerlo.
- **Usa palabras simples** y una analogía cuando el concepto sea nuevo (rama, PR, CI).
- Si algo falla, **muestra el mensaje de error y explica qué significa**; no lo escondas.
- Habla en español.

## Comandos

| Comando | Para qué |
|---|---|
| `npm install` | Instalar dependencias |
| `npm run dev` | Servidor local en http://localhost:4321 |
| `npm run build` | Construir el sitio en `dist/` (lo mismo que prueba el CI) |

Antes de abrir un PR, corre `npm run build` en local.

## Flujo de Git (obligatorio)

`main` es la versión oficial y está **protegida**: GitHub rechaza cualquier push directo. Todo cambio sigue este camino:

```powershell
git switch main
git pull
git switch -c tipo/nombre-corto      # 1. rama nueva
# ...cambios...
npm run build                        # 2. probar en local
git add <archivos>                   # 3. commit pequeño
git commit -m "Verbo en infinitivo + qué se hizo"
git push -u origin tipo/nombre-corto # 4. subir la rama
gh pr create --fill                  # 5. abrir el PR
# esperar el ✅ del check "build"
gh pr merge --squash --delete-branch # 6. fusionar (solo si el dueño lo aprueba)
git switch main
git pull
```

### Por qué cada práctica

- **Una rama por cambio.** Si algo sale mal, se borra la rama y `main` no se entera. Se pueden hacer dos cosas a la vez sin mezclarlas.
- **Pull request.** Es una página donde se ve exactamente qué líneas cambiaron. Obliga a revisar antes de unir y deja registro del porqué.
- **CI (`.github/workflows/ci.yml`).** Un robot de GitHub ejecuta `npm ci` y `npm run build` en cada PR, en una máquina limpia. Detecta lo que "en mi computador sí funciona".
- **`main` protegida.** Exige PR, exige que el check `build` pase y bloquea `--force`. Es un candado contra errores propios, de la persona o de la IA.
- **Commits pequeños y atómicos.** Cada commit hace una sola cosa. Permite deshacer solo eso y encontrar cuándo apareció un fallo.
- **Nunca `--force` sobre `main`.** Reescribe el historial y puede perder trabajo sin vuelta atrás. Para corregir algo ya subido, se hace un commit nuevo (o `git revert`).

### Nombres de rama

Formato `tipo/nombre-corto` en minúsculas y con guiones:

- `feat/` función o mejora nueva · `fix/` arreglo · `docs/` documentación · `ci/` automatización · `refactor/` reorganizar sin cambiar el resultado.

Ejemplos: `feat/logo-supersalud`, `fix/footer-correo`, `docs/claude-md`.

### Mensajes de commit y títulos de PR

- **Corto, claro y conciso**, nombrando la acción o el cambio más importante.
- **Siempre empieza con un verbo en infinitivo**, en español: "Agregar", "Corregir", "Reemplazar", "Convertir", "Quitar".
- Ejemplos buenos: "Agregar CI que construye el sitio en cada PR", "Convertir logo Vigilado Supersalud a SVG".
- Ejemplos malos: "cambios", "arreglé el logo", "Logo actualizado".
- Los commits terminan con la línea de coautoría que indique la herramienta.

### Reglas para la IA

- **No fusiones un PR sin la aprobación explícita del dueño.** Abre el PR, muestra el enlace, explica qué revisar y espera.
- **No subas directo a `main`** ni intentes saltarte las reglas de protección.
- **No uses `--force`**, ni `--no-verify`, salvo que el dueño lo pida expresamente y se explique el riesgo.
- **Antes de borrar o sobrescribir algo, míralo primero.**
- No incluyas secretos (`.env`, tokens) en commits.

## Herramientas

Se usa **`git` y `gh` (CLI)**, no un MCP de GitHub ni llamadas directas a la API: gastan menos tokens, usan la sesión ya iniciada (`gh auth login`) y cada comando es visible y auditable. Un MCP solo se justificaría si se trabajara de forma intensiva con muchos issues o repositorios.

## Código

- **Estilos:** CSS propio con tokens en `:root` y `:root[data-theme='dark']` (`src/styles/global.css`). No hardcodear colores: usar los tokens para que el modo oscuro funcione.
- **Accesibilidad primero**, porque el público son personas mayores: base de 18 px, objetivos táctiles de 48 px, contraste AA, foco visible y `prefers-reduced-motion` respetado.
- **Datos** (contacto, servicios, fotos) en `src/data/site.ts`, no repartidos por la página.
- **Imágenes y logos:** preferir SVG; si se necesita que cambien con el tema, usar variables CSS.
- Tras un cambio visual, revisar en escritorio, móvil (375 px y 320 px) y modo oscuro, y confirmar que no hay desplazamiento horizontal.

## Pendiente antes de publicar

- Reemplazar las fotos provisionales de Unsplash por fotos propias.
- Confirmar que el 315 956 5622 tiene WhatsApp activo.
- Los enlaces institucionales apuntan al sitio actual (`/index.php/...`); si el nuevo inicio lo reemplaza en el mismo dominio, dejarán de funcionar.
