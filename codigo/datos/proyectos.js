/**
 * proyectos.js
 * -----------------------------------------------------------------------
 * Esta es la ÚNICA fuente de datos de los proyectos del portafolio.
 * No hay backend ni base de datos: toda la información sale de este
 * archivo. Para agregar, editar o quitar un proyecto, solo modifica
 * el array 'proyectos' de aquí abajo — el resto del sitio se actualiza
 * automáticamente (tarjetas, filtros y contador de resultados).
 *
 * Estructura de cada proyecto:
 * @typedef {Object} Proyecto
 * @property {string} id              - Identificador único (ej: 'p1', 'p2'...)
 * @property {string} titulo          - Nombre del proyecto
 * @property {string} descripcion     - Descripción corta (2-4 líneas)
 * @property {string[]} tecnologias   - Lista de tecnologías usadas (genera los filtros automáticamente)
 * @property {'academico'|'cliente'|'personal'} tipo - Categoría del proyecto
 * @property {string} urlRepositorio  - Link al repo de GitHub (deja '' si aún no es público)
 * @property {string} urlDemo         - Link a una demo en vivo (deja '' si no aplica)
 * @property {{ agregadas: number, eliminadas: number }} estadisticas
 *           Números decorativos estilo "git diff" (+líneas agregadas / -líneas eliminadas)
 *           que solo se muestran como un detalle visual del tamaño del proyecto.
 * -----------------------------------------------------------------------
 */
export const proyectos = [
  {
    id: 'p1',
    titulo: 'Sistema Web para Gestión de Órdenes',
    descripcion:
      'Aplicación web bajo arquitectura Modelo-Vista-Controlador (MVC), con módulos para gestión de órdenes y registros, aplicando conceptos de análisis y diseño de sistemas. Integración con SQL Server para almacenamiento y consulta de información, y participación en el diseño de la lógica de negocio y estructura funcional del sistema.',
    tecnologias: ['ASP.NET MVC', 'C#', 'SQL Server'],
    tipo: 'academico',
    urlRepositorio: '',
    urlDemo: '',
    estadisticas: { agregadas: 980, eliminadas: 120 }
  },
  {
    id: 'p2',
    titulo: 'Aplicación E-commerce para Tienda de Ropa',
    descripcion:
      'Aplicación orientada a la gestión de ventas y operaciones comerciales, con desarrollo de componentes frontend y backend. Modelado y gestión de información mediante PostgreSQL, integración de servicios vía Web API, y configuración de base de datos en entorno virtualizado con esquema de conexión remota entre distintas terminales.',
    tecnologias: ['ASP.NET Core', 'PostgreSQL', 'Web API'],
    tipo: 'academico',
    urlRepositorio: '',
    urlDemo: '',
    estadisticas: { agregadas: 1150, eliminadas: 200 }
  },
  {
    id: 'p3',
    titulo: 'Implementación de Sistema de Telefonía IP (VoIP)',
    descripcion:
      'Configuración de un entorno de telefonía IP en máquinas virtuales. Implementación de servidor de llamadas y gestión de parámetros mediante Webmin, integración de clientes para simulación de llamadas entre entornos virtualizados, y aplicación práctica de conceptos de infraestructura, servicios y comunicación en red.',
    tecnologias: ['VoIP', 'Webmin', 'Máquinas Virtuales'],
    tipo: 'academico',
    urlRepositorio: '',
    urlDemo: '',
    estadisticas: { agregadas: 540, eliminadas: 60 }
  },
  {
    id: 'p4',
    titulo: 'NexusStore — Sistema de Gestión para Pequeños Comercios',
    descripcion:
      'Aplicación web para gestión de inventario y ventas de pequeños comercios, con módulos de inventario, ventas, dashboard y reportes. Backend en Laravel bajo arquitectura de controladores, servicios y modelos, integrado con el frontend mediante API. Implementación de autenticación, control de acceso y aislamiento de información entre comercios, usando Git y Docker durante el desarrollo.',
    tecnologias: ['Laravel', 'Vue.js', 'MySQL', 'Git', 'Docker'],
    tipo: 'personal',
    urlRepositorio: '',
    urlDemo: '',
    estadisticas: { agregadas: 1780, eliminadas: 310 }
  },
  {
    id: 'p5',
    titulo: 'BovWeight CR — Sistema de Estimación de Peso de Bovinos',
    descripcion:
      'Sistema para estimar el peso de bovinos a partir de imágenes, con backend en Laravel integrado al frontend en Vue.js mediante API. Incorpora un módulo en Python para el procesamiento/estimación con IA y una app en Android Studio para captura en campo. Uso de Docker y Git durante el desarrollo y mantenimiento del proyecto.',
    tecnologias: ['Laravel', 'Vue.js', 'MySQL', 'Docker', 'Python', 'Android Studio'],
    tipo: 'academico',
    urlRepositorio: '',
    urlDemo: '',
    estadisticas: { agregadas: 679, eliminadas: 280 }
  },
  {
    id: 'p6',
    titulo: 'Guia Naturalista de Costa Rica',
    descripcion:
      'Aplicación web interactiva que permite explorar destinos turísticos de Costa Rica a través de imágenes, audio, video y datos estructurados. Desarrollada íntegramente con tecnologías nativas del navegador',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript'],
    tipo: 'academico',
    urlRepositorio: '',
    urlDemo: 'https://manueleguzg.github.io/Gu-a-Tur-stica-Multimedia-de-Costa-Rica/',
    estadisticas: { agregadas: 1620, eliminadas: 280 }
  },
  {
    id: 'p7',
    titulo: 'Norte Songs — Aplicación Web de Música y Letras',
    descripcion:
      'Aplicación web multimedia desarrollada con **Vue 3** para la gestión y presentación del repertorio musical de la Iglesia del Norte.',
    tecnologias: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript'],
    tipo: 'personal',
    urlRepositorio: '',
    urlDemo: 'https://manueleguzg.github.io/Gu-a-Tur-stica-Multimedia-de-Costa-Rica/',
    estadisticas: { agregadas: 845, eliminadas: 310 }
  }
]

/**
 * Categorías disponibles para el filtro de tipo de proyecto.
 * 'value' debe coincidir exactamente con el campo 'tipo' de cada proyecto.
 * 'label' es el texto que se muestra al usuario.
 */
export const tiposDeProyecto = [
  { value: 'academico', label: 'Académico' },
  { value: 'cliente', label: 'Cliente real' },
  { value: 'personal', label: 'Personal' }
]
