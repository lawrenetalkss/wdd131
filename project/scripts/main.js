/* ============================================================
   main.js – Lagos Island Heritage
   ============================================================ */

// ========== FOOTER FUNCTIONS ==========
function setCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function setLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
}

// ========== LOCAL STORAGE FUNCTIONS ==========
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
}

function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error retrieving from localStorage:', error);
        return null;
    }
}

// ========== FAVORITES COUNT ==========
function updateFavoritesCount() {
    const countElement = document.getElementById('favorites-count');
    if (!countElement) return;
    
    const favorites = getFromLocalStorage('favorites') || [];
    countElement.textContent = favorites.length;
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    if (!notification) {
        // Create notification if it doesn't exist
        const newNotification = document.createElement('div');
        newNotification.id = 'notification';
        newNotification.className = `notification ${type || 'info'}`;
        newNotification.textContent = message;
        document.body.appendChild(newNotification);
        
        setTimeout(() => {
            newNotification.remove();
        }, 5000);
    } else {
        notification.className = `notification ${type || 'info'}`;
        notification.textContent = message;
        notification.style.display = 'block';
        
        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
    }
}

// ========== HAMBURGER MENU ==========
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            this.classList.toggle('active');
        });
    }
}

// ========== INITIALIZATION ==========
function init() {
    setCurrentYear();
    setLastModified();
    updateFavoritesCount();
    setupHamburgerMenu();
    
    console.log('✅ Lagos Island Heritage initialized successfully!');
}

// ========== DOM CONTENT LOADED ==========
document.addEventListener('DOMContentLoaded', init);