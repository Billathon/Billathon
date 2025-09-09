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
        }
    });
});

// Dark mode toggle
const toggleButton = document.querySelector('.theme-toggle');
const html = document.documentElement;
const icon = toggleButton.querySelector('i');

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    html.setAttribute('data-theme', 'dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-star');
}

toggleButton.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    if (currentTheme === 'light') {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-star');
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-star');
        icon.classList.add('fa-moon');
    }
});
