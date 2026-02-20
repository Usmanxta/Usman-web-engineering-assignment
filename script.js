// Contact form handling and validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    // Simple form validation function
    function checkForm() {
        let allGood = true;
        const errorMessages = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

        // Check name field
        const nameInput = document.getElementById('name').value.trim();
        if (nameInput === '') {
            errorMessages.name = 'Please enter your name';
            allGood = false;
        } else if (nameInput.length < 2) {
            errorMessages.name = 'Name should be at least 2 characters';
            allGood = false;
        }

        // Check email field
        const emailInput = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput === '') {
            errorMessages.email = 'Email is required';
            allGood = false;
        } else if (!emailPattern.test(emailInput)) {
            errorMessages.email = 'Please enter a valid email';
            allGood = false;
        }

        // Check subject field
        const subjectInput = document.getElementById('subject').value.trim();
        if (subjectInput === '') {
            errorMessages.subject = 'Subject is required';
            allGood = false;
        } else if (subjectInput.length < 5) {
            errorMessages.subject = 'Subject should be longer';
            allGood = false;
        }

        // Check message field
        const messageInput = document.getElementById('message').value.trim();
        if (messageInput === '') {
            errorMessages.message = 'Please write a message';
            allGood = false;
        } else if (messageInput.length < 10) {
            errorMessages.message = 'Message should be at least 10 characters';
            allGood = false;
        }

        // Show or hide error messages
        Object.keys(errorMessages).forEach(fieldName => {
            const errorDiv = document.getElementById(fieldName + 'Error');
            if (errorMessages[fieldName]) {
                errorDiv.textContent = errorMessages[fieldName];
                errorDiv.style.display = 'block';
            } else {
                errorDiv.style.display = 'none';
            }
        });

        return allGood;
    }

    // Add validation on input change
    const formFields = ['name', 'email', 'subject', 'message'];
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        field.addEventListener('blur', function() {
            checkForm();
        });
        field.addEventListener('input', function() {
            const errorDiv = document.getElementById(fieldId + 'Error');
            if (errorDiv.style.display === 'block') {
                checkForm();
            }
        });
    });

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (checkForm()) {
            // Change button text while sending
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Get form data
            const formData = new FormData(contactForm);

            // Send the form data
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Success message
                    alert('Thanks for your message! We will get back to you soon.');
                    contactForm.reset();
                } else {
                    // Error message
                    alert('Sorry, there was a problem sending your message. Please try again or email us directly.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Sorry, there was a problem sending your message. Please try again or email us directly.');
            })
            .finally(() => {
                // Reset button
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
        }
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add some animation effects
    const observerSettings = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerSettings);

    // Add animation to these elements
    document.querySelectorAll('.feature, .stat, .country, .gallery-item').forEach(element => {
        observer.observe(element);
    });
});

// Add some basic CSS animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .feature, .stat, .country, .gallery-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
    }

    .feature.show, .stat.show, .country.show, .gallery-item.show {
        opacity: 1;
        transform: translateY(0);
    }

    .hero-img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
`;
document.head.appendChild(animationStyles);