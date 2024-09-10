// Smooth Scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form Validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Gather input values
    const name = form.elements['name'].value.trim();
    const number = form.elements['number'].value.trim();
    const message = form.elements['message'].value;

    // Basic phone number validation pattern (USA phone format)
    const phonePattern = /^\+?\d{1,4}?[-.\s]?(\(?\d{1,3}?\)|\d{1,4})[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    // Validate form fields
    if (!name || !number || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Validate phone number format
    if (!phonePattern.test(number)) {
        alert('Please enter a valid phone number.');
        return;
    }

    // If all validations pass
    alert('Message sent successfully!');
    form.reset();
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links-visible');
});

// Close menu on link click (for mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('nav-links-visible');
        }
    });
});

// Slideshow Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let currentImage = 0;
    

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        showImage(0);
    }

    function showImage(n) {
        const images = slides[currentSlide].querySelectorAll('img');
        images[currentImage].classList.remove('active');
        currentImage = (n + images.length) % images.length;
        images[currentImage].classList.add('active');
    }

    function nextSlide() {
        if (currentImage === 0) {
            showImage(1);
        } else {
            showSlide(currentSlide + 1);
        }
    }

    // Initialize the slideshow
    showSlide(0);

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});

// Slideshow Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let currentImage = 0;
    

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        showImage(0);
    }

    function showImage(n) {
        const images = slides[currentSlide].querySelectorAll('img');
        images[currentImage].classList.remove('active');
        currentImage = (n + images.length) % images.length;
        images[currentImage].classList.add('active');
    }

    function nextSlide() {
        if (currentImage === 0) {
            showImage(1);
        } else {
            showSlide(currentSlide + 1);
        }
    }

    // Initialize the slideshow
    showSlide(0);

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});
