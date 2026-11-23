---
name: Salud en Casa Médicos
description: Atención médica a domicilio en Cali; azul sobre blanco, fotografía real y el naranja reservado para agendar.
colors:
  brand-bg: "#0f4c9a"
  brand-bg-hover: "#0b3d7e"
  brand-fg: "#0f4c9a"
  on-brand: "#ffffff"
  on-brand-2: "#d6e5f9"
  deep: "#0a2f63"
  deeper: "#061b36"
  on-deep-2: "#c9d9ee"
  accent: "#f8a230"
  accent-hover: "#ffb650"
  on-accent: "#0a2342"
  bg: "#f5f9fe"
  surface: "#ffffff"
  tint: "#e6f0fc"
  tint-2: "#d3e4f9"
  line: "#cddbec"
  line-strong: "#6f8aad"
  ink: "#0a2342"
  ink-2: "#3a516f"
  danger: "#a8231b"
  danger-bg: "#fdecea"
  brand-bg-dark: "#1a5fb8"
  brand-bg-hover-dark: "#2a70cc"
  brand-fg-dark: "#93c2ff"
  on-brand-2-dark: "#dbe8fa"
  deep-dark: "#0a2a55"
  deeper-dark: "#030b15"
  accent-dark: "#ffad42"
  accent-hover-dark: "#ffc06b"
  bg-dark: "#06121f"
  surface-dark: "#0d1f35"
  tint-dark: "#0a1a2e"
  tint-2-dark: "#143052"
  line-dark: "#213a59"
  line-strong-dark: "#5d7a9e"
  ink-dark: "#edf3fb"
  ink-2-dark: "#b6c6db"
  danger-dark: "#ffb4ab"
  danger-bg-dark: "#3a1512"
typography:
  display:
    fontFamily: "'Gabarito Variable', 'Gabarito', ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3.7vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Gabarito Variable', 'Gabarito', ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.35rem + 2.1vw, 2.85rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Gabarito Variable', 'Gabarito', ui-rounded, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "'SCM Cifras', 'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible Next', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'SCM Cifras', 'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible Next', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Gabarito Variable', 'Gabarito', ui-rounded, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.15
  numeral:
    fontFamily: "'Gabarito Variable', 'Gabarito', ui-rounded, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 800
rounded:
  focus: "6px"
  field: "0.9rem"
  float: "1.25rem"
  card: "1.75rem"
  panel: "2rem"
  photo: "2.5rem"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  section: "clamp(4.5rem, 9vw, 7.5rem)"
  field-gap: "1.25rem"
  card-gap: "1.5rem"
  card-padding: "1.85rem"
components:
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.6rem"
    height: "3.25rem"
  button-accent-hover:
    backgroundColor: "{colors.accent-hover}"
  button-accent-lg:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.9rem"
    height: "3.75rem"
  button-primary:
    backgroundColor: "{colors.brand-bg}"
    textColor: "{colors.on-brand}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-bg-hover}"
  button-ghost:
    textColor: "{colors.brand-fg}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.6rem"
    height: "3.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.tint-2}"
  button-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.brand-fg}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.6rem"
    height: "3.25rem"
  button-light-hover:
    backgroundColor: "{colors.tint}"
  link-arrow:
    textColor: "{colors.brand-fg}"
    typography: "{typography.label}"
    height: "3rem"
  nav-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 0.85rem"
    height: "3rem"
  nav-link-hover:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.brand-fg}"
  tool-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "3rem"
  tool-button-on:
    backgroundColor: "{colors.tint-2}"
    textColor: "{colors.brand-fg}"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.7rem 1rem"
    height: "3.5rem"
  field-invalid:
    backgroundColor: "{colors.danger-bg}"
  choice:
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0 1.15rem 0 0.95rem"
    height: "3.5rem"
  choice-checked:
    backgroundColor: "{colors.tint-2}"
    textColor: "{colors.brand-fg}"
  card-service:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.85rem"
  card-service-featured:
    backgroundColor: "{colors.brand-bg}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.card}"
  panel-form:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.5rem, 3.5vw, 2.5rem)"
  card-float:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.float}"
    padding: "1rem 1.25rem"
  step-numeral:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.numeral}"
    rounded: "{rounded.pill}"
    size: "4.5rem"
  dock-action:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "3.5rem"
  dock-action-main:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
---

# Design System: Salud en Casa Médicos

## Overview

**Creative North Star: "El sol sobre la casa"**

