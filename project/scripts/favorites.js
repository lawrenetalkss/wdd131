/* ============================================================
   favorites.js – Lagos Island Heritage Favorites
   ============================================================ */

// ========== DISPLAY FAVORITES ==========
function displayFavorites() {
    const container = document.getElementById('favorites-container');
    if (!container) return;
    
    const favorites = getFromLocalStorage('favorites') || [];
    
    container.innerHTML = '';
    
    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="no-favorites">
                <div class="empty-state">
                    <span class="empty-icon">❤️</span>
                    <h3>No Favorites Yet</h3>
                    <p>Start exploring landmarks and save your favorites!</p>
                    <a href="landmarks.html" class="btn-primary">Explore Landmarks</a>
                </div>
            </div>
        `;
        return;
    }
    
    // Use array method forEach
    favorites.forEach(landmark => {
        const card = document.createElement('div');
        card.className = 'favorite-card';
        
        // Use template literal
        card.innerHTML = `
            <div class="favorite-image">
                <img src="${landmark.image}" 
                     alt="${landmark.name}" 
                     loading="lazy"
                     onerror="this.src='https://picsum.photos/seed/${landmark.id}/400/250'">
            </div>
            <div class="favorite-content">
                <h3>${landmark.name}</h3>
                <p class="location">📍 ${landmark.location}</p>
                <p class="year">📅 Built: ${landmark.year}</p>
                <p class="style">🏛️ Style: ${landmark.style}</p>
                <p class="description">${landmark.description.substring(0, 150)}...</p>
                <div class="favorite-actions">
                    <button class="btn-remove" onclick="removeFavorite(${landmark.id})">
                        🗑️ Remove
                    </button>
                    <button class="btn-view" onclick="viewLandmark(${landmark.id})">
                        👁️ View Details
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// ========== REMOVE FAVORITE ==========
function removeFavorite(landmarkId) {
    if (!confirm('Are you sure you want to remove this from favorites?')) return;
    
    let favorites = getFromLocalStorage('favorites') || [];
    
    // Use array method filter
    favorites = favorites.filter(fav => fav.id !== landmarkId);
    saveToLocalStorage('favorites', favorites);
    
    displayFavorites();
    updateFavoritesCount();
    showNotification('🗑️ Removed from favorites!', 'success');
}

// ========== VIEW LANDMARK DETAILS ==========
function viewLandmark(landmarkId) {
    const favorites = getFromLocalStorage('favorites') || [];
    
    // Use array method find
    const landmark = favorites.find(l => l.id === landmarkId);
    if (!landmark) return;
    
    showLandmarkModal(landmark);
}

// ========== SHOW LANDMARK MODAL ==========
function showLandmarkModal(landmark) {
    // Use DOM interaction - creating element
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    // Use template literal
    overlay.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
            <h2>${landmark.name}</h2>
            <p class="location">📍 ${landmark.location}</p>
            <p class="year">📅 Built: ${landmark.year}</p>
            <p class="style">🏛️ Style: ${landmark.style}</p>
            <p>${landmark.description}</p>
            <h4>Historical Details:</h4>
            <p>${landmark.history}</p>
            <p><strong>Architect:</strong> ${landmark.architect}</p>
            <p><strong>Original Purpose:</strong> ${landmark.originalPurpose}</p>
            <p><strong>Current Purpose:</strong> ${landmark.currentPurpose}</p>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Close modal on click outside
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    displayFavorites();
    updateFavoritesCount();
});