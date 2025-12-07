// ==================== FILE UPLOAD HANDLING ====================
const fileInput = document.getElementById('file-upload');
const fileList = document.getElementById('file-list');
let uploadedFiles = [];

if (fileInput) {
    fileInput.addEventListener('change', handleFileSelect);
}

function handleFileSelect(e) {
    const files = Array.from(e.target.files);

    files.forEach(file => {
        // Check file size (10MB limit)
        if (file.size > 10 * 1024 * 1024) {
            alert(`${file.name} is too large. Maximum file size is 10MB.`);
            return;
        }

        // Add to uploaded files array
        uploadedFiles.push(file);

        // Create file item element
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');
        fileItem.innerHTML = `
            <span class="file-item__name">${file.name} (${formatFileSize(file.size)})</span>
            <span class="file-item__remove" data-filename="${file.name}">Remove</span>
        `;

        fileList.appendChild(fileItem);

        // Add remove handler
        fileItem.querySelector('.file-item__remove').addEventListener('click', function() {
            removeFile(file.name, fileItem);
        });
    });

    // Clear input
    fileInput.value = '';
}

function removeFile(filename, element) {
    uploadedFiles = uploadedFiles.filter(file => file.name !== filename);
    element.remove();
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// ==================== DRAG AND DROP ====================
const fileUploadLabel = document.querySelector('.file-upload-label');

if (fileUploadLabel) {
    fileUploadLabel.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileUploadLabel.style.borderColor = 'var(--color-primary)';
        fileUploadLabel.style.backgroundColor = 'rgba(212, 46, 18, 0.05)';
    });

    fileUploadLabel.addEventListener('dragleave', (e) => {
        e.preventDefault();
        fileUploadLabel.style.borderColor = 'var(--color-border)';
        fileUploadLabel.style.backgroundColor = 'var(--color-background-gray)';
    });

    fileUploadLabel.addEventListener('drop', (e) => {
        e.preventDefault();
        fileUploadLabel.style.borderColor = 'var(--color-border)';
        fileUploadLabel.style.backgroundColor = 'var(--color-background-gray)';

        const files = Array.from(e.dataTransfer.files);

        // Create a new FileList-like object
        const dataTransfer = new DataTransfer();
        files.forEach(file => dataTransfer.items.add(file));
        fileInput.files = dataTransfer.files;

        // Trigger change event
        handleFileSelect({ target: fileInput });
    });
}

// ==================== FORM VALIDATION ====================
const quoteForm = document.getElementById('quote-form');
const contactForm = document.getElementById('contact-form');

if (quoteForm) {
    quoteForm.addEventListener('submit', handleQuoteSubmit);
}

if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
}

