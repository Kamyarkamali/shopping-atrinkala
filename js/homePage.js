const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;

let interval = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displayeSlide");
    interval = setInterval(nextSlider, 3000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displayeSlide");
  });
  slides[slideIndex].classList.add("displayeSlide");
}

function nextSlider() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlider() {
  clearInterval(interval);
  slideIndex--;
  showSlide(slideIndex);
}
