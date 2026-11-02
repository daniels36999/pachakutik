// ============================================================================
//  MATRIZ · GUAMOTE   →   www.porunsologuamote.com
//  Todo el contenido de la página principal está en este archivo.
// ============================================================================
import juan from '../assets/matriz/juan.webp';
import carmen from '../assets/matriz/carmen.webp';
import jose from '../assets/matriz/jose.webp';
import curisisa from '../assets/matriz/curisisa.webp';
import rosa from '../assets/matriz/rosa.webp';
import julian from '../assets/matriz/julian.webp';
import aficheCebadas from '../assets/afiches/cebadas.webp';
import afichePalmira from '../assets/afiches/palmira.webp';

// ---------------------------------------------------------------- ALCALDEEEEE
export const alcalde = {
  id: 'alcalde',
  tratamiento: 'Ing.',
  nombres: 'Juan',
  apellidos: 'Altamirano',
  nombreCompleto: 'Juan Patricio Altamirano Marcatoma',
  cargo: 'Alcalde',
  ambito: 'Cantón Guamote',
  foto: juan,
  citaCorta: 'Joven indígena profesional, nacido en la comunidad Tipin Tablas Pamba.',
  historia:
    'Mi nombre es Juan Patricio Altamirano Marcatoma. Nací en la comunidad Tipin Tablas Pamba del cantón Guamote, provincia de Chimborazo. Soy un joven indígena profesional.',
  sintesis:
    'Su trayectoria integra experiencia en obra pública, vialidad, fiscalización y administración de proyectos, fortaleciendo sus capacidades en planificación, gestión de infraestructura y administración pública.',
  formacion: [
    { anio: '', titulo: 'Escuela Luis Alberto Castillo', detalle: 'Educación primaria · comunidad Tipin Tablas Pamba' },
    { anio: '', titulo: 'Unidad Educativa Velasco Ibarra', detalle: 'Educación secundaria' },
    { anio: '2016', titulo: 'Ingeniero Civil', detalle: 'Universidad Nacional de Chimborazo (UNACH)' },
  ],
  experiencia: [
    { periodo: '2016 – 2017', cargo: 'Emprendedor', lugar: 'Riobamba', detalle: 'Inició su emprendimiento con servicio de acabados para la construcción.' },
    { periodo: '2018 – 2019', cargo: 'Topógrafo', lugar: 'GAD Municipal de Guamote', detalle: 'Levantamiento de información y fiscalización de obra civil.' },
    { periodo: '2020 – 2023', cargo: 'Técnico responsable de Guamote y Colta', lugar: 'GADPCH', detalle: 'Proyectos de tecnificación y optimización del uso del agua en los sistemas de riego.' },
    { periodo: '2023 – 2024', cargo: 'Director general de Riego', lugar: 'GAD Provincial de Chimborazo', detalle: 'Responsable de 1.200 sistemas de riego en los 10 cantones de la provincia.' },
    { periodo: '2025 – 2026', cargo: 'Técnico de asesoramiento', lugar: 'Comunidades del cantón Guamote', detalle: 'Apoyo en la elaboración de proyectos de riego.' },
  ],
  comunidad: [
    { periodo: '2019 – 2020', cargo: 'Presidente de la comunidad' },
    { periodo: '2023', cargo: 'Secretario de la comunidad' },
    { periodo: '2024', cargo: 'Coordinador de la comunidad' },
  ],
  empresas: [
    { cargo: 'Gerente general', lugar: 'Almarc' },
    { cargo: 'Gerente general', lugar: 'Stronger Pega' },
  ],
  // Redes personales. Si dejas '' se muestran las redes de la campaña.
  redes: { facebook: '', tiktok: '', instagram: '', youtube: '', whatsapp: '' },
};

