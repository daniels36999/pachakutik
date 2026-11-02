import { useEffect, useMemo, useState } from 'react';
import { cargarTerritorio, TERRITORIOS } from './data/index.js';
import { PREVIEW } from './components/ui.jsx';
import { Barra, Header, Footer } from './components/Chrome.jsx';
import Hero from './components/Hero.jsx';
import Metricas from './components/Metricas.jsx';
import Trayectoria from './components/Trayectoria.jsx';
import Plan from './components/Plan.jsx';
import Equipo from './components/Equipo.jsx';
import Diptico from './components/Diptico.jsx';
import Galeria from './components/Galeria.jsx';
import Contacto from './components/Contacto.jsx';

function idActual() {
  const h = (window.location.hash || '').replace('#', '');
  if (PREVIEW && TERRITORIOS[h]) return h;
  return document.documentElement.dataset.territorio || 'guamote';
}

export default function App() {
  const [id, setId] = useState(idActual);
  useEffect(() => {
    if (!PREVIEW) return undefined;
    const f = () => { setId(idActual()); window.scrollTo({ top: 0 }); };
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);
  const t = useMemo(() => cargarTerritorio(id), [id]);

  // Revelado suave al entrar en pantalla (solo opacidad + transform, escalonado).
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return undefined;
    const sel = '.s-cabecera, .metrica, .paso, .hito, .chip-bloque, .programa, .tarjeta, .grupo-cab, .foto-item, .red-card, .dato, .compromiso';
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('rv-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    const t0 = setTimeout(() => {
      document.querySelectorAll(sel).forEach((el) => {
        if (el.dataset.rv) return;
        const hermanos = el.parentElement ? [...el.parentElement.children].filter((c) => c.matches(sel)) : [el];
        el.style.setProperty('--i', Math.min(hermanos.indexOf(el), 8));
        el.dataset.rv = '1';
        io.observe(el);
      });
    }, 60);
    return () => { clearTimeout(t0); io.disconnect(); };
  }, [id, t]);

  useEffect(() => { document.title = `${t.nombre} · Por un solo Guamote · Vota todo 18`; }, [t]);

  return (
    <>
      <Barra />
      <Header t={t} />
      <main>
        <Hero t={t} />
        <Metricas t={t} />
        <Trayectoria t={t} />
        <Plan t={t} />
        <Equipo t={t} />
        <Diptico t={t} />
        <Galeria t={t} />
        <Contacto t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
