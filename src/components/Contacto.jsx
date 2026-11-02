import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { SITE } from '../data/site.js';
import { Cabecera, Borrador } from './ui.jsx';
import { WhatsApp } from './Icons.jsx';

function Dato({ icono: I, etiqueta, valor }) {
  const [ok, setOk] = useState(false);
  const copiar = async () => {
    try { await navigator.clipboard.writeText(valor); setOk(true); setTimeout(() => setOk(false), 1600); } catch { /* sin portapapeles */ }
  };
  const real = valor && !/X{3}/.test(valor);
  return (
    <div className={`dato${real ? '' : ' falta'}`}>
      <span className="i"><I size={20} aria-hidden="true" /></span>
      <span><small>{etiqueta}</small><b>{valor || 'Por completar'}</b></span>
      {real ? <button className={`copiar${ok ? ' ok' : ''}`} onClick={copiar} aria-label={`Copiar ${etiqueta}`}>{ok ? <Check size={18} /> : <Copy size={18} />}</button> : <span />}
    </div>
  );
}

export default function Contacto({ t }) {
  const c = t.contacto;
  const [nombre, setNombre] = useState('');
  const [msg, setMsg] = useState('');
  const wa = (c.whatsapp || '').replace(/\D/g, '');
  const texto = encodeURIComponent(`Hola, soy ${nombre || '…'}. ${msg}`.trim());
  const listo = wa && nombre.trim() && msg.trim();
  const mapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.ubicacion.busquedaMapa)}`;

  return (
    <section className="seccion" id="contacto" aria-labelledby="con-h">
      <div className="contenedor">
        <Cabecera id="con-h" titulo="Dónde estamos y cómo escribirnos" texto="Visítanos, llámanos o escríbenos por WhatsApp. Tu propuesta también cuenta." />
        <div className="contacto-grid">
          <div className="mapa">
            <svg className="relieve" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" fill="none" stroke="#fff" strokeOpacity=".18" strokeWidth="1.5">
              {[0, 1, 2, 3, 4, 5, 6].map((n) => <path key={n} d={`M-20 ${300 - n * 38} C 80 ${230 - n * 30}, 150 ${380 - n * 40}, 230 ${280 - n * 34} S 360 ${200 - n * 26}, 430 ${250 - n * 36}`} />)}
            </svg>
            <div><span className="pin"><MapPin size={26} aria-hidden="true" /></span></div>
            <div style={{ display: 'grid', gap: 14 }}>
              <h3>{t.ubicacion.nombre}</h3>
              <dl>
                <div><dt>Dirección</dt><dd>{c.direccion}</dd></div>
                {c.horario ? <div><dt>Horario de atención</dt><dd>{c.horario}</dd></div> : null}
              </dl>
              <a className="btn primario" href={mapa} target="_blank" rel="noopener noreferrer" style={{ justifySelf: 'start' }}><ExternalLink size={18} aria-hidden="true" /> Abrir en Google Maps</a>
            </div>
          </div>

          <div className="tarjeta-contacto">
            <div className="datos">
              <Dato icono={Phone} etiqueta="Teléfono" valor={c.telefono} />
              <Dato icono={Mail} etiqueta="Correo" valor={c.correo} />
              <Dato icono={Clock} etiqueta="Horario" valor={c.horario} />
            </div>
            <form className="formu" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="f-nombre">Tu nombre<input id="f-nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} autoComplete="name" placeholder="Ej.: María Quishpe" /></label>
              <label htmlFor="f-msg">Tu mensaje<textarea id="f-msg" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Cuéntanos tu propuesta o tu pregunta" /></label>
              <a className="btn azul" href={listo ? `https://wa.me/${wa}?text=${texto}` : undefined} target="_blank" rel="noopener noreferrer" aria-disabled={!listo}>
                <WhatsApp width="20" height="20" /> Enviar por WhatsApp
              </a>
              <span className="nota">{wa ? 'Se abre WhatsApp con tu mensaje listo para enviar.' : 'Falta agregar el número de WhatsApp en src/data/site.js.'}</span>
              {!wa ? <Borrador /> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
