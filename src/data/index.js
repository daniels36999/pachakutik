import guamote from './guamote.js';
import cebadas from './cebadas.js';
import palmira from './palmira.js';
import { SITE } from './site.js';

export const TERRITORIOS = { guamote, cebadas, palmira };

// Une los datos generales (SITE) con los del territorio. Lo que el territorio no
// define (contacto, ubicación) hereda de la matriz.
export function cargarTerritorio(id) {
  const t = TERRITORIOS[id] || guamote;
  return {
    ...t,
    contacto: { ...SITE.contacto, ...Object.fromEntries(Object.entries(t.contacto || {}).filter(([, v]) => v)) },
    ubicacion: { ...SITE.ubicacion, ...(t.ubicacion || {}) },
  };
}
