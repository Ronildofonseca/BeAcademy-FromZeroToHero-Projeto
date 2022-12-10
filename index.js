// import Box from "./scripts/components/box.js";
import { startCarousel } from "./scripts/components/carousel.js";
import { details } from "./scripts/details.js";
import { getAddress } from "./scripts/getAddress.js";
import { validateSignup } from "./scripts/validate.js";

function initialize() {
  const $submit = document.querySelector("#formCadastro button[type=submit]");
  const $search = document.querySelector(".my-button");
  const $detail = document.querySelector(".simuladorButton");

  $submit.onclick = (evt) => {
    evt.preventDefault();
    validateSignup();
  };

  $detail.onclick = () => {
    details();
  };

  $search.onclick = () => {
    getAddress(document.querySelector(".get-cep").value);
  };

  // Box(Pacote.SEMANAL)
  // Box(Pacote.QUINZENAL)
  // Box(Pacote.MENSAL)

  startCarousel({ selector: ".banner-image img" });
}

window.addEventListener("load", initialize);