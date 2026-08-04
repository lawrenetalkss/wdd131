/* ============================================================
   contact.js – Lagos Island Heritage Contact
   ============================================================ */

// ========== VALIDATE EMAIL ==========
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ========== HANDLE CONTACT FORM ==========
function handleContactForm(event) {
    event.preventDefault();
    
    // DOM interaction - selecting elements
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const phoneInput = document.getElementById('contact-phone');
    const newsletterCheckbox = document.getElementById('contact-newsletter');
    
    // Get values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim() || 'General Inquiry';
    const message = messageInput.value.trim();
    const phone = phoneInput.value.trim();
    const newsletter = newsletterCheckbox ? newsletterCheckbox.checked : false;
    
    // Use conditional branching
    if (!name) {
        showNotification('Please enter your name.', 'error');
        nameInput.focus();
        return;
    }
    
    if (!email) {
        showNotification('Please enter your email address.', 'error');
        emailInput.focus();
        return;
    }
    
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        emailInput.focus();
        return;
    }
    
    if (!message || message.length < 10) {
        showNotification('Please enter a message (minimum 10 characters).', 'error');
        messageInput.focus();
        return;
    }
    
    // Create contact data object
    const contactData = {
        id: Date.now(),
        name: name,
        email: email,
        subject: subject,
        message: message,
        phone: phone,
        newsletter: newsletter,
        timestamp: new Date().toISOString(),
        status: 'new'
    };
    
    // Save to localStorage
    let messages = getFromLocalStorage('contactMessages') || [];
    messages.push(contactData);
    saveToLocalStorage('contactMessages', messages);
    
    // Show success message
    showNotification('✅ Thank you for your message! We\'ll get back to you soon.', 'success');
    
    // Reset form - DOM modification
    form.reset();
    
    console.log('📧 Contact message saved:', contactData);
}

// ========== DISPLAY CONTACT MESSAGES ==========
function displayContactMessages() {
    const container = document.getElementById('messages-container');
    if (!container) return;
    
    const messages = getFromLocalStorage('contactMessages') || [];
    
    container.innerHTML = '';
    
    if (messages.length === 0) {
        container.innerHTML = `
            <div class="no-messages">
                <p>📭 No messages yet.</p>
            </div>
        `;
        return;
    }
    
    // Use array method forEach and reverse
    messages.reverse().forEach(message => {
        const card = document.createElement('div');
        card.className = 'message-card';
        
        // Use template literal
        card.innerHTML = `
            <div class="message-header">
                <strong>${message.name}</strong>
                <span class="message-date">${new Date(message.timestamp).toLocaleDateString()}</span>
            </div>
            <div class="message-body">
                <p><strong>Email:</strong> ${message.email}</p>
                <p><strong>Subject:</strong> ${message.subject}</p>
                <p>${message.message}</p>
                ${message.phone ? `<p><strong>Phone:</strong> ${message.phone}</p>` : ''}
                ${message.newsletter ? `<p><strong>Newsletter:</strong> ✅ Subscribed</p>` : ''}
            </div>
        `;
        
        container.appendChild(card);
    });
}

// ========== UPDATE MESSAGE COUNT ==========
function updateMessageCount() {
    const countElement = document.getElementById('message-count');
    if (!countElement) return;
    
    const messages = getFromLocalStorage('contactMessages') || [];
    countElement.textContent = messages.length;
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    // Set up contact form with event listener
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Display messages if on admin page
    if (document.getElementById('messages-container')) {
        displayContactMessages();
        updateMessageCount();
    }
});