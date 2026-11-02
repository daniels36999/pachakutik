import { GraduationCap, Briefcase, Users, Building2 } from 'lucide-react';
import { Cabecera, Nombre, Borrador, ciclo } from './ui.jsx';

export function ListaHitos({ items }) {
  return (
    <div className="linea">
      {items.map((h, i) => (
        <div className="hito" key={`${h.periodo}-${h.cargo}-${i}`} style={{ '--c': ciclo(i) }}>
          <span className="per">{h.periodo}</span>
          <span className="car">{h.cargo}</span>
          {h.lugar ? <span className="lug">{h.lugar}</span> : null}
          {h.detalle ? <span className="det">{h.detalle}</span> : null}
        </div>
      ))}
    </div>
  );
}

export default function Trayectoria({ t }) {
  const p = t.trayectoria.persona;
  const esCuts = t.esMatriz;
  return (
    <section className="seccion alt" id="trayectoria" aria-labelledby="tray-h">
      <div className="contenedor">
        <Cabecera id="tray-h" titulo={t.trayectoria.titulo} texto={p.sintesis || p.resumen || undefined} borrador={p.pendiente ? 'Biografía por completar' : undefined} />
        <div className="tray">
          <aside className="tray-ficha">
            <div className={`ficha-foto${esCuts ? ' cuts' : ''}`}>
              <img src={p.foto} alt={`${p.nombres} ${p.apellidos}`} loading="lazy" />
              <div className="franja" aria-hidden="true">{[1,2,3,4,5,6,7].map((n) => <span key={n} />)}</div>
            </div>
            <div className="ficha-nom">
              <Nombre p={p} />
              <span className="bloque">{p.cargo}</span>
              {p.historia ? <p className="cita">{p.historia}</p> : null}
            </div>
          </aside>

          <div className="tray-cuerpo">
            {p.pendiente ? (
              <div className="plantilla-caja">
                <strong>Plantilla de biografía</strong>
                <span>Aquí aparecerán la formación, la experiencia laboral y los cargos de {p.nombres} {p.apellidos}. Llénalos en <code>src/data/{t.id}.js</code> (campos <code>resumen</code>, <code>formacion</code> y <code>experiencia</code>) y esta sección se arma sola.</span>
                <Borrador>Por completar</Borrador>
              </div>
            ) : (
              <>
                {p.formacion?.length ? (
                  <div className="bloque-t">
                    <h3><GraduationCap size={22} /> Formación</h3>
                    <div className="pasos">
                      {p.formacion.map((f, i) => (
                        <div className="paso" key={f.titulo} style={{ '--c': ciclo(i + 4) }}>
                          <span className="anio">{f.anio || ' '}</span>
                          <strong>{f.titulo}</strong>
                          <span>{f.detalle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
                {p.experiencia?.length ? (
                  <div className="bloque-t">
                    <h3><Briefcase size={22} /> Experiencia profesional</h3>
                    <ListaHitos items={p.experiencia} />
                  </div>
                ) : null}
                {p.comunidad?.length ? (
                  <div className="bloque-t">
                    <h3><Users size={22} /> Liderazgo en su comunidad</h3>
                    <div className="chips">
                      {p.comunidad.map((c) => (
                        <div className="chip-bloque" key={c.cargo}><span className="per">{c.periodo}</span><strong>{c.cargo}</strong></div>
                      ))}
                    </div>
                  </div>
                ) : null}
                {p.empresas?.length ? (
                  <div className="bloque-t">
                    <h3><Building2 size={22} /> Empresas que dirige</h3>
                    <div className="chips">
                      {p.empresas.map((c) => (
                        <div className="chip-bloque empresa" key={c.lugar}><span className="per">{c.cargo}</span><strong>{c.lugar}</strong></div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
