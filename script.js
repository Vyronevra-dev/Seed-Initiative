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
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    overlay.classList.remove('active');
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
    strategyDropdown.classList.toggle('open');
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!strategyToggle.contains(e.target) && !strategyDropdown.contains(e.target)) {
        strategyDropdown.classList.remove('open');
    }
});