// ---------------------------------------------------------------- MÉTRICAS
export const metricas = [
  { valor: 1200, etiqueta: 'sistemas de riego', detalle: 'bajo su dirección como Director general de Riego, 2023 – 2024', color: '#44a0d9' },
  { valor: 10, etiqueta: 'cantones atendidos', detalle: 'en toda la provincia de Chimborazo', color: '#369a37' },
  { valor: 8, etiqueta: 'programas de gobierno', detalle: 'dentro de las competencias del GAD Municipal (art. 55 COOTAD)', color: '#e7870a' },
  { valor: 10, etiqueta: 'años de servicio', detalle: 'técnico y comunitario, de 2016 a 2026', color: '#d41323' },
];

// ---------------------------------------------------------------- PLAN DEL ALCALDE
export const planAlcalde = {
  pestana: 'Alcalde',
  titulo: 'Plan de trabajo del alcalde',
  base: 'Propuestas establecidas de acuerdo con las competencias del GAD Municipal, conforme al artículo 55 del COOTAD.',
  programas: [
    { codigo: 'P1', titulo: 'Agua potable y saneamiento', icono: 'agua', objetivo: 'Ampliar y mejorar la cobertura de agua segura y saneamiento en el cantón.', acciones: ['Construcción y ampliación de sistemas de agua entubada y potable en comunidades rurales priorizadas.'] },
    { codigo: 'P2', titulo: 'Vialidad cantonal (urbana y rural)', icono: 'via', objetivo: 'Mejorar la conectividad vial del cantón para la producción y la movilidad de la población.', acciones: ['Estudio y priorización de la red vial rural, principal y secundaria.'] },
    { codigo: 'P3', titulo: 'Ordenamiento territorial y catastro', icono: 'mapa', acciones: ['Actualización participativa del PDyOT cantonal.', 'Actualización del catastro urbano y rural (avalúos y catastros).'] },
    { codigo: 'P4', titulo: 'Desarrollo económico local', icono: 'economia', objetivo: 'Dinamizar la economía cantonal mediante comercio, agroindustria y turismo.', acciones: ['Impulsar una marca local y generar valor agregado a los productos del cantón.'] },
    { codigo: 'P5', titulo: 'Gestión ambiental y residuos sólidos', icono: 'ambiente', objetivo: 'Proteger el ambiente y mejorar la gestión adecuada de residuos sólidos del cantón, promoviendo prácticas sostenibles.', acciones: ['Gestionar la dotación de vehículos recolectores para la recolección de residuos sólidos en las parroquias de Cebadas y Palmira.'] },
    { codigo: 'P6', titulo: 'Gestión de riesgos', icono: 'riesgo', objetivo: 'Reducir la vulnerabilidad del cantón ante amenazas naturales.', acciones: ['Fortalecimiento del sistema de alerta temprana y del cuerpo de bomberos.', 'Capacitación comunitaria en gestión de riesgos.'] },
    { codigo: 'P7', titulo: 'Gobernanza digital y gobierno abierto', icono: 'digital', objetivo: 'Modernizar la gestión municipal y cerrar la brecha digital del cantón mediante tecnologías de la información y la comunicación.', acciones: ['Implementación de un portal web municipal con trámites y turnos en línea.'] },
    { codigo: 'P8', titulo: 'Participación ciudadana e interculturalidad', icono: 'gente', acciones: ['Asambleas cantonales y presupuesto participativo anual.', 'Fortalecimiento de organizaciones comunitarias, indígenas y de mujeres.'] },
  ],
};

