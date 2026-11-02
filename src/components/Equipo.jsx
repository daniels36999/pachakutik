import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, GraduationCap, Briefcase, Share2 } from 'lucide-react';
import { Cabecera, Nombre, Borrador } from './ui.jsx';
import { REDES } from './Icons.jsx';
import { ListaHitos } from './Trayectoria.jsx';

const Franja7 = () => <div className="franja" aria-hidden="true">{[1, 2, 3, 4, 5, 6, 7].map((n) => <span key={n} />)}</div>;

function Tarjeta({ p, esMatrizFoto, onAbrir }) {
  return (
    <button className={`tarjeta${p.pendiente ? ' pend' : ''}`} onClick={(e) => onAbrir(p, e)} aria-haspopup="dialog" aria-label={`Ver trayectoria de ${p.nombres} ${p.apellidos}`}>
      <span className="foto" style={{ display: 'grid' }} data-cuts={esMatrizFoto}>
        <img src={p.foto} alt="" style={esMatrizFoto ? { objectFit: 'contain', objectPosition: 'bottom center' } : undefined} />
        <span className="bloque cargo">{p.cargo}</span>
        <Franja7 />
      </span>
      <span className="info">
        <Nombre p={p} />
        {p.suplente ? <span className="sup">Suplente: {p.suplente.tratamiento} {p.suplente.nombre}</span> : null}
        <span className="ver">Ver trayectoria <ArrowUpRight size={16} aria-hidden="true" /></span>
      </span>
    </button>
  );
}

function Mini({ p, onAbrir }) {
  return (
    <button className="tarjeta mini" onClick={(e) => onAbrir(p, e)} aria-haspopup="dialog" aria-label={`Ver a ${p.nombres} ${p.apellidos}`}>
      <img src={p.foto} alt="" />
      <span style={{ display: 'grid', gap: 4 }}>
        <Nombre p={p} />
        <span className="sup">{p.cargo}</span>
      </span>
    </button>
  );
}

function redesDe(p, t) {
  const propias = Object.entries(p.redes || {}).filter(([, url]) => url).map(([k, url]) => ({ k, url, usuario: '' }));
  if (propias.length) return { lista: propias, propias: true };
  const camp = Object.entries(t.redes).filter(([, v]) => v.url).map(([k, v]) => ({ k, url: v.url, usuario: v.usuario }));
  return { lista: camp, propias: false };
}

