document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.sliding-text p');
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove('show');
    slides[currentSlide].classList.add('hide');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove('hide');
    slides[currentSlide].classList.add('show');
  }

  slides[currentSlide].classList.add('show'); // Show the first slide initially

  setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});