// ---------------------------------------------------------------- PLAN DE CONCEJALES
export const planConcejales = {
  pestana: 'Concejales',
  titulo: 'Plan de trabajo de los concejales',
  base: 'Propuestas establecidas de acuerdo con las competencias del GAD Municipal, conforme al artículo 58 del COOTAD.',
  programas: [
    { codigo: 'P1', titulo: 'Normativa de uso y ocupación del suelo urbano', icono: 'mapa', objetivo: 'Ordenar el crecimiento de la ciudad mediante normativa clara y aplicable.', acciones: ['Diagnóstico técnico del crecimiento urbano actual y de las construcciones sin normativa.', 'Elaboración y actualización de la ordenanza de uso y ocupación del suelo urbano.'] },
    { codigo: 'P2', titulo: 'Fiscalización de obra pública urbana y otros', icono: 'fiscal', acciones: ['Seguimiento trimestral a cronogramas y presupuestos de obras urbanas.', 'Visitas de verificación técnica a obras en ejecución.', 'Informes públicos de fiscalización presentados ante el Concejo y la ciudadanía.'] },
    { codigo: 'P3', titulo: 'Modernización y ordenamiento de mercado y feria', icono: 'mercado', acciones: ['Propuesta de reordenamiento físico del mercado municipal y de los puestos de la feria.', 'Ordenanza de uso de espacios de comercio y control del tránsito en días de feria.', 'Gestión de mejoras en servicios básicos del mercado: agua, energía, baterías sanitarias y seguridad.'] },
    { codigo: 'P4', titulo: 'Gestión integral de residuos sólidos urbanos', icono: 'ambiente', acciones: ['Ordenanzas de gestión integral de residuos sólidos urbanos.', 'Fiscalizar el cumplimiento de las rutas y frecuencias de recolección, especialmente en las parroquias rurales y comunidades.', 'Programas permanentes de separación en origen, reciclaje y educación ambiental.', 'Promover el aprovechamiento y la valorización de los residuos.'] },
    { codigo: 'P5', titulo: 'Movilidad y espacio público', icono: 'via', acciones: ['Ordenanza de tránsito, circulación y estacionamiento en la cabecera cantonal, incluido el régimen especial de feria.', 'Gestión de mejoramiento de parques, aceras y espacios recreativos y deportivos.', 'Señalización vial urbana, horizontal y vertical.'] },
    { codigo: 'P6', titulo: 'Seguridad ciudadana en el centro urbano', icono: 'seguridad', acciones: ['Mesas de coordinación periódica con la Policía Nacional y comerciantes organizados.', 'Gestión de mejoras en iluminación y cámaras de seguridad en puntos críticos del centro urbano.', 'Campañas de prevención dirigidas a comerciantes y visitantes en días de feria.'] },
    { codigo: 'P7', titulo: 'Promoción cultural y patrimonial', icono: 'cultura', acciones: ['Apoyo normativo y logístico a fiestas tradicionales (Semana Santa, cantonización) y a la feria como patrimonio vivo.', 'Gestión conjunta con el GAD municipal para la promoción del patrimonio ferroviario Riobamba – Alausí.'] },
  ],
};

// ---------------------------------------------------------------- CONCEJALES
const persona = (p) => ({ tratamiento: '', ...p });

