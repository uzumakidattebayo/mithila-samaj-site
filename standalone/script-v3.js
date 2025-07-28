// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const body = document.body;

function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icons
    updateThemeIcons(newTheme);
}

function updateThemeIcons(theme) {
    const icon = theme === 'dark' ? 'fa-sun' : 'fa-moon';
    const desktopIcon = themeToggle.querySelector('i');
    const mobileIcon = mobileThemeToggle.querySelector('i');
    
    desktopIcon.className = `fas ${icon}`;
    mobileIcon.className = `fas ${icon}`;
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcons(savedTheme);

// Add event listeners
themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
let isMobileMenuOpen = false;

function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    mobileNav.classList.toggle('active', isMobileMenuOpen);
    
    const icon = mobileMenuBtn.querySelector('i');
    icon.className = isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars';
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on links
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMobileMenuOpen) {
            toggleMobileMenu();
        }
    });
});

// Hero Slider Functionality
const heroTitle = document.getElementById('heroTitle');
const heroSubtitle = document.getElementById('heroSubtitle');
const heroCta = document.getElementById('heroCta');
const indicators = document.querySelectorAll('.indicator');

const slides = [
    {
        title: "MITHILA SAMAJ BIKASH MANCH",
        subtitle: "EMPOWERING COMMUNITIES FOR SUSTAINABLE DEVELOPMENT",
        buttonText: "BECOME OUR MEMBER"
    },
    {
        title: "KNOW",
        subtitle: "OUR VISION & GOALS",
        buttonText: "ABOUT US"
    },
    {
        title: "GET CONNECTED",
        subtitle: "TO OUR UPCOMING EVENTS",
        buttonText: "CONTACT US"
    }
];

let currentSlide = 0;

function updateSlide(slideIndex) {
    const slide = slides[slideIndex];
    
    // Add fade out effect
    heroTitle.style.opacity = '0';
    heroSubtitle.style.opacity = '0';
    heroCta.style.opacity = '0';
    
    setTimeout(() => {
        heroTitle.textContent = slide.title;
        heroSubtitle.textContent = slide.subtitle;
        heroCta.textContent = slide.buttonText;
        
        // Fade in
        heroTitle.style.opacity = '1';
        heroSubtitle.style.opacity = '1';
        heroCta.style.opacity = '1';
    }, 300);
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === slideIndex);
    });
    
    currentSlide = slideIndex;
}

// Auto-advance slides
function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    updateSlide(nextIndex);
}

// Set up auto-advance
let slideInterval = setInterval(nextSlide, 5000);

// Add click handlers to indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        clearInterval(slideInterval);
        updateSlide(index);
        slideInterval = setInterval(nextSlide, 5000);
    });
});

// Smooth scrolling for navigation links
function smoothScroll(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Add smooth scrolling to all navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelector('input[type="text"]:nth-child(3)').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .event-card, .gallery-item, .stat');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
        }
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.service-card, .event-card, .gallery-item, .stat');
    
    elements.forEach(element => {
        element.style.transform = 'translateY(30px)';
        element.style.opacity = '0';
        element.style.transition = 'all 0.6s ease-out';
    });
}

// Gallery lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
    img.addEventListener('click', function() {
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            cursor: pointer;
        `;
        
        const lightboxImg = document.createElement('img');
        lightboxImg.src = this.src;
        lightboxImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 0.5rem;
        `;
        
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);
        
        // Close lightbox on click
        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
        
        // Close lightbox on escape key
        document.addEventListener('keydown', function escapeHandler(e) {
            if (e.key === 'Escape') {
                if (document.body.contains(lightbox)) {
                    document.body.removeChild(lightbox);
                }
                document.removeEventListener('keydown', escapeHandler);
            }
        });
    });
});

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector('.header');
const topBar = document.querySelector('.top-bar');

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove scrolled class for styling
    if (scrollTop > 100) {
        header.classList.add('scrolled');
        if (topBar) topBar.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        if (topBar) topBar.classList.remove('scrolled');
    }
    
    // Animate elements on scroll
    animateOnScroll();
    
    lastScrollTop = scrollTop;
}

// Event listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
    initScrollAnimations();
    animateOnScroll();
});

// Add CSS for scroll effects
const style = document.createElement('style');
style.textContent = `
    .header.scrolled {
        top: 0 !important;
        background: rgba(255, 255, 255, 0.98) !important;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        padding-top: 2.5rem;
    }
    
    .header.scrolled .header-content {
        padding-top: 0.5rem;
    }
    
    .top-bar.scrolled {
        display: none !important;
    }
    
    [data-theme="dark"] .header.scrolled {
        background: rgba(15, 23, 42, 0.98) !important;
    }
    
    @media (max-width: 767px) {
        .header.scrolled {
            padding-top: 0;
        }
    }
    
    .hero-title, .hero-subtitle, .hero-cta {
        transition: opacity 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);

// Donate button functionality
const donateBtns = document.querySelectorAll('.donate-btn, .mobile-donate-btn');
donateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Thank you for your interest in donating! Please contact us for donation details.');
    });
});

// Story card interactions
const storyCtas = document.querySelectorAll('.story-btn');
storyCtas.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const cardText = btn.parentElement.querySelector('h3').textContent;
        
        if (cardText.includes('Story')) {
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        } else if (cardText.includes('Goals')) {
            document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
        } else if (cardText.includes('Members')) {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('Mithila Samaj Bikash Manch website loaded successfully!');