/* ============================================================
   landmarks.js – Lagos Island Heritage Landmarks
   ============================================================ */

// ========== LANDMARKS DATA ==========
const landmarks = [
    {
        id: 1,
        name: 'Cathedral Church of Christ',
        location: 'Marina, Lagos Island',
        year: '1867',
        style: 'Colonial',
        styleCategory: 'colonial',
        era: 'Pre-Independence',
        description: 'The Cathedral Church of Christ is one of the oldest Anglican cathedrals in Nigeria. Built in the Neo-Gothic style, it stands as a testament to the British colonial influence on Lagos architecture.',
        history: 'Construction began in 1867 and was completed in 1894. The cathedral has survived two major fires and remains an active place of worship. Its stained glass windows depict scenes from the Bible and the history of Christianity in Nigeria.',
        architect: 'William Smith',
        originalPurpose: 'Anglican Cathedral',
        currentPurpose: 'Active Church and Tourist Attraction',
        image: 'images/cathedral-church-christ.jpg'
    },
    {
        id: 2,
        name: 'Freedom Park',
        location: 'Broad Street, Lagos Island',
        year: '1885',
        style: 'Colonial',
        styleCategory: 'colonial',
        era: 'Pre-Independence',
        description: 'Freedom Park was originally the Broad Street Prison, built during the colonial era. Today, it has been transformed into a memorial park and cultural center.',
        history: 'The prison operated from 1885 until 1979. During Nigeria\'s independence movement, it held many political prisoners. In 2010, it was redeveloped as a memorial park celebrating Nigeria\'s journey to freedom.',
        architect: 'Unknown',
        originalPurpose: 'Prison',
        currentPurpose: 'Memorial Park and Cultural Center',
        image: 'images/freedom-park.jpg'
    },
    {
        id: 3,
        name: 'Nigerian Railway Corporation Headquarters',
        location: 'Ebute Metta, Lagos Island',
        year: '1900',
        style: 'Colonial',
        styleCategory: 'colonial',
        era: 'Pre-Independence',
        description: 'This imposing colonial-era building served as the headquarters of the Nigerian Railway Corporation, reflecting the importance of rail transport in Nigeria\'s development.',
        history: 'Built during the colonial period, the building features Victorian architectural elements. It played a crucial role in the development of Nigeria\'s railway system, which connected the north and south of the country.',
        architect: 'British Colonial Engineers',
        originalPurpose: 'Railway Headquarters',
        currentPurpose: 'Railway Museum and Offices',
        image: 'images/nigerian-railway-corporation.jpg'
    },
    {
        id: 4,
        name: 'Old Supreme Court Building',
        location: 'Marina, Lagos Island',
        year: '1936',
        style: 'Colonial',
        styleCategory: 'colonial',
        era: 'Pre-Independence',
        description: 'The Old Supreme Court Building is a fine example of colonial-era architecture, featuring neoclassical design elements. It served as the highest court in Nigeria.',
        history: 'Built in 1936, it served as the Supreme Court of Nigeria until 1991 when the capital moved to Abuja. The building now houses the Lagos State Judiciary.',
        architect: 'British Colonial Architects',
        originalPurpose: 'Supreme Court',
        currentPurpose: 'Lagos State Judiciary Building',
        image: 'images/old-supreme-court.jpg'
    },
    {
        id: 5,
        name: 'Tafawa Balewa Square',
        location: 'Lagos Island',
        year: '1960',
        style: 'Modernist',
        styleCategory: 'modernist',
        era: 'Post-Independence',
        description: 'Tafawa Balewa Square is a significant modernist landmark built to celebrate Nigeria\'s independence. It has been the site of major national events and celebrations.',
        history: 'Named after Nigeria\'s first Prime Minister, Sir Abubakar Tafawa Balewa, the square was built in 1960 to mark independence. The iconic lamp posts and viewing stands are symbols of Nigeria\'s post-independence optimism.',
        architect: 'Unknown',
        originalPurpose: 'Independence Celebration Ground',
        currentPurpose: 'Event Ground and Tourist Site',
        image: 'images/tafawa-balewa-square.jpg'
    },
    {
        id: 6,
        name: 'Brazilian Baracoon',
        location: 'Marina, Lagos Island',
        year: '1850',
        style: 'Afro-Brazilian',
        styleCategory: 'afro-brazilian',
        era: 'Pre-Independence',
        description: 'The Brazilian Baracoon is a historic building that served as a slave trade depot. Its architecture reflects the Afro-Brazilian style brought by freed slaves returning to Nigeria.',
        history: 'Built in the 1850s, this building was used as a baracoon (slave depot) where enslaved people were held before being transported. It now serves as a powerful reminder of Nigeria\'s role in the transatlantic slave trade.',
        architect: 'Afro-Brazilian Returnees',
        originalPurpose: 'Slave Trade Depot',
        currentPurpose: 'Historical Monument and Museum',
        image: 'images/brazilian-baracoon.jpg'
    }
];

// ========== DOM ELEMENTS ==========
const landmarksContainer = document.getElementById('landmarks-container');
const featuredContainer = document.getElementById('featured-container');

