import { SITE, ARCOIRIS } from '../data/site.js';
import { Arco } from './Icons.jsx';
import { Franja, Nombre, irA } from './ui.jsx';

function Papeleta() {
  return (
    <div className="papeleta" aria-label={`${SITE.llamado} ${SITE.lista}`}>
      <span className="pildora">{SITE.llamado}</span>
      <span className="n18">{SITE.lista}</span>
      <svg viewBox="0 0 112 52" aria-hidden="true">
        <rect x="2" y="2" width="108" height="48" rx="8" fill="#fff" stroke="#c9d3ea" strokeWidth="2" />
        <path d="M14 26h84" stroke="#0a1436" strokeWidth="3" strokeLinecap="round" opacity=".85" />
        <path className="marca" d="M20 40L92 12" stroke="#e30613" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function Banda() {
  // La banda del arcoíris, como la banda que lleva el candidato.
  return (
    <svg className="sash" viewBox="0 0 400 520" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <g transform="rotate(14 200 260)">
        {ARCOIRIS.map((c, i) => <rect key={c} x={150 + i * 16} y="-80" width="16" height="700" fill={c} opacity=".92" />)}
      </g>
    </svg>
  );
}

function Acciones({ t }) {
  return (
    <div className="hero-acciones">
      <a className="btn primario" href="#plan" onClick={(e) => { e.preventDefault(); irA('plan'); }}>Ver el plan de trabajo</a>
      <a className="btn fantasma" href="#equipo" onClick={(e) => { e.preventDefault(); irA('equipo'); }}>Conocer al equipo</a>
    </div>
  );
}

export default function Hero({ t }) {
  const base = (
    <>
      <span className="partido-chip"><Arco size={26} />{SITE.partido} {SITE.partidoCorto}</span>
    </>
  );

  if (t.esMatriz) {
    const p = t.lider;
    return (
      <section className="hero" aria-labelledby="hero-h">
        <div className="contenedor">
          <div className="hero-texto">
            {base}
            <h1 id="hero-h" className="hashtag"><i>#</i>{SITE.hashtag}</h1>
            <p className="hero-eslogan">{SITE.eslogan}</p>
            <Acciones t={t} />
            <ul className="hero-datos" aria-label="Datos clave">
              {t.metricas.slice(0, 3).map((m) => (
                <li key={m.etiqueta} style={{ '--c': m.color }}><b>{m.valor?.toLocaleString('es-EC')}</b><span>{m.etiqueta}</span></li>
              ))}
            </ul>
          </div>
          <div className="hero-visual">
            <Banda />
            <img className="retrato" src={p.foto} alt={`${p.tratamiento} ${p.nombres} ${p.apellidos}, candidato a ${p.cargo}`} width="472" height="591" />
            <Papeleta />
          </div>
          <div className="hero-placa">
            <div>
              <Nombre p={p} />
              <p className="ambito">{p.ambito} · Lista {SITE.lista}</p>
            </div>
            <span className="bloque">{p.cargo}</span>
          </div>
        </div>
        <Franja gruesa />
      </section>
    );
  }

  return (
    <section className="hero hero-parroquia" aria-labelledby="hero-h">
      <div className="contenedor">
        <div className="hero-texto">
          {base}
          <div className="hero-titulo">
            <h1 id="hero-h" className="globo">{t.heroTitulo}</h1>
            <p className="hashtag" style={{ marginTop: 18 }}><i>#</i>{SITE.hashtag}</p>
            <span className="cinta">{t.heroSubtitulo}</span>
          </div>
          <Acciones t={t} />
        </div>
        <div className="hero-visual"><Papeleta /></div>
        <div className="foto-equipo"><img src={t.heroImagen} alt={`Equipo de candidatos de ${t.nombre}`} /></div>
      </div>
      <Franja gruesa />
    </section>
  );
}
