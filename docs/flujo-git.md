# Flujo profesional de Git y GitHub, explicado paso a paso

Guía de aprendizaje. Las reglas cortas que sigue Claude están en `CLAUDE.md`; aquí está el porqué.

## La idea de fondo

`main` es la versión oficial de la página. Un profesional no la toca directamente: hace los cambios aparte, los revisa y solo entonces los une. Cada práctica de abajo protege esa versión y deja claro qué cambió, quién y por qué.

## Palabras clave

- **Repositorio:** la carpeta del proyecto con todo su historial.
- **Commit:** una "foto" guardada de los cambios, con un título.
- **Rama (branch):** una copia paralela para trabajar sin afectar a `main`.
- **Push:** subir tus commits a GitHub.
- **Pull request (PR):** una petición para unir tu rama a `main`; ahí se revisa.
- **Merge:** unir una rama con `main`.
- **CI:** un robot de GitHub que prueba el código automáticamente.

## Las prácticas y su porqué

1. **Una rama por cambio.** Si te equivocas, borras la rama y `main` no se entera. Permite trabajar en dos cosas a la vez sin mezclarlas. El prefijo cuenta de qué va: `feat/` función nueva, `fix/` arreglo, `docs/` documentación, `ci/` automatización.
2. **Pull request.** Es una página donde se ve exactamente qué líneas cambiaron. Obliga a revisar antes de unir y deja registro del porqué. Solo, te enseña el hábito y te da un momento para mirar tu trabajo con ojos nuevos.
3. **CI (`.github/workflows/ci.yml`).** Un robot ejecuta `npm ci` y `npm run build` en una máquina limpia en cada PR. Detecta lo que "en mi computador sí funciona". Es como un inspector que revisa el pan antes de ponerlo en el mostrador.
4. **`main` protegida.** Un ruleset en GitHub (Settings → Rules → Rulesets) exige PR, exige que el check `build` pase y bloquea el force-push. Es un candado contra errores propios: antes dependías de acordarte, ahora el sistema te obliga. Protege igual contra una IA con acceso a tu cuenta.
5. **Commits pequeños y atómicos.** Cada commit hace una sola cosa. Así puedes deshacer solo eso, y el historial se lee como un diario. Prueba: si no puedes describirlo en una frase corta, probablemente son dos commits.
6. **Nunca `--force` sobre `main`.** Reescribe el historial y puede perder trabajo sin vuelta atrás. Para corregir algo ya subido, haz un commit nuevo o un `git revert`.

## Por qué `git` + `gh` y no un MCP o la API

| | CLI (`git` + `gh`) | MCP de GitHub | API directa |
|---|---|---|---|
| Tokens | Muy pocos | Más: las herramientas ocupan contexto | Medios |
| Subir código | `git push` | No lo hace bien | No es lo normal |
| PRs, issues, CI | `gh pr create`, `gh run list` | Sí | Sí, con más trabajo |
| Credenciales | La sesión de `gh auth login` | Un token aparte | Un token que guardas tú |

Un MCP solo valdría la pena para trabajo intensivo con muchos issues o repositorios.

## Probar que el candado funciona

Una regla no vale hasta que la pruebas. Un commit vacío directo a `main` debe ser rechazado:

```powershell
git commit --allow-empty -m "Probar protección de main"
git push origin main     # GitHub responde: push declined due to repository rule violations
git reset --hard origin/main   # deshace el commit de prueba local
```

El mensaje del servidor dice qué regla violaste: `Changes must be made through a pull request` y `Required status check "build" is expected`.
