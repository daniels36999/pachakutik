import { useState } from 'react';
import { Check, Truck } from 'lucide-react';
import { Cabecera, Borrador, ciclo } from './ui.jsx';
import { IconoPrograma } from './Icons.jsx';

const CLAROS = new Set(['#ffda0f', '#bfe1ec']);

function Programa({ p, i }) {
  const c = ciclo(i);
  if (p.pendiente) {
    return (
      <article className="programa vacio">
        <div className="programa-cab">
          <span className="ico" style={{ '--c': 'var(--surface-2)', color: 'var(--ink-soft)' }}><IconoPrograma nombre="plantilla" size={24} /></span>
          <div><span className="cod">{p.codigo}</span><h3>{p.titulo}</h3></div>
        </div>
        <p className="obj">Objetivo y acciones por completar.</p>
        <Borrador />
      </article>
    );
  }
  return (
    <article className="programa">
      <div className="programa-cab">
        <span className={`ico${CLAROS.has(c) ? ' claro' : ''}`} style={{ '--c': c }}><IconoPrograma nombre={p.icono} size={24} /></span>
        <div><span className="cod">{p.codigo}</span><h3>{p.titulo}</h3></div>
      </div>
      {p.objetivo ? <p className="obj">{p.objetivo}</p> : null}
      <ul>{p.acciones.map((a) => <li key={a}><Check size={16} aria-hidden="true" /><span>{a}</span></li>)}</ul>
    </article>
  );
}

export default function Plan({ t }) {
  const [i, setI] = useState(0);
  const plan = t.planes[i];
  return (
    <section className="seccion" id="plan" aria-labelledby="plan-h">
      <div className="contenedor">
        <Cabecera id="plan-h" titulo="Plan de trabajo" texto="Lo que se propone hacer, programa por programa." />
        {t.planes.length > 1 ? (
          <div className="pestanas" role="tablist" aria-label="Planes de trabajo">
            {t.planes.map((p, k) => (
              <button key={p.titulo} role="tab" aria-selected={k === i} onClick={() => setI(k)}>{p.pestana || p.titulo}</button>
            ))}
          </div>
        ) : null}
        <h3 style={{ fontSize: '1.4rem', marginBottom: 8 }}>{plan.titulo}</h3>
        <p className="plan-base">{plan.base}</p>
        <div className="programas">{plan.programas.map((p, k) => <Programa key={p.codigo} p={p} i={k} />)}</div>
        {plan.compromiso ? (
          <div className="compromiso">
            <span className="ico"><Truck size={26} aria-hidden="true" /></span>
            <div><h3>{plan.compromiso.titulo}</h3><p>{plan.compromiso.texto}</p></div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