// ========== DISPLAY LANDMARKS ==========
function displayLandmarks(landmarksArray) {
    if (!landmarksContainer) return;
    
    landmarksContainer.innerHTML = '';
    
    if (landmarksArray.length === 0) {
        landmarksContainer.innerHTML = `
            <div class="no-results">
                <p>😊 No landmarks match this filter criteria.</p>
                <p>Try selecting a different filter.</p>
            </div>
        `;
        return;
    }
    
    // Use array method forEach
    landmarksArray.forEach(landmark => {
        const card = document.createElement('div');
        card.className = 'landmark-card';
        card.setAttribute('data-id', landmark.id);
        card.setAttribute('data-style', landmark.styleCategory);
        
        // Use template literals exclusively
        card.innerHTML = `
            <div class="landmark-image">
                <img src="${landmark.image}" 
                     alt="${landmark.name}" 
                     loading="lazy"
                     onerror="this.src='https://picsum.photos/seed/${landmark.id}/400/250'">
                <span class="landmark-style">${landmark.style}</span>
                <span class="landmark-era">${landmark.era}</span>
            </div>
            <div class="landmark-content">
                <h3>${landmark.name}</h3>
                <p class="location">📍 ${landmark.location}</p>
                <p class="year">📅 Built: ${landmark.year}</p>
                <p class="description">${landmark.description}</p>
                <div class="landmark-details">
                    <p><strong>Architect:</strong> ${landmark.architect}</p>
                    <p><strong>Original Purpose:</strong> ${landmark.originalPurpose}</p>
                    <p><strong>Current Purpose:</strong> ${landmark.currentPurpose}</p>
                </div>
                <button class="btn-show-more" onclick="toggleHistory(${landmark.id})">
                    📖 Show More History
                </button>
                <div id="history-${landmark.id}" class="history-content" style="display:none;">
                    <p>${landmark.history}</p>
                </div>
                <button class="btn-save" onclick="saveLandmark(${landmark.id})">
                    ❤️ Save to Favorites
                </button>
            </div>
        `;
        
        landmarksContainer.appendChild(card);
    });
    
    updateResultCount(landmarksArray.length);
}

// ========== DISPLAY FEATURED LANDMARKS (Home Page) ==========
function displayFeaturedLandmarks() {
    if (!featuredContainer) return;
    
    // Use array method slice and filter
    const featured = landmarks.slice(0, 3);
    
    featuredContainer.innerHTML = '';
    
    featured.forEach(landmark => {
        const card = document.createElement('div');
        card.className = 'featured-card';
        
        card.innerHTML = `
            <div class="featured-image">
                <img src="${landmark.image}" 
                     alt="${landmark.name}" 
                     loading="lazy"
                     onerror="this.src='https://picsum.photos/seed/${landmark.id}/400/250'">
            </div>
            <div class="featured-content">
                <h3>${landmark.name}</h3>
                <p>${landmark.description.substring(0, 100)}...</p>
                <span class="featured-style">${landmark.style}</span>
                <a href="landmarks.html" class="btn-small">Learn More</a>
            </div>
        `;
        
        featuredContainer.appendChild(card);
    });
}

// ========== TOGGLE HISTORY ==========
function toggleHistory(landmarkId) {
    const historyElement = document.getElementById(`history-${landmarkId}`);
    const button = document.querySelector(`.landmark-card[data-id="${landmarkId}"] .btn-show-more`);
    
    if (historyElement) {
        // Use conditional branching
        if (historyElement.style.display === 'none') {
            historyElement.style.display = 'block';
            if (button) {
                button.textContent = '📕 Show Less History';
            }
        } else {
            historyElement.style.display = 'none';
            if (button) {
                button.textContent = '📖 Show More History';
            }
        }
    }
}

// ========== UPDATE RESULT COUNT ==========
function updateResultCount(count) {
    const countElement = document.getElementById('result-count');
    const filterText = document.getElementById('filter-text');
    
    if (countElement) {
        countElement.textContent = `(${count} landmarks)`;
    }
    
    if (filterText) {
        const activeFilter = document.querySelector('.filter-btn.active');
        if (activeFilter) {
            const filterNames = {
                'all': 'All Landmarks',
                'colonial': 'Colonial Architecture',
                'afro-brazilian': 'Afro-Brazilian Architecture',
                'modernist': 'Modernist Architecture'
            };
            filterText.textContent = filterNames[activeFilter.dataset.filter] || 'All Landmarks';
        }
    }
}

// ========== FILTER LANDMARKS ==========
function filterLandmarks(filterType) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        }
    });
    
    // Use array method filter
    let filtered = landmarks;
    if (filterType !== 'all') {
        filtered = landmarks.filter(l => l.styleCategory === filterType);
    }
    
    displayLandmarks(filtered);
}

// ========== SEARCH LANDMARKS ==========
function searchLandmarks() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        filterLandmarks('all');
        return;
    }
    
    // Use array method filter with multiple conditions
    const filtered = landmarks.filter(l => 
        l.name.toLowerCase().includes(searchTerm) ||
        l.location.toLowerCase().includes(searchTerm) ||
        l.style.toLowerCase().includes(searchTerm) ||
        l.description.toLowerCase().includes(searchTerm) ||
        l.history.toLowerCase().includes(searchTerm)
    );
    
    displayLandmarks(filtered);
}

// ========== SAVE LANDMARK TO FAVORITES ==========
function saveLandmark(landmarkId) {
    // Use array method find
    const landmark = landmarks.find(l => l.id === landmarkId);
    if (!landmark) return;
    
    let favorites = getFromLocalStorage('favorites') || [];
    
    // Use array method some to check if exists
    if (favorites.some(fav => fav.id === landmarkId)) {
        showNotification('❌ This landmark is already in your favorites!', 'error');
        return;
    }
    
    favorites.push(landmark);
    saveToLocalStorage('favorites', favorites);
    
    showNotification(`✅ ${landmark.name} has been added to your favorites!`, 'success');
    updateFavoritesCount();
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    // Display on landmarks page
    if (landmarksContainer) {
        displayLandmarks(landmarks);
    }
    
    // Display featured on home page
    if (featuredContainer) {
        displayFeaturedLandmarks();
    }
});