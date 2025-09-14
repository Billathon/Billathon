// Debug: Log when script loads
console.log('script.js loaded');

// Initialize AOS
try {
    AOS.init({ duration: 800, once: true });
    console.log('AOS initialized');
} catch (e) {
    console.error('AOS failed to initialize:', e);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        } else {
            console.error('Anchor target not found:', this.getAttribute('href'));
        }
    });
});

// Dark mode toggle
const toggleButton = document.querySelector('.theme-toggle');
const html = document.documentElement;

if (toggleButton) {
    // Load saved theme from localStorage
    if (localStorage.getItem('theme') === 'light') {
        html.setAttribute('data-theme', 'light');
    }

    toggleButton.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            console.log('Switched to light theme');
        } else {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            console.log('Switched to dark theme');
        }
    });
} else {
    console.error('Theme toggle button not found');
}

// Auto-rotating testimonial slider
const slides = document.querySelectorAll('.testimonial-slider input[name="slider"]');
let currentSlide = 0;
let isPaused = false;

function nextSlide() {
    if (!isPaused) {
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].checked = true;
        console.log('Slider moved to slide:', currentSlide + 1);
    }
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].checked = true;
    console.log('Slider moved to slide:', currentSlide + 1);
}

if (slides.length > 0) {
    const sliderInterval = setInterval(nextSlide, 5000);

    document.querySelector('.testimonials').addEventListener('mouseenter', () => {
        isPaused = true;
        console.log('Slider paused');
    });

    document.querySelector('.testimonials').addEventListener('mouseleave', () => {
        isPaused = false;
        console.log('Slider resumed');
    });

    document.querySelector('.slider-prev').addEventListener('click', prevSlide);
    document.querySelector('.slider-next').addEventListener('click', nextSlide);
} else {
    console.error('No slider inputs found');
}

// Savings calculator
function calculateSavings() {
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const resultElement = document.getElementById('savings-result');
    if (isNaN(billAmount) || billAmount <= 0) {
        resultElement.textContent = 'Please enter a valid bill amount.';
        console.log('Invalid bill amount entered');
        return;
    }
    const savings = (billAmount * 0.25).toFixed(2);
    resultElement.textContent = `You could save up to $${savings}/month with Billathon!`;
    console.log('Savings calculated:', savings);
}

// Parallax effect
const parallax = document.querySelector('.parallax-bg');
if (parallax) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        parallax.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    });
} else {
    console.error('Parallax element not found');
}

// Sticky CTA visibility
const stickyCta = document.querySelector('.sticky-cta');
const contactSection = document.querySelector('#contact');
if (stickyCta && contactSection) {
    window.addEventListener('scroll', () => {
        const rect = contactSection.getBoundingClientRect();
        stickyCta.style.display = rect.top <= window.innerHeight ? 'none' : 'block';
    });
} else {
    console.error('Sticky CTA or contact section not found');
}
