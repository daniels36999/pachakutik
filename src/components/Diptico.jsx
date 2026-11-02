import { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { SITE, ARCOIRIS } from '../data/site.js';
import { Cabecera, Nombre } from './ui.jsx';

const PF = () => <div className="p-franja" aria-hidden="true">{ARCOIRIS.map((c) => <span key={c} style={{ background: c }} />)}</div>;

function Portada({ t }) {
  const p = t.esMatriz ? t.lider : null;
  return (
    <div className="panel azul portada">
      <div className="p-cont">
        <span className="p-pild" style={{ justifySelf: 'start' }}>{SITE.llamado} {SITE.lista}</span>
        <div className="p-hash"><i>#</i>{SITE.hashtag.replace(/(?=[A-Z])/g, '\u200b')}</div>
      </div>
      <div className={`p-foto${p ? '' : ' ancha'}`}>
        <img src={p ? p.foto : t.heroImagen} alt="" />
      </div>
      <div className="p-placa">
        {p ? <Nombre p={p} /> : <span className="nom"><span className="n">{t.nombre}</span><span className="a">Junta parroquial</span></span>}
        <span className="bloque">{p ? p.cargo : 'Lista 18'}</span>
      </div>
    </div>
  );
}

function Interior1({ t }) {
  const p = t.trayectoria.persona;
  const hitos = (p.experiencia || []).slice(-4);
  return (
    <div className="panel">
      <div className="p-cont">
        <h5>{t.esMatriz ? 'Su trayectoria' : 'Nuestra trayectoria'}</h5>
        {p.pendiente || !hitos.length ? (
          <p style={{ fontFamily: 'var(--f-texto)', fontSize: '3.6cqw' }}>Aquí va la historia y la trayectoria de {p.nombres} {p.apellidos}.</p>
        ) : (
          <>
            <p style={{ fontFamily: 'var(--f-texto)', fontSize: '3.6cqw', lineHeight: 1.45 }}>{p.citaCorta || p.resumen}</p>
            <ul className="p-lista">
              {hitos.map((h) => <li key={h.cargo}><b>›</b><span><strong>{h.periodo}</strong> · {h.cargo}{h.lugar ? `, ${h.lugar}` : ''}</span></li>)}
            </ul>
          </>
        )}
      </div>
      <div className="p-cierre">
        {t.esMatriz ? <Nombre p={p} /> : <span className="nom"><span className="n">{t.nombre}</span></span>}
        <span className="bloque">{p.cargo}</span>
      </div>
      <PF />
    </div>
  );
}

function Interior2({ t }) {
  const plan = t.planes[0];
  return (
    <div className="panel">
      <div className="p-cont">
        <h5>Plan de trabajo</h5>
        <ul className="p-prog">
          {plan.programas.slice(0, 8).map((x) => <li key={x.codigo}><b>{x.codigo}</b><span>{x.pendiente ? 'Programa por definir' : x.titulo}</span></li>)}
        </ul>
      </div>
      <div className="p-cierre">
        <span className="p-pild">{SITE.llamado}</span>
        <span className="p-n18">{SITE.lista}</span>
      </div>
      <PF />
    </div>
  );
}

function Contraportada({ t }) {
  const gente = t.equipos.flatMap((g) => g.personas).filter((p) => !p.suplenteFoto).slice(0, 6);
  return (
    <div className="panel azul">
      <div className="p-cont" style={{ color: '#fff' }}>
        <h5 style={{ color: '#fff' }}>Un equipo, una sola voz</h5>
        <div className="p-equipo">
          {gente.map((p) => (
            <div key={p.id}><img src={p.foto} alt="" style={t.esMatriz ? { objectFit: 'contain', objectPosition: 'bottom' } : undefined} /><span>{p.nombres.split(' ')[0]}</span></div>
          ))}
        </div>
        <div className="p-contacto">
          <span>{SITE.dominio}</span>
          {Object.entries(t.redes).filter(([, v]) => v.usuario).slice(0, 2).map(([k, v]) => <span key={k}>{v.usuario}</span>)}
        </div>
      </div>
      <div className="p-placa" style={{ background: '#fff' }}>
        <span className="p-pild">{SITE.llamado} {SITE.lista}</span>
        <span style={{ fontSize: '3.2cqw', fontWeight: 700 }}>{SITE.partido} {SITE.partidoCorto}</span>
      </div>
    </div>
  );
}

export default function Diptico({ t }) {
  const imgs = t.diptico.paginas || [];
  const hayImgs = imgs.length > 0;
  const vistas = hayImgs
    ? imgs.map((src, i) => ({ id: `p${i}`, nombre: i === 0 ? 'Portada' : i === imgs.length - 1 && imgs.length > 2 ? 'Contraportada' : `Página ${i + 1}`, src }))
    : [{ id: 'portada', nombre: 'Portada' }, { id: 'interior', nombre: 'Interior' }, { id: 'contra', nombre: 'Contraportada' }];
  const [i, setI] = useState(0);
  const v = vistas[i];
  const ir = (d) => setI((x) => Math.min(vistas.length - 1, Math.max(0, x + d)));

  return (
    <section className="seccion" id="diptico" aria-labelledby="dip-h">
      <div className="contenedor">
        <Cabecera id="dip-h" titulo="Díptico digital" texto="Hojéalo como el impreso: portada, interior y contraportada." />
        <div className="dip-controles">
          <div className="pestanas" style={{ marginBottom: 0 }} role="tablist" aria-label="Páginas del díptico">
            {vistas.map((x, k) => <button key={x.id} role="tab" aria-selected={k === i} onClick={() => setI(k)}>{x.nombre}</button>)}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="icono-btn" onClick={() => ir(-1)} disabled={i === 0} aria-label="Página anterior" style={{ opacity: i === 0 ? .4 : 1 }}><ChevronLeft size={20} /></button>
            <button className="icono-btn" onClick={() => ir(1)} disabled={i === vistas.length - 1} aria-label="Página siguiente" style={{ opacity: i === vistas.length - 1 ? .4 : 1 }}><ChevronRight size={20} /></button>
            {t.diptico.descargaPdf ? <a className="btn azul" href={t.diptico.descargaPdf} download><Download size={18} /> Descargar PDF</a> : null}
          </div>
        </div>
        <div className="dip-escena">
          {hayImgs ? (
            <img key={v.id} className="dip-img" src={v.src} alt={`Díptico, ${v.nombre}`} />
          ) : v.id === 'interior' ? (
            <div key={v.id} className="dip-spread dos"><Interior1 t={t} /><Interior2 t={t} /></div>
          ) : (
            <div key={v.id} className="dip-spread una">{v.id === 'portada' ? <Portada t={t} /> : <Contraportada t={t} />}</div>
          )}
        </div>
      </div>
    </section>
  );
}
