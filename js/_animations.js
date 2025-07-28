// _animations.js

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 1024) {
    const mobileOverlays = document.querySelectorAll('.overlay-mobile');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
          entry.target.classList.remove('pre-animate');
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.4
    });

    mobileOverlays.forEach(overlay => observer.observe(overlay));
  }

  //footer
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
});