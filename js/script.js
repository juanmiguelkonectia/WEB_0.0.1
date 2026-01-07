document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace (móvil)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('active');
        }
      });
    });
  }

  // Espacio para futuras animaciones
  const animacion = document.getElementById('animacion');
  if (animacion) {
    console.log("¡Listo para añadir animación!");
  }
});