function Modal({ p, t, todos, origen, onCerrar, onIr }) {
  const cierre = useRef(null);
  const caja = useRef(null);
  // El modal nace desde la tarjeta que se tocó (origen del escalado), no desde el centro.
  useLayoutEffect(() => {
    if (!origen || !caja.current) return;
    const r = caja.current.getBoundingClientRect();
    caja.current.style.transformOrigin = `${Math.round(origen.x - r.left)}px ${Math.round(origen.y - r.top)}px`;
  }, [origen]);
  const idx = todos.findIndex((x) => x.id === p.id);
  const esMatriz = !!(p.foto && !p.suplenteFoto && t.esMatriz) || p.id === 'alcalde';
  const { lista, propias } = redesDe(p, t);

  useEffect(() => {
    const previo = document.activeElement;
    const estilo = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    cierre.current?.focus();
    const tecla = (e) => {
      if (e.key === 'Escape') onCerrar();
      if (e.key === 'ArrowRight') onIr(1);
      if (e.key === 'ArrowLeft') onIr(-1);
      if (e.key === 'Tab') {
        const foc = [...document.querySelectorAll('.modal button, .modal a')];
        if (!foc.length) return;
        const a = foc[0]; const z = foc[foc.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    };
    window.addEventListener('keydown', tecla);
    return () => { window.removeEventListener('keydown', tecla); document.body.style.overflow = estilo; previo?.focus?.(); };
  }, [onCerrar, onIr]);

  return (
    <div className="modal-fondo" onMouseDown={(e) => { if (e.target === e.currentTarget) onCerrar(); }}>
      <div className="modal" ref={caja} role="dialog" aria-modal="true" aria-label={`${p.nombres} ${p.apellidos}`}>
        <div className={`modal-foto${esMatriz ? ' cuts' : ''}`}>
          <img src={p.foto} alt={`${p.nombres} ${p.apellidos}`} />
          <Franja7 />
        </div>
        <div className="modal-cuerpo">
          <button className="icono-btn modal-cerrar" ref={cierre} onClick={onCerrar} aria-label="Cerrar"><X size={20} /></button>
          <div className="modal-cab">
            <span className="bloque">{p.cargo}</span>
            <Nombre p={p} />
            {p.ambito ? <span className="res" style={{ fontWeight: 700, fontSize: '.85rem' }}>{p.ambito}</span> : null}
            {p.resumen ? <p className="res">{p.resumen}</p> : null}
          </div>

          {p.pendiente ? (
            <div className="plantilla-caja">
              <strong>Trayectoria por completar</strong>
              <span>Cuando agregues la formación y la experiencia de {p.nombres} en <code>src/data/{t.id}.js</code>, aparecerán aquí.</span>
              <Borrador />
            </div>
          ) : (
            <>
              {p.formacion?.length ? (
                <div>
                  <h4><GraduationCap size={18} /> Formación</h4>
                  <ul className="lista-f">
                    {p.formacion.map((f) => (
                      <li key={f.titulo}><span className="a">{f.anio || ''}</span><span><b>{f.titulo}</b><small>{f.detalle}</small></span></li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {p.experiencia?.length ? (
                <div>
                  <h4><Briefcase size={18} /> Experiencia</h4>
                  <ListaHitos items={p.experiencia} />
                </div>
              ) : null}
              {p.comunidad?.length ? (
                <div>
                  <h4>Liderazgo en su comunidad</h4>
                  <ListaHitos items={p.comunidad} />
                </div>
              ) : null}
            </>
          )}

          {p.suplente ? <p className="modal-sup">Suplente: <b>{p.suplente.tratamiento} {p.suplente.nombre}</b></p> : null}

          <div>
            <h4><Share2 size={18} /> Redes sociales</h4>
            <div className="redes-modal">
              {lista.map(({ k, url }) => {
                const { Icono, nombre } = REDES[k];
                return <a key={k} className={`red ${k}`} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${nombre} de ${p.nombres}`}><Icono /></a>;
              })}
              {!lista.length ? <span className="nota-red">Aún no hay redes registradas.</span> : null}
            </div>
            {lista.length && !propias ? <p className="nota-red" style={{ marginTop: 8 }}>Redes de la campaña de {t.nombre}.</p> : null}
          </div>
        </div>
        {todos.length > 1 ? (
          <div className="modal-nav">
            <button className="icono-btn" onClick={() => onIr(-1)} aria-label="Anterior" disabled={idx <= 0} style={{ opacity: idx <= 0 ? .4 : 1 }}><ChevronLeft size={20} /></button>
            <button className="icono-btn" onClick={() => onIr(1)} aria-label="Siguiente" disabled={idx >= todos.length - 1} style={{ opacity: idx >= todos.length - 1 ? .4 : 1 }}><ChevronRight size={20} /></button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Equipo({ t }) {
  const todos = t.equipos.flatMap((g) => g.personas);
  const [abierta, setAbierta] = useState(null);
  const [origen, setOrigen] = useState(null);
  const abrir = useCallback((p, e) => {
    if (e?.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); setOrigen({ x: r.left + r.width / 2, y: r.top + r.height / 2 }); }
    setAbierta(p);
  }, []);
  const cerrar = useCallback(() => setAbierta(null), []);
  const ir = useCallback((d) => setAbierta((a) => {
    if (!a) return a;
    const i = todos.findIndex((x) => x.id === a.id) + d;
    return todos[i] || a;
  }), [todos]);

  return (
    <section className="seccion alt" id="equipo" aria-labelledby="equipo-h">
      <div className="contenedor">
        <Cabecera id="equipo-h" titulo={t.esMatriz ? 'El equipo de la lista 18' : `El equipo de ${t.nombre}`} texto="Toca una tarjeta para ver la trayectoria completa, la formación y las redes de cada candidato." />
        {t.equipos.map((g) => (
          <div className="grupo" key={g.titulo}>
            <div className="grupo-cab"><h3>{g.titulo}</h3><p>{g.descripcion}</p></div>
            <div className={`tarjetas${g.compacto ? ' compacto' : ''}`} style={{ '--n': g.personas.length }}>
              {g.personas.map((p) => (g.compacto
                ? <Mini key={p.id} p={p} onAbrir={abrir} />
                : <Tarjeta key={p.id} p={p} esMatrizFoto={t.esMatriz || p.id === 'alcalde'} onAbrir={abrir} />))}
            </div>
          </div>
        ))}
      </div>
      {abierta ? <Modal p={abierta} t={t} todos={todos} origen={origen} onCerrar={cerrar} onIr={ir} /> : null}
    </section>
  );
}
