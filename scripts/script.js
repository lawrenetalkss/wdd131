(function() {
    'use strict';

    // ----- product data -----
    var products = [
        { name: 'EcoClean 3000' },
        { name: 'SmartTrack Pro' },
        { name: 'AquaPure Filter' },
        { name: 'VoltCharge Hub' },
        { name: 'LuminaGlow Lamp' },
        { name: 'SafeGuard Lock' }
    ];

    // ----- 1. populate product <select> -----
    var selectEl = document.getElementById('productSelect');
    if (selectEl) {
        selectEl.innerHTML = '';
        
        var placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.disabled = true;
        placeholder.selected = true;
        placeholder.textContent = 'Select a Product …';
        selectEl.appendChild(placeholder);
        
        products.forEach(function(p) {
            var opt = document.createElement('option');
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

    // ----- 4. Handle checkbox required validation -----
    var checkboxes = document.querySelectorAll('input[name="features"]');
    if (checkboxes.length > 0) {
        checkboxes.forEach(function(cb) {
            cb.addEventListener('change', function() {
                var checked = document.querySelectorAll('input[name="features"]:checked');
                checkboxes.forEach(function(c) {
                    if (checked.length > 0) {
                        c.removeAttribute('required');
                        c.removeAttribute('aria-required');
                    } else {
                        checkboxes[0].setAttribute('required', 'required');
                        checkboxes[0].setAttribute('aria-required', 'true');
                    }
                });
            });
        });
    }

    // ----- 5. Handle form submission with localStorage -----
    var form = document.getElementById('reviewForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Use HTML5 validation
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            // Get form data
            var formData = {
                product: document.getElementById('productSelect').value,
                rating: document.querySelector('input[name="rating"]:checked') ? 
                    document.querySelector('input[name="rating"]:checked').value : '',
                installDate: document.getElementById('installDate').value,
                features: Array.from(document.querySelectorAll('input[name="features"]:checked'))
                    .map(function(cb) { return cb.value; }),
                review: document.getElementById('reviewText').value,
                userName: document.getElementById('userName').value || 'Anonymous',
                timestamp: new Date().toISOString()
            };

            // ✅ Save to localStorage
            var reviews = JSON.parse(localStorage.getItem('productReviews') || '[]');
            reviews.push(formData);
            localStorage.setItem('productReviews', JSON.stringify(reviews));

            // ✅ Store the review count for display on review.html
            localStorage.setItem('reviewCount', reviews.length);
            localStorage.setItem('lastReviewId', reviews.length - 1);

            // Redirect to review.html
            window.location.href = 'review.html';

            console.log('✅ Review saved to localStorage!');
            console.log('📝 Total reviews:', reviews.length);
        });
    }

    // ----- 6. Log startup messages -----
    console.log('✅ Product review form ready.');
    console.log('📦 ' + products.length + ' products loaded');
    
    var radios = document.querySelectorAll('input[name="rating"]');
    console.log('⭐ ' + radios.length + ' rating options available');
    
    console.log('✅ ' + checkboxes.length + ' feature checkboxes available');

})();