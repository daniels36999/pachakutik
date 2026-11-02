// ============================================================================
//  PARROQUIA CEBADAS   →   www.porunsologuamote.com/cebadas/
//  Es una PLANTILLA: copia la estructura de guamote.js.
//  Lo que dice  pendiente: true  es lo que falta llenar (biografías, plan, fotos).
// ============================================================================
import { alcalde } from './guamote.js';
import equipo from '../assets/cebadas/equipo.webp';
import afiche from '../assets/afiches/cebadas.webp';
import hilda from '../assets/cebadas/hilda.webp';
import omar from '../assets/cebadas/omar.webp';
import nicol from '../assets/cebadas/nicol.webp';
import maximo from '../assets/cebadas/maximo.webp';
import viviana from '../assets/cebadas/viviana.webp';
import miguel from '../assets/cebadas/sup-miguel.webp';
import nelly from '../assets/cebadas/sup-nelly.webp';
import oscar from '../assets/cebadas/sup-oscar.webp';
import rosa from '../assets/cebadas/sup-rosa.webp';
import romel from '../assets/cebadas/sup-romel.webp';

// Plantilla de persona de la junta parroquial. Llena resumen, formacion y experiencia.
const vocal = (p) => ({
  tratamiento: '', ambito: 'Parroquia Cebadas', pendiente: true,
  resumen: '', formacion: [], experiencia: [], ...p,
});

export const vocales = [
  vocal({ id: 'hilda', nombres: 'Hilda', apellidos: 'Traves', cargo: 'Primera vocal', foto: hilda }),
  vocal({ id: 'omar', tratamiento: 'Abg.', nombres: 'Omar', apellidos: 'Cesén', cargo: 'Segundo vocal', foto: omar }),
  vocal({ id: 'nicol', nombres: 'Nicol', apellidos: 'Caranqui', cargo: 'Tercera vocal', foto: nicol }),
  vocal({ id: 'maximo', nombres: 'Máximo', apellidos: 'Cuji', cargo: 'Cuarto vocal', foto: maximo }),
  vocal({ id: 'viviana', nombres: 'Viviana', apellidos: 'Coro', cargo: 'Quinta vocal', foto: viviana }),
];

export const suplentes = [
  vocal({ id: 'miguel', nombres: 'Miguel', apellidos: 'Morocho', cargo: 'Vocal suplente', foto: miguel, suplenteFoto: true }),
  vocal({ id: 'nelly', nombres: 'Nelly', apellidos: 'Vimos Chuto', cargo: 'Vocal suplente', foto: nelly, suplenteFoto: true }),
  vocal({ id: 'oscar', nombres: 'Oscar', apellidos: 'Chachipud', cargo: 'Vocal suplente', foto: oscar, suplenteFoto: true }),
  vocal({ id: 'rosa', nombres: 'Rosa', apellidos: 'Arellano', cargo: 'Vocal suplente', foto: rosa, suplenteFoto: true }),
  vocal({ id: 'romel', nombres: 'Romel', apellidos: 'Chacha', cargo: 'Vocal suplente', foto: romel, suplenteFoto: true }),
];

const programaVacio = (n) => ({ codigo: `P${n}`, titulo: 'Programa por definir', icono: 'plantilla', pendiente: true, acciones: [] });

export default {
  id: 'cebadas',
  nombre: 'Cebadas',
  tipo: 'Junta parroquial',
  ruta: '/cebadas/',
  esMatriz: false,
  heroTitulo: 'Cebadas',
  heroSubtitulo: 'Junta Parroquial',
  heroImagen: equipo,
  lider: vocales[0],
  metricas: [
    { valor: 5, etiqueta: 'vocales principales', detalle: 'candidatos a la Junta Parroquial de Cebadas', color: '#44a0d9' },
    { valor: 5, etiqueta: 'vocales suplentes', detalle: 'equipo completo y listo para trabajar', color: '#369a37' },
    { valor: 18, etiqueta: 'lista Pachakutik', detalle: 'Vota todo 18, de alcalde a vocales', color: '#e7870a' },
    { valor: null, etiqueta: 'dato por definir', detalle: 'Ej.: comunidades, habitantes o kilómetros de vía', color: '#692577', pendiente: true },
  ],
  trayectoria: { titulo: 'Quién lidera la lista en Cebadas', persona: vocales[0] },
  planes: [
    {
      titulo: 'Plan de trabajo de la Junta Parroquial de Cebadas',
      base: 'Propuestas conforme a las competencias de los GAD parroquiales rurales. Completa estos programas en src/data/cebadas.js.',
      programas: [1, 2, 3, 4, 5, 6].map(programaVacio),
      compromiso: {
        titulo: 'Compromiso del alcalde con Cebadas y Palmira',
        texto: 'Gestionar la dotación de vehículos recolectores para la recolección de residuos sólidos en las parroquias de Cebadas y Palmira.',
      },
    },
  ],
  equipos: [
    { titulo: 'Candidato a alcalde', descripcion: 'Quien encabeza la lista 18 para todo el cantón.', personas: [alcalde] },
    { titulo: 'Vocales principales', descripcion: 'El equipo que asumirá la Junta Parroquial de Cebadas.', personas: vocales },
    { titulo: 'Vocales suplentes', descripcion: 'Vocales alternos de la lista.', personas: suplentes, compacto: true },
  ],
  redes: {
    facebook: { usuario: '@MovimientoPachakutikCebadas', url: 'https://www.facebook.com/profile.php?id=100086435296532' },
    tiktok: { usuario: '@pachakutik.cebadas2027', url: 'https://www.tiktok.com/@pachakutik.cebadas2027' },
    instagram: { usuario: '', url: '' },
    youtube: { usuario: '', url: '' },
    whatsapp: { usuario: '', url: '' },
  },
  galeria: [
    { src: afiche, titulo: 'Afiche oficial · Junta Parroquial de Cebadas', etiqueta: 'Afiches', ancha: true },
    { src: equipo, titulo: 'Equipo de candidatos de Cebadas', etiqueta: 'Equipo', ancha: true },
    { src: '', titulo: 'Comunidades de Cebadas', etiqueta: 'Parroquia' },
    { src: '', titulo: 'Reunión con dirigentes', etiqueta: 'Campaña' },
    { src: '', titulo: 'Paisaje de la parroquia', etiqueta: 'Parroquia' },
    { src: '', titulo: 'Minga comunitaria', etiqueta: 'Campaña' },
    { src: '', titulo: 'Fiesta de la parroquia', etiqueta: 'Parroquia' },
    { src: '', titulo: 'Familias de Cebadas', etiqueta: 'Parroquia' },
  ],

  contacto: { telefono: '', whatsapp: '', correo: '', direccion: 'Parroquia Cebadas, cantón Guamote' },
  ubicacion: { nombre: 'Cebadas, Guamote', busquedaMapa: 'Cebadas, Guamote, Chimborazo, Ecuador' },
  diptico: { paginas: [], descargaPdf: '' },
};
