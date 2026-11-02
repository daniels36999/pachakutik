// ============================================================================
//  DATOS GENERALES DE LA CAMPAÑA  (aquí cambias lo que se repite en las 3 páginas)
//  Cada bloque dice qué parte de la web modifica.
// ============================================================================

export const SITE = {
  // --- Marca / eslogan (header, hero, footer, díptico) ---
  nombreCampana: 'Por un solo Guamote',
  hashtag: 'PorUnSoloGuamote',
  eslogan: 'Un cantón, una sola voz.',          // frase corta bajo el hero
  dominio: 'www.porunsologuamote.com',

  // --- Partido y lista ---
  partido: 'Movimiento de Unidad Plurinacional',
  partidoCorto: 'Pachakutik',
  lista: '18',
  llamado: 'Vota todo',

  // --- Barra superior (la franja de arriba de todo) ---
  barraSuperior: 'Vota todo 18 · Lista de Pachakutik para el cantón Guamote',

  // --- Modo borrador: muestra etiquetas "Por completar" en lo que falta llenar.
  //     Cuando esté todo listo, cámbialo a false y desaparecen. ---
  modoBorrador: true,

  // --- Contacto general (sección Contacto). Deja '' lo que no tengas todavía. ---
  contacto: {
    telefono: '+593 9X XXX XXXX',
    whatsapp: '',               // solo números con código de país, ej. 593991234567
    correo: 'contacto@porunsologuamote.com',
    direccion: 'Cantón Guamote, provincia de Chimborazo, Ecuador',
    horario: 'Lunes a sábado · 08h00 a 18h00',
  },

  // --- Ubicación (botón "Abrir en Google Maps") ---
  ubicacion: {
    nombre: 'Guamote, Chimborazo',
    busquedaMapa: 'Guamote, Chimborazo, Ecuador',
  },
};

// ============================================================================
//  COLORES — se definen en src/styles/global.css (bloque :root, arriba de todo).
//  002787 nombres · e30613 apellidos · f49c24 bloques ("Alcalde") ·
//  arcoíris Pachakutik: d41323, e7870a, ffda0f, 369a37, bfe1ec, 44a0d9, 692577
// ============================================================================

export const ARCOIRIS = ['#d41323', '#e7870a', '#ffda0f', '#369a37', '#bfe1ec', '#44a0d9', '#692577'];
