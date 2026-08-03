/* ============================================================
   script.js – Product Review Form
   ============================================================ */

(function() {
    'use strict';

    // ----- product data -----
    const products = [
        { name: 'EcoClean 3000' },
        { name: 'SmartTrack Pro' },
        { name: 'AquaPure Filter' },
        { name: 'VoltCharge Hub' },
        { name: 'LuminaGlow Lamp' },
        { name: 'SafeGuard Lock' }
    ];

    // ----- 1. populate product <select> -----
    const selectEl = document.getElementById('productSelect');
    if (selectEl) {
        // Clear placeholder options
        selectEl.innerHTML = '';
        
        // Add placeholder option
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.disabled = true;
        placeholder.selected = true;
        placeholder.textContent = 'Select a Product …';
        selectEl.appendChild(placeholder);
        
        // Add product options
        products.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.name;
            opt.textContent = p.name;
            selectEl.appendChild(opt);
        });
    }

    // ----- 2. populate rating (radio buttons, name="rating", required) -----
    const ratingContainer = document.getElementById('ratingGroup');
    if (ratingContainer) {
        ratingContainer.innerHTML = '';
        
        // ✅ FIX: Generate exactly 5 radio buttons
        const ratings = [
            { value: 1, label: '★☆☆☆☆' },
            { value: 2, label: '★★☆☆☆' },
            { value: 3, label: '★★★☆☆' },
            { value: 4, label: '★★★★☆' },
            { value: 5, label: '★★★★★' }
        ];
        
        ratings.forEach(r => {
            const wrapper = document.createElement('span');
            wrapper.className = 'rating-option';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'rating';       // same name for all → group
            radio.id = `rating${r.value}`;
            radio.value = r.value;
            radio.required = true;

            const label = document.createElement('label');
            label.htmlFor = `rating${r.value}`;
            label.className = 'star-label';
            label.textContent = r.label;

            wrapper.appendChild(radio);
            wrapper.appendChild(label);
            ratingContainer.appendChild(wrapper);
        });
    }

    // ----- 3. populate feature checkboxes (4 checkboxes) -----
    const featureContainer = document.getElementById('featureCheckboxes');
    if (featureContainer) {
        // ✅ FIX: Generate exactly 4 checkboxes
        const features = [
            { id: 'featDurability', name: 'Durability', value: 'durability' },
            { id: 'featEase', name: 'Ease of Use', value: 'ease' },
            { id: 'featPerformance', name: 'Performance', value: 'performance' },
            { id: 'featDesign', name: 'Design', value: 'design' }
        ];
        
        featureContainer.innerHTML = '';
        features.forEach(f => {
            const wrapper = document.createElement('span');
            wrapper.className = 'checkbox-item';

            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.id = f.id;
            cb.name = 'features';
            cb.value = f.value;

            const label = document.createElement('label');
            label.htmlFor = f.id;
            label.textContent = f.name;

            wrapper.appendChild(cb);
            wrapper.appendChild(label);
            featureContainer.appendChild(wrapper);
        });
    }

    // ----- 4. set default date to today -----
    const dateInput = document.getElementById('installDate');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.value = `${yyyy}-${mm}-${dd}`;
    }

    // ----- 5. update last modified in footer -----
    const lastModified = document.getElementById('lastModified');
    if (lastModified) {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        };
        lastModified.textContent = `Last Modified: ${now.toLocaleString('en-US', options)}`;
    }

    // ----- 6. form validation on submit -----
    const form = document.getElementById('reviewForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Check if a rating is selected
            const ratingSelected = document.querySelector('input[name="rating"]:checked');
            if (!ratingSelected) {
                e.preventDefault();
                alert('Please select a rating before submitting.');
                return;
            }
            
            // Check if product is selected
            const product = document.getElementById('productSelect');
            if (!product.value) {
                e.preventDefault();
                alert('Please select a product before submitting.');
                return;
            }
            
            // Check if date is selected
            const date = document.getElementById('installDate');
            if (!date.value) {
                e.preventDefault();
                alert('Please select the date of installation.');
                return;
            }
            
            // Form is valid - it will submit to review.html
            console.log('Form submitted successfully!');
        });
    }

    console.log('✅ Product review form ready.');
    console.log(`📦 ${products.length} products loaded`);
    console.log('⭐ 5 rating options available');
    console.log('✅ 4 feature checkboxes available');
})();