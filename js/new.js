// Testimonial Slideshow
let testimonialSlideIndex = 0;
function showTestimonialSlides(n) {
    const slides = document.querySelectorAll('.testimonial-slide');
    testimonialSlideIndex = (n + slides.length) % slides.length;

    slides.forEach(slide => {
        slide.style.transform = `translateX(-${testimonialSlideIndex * 100}%)`;
    });
}

function plusTestimonialSlides(n) {
    showTestimonialSlides(testimonialSlideIndex + n);
}

document.addEventListener("DOMContentLoaded", function() {
    showTestimonialSlides(0); // Initialize the first set of testimonials
});