function handleQuoteSubmit(e) {
    e.preventDefault();

    // Validate form
    if (!validateQuoteForm()) {
        showError('Please fill in all required fields correctly.');
        return;
    }

    // Show loading state
    const submitBtn = quoteForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Preparing email...';
    submitBtn.disabled = true;

    // Get form data
    const formData = new FormData(quoteForm);

    // Build email content (shorter version to avoid mailto length limits)
    let emailBody = 'QUOTE REQUEST\n\n';
    emailBody += `Contact: ${formData.get('first-name')} ${formData.get('last-name')}\n`;
    emailBody += `Company: ${formData.get('company')}\n`;
    emailBody += `Email: ${formData.get('email')}\n`;
    emailBody += `Phone: ${formData.get('phone')}\n\n`;
    emailBody += `Project: ${formData.get('project-type')}\n`;
    emailBody += `Material: ${formData.get('material') || 'N/A'}\n`;
    emailBody += `Qty: ${formData.get('quantity') || 'N/A'}\n`;
    emailBody += `Timeline: ${formData.get('timeline') || 'N/A'}\n\n`;
    emailBody += `Description:\n${formData.get('description')}`;

    if (uploadedFiles.length > 0) {
        emailBody += `\n\nFiles: ${uploadedFiles.map(f => f.name).join(', ')}`;
    }

    // Create mailto link
    const subject = `Quote: ${formData.get('project-type')} - ${formData.get('company')}`;
    const mailto = `mailto:JonW@CFLmachine.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Try to open email client
    try {
        window.location.href = mailto;
        
        // Show success message after a brief delay
        setTimeout(() => {
            showSuccess('Your email client should open shortly with the quote request. Please send the email to complete your submission.' + (uploadedFiles.length > 0 ? ' Remember to attach your files.' : ''));
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    } catch (error) {
        console.error('Error opening email client:', error);
        showError('Could not open email client. Please email us directly at JonW@CFLmachine.com');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

function handleContactSubmit(e) {
    e.preventDefault();

    // Validate form
    if (!validateContactForm()) {
        showError('Please fill in all required fields correctly.');
        return;
    }

    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Preparing email...';
    submitBtn.disabled = true;

    // Get form data
    const formData = new FormData(contactForm);

    // Build email content (concise version)
    let emailBody = `From: ${formData.get('name')}\n`;
    emailBody += `Email: ${formData.get('email')}\n`;
    emailBody += `Phone: ${formData.get('phone') || 'Not provided'}\n\n`;
    emailBody += `${formData.get('message')}`;

    // Create mailto link
    const subject = `Contact: ${formData.get('subject') || 'General Inquiry'}`;
    const mailto = `mailto:JonW@CFLmachine.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Try to open email client
    try {
        window.location.href = mailto;
        
        // Show success message
        setTimeout(() => {
            showSuccess('Your email client should open shortly. Please send the email to complete your message.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    } catch (error) {
        console.error('Error opening email client:', error);
        showError('Could not open email client. Please email us directly at JonW@CFLmachine.com');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

function validateQuoteForm() {
    const requiredFields = quoteForm.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }

        // Email validation
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                field.classList.add('error');
                isValid = false;
            }
        }

        // Phone validation
        if (field.type === 'tel' && field.value) {
            const phoneRegex = /^[\d\s\-\(\)\+]+$/;
            if (!phoneRegex.test(field.value) || field.value.replace(/\D/g, '').length < 10) {
                field.classList.add('error');
                isValid = false;
            }
        }
    });

    return isValid;
}

function validateContactForm() {
    const requiredFields = contactForm.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }

        // Email validation
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                field.classList.add('error');
                isValid = false;
            }
        }
    });

    return isValid;
}

// ==================== MESSAGES ====================
function showSuccess(message) {
    // Remove existing messages
    removeMessages();

    const successDiv = document.createElement('div');
    successDiv.classList.add('form-success', 'show');
    successDiv.innerHTML = `
        <strong>Success!</strong><br>
        ${message}
    `;

    const form = quoteForm || contactForm;
    form.parentNode.insertBefore(successDiv, form);

    // Auto-hide after 10 seconds
    setTimeout(() => {
        successDiv.classList.remove('show');
        setTimeout(() => successDiv.remove(), 300);
    }, 10000);
}

function showError(message) {
    // Remove existing messages
    removeMessages();

    const errorDiv = document.createElement('div');
    errorDiv.classList.add('form-error', 'show');
    errorDiv.innerHTML = `
        <strong>Error!</strong><br>
        ${message}
    `;

    const form = quoteForm || contactForm;
    form.parentNode.insertBefore(errorDiv, form);

    // Auto-hide after 8 seconds
    setTimeout(() => {
        errorDiv.classList.remove('show');
        setTimeout(() => errorDiv.remove(), 300);
    }, 8000);
}

function removeMessages() {
    document.querySelectorAll('.form-success, .form-error').forEach(el => el.remove());
}

// ==================== REAL-TIME VALIDATION ====================
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }

        // Email validation
        if (this.type === 'email' && this.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value)) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        }

        // Phone validation
        if (this.type === 'tel' && this.value) {
            const phoneRegex = /^[\d\s\-\(\)\+]+$/;
            if (!phoneRegex.test(this.value) || this.value.replace(/\D/g, '').length < 10) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        }
    });

    input.addEventListener('input', function() {
        if (this.classList.contains('error') && this.value.trim()) {
            this.classList.remove('error');
        }
    });
});

// ==================== PHONE NUMBER FORMATTING ====================
const phoneInputs = document.querySelectorAll('input[type="tel"]');

phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 10) {
            value = value.slice(0, 10);
        }

        if (value.length >= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
        } else if (value.length >= 3) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        }

        e.target.value = value;
    });
});

console.log('Form scripts loaded successfully!');
