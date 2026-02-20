// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    // Form validation
    function validateForm() {
        let isValid = true;
        const errors = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

        // Name validation
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            errors.name = 'Name is required';
            isValid = false;
        } else if (name.length < 2) {
            errors.name = 'Name must be at least 2 characters';
            isValid = false;
        }

        // Email validation
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // Subject validation
        const subject = document.getElementById('subject').value.trim();
        if (subject === '') {
            errors.subject = 'Subject is required';
            isValid = false;
        } else if (subject.length < 5) {
            errors.subject = 'Subject must be at least 5 characters';
            isValid = false;
        }

        // Message validation
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            errors.message = 'Message is required';
            isValid = false;
        } else if (message.length < 10) {
            errors.message = 'Message must be at least 10 characters';
            isValid = false;
        }

        // Display errors
        Object.keys(errors).forEach(field => {
            const errorElement = document.getElementById(field + 'Error');
            if (errors[field]) {
                errorElement.textContent = errors[field];
                errorElement.style.display = 'block';
            } else {
                errorElement.style.display = 'none';
            }
        });

        return isValid;
    }

    // Real-time validation
    const inputs = ['name', 'email', 'subject', 'message'];
    inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        input.addEventListener('blur', function() {
            validateForm();
        });
        input.addEventListener('input', function() {
            const errorElement = document.getElementById(inputId + 'Error');
            if (errorElement.style.display === 'block') {
                validateForm();
            }
        });
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Prepare form data
            const formData = new FormData(contactForm);

            // Send email using Formspree (you need to replace 'your-form-id' with actual Formspree form ID)
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Success
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                } else {
                    // Error
                    alert('Oops! There was a problem sending your message. Please try again or contact us directly at info@paf-iast.edu.pk');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Oops! There was a problem sending your message. Please try again or contact us directly at info@paf-iast.edu.pk');
            })
            .finally(() => {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature, .stat, .country').forEach(el => {
        observer.observe(el);
    });
});

// Add some CSS animations
const style = document.createElement('style');
style.textContent = `
    .feature, .stat, .country {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .feature.animate, .stat.animate, .country.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);