export const concejalesUrbanos = [
  persona({
    id: 'carmen', tratamiento: 'Ing.', nombres: 'Carmen Amelia', apellidos: 'Padilla Delgado', cargo: 'Concejala urbana', ambito: 'Cantón Guamote', foto: carmen,
    resumen: 'Oriunda de Sanancahuan Alto, parroquia Matriz del cantón Guamote.',
    formacion: [
      { titulo: 'Escuela Carmela López de Vallejo', detalle: 'Primaria · Sanancahuan Alto' },
      { titulo: 'Unidad Educativa Intercultural Bilingüe Achullay', detalle: 'Secundaria' },
      { anio: '2025', titulo: 'Tecnologías de la Información', detalle: 'Universidad Nacional de Chimborazo (UNACH)' },
    ],
    experiencia: [
      { periodo: '2017', cargo: 'Asistente en Compras Públicas', lugar: 'GAD Municipal de Guamote' },
      { periodo: '2018', cargo: 'Sumak Warmi', lugar: 'Cantón Guamote' },
      { periodo: '2019', cargo: 'Asistente administrativa', lugar: 'GAD Municipal de Guamote' },
      { periodo: '2025', cargo: 'Técnica en planimetrías, subdivisiones y gestión de trámites', lugar: '' },
    ],
    suplente: { nombre: 'Tomás Daquilema Laso', tratamiento: 'Sr.' },
  }),
  persona({
    id: 'jose', tratamiento: 'Sr.', nombres: 'José Gregorio', apellidos: 'Guamán Ayol', cargo: 'Concejal urbano', ambito: 'Cantón Guamote', foto: jose,
    resumen: 'Líder indígena oriundo de la comunidad Cumaná El Molino, parroquia Matriz del cantón Guamote.',
    formacion: [{ titulo: 'Escuela Samora Chinchipe', detalle: 'Primaria · Cumaná El Molino' }],
    experiencia: [
      { periodo: 'Trayectoria', cargo: 'Agricultor y productor pecuario', lugar: 'Cumaná El Molino', detalle: 'Amplia experiencia en campo, con crianza de cuyes y actividades agropecuarias propias de su comunidad.' },
      { periodo: '2020 – 2024', cargo: 'Dirigente de juntas de riego', lugar: '', detalle: 'Lideró la gestión comunitaria del agua y la organización de usuarios para el riego de sus tierras.' },
    ],
    suplente: { nombre: 'Norma Gladys Curillo Fárez', tratamiento: 'Ing.' },
  }),
  persona({
    id: 'curisisa', tratamiento: 'Ing.', nombres: 'Curi Sisa', apellidos: 'Apugllón Zuña', cargo: 'Concejala urbana', ambito: 'Cantón Guamote', foto: curisisa,
    resumen: 'Joven profesional indígena, oriunda de la comunidad Chanchán Tío Cajas, parroquia Matriz del cantón Guamote.',
    formacion: [
      { titulo: 'Escuela Joaquín Chiriboga', detalle: 'Primaria' },
      { titulo: 'Unidad Educativa Velasco Ibarra', detalle: 'Secundaria' },
      { anio: '2025', titulo: 'Ingeniera Ambiental', detalle: 'Universidad Central del Ecuador' },
    ],
    experiencia: [
      { periodo: '2023', cargo: 'Técnica en fiscalización y cambio climático', lugar: 'Ministerio de Ambiente y Energía' },
      { periodo: '2024', cargo: 'Apoyo en gestión ambiental', lugar: 'GAD Municipal de Guamote' },
      { periodo: '2025', cargo: 'Técnica en auditorías e informes de gestión ambiental', lugar: 'Consultoría Cyambiente Cía. Ltda.' },
      { periodo: '2025', cargo: 'Investigación científica', lugar: '', detalle: 'Evaluación fisicoquímica y microbiológica de agua y suelo de la Antártida.' },
    ],
    suplente: { nombre: 'Daniel Patricio Yutibug Apugllón', tratamiento: 'Ing.' },
  }),
];

