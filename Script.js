// Initialize AOS Animation
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    delay: 100
});

// Smooth Scroll
(function () {
    let scrollTarget = window.scrollY;
    let isScrolling = false;

    window.addEventListener("wheel", function (e) {
        e.preventDefault();
        scrollTarget += e.deltaY;
        scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));
        if (!isScrolling) smoothScroll();
    }, { passive: false });

    function smoothScroll() {
        isScrolling = true;
        const scrollStep = () => {
            const currentScroll = window.scrollY;
            const distance = scrollTarget - currentScroll;
            const step = distance * 0.1;

            if (Math.abs(step) > 0.5) {
                window.scrollBy(0, step);
                requestAnimationFrame(scrollStep);
            } else {
                isScrolling = false;
            }
        };
        requestAnimationFrame(scrollStep);
    }
})();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Custom cursor
const cursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (!element) return;

    const bgColor = window.getComputedStyle(element).backgroundColor;
    if (isYellowish(bgColor)) {
        cursor.style.background = "black";
    } else {
        cursor.style.background = "linear-gradient(135deg, #effa7a, #fa8f15)";
    }
});

document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) rotate(-120deg) scale(0.7)";
});

document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) rotate(-120deg) scale(1)";
});

// Cursor hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, input, textarea, .card, .skill-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
    });
});

function isYellowish(rgb) {
    const match = rgb.match(/\d+/g);
    if (!match || match.length < 3) return false;

    const r = parseInt(match[0]);
    const g = parseInt(match[1]);
    const b = parseInt(match[2]);

    return r > 200 && g > 200 && b < 150;
}

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Typewriter effect for the hero section
const typeEffectElement = document.querySelector('.type-effect');
if (typeEffectElement) {
    const strings = JSON.parse(typeEffectElement.dataset.strings);
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 70;
    const deletingSpeed = 30;
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

// Scroll Progress Indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollIndicator) {
        scrollIndicator.style.width = scrolled + '%';
    }
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Poem popup functionality
const poemBtn = document.getElementById('poem-btn');
if (poemBtn) {
    poemBtn.addEventListener('click', function () {
        const popup = document.getElementById('poem-btn-popup');
        if (popup) {
            popup.style.display = 'block';
        }
    });
}

const closePopup = document.getElementById('closePopup');
if (closePopup) {
    closePopup.addEventListener('click', function () {
        const popup = document.getElementById('poem-btn-popup');
        if (popup) {
            popup.style.display = 'none';
        }
    });
}

// Add parallax effect to background accents
const yellowAccent1 = document.querySelector('.yellow-accent-1');
const yellowAccent2 = document.querySelector('.yellow-accent-2');

if (yellowAccent1 && yellowAccent2) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        yellowAccent1.style.transform = `translateY(${scrolled * 0.1}px)`;
        yellowAccent2.style.transform = `translateY(${scrolled * -0.1}px)`;
    });
}

// Intersection Observer for animated counter on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Header background on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(5, 5, 5, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(5, 5, 5, 0.8)';
        header.style.backdropFilter = 'blur(20px)';
    }
});

// Add click sound effect (optional)
const clickSound = document.getElementById('click-sound');
document.addEventListener('click', (e) => {
    // Only play on main clicks, not on form elements
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'BUTTON') {
        if (clickSound) {
            clickSound.volume = 0.1;
            clickSound.currentTime = 0;
            clickSound.play().catch(() => {});
        }
    }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.card, .skill-card, .approach-item');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});
