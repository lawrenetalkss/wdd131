// ============================================
// SITE PLAN - JAVASCRIPT
// ============================================

// ========== FOOTER: Current Year ==========
function setCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ========== FOOTER: Last Modified Date ==========
function setLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
}

// ========== SMOOTH SCROLL FOR NAVIGATION ==========
function setupSmoothScroll() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== ACTIVE NAVIGATION HIGHLIGHT ==========
function setupActiveNav() {
    const sections = document.querySelectorAll('.plan-section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========== COLOR SWATCH INTERACTION ==========
function setupColorSwatches() {
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', function() {
            const hex = this.querySelector('.color-hex')?.textContent;
            if (hex) {
                navigator.clipboard?.writeText(hex).then(() => {
                    const originalHTML = this.innerHTML;
                    this.innerHTML = `
                        <span style="font-size:1.2rem;">✅</span>
                        <span style="display:block;font-size:0.9rem;margin-top:4px;">Copied!</span>
                    `;
                    setTimeout(() => {
                        this.innerHTML = originalHTML;
                    }, 1500);
                }).catch(() => {
                    alert(`Color: ${hex}`);
                });
            }
        });
    });
}

// ========== WIREFRAME INTERACTION ==========
function setupWireframes() {
    document.querySelectorAll('.wireframe').forEach(wireframe => {
        wireframe.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--gold-accent)';
            this.style.boxShadow = '0 8px 24px var(--shadow-hover)';
            this.style.transition = 'all 0.3s ease';
        });
        wireframe.addEventListener('mouseleave', function() {
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
        });
    });
}

// ========== INITIALIZATION ==========
function init() {
    setCurrentYear();
    setLastModified();
    setupSmoothScroll();
    setupActiveNav();
    setupColorSwatches();
    setupWireframes();

    console.log('Lagos Island Heritage - Site Plan loaded successfully!');
    console.log('📋 Website Planning Document');
    console.log('📅', new Date().toLocaleDateString());
}

// ========== DOM CONTENT LOADED ==========
document.addEventListener('DOMContentLoaded', init);