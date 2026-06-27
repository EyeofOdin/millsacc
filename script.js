// Smooth scrolling effect for anchor navigation links
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

// Structural navbar style modification upon scroll 
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

// Interactive hover transitions for service lists and market cards
document.querySelectorAll('.service-strip, .market-card').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#fbfaff';
        this.style.transition = 'background-color 0.3s ease';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});