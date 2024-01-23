const slides = document.querySelector('.slider .slides');  
const images = slides.querySelectorAll('img');  
 
let currentSlide = 0;

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

function prevSlide() {
  images[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  images[currentSlide].classList.add('active');
  scrollCarousel();
}

function nextSlide() {
  images[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % images.length;
  images[currentSlide].classList.add('active');
  scrollCarousel();
}

function scrollCarousel() {
  const slideWidth = images[currentSlide].getBoundingClientRect().width;
  const slideMargin = parseInt(getComputedStyle(images[currentSlide]).marginLeft);
  const offset = (slideWidth + slideMargin) * currentSlide;
  slides.scrollTo({
    left: offset,
    behavior: 'smooth'
  });
}

images[currentSlide].classList.add('active');
scrollCarousel();
