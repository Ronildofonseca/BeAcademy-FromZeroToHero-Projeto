/**
 * carousel.js
 *
 * Carouse de imagens
 */

let currentImgIndex = 0;

function nextImage(selector, activeClass) {
  const images = document.querySelectorAll(selector);

  images[currentImgIndex].classList.remove(activeClass);

  currentImgIndex++;

  if (currentImgIndex >= images.length) {
    currentImgIndex = 0;
  }

  images[currentImgIndex].classList.add(activeClass);
}

export function startCarousel(options = {}) {
  const { selector, activeClass = "active", delay = 5000 } = options;

  if (selector) {
    setInterval(nextImage, delay, selector, activeClass);
  }
}