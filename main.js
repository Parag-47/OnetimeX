AOS.init();
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const search_bar = document.querySelector(".search-bar");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
  search_bar.classList.toggle("search-bar-hidden");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');

function showNextImage() {
  images[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = index;
    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  });
});




