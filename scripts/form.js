/* ============================================================
   script.js – Product Review Form
   ============================================================ */

(function() {
  'use strict';

  // ----- product data (as specified) -----
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
    for (let i = 1; i <= 5; i++) {
      const wrapper = document.createElement('span');
      wrapper.className = 'rating-option';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'rating';       // same name for all → group
      radio.id = `rating${i}`;
      radio.value = i;
      radio.required = true;

      const label = document.createElement('label');
      label.htmlFor = `rating${i}`;
      label.className = 'star-label';
      const filled = '★'.repeat(i);
      const empty = '☆'.repeat(5 - i);
      label.textContent = filled + empty;

      wrapper.appendChild(radio);
      wrapper.appendChild(label);
      ratingContainer.appendChild(wrapper);
    }
  }

  // ----- 3. populate feature checkboxes -----
  const featureContainer = document.getElementById('featureCheckboxes');
  if (featureContainer) {
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

  console.log('✅ Product review form ready.');
})();