El sistema sale del logotipo: una casa azul con un sol naranja encima. El azul hace de estructura (titulares, franjas, iconos, bordes activos) y el naranja queda como una sola señal, la de pedir la cita. Es el estándar de la categoría de salud a domicilio que el usuario eligió, llevado con cuidado: fondo azul muy claro, tarjetas blancas de esquinas amplias, fotografía de profesionales con pacientes y la solicitud de cita ya funcionando en la primera pantalla.

La densidad es baja y el tamaño es alto porque quien lee puede tener 75 años o estar buscando ayuda desde el celular con preocupación. El texto corrido mide 1.125rem, cada objetivo táctil mide al menos 3rem (48 px) y existe un modo de "letra grande" que sube la raíz al 115 %. El tema claro es el de partida; el oscuro es un tema completo con sus propios valores, no una inversión automática.

El sistema no usa cifras de respaldo, testimonios ni rótulos pequeños encima de los títulos: los títulos van solos y la prueba es el texto real del servicio.

**Key Characteristics:**
- Azul de marca como estructura; naranja solo para la acción de agendar.
- Fotografía real con esquinas muy redondeadas, nunca ilustración ni iconos como imagen principal.
- Tarjetas blancas de radio amplio con sombra suave y caída hacia abajo.
- Texto grande, objetivos de 48 px o más y modo de letra grande.
- Tema claro y tema oscuro definidos token por token.
- Un solo momento de movimiento orquestado, en el hero.

## Colors

Una familia de azules del mismo matiz, del casi blanco al azul noche, y un único naranja cálido tomado del sol del logotipo.

