import Carousel from "./src/components/carousel.js";
import Box from "./src/components/box.js";
import { details } from "./src/details.js";
import { getAddress } from "./src/getAddress.js";
import { validateSignup } from "./src/validate.js";

function initialize() {
  const $galleryContainer = document.querySelector("#gallery .gallery__container");
  const $form = document.querySelector("#formCadastro");
  const $search = document.querySelector(".my-button");
  const $detail = document.querySelector(".section-card__Button");
  const $boxes = document.querySelector(".services__boxes");

  $form.onsubmit = (evt) => {
    evt.preventDefault();
    validateSignup();
  };

  $detail.onclick = details;

  $search.onclick = () => {
    getAddress(document.querySelector(".get-cep").value);
  };

  $boxes.append(
    Box({
      title: "SEMANAL",
      message: `
        Nosso pacote semanal é composto por 10 refeições, contendo 5 almoços e 
        5 jantas, que tornará sua dieta prazerosa, com efeito de saciedade e com
        excelência no sabor. Garantindo uma vida muito mais saudável, com uma
        nutrição acompanhada por um especialista e um baixo teor de carboidratos!
      `,
    })
  );

  $boxes.append(
    Box({
      title: "QUINZENAL",
      message: `
        Nosso pacote semanal é composto por 20 refeições, contendo 10 almoços e 
        10 jantas, que tornará sua dieta prazerosa, com efeito de saciedade e com
        excelência no sabor. Garantindo uma vida muito mais saudável, com uma
        nutrição acompanhada por um especialista e um baixo teor de carboidratos!
      `,
    })
  );

  $boxes.append(
    Box({
      title: "MENSAL",
      message: `
        Nosso pacote semanal é composto por 40 refeições, contendo 20 almoços e 
        20 jantas, que tornará sua dieta prazerosa, com efeito de saciedade e com
        excelência no sabor. Garantindo uma vida muito mais saudável, com uma
        nutrição acompanhada por um especialista e um baixo teor de carboidratos!
      `,
    })
  );

  $galleryContainer.append(
    Carousel({
      images: [
        { source: "src/images/prato1.jpg", description: "image1" },
        { source: "src/images/prato2.jpg", description: "image2" },
        { source: "src/images/prato3.jpg", description: "image3" },
        { source: "src/images/prato4.jpg", description: "image4" },
        { source: "src/images/prato5.jpg", description: "image5" },
        { source: "src/images/prato6.jpg", description: "image6" },
        { source: "src/images/prato7.jpg", description: "image7" },
        { source: "src/images/prato8.jpg", description: "image8" },
      ],
    })
  );
}

window.addEventListener("load", initialize);
