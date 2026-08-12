<!--
  SeccionSobreMi.vue
  -----------------------------------------------------------------------
  Sección de perfil: resumen, habilidades técnicas agrupadas por
  categoría, y línea de tiempo de formación académica.

  Para editar tus habilidades o estudios, modifica los objetos
  'habilidades' y 'formacionAcademica' de aquí abajo.
  -----------------------------------------------------------------------
-->
<script setup>
// Habilidades agrupadas por categoría. La clave del objeto (ej. "Lenguajes")
// es el título de cada tarjeta, y el array son los tags que se muestran dentro.
const habilidades = {
  Lenguajes: ['PHP', 'JavaScript', 'Python', 'Java', 'C#', 'HTML5', 'CSS3'],
  'Bases de datos': ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB'],
  'Frameworks / APIs': ['Vue.js', 'Laravel', 'ASP.NET', 'APIs REST'],
  Herramientas: ['Git', 'Docker', 'Postman', 'Linux', 'Windows', 'Power BI', 'Microsoft Office']
}

// Formación académica, en el orden en que se muestra (más reciente primero).
// 'actual: true' marca el punto de la línea de tiempo en color de acento
// (para indicar el estudio que cursas actualmente).
const formacionAcademica = [
  {
    titulo: 'Bachillerato en Informática Empresarial',
    lugar: 'Universidad de Costa Rica',
    periodo: '2023 — 2027',
    actual: true
  },
  {
    titulo: 'Bachiller en Educación Media — Sección Francés Avanzado',
    lugar: 'Instituto de Guanacaste',
    periodo: '2020 — 2022'
  },
  {
    titulo: 'Técnico en Guía Naturalista',
    lugar: 'Instituto de Guanacaste',
    periodo: '2021 — 2022'
  },
  {
    titulo: 'Curso de Alfabetización de Seguridad Digital',
    lugar: 'Instituto Nacional de Aprendizaje',
    periodo: '2025'
  },
  {
    titulo: 'Curso de Servicio al Cliente',
    lugar: 'Instituto Técnico Nacional',
    periodo: '2026'
  }
]
</script>

<template>
  <div class="w-full max-w-4xl mx-auto py-8 font-sans text-slate-200">
    <!-- Encabezado de Sección -->
    <div class="mb-8 border-b border-sky-500/30 pb-2 inline-block">
      <h3 class="text-sky-400 font-mono text-sm tracking-widest uppercase font-semibold">
        FORMACIÓN ACADÉMICA
      </h3>
    </div>

    <!-- Timeline / Lista de Educación -->
    <div class="relative pl-6 border-l-2 border-slate-800 space-y-8">
      
      <!-- Elemento 1 -->
      <div class="relative group">
        <!-- Punto azul alineado a la línea vertical -->
        <span class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-sky-400 ring-4 ring-slate-950 group-hover:scale-125 transition-transform duration-200 shadow-[0_0_8px_#38bdf8]"></span>
        
        <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h4 class="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
            Bachillerato en Informática Empresarial
          </h4>
          <span class="font-mono text-xs text-sky-400 font-medium">2023 — 2027</span>
        </div>
        <p class="text-slate-400 text-sm mt-0.5">Universidad de Costa Rica</p>
      </div>

      <!-- Elemento 2 -->
      <div class="relative group">
        <span class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-700 ring-4 ring-slate-950 group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-200"></span>
        
        <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h4 class="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
            Bachiller en Educación Media — Sección Francés Avanzado
          </h4>
          <span class="font-mono text-xs text-sky-400 font-medium">2020 — 2022</span>
        </div>
        <p class="text-slate-400 text-sm mt-0.5">Instituto de Guanacaste</p>
      </div>

      <!-- Elemento 3 -->
      <div class="relative group">
        <span class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-700 ring-4 ring-slate-950 group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-200"></span>
        
        <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h4 class="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
            Técnico en Guía Naturalista
          </h4>
          <span class="font-mono text-xs text-sky-400 font-medium">2021 — 2022</span>
        </div>
        <p class="text-slate-400 text-sm mt-0.5">Instituto de Guanacaste</p>
      </div>

      <!-- Elemento 4 -->
      <div class="relative group">
        <span class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-700 ring-4 ring-slate-950 group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-200"></span>
        
        <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h4 class="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
            Curso de Alfabetización de Seguridad Digital
          </h4>
          <span class="font-mono text-xs text-sky-400 font-medium">2025</span>
        </div>
        <p class="text-slate-400 text-sm mt-0.5">Instituto Nacional de Aprendizaje</p>
      </div>

      <!-- Elemento 5 -->
      <div class="relative group">
        <span class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-700 ring-4 ring-slate-950 group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-200"></span>
        
        <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h4 class="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
            Curso de Servicio al Cliente
          </h4>
          <span class="font-mono text-xs text-sky-400 font-medium">2026</span>
        </div>
        <p class="text-slate-400 text-sm mt-0.5">Instituto Técnico Nacional</p>
      </div>

    </div>
  </div>
</template>