### Primary
- **Azul de marca** (`brand-bg` #0f4c9a; oscuro #1a5fb8): rellenos. Botón primario, franja de "cómo funciona", tarjeta de servicio destacada y la forma que asoma detrás de la foto del hero.
- **Azul de lectura** (`brand-fg` #0f4c9a; oscuro #93c2ff): texto y trazo. Enlaces, iconos, palabra resaltada del titular, bordes de estado activo y anillo de foco. En claro coincide con el azul de marca; en oscuro se aclara para leerse sobre fondo noche.
- **Azul profundo** (`deep` #0a2f63; oscuro #0a2a55): sección de cita. En tema oscuro también reemplaza al azul de marca en la franja de pasos.
- **Azul noche** (`deeper` #061b36; oscuro #030b15): pie.

### Secondary
- **Naranja sol** (`accent` #f8a230; oscuro #ffad42; hover #ffb650 / #ffc06b): la acción de agendar, con texto azul tinta (`on-accent` #0a2342) encima.

### Neutral
- **Cielo claro** (`bg` #f5f9fe; oscuro #06121f): fondo de página.
- **Blanco de tarjeta** (`surface` #ffffff; oscuro #0d1f35): tarjetas, cabecera, formularios y campos.
- **Azul lavado** (`tint` #e6f0fc; oscuro #0a1a2e): fondo del hero y de secciones alternas, casilla de icono, avisos dentro del formulario.
- **Azul lavado fuerte** (`tint-2` #d3e4f9; oscuro #143052): estado seleccionado y hover del botón de contorno.
- **Línea** (`line` #cddbec; oscuro #213a59): bordes de tarjeta y separadores.
- **Línea fuerte** (`line-strong` #6f8aad; oscuro #5d7a9e): borde de campos y de opciones.
- **Azul tinta** (`ink` #0a2342; oscuro #edf3fb): texto principal.
- **Tinta secundaria** (`ink-2` #3a516f; oscuro #b6c6db): entradillas, descripciones y texto de apoyo.
- **Texto sobre azul** (`on-brand` #ffffff, `on-brand-2` #d6e5f9, `on-deep-2` #c9d9ee): título y cuerpo sobre las franjas azules.
- **Error** (`danger` #a8231b sobre `danger-bg` #fdecea; oscuro #ffb4ab sobre #3a1512): borde, fondo y mensaje de un campo inválido.

### Named Rules
**La regla del sol.** El naranja rellena únicamente los botones que abren o envían la solicitud de cita (cabecera, hero, barra rápida, formulario y la acción principal de la barra móvil) y los tres numerales de los pasos. Fuera de eso solo aparece donde es identidad o accesibilidad: el sol del logotipo, el anillo de foco sobre fondos azules, el enlace de saltar al contenido y la selección de texto. Elegir un servicio o pedir orientación se hace en azul o blanco.

**La regla de los dos azules.** Un relleno usa `brand-bg`; un texto, icono o borde usa `brand-fg`. En claro son el mismo valor y en oscuro no: confundirlos deja texto azul oscuro sobre fondo noche.

## Typography

**Display Font:** Gabarito Variable (con ui-rounded, system-ui, sans-serif)
**Body Font:** Atkinson Hyperlegible Next Variable (con system-ui, sans-serif)
**Label/Mono Font:** Gabarito Variable, peso 600, para botones, enlaces de acción y navegación

**Character:** Gabarito aporta títulos redondeados y amables sin perder peso; Atkinson Hyperlegible Next se eligió porque distingue bien las letras parecidas para ojos cansados. Las dos se sirven desde el propio sitio con @fontsource-variable.

### Hierarchy
- **Display** (700, clamp(2.5rem, 1.5rem + 3.7vw, 4.25rem), 1.02, -0.025em): el titular del hero, uno por página. Una palabra puede ir en azul de lectura, sin cursiva.
- **Headline** (700, clamp(1.9rem, 1.35rem + 2.1vw, 2.85rem), 1.08, -0.015em): título de cada sección, con ajuste equilibrado de líneas.
- **Title** (700, 1.375rem, 1.2): nombre de servicio y de paso. Sube a 1.75rem en la tarjeta destacada.
- **Lead** (400, 1.25rem, 1.55, tinta secundaria): entradilla bajo un título, con ancho máximo de 34em. La del hero mide 1.3125rem.
- **Body** (400, 1.125rem, 1.6): texto corrido. Las etiquetas de campo usan esta misma fuente en 700.
- **Label** (Gabarito 600, 1.0625rem, 1.15): botones, enlaces con flecha y navegación. 1.1875rem en el botón grande.
- **Numeral** (Gabarito 800, 2rem): los numerales de los pasos.

### Named Rules
**La regla del cero limpio.** Las cifras del texto corrido no se toman de Atkinson, cuyo cero lleva una barra que en horas y teléfonos se lee como un número tachado. Una fuente de rango Unicode ("SCM Cifras", U+0030 a U+0039) va primera en la pila de cuerpo y trae los dígitos de Gabarito. Toda superficie nueva hereda esa pila completa.

**La regla de la letra grande.** Los tamaños se escriben en rem. El modo de letra grande cambia solo el tamaño de la raíz (115 %) y todo lo demás escala con él; un tamaño en px rompe ese modo.

## Layout

Un contenedor centrado de 75rem como máximo, con margen lateral fluido (`gutter`, de 1.25rem a 2.5rem). Las secciones se separan con un relleno vertical fluido (`section`, de 4.5rem a 7.5rem) y alternan fondo: cielo claro, azul lavado, franja azul de marca, azul profundo para la cita.

Las composiciones son de dos columnas desiguales, no de rejilla uniforme: el hero reparte 1.08 / 0.92 entre texto y foto, la cita 0.85 / 1.15 entre datos de contacto y formulario (los datos quedan fijos al desplazarse en escritorio), y los bloques de equipo y cuidadores van a mitades con la foto alternando de lado. Los servicios usan tres columnas con la tarjeta destacada ocupando dos filas. La barra de cita rápida cierra el hero y se monta 5rem sobre la sección siguiente.

Cambios por ancho, medidos en el código:
- **68rem:** se oculta el lema del logotipo y la navegación se aprieta.
- **62rem:** la navegación pasa a un panel desplegable bajo la cabecera; hero, bloques y cita pasan a una columna; servicios a dos columnas con la destacada a todo el ancho en horizontal; pie a dos columnas.
- **47.5rem:** el "Agendar cita" de la cabecera se oculta (queda la barra fija); todo queda en una columna; los botones del hero ocupan el ancho completo; las tarjetas flotantes dejan de flotar y se apoyan bajo su foto; los pasos se apilan con la línea en vertical; aparece la barra de acciones fija.
- **26rem y 22rem:** la barra de acciones reduce su texto y luego suelta los iconos.

## Elevation & Depth

Sistema híbrido. La separación entre secciones es tonal (cambio de fondo) y las tarjetas se despegan con sombras suaves de dos capas: un filo corto casi invisible y una caída amplia hacia abajo con extensión negativa, teñida de azul tinta en claro y de negro en oscuro. No hay sombras duras ni desplazadas de lado.

### Shadow Vocabulary
- **Reposo** (`--shadow-sm`: `0 1px 2px rgb(10 35 66 / 0.06), 0 6px 16px -8px rgb(10 35 66 / 0.14)`): tarjetas de servicio y de aseguradoras en reposo; cabecera cuando la página ya se desplazó.
- **Flotante** (`--shadow-md`: `0 2px 4px rgb(10 35 66 / 0.06), 0 18px 40px -16px rgb(10 35 66 / 0.24)`): tarjetas que flotan sobre una foto, fotos de los bloques, tarjeta de servicio en hover, menú desplegable.
- **Protagonista** (`--shadow-lg`: `0 4px 8px rgb(10 35 66 / 0.06), 0 32px 64px -24px rgb(10 35 66 / 0.32)`): foto del hero, barra de cita rápida y formulario de cita.
- **Resplandor del botón de agendar** (`0 10px 22px -12px rgb(190 110 0 / 0.75)`): solo bajo el botón naranja.

### Named Rules
**La regla de los tres pisos.** La sombra indica importancia, no decoración: reposo para lo que se lee, flotante para lo que se apoya sobre otra cosa, protagonista para la foto del hero y los dos formularios. Sobre las franjas azules las tarjetas no llevan borde; sobre fondos claros llevan borde de línea más sombra de reposo.

## Shapes

Todo es redondeado y la curva crece con el tamaño de la pieza. Los controles de acción son píldoras completas (999px): botones, enlaces de navegación, botones de herramienta y acciones de la barra móvil. Los campos y las opciones usan una esquina media (0.9rem). Las tarjetas flotantes pequeñas van de 1.25rem a 1.35rem, las tarjetas de servicio y la barra rápida a 1.75rem, los paneles grandes a 2rem y las fotos a 2.25rem o 2.5rem. Los círculos se reservan para numerales de paso, iconos de contacto y el indicador de las opciones.

La forma azul detrás de la foto del hero tiene una esquina mucho más abierta que las otras tres (3rem 3rem 3rem 9rem) y es la única silueta asimétrica del sistema.

Los iconos son de trazo único (lienzo de 24, grosor 1.75, extremos y uniones redondeados, sin relleno) y heredan el color del texto. El logotipo actual es un redibujo provisional en SVG a la espera del vector oficial.

## Components

### Buttons
Amables y contundentes: píldoras altas con texto en Gabarito 600.
- **Shape:** píldora (999px), altura mínima 3.25rem, relleno 0.5rem 1.6rem, borde transparente de 2px. La variante grande mide 3.75rem con texto de 1.1875rem. Icono de trazo a la izquierda, o flecha a la derecha cuando lleva a otro punto.
- **Agendar (naranja):** fondo naranja sol con texto azul tinta y resplandor cálido. Solo para abrir o enviar la solicitud.
- **Primario (azul):** fondo azul de marca con texto blanco. Acciones secundarias a la cita, como pedir orientación o cotizar.
- **Contorno:** borde y texto en azul de lectura sobre fondo transparente; hover con azul lavado fuerte. Acompaña al naranja (llamar).
- **Claro:** blanco con texto azul, para usar sobre la tarjeta azul destacada.
- **Hover / Focus:** sube 2px y aclara u oscurece el fondo en 0.2 a 0.25 s con la curva `cubic-bezier(0.16, 1, 0.3, 1)`. Foco con contorno de 3px separado 3px, azul sobre claro y naranja sobre las franjas azules.
- **Enlace con flecha:** texto azul en Gabarito 600 con altura mínima de 3rem; en hover aparece el subrayado y la flecha avanza 4px.

### Cards / Containers
- **Corner Style:** 1.75rem en tarjetas de servicio, 2rem en paneles.
- **Background:** blanco de tarjeta. La tarjeta destacada es azul de marca, sin borde, con foto arriba y texto blanco.
- **Shadow Strategy:** reposo, y flotante en hover con un ascenso de 4px (ver Elevation & Depth).
- **Border:** 1px de línea, que pasa a línea fuerte en hover.
- **Internal Padding:** 1.85rem.
- **Contenido:** casilla de icono de 3.5rem (radio 1.1rem, fondo azul lavado, icono azul), título, descripción en tinta secundaria, lista con marcas de verificación y la acción anclada al fondo.
- **Tarjetas flotantes:** blancas, sin borde, sombra flotante, montadas sobre la esquina de una foto (horario en el hero, sello de vigilancia en el bloque de equipo).

### Inputs / Fields
- **Style:** etiqueta visible en 700 encima del campo; campo de 3.5rem de alto mínimo, borde de 1.5px en línea fuerte, radio 0.9rem, fondo de tarjeta. El selector lleva una flecha propia a la derecha.
- **Focus:** contorno de 3px en azul de lectura separado 1px, con el borde en el mismo azul. En hover el borde ya pasa a azul.
- **Error:** borde de error, fondo de error y un mensaje en 700 debajo, redactado como instrucción. Lo opcional se marca con "(opcional)" en peso normal junto a la etiqueta.
- **Opciones:** cada opción es una caja de 3.5rem con su círculo de 1.5rem; la elegida toma borde y texto azul sobre azul lavado fuerte.

### Navigation
- **Botones de la cabecera:** dos círculos de 48 px junto a "Agendar cita" (letra grande "Aa" y modo claro/oscuro), con borde fino, nombre accesible y tooltip; el activo se tiñe de azul. No hay barra superior: horario y teléfono viven en el hero, el contacto y la barra fija del celular.
- **Cabecera:** blanca y fija arriba, con borde inferior de línea y sombra de reposo al desplazarse. Enlaces en 600 con forma de píldora de 3rem; hover con azul lavado y texto azul. A la derecha, el botón naranja de agendar.
- **Botones de herramienta:** círculos de 3rem con borde de línea; activos toman azul lavado fuerte con borde y icono azul.
- **Móvil:** el menú se despliega bajo la cabecera con filas de 3.5rem y se cierra al elegir o con Escape.

### Numerales de paso
Círculos naranjas de 4.5rem con el número en Gabarito 800 de 2rem, unidos por una línea blanca semitransparente de 2px. Un anillo del color de la franja (0.6rem) corta la línea alrededor de cada círculo. Donde el navegador lo permite, la línea se dibuja al entrar en pantalla; en móvil va en vertical y fija.

### Barra de acciones móvil
Fija al pie por debajo de 47.5rem: llamar, WhatsApp y agendar, en píldoras de 3.5rem. Las dos primeras van en contorno y la de agendar en naranja. Queda oculta mientras los botones del hero están a la vista y sube cuando salen de pantalla; el cuerpo reserva el espacio inferior, incluida el área segura del dispositivo.

### Entrada del hero
El único movimiento orquestado. El texto sube 1.25rem y aparece en cuatro tiempos separados 0.08 s (0.9 s cada uno), la forma azul crece desde 0.9, la foto se descubre con un recorte que se abre (1.2 s) y después llegan la barra rápida (0.4 s) y la tarjeta de horario (0.55 s). Todo usa la misma curva de desaceleración. Con movimiento reducido no hay entrada y las transiciones se anulan.

## Do's and Don'ts

### Do:
- **Do** reservar el naranja para los botones que abren o envían la solicitud de cita y para los numerales de paso (La regla del sol).
- **Do** usar `brand-fg` para texto, iconos y bordes, y `brand-bg` para rellenos, y revisar cada pieza nueva en los dos temas.
- **Do** mantener el texto corrido en 1.125rem o más y todo objetivo táctil en 3rem (48 px) o más.
- **Do** escribir tamaños en rem para que el modo de letra grande los alcance.
- **Do** heredar la pila de cuerpo completa, con "SCM Cifras" primero, en cualquier texto que muestre horas, fechas o teléfonos.
- **Do** poner etiqueta visible sobre cada campo y redactar el error como una instrucción clara.
- **Do** usar fotografía real de cuidado en casa con esquinas de 2.25rem o más; en tema oscuro las fotos bajan su brillo a 0.88.
- **Do** colocar toda animación de entrada dentro de la consulta de movimiento sin preferencia de reducción.

### Don't:
- **Don't** usar el naranja como decoración, fondo de sección o color de texto, ni en botones que no sean de agendar.
- **Don't** poner rótulos pequeños encima de los títulos, cifras de respaldo inventadas ni testimonios que la IPS no ha dado.
- **Don't** mostrar dígitos con Atkinson Hyperlegible: su cero con barra se lee como tachado.
- **Don't** depender del hover para mostrar información o acciones; el hover solo refuerza.
- **Don't** usar sombras duras o desplazadas de lado, ni esquinas rectas en tarjetas, campos o fotos.
- **Don't** añadir una segunda entrada animada fuera del hero.
- **Don't** escribir colores literales en componentes nuevos; todo color sale de un token que tenga valor en ambos temas.
