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

// Cambiar el fondo de la barra de navegación al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.7)';
    }
});
