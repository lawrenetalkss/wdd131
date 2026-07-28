// ========== TEMPLE DATA ARRAY ==========
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-1636397-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416673-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1025609-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 48518,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-910058-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-lds-1294311-wallpaper.jpg"
    },
    {
        templeName: "London England",
        location: "London, England",
        dedicated: "1958, September, 7",
        area: 42000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-714094-wallpaper.jpg"
    },
    {
        templeName: "Nuku'alofa Tonga",
        location: "Nuku'alofa, Tonga",
        dedicated: "1983, August, 9",
        area: 17500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nukualofa-tonga/400x250/nukualofa-tonga-temple-lds-928745-wallpaper.jpg"
    },
    // ADD 3 MORE TEMPLES (13 total)
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 18600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Kyiv Ukraine",
        location: "Kyiv, Ukraine",
        dedicated: "2010, August, 29",
        area: 11850,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-774291-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-99317-wallpaper.jpg"
    }
];

// ========== DOM ELEMENTS ==========
const templeGrid = document.getElementById('temple-grid');

// ========== FOOTER: Current Year ==========
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// ========== FOOTER: Last Modified Date ==========
const lastModifiedElement = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

// ========== DISPLAY TEMPLE CARDS ==========
function displayTemples(templesArray) {
    // Clear the grid
    templeGrid.innerHTML = '';
    
    // Loop through temples and create cards
    templesArray.forEach(temple => {
        // Create figure element
        const figure = document.createElement('figure');
        
        // Create image
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = 'lazy'; // Native lazy loading
        img.width = 400;
        img.height = 250;
        
        // Create figcaption
        const figcaption = document.createElement('figcaption');
        
        // Temple name
        const name = document.createElement('h3');
        name.textContent = temple.templeName;
        
        // Temple details
        const details = document.createElement('div');
        details.className = 'temple-details';
        details.innerHTML = `
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;
        
        // Assemble the card
        figcaption.appendChild(name);
        figcaption.appendChild(details);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        templeGrid.appendChild(figure);
    });
}

// ========== FILTER FUNCTIONS ==========
function filterTemples(filterType) {
    let filtered = [];
    
    switch(filterType) {
        case 'home':
            filtered = temples;
            break;
        case 'old':
            // Temples built before 1900
            filtered = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            break;
        case 'new':
            // Temples built after 2000
            filtered = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            break;
        case 'large':
            // Temples larger than 90,000 sq ft
            filtered = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            // Temples smaller than 10,000 sq ft
            filtered = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filtered = temples;
    }
    
    displayTemples(filtered);
}

// ========== NAVIGATION EVENT LISTENERS ==========
document.getElementById('home').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('home');
});

document.getElementById('old').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('old');
});

document.getElementById('new').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('new');
});

document.getElementById('large').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('large');
});

document.getElementById('small').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('small');
});

// ========== INITIAL DISPLAY ==========
// Display all temples on page load
displayTemples(temples);

// Log for debugging
console.log(`Total temples: ${temples.length}`);
console.log('Temple data loaded successfully!');

// ========== ACTIVE NAVIGATION STATE ==========
function setActiveNav(activeId) {
    // Remove active class from all nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    const activeLink = document.getElementById(activeId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Update the event listeners to include active state
document.getElementById('home').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('home');
    setActiveNav('home');
});

document.getElementById('old').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('old');
    setActiveNav('old');
});

document.getElementById('new').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('new');
    setActiveNav('new');
});

document.getElementById('large').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('large');
    setActiveNav('large');
});

document.getElementById('small').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('small');
    setActiveNav('small');
});

// Set Home as active on page load
setActiveNav('home');