// ========== DOM ELEMENTS ==========
const templeGrid = document.getElementById('temple-grid');
const allFigures = templeGrid.querySelectorAll('figure');

// ========== FOOTER: Current Year ==========
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// ========== FOOTER: Last Modified Date ==========
const lastModifiedElement = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

// ========== UPDATE FILTER STATUS ==========
function updateFilterStatus(filterName, count) {
    const filterStatus = document.getElementById('current-filter');
    const countStatus = document.getElementById('temple-count');
    
    if (filterStatus) {
        filterStatus.textContent = filterName;
    }
    if (countStatus) {
        countStatus.textContent = `(${count} temples)`;
    }
}

// ========== SET ACTIVE NAV ==========
function setActiveNav(activeId) {
    // Remove active class from all nav links
    document.querySelectorAll('nav a:not(#home-page)').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    const activeLink = document.getElementById(activeId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// ========== FILTER TEMPLES ==========
function filterTemples(filterType) {
    let visibleCount = 0;
    let filterName = '';
    
    allFigures.forEach(figure => {
        const category = figure.dataset.category || '';
        const area = parseInt(figure.dataset.area);
        const year = parseInt(figure.dataset.year);
        let show = false;
        
        switch(filterType) {
            case 'home':
                show = true;
                filterName = 'All Temples';
                break;
            case 'old':
                show = year < 1900;
                filterName = 'Old (pre-1900)';
                break;
            case 'new':
                show = year > 2000;
                filterName = 'New (post-2000)';
                break;
            case 'large':
                show = area > 90000;
                filterName = 'Large (> 90,000 sq ft)';
                break;
            case 'small':
                show = area < 10000;
                filterName = 'Small (< 10,000 sq ft)';
                break;
            default:
                show = true;
                filterName = 'All Temples';
        }
        
        // Apply filter
        if (show) {
            figure.style.display = 'block';
            visibleCount++;
        } else {
            figure.style.display = 'none';
        }
    });
    
    // Update status
    updateFilterStatus(filterName, visibleCount);
    
    // Show message if no results
    const noResults = document.querySelector('.no-results');
    if (visibleCount === 0) {
        if (!noResults) {
            const message = document.createElement('div');
            message.className = 'no-results';
            message.innerHTML = `
                <p>😊 No temples match this filter criteria.</p>
                <p>Try selecting a different filter.</p>
            `;
            templeGrid.appendChild(message);
        }
    } else {
        if (noResults) {
            noResults.remove();
        }
    }
}

// ========== NAVIGATION EVENT LISTENERS ==========
// Home page link - goes to index.html
document.getElementById('home-page')?.addEventListener('click', function(e) {
    // This is a regular link to index.html
    // No preventDefault needed
});

document.getElementById('filter-home').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('home');
    setActiveNav('filter-home');
});

document.getElementById('filter-old').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('old');
    setActiveNav('filter-old');
});

document.getElementById('filter-new').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('new');
    setActiveNav('filter-new');
});

document.getElementById('filter-large').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('large');
    setActiveNav('filter-large');
});

document.getElementById('filter-small').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('small');
    setActiveNav('filter-small');
});

// ========== INITIAL DISPLAY ==========
// Show all temples on page load
filterTemples('home');
// Set Home as active on page load
setActiveNav('filter-home');

// ========== LOG FOR DEBUGGING ==========
console.log(`Total temples: ${allFigures.length}`);
console.log('Temple data loaded successfully!');