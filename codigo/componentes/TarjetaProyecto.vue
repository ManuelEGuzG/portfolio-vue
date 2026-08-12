<!--
  TarjetaProyecto.vue
  -----------------------------------------------------------------------
  Tarjeta individual que representa UN proyecto dentro de la galería.
  Recibe todo el objeto 'proyecto' (ver estructura en datos/proyectos.js)
  y se encarga solo de mostrarlo — no tiene lógica de filtrado.

  Incluye el efecto visual "spotlight": un resplandor que sigue al
  cursor del mouse mientras pasa sobre la tarjeta (ver función
  alMoverMouse y las clases .spot-card en recursos/estilos.css).
  -----------------------------------------------------------------------
-->
<script setup>
defineProps({
  proyecto: { type: Object, required: true }
})

// Traduce el valor interno del campo 'tipo' a un texto legible para mostrar.
const etiquetasDeTipo = {
  academico: 'Académico',
  cliente: 'Cliente real',
  personal: 'Personal'
}

/**
 * Actualiza las variables CSS --x y --y con la posición del cursor
 * relativa a la tarjeta. Estas variables las usa el CSS (.spot-card)
 * para dibujar un gradiente radial que sigue al mouse.
 */
function alMoverMouse(evento) {
  const tarjeta = evento.currentTarget
  const rect = tarjeta.getBoundingClientRect()
  tarjeta.style.setProperty('--x', `${evento.clientX - rect.left}px`)
  tarjeta.style.setProperty('--y', `${evento.clientY - rect.top}px`)
}
</script>

<template>
  <article
    class="spot-card panel p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
    @mousemove="alMoverMouse"
  >
    <!-- z-[2] asegura que el contenido quede por encima del efecto spotlight -->
    <div class="relative z-[2] flex flex-col h-full">
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-display font-semibold text-paper text-lg leading-snug">
          {{ proyecto.titulo }}
        </h3>
        <span class="tag shrink-0">{{ etiquetasDeTipo[proyecto.tipo] }}</span>
      </div>

      <p class="text-muted text-sm mt-3 flex-1 leading-relaxed">{{ proyecto.descripcion }}</p>

      <!-- Estadísticas decorativas estilo "git diff" -->
      <div class="flex items-center gap-3 mt-4 font-mono text-xs text-muted">
        <span class="text-signal">+{{ proyecto.estadisticas.agregadas }}</span>
        <span class="text-signalWarm">−{{ proyecto.estadisticas.eliminadas }}</span>
      </div>

      <!-- Tags de tecnologías -->
      <div class="flex flex-wrap gap-2 mt-4">
        <span v-for="tecnologia in proyecto.tecnologias" :key="tecnologia" class="tag">
          {{ tecnologia }}
        </span>
      </div>

      <!-- Enlaces a repo/demo, o aviso si aún no están disponibles -->
      <div v-if="proyecto.urlRepositorio || proyecto.urlDemo" class="flex gap-4 mt-5 font-mono text-sm">
        <a
          v-if="proyecto.urlRepositorio"
          :href="proyecto.urlRepositorio"
          target="_blank"
          rel="noopener"
          class="text-signal hover:underline"
        >
          repo →
        </a>
        <a
          v-if="proyecto.urlDemo"
          :href="proyecto.urlDemo"
          target="_blank"
          rel="noopener"
          class="text-signalWarm hover:underline"
        >
          demo →
        </a>
      </div>
      <p v-else class="mt-5 font-mono text-xs text-muted">repo privado / pendiente de publicar</p>
    </div>
  </article>
</template>
