// ==========================================
// 1. HAMBURGER MENU TOGGLE
// ==========================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        
        if (navMenu.classList.contains('open')) {
            hamburger.textContent = '✕';
            hamburger.setAttribute('aria-label', 'Close navigation menu');
        } else {
            hamburger.textContent = '☰';
            hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        }
    });
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

const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach((link) => {
    const linkHref = link.getAttribute('href');
    
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
        link.style.color = '#ffd700';
        link.style.fontWeight = '700';
        link.style.borderBottom = '2px solid #ffd700';
    }
});

// ==========================================
// 6. IMAGE ERROR HANDLING
// ==========================================

const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach((img) => {
    img.addEventListener('error', function() {
        this.alt = 'Image not found';
        this.style.border = '2px dashed #ff6b6b';
        this.style.padding = '10px';
        this.style.backgroundColor = '#f8f9fa';
        this.style.minHeight = '150px';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
    });
});

// ==========================================
// 7. CONSOLE WELCOME MESSAGE
// ==========================================

console.log('%c🏛️ Temple Album - LDS Temples Photo Gallery', 'font-size: 18px; font-weight: bold; color: #4A6FA5;');
console.log('%cBuilt by Lawrence Adekunle | WDD 131', 'font-size: 12px; color: #666;');
console.log('%c✅ JavaScript loaded successfully!', 'font-size: 14px; color: green;');