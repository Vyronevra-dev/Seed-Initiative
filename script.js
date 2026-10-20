const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');
const navAnchors = document.querySelectorAll('.nav-links ul li a');
const strategyToggle = document.querySelector('.strategy-toggle');
const strategyDropdown = document.querySelector('.strategy-dropdown');

function openMenu() {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    overlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);

navAnchors.forEach(link => {
    link.addEventListener('click', function () {
        navAnchors.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Close mobile menu after clicking a link
        if (navLinks.classList.contains('open')) {
            closeMenu();
        }
    });
});

strategyToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = strategyDropdown.classList.toggle('open');
    strategyToggle.setAttribute('aria-expanded', isOpen);
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!strategyToggle.contains(e.target) && !strategyDropdown.contains(e.target)) {
        strategyDropdown.classList.remove('open');
        strategyToggle.setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (navLinks.classList.contains('open')) {
            closeMenu();
        }
        if (strategyDropdown.classList.contains('open')) {
            strategyDropdown.classList.remove('open');
            strategyToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// Close menu on window resize when switching from mobile to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && navLinks.classList.contains('open')) {
        closeMenu();
    }
});
