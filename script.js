// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto parallax en la sección hero
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.hero-section');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Variables para controlar el scroll
let lastScrollTop = 0;

// Cambiar el fondo de la barra de navegación y mostrar/ocultar al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Cambiar el fondo
    if (currentScroll > 50) {
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.7)';
    }

    // Mostrar/ocultar navbar
    if (currentScroll > lastScrollTop) {
        // Scroll hacia abajo
        navbar.style.top = '-100px';
    } else {
        // Scroll hacia arriba
        navbar.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});