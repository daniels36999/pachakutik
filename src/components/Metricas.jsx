import { useEffect, useRef, useState } from 'react';
import { Cabecera, Borrador } from './ui.jsx';

function useConteo(destino) {
  const ref = useRef(null);
  const [v, setV] = useState(destino);
  useEffect(() => {
    if (destino == null || !ref.current) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    let raf; let inicio = 0; let hecho = false;
    const paso = (ts) => {
      if (!inicio) inicio = ts;
      const k = Math.min((ts - inicio) / 900, 1);
      setV(Math.round(destino * (1 - Math.pow(1 - k, 4))));
      if (k < 1) raf = requestAnimationFrame(paso);
    };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !hecho) { hecho = true; setV(0); raf = requestAnimationFrame(paso); io.disconnect(); }
    }, { threshold: 0.5 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [destino]);
  return [ref, v];
}

function Tarjeta({ m }) {
  const [ref, v] = useConteo(m.valor);
  const vacia = m.valor == null;
  return (
    <div className={`metrica${vacia ? ' vacia' : ''}`} style={{ '--c': m.color }} ref={ref}>
      <span className="valor">{vacia ? '—' : v.toLocaleString('es-EC')}</span>
      <span className="etq">{m.etiqueta}</span>
      <span className="det">{m.detalle}</span>
      {m.pendiente ? <Borrador>Por completar</Borrador> : null}
    </div>
  );
}

export default function Metricas({ t }) {
  return (
    <section className="seccion" aria-labelledby="metricas-h" id="metricas">
      <div className="contenedor">
        <Cabecera id="metricas-h" titulo={t.esMatriz ? 'Guamote en números' : `${t.nombre} en números`} texto={t.esMatriz ? 'Cifras reales de la trayectoria del candidato y de la propuesta que presenta.' : 'El equipo que se presenta ante la parroquia.'} />
        <div className="metricas">{t.metricas.map((m) => <Tarjeta key={m.etiqueta} m={m} />)}</div>
      </div>
    </section>
  );
}
