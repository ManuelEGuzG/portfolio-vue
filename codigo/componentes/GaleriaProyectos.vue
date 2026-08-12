<!--
  GaleriaProyectos.vue
  -----------------------------------------------------------------------
  Componente "orquestador": junta los datos (datos/proyectos.js), el
  panel de filtros (FiltroProyectos.vue) y las tarjetas (TarjetaProyecto.vue).

  Aquí vive la lógica reactiva de filtrado, usando 'computed' de Vue:
  cada vez que cambian 'tecnologiaActiva' o 'tipoActivo', Vue recalcula
  automáticamente 'proyectosFiltrados' — no hace falta ningún watcher
  ni función manual para "refrescar" la lista.
  -----------------------------------------------------------------------
-->
<script setup>
import { ref, computed } from 'vue'
import { proyectos, tiposDeProyecto } from '@/datos/proyectos.js'
import FiltroProyectos from './FiltroProyectos.vue'
import TarjetaProyecto from './TarjetaProyecto.vue'

// Filtros actualmente seleccionados. 'null' significa "sin filtro" (mostrar todo).
const tecnologiaActiva = ref(null)
const tipoActivo = ref(null)

/**
 * Lista de tecnologías únicas, calculada automáticamente a partir de
 * los proyectos existentes (no hay que mantenerla a mano). Si agregas
 * un proyecto nuevo con una tecnología nueva en datos/proyectos.js,
 * el botón de filtro aparece solo.
 */
const tecnologiasDisponibles = computed(() => {
  const conjunto = new Set(proyectos.flatMap((p) => p.tecnologias))
  return [...conjunto].sort()
})

/**
 * Proyectos que cumplen con los filtros activos.
 * Es 'computed': Vue vuelve a ejecutar esta función automáticamente
 * cada vez que cambia tecnologiaActiva.value o tipoActivo.value.
 */
const proyectosFiltrados = computed(() => {
  return proyectos.filter((proyecto) => {
    const coincideTecnologia = !tecnologiaActiva.value || proyecto.tecnologias.includes(tecnologiaActiva.value)
    const coincideTipo = !tipoActivo.value || proyecto.tipo === tipoActivo.value
    return coincideTecnologia && coincideTipo
  })
})

/** Limpia ambos filtros a la vez (botón "limpiar filtros" en FiltroProyectos). */
function reiniciarFiltros() {
  tecnologiaActiva.value = null
  tipoActivo.value = null
}
</script>

<template>
  <section id="proyectos" class="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 scroll-mt-16">
    <div v-revelar>
      <p class="blueprint-tag">Sec. 02</p>
      <h2 class="font-display font-semibold text-3xl sm:text-4xl mt-3">Proyectos destacados</h2>
      <p class="text-muted mt-3 max-w-lg">
        Aplicaciones desarrolladas durante la carrera, cubriendo desarrollo web, bases de datos,
        infraestructura e integración de IA.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 mt-12">
      <!-- Panel de filtros -->
      <div v-revelar="{ delay: 100 }">
        <FiltroProyectos
          :tecnologias="tecnologiasDisponibles"
          :tipos="tiposDeProyecto"
          :tecnologia-activa="tecnologiaActiva"
          :tipo-activo="tipoActivo"
          @update:tecnologia-activa="(valor) => (tecnologiaActiva = valor)"
          @update:tipo-activo="(valor) => (tipoActivo = valor)"
          @reiniciar="reiniciarFiltros"
        />
      </div>

      <!-- Resultados -->
      <div>
        <p class="font-mono text-xs text-muted mb-4">
          {{ proyectosFiltrados.length }} proyecto(s) encontrado(s)
        </p>

        <div v-if="proyectosFiltrados.length" class="grid sm:grid-cols-2 gap-5">
          <div
            v-for="(proyecto, indice) in proyectosFiltrados"
            :key="proyecto.id"
            v-revelar="{ delay: indice * 90 }"
          >
            <TarjetaProyecto :proyecto="proyecto" />
          </div>
        </div>

        <!-- Mensaje cuando ningún proyecto cumple los filtros seleccionados -->
        <div v-else class="panel p-10 text-center font-mono text-sm text-muted">
          No hay proyectos que coincidan con ese filtro.
        </div>
      </div>
    </div>
  </section>
</template>
