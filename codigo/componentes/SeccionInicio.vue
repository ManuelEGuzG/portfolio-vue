<!--
  SeccionInicio.vue  (Hero)
  -----------------------------------------------------------------------
  Primera sección visible del sitio. Muestra el nombre, rol, biografía
  corta, botones de acción (CV, GitHub, LinkedIn) y un grafo de nodos
  SVG estático que representa visualmente los dominios técnicos.
  -----------------------------------------------------------------------
-->
<script setup>
import BotonMagnetico from './BotonMagnetico.vue'

// Props que recibe este componente desde Aplicacion.vue.
defineProps({
  nombre: { type: String, required: true },
  rol: { type: String, required: true },
  biografia: { type: String, required: true },
  urlGithub: { type: String, required: true },
  urlLinkedin: { type: String, required: true },
  urlCv: { type: String, required: true }
})

// Nodos del grafo decorativo estático: cada uno representa un dominio técnico.
// x, y son coordenadas dentro del viewBox del SVG (ver <svg viewBox="0 0 500 466">).
const nodos = [
  { x: 250, y: 70, etiqueta: 'Web' },
  { x: 421, y: 194, etiqueta: 'APIs' },
  { x: 356, y: 396, etiqueta: 'Datos' },
  { x: 144, y: 396, etiqueta: 'Infra' },
  { x: 79, y: 194, etiqueta: 'IA' }
]

/** Hace scroll suave hasta la sección de proyectos (botón "SCROLL" al pie del hero). */
function irAProyectos() {
  document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="inicio" class="relative min-h-[100svh] flex items-center overflow-hidden blueprint-bg scroll-mt-16">
    <!-- Viñeta oscura para que el grid de fondo se desvanezca en los bordes -->
    <div
      class="pointer-events-none absolute inset-0"
      style="background: radial-gradient(80% 60% at 30% 30%, transparent, #0b1220 85%)"
    />

    <div
      class="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center w-full"
    >
      <!-- Columna izquierda: texto de presentación -->
      <div>
        <p class="blueprint-tag fade-in">Plano / Perfil Técnico</p>
        <h1 class="font-display font-semibold text-4xl sm:text-6xl leading-[1.05] mt-4 text-paper">
          {{ nombre }}
        </h1>
        <p class="font-mono text-signal text-sm sm:text-base mt-4 tracking-wide">
          {{ rol }}
        </p>
        <p class="text-muted mt-6 max-w-xl leading-relaxed">
          {{ biografia }}
        </p>

        <div class="mt-9 flex flex-wrap gap-4">
          <BotonMagnetico
            :href="urlCv"
            :download="'CV-Manuel-Esteban-Guzman.pdf'"
            class="btn-primary"
          >
            ↓ Descargar CV
          </BotonMagnetico>
          <BotonMagnetico :href="urlGithub" target="_blank" rel="noopener" class="btn-ghost">
            GitHub
          </BotonMagnetico>
          <BotonMagnetico :href="urlLinkedin" target="_blank" rel="noopener" class="btn-ghost">
            LinkedIn
          </BotonMagnetico>
        </div>
      </div>

      <!-- Columna derecha: grafo de nodos ESTÁTICO -->
      <div class="relative hidden lg:block" aria-hidden="true">
        <svg viewBox="0 0 500 466" class="w-full h-auto select-none pointer-events-none">
          <!-- Líneas estáticas que conectan el nodo central con cada dominio técnico -->
          <line
            v-for="(nodo, i) in nodos"
            :key="`linea-${i}`"
            :x1="250"
            :y1="250"
            :x2="nodo.x"
            :y2="nodo.y"
            stroke="#4CC9F0"
            stroke-width="1"
            opacity="0.5"
          />

          <!-- Cada nodo estático: anillo fijo + punto fijo + etiqueta de texto -->
          <g v-for="(nodo, i) in nodos" :key="`nodo-${i}`">
            <circle
              :cx="nodo.x"
              :cy="nodo.y"
              r="14"
              fill="none"
              stroke="#4CC9F0"
              stroke-width="1"
              opacity="0.3"
            />
            <circle
              :cx="nodo.x"
              :cy="nodo.y"
              r="6"
              fill="#4CC9F0"
            />
            <text
              :x="nodo.x"
              :y="nodo.y + (nodo.y > 250 ? 26 : -18)"
              text-anchor="middle"
              class="font-mono"
              font-size="13"
              fill="#8B98AD"
            >
              {{ nodo.etiqueta }}
            </text>
          </g>

          <!-- Nodo central con las iniciales -->
          <circle cx="250" cy="250" r="52" fill="#121B2E" stroke="#4CC9F0" stroke-width="1.5" />
          <text x="250" y="246" text-anchor="middle" class="font-mono font-semibold" font-size="18" fill="#EDF1F7">
            MEGG
          </text>
          <text x="250" y="266" text-anchor="middle" class="font-mono" font-size="10" fill="#4CC9F0">
            SYSTEMS
          </text>
        </svg>
      </div>
    </div>

    <!-- Indicador de "seguir bajando" (oculto en móvil) -->
    <button
      type="button"
      class="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted font-mono text-[10px] tracking-widest"
      @click="irAProyectos"
    >
      SCROLL
      <span class="w-px h-8 bg-gradient-to-b from-signal to-transparent" />
    </button>
  </section>
</template>