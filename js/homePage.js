const slides = document.querySelectorAll(".slides img");
const carousel = document.getElementById("product-carousel");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

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

let currentIndex = 0; // موقعیت فعلی
const itemWidth = 232; // عرض هر محصول + فاصله بین محصولات
const totalItems = carousel.children.length;

carousel.style.transition = "transform 0.3s ease-in-out"; // حرکت نرم

btnRight.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0; // بازگشت به ابتدا
    carousel.style.transition = "none"; // حذف انیمیشن برای تغییر سریع
    carousel.style.transform = `translateX(0px)`;
    setTimeout(() => {
      carousel.style.transition = "transform 0.3s ease-in-out"; // بازگردانی انیمیشن
    }, 50); // زمان کوتاهی برای اعمال تغییر
  } else {
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});

btnLeft.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1; // بازگشت به انتها
    carousel.style.transition = "none"; // حذف انیمیشن برای تغییر سریع
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    setTimeout(() => {
      carousel.style.transition = "transform 0.3s ease-in-out"; // بازگردانی انیمیشن
    }, 50); // زمان کوتاهی برای اعمال تغییر
  } else {
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});
