// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        if (body.getAttribute('data-theme') === 'dark') {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
        }
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        if (body.getAttribute('data-theme') === 'dark') {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        }
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Gallery Tab Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-tab');
        
        // Filter gallery items
        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const loadingOverlay = document.getElementById('loadingOverlay');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading overlay
    loadingOverlay.classList.add('show');
    
    // Get form data
    const formData = new FormData(contactForm);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Simulate form submission (replace with actual form submission logic)
    setTimeout(() => {
        // Hide loading overlay
        loadingOverlay.classList.remove('show');
        
        // Show success message
        successMessage.classList.add('show');
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
        
        console.log('Form submitted:', formObject);
    }, 2000);
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .impact-card, .contact-card, .gallery-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Statistics Counter Animation
const statNumbers = document.querySelectorAll('.stat-number, .impact-number');

const countUp = (element, target) => {
    const count = parseInt(target.replace(/[^0-9]/g, ''));
    const increment = count / 100;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= count) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + target.replace(/[0-9]/g, '').replace(/[0-9]/g, '') + '+';
        }
    }, 20);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target.textContent;
            countUp(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// Parallax effect for hero section
const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${parallax}px)`;
    }
});

// Service button interactions
const serviceBtns = document.querySelectorAll('.service-btn');
serviceBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // You can add actual service detail functionality here
        console.log('Service button clicked:', this.parentElement.querySelector('h3').textContent);
    });
});

// Donate button functionality
const donateBtn = document.querySelector('.donate-btn');
donateBtn.addEventListener('click', function() {
    // Add pulse animation
    this.style.animation = 'pulse 0.6s ease-in-out';
    
    setTimeout(() => {
        this.style.animation = '';
    }, 600);
    
    // You can add actual donation functionality here
    alert('Thank you for your interest in supporting our cause! Donation functionality would be implemented here.');
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .service-btn {
        position: relative;
        overflow: hidden;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to page
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Preload images for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const imageUrl = img.src;
        const preloadImage = new Image();
        preloadImage.src = imageUrl;
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        
        // Hide success message if visible
        successMessage.classList.remove('show');
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Handle scroll events here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);