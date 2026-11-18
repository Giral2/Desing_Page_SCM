const WHATSAPP = '573159565622';
const root = document.documentElement;

const store = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* almacenamiento no disponible: la preferencia dura solo esta visita */
    }
  },
};

/* Tema ------------------------------------------------------------------ */

/* Los botones nombran la acción que harán ("Modo oscuro" / "Modo claro"), así que no
   llevan aria-pressed; data-on solo marca el estado para el estilo. */
const themeBtns = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');
const themeLabels = document.querySelectorAll<HTMLElement>('[data-theme-label]');
const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

function paintTheme() {
  const dark = root.dataset.theme === 'dark';
  const label = dark ? 'Modo claro' : 'Modo oscuro';
  themeBtns.forEach((btn) => {
    btn.toggleAttribute('data-on', dark);
    btn.title = dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
  });
  themeLabels.forEach((el) => (el.textContent = label));
  themeMeta?.setAttribute('content', dark ? '#030b15' : '#0f4c9a');
}

themeBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    store.set('scm-theme', next);
    paintTheme();
  }),
);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (store.get('scm-theme')) return;
  root.dataset.theme = event.matches ? 'dark' : 'light';
  paintTheme();
});

paintTheme();

/* Tamaño de letra ------------------------------------------------------- */

const textBtns = document.querySelectorAll<HTMLButtonElement>('[data-text-toggle]');
const textLabels = document.querySelectorAll<HTMLElement>('[data-text-label]');

function paintText() {
  const large = root.dataset.text === 'large';
  textBtns.forEach((btn) => {
    btn.toggleAttribute('data-on', large);
    btn.title = large ? 'Volver a la letra normal' : 'Agrandar la letra';
  });
  textLabels.forEach((el) => (el.textContent = large ? 'Letra normal' : 'Letra grande'));
}

textBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    const large = root.dataset.text !== 'large';
    if (large) root.dataset.text = 'large';
    else delete root.dataset.text;
    store.set('scm-text', large ? 'large' : 'normal');
    paintText();
  }),
);

paintText();

/* Cabecera y menú ------------------------------------------------------- */

const header = document.querySelector<HTMLElement>('[data-header]');
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const nav = document.querySelector<HTMLElement>('[data-nav]');

function onScroll() {
  header?.toggleAttribute('data-scrolled', window.scrollY > 8);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

function setMenu(open: boolean) {
  nav?.toggleAttribute('data-open', open);
  menuBtn?.setAttribute('aria-expanded', String(open));
}

menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
nav?.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuBtn?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuBtn.focus();
  }
});

/* Barra de acciones en móvil: aparece cuando los botones del hero ya no se ven */

const dock = document.querySelector<HTMLElement>('[data-dock]');
const heroActions = document.querySelector<HTMLElement>('[data-hero-actions]');

if (dock && heroActions && 'IntersectionObserver' in window) {
  dock.setAttribute('data-auto', '');
  new IntersectionObserver(([entry]) => {
    dock.toggleAttribute('data-show', !entry.isIntersecting);
  }).observe(heroActions);
}

/* Fechas ---------------------------------------------------------------- */

