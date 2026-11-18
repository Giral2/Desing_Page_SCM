# Salud en Casa Médicos · Página de inicio

Rediseño de la página de inicio de [saludencasamedicos.com](https://www.saludencasamedicos.com/), IPS de atención médica domiciliaria en Cali, Colombia. Pensada para personas mayores y sus familias: texto grande, botones amplios y la solicitud de cita visible desde la primera pantalla.

## Características

- **Solicitud de cita por WhatsApp:** la barra rápida y el formulario completo validan los datos, arman el mensaje y abren WhatsApp al 315 956 5622. No se guarda nada en el sitio.
- **Modo claro y oscuro:** sigue la preferencia del sistema y se puede cambiar con un botón; la elección se recuerda.
- **Letra grande:** botón para agrandar el texto un 15 %.
- **Servicios:** los ocho servicios del sitio actual; "Solicitar" deja el servicio elegido en el formulario.
- **Móvil:** menú desplegable y barra fija con Llamar, WhatsApp y Agendar.
- **Accesibilidad:** contraste AA, objetivos táctiles de 48 px, foco visible y movimiento reducido respetado.

## Tecnología

Astro 7, CSS propio y TypeScript sin framework de interfaz. Tipografías Gabarito y Atkinson Hyperlegible Next, servidas desde el propio proyecto.

## Uso

```bash
npm install
npm run dev
```

La página queda en `http://localhost:4321`. Para generar la versión estática:

```bash
npm run build
```

El resultado queda en `dist/`.

## Estructura

| Ruta | Contenido |
|---|---|
| `src/pages/index.astro` | Página de inicio |
| `src/styles/global.css` | Estilos y temas claro y oscuro |
| `src/scripts/site.ts` | Tema, letra grande, menú y formularios |
| `src/data/site.ts` | Textos, contacto, servicios y fotos |
| `src/components/` | Iconos y logotipo |
| `PRODUCT.md` | Contexto del producto y público |
| `DESIGN.md` | Sistema de diseño |

## Pendiente antes de publicar

- Reemplazar las fotos provisionales de Unsplash por fotos propias (`src/data/site.ts`).
- Reemplazar el logotipo redibujado en SVG por el vector oficial (`src/components/Logo.astro`).
- Confirmar que el 315 956 5622 tiene WhatsApp activo.
- Los enlaces institucionales y la política de privacidad apuntan a las páginas del sitio actual (`/index.php/...`); si el nuevo inicio reemplaza ese sitio en el mismo dominio, dejarán de funcionar.
