import createNode from "../helpers/createNode.js";
import repeat from "../helpers/repeat.js";
import styles from "./carousel.css" assert { type: "css" };

document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export default function (options = {}) {
  const { className = '', delay = 5000, images = [] } = options;
  let activeIndex = options.activeIndex || 0;
  const $carousel = createNode('div', {
    className: `carousel ${className}`,
    innerHTML: /* html */ `
      ${repeat(images, (image, index) => {
        return `
          <img 
            src="${image.source}" 
            alt="${image.description}" 
            class="${index === activeIndex ? 'active' : ''}" 
          />
        `;
      })}
    `,
  });

  setInterval(() => {
    const images = $carousel.querySelectorAll("img");

    images[activeIndex].classList.remove("active");

    activeIndex++;

    if (activeIndex >= images.length) {
      activeIndex = 0;
    }

    images[activeIndex].classList.add("active");
  }, delay);

  return $carousel;
}