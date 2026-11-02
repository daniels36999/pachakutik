# Por un solo Guamote

Sitio web estático de campaña · **Lista 18 · Pachakutik** · `#PorUnSoloGuamote`

Hecho con **React + Vite**, sin servidor ni base de datos. Se publica gratis en **GitHub Pages** con HTTPS.

| Página | Dirección | Contenido |
|---|---|---|
| Matriz (Guamote) | `https://www.porunsologuamote.com/` | Alcalde, concejales, plan de trabajo, díptico |
| Cebadas | `https://www.porunsologuamote.com/cebadas/` | Junta Parroquial de Cebadas |
| Palmira | `https://www.porunsologuamote.com/palmira/` | Junta Parroquial de Palmira |

Cada página tiene: portada, métricas, trayectoria, plan de trabajo, tarjetas del equipo (al tocar una se abre su trayectoria y redes), díptico digital, galería, redes sociales, contacto y ubicación.

---

## 1. Correrlo en tu computadora

Necesitas [Node.js 20 o superior](https://nodejs.org).

```bash
npm install        # solo la primera vez
npm run dev        # abre http://localhost:5173
```

- Matriz: `http://localhost:5173/`
- Cebadas: `http://localhost:5173/cebadas/`
- Palmira: `http://localhost:5173/palmira/`

Para generar la versión final:

```bash
npm run build      # crea la carpeta dist/
npm run preview    # prueba esa versión final
```

`npm run build:preview` genera un solo archivo HTML (`dist-preview/preview.html`) para enseñarlo por WhatsApp o correo; ahí las tres páginas se cambian con `#guamote`, `#cebadas` y `#palmira`.

---

## 2. Dónde cambiar cada cosa

Todo el contenido está en `src/data/`. No hace falta tocar los componentes.

| Quiero cambiar… | Archivo |
|---|---|
| Eslogan, hashtag, lista, barra superior, teléfono, correo, WhatsApp, dirección, horario, mapa (datos que se repiten en las 3 páginas) | `src/data/site.js` |
| Alcalde, concejales, métricas, plan de trabajo, galería y redes de **Guamote** | `src/data/guamote.js` |
| Vocales, métricas, plan, galería, contacto y redes de **Cebadas** | `src/data/cebadas.js` |
| Vocales, métricas, plan, galería, contacto y redes de **Palmira** | `src/data/palmira.js` |
| Colores y tipografías | `src/styles/global.css` (bloque `:root`, arriba de todo) |
| Fotos de personas | `src/assets/<territorio>/` (formato `.webp`, ver sección 4) |

### Modo borrador
En `src/data/site.js`, `modoBorrador: true` muestra las etiquetas **"Por completar"** en lo que falta. Cuando todo esté lleno, ponlo en `false` y desaparecen.

### Llenar a un candidato (Cebadas y Palmira)
Cada vocal se define así. Cuando llenes `resumen`, `formacion` o `experiencia`, quita `pendiente: true` (o ponlo en `false`):

```js
vocal({
  id: 'hilda', nombres: 'Hilda', apellidos: 'Traves', cargo: 'Primera vocal', foto: hilda,
  pendiente: false,
  resumen: 'Oriunda de la comunidad X, parroquia Cebadas.',
  formacion: [
    { anio: '2018', titulo: 'Bachiller en ...', detalle: 'Unidad Educativa ...' },
  ],
  experiencia: [
    { periodo: '2020 – 2023', cargo: 'Presidenta de la comunidad', lugar: 'Comunidad X', detalle: 'Qué hizo, en una frase.' },
  ],
  redes: { facebook: 'https://facebook.com/...', tiktok: '', instagram: '', youtube: '', whatsapp: '' },
})
```

Si un candidato no tiene redes propias, la ventana muestra las de la campaña de su parroquia.

### Redes sociales y contacto
- Redes de la campaña por parroquia: bloque `redes` de su archivo (`usuario` y `url`). Lo que dejes vacío (`''`) se muestra como "Enlace por agregar" o se oculta si el modo borrador está apagado.
- WhatsApp: solo números con código de país, sin `+` ni espacios. Ejemplo: `593991234567`.
- Teléfono, correo, dirección y horario de una parroquia: bloque `contacto` de su archivo. Si lo dejas vacío, hereda el de `site.js`.

### Fotos
1. Prepara la foto (ver recomendaciones abajo) y guárdala en `src/assets/cebadas/` o `src/assets/palmira/`.
2. Importa la imagen arriba del archivo de datos: `import foto1 from '../assets/cebadas/foto1.webp';`
3. Agrégala a `galeria`: `{ src: foto1, titulo: 'Minga en la comunidad', etiqueta: 'Campaña' }`. Las etiquetas crean los filtros solas.

### Díptico digital
Si no hay imágenes, la web arma uno automático con los datos. Si tienes el díptico real en JPG o PNG, súbelo a `src/assets/` y escribe las rutas en `diptico.paginas`. El PDF para descargar va en `diptico.descargaPdf` (puede ir en `public/`).

---

## 3. Publicar en GitHub Pages con tu dominio

El archivo `.github/workflows/` ya hace todo: cada vez que subes cambios a la rama `main`, compila y publica.

1. Crea un repositorio en GitHub y sube el proyecto:
   ```bash
   git init
   git add .
   git commit -m "Primera versión"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/porunsologuamote.git
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. En el mismo lugar, **Custom domain**: `www.porunsologuamote.com`, guarda y activa **Enforce HTTPS** (aparece cuando el DNS ya propagó, puede tardar hasta 24 horas). El archivo `public/CNAME` ya trae el dominio.
4. En el proveedor de tu dominio, crea estos registros DNS:

   | Tipo | Nombre | Valor |
   |---|---|---|
   | `CNAME` | `www` | `TU-USUARIO.github.io` |
   | `A` | `@` | `185.199.108.153` |
   | `A` | `@` | `185.199.109.153` |
   | `A` | `@` | `185.199.110.153` |
   | `A` | `@` | `185.199.111.153` |

   Los registros `A` hacen que `porunsologuamote.com` (sin www) redirija a la versión con www. Verifica estas IP en la [documentación oficial de GitHub Pages](https://docs.github.com/pages) antes de configurarlas, por si cambian.

Las rutas `/cebadas/` y `/palmira/` funcionan solas porque cada una es una página HTML real (`cebadas/index.html`, `palmira/index.html`).

---

## 4. Recomendaciones para las fotos

| Tipo | Medida sugerida | Notas |
|---|---|---|
| Retrato de candidato | 600 × 700 px, vertical | Medio cuerpo, con la banda del arcoíris visible |
| Foto de equipo (portada de la parroquia) | 1600 × 700 px, horizontal | Todo el equipo en una sola imagen |
| Galería | 1400 px de ancho | Horizontal se ve mejor; evita fotos con texto pequeño |

- Formato **`.webp`** (pesa mucho menos). Puedes convertir en [squoosh.app](https://squoosh.app).
- Cada foto debe pesar **menos de 300 KB** para que la página cargue rápido en celular.
- Usa solo fotos con autorización de las personas que aparecen.

---

## 5. Formularios para las parroquias

La carpeta `formularios/` tiene un Word por parroquia (`Formulario_Cebadas.docx`, `Formulario_Palmira.docx`). Se los envías a cada junta, ellos los llenan y te los devuelven con las fotos. Con esos datos completas `cebadas.js` o `palmira.js`. Los formularios ya llenados van en `formularios/recibidos/`, que está ignorado por Git para no subir datos personales.

---

## 6. Estructura del proyecto

```
├── index.html            → Guamote (matriz)
├── cebadas/index.html    → Cebadas
├── palmira/index.html    → Palmira
├── public/               → CNAME, favicon
├── formularios/          → Word para enviar a las parroquias
├── src/
│   ├── data/             → TODO el contenido (site.js, guamote.js, cebadas.js, palmira.js)
│   ├── components/       → Hero, Métricas, Trayectoria, Plan, Equipo, Díptico, Galería, Contacto
│   ├── styles/global.css → colores, tipografías y estilos
│   └── assets/           → fotos y afiches
└── .github/workflows/    → publicación automática en GitHub Pages
```

## 7. Línea gráfica

| Uso | Color |
|---|---|
| Nombres | `#002787` |
| Apellidos | `#e30613` |
| Bloques (Alcalde, cargos) | `#f49c24` |
| Arcoíris Pachakutik | `#d41323` `#e7870a` `#ffda0f` `#369a37` `#bfe1ec` `#44a0d9` `#692577` |

Tipografías: **Montserrat** (títulos y nombres) y **Lora** (textos largos y citas), cargadas desde Google Fonts.

## 8. Accesibilidad y celulares

Diseñado primero para celular. Las ventanas se cierran con `Esc` o tocando fuera, se navegan con flechas del teclado, respetan el modo oscuro y la opción "reducir movimiento" del sistema.
