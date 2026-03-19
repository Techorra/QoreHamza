// Simple scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
}

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Simple typewriter effect
const typeEffectElement = document.querySelector('.type-effect');
if (typeEffectElement) {
    const strings = JSON.parse(typeEffectElement.dataset.strings);
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseBetweenStrings = 1500;

    function type() {
        const currentString = strings[stringIndex];
        if (isDeleting) {
            typeEffectElement.textContent = currentString.substring(0, charIndex--);
        } else {
            typeEffectElement.textContent = currentString.substring(0, charIndex++);
        }

        let typeSpeed = typingSpeed;
        if (isDeleting) {
            typeSpeed = deletingSpeed;
        }

        if (!isDeleting && charIndex === currentString.length + 1) {
            typeSpeed = pauseBetweenStrings;
            isDeleting = true;
        } else if (isDeleting && charIndex === -1) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % strings.length;
            typeSpeed = typingSpeed;
        }

        setTimeout(type, typeSpeed);
    }
    type();
}
