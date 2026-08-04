/* ============================================================
   references.js – Lagos Island Heritage References
   ============================================================ */

// ========== FOOTER FUNCTIONS ==========

/**
 * Sets the current year in the footer
 * Uses DOM interaction to select and modify element
 */
function setCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Sets the last modified date in the footer
 * Uses DOM interaction to select and modify element
 */
function setLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
}

// ========== FAVORITES COUNT ==========

/**
 * Updates the favorites count badge in the navigation
 * Uses localStorage to retrieve data
 */
function updateFavoritesCount() {
    const countElement = document.getElementById('favorites-count');
    if (!countElement) return;
    
    try {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        countElement.textContent = favorites.length;
    } catch (error) {
        console.error('Error retrieving favorites:', error);
        countElement.textContent = '0';
    }
}

// ========== HAMBURGER MENU ==========

/**
 * Sets up the hamburger menu toggle for mobile
 * Uses DOM interaction and event listening
 */
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            // Toggle the 'open' class on nav links
            navLinks.classList.toggle('open');
            // Toggle the 'active' class on hamburger button
            this.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = navLinks.classList.contains('open');
            this.setAttribute('aria-expanded', isExpanded);
        });
    }
}

// ========== REFERENCES PAGE SPECIFIC ==========

/**
 * Adds a "Copy Citation" feature to each reference
 * Uses DOM interaction, event listeners, and template literals
 */
function setupCitationCopy() {
    const referenceItems = document.querySelectorAll('.reference-list li');
    
    if (referenceItems.length === 0) return;
    
    referenceItems.forEach((item, index) => {
        // Create a copy button for each reference
        const copyButton = document.createElement('button');
        copyButton.className = 'btn-copy-citation';
        copyButton.setAttribute('aria-label', 'Copy citation');
        copyButton.textContent = '📋 Copy';
        
        // Use template literal for the citation text
        const citationText = item.textContent.trim();
        
        // Add click event listener
        copyButton.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Copy citation to clipboard
            navigator.clipboard.writeText(citationText).then(() => {
                // Visual feedback
                const originalText = this.textContent;
                this.textContent = '✅ Copied!';
                this.style.backgroundColor = '#008751';
                this.style.color = '#FFFFFF';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = '';
                    this.style.color = '';
                }, 2000);
            }).catch(() => {
                // Fallback for older browsers
                alert(`Citation: ${citationText}`);
            });
        });
        
        // Append copy button to the list item
        item.appendChild(copyButton);
    });
}

/**
 * Adds a "Print References" button
 * Uses DOM interaction and event listening
 */
function setupPrintButton() {
    const referencesContent = document.querySelector('.references-content');
    if (!referencesContent) return;
    
    // Create print button container
    const printContainer = document.createElement('div');
    printContainer.className = 'print-container';
    printContainer.style.textAlign = 'center';
    printContainer.style.marginBottom = '2rem';
    
    // Use template literal for button
    printContainer.innerHTML = `
        <button class="btn-print-references" onclick="window.print()">
            🖨️ Print References
        </button>
        <button class="btn-export-references" onclick="exportReferences()">
            📥 Export as Text
        </button>
    `;
    
    // Insert before the references content
    referencesContent.parentNode.insertBefore(printContainer, referencesContent);
}

/**
 * Exports references as a text file
 * Uses array methods and template literals
 */
function exportReferences() {
    const referenceItems = document.querySelectorAll('.reference-list li');
    
    if (referenceItems.length === 0) {
        alert('No references to export.');
        return;
    }
    
    // Use array method forEach to build text content
    let textContent = 'LAGOS ISLAND HERITAGE - REFERENCES\n';
    textContent += '='.repeat(50) + '\n\n';
    textContent += 'Generated: ' + new Date().toLocaleString() + '\n\n';
    
    // Get all section titles
    const sections = document.querySelectorAll('.reference-section h2');
    let sectionIndex = 0;
    
    sections.forEach((section, index) => {
        textContent += section.textContent + '\n';
        textContent += '-'.repeat(section.textContent.length) + '\n';
        
        // Get the list items in this section
        const list = section.nextElementSibling;
        if (list && list.tagName === 'UL') {
            const items = list.querySelectorAll('li');
            items.forEach(item => {
                // Clean the text (remove copy button text if present)
                let itemText = item.textContent.replace('📋 Copy', '').trim();
                textContent += '  • ' + itemText + '\n';
            });
        }
        textContent += '\n';
    });
    
    // Create and download the text file
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'lagos-island-heritage-references.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Show success notification
    showNotification('📥 References exported successfully!', 'success');
}

/**
 * Shows a notification message
 * Uses DOM interaction
 */
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    if (!notification) {
        const newNotification = document.createElement('div');
        newNotification.id = 'notification';
        newNotification.className = `notification ${type || 'info'}`;
        newNotification.textContent = message;
        document.body.appendChild(newNotification);
        
        setTimeout(() => {
            newNotification.remove();
        }, 3000);
    } else {
        notification.className = `notification ${type || 'info'}`;
        notification.textContent = message;
        notification.style.display = 'block';
        
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
}

// ========== ACTIVE NAVIGATION ==========

/**
 * Highlights the current page in navigation
 * Uses DOM interaction and conditional branching
 */
function setActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === 'references.html' || linkPath === './references.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ========== KEYBOARD NAVIGATION ==========

/**
 * Adds keyboard navigation for accessibility
 * Uses event listeners and conditional branching
 */
function setupKeyboardNavigation() {
    const referenceItems = document.querySelectorAll('.reference-list li');
    
    referenceItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'listitem');
        
        // Add keyboard support for Enter and Space keys
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const copyButton = this.querySelector('.btn-copy-citation');
                if (copyButton) {
                    copyButton.click();
                }
            }
        });
    });
}

// ========== INITIALIZATION ==========

/**
 * Initialize all functions when DOM is ready
 * Uses DOMContentLoaded event listener
 */
function init() {
    // Set footer values
    setCurrentYear();
    setLastModified();
    
    // Update favorites count
    updateFavoritesCount();
    
    // Setup hamburger menu
    setupHamburgerMenu();
    
    // Set active navigation
    setActiveNav();
    
    // References page specific features
    setupCitationCopy();
    setupPrintButton();
    setupKeyboardNavigation();
    
    // Log initialization
    console.log('✅ References page initialized successfully!');
    console.log('📚 Total references:', document.querySelectorAll('.reference-list li').length);
}

// ========== DOM CONTENT LOADED ==========

// Use DOMContentLoaded event to ensure DOM is ready
document.addEventListener('DOMContentLoaded', init);