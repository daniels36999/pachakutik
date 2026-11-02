import { ARCOIRIS, SITE } from '../data/site.js';

export const PREVIEW = import.meta.env.VITE_PREVIEW === '1';

export function Franja({ gruesa = false }) {
  return (
    <div className={`franja${gruesa ? ' gruesa' : ''}`} aria-hidden="true">
      {ARCOIRIS.map((c) => <span key={c} />)}
    </div>
  );
}

/** Nombre con la línea gráfica: nombres en azul, apellidos en rojo cursiva. */
export function Nombre({ p, className = '' }) {
  return (
    <span className={`nom ${className}`}>
      {p.tratamiento ? <span className="trat">{p.tratamiento}</span> : null}
      <span className="n">{p.nombres}</span>
      <span className="a">{p.apellidos}</span>
    </span>
  );
}

export function Borrador({ children = 'Por completar' }) {
  if (!SITE.modoBorrador) return null;
  return <span className="borrador">{children}</span>;
}

export function irA(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Cabecera({ id, titulo, texto, borrador }) {
  return (
    <div className="s-cabecera">
      <h2 id={id}>{titulo}</h2>
      {texto ? <p>{texto}</p> : null}
      {borrador ? <Borrador>{borrador}</Borrador> : null}
    </div>
  );
}

export const COLORES_CICLO = ['#d41323', '#e7870a', '#369a37', '#44a0d9', '#692577', '#a8112a'];
export const ciclo = (i) => COLORES_CICLO[i % COLORES_CICLO.length];
