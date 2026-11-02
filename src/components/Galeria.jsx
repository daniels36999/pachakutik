import { useEffect, useState } from 'react';
import { Image as ImagenIco, X } from 'lucide-react';
import { SITE } from '../data/site.js';
import { Cabecera } from './ui.jsx';
import { REDES } from './Icons.jsx';

function Lightbox({ item, onCerrar }) {
  useEffect(() => {
    const k = (e) => { if (e.key === 'Escape') onCerrar(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onCerrar]);
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.titulo} onMouseDown={(e) => { if (e.target === e.currentTarget) onCerrar(); }}>
      <button className="icono-btn modal-cerrar" onClick={onCerrar} aria-label="Cerrar" style={{ position: 'absolute', top: 'max(14px, env(safe-area-inset-top, 0px))', right: 14 }}><X size={20} /></button>
      <figure style={{ margin: 0, maxWidth: '100%' }}>
        <img src={item.src} alt={item.titulo} />
        <p>{item.titulo}</p>
      </figure>
    </div>
  );
}

export default function Galeria({ t }) {
  const etiquetas = ['Todas', ...new Set(t.galeria.map((g) => g.etiqueta))];
  const [f, setF] = useState('Todas');
  const [abierta, setAbierta] = useState(null);
  const visibles = t.galeria.filter((g) => f === 'Todas' || g.etiqueta === f);
  const items = visibles.filter((g) => g.src);
  const vacias = visibles.filter((g) => !g.src);
  const cerrar = () => setAbierta(null);

  return (
    <section className="seccion alt" id="galeria" aria-labelledby="gal-h">
      <div className="contenedor">
        <Cabecera id="gal-h" titulo={t.esMatriz ? 'Galería de Guamote' : `Galería de ${t.nombre}`} texto="Momentos de la campaña y rincones del territorio. Toca una foto para verla grande." />
        <div className="filtros" role="group" aria-label="Filtrar fotos">
          {etiquetas.map((e) => <button key={e} aria-pressed={f === e} onClick={() => setF(e)}>{e}</button>)}
        </div>
        <div className="galeria">
          {items.map((g) => (
            <button key={g.titulo} className={`foto-item${g.ancha ? ' ancha' : ''}`} onClick={() => setAbierta(g)} aria-label={`Ampliar: ${g.titulo}`}>
              <img src={g.src} alt={g.titulo} loading="lazy" />
              <span className="pie">{g.titulo}</span>
            </button>
          ))}
          {SITE.modoBorrador && vacias.length ? (
            <div className="foto-item vacia">
              <ImagenIco size={28} aria-hidden="true" />
              <strong>{vacias.length} espacios para tus fotos</strong>
              <span>{vacias.slice(0, 3).map((v) => v.titulo).join(' · ')}…</span>
              <span>Agrégalas en <code>galeria[ ]</code> de src/data/{t.id}.js</span>
            </div>
          ) : null}
        </div>

        <h3 className="redes-titulo">Síguenos en redes</h3>
        <div className="redes-grid">
          {Object.entries(REDES).map(([k, { nombre, Icono }]) => {
            const r = t.redes[k] || {};
            if (!r.url && !SITE.modoBorrador) return null;
            const Etiqueta = r.url ? 'a' : 'div';
            return (
              <Etiqueta key={k} className={`red-card${r.url ? '' : ' vacia'}`} {...(r.url ? { href: r.url, target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <span className={`red ${k}`}><Icono /></span>
                <span><strong>{nombre}</strong><span>{r.url ? r.usuario || 'Abrir' : 'Enlace por agregar'}</span></span>
              </Etiqueta>
            );
          })}
        </div>
      </div>
      {abierta ? <Lightbox item={abierta} onCerrar={cerrar} /> : null}
    </section>
  );
}
