// script.js
let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let slideInterval = setInterval(showSlides, 3000); // Change image every 3 seconds

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'out');
        slide.style.display = 'none';
    });
    
    slides[slideIndex].style.display = 'block';
    slides[slideIndex].classList.add('active');
    
    slideIndex = (slideIndex + 1) % slides.length;
    
    slides[slideIndex].style.display = 'block';
    slides[slideIndex].classList.add('out');
}
