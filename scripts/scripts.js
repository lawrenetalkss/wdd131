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
        // Clear existing options
        selectEl.innerHTML = '';
        
        // Add placeholder option
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.disabled = true;
        placeholder.selected = true;
        placeholder.textContent = 'Select a Product …';
        selectEl.appendChild(placeholder);
        
        // Add product options
        products.forEach(function(p) {
            const opt = document.createElement('option');
            opt.value = p.name;
            opt.textContent = p.name;
            selectEl.appendChild(opt);
        });
    }

    // ----- 2. set default date to today -----
    var dateInput = document.getElementById('installDate');
    if (dateInput) {
        var today = new Date();
        var yyyy = today.getFullYear();
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var dd = String(today.getDate()).padStart(2, '0');
        dateInput.value = yyyy + '-' + mm + '-' + dd;
    }

    // ----- 3. update last modified in footer -----
    var lastModified = document.getElementById('lastModified');
    if (lastModified) {
        var now = new Date();
        var dateStr = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        var timeStr = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
        lastModified.textContent = 'Last Modified: ' + dateStr + ' ' + timeStr;
    }

    // ----- 4. form validation on submit -----
    var form = document.getElementById('reviewForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Check if a rating is selected
            var ratingSelected = document.querySelector('input[name="rating"]:checked');
            if (!ratingSelected) {
                e.preventDefault();
                alert('Please select a rating before submitting.');
                return;
            }
            
            // Check if product is selected
            var product = document.getElementById('productSelect');
            if (!product.value) {
                e.preventDefault();
                alert('Please select a product before submitting.');
                return;
            }
            
            // Check if date is selected
            var date = document.getElementById('installDate');
            if (!date.value) {
                e.preventDefault();
                alert('Please select the date of installation.');
                return;
            }
            
            // Check if at least one feature is selected
            var featuresSelected = document.querySelectorAll('input[name="features"]:checked');
            if (featuresSelected.length === 0) {
                e.preventDefault();
                alert('Please select at least one useful feature.');
                return;
            }
            
            // Form is valid - it will submit to review.html
            console.log('Form submitted successfully!');
            console.log('Selected features:', featuresSelected.length);
            
            // Show success message
            alert('✅ Thank you for your review!');
        });
    }

    // ----- 5. Log success messages -----
    console.log('✅ Product review form ready.');
    console.log('📦 ' + products.length + ' products loaded');
    
    var radios = document.querySelectorAll('input[name="rating"]');
    console.log('⭐ ' + radios.length + ' rating options available');
    
    var checkboxes = document.querySelectorAll('input[name="features"]');
    console.log('✅ ' + checkboxes.length + ' feature checkboxes available');

    // ----- 6. Verify all required elements exist -----
    var requiredElements = {
        'Product Select': document.getElementById('productSelect'),
        'Rating Group': document.getElementById('ratingGroup'),
        'Date Input': document.getElementById('installDate'),
        'Review Text': document.getElementById('reviewText'),
        'User Name': document.getElementById('userName')
    };
    
    console.log('📋 Form elements status:');
    for (var key in requiredElements) {
        if (requiredElements.hasOwnProperty(key)) {
            var element = requiredElements[key];
            console.log('  ' + key + ': ' + (element ? '✅ Found' : '❌ Missing'));
        }
    }
})();