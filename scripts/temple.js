// ==========================================
// 1. HAMBURGER MENU TOGGLE
// ==========================================

// Get the hamburger button and navigation menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

// Check if elements exist before adding event listener
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        // Toggle the 'open' class on the menu
        navMenu.classList.toggle('open');
        
        // Toggle hamburger icon between ☰ and ✕
        if (navMenu.classList.contains('open')) {
            hamburger.textContent = '✕'; // Change to close icon
            hamburger.setAttribute('aria-label', 'Close navigation menu');
        } else {
            hamburger.textContent = '☰'; // Change back to hamburger
            hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        }
    });
}


// ==========================================
// 2. CLOSE MENU WHEN A LINK IS CLICKED
// ==========================================

// Get all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Loop through each link and add click event
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Close the menu when a link is clicked
        if (navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            // Reset hamburger icon back to ☰
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

// Get the year span element
const yearElement = document.getElementById('year');

// Check if element exists
if (yearElement) {
    // Get current year and display it
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}


// ==========================================
// 4. FOOTER - LAST MODIFIED DATE
// ==========================================

// Get the last modified span element
const lastModifiedElement = document.getElementById('lastModified');

// Check if element exists
if (lastModifiedElement) {
    // Get the document's last modified date
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
}


// ==========================================
// 5. ACTIVE NAVIGATION LINK HIGHLIGHT
// ==========================================

// Get the current page URL
const currentPage = window.location.pathname.split('/').pop();

// Loop through all nav links
navLinks.forEach((link) => {
    // Get the href of each link
    const linkHref = link.getAttribute('href');
    
    // If the link matches the current page, highlight it
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
        link.style.color = '#ffd700';
        link.style.fontWeight = '700';
        link.style.borderBottom = '2px solid #ffd700';
    }
});


// ==========================================
// 6. RESPONSIVE IMAGE ERROR HANDLING
// ==========================================

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach((img) => {
    // Add error handling for broken images
    img.addEventListener('error', function() {
        // If image fails to load, show a fallback message
        this.alt = 'Image not found';
        this.style.border = '2px dashed #ff6b6b';
        this.style.padding = '10px';
        this.style.backgroundColor = '#f8f9fa';
        this.style.minHeight = '150px';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        
        // Optional: Set a placeholder image
        // this.src = 'images/placeholder.jpg';
    });
});


// ==========================================
// 7. CONSOLE WELCOME MESSAGE (Optional)
// ==========================================

console.log('%c🏛️ Temple Album - LDS Temples Photo Gallery', 'font-size: 18px; font-weight: bold; color: #4A6FA5;');
console.log('%cBuilt by Lawrence Adekunle | WDD 131', 'font-size: 12px; color: #666;');
console.log('%c✅ JavaScript loaded successfully!', 'font-size: 14px; color: green;');