export const concejalesRurales = [
  persona({
    id: 'rosa', tratamiento: 'Ing.', nombres: 'Rosa Aurora', apellidos: 'Tene Taday', cargo: 'Concejala rural', ambito: 'Cantón Guamote', foto: rosa,
    resumen: 'Originaria de la comunidad Tranca Shulpuj, parroquia Cebadas, cantón Guamote.',
    formacion: [
      { titulo: 'Escuela José Tena Lema', detalle: 'Primaria' },
      { titulo: 'Colegio Doctor Eugenio Espejo', detalle: 'Secundaria · Riobamba' },
      { titulo: 'Ingeniera en Auditoría y Contabilidad CPA', detalle: 'Universidad San Gregorio de Portoviejo' },
      { titulo: 'Magíster en Finanzas, mención Dirección Financiera', detalle: 'Universidad San Gregorio de Portoviejo' },
    ],
    experiencia: [
      { periodo: '2021 – 2022', cargo: 'Secretaria de Tesorería', lugar: 'GAD Municipal de Guamote' },
      { periodo: '2022 – 2023', cargo: 'Contadora Municipal 2', lugar: 'GAD Municipal de Guamote' },
      { periodo: 'Actualidad', cargo: 'Contadora independiente', lugar: 'Libre ejercicio profesional', detalle: 'Servicios de contabilidad y asesoría financiera.' },
    ],
    suplente: { nombre: 'Patricio Cislema Rivera', tratamiento: 'Sr.' },
  }),
  persona({
    id: 'julian', tratamiento: 'Sr.', nombres: 'Julián', apellidos: 'Roldán Tixi', cargo: 'Concejal rural', ambito: 'Cantón Guamote', foto: julian,
    resumen: 'Líder indígena oriundo de Palmira.',
    formacion: [{ titulo: 'Unidad Educativa 27 de Febrero', detalle: 'Primaria · Palmira' }],
    experiencia: [
      { periodo: '2019 – 2021', cargo: 'Toma de lecturas de consumo', lugar: 'Empresa Eléctrica Riobamba', detalle: 'Labores de lectura en las comunidades de la zona.' },
      { periodo: 'Trayectoria', cargo: 'Actividades agrícolas', lugar: 'Palmira', detalle: 'Experiencia en campo y producción agropecuaria.' },
    ],
    suplente: { nombre: 'Vilma Selena Urquiza Naula', tratamiento: 'Srta.' },
  }),
];

// ---------------------------------------------------------------- TERRITORIO
export default {
  id: 'guamote',
  nombre: 'Guamote',
  tipo: 'Cantón',
  ruta: '/',
  esMatriz: true,
  heroTitulo: 'Guamote',
  heroSubtitulo: 'Cantón Guamote',
  lider: alcalde,
  metricas,
  trayectoria: { titulo: 'La trayectoria de Juan Altamirano', persona: alcalde },
  planes: [planAlcalde, planConcejales],
  equipos: [
    { titulo: 'Concejales urbanos', descripcion: 'Quienes fiscalizan y legislan para la cabecera cantonal.', personas: concejalesUrbanos },
    { titulo: 'Concejales rurales', descripcion: 'La voz de las parroquias y comunidades en el Concejo.', personas: concejalesRurales },
  ],
  redes: {
    facebook: { usuario: '@MovimientoPachakutikGuamote', url: 'https://www.facebook.com/profile.php?id=100079741231636' },   // CAMBIAR por el enlace real
    tiktok: { usuario: '@pachakutikguamote', url: 'https://www.tiktok.com/@pachakutikguamote' },        // CAMBIAR
    instagram: { usuario: '', url: '' },
    youtube: { usuario: '', url: '' },
    whatsapp: { usuario: '', url: '' },
  },
  galeria: [
    { src: aficheCebadas, titulo: 'Afiche oficial · Junta Parroquial de Cebadas', etiqueta: 'Afiches', ancha: true },
    { src: afichePalmira, titulo: 'Afiche oficial · Junta Parroquial de Palmira', etiqueta: 'Afiches', ancha: true },
    { src: '', titulo: 'Recorrido por las comunidades', etiqueta: 'Campaña' },
    { src: '', titulo: 'Feria de Guamote', etiqueta: 'Cantón' },
    { src: '', titulo: 'Asamblea con dirigentes', etiqueta: 'Campaña' },
    { src: '', titulo: 'Paisajes de Guamote', etiqueta: 'Cantón' },
    { src: '', titulo: 'Equipo de candidatos', etiqueta: 'Equipo' },
    { src: '', titulo: 'Tren y estación', etiqueta: 'Cantón' },
    { src: '', titulo: 'Minga comunitaria', etiqueta: 'Campaña' },
    { src: '', titulo: 'Familias de Guamote', etiqueta: 'Cantón' },
  ],
  // Díptico digital: si tienes las imágenes del díptico real (JPG/PNG), súbelas a
  // src/assets/ y escribe aquí sus rutas en "paginas". Si lo dejas vacío, la web
  // arma un díptico automático con los datos de arriba.
  diptico: { paginas: [], descargaPdf: '' },
};
