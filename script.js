// Gladde rol-effek vir navigasieskakels
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Styl-verandering vir navigasiebalk wanneer gerol word
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(61, 27, 125, 0.12)';
    } else {
        navbar.style.backgroundColor = 'white';
        navbar.style.boxShadow = '0 2px 15px rgba(61, 27, 125, 0.08)';
    }
});

// Subtiele animasie vir diensstroke en kliëntekaarte
document.querySelectorAll('.service-strip, .market-card').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#fcfaff';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});