AOS.init({
    duration: 1200, // Animation duration in milliseconds
    // offset: 120, // Offset (in pixels) from the original trigger point
    easing: 'ease-in-out',
    once: true
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
    cursor.style.transform = "translate(-50%, -50%) rotate(-120deg) scale(0.8)";
});

document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) rotate(-120deg) scale(1)";
});

function isYellowish(rgb) {
    const match = rgb.match(/\d+/g);
    if (!match || match.length < 3) return false;

    const r = parseInt(match[0]);
    const g = parseInt(match[1]);
    const b = parseInt(match[2]);

    return r > 200 && g > 200 && b < 150;
}
// ------------------------------------

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Typewriter effect for the hero section
const typeEffectElement = document.querySelector('.type-effect');
if (typeEffectElement) {
    const strings = JSON.parse(typeEffectElement.dataset.strings);
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 60; // milliseconds per character
    const deletingSpeed = 20; // milliseconds per character
    const pauseBetweenStrings = 1000; // milliseconds

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

// poem
document.getElementById('poem-btn').addEventListener('click', function () {
    document.getElementById('poem-btn-popup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('poem-btn-popup').style.display = 'none';
});