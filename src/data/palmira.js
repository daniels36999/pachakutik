// ============================================================================
//  PARROQUIA PALMIRA   →   www.porunsologuamote.com/palmira/
//  Es una PLANTILLA: copia la estructura de guamote.js.
//  Lo que dice  pendiente: true  es lo que falta llenar (biografías, plan, fotos).
// ============================================================================
import { alcalde } from './guamote.js';
import equipo from '../assets/palmira/equipo.webp';
import afiche from '../assets/afiches/palmira.webp';
import jaime from '../assets/palmira/jaime.webp';
import margarita from '../assets/palmira/margarita.webp';
import gilberto from '../assets/palmira/gilberto.webp';
import josefa from '../assets/palmira/josefa.webp';
import jose from '../assets/palmira/jose.webp';
import fabiola from '../assets/palmira/sup-fabiola.webp';
import vicente from '../assets/palmira/sup-vicente.webp';
import cecilia from '../assets/palmira/sup-cecilia.webp';
import wilfrido from '../assets/palmira/sup-wilfrido.webp';
import maria from '../assets/palmira/sup-maria.webp';

const vocal = (p) => ({
  tratamiento: '', ambito: 'Parroquia Palmira', pendiente: true,
  resumen: '', formacion: [], experiencia: [], ...p,
});

export const vocales = [
  vocal({ id: 'jaime', tratamiento: 'Abg.', nombres: 'Jaime', apellidos: 'Roldán', cargo: 'Primer vocal', foto: jaime }),
  vocal({ id: 'margarita', nombres: 'Margarita', apellidos: 'Roldán', cargo: 'Segunda vocal', foto: margarita }),
  vocal({ id: 'gilberto', nombres: 'Gilberto', apellidos: 'Guaraca', cargo: 'Tercer vocal', foto: gilberto }),
  vocal({ id: 'josefa', nombres: 'Josefa', apellidos: 'Rivera', cargo: 'Cuarta vocal', foto: josefa }),
  vocal({ id: 'jose', nombres: 'José', apellidos: 'Daquilema', cargo: 'Quinto vocal', foto: jose }),
];

export const suplentes = [
  vocal({ id: 'fabiola', nombres: 'Fabiola', apellidos: 'Charco', cargo: 'Vocal suplente', foto: fabiola, suplenteFoto: true }),
  vocal({ id: 'vicente', nombres: 'Vicente', apellidos: 'Manguia', cargo: 'Vocal suplente', foto: vicente, suplenteFoto: true }),
  vocal({ id: 'cecilia', nombres: 'Cecilia', apellidos: 'Guamán', cargo: 'Vocal suplente', foto: cecilia, suplenteFoto: true }),
  vocal({ id: 'wilfrido', nombres: 'Wilfrido', apellidos: 'Huilca', cargo: 'Vocal suplente', foto: wilfrido, suplenteFoto: true }),
  vocal({ id: 'maria', nombres: 'María', apellidos: 'Guzñay', cargo: 'Vocal suplente', foto: maria, suplenteFoto: true }),
];

const programaVacio = (n) => ({ codigo: `P${n}`, titulo: 'Programa por definir', icono: 'plantilla', pendiente: true, acciones: [] });

export default {
  id: 'palmira',
  nombre: 'Palmira',
  tipo: 'Junta parroquial',
  ruta: '/palmira/',
  esMatriz: false,
  heroTitulo: 'Palmira',
  heroSubtitulo: 'Junta Parroquial',
  heroImagen: equipo,
  lider: vocales[0],
  metricas: [
    { valor: 5, etiqueta: 'vocales principales', detalle: 'candidatos a la Junta Parroquial de Palmira', color: '#44a0d9' },
    { valor: 5, etiqueta: 'vocales suplentes', detalle: 'equipo completo y listo para trabajar', color: '#369a37' },
    { valor: 18, etiqueta: 'lista Pachakutik', detalle: 'Vota todo 18, de alcalde a vocales', color: '#e7870a' },
    { valor: null, etiqueta: 'dato por definir', detalle: 'Ej.: comunidades, habitantes o kilómetros de vía', color: '#692577', pendiente: true },
  ],
  trayectoria: { titulo: 'Quién lidera la lista en Palmira', persona: vocales[0] },
  planes: [
    {
      titulo: 'Plan de trabajo de la Junta Parroquial de Palmira',
      base: 'Propuestas conforme a las competencias de los GAD parroquiales rurales. Completa estos programas en src/data/palmira.js.',
      programas: [1, 2, 3, 4, 5, 6].map(programaVacio),
      compromiso: {
        titulo: 'Compromiso del alcalde con Cebadas y Palmira',
        texto: 'Gestionar la dotación de vehículos recolectores para la recolección de residuos sólidos en las parroquias de Cebadas y Palmira.',
      },
    },
  ],
  equipos: [
    { titulo: 'Candidato a alcalde', descripcion: 'Quien encabeza la lista 18 para todo el cantón.', personas: [alcalde] },
    { titulo: 'Vocales principales', descripcion: 'El equipo que asumirá la Junta Parroquial de Palmira.', personas: vocales },
    { titulo: 'Vocales suplentes', descripcion: 'Vocales alternos de la lista.', personas: suplentes, compacto: true },
  ],
  redes: {
    facebook: { usuario: '@MovimientoPachakutikPalmira', url: 'https://www.facebook.com/profile.php?id=61578506784259' },
    tiktok: { usuario: '@MovimientoPachakutikPalmira', url: 'https://www.facebook.com/profile.php?id=61578506784259' },
    instagram: { usuario: '', url: '' },
    youtube: { usuario: '', url: '' },
    whatsapp: { usuario: '', url: '' },
  },
  galeria: [
    { src: afiche, titulo: 'Afiche oficial · Junta Parroquial de Palmira', etiqueta: 'Afiches', ancha: true },
    { src: equipo, titulo: 'Equipo de candidatos de Palmira', etiqueta: 'Equipo', ancha: true },
    { src: '', titulo: 'Comunidades de Palmira', etiqueta: 'Parroquia' },
    { src: '', titulo: 'Reunión con dirigentes', etiqueta: 'Campaña' },
    { src: '', titulo: 'Paisaje de la parroquia', etiqueta: 'Parroquia' },
    { src: '', titulo: 'Minga comunitaria', etiqueta: 'Campaña' },
    { src: '', titulo: 'Fiesta de la parroquia', etiqueta: 'Parroquia' },
    { src: '', titulo: 'Familias de Palmira', etiqueta: 'Parroquia' },
  ],

  contacto: { telefono: '', whatsapp: '', correo: '', direccion: 'Parroquia Palmira, cantón Guamote' },
  ubicacion: { nombre: 'Palmira, Guamote', busquedaMapa: 'Palmira, Guamote, Chimborazo, Ecuador' },
  diptico: { paginas: [], descargaPdf: '' },
};
