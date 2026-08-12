<!--
  Aplicacion.vue  (componente raíz)
  -----------------------------------------------------------------------
  Este es el componente principal: arma la página completa importando y
  ordenando cada sección. TODOS tus datos personales (nombre, biografía,
  contacto, redes) se editan en UN SOLO LUGAR: el objeto 'perfil' de
  aquí abajo. El resto del sitio se actualiza automáticamente.
  -----------------------------------------------------------------------
-->
<script setup>
import BarraNavegacion from './componentes/BarraNavegacion.vue'
import SeccionInicio from './componentes/SeccionInicio.vue'
import GaleriaProyectos from './componentes/GaleriaProyectos.vue'
import SeccionSobreMi from './componentes/SeccionSobreMi.vue'
import SeccionContacto from './componentes/SeccionContacto.vue'

/**
 * Datos personales centralizados — EDÍTALOS AQUÍ.
 *
 * urlGithub / urlLinkedin: tu CV no incluía estos enlaces, así que
 * quedaron como placeholder. Reemplázalos por tus perfiles reales.
 *
 * cvUrl: apunta a un archivo dentro de la carpeta 'publico/'.
 * Coloca tu CV real en publico/cv.pdf (reemplazando el archivo de
 * ejemplo) para que el botón "Descargar CV" funcione.
 */
const perfil = {
  nombre: 'Manuel Esteban Guzmán Gómez',
  rol: 'Informática Empresarial · Tecnología y Sistemas',
  biografia:
    'Estudiante de cuarto año de Informática Empresarial en la Universidad de Costa Rica, con formación multidisciplinaria en tecnología, desarrollo de software, bases de datos, sistemas e infraestructura. Experiencia práctica en proyectos académicos y personales con distintos lenguajes de programación, tecnologías web, gestores de bases de datos, sistemas operativos, herramientas de desarrollo y entornos virtualizados.',
  correo: 'manu05gg09@gmail.com',
  telefono: '(506) 8515-8699',
  ubicacion: 'Liberia, Guanacaste, Costa Rica',
  urlGithub: 'https://github.com/ManuelEGuzG',
  urlLinkedin: 'https://www.linkedin.com/in/manuel-guzmán-b10015327/',
  urlCv: '/cv.pdf'
}
</script>

<template>
  <BarraNavegacion />

  <main>
    <SeccionInicio
      :nombre="perfil.nombre"
      :rol="perfil.rol"
      :biografia="perfil.biografia"
      :url-github="perfil.urlGithub"
      :url-linkedin="perfil.urlLinkedin"
      :url-cv="perfil.urlCv"
    />

    <GaleriaProyectos />

    <SeccionSobreMi />

    <SeccionContacto
      :correo="perfil.correo"
      :telefono="perfil.telefono"
      :ubicacion="perfil.ubicacion"
      :url-github="perfil.urlGithub"
      :url-linkedin="perfil.urlLinkedin"
    />
  </main>
</template>
