'use strict';

//script menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
      hamburger.innerHTML = "&#10006;";
  } else {
      hamburger.innerHTML = "&#9776;";
  }
}

//script video
const video = document.getElementById('miVideo');

function verificarVisibilidad() {
  const rect = video.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const maxWidth = 640; // Ancho máximo para dispositivos móviles

  if (window.innerWidth <= maxWidth) {
    video.play();
  } else {
    if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
      video.play();
    } else {
      video.pause();
    }
  }
}

// Verifica la visibilidad cuando se carga la página y cuando se desplaza
window.addEventListener('load', verificarVisibilidad);
window.addEventListener('scroll', verificarVisibilidad);
window.addEventListener('resize', verificarVisibilidad);