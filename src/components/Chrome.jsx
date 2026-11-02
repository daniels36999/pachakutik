import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { SITE } from '../data/site.js';
import { TERRITORIOS } from '../data/index.js';
import { Arco, REDES } from './Icons.jsx';
import { Franja, PREVIEW, irA } from './ui.jsx';

const NAV = [
  ['trayectoria', 'Trayectoria'], ['plan', 'Plan de trabajo'], ['equipo', 'Equipo'],
  ['diptico', 'Díptico'], ['galeria', 'Galería'], ['contacto', 'Contacto'],
];

function useTema() {
  const [tema, setTema] = useState(() => {
    try { return localStorage.getItem('tema') || ''; } catch { return ''; }
  });
  useEffect(() => {
    const r = document.documentElement;
    if (tema) r.setAttribute('data-theme', tema); else r.removeAttribute('data-theme');
  }, [tema]);
  const esOscuro = tema ? tema === 'dark' : window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const alternar = () => {
    const nuevo = esOscuro ? 'light' : 'dark';
    setTema(nuevo);
    try { localStorage.setItem('tema', nuevo); } catch { /* sin almacenamiento */ }
  };
  return { esOscuro, alternar };
}

export function Barra() {
  return (
    <div className="barra">
      <div className="contenedor">
        <span><b>{SITE.llamado} {SITE.lista}</b> · {SITE.partido} {SITE.partidoCorto}</span>
        <span className="der">{SITE.dominio}</span>
      </div>
      <Franja />
    </div>
  );
}

export function Header({ t }) {
  const [abierto, setAbierto] = useState(false);
  const { esOscuro, alternar } = useTema();
  const ir = (id) => (e) => { e.preventDefault(); setAbierto(false); irA(id); };
  const hrefTerr = (id) => (PREVIEW ? `#${id}` : TERRITORIOS[id].ruta);

  return (
    <header className="header">
      <div className="contenedor">
        <a className="logo" href={PREVIEW ? `#${t.id}` : t.ruta} aria-label={`${SITE.nombreCampana}, inicio`} onClick={(e) => { if (PREVIEW) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }}>
          <Arco />
          <span className="t"><small>{t.esMatriz ? 'Cantón' : 'Parroquia'}</small><strong>Por un solo {t.id === 'guamote' ? 'Guamote' : t.nombre}</strong></span>
        </a>
        <nav className="nav" aria-label="Secciones">
          {NAV.map(([id, txt]) => <a key={id} href={`#${id}`} onClick={ir(id)}>{txt}</a>)}
        </nav>
        <div className="territorios" role="group" aria-label="Cambiar de parroquia">
          {Object.values(TERRITORIOS).map((x) => (
            <a key={x.id} href={hrefTerr(x.id)} aria-current={x.id === t.id ? 'page' : undefined}>{x.nombre}</a>
          ))}
        </div>
        <button className="icono-btn" onClick={alternar} aria-label={esOscuro ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}>
          {esOscuro ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="icono-btn menu-btn" onClick={() => setAbierto(!abierto)} aria-expanded={abierto} aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}>
          {abierto ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {abierto ? (
        <nav className="panel-movil" aria-label="Secciones">
          {NAV.map(([id, txt]) => <a key={id} href={`#${id}`} onClick={ir(id)}>{txt}</a>)}
        </nav>
      ) : null}
    </header>
  );
}

export function Footer({ t }) {
  const redes = Object.entries(t.redes).filter(([, v]) => v.url);
  return (
    <footer className="pie">
      <Franja gruesa />
      <div className="contenedor">
        <div>
          <a className="logo" href={PREVIEW ? `#${t.id}` : t.ruta} onClick={(e) => { if (PREVIEW) e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Arco size={44} />
            <span className="t"><small>{SITE.partido}</small><strong>{SITE.partidoCorto}</strong></span>
          </a>
          <p className="grande">{SITE.llamado} <span>{SITE.lista}</span></p>
          <p style={{ marginTop: 10, fontFamily: 'var(--f-texto)', fontStyle: 'italic' }}>#{SITE.hashtag}</p>
        </div>
        <div>
          <h4>En esta página</h4>
          <ul>{NAV.map(([id, txt]) => <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); irA(id); }}>{txt}</a></li>)}</ul>
        </div>
        <div>
          <h4>Parroquias</h4>
          <ul>
            {Object.values(TERRITORIOS).map((x) => <li key={x.id}><a href={PREVIEW ? `#${x.id}` : x.ruta}>{x.nombre}</a></li>)}
          </ul>
          {redes.length ? (
            <>
              <h4 style={{ marginTop: 18 }}>Síguenos</h4>
              <ul>{redes.map(([k, v]) => <li key={k}><a href={v.url} target="_blank" rel="noopener noreferrer">{REDES[k].nombre}</a></li>)}</ul>
            </>
          ) : null}
        </div>
        <div className="legal"><span>{SITE.dominio}</span><span>{SITE.partido} {SITE.partidoCorto} · Lista {SITE.lista}</span></div>
      </div>
    </footer>
  );
}
