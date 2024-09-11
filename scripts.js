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
    const name = form.elements['name'].value.trim();
    const number = form.elements['number'].value.trim();
    const message = form.elements['message'].value;
    const phonePattern = /^\+?\d{1,4}?[-.\s]?(\(?\d{1,3}?\)|\d{1,4})[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (!name || !number || !message) {
        alert('Please fill in all fields.');
        return;
    }
    if (!phonePattern.test(number)) {
        alert('Please enter a valid phone number.');
        return;
    }
    alert('Message sent successfully!');
    form.reset();
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links-visible');
});

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

    function showSlide1() {
        const images = slides[0].querySelectorAll('img');
        images[0].style.opacity = '1';
        images[1].style.opacity = '1';
        setTimeout(() => {
            images[0].style.opacity = '0';
            images[1].style.opacity = '1';
        }, 2500);
    }

    function showSlide2() {
        const images = slides[1].querySelectorAll('img');
        images[0].style.opacity = '1';
        images[1].style.opacity = '1';
        setTimeout(() => {
            images[0].style.opacity = '1';
            images[1].style.opacity = '0';
        }, 2500);
    }

    function showSlide3() {
        const images = slides[2].querySelectorAll('img');
        images[0].style.opacity = '1';
        images[1].style.opacity = '1';
        setTimeout(() => {
            images[0].style.opacity = '0';
            images[1].style.opacity = '1';
        }, 2500);
    }

    function nextSlide() {
        slides[currentSlide].querySelectorAll('img').forEach(img => img.style.opacity = '0');
        currentSlide = (currentSlide + 1) % slides.length;
        switch(currentSlide) {
            case 0: showSlide1(); break;
            case 1: showSlide2(); break;
            case 2: showSlide3(); break;
        }
    }

    showSlide1();
    setInterval(nextSlide, 5000);
});
