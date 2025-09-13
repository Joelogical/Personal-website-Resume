// ==================================
// SMOOTH SCROLLING FOR NAVIGATION
// ==================================

// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add smooth scrolling to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the default jump behavior
            e.preventDefault();
            
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // If the section exists, scroll to it smoothly
            if (targetSection) {
                // Calculate the position to scroll to (accounting for fixed navbar)
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                // Smooth scroll to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==================================
// NAVBAR BACKGROUND ON SCROLL
// ==================================

// Change navbar appearance when scrolling
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // If we've scrolled more than 50 pixels from the top
    if (window.scrollY > 50) {
        // Make the navbar more opaque
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    } else {
        // Return to original background
        navbar.style.backgroundColor = '#2c3e50';
    }
});

// ==================================
// SIMPLE FADE-IN ANIMATION
// ==================================

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add fade-in effect to elements
function fadeInElements() {
    const elements = document.querySelectorAll('.resume-item, .project-card, .contact-item');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set up initial styles for fade-in elements
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.resume-item, .project-card, .contact-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check for elements to fade in on page load
    fadeInElements();
});

// Check for elements to fade in when scrolling
window.addEventListener('scroll', fadeInElements);

// ==================================
// CONTACT FORM FUNCTIONALITY (OPTIONAL)
// ==================================

// If you add a contact form later, you can use this function
function handleContactForm() {
    const form = document.querySelector('#contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // You can replace this with actual form submission logic
            alert('Thank you for your message! I\'ll get back to you soon.');
            form.reset();
        });
    }
}

// Call the contact form function when the page loads
document.addEventListener('DOMContentLoaded', handleContactForm);

// ==================================
// UTILITY FUNCTIONS
// ==================================

// Function to update the current year in the footer
function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer p');
    
    if (yearElement) {
        yearElement.innerHTML = `&copy; ${currentYear} Joel Smith. All rights reserved.`;
    }
}

// Update the year when the page loads
document.addEventListener('DOMContentLoaded', updateCurrentYear);

// ==================================
// MOBILE MENU TOGGLE (FOR FUTURE USE)
// ==================================

// If you want to add a mobile hamburger menu later, use this function
function setupMobileMenu() {
    // This is a placeholder for when you want to add mobile menu functionality
    // You would add a hamburger button to your HTML and use this to toggle the menu
    
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// ==================================
// CONSOLE MESSAGE FOR DEVELOPERS
// ==================================

// A fun message for anyone who checks the console
console.log(`
🎉 Welcome to Joel Smith's Portfolio!
🔧 This website is built with vanilla HTML, CSS, and JavaScript.
📧 Interested in working together? Reach out through the contact section!
`);

// ==================================
// PERFORMANCE AND ACCESSIBILITY
// ==================================

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}