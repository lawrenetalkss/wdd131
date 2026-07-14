// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    
    // Toggle hamburger icon between ☰ and ✕
    if (navMenu.classList.contains('open')) {
        hamburger.textContent = '✕';
        hamburger.setAttribute('aria-label', 'Close navigation menu');
    } else {
        hamburger.textContent = '☰';
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    }
});

// Footer Copyright Year
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Footer Last Modified Date
const lastModifiedElement = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;