function isoToday(): string {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

document.querySelectorAll<HTMLInputElement>('[data-date]').forEach((input) => {
  input.min = isoToday();
});

function parseDay(value: string): Date | null {
  if (!value) return null;
  const [y, m, d] = value.split('-').map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

const dayFormat = new Intl.DateTimeFormat('es-CO', { weekday: 'long', day: 'numeric', month: 'long' });

/* Formularios de cita --------------------------------------------------- */

const fullForm = document.querySelector<HTMLFormElement>('[data-booking="full"]');
const picked = document.querySelector<HTMLElement>('[data-picked]');
const pickedName = document.querySelector<HTMLElement>('[data-picked-name]');
const done = document.querySelector<HTMLElement>('[data-done]');
const doneLink = document.querySelector<HTMLAnchorElement>('[data-done-link]');

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function setError(control: Control, message: string) {
  const slot = control.form?.querySelector<HTMLElement>(`[data-error-for="${control.id}"]`);
  if (!slot) return;
  if (message) {
    slot.textContent = message;
    slot.hidden = false;
    slot.id = `${control.id}-error`;
    control.setAttribute('aria-invalid', 'true');
    control.setAttribute('aria-describedby', slot.id);
  } else {
    slot.textContent = '';
    slot.hidden = true;
    control.removeAttribute('aria-invalid');
    control.removeAttribute('aria-describedby');
  }
}

function check(control: Control): string {
  const value = control.value.trim();
  switch (control.name) {
    case 'nombre':
      return value.length < 3 ? 'Escriba su nombre y apellido.' : '';
    case 'telefono': {
      const digits = value.replace(/\D/g, '');
      if (!digits) return 'Escriba un teléfono para devolverle la llamada.';
      return digits.length < 7 ? 'El teléfono parece incompleto. Revise los números.' : '';
    }
    case 'servicio':
      return value ? '' : 'Elija un servicio. Si no está seguro, elija "No estoy seguro".';
    case 'dia': {
      const day = parseDay(value);
      if (!day) return '';
      if (value < isoToday()) return 'Ese día ya pasó. Elija una fecha desde hoy.';
      return day.getDay() === 0 ? 'Los domingos no atendemos. Elija un día de lunes a sábado.' : '';
    }
    default:
      return '';
  }
}

function buildMessage(form: HTMLFormElement): string {
  const data = new FormData(form);
  const text = (key: string) => String(data.get(key) ?? '').trim();
  const day = parseDay(text('dia'));
  const lines = [
    `Hola, soy ${text('nombre')}.`,
    `Quiero solicitar una cita a domicilio${text('paciente') ? ` ${text('paciente')}` : ''}.`,
    `Servicio: ${text('servicio')}`,
  ];
  if (day) lines.push(`Día preferido: ${dayFormat.format(day)}${text('jornada') ? `, ${text('jornada')}` : ''}`);
  else if (text('jornada')) lines.push(`Jornada preferida: ${text('jornada')}`);
  if (text('telefono')) lines.push(`Teléfono: ${text('telefono')}`);
  if (text('barrio')) lines.push(`Barrio: ${text('barrio')}`);
  if (text('mensaje')) lines.push(`Mensaje: ${text('mensaje')}`);
  return lines.join('\n');
}

document.querySelectorAll<HTMLFormElement>('[data-booking]').forEach((form) => {
  const controls = Array.from(form.querySelectorAll<Control>('input:not([type="radio"]), select, textarea'));

  controls.forEach((control) => {
    control.addEventListener('blur', () => {
      if (control.value || control.hasAttribute('aria-invalid')) setError(control, check(control));
    });
    control.addEventListener('input', () => {
      if (control.hasAttribute('aria-invalid')) setError(control, check(control));
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let first: Control | null = null;
    controls.forEach((control) => {
      const message = check(control);
      setError(control, message);
      if (message && !first) first = control;
    });
    if (first) {
      (first as Control).focus();
      return;
    }

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildMessage(form))}`;
    window.open(url, '_blank', 'noopener');

    if (form === fullForm && done && doneLink) {
      doneLink.href = url;
      done.hidden = false;
      done.scrollIntoView({ block: 'nearest' });
    }
  });
});

/* Elegir un servicio desde las tarjetas --------------------------------- */

document.querySelectorAll<HTMLButtonElement>('[data-pick]').forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.dataset.pick ?? '';
    const select = fullForm?.querySelector<HTMLSelectElement>('select[name="servicio"]');
    if (!fullForm || !select) return;
    select.value = name;
    setError(select, '');
    if (picked && pickedName) {
      pickedName.textContent = name;
      picked.hidden = false;
    }
    if (done) done.hidden = true;
    document.getElementById('cita')?.scrollIntoView();
    fullForm.querySelector<HTMLInputElement>('input[name="nombre"]')?.focus({ preventScroll: true });
  });
});

fullForm?.querySelector<HTMLSelectElement>('select[name="servicio"]')?.addEventListener('change', (event) => {
  const value = (event.target as HTMLSelectElement).value;
  if (!picked || !pickedName) return;
  pickedName.textContent = value;
  picked.hidden = !value;
});
