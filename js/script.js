import './_modal.js';
import './_theme.js';
import './_tooltip.js';
import './_animations.js';
import './_filters.js';
import './_plyr-init.js';

// Ejecutar feather icons reemplazo
document.addEventListener('DOMContentLoaded', () => {
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

import { openModal, closeModal } from './_modal.js';

window.openModal = openModal;
window.closeModal = closeModal;