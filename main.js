function openPopup() {
  document.getElementById('demat-registration-popup').style.display = 'block';
  document.getElementById('background-blur').style.display = 'block';
}

function closePopup() {
  document.getElementById('demat-registration-popup').style.display = 'none';
  document.getElementById('background-blur').style.display = 'none';
}

// Close the popup if the user clicks outside of it
window.onclick = function (event) {
  var popup = document.getElementById('demat-registration-popup');
  var blur = document.getElementById('background-blur');
  if (event.target == blur) {
    popup.style.display = 'none';
    blur.style.display = 'none';
  }
}

function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}


//sliding the text
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



