# Portafolio — Manuel Guzmán

SPA de portafolio 100% frontend (Vue 3 + Vite + Tailwind CSS). Sin backend:
todos los proyectos viven en `codigo/datos/proyectos.js`.

Todo el código, carpetas y comentarios están en español para que sea fácil
de editar y entender.

## Estructura del proyecto

```
portfolio-vue/
├── index.html                  ← Punto de entrada HTML (fuentes, metadatos)
├── vite.config.js              ← Configuración de Vite (rutas, alias '@')
├── tailwind.config.js          ← Colores, tipografías y tokens de diseño
├── postcss.config.js
├── vercel.json                 ← Configuración de despliegue en Vercel
│
├── publico/                    ← Archivos estáticos (equivalente a "public")
│   ├── favicon.svg
│   └── cv.pdf                  ← REEMPLAZA este archivo por tu CV real
│
└── codigo/                     ← Código fuente (equivalente a "src")
    ├── principal.js            ← Punto de entrada de la app Vue
    ├── Aplicacion.vue          ← Componente raíz: AQUÍ EDITAS TUS DATOS PERSONALES
    │
    ├── datos/
    │   └── proyectos.js        ← AQUÍ EDITAS TUS PROYECTOS
    │
    ├── componentes/
    │   ├── BarraNavegacion.vue     ← Menú fijo superior con scroll-spy
    │   ├── SeccionInicio.vue       ← Hero: nombre, bio, grafo de nodos animado
    │   ├── GaleriaProyectos.vue    ← Orquesta filtros + tarjetas (lógica reactiva)
    │   ├── FiltroProyectos.vue     ← Botones de filtro por tecnología/categoría
    │   ├── TarjetaProyecto.vue     ← Tarjeta individual de un proyecto
    │   ├── SeccionSobreMi.vue      ← Habilidades + formación académica
    │   ├── SeccionContacto.vue     ← Correo, teléfono, redes, footer
    │   └── BotonMagnetico.vue      ← Botón reutilizable con efecto hover
    │
    ├── composables/
    │   └── usarScrollSpy.js    ← Lógica reutilizable: detecta la sección visible
    │
    ├── directivas/
    │   └── revelarAlEntrar.js  ← Directiva v-revelar: animación al hacer scroll
    │
    └── recursos/
        └── estilos.css         ← CSS global (Tailwind + animaciones + tema)
```

> **Nota sobre "composables":** dejé esa carpeta con su nombre en inglés
> porque es un término propio del ecosistema Vue (así se le llama en la
> documentación oficial incluso en español). Todo lo demás — carpetas,
> variables, props, comentarios — está en español.

## ¿Dónde edito qué?

| Quiero cambiar...                     | Edita este archivo                                     |
| -------------------------------------- | -------------------------------------------------------- |
| Mi nombre, rol, bio, correo, redes     | `codigo/Aplicacion.vue` → objeto `perfil`                 |
| Mis proyectos                          | `codigo/datos/proyectos.js`                               |
| Mi CV descargable                      | `publico/cv.pdf` (reemplaza el archivo)                   |
| Colores, tipografías                   | `tailwind.config.js`                                      |
| Mis habilidades / formación académica  | `codigo/componentes/SeccionSobreMi.vue`                   |
| Los nodos del grafo animado del Hero   | `codigo/componentes/SeccionInicio.vue` → variable `nodos` |
| Las secciones del menú de navegación   | `codigo/componentes/BarraNavegacion.vue` → variable `secciones` |

## Desarrollo local

```bash
npm install
npm run dev
```

Abre la URL que te muestre la terminal (normalmente `http://localhost:5173`).

## Build de producción

```bash
npm run build
npm run preview   # para probar el build localmente
```

## Despliegue en Vercel

1. Sube el proyecto a GitHub (ver abajo).
2. Entra a https://vercel.com → **Add New Project** → importa el repo.
3. Vercel detecta Vite automáticamente. Confirma:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy. `vercel.json` ya incluye el rewrite para que las rutas del SPA
   no den 404 al refrescar.

## Subir a GitHub

```bash
git init
git add .
git commit -m "feat: portafolio inicial"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```
