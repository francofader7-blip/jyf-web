/**
 * J & F Panadería Artesanal — Manifest de datos editables
 * =========================================================
 * Editá este archivo con el Bloc de notas para actualizar
 * nombre, dirección, teléfono, productos y horarios.
 *
 * IMPORTANTE: después de guardar, refrescá el navegador
 * con Ctrl + F5 para ver los cambios.
 */

window.__JYF__ = {

  /* ── MARCA ─────────────────────────────────────────── */
  brand: {
    nombre:     'J & F',
    eslogan:    'El pan de toda la vida.',
    direccion:  'Calle Las Heras 742, Mendoza Capital',
    referencia: 'cerca de Plaza Independencia',
    telefono:   '+54 9 261 344-2368',
    whatsapp:   '5492613442368',          // sin + ni espacios ni guiones
    instagram:  '@Caseritos.mza',
    igUrl:      'https://www.instagram.com/Caseritos.mza',
    apertura:   '1998',
    tagline:    'EST. 1998 · MZA',
  },

  /* ── HORARIOS ───────────────────────────────────────── */
  horario: {
    semana:  'Lunes a Sábado · 07:00 → 21:00',
    domingo: 'Domingos · 08:00 → 13:00',
  },

  /* ── PRODUCTOS (10 productos) ───────────────────────── */
  productos: [
    {
      id:          'pan-casero',
      nombre:      'Pan Casero',
      serie:       'Clásico',
      tipo:        'hogaza',
      subtitulo:   'El de toda la vida',
      ingredientes: ['Harina', 'Masa madre', 'Sal de mar'],
      descripcion: 'Corteza crocante y migajón tibio. El pan que abrió este local en el noventa y ocho y nunca cambió de receta.',
      colorFill:   '#C68642',
      colorAccent: '#C1502E',
    },
    {
      id:          'factura-manteca',
      nombre:      'Factura de Manteca',
      serie:       'Clásico',
      tipo:        'medialuna',
      subtitulo:   'La favorita de la vidriera',
      ingredientes: ['Manteca', 'Harina', 'Almíbar'],
      descripcion: 'Hojaldrada, dulce justa, recién salida del horno cada mañana. La que más se pide para el mate.',
      colorFill:   '#F2C879',
      colorAccent: '#E8A33D',
    },
    {
      id:          'torta-cumpleanos',
      nombre:      'Torta de Cumpleaños',
      serie:       'Clásico',
      tipo:        'torta_redonda',
      subtitulo:   'Para festejar en casa',
      ingredientes: ['Bizcochuelo', 'Dulce de leche', 'Crema'],
      descripcion: 'La de siempre, con dulce de leche bien generoso. Se encarga con un día de aviso.',
      colorFill:   '#F7E7C6',
      colorAccent: '#C1502E',
    },
    {
      id:          'pan-dulce',
      nombre:      'Pan Dulce',
      serie:       'Clásico',
      tipo:        'pan_dulce',
      subtitulo:   'El de las fiestas',
      ingredientes: ['Frutas confitadas', 'Pasas', 'Nueces'],
      descripcion: 'Receta de familia, esponjoso y con la fruta justa. Se vende todo diciembre y se agota rápido.',
      colorFill:   '#B8835C',
      colorAccent: '#E8A33D',
    },
    {
      id:          'chipa',
      nombre:      'Chipá',
      serie:       'Temporada',
      tipo:        'chipa',
      subtitulo:   'El antojo correntino',
      ingredientes: ['Almidón de mandioca', 'Queso', 'Huevo'],
      descripcion: 'Crocante afuera, elástico adentro. Se hornea por tandas chicas para que llegue siempre caliente.',
      colorFill:   '#EAC15A',
      colorAccent: '#5B6B45',
    },
    {
      id:          'empanada-carne',
      nombre:      'Empanada de Carne',
      serie:       'Temporada',
      tipo:        'empanada',
      subtitulo:   'Para el mediodía',
      ingredientes: ['Carne cortada a cuchillo', 'Cebolla', 'Huevo'],
      descripcion: 'Repulgo a mano, jugo justo, horno fuerte. Se piden por docena para llevar a la oficina.',
      colorFill:   '#D99A4E',
      colorAccent: '#C1502E',
    },
    {
      id:          'rogel',
      nombre:      'Rogel',
      serie:       'Temporada',
      tipo:        'rogel_porcion',
      subtitulo:   'El postre de domingo',
      ingredientes: ['Masa hojaldrada', 'Dulce de leche', 'Merengue'],
      descripcion: 'Capas finitas y dulce de leche entre cada una. Se vende por porción o entero para la sobremesa.',
      colorFill:   '#E8C98A',
      colorAccent: '#E8A33D',
    },
    {
      id:          'pan-salvado',
      nombre:      'Pan de Salvado',
      serie:       'Temporada',
      tipo:        'pan_salvado',
      subtitulo:   'El de todos los días',
      ingredientes: ['Harina integral', 'Salvado', 'Semillas'],
      descripcion: 'Para la dieta de toda la semana, sin perder sabor. El que más piden los habitués del barrio.',
      colorFill:   '#9C6F44',
      colorAccent: '#5B6B45',
    },
    {
      id:          'vigilante',
      nombre:      'Vigilante',
      serie:       'Temporada',
      tipo:        'vigilante_porcion',
      subtitulo:   'Membrillo y queso',
      ingredientes: ['Masa quebrada', 'Dulce de membrillo', 'Queso'],
      descripcion: 'El clásico de panadería argentina. Dulce y salado en el mismo bocado, tibio recién horneado.',
      colorFill:   '#B5482E',
      colorAccent: '#C1502E',
    },
    {
      id:          'bizcochos-grasa',
      nombre:      'Bizcochos de Grasa',
      serie:       'Temporada',
      tipo:        'bizcocho',
      subtitulo:   'Los de la abuela',
      ingredientes: ['Grasa vacuna', 'Harina', 'Sal gruesa'],
      descripcion: 'Crocantes, hojaldrados y con el toque de sal justo. Se venden por bolsa, no duran ni un día en casa.',
      colorFill:   '#DDB877',
      colorAccent: '#E8A33D',
    },
  ],

  /* ── PRODUCCIÓN SEMANAL ─────────────────────────────── */
  produccion: [
    {
      dias:       'Lunes a miércoles',
      producto:   'Pan y facturas del día',
      detalle:    'Lo de siempre, fresco cada mañana.',
      icono:      'horno',
      acento:     '#C1502E',
    },
    {
      dias:       'Jueves y viernes',
      producto:   'Tortas por encargo',
      detalle:    'Avisá con un día y la retirás lista.',
      icono:      'torta',
      acento:     '#E8A33D',
    },
    {
      dias:       'Sábado',
      producto:   'Empanadas por docena',
      detalle:    'Para la mesa del fin de semana.',
      icono:      'empanada',
      acento:     '#5B6B45',
    },
    {
      dias:       'Domingo',
      producto:   'Pan dulce y facturas especiales',
      detalle:    'Horario reducido, producción limitada.',
      icono:      'trigo',
      acento:     '#C1502E',
    },
  ],

  /* ── GALERÍA (ids de assets/img/) ──────────────────── */
  gallery: [
    { lane: 1, file: 'gallery-01.jpg', alt: 'Panes artesanales sobre mesada de madera' },
    { lane: 1, file: 'gallery-04.jpg', alt: 'Facturas y medialunas en vidriera' },
    { lane: 1, file: 'gallery-07.jpg', alt: 'Harina espolvoreada en mesada oscura' },
    { lane: 1, file: 'gallery-12.jpg', alt: 'Corteza de pan artesanal de cerca' },
    { lane: 1, file: 'gallery-13.jpg', alt: 'Medialunas de manteca apiladas' },
    { lane: 2, file: 'gallery-02.jpg', alt: 'Manos de panadero amasando' },
    { lane: 2, file: 'gallery-05.jpg', alt: 'Granos de trigo macro' },
    { lane: 2, file: 'gallery-08.jpg', alt: 'Pan fresco enfriándose en rejilla' },
    { lane: 2, file: 'gallery-14.jpg', alt: 'Panadero con delantal frente al horno' },
    { lane: 2, file: 'gallery-15.jpg', alt: 'Masa madre fermentando' },
    { lane: 3, file: 'gallery-03.jpg', alt: 'Horno a leña con llamas' },
    { lane: 3, file: 'gallery-06.jpg', alt: 'Vidriera de panadería' },
    { lane: 3, file: 'gallery-09.jpg', alt: 'Torta de cumpleaños con velas' },
    { lane: 3, file: 'gallery-10.jpg', alt: 'Masa levando en bol' },
    { lane: 3, file: 'gallery-11.jpg', alt: 'Empanadas en bandeja de horno' },
    { lane: 3, file: 'gallery-16.jpg', alt: 'Interior de panadería con vidriera' },
  ],
};
