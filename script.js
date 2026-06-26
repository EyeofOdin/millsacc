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

// Navigasiebalk deursigtigheid op rol
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'white';
        navbar.style.backdropFilter = 'none';
    }
});

// Kontakvorm indiening hanteerder
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const service = this.querySelector('select').value;
    
    if (!name || !email || !phone || !service) {
        alert('Vul asseblief alle verpligte velde in.');
        return;
    }
    
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Verbinding word beveilig...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Dankie vir u navraag. \'n Senior finansiële konsultant van Mills Accountants sal binne 24 uur veilig met u kontak maak.');
        this.reset();
        submitBtn.textContent = 'Dien Veilige Versoek In';
        submitBtn.disabled = false;
    }, 2000);
});

// Kaart effekte vir interaksie
document.querySelectorAll('.service-card, .feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.01)';
        this.style.boxShadow = '0 15px 30px rgba(15,37,55,0.12)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
    });
});

console.log('Mills Accountants platform aktief met WhatsApp-integrasie. 📊💼');