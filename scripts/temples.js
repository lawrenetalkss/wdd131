// ==========================================
// 1. HAMBURGER MENU TOGGLE
// ==========================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger && navMenu) {
    // Click handler
    hamburger.addEventListener('click', toggleMenu);
    
    // Keyboard support (Enter and Space)
    hamburger.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });
    
    function toggleMenu() {
        navMenu.classList.toggle('open');
        
        if (navMenu.classList.contains('open')) {
            hamburger.textContent = '✕';
            hamburger.setAttribute('aria-label', 'Close navigation menu');
            hamburger.setAttribute('aria-expanded', 'true');
        } else {
            hamburger.textContent = '☰';
            hamburger.setAttribute('aria-label', 'Toggle navigation menu');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    }
}

// ==========================================
// 2. CLOSE MENU WHEN A LINK IS CLICKED
// ==========================================

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            if (hamburger) {
                hamburger.textContent = '☰';
                hamburger.setAttribute('aria-label', 'Toggle navigation menu');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// ==========================================
// 3. FOOTER - DYNAMIC COPYRIGHT YEAR
// ==========================================

const yearElement = document.getElementById('year');

if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// ==========================================
// 4. FOOTER - LAST MODIFIED DATE
// ==========================================

const lastModifiedElement = document.getElementById('lastModified');

if (lastModifiedElement) {
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = 'Last Modified: ' + lastModified;
}

// ==========================================
// 5. ACTIVE NAVIGATION LINK HIGHLIGHT
// ==========================================

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach((link) => {
    const linkHref = link.getAttribute('href');
    // Remove query parameters and hash fragments
    const linkPage = linkHref.split('?')[0].split('#')[0];
    
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'index.html') ||
        (currentPage === '/' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});

// ==========================================
// 6. IMAGE ERROR HANDLING
// ==========================================

const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach((img) => {
    img.addEventListener('error', function() {
        this.alt = 'Image not found';
        this.classList.add('image-error');
        
        // Add fallback text in the figure
        const figure = this.parentElement;
        if (figure && !figure.querySelector('.image-error-text')) {
            const errorText = document.createElement('div');
            errorText.className = 'image-error-text';
            errorText.textContent = '❌ Image not available';
            figure.appendChild(errorText);
        }
    });
});

// ==========================================
// 7. CONSOLE WELCOME MESSAGE
// ==========================================

console.log('%c🏛️ Temple Album - LDS Temples Photo Gallery', 'font-size: 18px; font-weight: bold; color: #4A6FA5;');
console.log('%cBuilt by Lawrence Adekunle | WDD 131', 'font-size: 12px; color: #666;');
console.log('%c✅ JavaScript loaded successfully!', 'font-size: 14px; color: green;');